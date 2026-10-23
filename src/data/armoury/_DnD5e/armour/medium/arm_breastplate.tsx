export function dnd5e_arm_breastplate(equipped: boolean) {
  return {
    name: `Breastplate`,
    system: {
      description: {
        value: ``,
        chat: ``,
      },
      price: {
        value: 400,
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
        value: 20,
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
        baseItem: `breastplate`,
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
      identifier: `breastplate`,
      crew: {
        value: [],
      },
    },
    type: `equipment`,
    folder: `tNySLDnz2qPVahU7`,
    img: `modules/dnd-players-handbook/assets/icons/armor/breastplate.webp`,
    effects: [],
    flags: {
      dnd5e: {},
    },
    _stats: {
      compendiumSource:
        `Compendium.dnd-players-handbook.equipment.Item.phbarmBreastplat`,
      duplicateSource: null,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      createdTime: 1788998104132,
      modifiedTime: 1788998104132,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      exportSource: {
        worldId: `compendium-project-dandd`,
        uuid: `Item.phbarmBreastplat`,
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
