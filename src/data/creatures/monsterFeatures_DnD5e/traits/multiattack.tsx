export function dnd5e_trait_multiattack(variant: string, attacks: string) {
  function description() {
    switch (variant) {
      case ``:
        return `<p>The [[lookup @name lowercase]] makes ${attacks} attacks in one action. These attacks can be of the same type or a mixed variety of its attack actions.</p>`;
      case `ShieldBash`:
        return `<p>The [[lookup @name lowercase]]{monster} makes ${attacks} Melee attacks. It can replace one attack with a use of [[/item .mmShieldBash0000]].</p>`;
      case `Legionary`:
        return `<p>The [[lookup @name lowercase]] makes ${attacks} Melee attacks. While the [[lookup @name lowercase]] is more than 5 ft. from a hostile creature, it can make a Ranged Attack with its Javelin in place of a Melee Attack</p>`;
      case `LateLegionary`:
        return `<p>The [[lookup @name lowercase]] makes ${attacks} Melee attacks. While the [[lookup @name lowercase]] is more than 5 ft. from a hostile creature, it can make a Ranged Attack with its Plumbata in place of a Melee Attack</p>`;
      default:
        return `<p>${variant}</p>`;
    }
  }
  return {
    name: `Multiattack`,
    type: `feat`,
    system: {
      type: {
        value: `monster`,
        subtype: ``,
      },
      activities: {
        Ms63W7e3Mv2Margn: {
          type: `utility`,
          name: `Expend Use`,
          _id: `Ms63W7e3Mv2Margn`,
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
            name: ``,
            formula: ``,
          },
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
        value: description(),
        chat: ``,
      },
      identifier: `multiattack`,
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
    folder: null,
    img: `icons/skills/melee/strike-weapons-orange.webp`,
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
        `Compendium.dnd-monster-manual.features.Item.mmMultiattack000`,
      duplicateSource: `Actor.n06fahfK2mRAjGyi.Item.mmMultiattack000`,
      exportSource: {
        worldId: `compendium-project-dandd`,
        uuid: `Item.oHU0sRydHCDErDxK`,
        coreVersion: `14.364`,
        systemId: `dnd5e`,
        systemVersion: `5.3.3`,
      },
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      createdTime: 1789040992784,
      modifiedTime: 1789040992789,
    },
    ownership: {
      default: 0,
    },
  };
}
