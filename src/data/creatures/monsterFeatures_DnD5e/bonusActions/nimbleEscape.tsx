export function dnd5e_bonus_nimbleEscape() {
  return {
    _id: `mmNimbleEscape00`,
    name: `Nimble Escape`,
    type: `feat`,
    system: {
      type: {
        value: `monster`,
        subtype: ``,
      },
      activities: {
        CcMi6Alf0pup7o81: {
          type: `utility`,
          _id: `CcMi6Alf0pup7o81`,
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
          effects: [
            {
              _id: `7U7Pe61lsMZgN7qh`,
              level: {},
            },
          ],
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
            name: ``,
            formula: ``,
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
          `<p class="feature">The [[lookup @name lowercase]]{monster} takes the &amp;Reference[Disengage] or &amp;Reference[Hide] action.</p>`,
        chat: ``,
      },
      identifier: `nimble-escape`,
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
    img: `icons/skills/movement/ball-spinning-blue.webp`,
    effects: [
      {
        name: `Apply Hide Action to Target`,
        img: `systems/dnd5e/icons/svg/statuses/hiding.svg`,
        origin: `Item.mmNimbleEscape00`,
        _id: `7U7Pe61lsMZgN7qh`,
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
        description: ``,
        tint: `#ffffff`,
        transfer: false,
        statuses: [`hiding`],
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
          createdTime: 1788433876172,
          modifiedTime: 1788433876172,
        },
        showIcon: 2,
        start: {
          combat: null,
          round: null,
          time: 0,
          turn: null,
          combatant: null,
          initiative: null,
        },
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
        `Compendium.dnd-monster-manual.features.Item.mmNimbleEscape00`,
      duplicateSource: null,
      exportSource: null,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      createdTime: 1788433876172,
      modifiedTime: 1788433876172,
    },
    sort: 0,
    ownership: {
      default: 0,
    },
  };
}
