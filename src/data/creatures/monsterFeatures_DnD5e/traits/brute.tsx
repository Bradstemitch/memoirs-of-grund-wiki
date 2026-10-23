export function dnd5e_trait_brute() {
  return {
    _id: `NPTnV9YupSeKJrQ0`,
    name: `Brute`,
    type: `feat`,
    img: `icons/skills/melee/unarmed-punch-fist.webp`,
    system: {
      description: {
        value:
          `<p>A melee weapon deals one extra die of its damage when the [[lookup @name lowercase]]{monster} hits with it (included in the attack).</p>`,
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
        spent: 0,
        recovery: [],
      },
      type: {
        value: `monster`,
        subtype: ``,
      },
      requirements: ``,
      properties: [`trait`],
      activities: {},
      enchant: {},
      prerequisites: {
        level: null,
        items: [],
        repeatable: false,
      },
      identifier: `brute`,
      advancement: {},
      crewed: false,
    },
    effects: [],
    folder: null,
    sort: 0,
    flags: {},
    _stats: {
      compendiumSource: `Compendium.dnd5e.monsterfeatures.q8w1UF9woZDGIwvS`,
      duplicateSource: null,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      createdTime: 1788907371953,
      modifiedTime: 1788907371953,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      exportSource: null,
    },
    ownership: {
      default: 0,
    },
  };
}
