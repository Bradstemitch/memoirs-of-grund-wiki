import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { NationList } from '../../../data/NationList';
import NationBox from './NationBox';

const nationTypes = ['Empire', 'Kingdom', 'Tribal Rulers', 'City State']

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
                        {nationTypes.map(nationType => {
                            return (
                                <>
                                    <div>{nationType}</div>
                                    {NationList.filter(nation => nation.type === nationType).map(nation => {
                                        return (
                                            // <li key={creature.fileName + '-creaturePage-li'}>
                                            <Link
                                                key={nation.fileName + '-nationsPage-Link'}
                                                to={`/nations/${nation.fileName}`}
                                            >
                                                <button>
                                                    {nation.name}
                                                </button>
                                            </Link>
                                            // </li>
                                        )
                                    })}
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
