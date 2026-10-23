export function dnd5e_arm_ringMail(equipped: boolean) {
  return {
    name: `Ring Mail`,
    system: {
      description: {
        value: ``,
        chat: ``,
      },
      price: {
        value: 30,
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
        value: 40,
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
        value: 14,
        dex: 0,
      },
      hp: {
        value: null,
        max: null,
        dt: null,
        conditions: ``,
      },
      type: {
        value: `heavy`,
        baseItem: `ringmail`,
      },
      properties: [`stealthDisadvantage`],
      speed: {
        value: null,
        conditions: ``,
        units: `ft`,
      },
      strength: null,
      proficient: null,
      activities: {},
      identifier: `ring-mail`,
      crew: {
        value: [],
      },
    },
    type: `equipment`,
    folder: `zqXSu2wOJljt7AsS`,
    img: `modules/dnd-players-handbook/assets/icons/armor/ring-mail.webp`,
    effects: [],
    flags: {
      dnd5e: {},
    },
    _stats: {
      compendiumSource:
        `Compendium.dnd-players-handbook.equipment.Item.phbarmRingMail00`,
      duplicateSource: null,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      createdTime: 1788998379916,
      modifiedTime: 1788998379916,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      exportSource: {
        worldId: `compendium-project-dandd`,
        uuid: `Item.phbarmRingMail00`,
        coreVersion: `14.364`,
        systemId: `dnd5e`,
        systemVersion: `5.3.3`,
      },
    },
    ownership: {
      default: 0,
    },
  };
}
