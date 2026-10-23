export function dnd5e_react_redirectAttack() {
  return {
    _id: `mmRedirectAttack`,
    name: `Redirect Attack`,
    type: `feat`,
    system: {
      type: {
        value: `monster`,
        subtype: ``,
      },
      activities: {
        pIlCmuPw8YUqAISY: {
          type: `utility`,
          _id: `pIlCmuPw8YUqAISY`,
          sort: 0,
          activation: {
            type: `reaction`,
            value: null,
            override: false,
            condition:
              `A creature the [[lookup @name lowercase]]{monster} can see makes an attack roll against it.`,
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
              type: `ally`,
              count: `1`,
              special: `a Small or Medium ally`,
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
          `<p class="feature"><em>Trigger:</em> A creature the [[lookup @name lowercase]]{monster} can see makes an attack roll against it.</p><p class="feature"><em>Response:</em> The [[lookup @name lowercase]]{monster} chooses [[lookup @target.affects.special activity=pIlCmuPw8YUqAISY]] within [[lookup @range.value activity=pIlCmuPw8YUqAISY]] feet of itself. The [[lookup @name lowercase]]{monster} and that [[lookup @target.affects.type activity=pIlCmuPw8YUqAISY]] swap places, and the [[lookup @target.affects.type activity=pIlCmuPw8YUqAISY]] becomes the target of the attack instead.</p>`,
        chat: ``,
      },
      identifier: `redirect-attack`,
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
    img: `icons/magic/defensive/illusion-evasion-echo-purple.webp`,
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
        `Compendium.dnd-monster-manual.features.Item.mmRedirectAttack`,
      duplicateSource: null,
      exportSource: null,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      createdTime: 1788304721461,
      modifiedTime: 1788304721461,
    },
    sort: 2,
    ownership: {
      default: 0,
    },
  };
}
