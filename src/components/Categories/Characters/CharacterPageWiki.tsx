import React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

interface CreatureBoxProps {
    width: string,
    height: string,
    roleplaySystem: string,
    character: any
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

function CharacterPage(props: CreatureBoxProps) {
    const [value, setValue] = React.useState("Overview");
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    let nation = props.character
    return (
        <div style={{ 'width': props.width, 'height': props.height }}>
            {nation.info &&
                WikiBar(nation)
            }

            <h2>{`${nation.name.fore} ${nation.name.sur}`}</h2>
            <TabContext value={value}>
                <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                >
                    <StyledTab label={"Overview"} value={"Overview"} />
                    <StyledTab label={"Personality"} value={"Personality"} />
                    <StyledTab label={"History"} value={"History"} />
                    <StyledTab label={"Abilities"} value={"Abilities"} />
                    <StyledTab label={"Items"} value={"Items"} />
                    <StyledTab label={"Relationships"} value={"Relationships"} />
                </TabList >

                <TabPanel value={"Overview"}>

                    {nation.summary && nation.summary.map((x: any) =>
                        <div dangerouslySetInnerHTML={{ __html: x }} />
                    )}

                    <br />

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
                {/* <TabPanel value={"Personality"}>
                    <h3> Personality </h3>
                </TabPanel> */}
            </TabContext>
            <br />
            Tags: {props.character.tags}
        </div >
    );
}

function InfoRow(RowType: string, data: any) {
    return (
        <tr>
            <td style={{
                'width': '100px',
                'textAlign': 'right',
                'paddingRight': '5px',
            }}>
                <div style={{
                    'textAlign': 'right',
                    'padding': '2px',
                }}>
                    <strong> {RowType} </strong>
                </div>
            </td>

            <td style={{ 'padding': '2px', }}>

                {data.map((i: any) => i.name ?
                    <div>
                        <Link
                            key={i.fileName + '-characterPage-Link'}
                            to={`/${i.fileLoc}/${i.fileName}`}
                        >
                            {`${i.name}`}
                        </Link>
                    </div>
                    : i.detail ?
                        <div>{`${i.data.name} (${i.detail})`}</div>
                        :
                        <div> {i} </div>
                )}

            </td>
        </tr>
    )
}

function WikiBar(nation: any) {
    return (
        <div style={{
            'float': 'right',
            'width': '340px',
            'paddingLeft': '20px',
        }}>
            <table style={{
                'width': '340px',
            }}>
                <tbody>
                    <tr>
                        <th colSpan={2}>
                            <img src={nation.emblem}
                                style={{
                                    'width': '250px',
                                }}
                            />
                        </th>
                    </tr>

                    {nation.info.alias && InfoRow("Alias", nation.info.alias)}

                    <tr>
                        <th colSpan={2}> Basic Information </th>
                    </tr>
                    {nation.info.basic.nationality && InfoRow("Nationality", nation.info.basic.nationality)}
                    {nation.info.basic.born && InfoRow("Born", nation.info.basic.born)}
                    {nation.info.basic.status && InfoRow("Status", nation.info.basic.status)}

                    <tr>
                        <th colSpan={2}> Physical Information </th>
                    </tr>
                    {nation.info.physical.species && InfoRow("Species", nation.info.physical.species)}
                    {nation.info.physical.gender && InfoRow("Gender", nation.info.physical.gender)}
                    {nation.info.physical.height && InfoRow("Height", nation.info.physical.height)}
                    {nation.info.physical.hair && InfoRow("Hair", nation.info.physical.hair)}
                    {nation.info.physical.eyes && InfoRow("Eyes", nation.info.physical.eyes)}
                    {nation.info.physical.skin && InfoRow("Skin", nation.info.physical.skin)}

                    <tr>
                        <th colSpan={2}> Personal Information </th>
                    </tr>
                    {nation.info.personal.titles && InfoRow("Title(s)", nation.info.personal.titles)}
                    {nation.info.personal.professions && InfoRow("Professon(s)", nation.info.personal.professions)}
                    {nation.info.personal.affiliations && InfoRow("Affiliations", nation.info.personal.affiliations)}
                    {nation.info.personal.skills && InfoRow("Skills", nation.info.personal.skills)}

                    <tr>
                        <th colSpan={2}> Family Information </th>
                    </tr>
                    {nation.info.family.relatives && InfoRow("Relatives", nation.info.family.relatives)}
                    {nation.info.family.partner && InfoRow("Partner", nation.info.family.partner)}
                    {nation.info.family.children && InfoRow("Children", nation.info.family.children)}
                </tbody>
            </table>
        </div>
    )
}


export default CharacterPage;
