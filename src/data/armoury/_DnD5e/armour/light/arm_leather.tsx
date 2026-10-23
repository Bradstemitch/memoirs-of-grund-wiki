export function dnd5e_arm_leatherArmour(equipped: boolean) {
  return {
  name: `Leather Armor`,
  system: {
    description: {
      value: ``,
      chat: ``
    },
    price: {
      value: 10,
      denomination: `gp`
    },
    source: {
      custom: ``,
      rules: `2024`,
      revision: 1
    },
    identified: true,
    unidentified: {
      description: ``
    },
    container: null,
    quantity: 1,
    weight: {
      value: 10,
      units: `lb`
    },
    rarity: ``,
    attunement: ``,
    attuned: false,
    equipped: equipped,
    cover: null,
    uses: {
      max: ``,
      spent: 0,
      recovery: []
    },
    armor: {
      value: 11,
      dex: null
    },
    hp: {
      value: null,
      max: null,
      dt: null,
      conditions: ``
    },
    type: {
      value: `light`,
      baseItem: `leather`
    },
    properties: [],
    speed: {
      value: null,
      conditions: ``,
      units: `ft`
    },
    strength: null,
    proficient: null,
    activities: {},
    identifier: `leather-armor`,
    crew: {
      value: []
    }
  },
  type: `equipment`,
  folder: `G3X11BbtmEqLmEnK`,
  img: `modules/dnd-players-handbook/assets/icons/armor/leather-armor.webp`,
  effects: [],
  flags: {
    dnd5e: {}
  },
  _stats: {
    compendiumSource: `Compendium.dnd-players-handbook.equipment.Item.phbarmLeatherArm`,
    duplicateSource: null,
    coreVersion: `14.364`,
    systemId: `dnd5e`,
    systemVersion: `5.3.3`,
    createdTime: 1791457498693,
    modifiedTime: 1791457498693,
    lastModifiedBy: `Tu6NIikbqtsNemQh`,
    exportSource: {
      worldId: `compendium-project-dandd`,
      uuid: `Item.phbarmLeatherArm`,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`
    }
  },
  ownership: {
    default: 0
  }
}
}
