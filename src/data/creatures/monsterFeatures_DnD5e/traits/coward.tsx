export function dnd5e_trait_coward() {
  return {
    _id: `mmCoward00000000`,
    name: `Coward`,
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
          `<p>While &amp;Reference[Bloodied], the [[lookup @name lowercase]]{monster} has Disadvantage on attack rolls and saving throws.</p>`,
        chat: ``,
      },
      identifier: `coward`,
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
      requirements: `While Bloodied`,
      advancement: {},
      cover: null,
      crewed: false,
    },
    folder: `L9Zgr8qAPc3ngKhb`,
    img: `icons/skills/wounds/injury-hand-blood-red.webp`,
    effects: [],
    flags: {},
    _stats: {
      compendiumSource:
        `Compendium.dnd-monster-manual.features.Item.mmBloodiedFrenzy`,
      duplicateSource: null,
      exportSource: null,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      createdTime: 1788449013696,
      modifiedTime: 1788449013696,
    },
    sort: 0,
    ownership: {
      default: 0,
    },
  };
}
