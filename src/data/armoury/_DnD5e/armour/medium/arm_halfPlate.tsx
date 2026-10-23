export function dnd5e_arm_halfPlate(equipped: boolean) {
  return {
    name: `Half Plate Armor`,
    system: {
      description: {
        value: ``,
        chat: ``,
      },
      price: {
        value: 750,
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
        value: 15,
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
        baseItem: `halfplate`,
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
      identifier: `half-plate-armor`,
      crew: {
        value: [],
      },
    },
    type: `equipment`,
    folder: `tNySLDnz2qPVahU7`,
    img: `modules/dnd-players-handbook/assets/icons/armor/half-plate-armor.webp`,
    effects: [],
    flags: {
      dnd5e: {},
    },
    _stats: {
      compendiumSource:
        `Compendium.dnd-players-handbook.equipment.Item.phbarmHalfPlateA`,
      duplicateSource: null,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      createdTime: 1788997743387,
      modifiedTime: 1788997743387,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      exportSource: {
        worldId: `compendium-project-dandd`,
        uuid: `Item.phbarmHalfPlateA`,
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
