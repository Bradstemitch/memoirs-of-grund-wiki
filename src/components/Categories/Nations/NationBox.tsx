import React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled } from '@mui/material';

interface CreatureBoxProps {
    width: string,
    height: string,
    roleplaySystem: string,
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


function NationBox(props: CreatureBoxProps) {
    const [value, setValue] = React.useState("Overview");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    let nation = props.nation
    let error = false
    // try {
    //     nation = require(`../../../data/nations/${props.nation.fileName}.json`);
    // } catch (e) {
    //     error = true
    // }

    let emblem
    try {
        emblem = require("/src/images/" + nation.emblem);
    } catch (e) {
        emblem = require(`../../../images/zzz.png`);
    }

    // return (
    // );

    return (
        <div style={{ 'width': props.width, 'height': props.height }}>
            <div style={{
                'float': 'right',
                'width': '340px',
                'paddingLeft': '20px',
            }}>

                <table style={{
                    // 'border': 'solid',
                    'width': '340px',

                }}>
                    <tr>
                        <th colSpan={2}>
                            <img src={emblem}
                                style={{
                                    'width': '250px',
                                    'height': 'auto',
                                    'display': 'inline-block'
                                }}
                            >
                            </img>
                        </th>
                    </tr>
                    {nation.info.basic.variations.length +
                        nation.info.basic.government.length +
                        nation.info.basic.status.length +
                        nation.info.basic.ruler.length +
                        nation.info.basic.founded.length +
                        nation.info.basic.area.length +
                        nation.info.basic.population.length > 0 && <>
                            <tr>
                                <th colSpan={2}> Basic Information </th>
                            </tr>
                            {nation.info.basic.variations.length > 0 && InfoRow("Variations", nation.info.basic.variations)}
                            {nation.info.basic.government.length > 0 && InfoRow("Government", nation.info.basic.government)}
                            {nation.info.basic.status.length > 0 && InfoRow("Status", nation.info.basic.status)}
                            {nation.info.basic.ruler.length > 0 && InfoRow("Ruler", nation.info.basic.ruler)}
                            {nation.info.basic.founded.length > 0 && InfoRow("Founded", nation.info.basic.founded)}
                            {nation.info.basic.area.length > 0 && InfoRow("Area", nation.info.basic.area)}
                            {nation.info.basic.population.length > 0 && InfoRow("Population", nation.info.basic.population)}
                        </>
                    }

                    {nation.info.government.headOfState.length +
                        nation.info.government.headOfGovernment.length +
                        nation.info.government.commander.length +
                        nation.info.government.military.length +
                        nation.info.government.intelligence.length > 0 &&
                        <>
                            <tr>
                                <th colSpan={2}> Government Information </th>
                            </tr>
                            {nation.info.government.headOfState.length > 0 && InfoRow("Head of State", nation.info.government.headOfState)}
                            {nation.info.government.headOfGovernment.length > 0 && InfoRow("Head of Government", nation.info.government.headOfGovernment)}
                            {nation.info.government.commander.length > 0 && InfoRow("Commander", nation.info.government.commander)}
                            {nation.info.government.military.length > 0 && InfoRow("Military", nation.info.government.military)}
                            {nation.info.government.intelligence.length > 0 && InfoRow("Intelligence Service", nation.info.government.intelligence)}
                        </>
                    }

                    {nation.info.social.capital.length +
                        nation.info.social.language.length +
                        nation.info.social.demonym.length +
                        nation.info.social.currency.length +
                        nation.info.social.religion.length > 0 &&
                        <>
                            <tr>
                                <th colSpan={2}> Social Information </th>
                            </tr>
                            {nation.info.social.capital.length > 0 && InfoRow("Capital", nation.info.social.capital)}
                            {nation.info.social.language.length > 0 && InfoRow("Language", nation.info.social.language)}
                            {nation.info.social.demonym.length > 0 && InfoRow("Demonym", nation.info.social.demonym)}
                            {nation.info.social.currency.length > 0 && InfoRow("Currency", nation.info.social.currency)}
                            {nation.info.social.religion.length > 0 && InfoRow("Religion", nation.info.social.religion)}
                        </>
                    }
                </table>
            </div>

            <h2>{props.nation.name}</h2>
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
                    {nation.summary}
                    <h3>
                        Notable {nation.info.social.demonym}s
                    </h3>

                    <h3>
                        Locations
                    </h3>
                    <h3>
                        Trivia
                    </h3>
                </TabPanel>
                <TabPanel value={"History"}>
                    <h3>
                        History
                    </h3>
                </TabPanel>
                <TabPanel value={"Society"}>
                    <h3>
                        Society
                    </h3>
                </TabPanel>
                <TabPanel value={"Culture"}>
                    <h3>
                        Culture
                    </h3>
                </TabPanel>
                <TabPanel value={"Economy"}>
                    <h3>
                        Economy and Trade
                    </h3>
                </TabPanel>
                <TabPanel value={"Emblems"}>
                    <h3>
                        National Emblems
                    </h3>
                </TabPanel>
                <TabPanel value={"Notables"}>
                    <h3>
                        Notable {nation.info.social.demonym}s
                    </h3>
                </TabPanel>
                <TabPanel value={"Locations"}>
                    <h3>
                        Locations
                    </h3>
                </TabPanel>
                <TabPanel value={"Trivia"}>
                    <h3>
                        Trivia
                    </h3>
                </TabPanel>

            </TabContext>
            <br />
            Tags: {props.nation.tags}
        </div >
    );
}

function InfoRow(RowType: string, data: any) {
    return (
        <tr>
            <td style={{ 'width': '100px', 'textAlign': 'right' }}>
                <strong>
                    {RowType}
                </strong>
            </td>
            <td>
                {data
                    .map((x: any) =>
                        <div>
                            {x}
                        </div>
                    )}
            </td>
        </tr>
    )
}

export default NationBox;
