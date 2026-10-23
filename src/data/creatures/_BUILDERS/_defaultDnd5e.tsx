export function DnD5eNPCStats({
  species,
  alignment,
  size,
}: {
  species?: { value: string; subtype: string };
  alignment?: string;
  size?: string;
}) {
  return {
    system: {
      currency: {
        pp: 0,
        gp: 0,
        ep: 0,
        sp: 0,
        cp: 0,
      },
      abilities: {
        str: {},
        dex: {},
        con: {},
        int: {},
        wis: {},
        cha: {},
      },
      bonuses: {
        mwak: {
          attack: ``,
          damage: ``,
        },
        rwak: {
          attack: ``,
          damage: ``,
        },
        msak: {
          attack: ``,
          damage: ``,
        },
        rsak: {
          attack: ``,
          damage: ``,
        },
        abilities: {
          check: ``,
          save: ``,
          skill: ``,
        },
        spell: {
          dc: ``,
        },
      },
      skills: {
        acr: {
          ability: `dex`,
          roll: {
            min: null,
            max: null,
            mode: 0,
          },
          value: 0,
          bonuses: {
            check: ``,
            passive: ``,
          },
        },
        ani: {
          ability: `wis`,
          roll: {
            min: null,
            max: null,
            mode: 0,
          },
          value: 0,
          bonuses: {
            check: ``,
            passive: ``,
          },
        },
        arc: {
          ability: `int`,
          roll: {
            min: null,
            max: null,
            mode: 0,
          },
          value: 0,
          bonuses: {
            check: ``,
            passive: ``,
          },
        },
        ath: {
          ability: `str`,
          roll: {
            min: null,
            max: null,
            mode: 0,
          },
          value: 0,
          bonuses: {
            check: ``,
            passive: ``,
          },
        },
        dec: {
          ability: `cha`,
          roll: {
            min: null,
            max: null,
            mode: 0,
          },
          value: 0,
          bonuses: {
            check: ``,
            passive: ``,
          },
        },
        his: {
          ability: `int`,
          roll: {
            min: null,
            max: null,
            mode: 0,
          },
          value: 0,
          bonuses: {
            check: ``,
            passive: ``,
          },
        },
        ins: {
          ability: `wis`,
          roll: {
            min: null,
            max: null,
            mode: 0,
          },
          value: 0,
          bonuses: {
            check: ``,
            passive: ``,
          },
        },
        itm: {
          ability: `cha`,
          roll: {
            min: null,
            max: null,
            mode: 0,
          },
          value: 0,
          bonuses: {
            check: ``,
            passive: ``,
          },
        },
        inv: {
          ability: `int`,
          roll: {
            min: null,
            max: null,
            mode: 0,
          },
          value: 0,
          bonuses: {
            check: ``,
            passive: ``,
          },
        },
        med: {
          ability: `wis`,
          roll: {
            min: null,
            max: null,
            mode: 0,
          },
          value: 0,
          bonuses: {
            check: ``,
            passive: ``,
          },
        },
        nat: {
          ability: `int`,
          roll: {
            min: null,
            max: null,
            mode: 0,
          },
          value: 0,
          bonuses: {
            check: ``,
            passive: ``,
          },
        },
        prc: {
          ability: `wis`,
          roll: {
            min: null,
            max: null,
            mode: 0,
          },
          value: 0,
          bonuses: {
            check: ``,
            passive: ``,
          },
        },
        prf: {
          ability: `cha`,
          roll: {
            min: null,
            max: null,
            mode: 0,
          },
          value: 0,
          bonuses: {
            check: ``,
            passive: ``,
          },
        },
        per: {
          ability: `cha`,
          roll: {
            min: null,
            max: null,
            mode: 0,
          },
          value: 0,
          bonuses: {
            check: ``,
            passive: ``,
          },
        },
        rel: {
          ability: `int`,
          roll: {
            min: null,
            max: null,
            mode: 0,
          },
          value: 0,
          bonuses: {
            check: ``,
            passive: ``,
          },
        },
        slt: {
          ability: `dex`,
          roll: {
            min: null,
            max: null,
            mode: 0,
          },
          value: 0,
          bonuses: {
            check: ``,
            passive: ``,
          },
        },
        ste: {
          ability: `dex`,
          roll: {
            min: null,
            max: null,
            mode: 0,
          },
          value: 0,
          bonuses: {
            check: ``,
            passive: ``,
          },
        },
        sur: {
          ability: `wis`,
          roll: {
            min: null,
            max: null,
            mode: 0,
          },
          value: 0,
          bonuses: {
            check: ``,
            passive: ``,
          },
        },
      },
      tools: {},
      spells: {
        spell1: {
          value: 0,
          override: null,
        },
        spell2: {
          value: 0,
          override: null,
        },
        spell3: {
          value: 0,
          override: null,
        },
        spell4: {
          value: 0,
          override: null,
        },
        spell5: {
          value: 0,
          override: null,
        },
        spell6: {
          value: 0,
          override: null,
        },
        spell7: {
          value: 0,
          override: null,
        },
        spell8: {
          value: 0,
          override: null,
        },
        spell9: {
          value: 0,
          override: null,
        },
        pact: {
          value: 0,
          override: null,
        },
      },
      attributes: {
        init: {
          ability: ``,
          roll: {
            min: null,
            max: null,
            mode: 0,
          },
          bonus: ``,
        },
        movement: {
          walk: `30`,
          units: null,
          hover: false,
          ignoredDifficultTerrain: [],
        },
        attunement: {
          max: 3,
        },
        senses: {
          units: null,
          special: ``,
          ranges: {
            darkvision: null as number | null,
            blindsight: null as number | null,
            tremorsense: null as number | null,
            truesight: null as number | null,
          },
        },
        spellcasting: `str`,
        exhaustion: 0,
        concentration: {
          ability: ``,
          roll: {
            min: null,
            max: null,
            mode: 0,
          },
          bonuses: {
            save: ``,
          },
          limit: 1,
        },
        ac: {
          flat: null,
          calc: `default`,
        },
        hd: {
          spent: 0,
        },
        hp: {
          value: 4,
          max: 4,
          temp: null,
          tempmax: null,
          formula: `1d8`,
        },
        death: {
          roll: {
            min: null,
            max: null,
            mode: 0,
          },
          success: 0,
          failure: 0,
          bonuses: {
            save: ``,
          },
        },
        spell: {
          level: 0,
        },
        loyalty: {
          value: null,
        },
        price: {
          value: null,
          denomination: `gp`,
        },
      },
      details: {
        biography: {
          value: ``,
          public: ``,
        },
        alignment: alignment || `Neutral`,
        ideal: ``,
        bond: ``,
        flaw: ``,
        race: null,
        type: species || {
          value: ``,
          subtype: ``,
        },
        cr: 0,
        habitat: {
          value: [
            {
              type: `any`,
            },
          ],
          custom: ``,
        },
        treasure: {
          value: [`individual`],
        },
      },
      resources: {
        legact: {
          max: 0,
          spent: 0,
        },
        legres: {
          max: 0,
          spent: 0,
        },
        lair: {
          value: false,
          initiative: null,
          inside: false,
        },
      },
      source: {
        revision: 2,
        rules: `2024`,
        book: ``,
        license: `CC-BY-4.0`,
      },
      traits: {
        size: size || `med`,
        di: {
          bypasses: [],
          value: [] as string[],
          custom: ``,
        },
        dr: {
          bypasses: [],
          value: [] as string[],
          custom: ``,
        },
        dv: {
          bypasses: [],
          value: [] as string[],
          custom: ``,
        },
        dm: {
          amount: {},
          bypasses: [],
        },
        ci: {
          value: [] as string[],
          custom: ``,
        },
        languages: {
          value: [] as string[],
          custom: ``,
          communication: {},
        },
        important: false,
      },
    },
  };
}
