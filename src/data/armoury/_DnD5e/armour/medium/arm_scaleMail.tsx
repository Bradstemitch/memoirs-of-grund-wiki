export function dnd5e_arm_scaleMail(equipped: boolean) {
  return {
    name: `Scale Mail`,
    system: {
      description: {
        value: ``,
        chat: ``,
      },
      price: {
        value: 50,
        denomination: `gp`,
      },
      source: {
        custom: ``,
        rules: `2024`,
        revision: 1,
      },
      identified: true,
      unidentified: {
        description: ``,
      },
      container: null,
      quantity: 1,
      weight: {
        value: 45,
        units: `lb`,
      },
      rarity: ``,
      attunement: ``,
      attuned: false,
      equipped: equipped,
      cover: null,
      uses: {
        max: ``,
        spent: 0,
        recovery: [],
      },
      armor: {
        value: 14,
        dex: 2,
      },
      hp: {
        value: null,
        max: null,
        dt: null,
        conditions: ``,
      },
      type: {
        value: `medium`,
        baseItem: `scalemail`,
      },
      properties: [`stealthDisadvantage`],
      speed: {
        value: null,
        conditions: ``,
        units: `ft`,
      },
      strength: null,
      proficient: null,
      activities: {},
      identifier: `scale-mail`,
      crew: {
        value: [],
      },
    },
    type: `equipment`,
    folder: `tNySLDnz2qPVahU7`,
    img: `modules/dnd-players-handbook/assets/icons/armor/scale-mail.webp`,
    effects: [],
    flags: {
      dnd5e: {},
    },
    _stats: {
      compendiumSource:
        `Compendium.dnd-players-handbook.equipment.Item.phbarmScaleMail0`,
      duplicateSource: null,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      createdTime: 1788998053300,
      modifiedTime: 1788998053300,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      exportSource: {
        worldId: `compendium-project-dandd`,
        uuid: `Item.phbarmScaleMail0`,
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
