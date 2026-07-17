import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { magicItemTypes } from '../../../data/CategoryList';
import { ARMOURY_Core } from '../../../data/__DATA_Core';
import { ArmouryListMagic } from '../../../data/_ArmouryList';
import ArmouryItem from '../Armoury/ArmouryItem';
import WikiPageBuilder from '../wikiPage';

function createMagicItemPages(roleplaySystem: string) {
    return (
        <>
            {ArmouryListMagic.map((item: any) => {
                return (
                    <Route
                        key={item.fileName + '-magicItemsPage-Route'}
                        path={item.fileName}
                        element={
                            <WikiPageBuilder
                                key={item.fileName + '-magicItemsPage-CreatureBox'}
                                width={'100%'} height={'auto'}
                                roleplaySystem={roleplaySystem}
                                context={item}
                            />}
                    />
                )
            })}
        </>
    )
}


function MagicItemsRouting(props: any) {
    const magicItems = Object.values(ARMOURY_Core).filter((i: any) => (i.tags.some((e: any) => 'Magical' == e)))
    // Object.values(NATION_Core).filter((i: any) => (i.tags!.some((e: any) => nationType.type == e))).map(nation =>
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
                        {magicItemTypes[props.roleplaySystem].map((type: string) => {
                            return (
                                <>
                                    <div>{type}</div>
                                    {magicItems.filter((i: any) => i.tags.some((e: any) => type == e)).map(item => {
                                        return (
                                            <Link key={item.fileName + '-creaturePage-Link'} to={`/magicItems/${item.fileName}`}>
                                                <button>
                                                    {item.name}
                                                </button>
                                            </Link>
                                        )
                                    })}
                                </>
                            )
                        })}
                    </div>
                } />
                {createMagicItemPages(props.roleplaySystem)}
            </Route>
        </Routes>
    );
}

export default MagicItemsRouting;
