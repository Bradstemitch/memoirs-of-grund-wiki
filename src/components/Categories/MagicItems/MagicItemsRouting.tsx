import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import MagicItem from './MagicItem';
import { ArmouryListMagic } from '../../../data/ArmouryList';
import ArmouryItem from '../Armoury/ArmouryItem';
import { magicItemTypes } from '../../../data/CategoryList';

const types = ['Wondrous Item']
const Rarity = ['Rare']

function MagicItemsRouting(props: any) {
    return (
        <Routes>
            <Route path='/' element={
                <div>
                    <Outlet />
                </div>
            }>

                <Route index element={
                    <div>
                        <h2>Magic Items</h2>
                        {magicItemTypes[props.roleplaySystem].map((type: string) =>
                            <>
                                <div>{type}</div>
                                {ArmouryListMagic.filter((i: any) => i.type[props.roleplaySystem] === type).map(item =>
                                    <Link key={item.fileName + '-creaturePage-Link'} to={`/magicItems/${item.fileName}`}>
                                        <button>
                                            {item.name}
                                        </button>
                                    </Link>
                                )}
                            </>
                        )}
                        <br />
                    </div>
                } />

                {ArmouryListMagic.map(item => {
                    return (
                        <Route
                            key={item.fileName + '-nationsPage-Route'}
                            path={item.fileName}
                            element={
                                <ArmouryItem
                                    key={item.fileName + '-nationsPage-CreatureBox'}
                                    width={'100%'} height={'auto'}
                                    roleplaySystem={props.roleplaySystem}
                                    item={item}
                                />}
                        />
                    )
                })}
            </Route>
        </Routes>
    );
}

export default MagicItemsRouting;
