import React, { Fragment } from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import CreatureBox from './Creature/CreatureBox';
import { CreatureList } from '../../data/_CreatureList';
import WikiPageBuilder from './wikiPage';
import { Table, TableRow, TableCell, TableBody } from '@mui/material';
import { ArmouryListMagic } from '../../data/_ArmouryList';
import { ARMOURY_Core } from '../../data/__DATA_Core';

const creatureTypes = [{ type: `Human`, subtypes: [`Akitsudan Empire`, `Allairan Empire`, `Arcadian Empire`, `Republic of Arcadia`, `Brytthonic Kingdoms`, `S.P.Q.C`, `Fomorian Clans`, `Isle of Krasaheim`, `Messan Heptarchy`, `Mycenaean League`, `Vindictis Confederation`, `Prometheus Initiative`, `Outlaws`,], }, { type: `Elf`, subtypes: [`Alder`, `Drow`, `Sylvan`], }, { type: `Inpw`, }, { type: `Goblin`, subtypes: [`clanless`], }, { type: `Construct`, }, { type: `Dragon`, subtypes: [`High Dragon`], }, { type: `Fey`, subtypes: [`Dryad`], }, { type: `Fiend`, subtypes: [`Vampire`], }, { type: `Giant`, subtypes: [`Ogre`], }, { type: `Monster`, }, { type: `Undead`, subtypes: [`Ghoul`], },
];

const magicItemTypes: any = {
  DnD5e: [
    `Armour`,
    `Potion`,
    `Ring`,
    `Rod`,
    `Scroll`,
    `Staff`,
    `Wand`,
    `Weapon`,
    `Wondrous Item`,
  ],
  Path2e: [`Armour`, `Held Items`, `Runes`, `Shields`, `Weapons`, `Worn Items`],
  WFRP4e: [
    `Armour`,
    `Potion`,
    `Ring`,
    `Rod`,
    `Scroll`,
    `Staff`,
    `Wand`,
    `Weapon`,
    `Wondrous Item`,
  ],
};

function MagicItemsRouting(props: any) {
  const magicItems = Object.values(ARMOURY_Core).filter((i: any) =>
    i.tags.some((e: any) => `Magical` == e)
  );

  return (
    <Routes>
      <Route path="/" element={
        <div>
          <Outlet />
        </div>
      }>

        <Route index element={
          <div>
            <h2>Magic Items</h2>
            <Table size="small" aria-label="purchases">
              <tbody>

                {magicItemTypes[props.roleplaySystem].map((type: string) => {
                  return (
                    <>
                      <TableRow>
                        <TableCell colSpan={2}>
                          <strong> {type} </strong>
                        </TableCell>
                      </TableRow>
                      <TableRow sx={{ '& > .MuiTableCell-root': { borderBottom: `unset`, }, }}>
                        <TableCell>
                          {magicItems.filter((i: any) => i.tags.some((e: any) => type == e))
                            .map((item) => {
                              return (
                                <Link
                                  key={item.fileName + `-creaturePage-Link`}
                                  to={`/magicItems/${item.fileName}`}
                                >
                                  <button>{item.name}</button>
                                </Link>
                              );
                            })}
                        </TableCell>
                      </TableRow>
                    </>
                  );
                })}
              </tbody>
            </Table>
          </div>} />
        {ArmouryListMagic.map((item: any) => {
          return (
            <Route
              key={item.fileName + `-magicItemsPage-Route`}
              path={item.fileName}
              element={
                <WikiPageBuilder
                  key={item.fileName + `-magicItemsPage-CreatureBox`}
                  width={`100%`}
                  height={`auto`}
                  roleplaySystem={props.roleplaySystem}
                  context={item}
                />
              }
            />
          );
        })}
      </Route>
    </Routes>);
}

function MagicItemsListGen(creatureList: any) {
  return (
    <>
      {creatureList.map((creature: any) => (
        <>
          <Link key={creature.fileName + `-creaturesRouting-creature-Link`} to={`/creatures/${creature.fileName}`} >
            <button key={creature.fileName + `-creaturesRouting-creature-Button`} >
              <div>{creature.name}</div>
            </button>
          </Link>{` `}
        </>))}
    </>);
}

export default MagicItemsRouting;
