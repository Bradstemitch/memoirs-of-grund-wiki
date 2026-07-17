import React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled, Table, TableCell, TableRow } from '@mui/material';
import NationButton from './NationsButton';
import { Link } from 'react-router-dom';
import { WikiBar } from '../../../utils/wiki';

interface NationBoxProps {
    width: string,
    height: string,
    nation: any
}
interface StyledTabProps {
    label: string;
    value: string;
}

const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
))(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(0, 0, 0, 0.7)',
    // '&.Mui-selected': {
    //     color: '#fff',
    // },
    // '&.Mui-focusVisible': {
    //     backgroundColor: 'rgba(100, 95, 228, 0.32)',
    // },
}));

function NationBox(props: NationBoxProps) {
    const [value, setValue] = React.useState("Overview");
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    let nation = props.nation
    return (
        <div style={{ 'width': props.width, 'height': props.height }}>
            {WikiBar(nation)}

            <h2>{nation.name}</h2>
            <TabContext value={value}>
                <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                >
                    <StyledTab label={"Overview"} value={"Overview"} />
                    <StyledTab label={"History"} value={"History"} />
                    <StyledTab label={"Society"} value={"Society"} />
                    <StyledTab label={"Culture"} value={"Culture"} />
                    <StyledTab label={"Economy and Trade"} value={"Economy"} />
                    {/* <StyledTab label={"Notable " + nation.info.social.demonym[0] + "s"} value={"Notables"} /> */}
                    {/* <StyledTab label={"Locations"} value={"Locations"} /> */}
                    {/* <StyledTab label={"Trivia"} value={"Trivia"} /> */}
                </TabList >

                <TabPanel value={"Overview"}>
                    {nation.summary && nation.summary.map((x: any) => <p> {x} </p>)}

                    <br />

                    {nation.notables && nation.notables.length > 0 && <>
                        <h3> Notable {nation.info.social && nation.info.social.demonym}s </h3>

                        {nation.notables.map((x: any) => <>
                            <strong> {x.type} </strong>

                            <div style={{
                                'paddingTop': '10px'
                            }}>
                                {x.list.map((x: any) =>
                                    <div>
                                        {`- `}
                                        <Link
                                            key={x.person.fileName + '-nationsPage-Link'}
                                            to={`/characters/${x.person.fileName}`}
                                        >
                                            {`${x.person.name.fore} ${x.person.name.sur}`}
                                        </Link>
                                        {` (${x.date})`}
                                    </div>
                                )}
                            </div>
                        </>)}
                        <br />
                    </>}

                    {nation.provinces && nation.provinces.length > 0 && <>
                        <h3> Territories, Vassal States and Provinces </h3>

                        {nation.provinces.map((x: any) =>
                            <div style={{
                                'display': 'inline-block',
                                'paddingRight': '20px'
                            }}>
                                <strong>{x.type}</strong>

                                <div style={{
                                    'paddingTop': '10px'
                                }}>
                                    {x.list && x.list.map((x: any) =>
                                        <Link
                                            key={nation.fileName + '-nationsPage-Link'}
                                            to={`/nations/${x.fileName}`}
                                            style={{
                                                'paddingLeft': '10px',
                                                'paddingRight': '10px',
                                            }}
                                        >
                                            {NationButton(x, 80)}
                                        </Link>
                                    )}
                                </div>
                            </div>
                        )}
                        <br />
                    </>}

                    {nation.locations && nation.locations.length > 0 && <>
                        <h3> Locations </h3>

                        {nation.locations.map((x: any) => <>
                            <strong> {x.type} </strong>

                            <div style={{
                                'paddingTop': '10px'
                            }}>
                                {x.type && x.list.map((x: any) =>
                                    //NationButton(x, 80)
                                    <div>
                                        {x.name} ({x.info.social.population})
                                    </div>
                                )}
                            </div>
                        </>)}
                    </>}

                    <h3> Trivia </h3>
                </TabPanel>

                <TabPanel value={"History"}>
                    <h3> History </h3>

                    {nation.history && nation.history.map((x: any) =>
                        <p>
                            <strong>{x.name + " (" + x.date + ")"}</strong>
                            {x.text.map((x: string) => <p> {x} </p>)}
                        </p>
                    )}

                </TabPanel>
                <TabPanel value={"Society"}>
                    <h3> Society </h3>
                </TabPanel>
                <TabPanel value={"Culture"}>
                    <h3> Culture </h3>
                </TabPanel>
                <TabPanel value={"Economy"}>
                    <h3>  Economy and Trade </h3>
                </TabPanel>
                <TabPanel value={"Emblems"}>
                    <h3> National Emblems </h3>
                </TabPanel>
                <TabPanel value={"Notables"}>
                    <h3> Notable {nation.info && nation.info.social && nation.info.social.demonym}s </h3>
                </TabPanel>
                <TabPanel value={"Locations"}>
                    <h3> Locations </h3>
                </TabPanel>
                <TabPanel value={"Trivia"}>
                    <h3> Trivia </h3>
                </TabPanel>
            </TabContext>
            <br />
            Tags: {props.nation.tags}
        </div >
    );
}

export default NationBox;
