import React, { Fragment } from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { CreatureList } from '../../data/_CreatureList';
import WikiPageBuilder from './wikiPage';
import { Table, TableRow, TableCell, TableBody } from '@mui/material';

const creatureTypes = [{ type: `Human`, subtypes: [`Akitsudan Empire`, `Allairan Empire`, `Arcadian Empire`, `Republic of Arcadia`, `Brytthonic Kingdoms`, `S.P.Q.C`, `Fomorian Clans`, `Isle of Krasaheim`, `Messan Heptarchy`, `Mycenaean League`, `Vindictis Confederation`, `Prometheus Initiative`, `Outlaws`,], }, { type: `Elf`, subtypes: [`Alder`, `Drow`, `Sylvan`], }, { type: `Inpw`, }, { type: `Goblin`, subtypes: [`clanless`], }, { type: `Construct`, }, { type: `Dragon`, subtypes: [`High Dragon`], }, { type: `Fey`, subtypes: [`Dryad`], }, { type: `Fiend`, subtypes: [`Vampire`], }, { type: `Giant`, subtypes: [`Ogre`], }, { type: `Monster`, }, { type: `Undead`, subtypes: [`Ghoul`], },
];

function CreaturesRouting(props: any) {
  return (<Routes>
    <Route path="/" element={
      <div>
        <Outlet />
      </div>
    } >
      <Route index element={
        <div>
          <h2>Creatures</h2>
          <Table size="small" aria-label="purchases">
            <tbody>
              {creatureTypes.map((creatureType: any) => {
                const withType = CreatureList.filter((i: any) => i.tags!.some((e: any) => creatureType.type == e));
                const noSubtype = creatureType.subtypes && withType.filter((i: any) => !i.tags.some((e: any) => creatureType.subtypes.includes(e))); if (withType.length > 0) {
                  return (
                    <Fragment key={creatureType.type + `-creaturesRouting-creatureType-div`} >
                      <TableRow>
                        <TableCell colSpan={2}>
                          <strong key={creatureType.type + `-creaturesRouting-creatureType-header`} > {creatureType.type} </strong>
                        </TableCell>
                      </TableRow>
                      {((creatureType.subtypes && noSubtype.length > 0) || !creatureType.subtypes) && (
                        <TableRow sx={{ '& > .MuiTableCell-root': { borderBottom: `unset`, }, }} >
                          <TableCell style={{ width: `70px` }} />
                          <TableCell> {creatureType.subtypes ? CreatureListGen(noSubtype) : CreatureListGen(withType)} </TableCell>
                        </TableRow>
                      )}
                      {creatureType.subtypes && creatureType.subtypes.map((subtype: string) => {
                        const creatureBySubtype = withType.filter((i: any) => i.tags!.some((e: any) => subtype == e)); if (creatureBySubtype.length > 0) {
                          return (
                            <TableRow key={subtype + `-creaturesRouting-creatureType-div`} sx={{ '& > .MuiTableCell-root': { borderBottom: `unset`, }, }} >
                              <TableCell style={{ paddingBottom: `20px`, width: `70px`, }} >
                                <strong key={subtype + `-creaturesRouting-creatureType-header`} > {subtype} </strong>
                              </TableCell>
                              <TableCell>{CreatureListGen(creatureBySubtype)}</TableCell>
                            </TableRow>
                          );
                        }
                      })}
                    </Fragment>
                  );
                }
              })}
            </tbody>
          </Table>
        </div>} />
      {CreatureList.map((creature) => {
        return (<Route key={creature.fileName + `-creaturesRouting-creature-Route`} path={creature.fileName} element={
          <WikiPageBuilder key={creature.fileName + `-creaturesRouting-creature-CreatureBox`} width={`100%`} height={`auto`} roleplaySystem={props.roleplaySystem} context={creature} />} />);
      })}
    </Route>
  </Routes>);
}

function CreatureListGen(creatureList: any) {
  return (<> {creatureList.map((creature: any) => (<>
    <Link key={creature.fileName + `-creaturesRouting-creature-Link`} to={`/creatures/${creature.fileName}`} >
      <button key={creature.fileName + `-creaturesRouting-creature-Button`} >
        <div>{creature.name}</div>
      </button>
    </Link>{` `} </>))} </>);
}

export default CreaturesRouting;
