export function dnd5e_trait_ancestralArms(variant: string) {
  function description() {
    switch(variant){
      case `Sylvan`:
      return `<ul><li><p>While the [[lookup @name lowercase]]{monster} is in a forest it counts as being in half cover and has Advantage on stealth checks.</p></li><li><p>The [[lookup @name lowercase]]{monster} has advantage on Saving Throws against spells and other magical effects, also magic can’t put it to sleep.</p></li><li><p>The [[lookup @name lowercase]]{monster} gains an extra +1 bonus to attack and damage rolls with Shortswords, Longswords, Shortbows and Longbows, additionally Longswords gain the Finesse property.</p></li></ul>`
    }
  }
  return {
    _id: `MoGAncestralArms`,
    name: `Ancestral Blood and Arms (${variant})`,
    type: `feat`,
    img: `icons/skills/wounds/blood-drip-droplet-red.webp`,
    system: {
      description: {
        value:
          description(),
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
      identifier: `ancestral-arms`,
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
