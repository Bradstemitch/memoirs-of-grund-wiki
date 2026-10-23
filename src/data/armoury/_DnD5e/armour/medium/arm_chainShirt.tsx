export function dnd5e_arm_chainShirt(equipped: boolean) {
  return {
    name: `Chain Shirt`,
    system: {
      description: {
        value: ``,
        chat: ``,
      },
      price: {
        value: 50,
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
        value: 13,
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
        baseItem: `chainshirt`,
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
      identifier: `chain-shirt`,
      crew: {
        value: [],
      },
    },
    type: `equipment`,
    folder: `tNySLDnz2qPVahU7`,
    img: `modules/dnd-players-handbook/assets/icons/armor/chain-shirt.webp`,
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
      createdTime: 1788997951220,
      modifiedTime: 1788997951220,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      exportSource: {
        worldId: `compendium-project-dandd`,
        uuid: `Item.phbarmChainShirt`,
        coreVersion: `14.364`,
        systemId: `dnd5e`,
        systemVersion: `5.3.3`,
      },
      compendiumSource:
        `Compendium.dnd-players-handbook.equipment.Item.phbarmChainShirt`,
    },
    ownership: {
      default: 0,
    },
  };
}
