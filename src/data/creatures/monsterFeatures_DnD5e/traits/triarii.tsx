export function dnd5e_trait_triarii() {
  return {
    name: `Res Ad Triarios Venit`,
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
          `<p>While the [[lookup @name lowercase]] doesn't have the Incapacitated condition, the [[lookup @name lowercase]] and any allies within 10 ft. have a +3 bonus to Saving Throws against being Frightened.  A creature can benefit from this only once per Saving Throw.</p>`,
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
      requirements: ``,
      advancement: {},
      crewed: false,
    },
    folder: `L9Zgr8qAPc3ngKhb`,
    img: `icons/creatures/abilities/mouth-teeth-human.webp`,
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
