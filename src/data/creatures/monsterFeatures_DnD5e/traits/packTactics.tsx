export function dnd5e_trait_packTactics() {
  return {
    name: `Pack Tactics`,
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
          `<p>The [[lookup @name lowercase]]{monster} has Advantage on an attack roll against a creature if at least one of the [[lookup @name lowercase]]{monster}'s allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition.</p>`,
        chat: ``,
      },
      identifier: `pack-tactics`,
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
      requirements: `Ally within 5 feet of attack target`,
      advancement: {},
      crewed: false,
    },
    folder: `L9Zgr8qAPc3ngKhb`,
    img: `icons/creatures/abilities/wolf-heads-swirl-purple.webp`,
    effects: [],
    flags: {},
    _stats: {
      duplicateSource: null,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      createdTime: 1788214306224,
      modifiedTime: 1788214306224,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      exportSource: {
        worldId: `compendium-project-dandd`,
        uuid: `Item.mmPackTactics000`,
        coreVersion: `14.364`,
        systemId: `dnd5e`,
        systemVersion: `5.3.3`,
      },
      compendiumSource:
        `Compendium.dnd5e.monsterfeatures24.Item.mmPackTactics000`,
    },
    ownership: {
      default: 0,
    },
  };
}
