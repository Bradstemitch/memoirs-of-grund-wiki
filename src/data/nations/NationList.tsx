import { ArcadianRepublicList } from "./nationList/ArcadianRepublic";
import { FomóiriClansList } from "./nationList/FomóiriClans";
import { GoblinEmpireList } from "./nationList/GoblinEmpire";
import { KrasaheimList } from "./nationList/Krasaheim";
import { MessanHeptarchyList } from "./nationList/MessanHeptarchy";

export const NationList = [
  {
    'name': 'Acre',
    'fileName': 'acre',
    'type': 'Kingdom',
    'tags': ['Acre']
  },
  {
    'name': 'Akitsudo',
    'fileName': 'akitsudo',
    'type': 'Kingdom',
    'tags': ['Akitsudo']
  },
  {
    'name': 'Allairan Empire',
    'fileName': 'allaire',
    'type': 'Empire',
    'tags': ['Allaire']
  },
  ...ArcadianRepublicList,
  {
    'name': 'Kingdom of Brytth',
    'fileName': 'brytth',
    'type': 'Kingdom',
    'tags': ['Brytth']
  },
  {
    'name': 'Calethean Empire',
    'fileName': 'caleth',
    'type': 'Empire',
    'tags': ['Caleth']
  },
  {
    'name': 'Senātus Populusque Cārnānus',
    'fileName': 'carna',
    'type': 'Kingdom',
    'tags': ['Carna']
  },
  ...FomóiriClansList,
  ...GoblinEmpireList,
  {
    'name': 'Gol',
    'fileName': 'gol',
    'type': 'Tribal',
    'tags': ['Gol']
  },
  ...KrasaheimList,
  ...MessanHeptarchyList,
  {
    'name': 'Mycenaean League',
    'fileName': 'mycenaeanLeague',
    'type': 'Empire',
    'tags': ['Mycenae']
  },
  {
    'name': 'Nagra',
    'fileName': 'nagra',
    'type': 'Empire',
    'tags': ['Nagra']
  },
  {
    'name': 'Sylvan Realms',
    'fileName': 'sylvan',
    'type': 'Tribal',
    'tags': ['Sylvan']
  }
]