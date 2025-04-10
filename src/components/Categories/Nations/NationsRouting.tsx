import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { NationList } from '../../../data/nations/NationList';
import NationBox from './NationBox';
import { nationTypes } from '../../../data/CategoryList';


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
                                            {NationList
                                                .filter(nation => nation.type === nationType.type)
                                                .map(nation =>
                                                    <Link
                                                        key={nation.fileName + '-nationsPage-Link'}
                                                        to={`/nations/${nation.fileName}`}
                                                        style={{
                                                            'paddingLeft': '10px',
                                                            'paddingRight': '10px',
                                                        }}
                                                    >
                                                        {NationBlock(nation)}
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

function NationBlock(nation: any) {
    let emblem
    let error = false
    try {
        emblem = require(`../../../images/${nation.fileName}.png`);
    } catch (e) {
        emblem = require(`../../../images/zzz.png`);
        error = true
    }
    return (
        <div style={{
            'width': '120px',
            'display': 'inline-block',
            'verticalAlign': 'top',
            'textAlign': 'center',
        }}>
            <img src={emblem}
                style={{
                    'width': '100px',
                    'height': 'auto',
                    'display': 'inline-block'
                }}
            >
            </img>
            <p>
                {nation.name}
            </p>
        </div>
    )
}

export default NationsRouting;
