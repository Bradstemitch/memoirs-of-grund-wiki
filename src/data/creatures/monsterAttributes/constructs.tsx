const attributes: any = {/* { attributes: [Str Dex Con Int Wis Cha]-----baseHp:-------tempHP:---------hpFormula:------------------speed:------cr:*/
    species: {},
    obelisk:{
        settObeliskT1:      { attributes: [12, 10, 12, 12,  8,  8,],    baseHp: 34,   tempHP: null,   hpFormula: `8d6 + 8`,        speed: 30,  cr: 1 }, //
        settObeliskT2:      { attributes: [14, 10, 14, 14,  8,  8,],    baseHp: 78,   tempHP: null,   hpFormula: `12d8 + 24`,      speed: 30,  cr: 4 }, //
        settObeliskT3:      { attributes: [16, 10, 16, 16,  8,  8,],    baseHp: 136,  tempHP: null,   hpFormula: `16d10 + 48`,     speed: 30,  cr: 8 }, //
        settObeliskT4:      { attributes: [18, 10, 18, 18,  8,  8,],    baseHp: 210,  tempHP: null,   hpFormula: `20d12 + 80`,     speed: 30,  cr: 13 }, //
        settObeliskT5:      { attributes: [20, 10, 20, 20,  8,  8,],    baseHp: 372,  tempHP: null,   hpFormula: `24d20 + 120`,    speed: 30,  cr: 21 }, //
    },
};
export const constructAttributes = {
    ...attributes
}
