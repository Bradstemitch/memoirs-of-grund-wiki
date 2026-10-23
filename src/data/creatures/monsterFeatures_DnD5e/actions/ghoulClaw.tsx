export function dnd5e_action_ghoulClaw({ damageDie }: { damageDie: number }) {
  return {
    _id: `tiNmukdjtTyjqq9S`,
    name: `Claw`,
    type: `weapon`,
    system: {
      type: {
        value: `natural`,
        baseItem: ``,
      },
      activities: {
        xWlMeXFjELfSUWX9: {
          type: `attack`,
          _id: `xWlMeXFjELfSUWX9`,
          sort: 0,
          activation: {
            type: `action`,
            value: null,
            override: false,
            condition: ``,
          },
          consumption: {
            scaling: {
              allowed: false,
            },
            spellSlot: true,
            targets: [],
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
          range: {
            override: false,
            units: `self`,
          },
          target: {
            template: {
              contiguous: false,
              units: `ft`,
              type: ``,
              stationary: false,
            },
            affects: {
              choice: false,
              type: ``,
            },
            override: false,
            prompt: true,
          },
          uses: {
            spent: 0,
            recovery: [],
            max: ``,
          },
          attack: {
            critical: {
              threshold: null,
            },
            flat: false,
            type: {
              value: ``,
              classification: ``,
            },
            ability: `dex`,
            bonus: ``,
          },
          damage: {
            critical: {
              bonus: ``,
            },
            includeBase: true,
            parts: [
              {
                custom: {
                  enabled: false,
                  formula: ``,
                },
                number: damageDie,
                denomination: 6,
                bonus: ``,
                types: [`necrotic`],
                scaling: {
                  number: 1,
                },
              },
            ],
          },
          name: ``,
          img: null,
          flags: {},
          visibility: {
            level: {},
            requireAttunement: false,
            requireIdentification: false,
            requireMagic: false,
          },
        },
      },
      uses: {
        spent: 0,
        recovery: [],
        max: ``,
      },
      description: {
        value: `<p>[[/attack extended]]. [[/damage average extended]].</p>`,
        chat: ``,
      },
      identifier: `claw`,
      source: {
        revision: 1,
        rules: `2024`,
        book: ``,
        license: `CC-BY-4.0`,
      },
      identified: true,
      unidentified: {
        name: `Unidentified Weapon`,
        description: ``,
      },
      container: null,
      quantity: 1,
      weight: {
        value: 0,
        units: `lb`,
      },
      price: {
        value: 0,
        denomination: `gp`,
      },
      rarity: ``,
      attunement: ``,
      armor: {
        value: null,
      },
      cover: null,
      hp: {
        value: null,
        max: null,
        dt: null,
        conditions: ``,
      },
      ammunition: {},
      damage: {
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
        versatile: {
          number: null,
          denomination: null,
          types: [],
          custom: {
            enabled: false,
          },
          scaling: {
            number: 1,
          },
        },
      },
      properties: [`fin`],
      proficient: null,
      range: {
        value: null,
        long: null,
        reach: null,
        units: `ft`,
      },
      mastery: ``,
      attuned: false,
      equipped: true,
      crew: {
        value: [],
      },
    },
    folder: `pSCWWdqMX9eUATRJ`,
    img: `icons/skills/melee/blood-slash-foam-red.webp`,
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
        `Compendium.dnd-monster-manual.features.Item.mmClaw0000000000`,
      duplicateSource: null,
      exportSource: null,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      createdTime: 1788880820857,
      modifiedTime: 1788880820857,
    },
    sort: 5800000,
    ownership: {
      default: 0,
    },
  };
}
