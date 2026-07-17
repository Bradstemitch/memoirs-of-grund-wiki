import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import CreatureBox from './Creature/CreatureBox';
import { CreatureList } from '../../data/_CreatureList';
import WikiPageBuilder from './wikiPage';

const creatureTypes = ['Human', 'Elf']

function CreaturesRouting(props: any) {
    return (
        <Routes>
            <Route path='/' element={
                <div>
                    <Outlet />
                </div>
            }>

                <Route index element={
                    <div>
                        <h2>Creatures</h2>
                        {creatureTypes.map((creatureType: any) => {
                            return (
                                <div key={creatureType + '-creaturesRouting-creatureType-div'}>
                                    <h3 key={creatureType + '-creaturesRouting-creatureType-header'}>
                                        {creatureType}
                                    </h3>
                                    {CreatureListGen(CreatureList.filter((i: any) => (i.tags!.some((e: any) => creatureType == e))))}
                                </div>
                            )
                        })}
                    </div>
                } />

                {CreatureList.map(creature => {
                    return (
                        <Route
                            key={creature.fileName + '-creaturesRouting-creature-Route'}
                            path={creature.fileName}
                            element={
                                <WikiPageBuilder
                                    key={creature.fileName + '-creaturesRouting-creature-CreatureBox'}
                                    width={'100%'} height={'auto'}
                                    roleplaySystem={props.roleplaySystem}
                                    context={creature}
                                />}
                        />
                    )
                })}
            </Route>
        </Routes>


    );
}

function CreatureListGen(creatureList: any) {
    return (
        <>
            {creatureList.map((creature: any) =>
                <>
                    <Link
                        key={creature.fileName + '-creaturesRouting-creature-Link'}
                        to={`/creatures/${creature.fileName}`}
                    >
                        <button key={creature.fileName + '-creaturesRouting-creature-Button'}>
                            {creature.name} {creature.weapon !== '' ? `(${creature.weapon})` : ''}
                        </button>
                    </Link>
                    {' '}
                </>

            )}
        </>
    )
}

export default CreaturesRouting;
