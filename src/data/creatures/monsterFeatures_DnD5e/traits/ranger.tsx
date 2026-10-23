export function dnd5e_trait_ranger() {
  return {
    _id: `NPTnV9YupSeKJrQ0`,
    name: `Ranger`,
    type: `feat`,
    img: `icons/skills/ranged/target-bullseye-archer-orange.webp`,
    system: {
      description: {
        value:
          `<p>The [[lookup @name lowercase]]{monster} gains a +2 bonus to Ranged Attack Rolls. In addition the [[lookup @name lowercase]]{monster} does not suffer Disadvantage on attacks made at long range.</p>`,
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
      identifier: `ranger`,
      advancement: {},
      crewed: false,
    },
    effects: [],
    folder: null,
    sort: 0,
    flags: {},
    _stats: {
      compendiumSource: null,
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
