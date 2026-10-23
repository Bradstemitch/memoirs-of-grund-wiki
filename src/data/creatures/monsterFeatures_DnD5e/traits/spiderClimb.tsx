export function dnd5e_trait_spiderClimb() {
  return {
    _id: `mmSpiderClimb000`,
    name: `Spider Climb`,
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
          `<p>The [[lookup @name lowercase]]{monster} can climb difficult surfaces, including along ceilings, without needing to make an ability check.</p>`,
        chat: ``,
      },
      identifier: `spider-climb`,
      source: {
        revision: 1,
        rules: `2024`,
        book: ``,
        license: `CC-BY-4.0`,
      },
      enchant: {},
      prerequisites: {
        level: null,
        repeatable: false,
        items: [],
      },
      properties: [`trait`],
      requirements: ``,
      advancement: {},
      cover: null,
      crewed: false,
    },
    folder: `L9Zgr8qAPc3ngKhb`,
    img: `icons/creatures/invertebrates/spider-pink-purple.webp`,
    effects: [],
    flags: {},
    _stats: {
      compendiumSource:
        `Compendium.dnd-monster-manual.features.Item.mmSpiderClimb000`,
      duplicateSource: null,
      exportSource: null,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      createdTime: 1788907213476,
      modifiedTime: 1788907213476,
    },
    sort: 2,
    ownership: {
      default: 0,
    },
  };
}
