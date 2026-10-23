export function dnd5e_trait_bloodFrenzy() {
  return {
    name: `Blood Frenzy`,
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
          `<p>The [[lookup @name lowercase]]{monster} has Advantage on attack rolls against any creature that doesn't have all its Hit Points.</p>`,
        chat: ``,
      },
      identifier: `blood-frenzy`,
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
      requirements: ``,
      advancement: {},
      crewed: false,
    },
    folder: `L9Zgr8qAPc3ngKhb`,
    img: `icons/skills/wounds/blood-drip-droplet-red.webp`,
    effects: [],
    flags: {},
    _stats: {
      duplicateSource: null,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      createdTime: 1789723857567,
      modifiedTime: 1789723857567,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      exportSource: {
        worldId: `compendium-project-dandd`,
        uuid: `Item.mmBloodFrenzy000`,
        coreVersion: `14.364`,
        systemId: `dnd5e`,
        systemVersion: `5.3.3`,
      },
      compendiumSource:
        `Compendium.dnd5e.monsterfeatures24.Item.mmBloodFrenzy000`,
    },
    ownership: {
      default: 0,
    },
  };
}
