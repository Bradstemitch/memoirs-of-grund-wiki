const attributes: any = {/* { attributes: [Str Dex Con Int Wis Cha]-----baseHp:-------tempHP:---------hpFormula:------------------speed:------cr:*/
    species: {},
    zombie: {
        zombie:             { attributes: [13,  6, 16,  3,  6,  5,],    baseHp: 22,   tempHP: null,   hpFormula: `4d8 + 6`,       speed: 20,  cr: 0.25 }, //
        corpsewolf:         { attributes: [15, 18, 12,  3, 12,  2,],    baseHp: 39,   tempHP: null,   hpFormula: `6d8 + 12`,      speed: 20,  cr: 2 }, //
    },
    skeleton: {
        skeleton:           { attributes: [10, 14, 14,  6,  8,  5,],    baseHp: 13,   tempHP: null,   hpFormula: `2d8 + 4`,       speed: 30,  cr: 0.25 }, //
        skeletonWarrior:    { attributes: [16, 14, 16,  6,  8,  5,],    baseHp: 30,   tempHP: null,   hpFormula: `4d8 + 12`,      speed: 30,  cr: 1 }, //
    },
    wight: {
        wight:              { attributes: [14, 14, 14, 10, 13, 15,],    baseHp: 78,   tempHP: null,   hpFormula: `12d8 + 24`,     speed: 30,  cr: 4 }, //
        settWight:          { attributes: [18, 14, 16, 10, 13, 15,],    baseHp: 75,   tempHP: null,   hpFormula: `10d8 + 30`,     speed: 30,  cr: 4 }, //
    },
    ghoul: {
        ghoul:              { attributes: [12, 14, 12,  6, 10,  6,],    baseHp: 22,   tempHP: null,   hpFormula: `4d8 + 4`,       speed: 30,  cr: 1 }, //
        ghoulT1Infantry:    { attributes: [14, 16, 14,  6, 11,  6,],    baseHp: 39,   tempHP: null,   hpFormula: `6d8 + 12`,      speed: 30,  cr: 2 }, //
        ghoulT2Infantry:    { attributes: [16, 16, 16,  6, 12,  6,],    baseHp: 60,   tempHP: null,   hpFormula: `8d8 + 24`,      speed: 30,  cr: 3 }, //
        ghoulT3Infantry:    { attributes: [16, 18, 18,  6, 13,  6,],    baseHp: 102,  tempHP: null,   hpFormula: `12d8 + 48`,     speed: 30,  cr: 6 }, //
        ghoulT4Infantry:    { attributes: [17, 20, 18,  6, 14,  6,],    baseHp: 153,  tempHP: null,   hpFormula: `18d8 + 72`,     speed: 30,  cr: 9 }, //
        ghoulT5Infantry:    { attributes: [17, 20, 18,  6, 14,  6,],    baseHp: 153,  tempHP: null,   hpFormula: `18d8 + 72`,     speed: 30,  cr: 9 }, //
    },
};

export const undeadAttributes = {
    ...attributes
}
