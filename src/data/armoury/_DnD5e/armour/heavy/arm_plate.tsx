export function dnd5e_arm_plate(equipped: boolean) {
  return {
    name: `Plate Armor`,
    system: {
      description: {
        value: ``,
        chat: ``,
      },
      price: {
        value: 1500,
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
        value: 65,
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
        value: 18,
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
        baseItem: `plate`,
      },
      properties: [`stealthDisadvantage`],
      speed: {
        value: null,
        conditions: ``,
        units: `ft`,
      },
      strength: 15,
      proficient: null,
      activities: {},
      identifier: `plate-armor`,
      crew: {
        value: [],
      },
    },
    type: `equipment`,
    folder: `zqXSu2wOJljt7AsS`,
    img: `modules/dnd-players-handbook/assets/icons/armor/plate-armor.webp`,
    effects: [],
    flags: {
      dnd5e: {},
    },
    _stats: {
      compendiumSource:
        `Compendium.dnd-players-handbook.equipment.Item.phbarmPlateArmor`,
      duplicateSource: null,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      createdTime: 1788998315134,
      modifiedTime: 1788998315134,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      exportSource: {
        worldId: `compendium-project-dandd`,
        uuid: `Item.phbarmPlateArmor`,
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
