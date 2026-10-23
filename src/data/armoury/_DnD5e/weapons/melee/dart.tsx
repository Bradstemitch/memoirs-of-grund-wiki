export function dnd5e_wep_dart(
  equipped: boolean,
  damageDie: number,
  quantity: number
) {
  return {
    name: `Dart`,
    system: {
      description: {
        value: ``,
        chat: ``,
      },
      price: {
        value: 5,
        denomination: `cp`,
      },
      source: {
        custom: ``,
        rules: `2024`,
        revision: 1,
      },
      identified: true,
      unidentified: {
        description: ``,
      },
      container: null,
      quantity: quantity,
      weight: {
        value: 0.25,
        units: `lb`,
      },
      rarity: ``,
      attunement: ``,
      attuned: false,
      equipped: equipped,
      cover: null,
      range: {
        value: 20,
        long: 60,
        units: `ft`,
        reach: null,
      },
      uses: {
        max: ``,
        spent: 0,
        recovery: [],
      },
      damage: {
        versatile: {
          number: null,
          denomination: null,
          bonus: ``,
          types: [],
          custom: {
            enabled: true,
            formula: ``,
          },
          scaling: {
            mode: ``,
            number: null,
            formula: ``,
          },
        },
        base: {
          number: damageDie,
          denomination: 4,
          types: [`piercing`],
          custom: {
            enabled: false,
          },
          scaling: {
            number: 1,
          },
          bonus: ``,
        },
      },
      armor: {
        value: null,
      },
      hp: {
        value: null,
        max: null,
        dt: null,
        conditions: ``,
      },
      type: {
        value: `simpleR`,
        baseItem: `dart`,
      },
      properties: [`fin`, `thr`],
      proficient: null,
      activities: {
        HXmVf11fhJVaDGRU: {
          type: `attack`,
          activation: {
            type: `action`,
            value: 1,
            condition: ``,
            override: false,
          },
          consumption: {
            targets: [],
            scaling: {
              allowed: false,
              max: ``,
            },
            spellSlot: true,
          },
          description: {
            chatFlavor: ``,
          },
          duration: {
            concentration: false,
            value: ``,
            units: `inst`,
            special: ``,
            override: false,
          },
          effects: [],
          range: {
            value: `20`,
            units: `ft`,
            special: ``,
            override: false,
          },
          target: {
            template: {
              count: ``,
              contiguous: false,
              type: ``,
              size: ``,
              width: ``,
              height: ``,
              units: `ft`,
              stationary: false,
            },
            affects: {
              count: ``,
              type: ``,
              choice: false,
              special: ``,
            },
            prompt: false,
            override: false,
          },
          attack: {
            ability: ``,
            bonus: ``,
            critical: {
              threshold: null,
            },
            flat: false,
            type: {
              value: `ranged`,
              classification: `weapon`,
            },
          },
          damage: {
            critical: {
              bonus: ``,
            },
            includeBase: true,
            parts: [],
          },
          uses: {
            spent: 0,
            recovery: [],
            max: ``,
          },
          sort: 0,
          _id: `HXmVf11fhJVaDGRU`,
          name: ``,
          img: ``,
          flags: {},
          visibility: {
            level: {},
            requireAttunement: false,
            requireIdentification: false,
            requireMagic: false,
          },
        },
      },
      ammunition: {},
      mastery: `vex`,
      identifier: `dart`,
      crew: {
        value: [],
      },
    },
    type: `weapon`,
    folder: `atG8UGtcNyNweUOt`,
    img: `modules/dnd-players-handbook/assets/icons/items/dart.webp`,
    effects: [],
    flags: {
      dnd5e: {
        riders: {
          activity: [],
          effect: [],
        },
      },
    },
    _stats: {
      compendiumSource:
        `Compendium.dnd-players-handbook.equipment.Item.phbwepDart000000`,
      duplicateSource: null,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      createdTime: 1789046161788,
      modifiedTime: 1789046161788,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      exportSource: {
        worldId: `compendium-project-dandd`,
        uuid: `Item.phbwepDart000000`,
        coreVersion: `14.364`,
        systemId: `dnd5e`,
        systemVersion: `5.3.3`,
      },
    },
    ownership: {
      default: 0,
    },
  };
}
