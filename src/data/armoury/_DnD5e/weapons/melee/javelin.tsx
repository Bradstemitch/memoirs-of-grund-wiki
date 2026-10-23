export function dnd5e_wep_javelin(
  equipped: boolean,
  damageDie: number,
  quantity: number
) {
  return {
    name: `Javelin`,
    system: {
      description: {
        value: `<p>[[/attack extended]]. [[/damage extended]].</p>`,
        chat: ``,
      },
      price: {
        value: 5,
        denomination: `sp`,
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
        value: 2,
        units: `lb`,
      },
      rarity: ``,
      attunement: ``,
      attuned: false,
      equipped: equipped,
      cover: null,
      range: {
        value: 30,
        long: 120,
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
          denomination: 6,
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
        baseItem: `javelin`,
      },
      properties: [`thr`],
      proficient: null,
      activities: {
        r1hUkUrLD8kqx8X0: {
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
            value: `30`,
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
          _id: `r1hUkUrLD8kqx8X0`,
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
      mastery: `slow`,
      identifier: `javelin`,
      crew: {
        value: [],
      },
    },
    type: `weapon`,
    folder: `FL1Jee9DzStc7vM3`,
    img: `modules/dnd-players-handbook/assets/icons/items/javelin.webp`,
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
        `Compendium.dnd-players-handbook.equipment.Item.phbwepJavelin000`,
      duplicateSource: null,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      createdTime: 1789043322888,
      modifiedTime: 1789043322888,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      exportSource: {
        worldId: `compendium-project-dandd`,
        uuid: `Item.phbwepJavelin000`,
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
