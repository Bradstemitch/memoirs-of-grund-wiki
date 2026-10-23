import { constructAttributes } from "./constructs";
import { dragonAttributes } from "./dragons";
import { fiendAttributes } from "./fiends";
import { humanoidAttributes } from "./humanoids";
import { monsterAttributes } from "./monsters";
import { undeadAttributes } from "./undead";

const attributes: any = {/* { attributes: [Str Dex Con Int Wis Cha]*/
  animal: {},
  aberration: {},
  oldone: {
    devourer:               { attributes: [21, 9, 15, 18, 15, 18,], baseHp: 135, tempHP: null, hpFormula: `18d10 + 36`, speed: 10, cr: 10 }, //
    dweller:                { attributes: [21, 9, 15, 18, 15, 18,], baseHp: 135, tempHP: null, hpFormula: `18d10 + 36`, speed: 10, cr: 10 }, //
    pursuer:                { attributes: [21, 9, 15, 18, 15, 18,], baseHp: 135, tempHP: null, hpFormula: `18d10 + 36`, speed: 10, cr: 10 }, //
    watcher:                { attributes: [10, 14, 18, 17, 15, 17,], baseHp: 190, tempHP: null, hpFormula: `17d12 + 90`, speed: 0, cr: 13 }, //
  },
  scourge: {
    scourgespider:          { attributes: [2, 16, 10, 1, 12, 3,], baseHp: 3, tempHP: null, hpFormula: `1d4`, speed: 30, cr: 0.125 }, //
    scourgespiderswarm:     { attributes: [2, 16, 10, 1, 12, 3,], baseHp: 36, tempHP: null, hpFormula: `8d8`, speed: 30, cr: 0.125 }, //
    scourgehunter:          { attributes: [14, 15, 14, 3, 14, 7,], baseHp: 26, tempHP: null, hpFormula: `4d8 + 8`, speed: 30, cr: 0.25 }, //
    scourgewarrior:         { attributes: [16, 17, 18, 3, 14, 7,], baseHp: 68, tempHP: null, hpFormula: `8d8 + 32`, speed: 30, cr: 3 }, //
    scourgecrawler:         { attributes: [17, 17, 18, 3, 12, 7,], baseHp: 76, tempHP: null, hpFormula: `8d10 + 32`, speed: 30, cr: 4 }, //
    scourgenest:            { attributes: [17, 17, 18, 3, 12, 7,], baseHp: 76, tempHP: null, hpFormula: `8d10 + 32`, speed: 30, cr: 4 }, //
    scourgequeen:           { attributes: [17, 17, 18, 3, 12, 7,], baseHp: 76, tempHP: null, hpFormula: `8d10 + 32`, speed: 30, cr: 4 }, //
  },
  erinys: {
    erinys:                 { attributes: [18, 16, 18, 14, 14, 18,], baseHp: 153, tempHP: null, hpFormula: `18d8 + 72`, speed: 30, cr: 12 }, //
  },
  valkyrie: {
    valkyrie:               { attributes: [18, 18, 18, 17, 20, 20,], baseHp: 136, tempHP: null, hpFormula: `16d8 + 64`, speed: 30, cr: 10 }, //
  },
  fey: {},
  dryad: {
    youngdryad:             { attributes: [14, 11, 14, 10, 10, 10,], baseHp: 26, tempHP: null, hpFormula: `4d8 + 8`, speed: 30, cr: 1 }, //
    youngdryadtreeform:     { attributes: [14, 11, 14, 10, 10, 10,], baseHp: 26, tempHP: null, hpFormula: `4d8 + 8`, speed: 30, cr: 1 }, //
  },
  blackshuck: {
    blackshuck:             { attributes: [14, 11, 14, 10, 10, 10,], baseHp: 26, tempHP: null, hpFormula: `4d8 + 8`, speed: 30, cr: 1 }, //
  },
  cúsídhe: {
    cúsídhe:                { attributes: [14, 11, 14, 10, 10, 10,], baseHp: 26, tempHP: null, hpFormula: `4d8 + 8`, speed: 30, cr: 1 }, //
  },
  giant: {
    giant:                  { attributes: [14, 11, 14, 10, 10, 10,], baseHp: 26, tempHP: null, hpFormula: `4d8 + 8`, speed: 30, cr: 1 }, //
  },
  troll: {
    greytroll:              { attributes: [17, 17, 18,  3, 12,  7,], baseHp: 2766, tempHP: null, hpFormula: `8d10 + 32`, speed: 30, cr: 4 }, //
  },
  fomorian: {
    fomorian:               { attributes: [14, 11, 14, 10, 10, 10,], baseHp: 26, tempHP: null, hpFormula: `4d8 + 8`, speed: 30, cr: 1 }, //
  },
  ogre: {
    ogre:                   { attributes: [14, 11, 14, 10, 10, 10,], baseHp: 26, tempHP: null, hpFormula: `4d8 + 8`, speed: 30, cr: 1 }, //
    oni:                    { attributes: [14, 11, 14, 10, 10, 10,], baseHp: 26, tempHP: null, hpFormula: `4d8 + 8`, speed: 30, cr: 1 }, //
  },
  ...constructAttributes,
  ...dragonAttributes,
  ...fiendAttributes,
  ...humanoidAttributes,
  ...monsterAttributes,
  ...undeadAttributes,
  beast: {
    chicken:                { attributes: [14, 11, 14, 10, 10, 10,], baseHp: 26, tempHP: null, hpFormula: `4d8 + 8`, speed: 30, cr: 1 }, //
    wolf:                   { attributes: [14, 11, 14, 10, 10, 10,], baseHp: 26, tempHP: null, hpFormula: `4d8 + 8`, speed: 30, cr: 1 }, //
  },
};

export const DnD5eNPCCharacteristics = {
  ...attributes
};
