import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { TimelineList } from '../../../data/TimelineList';
import TimelineBox from './TimelineBox';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
    price: number,
) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    };
}

function TimelineRouting(props: any) {
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
                            Timeline
                        </h2>
                        <React.Fragment>
                            <Table size="small" aria-label="purchases">
                                {TimelineList.map(century => {
                                    return (
                                        <div>
                                            <TableRow style={{ width: '100%' }}>
                                                <TableCell colSpan={2}>
                                                    <strong>
                                                        {century.century}
                                                    </strong>
                                                </TableCell>
                                            </TableRow>
                                            {
                                                century.years.map(year => {
                                                    return (
                                                        <TableRow sx={{ '& > .MuiTableCell-root': { borderBottom: 'unset' } }}>
                                                            <TableCell style={{ minWidth: '65px', textAlign: 'right', verticalAlign: 'top', paddingRight: 0  }}>
                                                                {Math.sqrt(year.year * year.year)}
                                                            </TableCell>
                                                            <TableCell>
                                                                {year.events.map(event => {
                                                                    return (
                                                                        <Table>
                                                                            <TableRow sx={{ '& > .MuiTableCell-root': { borderBottom: 'unset' } }}>
                                                                                <TableCell key={event.fileName + '-timelinePage-li'} style={{ paddingBottom: "5px", paddingTop: 0, paddingLeft: 0 }} >
                                                                                    {event.fileName !== "TODO" ?
                                                                                        < Link
                                                                                            key={event.fileName + '-timelinePage-Link'}
                                                                                            to={`/timeline/${event.fileName}`}
                                                                                        >
                                                                                            {`${event.name}`}
                                                                                        </Link>
                                                                                        : event.name
                                                                                    }
                                                                                </TableCell>
                                                                            </TableRow>
                                                                        </Table>
                                                                    )
                                                                })}
                                                            </TableCell>
                                                        </TableRow>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })}
                            </Table>
                        </React.Fragment>
                    </div>
                } />
            </Route>
        </Routes >
    );
}

//     return (
//         <Routes>
//             <Route path='/' element={
//                 <div>
//                     <Outlet />
//                 </div>
//             }>
//                 <React.Fragment>
//                     <TableRow sx={{ '& > .MuiTableCell-root': { borderBottom: 'unset' } }}>
//                         <TableCell>
//                             <IconButton
//                                 aria-label="expand row"
//                                 size="small"
//                                 onClick={() => setOpen(!open)}
//                             >
//                                 {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//                             </IconButton>
//                         </TableCell>
//                     </TableRow>
//                     <TableRow>
//                         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//                             <Collapse in={open} timeout="auto" unmountOnExit>
//                                 <Box sx={{ margin: 1 }}>
//                                     <Typography variant="h6" gutterBottom component="div">
//                                         History
//                                     </Typography>
//                                     <Table size="small" aria-label="purchases">
//                                         <TableHead>
//                                             <TableRow>
//                                                 <TableCell>Date</TableCell>
//                                                 <TableCell>Customer</TableCell>
//                                                 <TableCell align="right">Amount</TableCell>
//                                                 <TableCell align="right">Total price ($)</TableCell>
//                                             </TableRow>
//                                         </TableHead>
//                                         <TableBody>
//                                             {row.history.map((historyRow) => (
//                                                 <TableRow key={historyRow.date}>
//                                                     <TableCell component="th" scope="row">
//                                                         {historyRow.date}
//                                                     </TableCell>
//                                                     <TableCell>{historyRow.customerId}</TableCell>
//                                                     <TableCell align="right">{historyRow.amount}</TableCell>
//                                                     <TableCell align="right">
//                                                         {Math.round(historyRow.amount * row.price * 100) / 100}
//                                                     </TableCell>
//                                                 </TableRow>
//                                             ))}
//                                         </TableBody>
//                                     </Table>
//                                 </Box>
//                             </Collapse>
//                         </TableCell>
//                     </TableRow>
//                 </React.Fragment>
//             </Route>
//         </Routes>
//     );
// }





//     return (
//         <Routes>
//             <Route path='/' element={
//                 <div>
//                     <Outlet />
//                 </div>
//             }>

//                 <Route index element={
//                     <div>
//                         <h2>
//                             Timeline
//                         </h2>
//                         {TimelineList.map(event => {
//                             if (event.century !== century) {
//                                 century = event.century
//                             }

//                             if (event.year !== year) {
//                                 century = event.century
//                             }
//                             return (
//                                 <li key={event.fileName + '-timelinePage-li'}>
//                                     <Link
//                                         key={event.fileName + '-timelinePage-Link'}
//                                         to={`/timeline/${event.fileName}`}
//                                     >
//                                         {event.year}BA -{event.name}
//                                     </Link>
//                                 </li>
//                             )
//                         })}
//                     </div>
//                 } />

//                 {TimelineList.map(event => (
//                     <Route
//                         key={event.fileName + '-nationsPage-Route'}
//                         path={event.fileName}
//                         element={
//                             <>
//                                 <Outlet />
//                                 <TimelineBox
//                                     key={event.fileName + '-nationsPage-CreatureBox'}
//                                     width={'100%'} height={'auto'}
//                                     rumour={event}
//                                 />
//                             </>
//                         }
//                     />
//                 ))}
//             </Route>
//         </Routes>
//     );
// }

export default TimelineRouting;
