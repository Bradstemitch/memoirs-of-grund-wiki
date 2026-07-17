import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { ReligionList } from '../../data/ReligionList';
import ReligionBox from './ReligionBox';
import WikiPageBuilder from './wikiPage';

function ReligionsRouting(props: any) {
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
                            Religions
                        </h2>
                        {ReligionList.map(nation => {
                            return (
                                // <li key={creature.fileName + '-creaturePage-li'}>
                                <Link
                                    key={nation.fileName + '-religionsPage-Link'}
                                    to={`/religions/${nation.fileName}`}
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

                {ReligionList.map(rumour => (
                    <Route
                        key={rumour.fileName + '-religionsPage-Route'}
                        path={rumour.fileName}
                        element={
                            <>
                                <Outlet />
                                <WikiPageBuilder
                                    key={rumour.fileName + '-religionsPage-ReligionBox'}
                                    width={'100%'} height={'auto'}
                                    roleplaySystem=''
                                    context={rumour}
                                />
                            </>
                        }
                    />
                ))}
            </Route>
        </Routes>
    );
}

export default ReligionsRouting;
