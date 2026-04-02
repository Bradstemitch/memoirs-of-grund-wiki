import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { NationList } from '../../../data/nations/NationList';
import NationBox from './NationBox';
import { nationTypes } from '../../../data/CategoryList';
import NationButton from './NationsButton';

function NationsRouting(props: any) {
    return (
        <Routes>
            <Route path='/' element={
                <div>
                    <Outlet />
                </div>
            }>

                <Route index element={
                    <div>
                        <h2>Nations</h2>
                        {nationTypes
                            .map((nationType: any) => {
                                return (
                                    <>
                                        <div>{nationType.plural}</div>
                                        <span>
                                            {NationList.filter(nation => nation.info.basic.status[0] === nationType.type)
                                                .map(nation =>
                                                    <Link
                                                        key={nation.fileName + '-nationsPage-Link'}
                                                        to={`/nations/${nation.fileName}`}
                                                        style={{
                                                            'paddingLeft': '10px',
                                                            'paddingRight': '10px',
                                                        }}
                                                    >
                                                        {NationButton(nation, 100)}
                                                    </Link>
                                                )}
                                        </span>
                                        <br />
                                    </>
                                )
                            })}
                    </div>
                } />

                {NationList.map(nation => (
                    <Route
                        key={nation.fileName + '-nationsPage-Route'}
                        path={nation.fileName}
                        element={
                            <NationBox
                                key={nation.fileName + '-nationsPage-NationBox'}
                                width={'100%'} height={'auto'}
                                roleplaySystem={props.roleplaySystem}
                                nation={nation}
                            />}
                    />
                ))}
            </Route>
        </Routes>
    );
}

export default NationsRouting;
