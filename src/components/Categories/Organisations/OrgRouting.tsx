import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import OrgBox from './OrgBox';
import { OrgList } from '../../../data/organisations/OrgList';
import OrgButton from './OrgButton';


function OrgRouting(props: any) {
    return (
        <Routes>
            <Route path='/' element={
                <div>
                    <Outlet />
                </div>
            }>

                <Route index element={
                    <div>
                        <h2>Organisations</h2>
                        {/* {nationTypes
                            .map((nationType: any) => {
                                return (
                                    <> */}
                        <span>
                            {OrgList.map(org =>
                                <Link
                                    key={org.fileName + '-orgPage-Link'}
                                    to={`/organisations/${org.fileName}`}
                                    style={{
                                        'paddingLeft': '10px',
                                        'paddingRight': '10px',
                                    }}
                                >
                                    {OrgButton(org, 100)}
                                </Link>
                            )}
                        </span>
                        <br />
                        {/* </>
                                )
                            })} */}
                    </div>
                } />

                {OrgList.map(org => (
                    <Route
                        key={org.fileName + '-orgPage-Route'}
                        path={org.fileName}
                        element={
                            <OrgBox
                                key={org.fileName + '-orgPage-OrgBox'}
                                width={'100%'} height={'auto'}
                                roleplaySystem={props.roleplaySystem}
                                nation={org}
                            />}
                    />
                ))}
            </Route>
        </Routes>
    );
}

export default OrgRouting;
