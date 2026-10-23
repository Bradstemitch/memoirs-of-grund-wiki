export function dnd5e_trait_legion(name: string) {
  return {
    name: name,
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
          `<p>The [[lookup @name lowercase]]{monster} has Advantage on melee attack rolls and dexterity saving throws if at least one of the [[lookup @name lowercase]]{monster}'s allies is within 5 feet of the [[lookup @name lowercase]]{monster}, the ally doesn't have the Incapacitated condition and they are both carrying a shield.</p>`,
        chat: ``,
      },
      identifier: `legion`,
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
      requirements: `${name} ally within 5 feet`,
      advancement: {},
      crewed: false,
    },
    folder: null,
    img: `icons/creatures/birds/raptor-hawk-flying.webp`,
    effects: [],
    flags: {},
    _stats: {
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      createdTime: 1789032075175,
      modifiedTime: 1789032075179,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      exportSource: {
        worldId: `compendium-project-dandd`,
        uuid: `Item.bJBcd6T2LSuBamey`,
        coreVersion: `14.364`,
        systemId: `dnd5e`,
        systemVersion: `5.3.3`,
      },
      compendiumSource: null,
      duplicateSource: `Actor.LDAzNpjaIIsTAdaO.Item.FBMa4F1s6opfd5Hf`,
    },
    ownership: {
      default: 0,
    },
  };
}
