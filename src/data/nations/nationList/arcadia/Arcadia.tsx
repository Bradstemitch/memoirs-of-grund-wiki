import { ArcadiaAssereList } from "./ArcadiaAssere";
import { ArcadiaCeresseList } from "./ArcadiaCeresse";
import { ArcadiaCominoList } from "./ArcadiaComino";

const ArcadiaCityStates = [
    ...ArcadiaAssereList,
    ...ArcadiaCeresseList,
    ...ArcadiaCominoList,
]

export const ArcadiaList = [
  // {
  //   'name': 'Republic of Arcadia',
  //   'fileName': 'arcadia',
  //   'type': 'Empire',
  //   'tags': ['Arcadia']
  // },
  ...ArcadiaCityStates,
]