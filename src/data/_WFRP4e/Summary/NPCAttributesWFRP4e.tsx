import { aberrationStatsWFRP4e } from '../stats/aberration';
import { fiendStatsWFRP4e } from '../stats/fiend';
import wfrp4eAttribHumanoid from '../stats/wfrp4eHumanoid';

type characteristics = Record<string, any>;

export const NPCCharacteristics: characteristics = {
  //  WS  BS  S   T   I   AG  Dex Int WP  Fel     Wounds  Move    Fate    Size    Rank
  animal: {
    goblin: [25, 20, 25, 25, 20, 35, 40, 20, 20, 20, 6, 5, 0, 3],
  },
  fey: {
    'black shuck': [40, 50, 40, 40, 50, 40, 50, 40, 40, 30, 16, 5, 0, 4],
    'cú sídhe': [40, 50, 40, 40, 50, 40, 50, 40, 40, 30, 16, 5, 0, 4],
    'young dryad': [40, 50, 40, 40, 50, 40, 50, 40, 40, 30, 16, 5, 0, 4],
    'young dryad treeform': [
      40, 50, 40, 40, 50, 40, 50, 40, 40, 30, 16, 5, 0, 4,
    ],
  },
  giant: {
    giant: [50, 20, 55, 55, 10, 25, 20, 20, 30, 20, 36, 4, 0, 5],
    fomorian: [50, 20, 55, 55, 10, 25, 20, 20, 30, 20, 36, 4, 0, 5],
    ogre: [50, 20, 55, 55, 10, 25, 20, 20, 30, 20, 36, 4, 0, 5],
    oni: [50, 20, 55, 55, 10, 25, 20, 20, 30, 20, 36, 4, 0, 5],
  },
  ...aberrationStatsWFRP4e,
  ...fiendStatsWFRP4e,
  ...wfrp4eAttribHumanoid,
  beast: {
    chicken: [30, 40, 40, 30, 40, 40, 30, 30, 30, 30, 13, 4, 0, 4],
    wolf: [30, 40, 40, 30, 40, 40, 30, 30, 30, 30, 13, 4, 0, 4],
  },
  monster: {
    basilisk: [30, 40, 40, 30, 40, 40, 30, 30, 30, 30, 13, 4, 0, 4],
    chimera: [30, 40, 40, 30, 40, 40, 30, 30, 30, 30, 13, 4, 0, 4],
    gryphon: [30, 40, 40, 30, 40, 40, 30, 30, 30, 30, 13, 4, 0, 4],
    manticore: [30, 40, 40, 30, 40, 40, 30, 30, 30, 30, 13, 4, 0, 4],
    peryton: [30, 40, 40, 30, 40, 40, 30, 30, 30, 30, 13, 4, 0, 4],
  },
};
