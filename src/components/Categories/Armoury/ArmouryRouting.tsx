import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import ArmouryItem from './ArmouryItem';
import { ArmouryList } from '../../../data/ArmouryList';

const types = ['Wondrous Item']
const Rarity = ['Rare']

function ArmouryRouting(props: any) {
    return (
        <Routes>
            <Route path='/' element={
                <div>
                    <Outlet />
                </div>
            }>

                <Route index element={
                    <div>
                        <h2>Armoury</h2>
                        {/* {types.map(type => (
                            <>
                                <div>{type}s</div> */}
                        {ArmouryList.map(item => {
                            return (
                                // <li key={creature.fileName + '-creaturePage-li'}>
                                <Link
                                    key={item.fileName + '-armouryPage-Link'}
                                    to={`/armoury/${item.fileName}`}
                                >
                                    <button>
                                        {item.name}
                                    </button>
                                </Link>
                                // </li>
                            )
                        })}
                        <br />
                        {/* </>
                        ))} */}
                    </div>
                } />

                {ArmouryList.map(item => {
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

export default ArmouryRouting;
