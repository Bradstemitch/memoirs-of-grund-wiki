import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { NationList } from '../../data/NationList';

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
                                                key={nation.fileName + '-creaturePage-Link'}
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

                {/* {CreatureList.map(creature => (
                    <Route
                        key={creature.fileName + '-nationsPage-Route'}
                        path={creature.fileName}
                        element={
                            <CreatureBox
                                key={creature.fileName + '-nationsPage-CreatureBox'}
                                width={'100%'} height={'auto'}
                                roleplaySystem={props.roleplaySystem}
                                creature={creature}
                            />}
                    />
                ))} */}
            </Route>
        </Routes>
    );
}

export default NationsRouting;
