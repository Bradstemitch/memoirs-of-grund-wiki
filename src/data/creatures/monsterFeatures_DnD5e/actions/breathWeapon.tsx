export function dnd5e_action_breathWeapon({
  coneLine,
  size,
  type,
}: {
  coneLine: string;
  size: number;
  type: string;
}) {
  return {
    name: `${type} Breath`,
    type: `feat`,
    system: {
      type: {
        value: `monster`,
        subtype: ``,
      },
      activities: {
        bDqgmtLG3zcVuqdi: {
          type: `save`,
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
            targets: [
              {
                type: `itemUses`,
                value: `1`,
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
          range: {
            override: false,
            units: `self`,
            special: ``,
          },
          target: {
            template: {
              contiguous: false,
              units: `ft`,
              type: coneLine,
              size: size.toString(),
              count: ``,
              width: `5`,
              stationary: false,
            },
            affects: {
              choice: false,
              count: ``,
              type: `creature`,
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
          damage: {
            parts: [
              {
                custom: {
                  enabled: false,
                  formula: ``,
                },
                number: 7,
                denomination: 6,
                bonus: ``,
                types: [`fire`],
                scaling: {
                  number: 1,
                },
              },
            ],
            onSave: `half`,
          },
          save: {
            ability: [`dex`],
            dc: {
              calculation: `con`,
              formula: `11`,
            },
          },
          name: ``,
          _id: `bDqgmtLG3zcVuqdi`,
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
      uses: {
        spent: 0,
        recovery: [
          {
            period: `recharge`,
            formula: `5`,
            type: `recoverAll`,
          },
        ],
        max: `1`,
      },
      description: {
        value:
          `<p><em>Dexterity Saving Throw: </em>DC [[lookup @save.dc.value activity=bDqgmtLG3zcVuqdi]], each [[lookup @target.affects.type activity=bDqgmtLG3zcVuqdi]] in a [[lookup @target.template.size activity=bDqgmtLG3zcVuqdi]]-foot-long, [[lookup @target.template.width activity=bDqgmtLG3zcVuqdi]]-foot-wide Line.</p><p><em>Failure: </em>[[/damage average]] damage.</p><p><em>Success:</em> Half damage.</p>`,
        chat: ``,
      },
      identifier: `fire-breath`,
      source: {
        revision: 1,
        rules: `2024`,
      },
      enchant: {},
      prerequisites: {
        level: null,
        items: [],
        repeatable: false,
      },
      properties: [],
      requirements: ``,
      advancement: {},
      crewed: false,
    },
    folder: `4T18pEvubPMQLzvD`,
    img: `icons/creatures/abilities/dragon-fire-breath-orange.webp`,
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
      createdTime: 1788364977609,
      modifiedTime: 1788364977609,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      exportSource: {
        worldId: `compendium-project-dandd`,
        uuid: `Item.mmFireBreath0000`,
        coreVersion: `14.364`,
        systemId: `dnd5e`,
        systemVersion: `5.3.3`,
      },
      compendiumSource:
        `Compendium.dnd5e.monsterfeatures24.Item.mmFireBreath0000`,
    },
    ownership: {
      default: 0,
    },
  };
}
