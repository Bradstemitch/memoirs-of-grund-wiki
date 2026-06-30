import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { CreatureList } from '../../../data/creatures/CreatureList';
import CreatureBox from './CreatureBox';
import { creatureTypes } from '../../../data/CategoryList';

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
                        {creatureTypes[props.roleplaySystem].map((creatureType: any) => {
                            const filteredList = CreatureList.filter((i: any) => i.tags!.some((e: any) => e === creatureType.searchCat))
                            const categories: string[] = []
                            const subCategories: string[] = []

                            creatureType.system.forEach((e: any) => {
                                categories.push(e.cat)
                                e.sub.forEach((e: any) => {
                                    subCategories.push(e)
                                })
                            })

                            return (
                                <div key={creatureType.single + '-creaturesRouting-creatureType-div'}>
                                    <h3 key={creatureType.single + '-creaturesRouting-creatureType-header'}>
                                        {creatureType.plural}
                                    </h3>

                                    {CreatureListGen(filteredList
                                        .filter((i: any) =>
                                            !(i.tags!.some((e: any) => categories.includes(e))))
                                    )}

                                    {creatureType.system && creatureType.system.map((system: any) => {
                                        const catFilteredList = filteredList.filter((i: any) => i.tags!.some((e: any) => e === system.cat))
                                        return (
                                            <div>
                                                <div><strong>{system.cat}</strong></div>
                                                {CreatureListGen(catFilteredList
                                                    .filter((i: any) =>
                                                        !(i.tags!.some((e: any) => subCategories.includes(e))))
                                                )}

                                                {system.sub.map((sub: any) =>
                                                    <>
                                                        {sub + ' - '}
                                                        {CreatureListGen(catFilteredList
                                                            .filter((i: any) =>
                                                                i.tags!.some((e: any) => e === sub))
                                                        )}
                                                    </>
                                                )}
                                            </div>
                                        )
                                    })}
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
                                <CreatureBox
                                    key={creature.fileName + '-creaturesRouting-creature-CreatureBox'}
                                    width={'100%'} height={'auto'}
                                    roleplaySystem={props.roleplaySystem}
                                    creature={creature}
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
            {creatureList
                .map((creature: any) =>
                    <>
                        <Link
                            key={creature.fileName + '-creaturesRouting-creature-Link'}
                            to={`/creatures/${creature.fileName}`}
                        >
                            <button key={creature.fileName + '-creaturesRouting-creature-Button'}>
                                {creature.name}
                            </button>
                        </Link>
                        {' '}
                    </>

                )}
        </>
    )
}

export default CreaturesRouting;
