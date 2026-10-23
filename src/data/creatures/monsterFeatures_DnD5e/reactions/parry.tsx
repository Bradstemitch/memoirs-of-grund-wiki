export function dnd5e_react_Parry() {
  return {
    _id: `mmParry000000000`,
    name: `Parry`,
    type: `feat`,
    system: {
      type: {
        value: `monster`,
        subtype: ``,
      },
      activities: {
        aLG3BRZL7P6OEjwd: {
          type: `utility`,
          name: `Use`,
          _id: `aLG3BRZL7P6OEjwd`,
          sort: 0,
          activation: {
            type: `reaction`,
            value: null,
            override: false,
            condition: `hit by a melee attack roll while holding a weapon`,
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
            special: ``,
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
              count: ``,
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
          roll: {
            prompt: false,
            visible: false,
            name: `Bonus AC`,
            formula: `2`,
          },
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
        value:
          `<p><em>Trigger:</em> The [[lookup @name lowercase]]{monster} is [[lookup @activation.condition activity=aLG3BRZL7P6OEjwd]]. <em>Response:</em> The [[lookup @name lowercase]]{monster} adds [[lookup @roll.formula activity=aLG3BRZL7P6OEjwd]] to its AC against that attack, possibly causing it to miss.</p>`,
        chat: ``,
      },
      identifier: `parry`,
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
      cover: null,
      crewed: false,
    },
    folder: `4T18pEvubPMQLzvD`,
    img: `icons/skills/melee/swords-parry-block-blue.webp`,
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
        `Compendium.dnd-monster-manual.features.Item.mmParry000000000`,
      duplicateSource: null,
      exportSource: null,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      createdTime: 1788288277469,
      modifiedTime: 1788288277469,
    },
    sort: 1,
    ownership: {
      default: 0,
    },
  };
}
