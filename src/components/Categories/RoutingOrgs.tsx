import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import OrgButton from './Organisations/OrgButton';
import WikiPageBuilder from './wikiPage';
import { OrganisationList } from '../../data/_OrgList';
import { ORGANISATION_Core } from '../../data/__DATA_Core';


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
                            {Object.keys(ORGANISATION_Core).map(org =>
                                <Link
                                    key={ORGANISATION_Core[org].fileName + '-orgPage-Link'}
                                    to={`/organisations/${ORGANISATION_Core[org].fileName}`}
                                    style={{
                                        'paddingLeft': '10px',
                                        'paddingRight': '10px',
                                    }}
                                >
                                    
                                    {OrgButton(ORGANISATION_Core[org], 100)}
                                </Link>
                            )}
                        </span>
                        <br />
                        {/* </>
                                )
                            })} */}
                    </div>
                } />

                {OrganisationList.map(org => {
                    return (
                        <Route
                            key={org.fileName + '-orgPage-Route'}
                            path={org.fileName}
                            element={
                                <WikiPageBuilder
                                    key={org.fileName + '-orgPage-OrgBox'}
                                    width={'100%'} height={'auto'}
                                    roleplaySystem={props.roleplaySystem}
                                    context={org}
                                />}
                        />
                    )
                })}
            </Route>
        </Routes>
    );
}

export default OrgRouting;
