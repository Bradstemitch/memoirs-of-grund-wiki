export function dnd5e_action_shieldBash({ damageDie }: { damageDie: number }) {
  return {
    _id: `mmShieldBash0000`,
    name: `Shield Bash`,
    type: `feat`,
    system: {
      type: {
        value: `monster`,
        subtype: ``,
      },
      activities: {
        eIErvLccVVCXiCSl: {
          type: `save`,
          _id: `eIErvLccVVCXiCSl`,
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
          effects: [
            {
              _id: `tlJPRZtTipMsmBRa`,
              onSave: false,
              level: {},
            },
          ],
          range: {
            override: false,
            units: `ft`,
            special: ``,
            value: `5`,
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
              type: `creature`,
              count: `1`,
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
                number: damageDie,
                denomination: 4,
                bonus: `@mod`,
                types: [`bludgeoning`],
                scaling: {
                  number: 1,
                },
              },
            ],
            onSave: `none`,
          },
          save: {
            ability: [`str`],
            dc: {
              calculation: `str`,
              formula: `8 + @mod + @prof`,
            },
          },
          name: `Save`,
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
        recovery: [],
        max: ``,
      },
      description: {
        value:
          `<p class="feature"><em>Strength Saving Throw:</em> DC [[lookup @save.dc.value activity=eIErvLccVVCXiCSl]], one [[lookup @target.affects.type activity=eIErvLccVVCXiCSl]] within [[lookup @range.value activity=eIErvLccVVCXiCSl]] [[lookup @range.units activity=eIErvLccVVCXiCSl]]. that the [[lookup @name lowercase]]{monster} can see.</p><p><em>Failure:</em> [[/damage average]] damage. If the target is a Medium or smaller creature, it has the &amp;Reference[Prone apply=false] condition.</p>`,
        chat: ``,
      },
      identifier: `shield-bash`,
      source: {
        revision: 1,
        rules: `2024`,
        book: ``,
        license: `CC-BY-4.0`,
      },
      enchant: {},
      prerequisites: {
        level: null,
        repeatable: false,
        items: [],
      },
      properties: [],
      requirements: ``,
      advancement: {},
      crewed: false,
    },
    folder: `4T18pEvubPMQLzvD`,
    img: `icons/equipment/shield/buckler-iron-cross-gray.webp`,
    effects: [
      {
        name: `Prone`,
        img: `systems/dnd5e/icons/svg/statuses/prone.svg`,
        origin: `Item.mmShieldBash0000`,
        _id: `tlJPRZtTipMsmBRa`,
        type: `base`,
        system: {
          changes: [],
        },
        disabled: false,
        duration: {
          value: null,
          units: `seconds`,
          expiry: null,
          expired: false,
        },
        description:
          `<p>If the target is a Medium or smaller creature, it has the &amp;Reference[Prone apply=false] condition.</p>`,
        tint: `#ffffff`,
        transfer: false,
        statuses: [`prone`],
        sort: 0,
        flags: {
          core: {
            overlay: false,
          },
        },
        _stats: {
          compendiumSource: null,
          duplicateSource: null,
          exportSource: null,
          coreVersion: `14.364`,
          systemId: `dnd5e`,
          systemVersion: `5.3.3`,
          lastModifiedBy: `Tu6NIikbqtsNemQh`,
          createdTime: 1788356796522,
          modifiedTime: 1788356796522,
        },
        showIcon: 2,
        start: null,
        folder: null,
      },
    ],
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
        `Compendium.dnd-monster-manual.features.Item.mmShieldBash0000`,
      duplicateSource: null,
      exportSource: null,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      createdTime: 1788356796522,
      modifiedTime: 1788356796522,
    },
    sort: 300000,
    ownership: {
      default: 0,
    },
  };
}
