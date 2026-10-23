export function dnd5e_arm_chainMail(equipped: boolean) {
  return {
    name: `Chain Mail`,
    system: {
      description: {
        value: ``,
        chat: ``,
      },
      price: {
        value: 75,
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
        value: 55,
        units: `lb`,
      },
      rarity: ``,
      attunement: ``,
      attuned: false,
      equipped: equipped,
      cover: null,
      uses: {
        max: ``,
        spent: 0,
        recovery: [],
      },
      armor: {
        value: 16,
        dex: null,
      },
      hp: {
        value: null,
        max: null,
        dt: null,
        conditions: ``,
      },
      type: {
        value: `heavy`,
        baseItem: `chainmail`,
      },
      properties: [`stealthDisadvantage`],
      speed: {
        value: null,
        conditions: ``,
        units: `ft`,
      },
      strength: 13,
      proficient: null,
      activities: {},
      identifier: `chain-mail`,
      crew: {
        value: [],
      },
    },
    type: `equipment`,
    folder: `zqXSu2wOJljt7AsS`,
    img: `modules/dnd-players-handbook/assets/icons/armor/chain-mail.webp`,
    effects: [],
    flags: {
      dnd5e: {
        '-=riders': null,
      },
    },
    _stats: {
      duplicateSource: null,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      createdTime: 1788998250866,
      modifiedTime: 1788998250866,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      exportSource: {
        worldId: `compendium-project-dandd`,
        uuid: `Item.phbarmChainMail0`,
        coreVersion: `14.364`,
        systemId: `dnd5e`,
        systemVersion: `5.3.3`,
      },
      compendiumSource:
        `Compendium.dnd-players-handbook.equipment.Item.phbarmChainMail0`,
    },
    ownership: {
      default: 0,
    },
  };
}
