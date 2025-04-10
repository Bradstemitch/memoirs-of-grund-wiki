import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import ArmouryItem from './ArmouryItem';
import { ArmouryList } from '../../../data/ArmouryList';
import { itemTypes } from '../../../data/CategoryList';

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
                        {itemTypes[props.roleplaySystem].map((type: string) => ArmouryLink(type, props.roleplaySystem))}
                    </div>
                } />

                {ArmouryList.map(item => {
                    return (
                        <Route
                            key={item.fileName + '-armouryPage-Route'}
                            path={item.fileName}
                            element={
                                <ArmouryItem
                                    key={item.fileName + '-armouryPage-ArmouryItem'}
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

function ArmouryLink(itemType: string, roleplaySystem: string) {
    return (
        <>
            <div>{itemType}</div>
            {ArmouryList.filter((i: any) => i.type[roleplaySystem] === itemType).map(item =>
                <Link key={item.fileName + '-armouryPage-Link'} to={`/armoury/${item.fileName}`} >
                    <button>
                        {item.name}
                    </button>
                </Link>
            )}
        </>
    )
}

export default ArmouryRouting;
