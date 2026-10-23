export function dnd5e_trait_militia() {
  return {
    name: `Militia`,
    type: `feat`,
    img: `systems/dnd5e/icons/svg/items/feature.svg`,
    system: {
      activities: {},
      uses: {
        spent: 0,
        recovery: [],
        max: ``,
      },
      advancement: {},
      description: {
        value:
          `<p>The Soldier has Disadvantage on Saving Throws against being Frightened while standing more than 60 ft. away from an ally or if this creature has no ally in sight.</p>`,
        chat: ``,
      },
      identifier: `feature-2`,
      source: {
        revision: 1,
        rules: `2024`,
      },
      crewed: false,
      enchant: {},
      prerequisites: {
        items: [],
        repeatable: false,
        level: null,
      },
      properties: [],
      requirements: ``,
      type: {
        value: ``,
        subtype: ``,
      },
    },
    effects: [],
    folder: null,
    flags: {},
    _stats: {
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      createdTime: 1788356700480,
      modifiedTime: 1788356720152,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      compendiumSource: null,
      duplicateSource: null,
      exportSource: {
        worldId: `compendium-project-dandd`,
        uuid: `Item.hJVgV1xWaq8L0prU`,
        coreVersion: `14.364`,
        systemId: `dnd5e`,
        systemVersion: `5.3.3`,
      },
    },
    ownership: {
      default: 0,
    },
  };
}
