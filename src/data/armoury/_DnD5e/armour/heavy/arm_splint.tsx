export function dnd5e_arm_splint(equipped: boolean) {
  return {
    name: `Splint Armor`,
    system: {
      description: {
        value: ``,
        chat: ``,
      },
      price: {
        value: 200,
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
        value: 60,
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
        value: 17,
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
        baseItem: `splint`,
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
      identifier: `splint-armor`,
      crew: {
        value: [],
      },
    },
    type: `equipment`,
    folder: `zqXSu2wOJljt7AsS`,
    img: `modules/dnd-players-handbook/assets/icons/armor/splint-armor.webp`,
    effects: [],
    flags: {
      dnd5e: {},
    },
    _stats: {
      compendiumSource:
        `Compendium.dnd-players-handbook.equipment.Item.phbarmSplintArmo`,
      duplicateSource: null,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      createdTime: 1788998612423,
      modifiedTime: 1788998612423,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      exportSource: {
        worldId: `compendium-project-dandd`,
        uuid: `Item.phbarmSplintArmo`,
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
