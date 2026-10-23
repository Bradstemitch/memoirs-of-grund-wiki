export function dnd5e_trait_cavalry() {
  return {
    name: `Cavalry`,
    system: {
      description: {
        value:
          `<p>While mounted, the [[lookup @name lowercase]]{monster} has Advantage on melee attack rolls against any unmounted creature that is at least one size smaller than the mount.</p>`,
        chat: ``,
      },
      source: {
        custom: ``,
        rules: `2024`,
        book: ``,
        page: ``,
        license: ``,
        revision: 2,
      },
      uses: {
        max: ``,
        spent: 0,
        recovery: [],
      },
      type: {
        value: `monster`,
        subtype: `general`,
      },
      prerequisites: {
        level: null,
        items: [],
        repeatable: false,
      },
      properties: [],
      requirements: `Mounted`,
      activities: {},
      enchant: {},
      identifier: `cavalry`,
      advancement: {},
      crewed: false,
    },
    type: `feat`,
    img: `icons/environment/creatures/horse-brown.webp`,
    effects: [],
    folder: `tzwFgcTAGcVUmune`,
    flags: {
      dnd5e: {},
    },
    _stats: {
      compendiumSource:
        `Compendium.dnd-players-handbook.feats.Item.phbftMountedComb`,
      duplicateSource: null,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      createdTime: 1789178335246,
      modifiedTime: 1789179060403,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      exportSource: {
        worldId: `compendium-project-dandd`,
        uuid: `Item.phbftMountedComb`,
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
