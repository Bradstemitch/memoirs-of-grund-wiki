export function dnd5e_trait_sunlightSensitivity() {
  return {
    name: `Sunlight Sensitivity`,
    type: `feat`,
    system: {
      type: {
        value: `monster`,
        subtype: ``,
      },
      activities: {},
      uses: {
        spent: 0,
        recovery: [],
        max: ``,
      },
      description: {
        value:
          `<p>While in sunlight, the [[lookup @name lowercase]]{monster} has Disadvantage on ability checks and attack rolls.</p>`,
        chat: ``,
      },
      identifier: `sunlight-sensitivity`,
      source: {
        revision: 1,
        rules: `2024`,
      },
      enchant: {},
      prerequisites: {
        level: null,
        items: [],
        repeatable: false,
      },
      properties: [`trait`],
      requirements: `While in sunlight`,
      advancement: {},
      crewed: false,
    },
    folder: `L9Zgr8qAPc3ngKhb`,
    img: `icons/creatures/eyes/humanoid-single-blind.webp`,
    effects: [],
    flags: {},
    _stats: {
      duplicateSource: null,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      createdTime: 1788449803469,
      modifiedTime: 1788449803469,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      exportSource: {
        worldId: `compendium-project-dandd`,
        uuid: `Item.mmSunlightSensit`,
        coreVersion: `14.364`,
        systemId: `dnd5e`,
        systemVersion: `5.3.3`,
      },
      compendiumSource:
        `Compendium.dnd5e.monsterfeatures24.Item.mmSunlightSensit`,
    },
    ownership: {
      default: 0,
    },
  };
}
