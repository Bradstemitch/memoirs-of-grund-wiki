import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { TimelineList } from '../../../data/TimelineList';
import TimelineBox from './TimelineBox';

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
                        {TimelineList.map(event => {
                            return (
                                <li key={event.fileName + '-timelinePage-li'}>
                                    <Link
                                        key={event.fileName + '-timelinePage-Link'}
                                        to={`/timeline/${event.fileName}`}
                                    >
                                        {event.date}BA -{event.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </div>
                } />

                {TimelineList.map(event => (
                    <Route
                        key={event.fileName + '-nationsPage-Route'}
                        path={event.fileName}
                        element={
                            <>
                                <Outlet />
                                <TimelineBox
                                    key={event.fileName + '-nationsPage-CreatureBox'}
                                    width={'100%'} height={'auto'}
                                    rumour={event}
                                />
                            </>
                        }
                    />
                ))}
            </Route>
        </Routes>
    );
}

export default TimelineRouting;
