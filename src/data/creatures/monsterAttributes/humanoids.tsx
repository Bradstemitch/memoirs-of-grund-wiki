const attributes: any = {/* { attributes: [Str Dex Con Int Wis Cha]-----baseHp:-------tempHP:---------hpFormula:------------------speed:------cr:*/
  species: {},
  dwarf: { /*                             [ 3   2   3   2   2   0 ]+2   8,14,20,26,32  4,10,16,22,28,40      9,15,21,27,33,29 41 */
    dwarf:                  { attributes: [14, 10, 14, 10, 10,  8,],    baseHp: 26,   tempHP: null,   hpFormula: `4d8 + 8`,       speed: 25,  cr: 0.5 }, //done
    //Heavy Infantry
    mediumInfT1:            { attributes: [14, 10, 16, 10, 10,  8,],    baseHp: 45,   tempHP: null,   hpFormula: `6d8 + 18`,      speed: 25,  cr: 2 }, //
    mediumInfT2:            { attributes: [16, 10, 16, 10, 11,  8,],    baseHp: 60,   tempHP: null,   hpFormula: `8d8 + 24`,      speed: 25,  cr: 3 }, //
    mediumInfT3:            { attributes: [18, 10, 16, 10, 12,  8,],    baseHp: 90,   tempHP: null,   hpFormula: `12d8 + 36`,     speed: 25,  cr: 6 }, //
    mediumInfT4:            { attributes: [20, 10, 16, 10, 14,  8,],    baseHp: 135,  tempHP: null,   hpFormula: `18d8 + 54`,     speed: 25,  cr: 8 }, //
    mediumInfT5:            { attributes: [22, 10, 18, 10, 12, 12,],    baseHp: 221,  tempHP: null,   hpFormula: `26d8 + 104`,    speed: 25,  cr: 14 }, //
    },
  elf: { /*                               [ 2   3   2   2   2   2 ]+3     6,13,20,27, 34 41 */
    darkElfT1:              { attributes: [12, 16, 12, 12, 14, 13,],    baseHp: 33,   tempHP: null,   hpFormula: `6d8 + 6`,       speed: 30,  cr: 1 },
    darkElfT2:              { attributes: [12, 16, 12, 12, 14, 13,],    baseHp: 33,   tempHP: null,   hpFormula: `6d8 + 6`,       speed: 30,  cr: 1 },
    darkElfT3:              { attributes: [12, 16, 12, 12, 14, 13,],    baseHp: 33,   tempHP: null,   hpFormula: `6d8 + 6`,       speed: 30,  cr: 1 },
    darkElfT4:              { attributes: [12, 16, 12, 12, 14, 13,],    baseHp: 33,   tempHP: null,   hpFormula: `6d8 + 6`,       speed: 30,  cr: 1 },
    darkElfT5:              { attributes: [12, 16, 12, 12, 14, 13,],    baseHp: 33,   tempHP: null,   hpFormula: `6d8 + 6`,       speed: 30,  cr: 1 },
    //
    highElfT1:              { attributes: [12, 16, 12, 12, 14, 13,],    baseHp: 33,   tempHP: null,   hpFormula: `6d8 + 6`,       speed: 30,  cr: 1 },
    highElfT2:              { attributes: [12, 16, 12, 12, 14, 13,],    baseHp: 33,   tempHP: null,   hpFormula: `6d8 + 6`,       speed: 30,  cr: 1 },
    highElfT3:              { attributes: [12, 16, 12, 12, 14, 13,],    baseHp: 33,   tempHP: null,   hpFormula: `6d8 + 6`,       speed: 30,  cr: 1 },
    highElfT4:              { attributes: [12, 16, 12, 12, 14, 13,],    baseHp: 33,   tempHP: null,   hpFormula: `6d8 + 6`,       speed: 30,  cr: 1 },
    highElfT5:              { attributes: [12, 16, 12, 12, 14, 13,],    baseHp: 33,   tempHP: null,   hpFormula: `6d8 + 6`,       speed: 30,  cr: 1 },
    elfLord:                { attributes: [14, 14, 15, 16, 15, 15,],    baseHp: 78,   tempHP: null,   hpFormula: `12d8 + 24`,     speed: 30,  cr: 1 },
    /*                                    [ 2   4   2   2   2   2 ]+3     16,21,26,31,41 */
    woodElfT1:              { attributes: [12, 16, 12, 12, 14, 12,],    baseHp: 33,   tempHP: null,   hpFormula: `6d8 + 6`,       speed: 35,  cr: 1 },
    woodElfT2:              { attributes: [12, 18, 14, 12, 14, 12,],    baseHp: 52,   tempHP: null,   hpFormula: `8d8 + 16`,      speed: 35,  cr: 2 },
    woodElfT3:              { attributes: [12, 20, 14, 12, 14, 12,],    baseHp: 78,   tempHP: null,   hpFormula: `12d8 + 24`,     speed: 35,  cr: 4 },
    woodElfT4:              { attributes: [14, 20, 14, 12, 16, 12,],    baseHp: 117,  tempHP: null,   hpFormula: `18d8 + 36`,     speed: 35,  cr: 7 },
    woodElfT5:              { attributes: [14, 22, 16, 12, 16, 12,],    baseHp: 195,  tempHP: null,   hpFormula: `26d8 + 78`,     speed: 35,  cr: 12 },
    // helwr:                  { attributes: [17, 17, 18,  3, 12,  7,],    baseHp: 76,   tempHP: null,   hpFormula: `8d10 + 32`,     speed: 30,  cr: 4 },
  },
  goblin: {
    goblinT1:               { attributes: [ 8,  5, 10, 10,  8,  8,],    baseHp: 7,    tempHP: null,   hpFormula: `2d6`,           speed: 30,  cr: 0.25 }, //done
    goblinT2:               { attributes: [10, 16, 10, 10,  8,  8,],    baseHp: 21,   tempHP: null,   hpFormula: `6d6`,           speed: 30,  cr: 1 }, //done
    goblinClT1:             { attributes: [ 8,  5, 10, 10,  8,  8,],    baseHp: 10,   tempHP: null,   hpFormula: `3d6`,           speed: 30,  cr: 0.5 }, //done
    hobgoblin:              { attributes: [ 8,  5, 10, 10,  8,  8,],    baseHp: 10,   tempHP: null,   hpFormula: `3d6`,           speed: 30,  cr: 0.5 }, //
    hobgoblin_Cap:          { attributes: [ 8,  5, 10, 10,  8,  8,],    baseHp: 10,   tempHP: null,   hpFormula: `3d6`,           speed: 30,  cr: 0.5 }, //
  },
  harpy: {
    harpy:                  { attributes: [17, 17, 18, 3, 12, 7,],      baseHp: 76,   tempHP: null,   hpFormula: `8d10 + 32`,     speed: 30,  cr: 4 },
  },
  inpw: {    // 6,13,20,27, 34 41
    inpwT2:                 { attributes: [16, 14, 14, 14, 16, 14,],    baseHp: 39,   tempHP: null,   hpFormula: `6d8 + 12`,      speed: 30,  cr: 2 },
    inpwT3:                 { attributes: [16, 14, 14, 14, 16, 14,],    baseHp: 65,   tempHP: null,   hpFormula: `10d8 + 20`,     speed: 30,  cr: 3 },
    inpwT4:                 { attributes: [18, 14, 14, 14, 16, 14,],    baseHp: 104,  tempHP: null,   hpFormula: `16d8 + 32`,     speed: 30,  cr: 6 },
    inpwT5:                 { attributes: [18, 14, 14, 14, 16, 14,],    baseHp: 156,  tempHP: null,   hpFormula: `24d8 + 48`,     speed: 30,  cr: 8 },
  },
  roak: {
    roak:                   { attributes: [17, 17, 18,  3, 12,  7,],    baseHp: 76,   tempHP: null,   hpFormula: `8d10 + 32`,     speed: 30,  cr: 4 },
  },
  orc: {
    hunter:                 { attributes: [17, 17, 18,  3, 12,  7,],    baseHp: 76,   tempHP: null,   hpFormula: `8d10 + 32`,     speed: 30,  cr: 4 },
  },
  nuth: {
    nuth:                   { attributes: [17, 17, 18,  3, 12,  7,],    baseHp: 76,   tempHP: null,   hpFormula: `8d10 + 32`,     speed: 30,  cr: 4 },
  },
  werewolf: {
    werewolf:               { attributes: [14, 11, 14, 10, 10, 10],     baseHp: 26,   tempHP: null,   hpFormula: `4d8 + 8`,       speed: 30,  cr: 1 },
  },
  human: { /*                             [ 1   1   1   1   1   1 ]+2     4,10,16,22,28,40*/    
    human:                  { attributes: [10, 10, 10, 10, 10, 10,],    baseHp: 22,   tempHP: null,   hpFormula: `4d8 + 4`,       speed: 30,  cr: 1 }, //done
    /*Rifleman*/
    modernSolderT1:         { attributes: [10, 14, 10, 10, 10, 10,],    baseHp: 7,    tempHP: null,   hpFormula: `4d8`,           speed: 30,  cr: 1 }, //
    modernSolderT2:         { attributes: [10, 16, 14, 10, 10, 10,],    baseHp: 39,   tempHP: null,   hpFormula: `6d8 + 12`,      speed: 30,  cr: 2 }, //
    modernSolderT3:         { attributes: [13, 16, 16, 10, 10, 10,],    baseHp: 75,   tempHP: null,   hpFormula: `10d8 + 30`,     speed: 30,  cr: 4 }, //
    modernSolderT4:         { attributes: [14, 18, 16, 10, 11, 10,],    baseHp: 120,  tempHP: null,   hpFormula: `16d8 + 48`,     speed: 30,  cr: 7 }, //done
    modernSolderT5:         { attributes: [14, 20, 16, 10, 12, 10,],    baseHp: 7,    tempHP: null,   hpFormula: `24d8`,          speed: 30,  cr: 1 }, //
    /*Archer*/
    archerT1:               { attributes: [10, 14, 10, 10, 10, 10,],    baseHp: 7,    tempHP: null,   hpFormula: `2d8`,           speed: 30,  cr: 1 }, //done
    archerT2:               { attributes: [10, 16, 12, 10, 12, 10,],    baseHp: 22,   tempHP: null,   hpFormula: `4d8 + 4`,       speed: 30,  cr: 1 }, //done
    archerT3:               { attributes: [10, 18, 14, 10, 12, 10,],    baseHp: 39,   tempHP: null,   hpFormula: `8d8 + 16`,      speed: 30,  cr: 1 }, //done
    archerT4:               { attributes: [10, 16, 12, 10, 12, 10,],    baseHp: 22,   tempHP: null,   hpFormula: `14d8 + 4`,      speed: 30,  cr: 1 }, //
    archerT5:               { attributes: [10, 18, 14, 10, 12, 10,],    baseHp: 39,   tempHP: null,   hpFormula: `22d8 + 16`,     speed: 30,  cr: 1 }, //
    archerT1_Cap:           { attributes: [10, 14, 12, 10, 10, 14,],    baseHp: 33,   tempHP: null,   hpFormula: `6d8 + 6`,       speed: 30,  cr: 1 }, //done
    archerT2_Cap:           { attributes: [12, 16, 14, 10, 10, 14,],    baseHp: 52,   tempHP: null,   hpFormula: `8d8 + 16`,      speed: 30,  cr: 3 }, //done
    archerT3_Cap:           { attributes: [14, 18, 14, 10, 10, 14,],    baseHp: 78,   tempHP: null,   hpFormula: `12d8 + 24`,     speed: 30,  cr: 4 }, //done
    archerT4_Cap:           { attributes: [14, 20, 14, 10, 12, 14,],    baseHp: 117,  tempHP: null,   hpFormula: `18d8 + 36`,     speed: 30,  cr: 7 }, //done
    archerT5_Cap:           { attributes: [14, 20, 16, 11, 12, 15,],    baseHp: 195,  tempHP: null,   hpFormula: `26d8 + 78`,     speed: 30,  cr: 12 }, //done
    //Light Infantry                      [ 1   3   1   1   1   1 ]
    lightInfT1:             { attributes: [12, 12, 10, 10, 12, 10,],    baseHp: 9,    tempHP: null,   hpFormula: `2d8`,           speed: 30,  cr: 0.125 }, //done
    lightInfT2:             { attributes: [14, 16, 10, 10, 12, 10,],    baseHp: 18,   tempHP: null,   hpFormula: `4d8`,           speed: 30,  cr: 0.25 }, //done
    lightInfT3:             { attributes: [14, 18, 12, 10, 12, 10,],    baseHp: 44,   tempHP: null,   hpFormula: `8d8 + 8`,       speed: 30,  cr: 2 }, //done
    lightInfT4:             { attributes: [14, 20, 12, 10, 12, 10,],    baseHp: 77,   tempHP: null,   hpFormula: `14d8 + 14`,     speed: 30,  cr: 4 }, //
    lightInfT5:             { attributes: [16, 20, 14, 10, 16, 10,],    baseHp: 121,  tempHP: null,   hpFormula: `22d8 + 44`,     speed: 30,  cr: 7 }, //
    //Medium Infantry                     [ 2   1   2   1   1   1 ]
    mediumInfT1:            { attributes: [12, 12, 12, 10, 10, 10,],    baseHp: 11,   tempHP: null,   hpFormula: `2d8 + 2`,       speed: 30,  cr: 0.125 }, //done
    mediumInfT2:            { attributes: [14, 14, 14, 10, 10, 10,],    baseHp: 26,   tempHP: null,   hpFormula: `4d8 + 8`,       speed: 30,  cr: 0.5 }, //done
    mediumInfT3:            { attributes: [16, 14, 14, 10, 13, 10,],    baseHp: 52,   tempHP: null,   hpFormula: `8d8 + 16`,      speed: 30,  cr: 3 }, //done
    mediumInfT4:            { attributes: [18, 14, 14, 10, 14, 10,],    baseHp: 91,   tempHP: null,   hpFormula: `14d8 + 28`,     speed: 30,  cr: 5 }, //done
    mediumInfT5:            { attributes: [20, 14, 16, 10, 14, 12,],    baseHp: 143,  tempHP: null,   hpFormula: `22d8 + 66`,     speed: 30,  cr: 9 }, //done
    //Shock Infantry                      [ 3   1   1   1   1   1 ]
    shockInfT1:             { attributes: [14, 10, 12, 10, 10, 10,],    baseHp: 22,   tempHP: null,   hpFormula: `4d8 + 4`,       speed: 30,  cr: 0.5 }, //done
    shockInfT2:             { attributes: [16, 14, 12, 10, 10, 10,],    baseHp: 33,   tempHP: null,   hpFormula: `6d8 + 6`,       speed: 30,  cr: 1 }, //done
    shockInfT3:             { attributes: [18, 14, 14, 10, 10, 10,],    baseHp: 65,   tempHP: null,   hpFormula: `10d8 + 20`,     speed: 30,  cr: 3 }, //done
    shockInfT4:             { attributes: [20, 14, 14, 10, 10, 10,],    baseHp: 104,  tempHP: null,   hpFormula: `16d8 + 32`,     speed: 30,  cr: 6 }, //done
    shockInfT5:             { attributes: [20, 14, 16, 10, 14, 14,],    baseHp: 180,  tempHP: null,   hpFormula: `24d8 + 72`,     speed: 30,  cr: 11 }, //done
    //Heavy Infantry                      [ 2   1   2   1   1   1 ]
    heavyInfT1:             { attributes: [12, 10, 14, 10, 10, 10,],    baseHp: 26,   tempHP: null,   hpFormula: `4d8 + 8`,       speed: 30,  cr: 0.5 }, //done
    heavyInfT2:             { attributes: [14, 10, 16, 10, 11, 10,],    baseHp: 45,   tempHP: null,   hpFormula: `6d8 + 18`,      speed: 30,  cr: 2 }, //done
    heavyInfT3:             { attributes: [16, 12, 16, 10, 12, 10,],    baseHp: 75,   tempHP: null,   hpFormula: `10d8 + 30`,     speed: 30,  cr: 4 }, //done
    heavyInfT4:             { attributes: [18, 12, 16, 10, 13, 10,],    baseHp: 120,  tempHP: null,   hpFormula: `16d8 + 48`,     speed: 30,  cr: 7 }, //done
    heavyInfT5:             { attributes: [20, 12, 18, 10, 14, 12,],    baseHp: 204,  tempHP: null,   hpFormula: `24d8 + 96`,     speed: 30,  cr: 13 }, //done

    //Medium Captain
    mediumInfT1_Cap:        { attributes: [12, 10, 12, 10, 10, 14,],    baseHp: 33,   tempHP: null,   hpFormula: `6d8 + 6`,       speed: 30,  cr: 0.125 }, //
    mediumInfT2_Cap:        { attributes: [16, 12, 14, 10, 10, 14,],    baseHp: 52,   tempHP: null,   hpFormula: `8d8 + 16`,      speed: 30,  cr: 3 }, //
    mediumInfT3_Cap:        { attributes: [18, 14, 14, 10, 11, 14,],    baseHp: 78,   tempHP: null,   hpFormula: `12d8 + 24`,     speed: 30,  cr: 4 }, //
    mediumInfT4_Cap:        { attributes: [20, 14, 14, 10, 11, 14,],    baseHp: 117,  tempHP: null,   hpFormula: `18d8 + 36`,     speed: 30,  cr: 7 }, //
    mediumInfT5_Cap:        { attributes: [20, 14, 16, 10, 12, 15,],    baseHp: 195,  tempHP: null,   hpFormula: `26d8 + 78`,     speed: 30,  cr: 12 }, //
    //Shock Captain
    shockInfT1_Cap:         { attributes: [14, 10, 12, 10, 10, 14,],    baseHp: 46,   tempHP: null,   hpFormula: `8d8 + 8`,       speed: 30,  cr: 2 }, //done
    shockInfT2_Cap:         { attributes: [16, 12, 14, 10, 10, 14,],    baseHp: 65,   tempHP: null,   hpFormula: `10d8 + 20`,     speed: 30,  cr: 3 }, //done
    shockInfT3_Cap:         { attributes: [18, 14, 14, 10, 10, 14,],    baseHp: 91,   tempHP: null,   hpFormula: `14d8 + 28`,     speed: 30,  cr: 5 }, //done
    shockInfT4_Cap:         { attributes: [20, 14, 14, 10, 12, 14,],    baseHp: 130,  tempHP: null,   hpFormula: `20d8 + 40`,     speed: 30,  cr: 8 }, //done
    shockInfT5_Cap:         { attributes: [20, 14, 16, 11, 12, 15,],    baseHp: 210,  tempHP: null,   hpFormula: `28d8 + 84`,     speed: 30,  cr: 13 }, //done
    //Heavy Captain
    heavyInfT1_Cap:         { attributes: [14,  8, 14, 10, 10, 14,],    baseHp: 52,   tempHP: null,   hpFormula: `8d8 + 16`,      speed: 30,  cr: 2 }, //done
    heavyInfT2_Cap:         { attributes: [16, 10, 15, 10, 10, 14,],    baseHp: 65,   tempHP: null,   hpFormula: `10d8 + 20`,     speed: 30,  cr: 3 }, //done
    heavyInfT3_Cap:         { attributes: [18, 10, 16, 10, 10, 14,],    baseHp: 105,  tempHP: null,   hpFormula: `14d8 + 42`,     speed: 30,  cr: 6 }, //done
    heavyInfT4_Cap:         { attributes: [20, 10, 16, 10, 10, 14,],    baseHp: 150,  tempHP: null,   hpFormula: `20d8 + 60`,     speed: 30,  cr: 9 }, //done
    heavyInfT5_Cap:         { attributes: [20, 10, 18, 10, 10, 14,],    baseHp: 238,  tempHP: null,   hpFormula: `28d8 + 112`,    speed: 30,  cr: 15 }, //done
    //Wizard
    wizardT2:               { attributes: [8, 4, 12, 16, 10, 10, 6],    baseHp: 6,    tempHP: null,   hpFormula: `12d8 + 12`,     speed: 30,  cr: 3 }, //done
    wizardT3:               { attributes: [8, 4, 12, 18, 12, 10, 8],    baseHp: 6,    tempHP: null,   hpFormula: `16d8 + 16`,     speed: 30,  cr: 5 }, //done
    wizardT4:               { attributes: [8, 4, 12, 20, 12, 10, 1],    baseHp: 61,   tempHP: null,   hpFormula: `22d8 + 22`,     speed: 30,  cr: 7 }, //done
  },
};

const variantAttributes: any = {
  human: {
    ...attributes.human,
    lightCavT1: { ...attributes.human.lightInfT1,                                     tempHp: 19,                                 speed: 60,  cr: 2, },
    lightCavT2: { ...attributes.human.lightInfT2,                                     tempHp: 30,                                 speed: 60,  cr: 4, },
    lightCavT3: { ...attributes.human.lightInfT3,                                     tempHp: 30,                                 speed: 60,  cr: 6, },
    lightCavT4: { ...attributes.human.lightInfT4,                                     tempHp: 30,                                 speed: 60,  cr: 9, },
    lightCavT5: { ...attributes.human.lightInfT5,                                     tempHp: 30,                                 speed: 60,  cr: 15, },
    mediumCavT1: { ...attributes.human.mediumInfT1,                                   tempHp: 19,                                 speed: 60,  cr: 2, },
    mediumCavT2: { ...attributes.human.mediumInfT2,                                   tempHp: 30,                                 speed: 60,  cr: 3, },
    mediumCavT3: { ...attributes.human.mediumInfT3,                                   tempHp: 30,                                 speed: 60,  cr: 5, },
    mediumCavT4: { ...attributes.human.mediumInfT4,                                   tempHp: 30,                                 speed: 60,  cr: 9, },
    mediumCavT5: { ...attributes.human.mediumInfT5,                                   tempHp: 30,                                 speed: 60,  cr: 15, },
    mediumCavT1_Cap: { ...attributes.human.mediumInfT1_Cap,                           tempHp: 19,                                 speed: 60,  cr: 0, },
    mediumCavT2_Cap: { ...attributes.human.mediumInfT2_Cap,                           tempHp: 30,                                 speed: 60,  cr: 0, },
    mediumCavT3_Cap: { ...attributes.human.mediumInfT3_Cap,                           tempHp: 30,                                 speed: 60,  cr: 6, },
    mediumCavT4_Cap: { ...attributes.human.mediumInfT4_Cap,                           tempHp: 30,                                 speed: 60,  cr: 0, },
    mediumCavT5_Cap: { ...attributes.human.mediumInfT5_Cap,                           tempHp: 30,                                 speed: 60,  cr: 0, },
    shockCavT1: { ...attributes.human.shockInfT1,                                     tempHp: 19,                                 speed: 60,  cr: 2, },
    shockCavT2: { ...attributes.human.shockInfT2,                                     tempHp: 30,                                 speed: 60,  cr: 4, },
    shockCavT3: { ...attributes.human.shockInfT3,                                     tempHp: 30,                                 speed: 60,  cr: 6, },
    shockCavT4: { ...attributes.human.shockInfT4,                                     tempHp: 30,                                 speed: 60,  cr: 9, },
    shockCavT5: { ...attributes.human.shockInfT5,                                     tempHp: 30,                                 speed: 60,  cr: 15, },
    cataphractT3: { ...attributes.human.shockInfT3,                                   tempHp: 60,                                 speed: 50,  cr: 6, },
    shockCavT1_Cap: { ...attributes.human.shockInfT1_Cap,                             tempHp: 19,                                 speed: 60,  cr: 2, },
    shockCavT2_Cap: { ...attributes.human.shockInfT2_Cap,                             tempHp: 30,                                 speed: 60,  cr: 5, },
    shockCavT3_Cap: { ...attributes.human.shockInfT3_Cap,                             tempHp: 30,                                 speed: 60,  cr: 7, },
    shockCavT4_Cap: { ...attributes.human.shockInfT4_Cap,                             tempHp: 30,                                 speed: 60,  cr: 9, },
    shockCavT5_Cap: { ...attributes.human.shockInfT5_Cap,                             tempHp: 30,                                 speed: 60,  cr: 15, },
    heavyCavT1: { ...attributes.human.heavyInfT1,                                     tempHp: 19,                                 speed: 60,  cr: 2, },
    heavyCavT2: { ...attributes.human.heavyInfT2,                                     tempHp: 30,                                 speed: 60,  cr: 4, },
    heavyCavT3: { ...attributes.human.heavyInfT3,                                     tempHp: 30,                                 speed: 60,  cr: 6, },
    heavyCavT4: { ...attributes.human.heavyInfT4,                                     tempHp: 30,                                 speed: 60,  cr: 9, },
    heavyCavT5: { ...attributes.human.heavyInfT5,                                     tempHp: 30,                                 speed: 60,  cr: 15, },
    heavyCavT1_Cap: { ...attributes.human.heavyInfT1_Cap,                             tempHp: 19,                                 speed: 60,  cr: 2, },
    heavyCavT2_Cap: { ...attributes.human.heavyInfT2_Cap,                             tempHp: 30,                                 speed: 60,  cr: 5, },
    heavyCavT3_Cap: { ...attributes.human.heavyInfT3_Cap,                             tempHp: 30,                                 speed: 60,  cr: 8, },
    heavyCavT4_Cap: { ...attributes.human.heavyInfT4_Cap,                             tempHp: 30,                                 speed: 60,  cr: 9, },
    heavyCavT5_Cap: { ...attributes.human.heavyInfT5_Cap,                             tempHp: 30,                                 speed: 60,  cr: 15, },
  },
};

export const humanoidAttributes = {
  ...attributes,
  ...variantAttributes,
}