const attributes: any = {/* { attributes: [Str Dex Con Int Wis Cha]*/
    species: {},
    dragon: {
        beithir:            { attributes: [23, 16, 18, 10, 14, 12,], baseHp: 168, tempHP: null, hpFormula: `18d8 + 72`, speed: 30, cr: 12 }, //
        hydra:              { attributes: [17, 17, 18,  3, 12,  7,], baseHp: 76, tempHP: null, hpFormula: `8d10 + 32`, speed: 30, cr: 4 }, //
        dragonYoung:        { attributes: [30, 14, 28, 18, 16, 28,], baseHp: 546, tempHP: null, hpFormula: `26d20 + 234`, speed: 40, cr: 24 }, //
        dragonAdult:        { attributes: [30, 14, 28, 18, 16, 28,], baseHp: 546, tempHP: null, hpFormula: `26d20 + 234`, speed: 40, cr: 24 }, //
        dragonAncient:      { attributes: [30, 14, 28, 18, 16, 28,], baseHp: 546, tempHP: null, hpFormula: `26d20 + 234`, speed: 40, cr: 24 }, //
    },
    highdragon: {
        youngHighDragon:    { attributes: [30, 14, 28, 18, 16, 28,], baseHp: 546, tempHP: null, hpFormula: `26d20 + 234`, speed: 40, cr: 24 }, //
        adultHighDragon:    { attributes: [30, 14, 28, 18, 16, 28,], baseHp: 546, tempHP: null, hpFormula: `26d20 + 234`, speed: 40, cr: 24 }, //
        ancientHighDragon:  { attributes: [30, 14, 28, 18, 16, 28,], baseHp: 546, tempHP: null, hpFormula: `26d20 + 234`, speed: 40, cr: 24 }, //
    },
};
export const dragonAttributes = {
    ...attributes
};
