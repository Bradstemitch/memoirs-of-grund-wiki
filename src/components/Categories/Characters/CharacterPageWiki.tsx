import React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link } from 'react-router-dom';
import { InfoRow, StyledTab } from '../../../utils/common';
import { Table, TableCell, TableRow } from '@mui/material';

interface CreatureBoxProps {
    width: string,
    height: string,
    roleplaySystem: string,
    character: any
}

function CharacterPage(props: CreatureBoxProps) {
    const [value, setValue] = React.useState("Overview");
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    let character = props.character
    return (
        <div style={{ 'width': props.width, 'height': props.height }}>
            {character.info &&
                WikiBar(character)
            }

            <h2>{`${character.name.fore} ${character.name.sur}`}</h2>
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
                    {character.summary && <>{character.summary}<br /></>}
                    {character.appearance && <><h3>Appearance</h3><>{character.appearance}</><br /></>}
                    {character.trivia && <><h3>Trivia</h3><>{character.trivia}</><br /></>}
                </TabPanel>

                <TabPanel value={"History"}>
                    <h3> History </h3>
                    {character.history && character.history}
                </TabPanel>

                <TabPanel value={"Personality"}>
                    <h3> Personality </h3>
                    {character.personality && character.personality}
                </TabPanel>
            </TabContext>
            <br />
            Tags: {props.character.tags}
        </div >
    );
}


function WikiBar(nation: any) {
    console.log(nation.info.basic)
    return (
        <div style={{
            'float': 'right',
            'width': '340px',
            'paddingLeft': '20px',
        }}>
            <Table size="small" aria-label="purchases">
                <tbody>
                    <tr>
                        <th colSpan={2}>
                            <img src={nation.imageLoc}
                                style={{
                                    'width': '250px',
                                }}
                            />
                        </th>
                    </tr>

                    {nation.info.alias && InfoRow("Alias", nation.info.alias)}

                    {nation.info.basic.show && <>
                        <TableRow>
                            <TableCell colSpan={2}>
                                <strong>
                                    Basic Information
                                </strong>
                            </TableCell>
                        </TableRow>
                        {nation.info.basic.nationality && InfoRow("Nationality", nation.info.basic.nationality)}
                        {nation.info.basic.status && InfoRow("Status", nation.info.basic.status)}
                        {nation.info.basic.born && InfoRow("Birth", nation.info.basic.born.toString().replace('-','') + (nation.info.basic.born >= 0 ? ` CE`:` BCE`))}
                        {nation.info.basic.died && InfoRow("Death", nation.info.basic.died.toString().replace('-','') + (nation.info.basic.died >= 0 ? ` CE`:` BCE`))}
                    </>
                    }

                    {nation.info.physical.show && <>
                        <TableRow>
                            <TableCell colSpan={2}>
                                <strong>
                                    Physical Information
                                </strong>
                            </TableCell>
                        </TableRow>
                        {nation.info.physical.species && InfoRow("Species", nation.info.physical.species)}
                        {nation.info.physical.gender && InfoRow("Gender", nation.info.physical.gender)}
                        {nation.info.physical.height && InfoRow("Height", nation.info.physical.height)}
                        {nation.info.physical.hair && InfoRow("Hair", nation.info.physical.hair)}
                        {nation.info.physical.eyes && InfoRow("Eyes", nation.info.physical.eyes)}
                        {nation.info.physical.skin && InfoRow("Skin", nation.info.physical.skin)}
                    </>
                    }

                    {nation.info.personal.show && <>
                        <TableRow>
                            <TableCell colSpan={2}>
                                <strong>
                                    Personal Information
                                </strong>
                            </TableCell>
                        </TableRow>
                        {nation.info.personal.titles && InfoRow("Title(s)", nation.info.personal.titles)}
                        {nation.info.personal.professions && InfoRow("Professon(s)", nation.info.personal.professions)}
                        {nation.info.personal.affiliations && InfoRow("Affiliations", nation.info.personal.affiliations)}
                        {nation.info.personal.skills && InfoRow("Skills", nation.info.personal.skills)}
                    </>
                    }

                    {nation.info.family.show && <>
                        <TableRow>
                            <TableCell colSpan={2}>
                                <strong>
                                    Family Information
                                </strong>
                            </TableCell>
                        </TableRow>
                        {nation.info.family.relatives && InfoRow("Relatives", nation.info.family.relatives)}
                        {nation.info.family.partner && InfoRow("Partner", nation.info.family.partner)}
                        {nation.info.family.children && InfoRow("Children", nation.info.family.children)}
                    </>
                    }
                </tbody>
            </Table>
        </div >
    )
}


export default CharacterPage;
