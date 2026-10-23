export function dnd5e_bonus_cunningAction() {
  return {
    _id: `mmCunningAction0`,
    name: `Cunning Action`,
    type: `feat`,
    system: {
      type: {
        value: `monster`,
        subtype: ``,
      },
      activities: {
        '2El9isE16lx2LU0K': {
          type: `utility`,
          _id: `2El9isE16lx2LU0K`,
          sort: 0,
          activation: {
            type: `bonus`,
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
              type: ``,
            },
            override: false,
            prompt: false,
          },
          uses: {
            spent: 0,
            recovery: [],
            max: ``,
          },
          roll: {
            prompt: false,
            visible: false,
            formula: ``,
            name: ``,
          },
          name: `Expend Use`,
          img: `systems/dnd5e/icons/svg/monster.svg`,
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
          `<p class="feature">The [[lookup @name lowercase]]{monster} takes the &amp;Reference[Dash apply=false], the &amp;Reference[Disengage apply=false], or &amp;Reference[Hide apply=false] action.</p>`,
        chat: ``,
      },
      identifier: `cunning-action`,
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
    img: `icons/magic/control/hypnosis-mesmerism-watch.webp`,
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
        `Compendium.dnd-monster-manual.features.Item.mmCunningAction0`,
      duplicateSource: null,
      exportSource: null,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      createdTime: 1784578601753,
      modifiedTime: 1784578601753,
    },
    sort: 2,
    ownership: {
      default: 0,
    },
  };
}
