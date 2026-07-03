import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { NationList } from '../../../data/_NationList';
import NationBox from './NationBox';
import { nationTypes } from '../../../data/CategoryList';
import NationButton from './NationsButton';
import { NATION_Core } from '../../../data/__DATA_Core';
import { Table, TableRow, TableCell } from '@mui/material';

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
                        <Table size="small" aria-label="purchases" key={'-creaturesRouting-creatureType-table'}>
                            <tbody>
                                {nationTypes.map((nationType: any) => {
                                    return (
                                        <>
                                            <TableRow>
                                                <TableCell colSpan={2}>
                                                    <strong>{nationType.plural}</strong>
                                                </TableCell>
                                            </TableRow>

                                            <TableRow sx={{ '& > .MuiTableCell-root': { borderBottom: 'unset' } }}>
                                                <TableCell colSpan={2}>
                                                    {Object.values(NATION_Core).filter((i: any) => (i.tags!.some((e: any) => nationType.type == e))).map(nation => {
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
                                                </TableCell>
                                            </TableRow>
                                            <br />
                                        </>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </div>
                } />
                {createNationPages()}
            </Route>
        </Routes>
    );
}

export default NationsRouting;
