import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { NationList } from '../../../data/nations/_NationList';
import NationBox from './NationBox';
import { nationTypes } from '../../../data/CategoryList';
import NationButton from './NationsButton';

function createNationPages() {
    return (
        <>
            {NationList.map(nation => (
                <Route
                    key={nation.fileName + '-nationsPage-Route'}
                    path={nation.fileName}
                    element={
                        <NationBox
                            key={nation.fileName + '-nationsPage-NationBox'}
                            width={'100%'} height={'auto'}
                            nation={nation}
                        />}
                />
            ))}
        </>
    )

}

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
                        {nationTypes.map((nationType: any) => {
                            return (
                                <>
                                    <div>{nationType.plural}</div>
                                    <span>
                                        {NationList.filter(e => e.info && e.info.basic).filter(nation => nation.info.basic.status === nationType.type).map(nation => {
                                            return (
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
                                            )
                                        })}
                                    </span>
                                    <br />
                                </>
                            )
                        })}
                    </div>
                } />
                {createNationPages()}
            </Route>
        </Routes>
    );
}

export default NationsRouting;
