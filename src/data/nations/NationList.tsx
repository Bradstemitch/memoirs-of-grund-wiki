import { AcreList } from "./nationList/acre/Acre";
import { AkitsudoList } from "./nationList/akitsudo/Akitsudo";
import { AllaireList } from "./nationList/allaire/Allaire";
import { ArcadiaList } from "./nationList/arcadia/Arcadia";
import { BrytthList } from "./nationList/brytth/Brytth";
import { CaletheanList } from "./nationList/caleth/Caleth";
import { CarnaList } from "./nationList/carna/Carna";
import { FomoireList } from "./nationList/fomoire/Fomoire";
import { GoblinEmpireList } from "./nationList/goblin/GoblinEmpire";
import { GolList } from "./nationList/Gol/Gol";
import { KrasaheimList } from "./nationList/krasaheim/Krasaheim";
import { MessarList } from "./nationList/messar/Messar";
import { MycenaeList } from "./nationList/mycenae/Mycenae";
import { SylvanList } from "./nationList/sylvan/Sylvan";

export const NationList = [
  ...AcreList,
  ...AkitsudoList,
  ...AllaireList,
  ...ArcadiaList,
  ...BrytthList,
  ...CaletheanList,
  ...CarnaList,
  ...FomoireList,
  ...GoblinEmpireList,
  ...GolList,
  ...KrasaheimList,
  ...MessarList,
  ...MycenaeList,
  // {
  //   'name': 'Nagra',
  //   'fileName': 'nagra',
  //   'type': 'Empire',
  //   'tags': ['Nagra']
  // },
  ...SylvanList,
]