export function dnd5e_arm_hideArmour(equipped: boolean) {
  return {
    name: `Hide Armor`,
    system: {
      description: {
        value: ``,
        chat: ``,
      },
      price: {
        value: 10,
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
        value: 12,
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
        value: 12,
        dex: 2,
      },
      hp: {
        value: null,
        max: null,
        dt: null,
        conditions: ``,
      },
      type: {
        value: `medium`,
        baseItem: `hide`,
      },
      properties: [],
      speed: {
        value: null,
        conditions: ``,
        units: `ft`,
      },
      strength: null,
      proficient: null,
      activities: {},
      identifier: `hide-armor`,
      crew: {
        value: [],
      },
    },
    type: `equipment`,
    folder: `tNySLDnz2qPVahU7`,
    img: `modules/dnd-players-handbook/assets/icons/armor/hide-armor.webp`,
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
      createdTime: 1788997989716,
      modifiedTime: 1788997989716,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      exportSource: {
        worldId: `compendium-project-dandd`,
        uuid: `Item.phbarmHideArmor0`,
        coreVersion: `14.364`,
        systemId: `dnd5e`,
        systemVersion: `5.3.3`,
      },
      compendiumSource:
        `Compendium.dnd-players-handbook.equipment.Item.phbarmHideArmor0`,
    },
    ownership: {
      default: 0,
    },
  };
}
