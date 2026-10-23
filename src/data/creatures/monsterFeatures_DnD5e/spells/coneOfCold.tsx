import { makeid } from '../../_BUILDERS/_Constants';

export function dnd5e_spell_coneOfCold5th({
  level,
  perDay,
}: {
  level?: number;
  perDay?: number;
}) {
  const setId = makeid();
  return {
    id: setId,
    spell: {
      name: `Cone of Cold`,
      system: {
        description: {
          value:
            `<p>You unleash a blast of cold air. Each creature in a 60-foot Cone originating from you makes a Constitution saving throw, taking 8d8 Cold damage on a failed save or half as much damage on a successful one. A creature killed by this spell becomes a frozen statue until it thaws.</p><p><strong>Using a Higher-Level Spell Slot.</strong> The damage increases by 1d8 for each spell slot level above 5.</p>`,
          chat: ``,
        },
        source: {
          custom: ``,
          rules: `2024`,
          revision: 1,
          book: ``,
          license: `CC-BY-4.0`,
        },
        activation: {
          type: `action`,
          condition: ``,
          value: null,
        },
        duration: {
          value: ``,
          units: `inst`,
        },
        target: {
          affects: {
            choice: false,
          },
          template: {
            units: `ft`,
            type: `cone`,
            size: `60`,
            contiguous: false,
            stationary: false,
          },
        },
        range: {
          units: `self`,
        },
        uses: {
          max: ``,
          recovery: [],
          spent: 0,
        },
        level: 5,
        school: `evo`,
        properties: [`vocal`, `somatic`, `material`],
        materials: {
          value: `a small crystal or glass cone`,
          consumed: false,
          cost: 0,
          supply: 0,
        },
        activities: {
          dnd5eactivity000: {
            _id: `dnd5eactivity000`,
            type: `save`,
            activation: {
              type: `action`,
              value: null,
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
              units: `inst`,
              override: false,
              concentration: false,
            },
            effects: [],
            range: {
              override: false,
              units: `self`,
            },
            target: {
              prompt: true,
              template: {
                contiguous: false,
                units: `ft`,
                stationary: false,
              },
              affects: {
                choice: false,
              },
              override: false,
            },
            damage: {
              onSave: `half`,
              parts: [
                {
                  number: 8,
                  denomination: 8,
                  bonus: ``,
                  types: [`cold`],
                  custom: {
                    enabled: false,
                    formula: ``,
                  },
                  scaling: {
                    mode: `whole`,
                    number: 1,
                    formula: ``,
                  },
                },
              ],
            },
            save: {
              ability: [`con`],
              dc: {
                calculation: `spellcasting`,
                formula: ``,
              },
            },
            uses: {
              spent: 0,
              recovery: [],
            },
            sort: 0,
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
        identifier: `cone-of-cold`,
        method: `spell`,
        prepared: 0,
      },
      type: `spell`,
      img: `icons/magic/air/wind-tornado-wall-blue.webp`,
      effects: [
        {
          _id: `dnd5espellchange`,
          type: `enchantment`,
          name: `Spell Changes`,
          img: `systems/dnd5e/icons/svg/activity/cast.svg`,
          origin: null,
          system: {
            changes: [
              {
                key: `system.method`,
                value: `spell`,
                type: `override`,
                phase: `initial`,
              },
            ],
          },
          disabled: false,
          duration: {
            value: null,
            units: `seconds`,
            expiry: null,
            expired: false,
          },
          description: ``,
          tint: `#ffffff`,
          transfer: true,
          statuses: [],
          sort: 0,
          flags: {},
          _stats: {
            compendiumSource: null,
            duplicateSource: null,
            exportSource: null,
            coreVersion: `14.364`,
            systemId: `dnd5e`,
            systemVersion: `5.3.3`,
            lastModifiedBy: `Tu6NIikbqtsNemQh`,
            createdTime: 1788293695743,
            modifiedTime: 1788293695743,
          },
          start: {
            combat: null,
            round: null,
            time: 0,
            turn: null,
            combatant: null,
            initiative: null,
          },
          showIcon: 1,
          folder: null,
        },
      ],
      folder: `beZ8MTpWY2cMEUlp`,
      sort: 3000000,
      flags: {
        dnd5e: {
          cachedFor: `.Item.mmSpellcasting00.Activity.` + setId,
        },
      },
      _stats: {
        compendiumSource: `Compendium.dnd5e.spells24.Item.phbsplConeofCold`,
        duplicateSource: null,
        exportSource: null,
        coreVersion: `14.364`,
        systemId: `dnd5e`,
        systemVersion: `5.3.3`,
        lastModifiedBy: `Tu6NIikbqtsNemQh`,
        createdTime: 1788293695743,
        modifiedTime: 1788293695743,
      },
      _id: `mPM1yrHMPklU8VcP`,
      ownership: {
        default: 0,
      },
    },
    activity: {
      [setId]: {
        type: `cast`,
        spell: {
          uuid: `Compendium.dnd5e.spells24.Item.phbsplConeofCold`,
          challenge: {
            attack: null,
            save: null,
            override: false,
          },
          level: level || 5,
          properties: [],
          spellbook: true,
          ability: ``,
        },
        _id: setId,
        sort: 1100000,
        activation: {
          type: `action`,
          value: null,
          override: false,
        },
        consumption: {
          scaling: {
            allowed: false,
          },
          spellSlot: true,
          targets: perDay
            ? [
                {
                  type: `activityUses`,
                  value: perDay.toString(),
                  scaling: {},
                },
              ]
            : [],
        },
        description: {
          chatFlavor: ``,
        },
        duration: {
          units: `inst`,
          concentration: false,
          override: false,
        },
        range: {
          override: false,
          units: `self`,
        },
        target: {
          template: {
            contiguous: false,
            units: `ft`,
            stationary: false,
          },
          affects: {
            choice: false,
          },
          override: false,
          prompt: true,
        },
        uses: {
          spent: 0,
          recovery: [
            {
              period: `day`,
              type: `recoverAll`,
            },
          ],
          max: `1`,
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
  };
}
