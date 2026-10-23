const attributes: any = {/* { attributes: [Str Dex Con Int Wis Cha]*/
    species: {},
    vampire: {
        vampireSpawn:       { attributes: [16, 16, 16, 10, 10, 12,],   baseHp: 90,     tempHP: null,   hpFormula: `12d8 + 36`, speed: 30, cr: 5 }, //done
        vampire:            { attributes: [18, 16, 18, 14, 12, 16,],   baseHp: 136,    tempHP: null,   hpFormula: `16d8 + 64`, speed: 30, cr: 8 }, //done
        vampireLord:        { attributes: [18, 18, 18, 18, 16, 18,],   baseHp: 195,    tempHP: null,   hpFormula: `24d8 + 92`, speed: 30, cr: 13 }, //done
        blackknight:        { attributes: [18, 16, 18, 10, 10, 12,],   baseHp: 90,     tempHP: null,   hpFormula: `12d8 + 36`, speed: 30, cr: 5 }, //done
    },
};
export const fiendAttributes={
...attributes
}
