import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import CharacterPage from './CharacterPageWiki';
import { CharacterList } from '../../../data/_CharacterList';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { StyledTab } from '../../../utils/common';
import TabPanel from '@mui/lab/TabPanel';
import { factions } from '../../../data/CategoryList';
import { Table, TableCell, TableRow } from '@mui/material';
import { CHARACTER_Core } from '../../../data/_DATA_Core';

function characterButton(character: any) {
    return (
        <div key={character.fileName + '-creaturePage-Link-div'}>
            <Link
                key={character.fileName + '-creaturePage-Link'}
                to={`/${character.fileLoc}/${character.fileName}`}
            >
                {/* <button style={{ minWidth: "90px", padding: '1px', margin: '2px' }}> */}
                {character.name.fore} {character.name.sur}
                {/* </button> */}
            </Link>
        </div>
    )
}

function CharacterRouting(props: any) {
    const [value, setValue] = React.useState("Affiliation");
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <Routes>
            <Route path='/' element={
                <div>
                    <Outlet />
                </div>
            }>

                <Route index element={
                    <div>
                        <h2>Characters</h2>
                        <TabContext value={value}>
                            <TabList
                                onChange={handleChange}
                                aria-label="lab API tabs example"
                            >
                                <StyledTab label={"Affiliation"} value={"Affiliation"} />
                                <StyledTab label={"None"} value={"None"} />
                            </TabList >

                            <TabPanel value={"Affiliation"}>

                                {factions.map((faction: any) => {
                                    const subCategories: string[] = []
                                    if (faction.subCat) {
                                        faction.subCat.forEach((e: any) => {
                                            subCategories.push(e.searchCat)
                                        })
                                    }
                                    const noSubList = Object.values(CHARACTER_Core).filter((i: any) => !(i.tags!.some((e: any) => subCategories.includes(e))))
                                    return (
                                        <Table size="small" aria-label="purchases" key={faction.single + '-creaturesRouting-creatureType-table'}>
                                            <tbody>
                                                <TableRow>
                                                    <TableCell colSpan={2}>
                                                        <strong key={faction.single + '-creaturesRouting-creatureType-header'}>
                                                            {faction.plural}
                                                        </strong>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow >
                                                    <TableCell style={{ paddingBottom: '20px' }}>
                                                        {noSubList
                                                            .filter((i: any) => (i.tags!.some((e: any) => e === faction.searchCat)))
                                                            .map((character: any) => {
                                                                return (
                                                                    characterButton(character)
                                                                )
                                                            })}

                                                        <Table size="small" key={faction.single + '-creaturesRouting-creatureSubType-table'} >
                                                            <tbody>
                                                                {faction.subCat && faction.subCat.map((system: any) => {
                                                                    const catFilteredList = CharacterList.filter((i: any) => i.tags!.some((e: any) => e === system.searchCat))
                                                                    return (
                                                                        <TableRow key={system.searchCat + '-creaturesRouting-creatureSubType-tableRow'}>
                                                                            <TableCell style={{ minWidth: '65px', width: '90px', textAlign: 'right', verticalAlign: 'top', paddingRight: 0 }}>
                                                                                <strong>{system.plural}</strong>
                                                                            </TableCell>

                                                                            <TableCell>
                                                                                {
                                                                                    catFilteredList.filter((i: any) => i.tags!.some((e: any) => e === system.searchCat)).map((character: any) => {
                                                                                        return (
                                                                                            characterButton(character)
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </TableCell>
                                                                        </TableRow>
                                                                    )
                                                                })}
                                                            </tbody>
                                                        </Table>
                                                    </TableCell>
                                                </TableRow>
                                            </tbody>
                                        </Table>
                                    )
                                })}
                            </TabPanel>

                            <TabPanel value={"None"}>
                                {CharacterList.map(character => {
                                    return (
                                        characterButton(character)
                                    )
                                })}
                            </TabPanel>

                        </TabContext>
                    </div>
                } />

                {CharacterList.map(char => {
                    return (
                        <Route
                            key={char.fileName + '-creaturePage-Route'}
                            path={char.fileName}
                            element={
                                <CharacterPage
                                    key={char.fileName + '-creaturePage-CreatureBox'}
                                    width={'100%'} height={'auto'}
                                    roleplaySystem={props.roleplaySystem}
                                    character={char}
                                />}
                        />
                    )
                })}
            </Route>
        </Routes>
    );
}

export default CharacterRouting;
