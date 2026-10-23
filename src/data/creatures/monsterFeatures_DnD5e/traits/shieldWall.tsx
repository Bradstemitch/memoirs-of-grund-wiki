export function dnd5e_trait_shieldWall() {
  return {
    name: `Shield Wall`,
    type: `feat`,
    img: `icons/equipment/shield/oval-wooden-boss-steel.webp`,
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
          `<p>While the [[lookup @name lowercase]]{monster} is wielding a shield and within 5 ft. of at least two other allies wielding a shield, it adds 2 to its AC. While in a Shield Wall, when the [[lookup @name lowercase]]{monster} is an obstacle to a target it grants three-quarters cover instead of half cover.</p><section id="secret-Oy7DmECtDakRcKtJ" class="secret"><p><strong>Foundry Note</strong></p><p>This feature includes an Active Effect which provides the Armor Class bonus. Disable it when it is not relevant.</p></section>`,
        chat: ``,
      },
      identifier: `shield-wall`,
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
      properties: [`trait`],
      requirements: ``,
      type: {
        value: `monster`,
        subtype: ``,
      },
    },
    effects: [
      {
        name: `Shield Wall`,
        img: `systems/dnd5e/icons/svg/items/feature.svg`,
        origin: `Item.YvC90EOdk9sehTrx`,
        type: `base`,
        _id: `xRJw2i5vd8wkrfkc`,
        system: {
          changes: [
            {
              key: `system.attributes.ac.bonus`,
              type: `add`,
              value: 2,
              phase: `initial`,
              priority: null,
            },
          ],
        },
        disabled: true,
        start: null,
        duration: {
          value: null,
          units: `seconds`,
          expiry: null,
          expired: false,
        },
        description: ``,
        tint: `#ffffff`,
        transfer: true,
        statuses: [],
        showIcon: 1,
        folder: null,
        sort: 0,
        flags: {
          dnd5e: {
            riders: {
              statuses: [],
            },
          },
        },
        _stats: {
          coreVersion: `14.364`,
          systemId: `dnd5e`,
          systemVersion: `5.3.3`,
          createdTime: 1788340455541,
          modifiedTime: 1788340479003,
          lastModifiedBy: `Tu6NIikbqtsNemQh`,
          compendiumSource: null,
          duplicateSource: null,
          exportSource: null,
        },
      },
    ],
    folder: null,
    flags: {},
    _stats: {
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      createdTime: 1788340394308,
      modifiedTime: 1788340713511,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      compendiumSource: null,
      duplicateSource: `Item.YvC90EOdk9sehTrx`,
      exportSource: {
        worldId: `compendium-project-dandd`,
        uuid: `Item.YvC90EOdk9sehTrx`,
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
