export function dnd5e_arm_studdedLeatherArmour(equipped: boolean) {
  return {
    name: `Studded Leather Armor`,
    system: {
      description: {
        value: ``,
        chat: ``
      },
      price: {
        value: 45,
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
        value: 13,
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
        value: 12,
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
        baseItem: `studded`
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
      identifier: `studded-leather-armor`,
      crew: {
        value: []
      }
    },
    type: `equipment`,
    folder: `G3X11BbtmEqLmEnK`,
    img: `modules/dnd-players-handbook/assets/icons/armor/studded-leather-armor.webp`,
    effects: [],
    flags: {
      dnd5e: {}
    },
    _stats: {
      compendiumSource: `Compendium.dnd-players-handbook.equipment.Item.phbarmStuddedLea`,
      duplicateSource: null,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      createdTime: 1791457685932,
      modifiedTime: 1791457685932,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      exportSource: {
        worldId: `compendium-project-dandd`,
        uuid: `Item.phbarmStuddedLea`,
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
