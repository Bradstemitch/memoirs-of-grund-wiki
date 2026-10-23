export function dnd5e_trait_cavalryCharge(damageDie: number, damageDieSize: number, damageType: string) {
  return {
    name: `Cavalry Charge`,
    type: `feat`,
    system: {
      description: {
        value:
          `<p>While mounted, if the [[lookup @name lowercase]]{monster} moves at least 20 ft. in a straight line straight toward a target and then hits it with a lance attack on the same turn, the target takes an extra (${damageDie}d${damageDieSize}) ${damageType} damage.</p>`,
        chat: ``,
      },
      source: {
        custom: ``,
        book: ``,
        page: ``,
        license: `CC-BY-4.0`,
        rules: `2014`,
        revision: 1,
      },
      uses: {
        max: ``,
        recovery: [],
        spent: 0,
      },
      type: {
        value: `monster`,
        subtype: ``,
      },
      requirements: `Mounted`,
      activities: {
      },
      enchant: {},
      prerequisites: {
        level: null,
        items: [],
        repeatable: false,
      },
      properties: [],
      identifier: `martial-advantage`,
      advancement: {},
      crewed: false,
    },
    flags: {},
    img: `icons/skills/movement/arrow-upward-yellow.webp`,
    effects: [],
    folder: null,
    _stats: {
      duplicateSource: null,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      createdTime: 1789178504420,
      modifiedTime: 1789179097859,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      exportSource: {
        worldId: `compendium-project-dandd`,
        uuid: `Item.zg0RZmAncKJqIpax`,
        coreVersion: `14.364`,
        systemId: `dnd5e`,
        systemVersion: `5.3.3`,
      },
      compendiumSource:
        `Compendium.dnd5e.monsterfeatures.Item.zg0RZmAncKJqIpax`,
    },
    ownership: {
      default: 0,
    },
  };
}

export function dnd5e_trait_cavalryShockAssault(damageDie: number, damageDieSize: number, damageType: string) {
  const origin = dnd5e_trait_cavalryCharge(damageDie, damageDieSize, damageType);

  return {
    ...origin,
    name: `Cavalry Shock Assault`,
    system: {
      ...origin.system,
      description: {
        ...origin.system.description,
        value:
          `<p>While mounted, if the [[lookup @name lowercase]]{monster} moves at least 20 ft. in a straight line straight toward a target and then hits it with a lance attack on the same turn, the target takes an extra (${damageDie}d${damageDieSize}) ${damageType} damage. If the target is a creature, it must succeed on a DC [[8 + @abilities.str.mod + @prof]] Strength saving throw or be knocked prone.</p>`,
      },
    },
  };
}
