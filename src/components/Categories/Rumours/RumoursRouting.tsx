import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { RumourList } from '../../../data/RumourList';
import RumourBox from './RumourBox';

function RumoursRouting(props: any) {
    return (
        <Routes>
            <Route path='/' element={
                <div>
                    <Outlet />
                </div>
            }>

                <Route index element={
                    <div>
                        <h2>
                            Rumours
                        </h2>
                        {RumourList.map(nation => {
                            return (
                                // <li key={creature.fileName + '-creaturePage-li'}>
                                <Link
                                    key={nation.fileName + '-creaturePage-Link'}
                                    to={`/rumours/${nation.fileName}`}
                                >
                                    <button>
                                        {nation.name}
                                    </button>
                                </Link>
                                // </li>
                            )
                        })}
                    </div>
                } />

                {RumourList.map(rumour => (
                    <Route
                        key={rumour.fileName + '-nationsPage-Route'}
                        path={rumour.fileName}
                        element={
                            <>
                                <Outlet />
                                <RumourBox
                                    key={rumour.fileName + '-nationsPage-CreatureBox'}
                                    width={'100%'} height={'auto'}
                                    rumour={rumour}
                                />
                            </>
                        }
                    />
                ))}
            </Route>
        </Routes>
    );
}

export default RumoursRouting;
