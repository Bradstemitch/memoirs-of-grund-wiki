export function dnd5e_wep_laserRifle(equipped: boolean, damageDie: number) {
  return {
    name: `Laser Rifle`,
    system: {
      description: {
        value: ``,
        chat: ``,
      },
      price: {
        value: 0,
        denomination: `gp`,
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
      quantity: 1,
      weight: {
        value: 7,
        units: `lb`,
      },
      rarity: ``,
      attunement: ``,
      attuned: false,
      equipped: equipped,
      cover: null,
      range: {
        value: 100,
        long: 300,
        units: `ft`,
        reach: null,
      },
      uses: {
        max: `50`,
        spent: 0,
        recovery: [
          {
            period: `lr`,
            type: `recoverAll`,
          },
        ],
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
          number: 3,
          denomination: 8,
          types: [`radiant`],
          custom: {
            enabled: false,
          },
          scaling: {
            number: damageDie,
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
        value: `martialR`,
        baseItem: ``,
      },
      properties: [`amm`, `fir`, `rel`, `two`],
      proficient: null,
      activities: {
        iNq67ySHyNX4jmSQ: {
          type: `attack`,
          activation: {
            type: `action`,
            value: 1,
            condition: ``,
            override: false,
          },
          consumption: {
            targets: [
              {
                type: `itemUses`,
                value: `1`,
                scaling: {},
              },
            ],
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
            value: `150`,
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
          _id: `iNq67ySHyNX4jmSQ`,
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
        He7aRlx02UKHfXfB: {
          type: `save`,
          name: `Burst Fire`,
          _id: `He7aRlx02UKHfXfB`,
          img: ``,
          sort: 100000,
          activation: {
            type: `action`,
            override: false,
            condition: ``,
          },
          consumption: {
            scaling: {
              allowed: false,
            },
            spellSlot: true,
            targets: [
              {
                type: `itemUses`,
                value: `10`,
                target: ``,
                scaling: {},
              },
            ],
          },
          description: {
            chatFlavor: ``,
          },
          duration: {
            units: `inst`,
            concentration: false,
            override: false,
          },
          effects: [],
          flags: {},
          range: {
            units: `self`,
            override: false,
          },
          target: {
            template: {
              contiguous: false,
              stationary: false,
              units: `ft`,
              count: ``,
              type: `cube`,
              size: `10`,
            },
            affects: {
              choice: false,
              count: ``,
              type: ``,
              special: ``,
            },
            override: false,
            prompt: true,
          },
          uses: {
            spent: 0,
            recovery: [],
            max: ``,
          },
          visibility: {
            level: {
              min: null,
              max: null,
            },
            requireAttunement: false,
            requireIdentification: false,
            requireMagic: false,
            identifier: ``,
          },
          damage: {
            onSave: `half`,
            parts: [
              {
                custom: {
                  enabled: false,
                  formula: ``,
                },
                number: 3,
                denomination: 8,
                bonus: `@mod`,
                types: [`radiant`],
                scaling: {
                  number: 1,
                },
              },
            ],
          },
          save: {
            ability: [`dex`],
            dc: {
              calculation: ``,
              formula: `15`,
            },
          },
        },
      },
      ammunition: {
        type: `energyCell`,
      },
      mastery: `slow`,
      identifier: `musket`,
      crew: {
        value: [],
      },
      magicalBonus: ``,
    },
    type: `weapon`,
    folder: null,
    img: `modules/impmal-core/assets/icons/weapons/hot-shot-lasgun.webp`,
    effects: [],
    flags: {
      dnd5e: {},
    },
    _stats: {
      compendiumSource:
        `Compendium.dnd-players-handbook.equipment.Item.phbwepMusket0000`,
      duplicateSource: null,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      createdTime: 1789670552321,
      modifiedTime: 1789674747922,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      exportSource: {
        worldId: `compendium-project-dandd`,
        uuid: `Item.GKqABeIlYr3Lt95j`,
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
