import { makeid } from '../../../creatures/_BUILDERS/_Constants';

export function dnd5e_wep_dagger(equipped: boolean, damageDie: number) {
  return {
    name: `Dagger`,
    system: {
      description: {
        value: ``,
        chat: ``,
      },
      price: {
        value: 2,
        denomination: `gp`,
      },
      source: {
        custom: ``,
        rules: `2024`,
        license: `CC-BY-4.0`,
        book: ``,
        revision: 1,
      },
      identified: true,
      unidentified: {
        description: ``,
      },
      container: null,
      quantity: 1,
      weight: {
        value: 1,
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
        value: `simpleM`,
        baseItem: `dagger`,
      },
      properties: [`fin`, `lgt`, `thr`],
      proficient: null,
      activities: {
        '3SJSAL3pv9gKkAM9': {
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
              value: `melee`,
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
          _id: `3SJSAL3pv9gKkAM9`,
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
      mastery: `nick`,
      identifier: `dagger`,
      crew: {
        value: [],
      },
    },
    type: `weapon`,
    folder: `FL1Jee9DzStc7vM3`,
    img: `icons/weapons/daggers/dagger-straight-blue.webp`,
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
      duplicateSource: null,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      createdTime: 1788458571603,
      modifiedTime: 1788458571603,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      exportSource: {
        worldId: `compendium-project-dandd`,
        uuid: `Item.phbwepDagger0000`,
        coreVersion: `14.364`,
        systemId: `dnd5e`,
        systemVersion: `5.3.3`,
      },
      compendiumSource: `Compendium.dnd5e.equipment24.Item.phbwepDagger0000`,
    },
    ownership: {
      default: 0,
    },
  };
}
