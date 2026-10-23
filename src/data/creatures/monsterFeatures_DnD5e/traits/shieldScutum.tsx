export function dnd5e_trait_shieldScutum() {
  return {
    name: `Scutum`,
    type: `feat`,
    _id: `xJwc5p6ZwG32F4We`,
    img: `icons/equipment/shield/Scutum-steel-worn.webp`,
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
          `<p>While the [[lookup @name lowercase]] is wielding a shield:</p><ul><li><p>The [[lookup @name lowercase]]'s speed is reduced by 5ft</p></li><li><p>The [[lookup @name lowercase]] gains the benefits of half-cover while it is not flanked by hostile creatures</p></li><li><p>As a free action on its turn, the [[lookup @name lowercase]] can use its reaction and reduce its movement speed by 15ft to asume a defensive stance. Doing so improves its half-cover bonus to three-quarters cover until the start of its next turn, however all attack rolls made by the [[lookup @name lowercase]] suffer Disadvantage.</p></li></ul>`,
        chat: ``,
      },
      identifier: `feature`,
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
        name: `Scutum`,
        img: `icons/equipment/shield/Scutum-steel-worn.webp`,
        origin: `Actor.fsPruAIDOg4tVrgb.Item.xJwc5p6ZwG32F4We`,
        type: `base`,
        _id: `ihK6KmKhIz2588gt`,
        system: {
          changes: [
            {
              key: `system.attributes.movement.walk`,
              type: `subtract`,
              value: 5,
              phase: `initial`,
              priority: null,
            },
          ],
        },
        disabled: false,
        start: null,
        duration: {
          value: null,
          units: `seconds`,
          expiry: null,
          expired: false,
        },
        description: `<p>Reduced speed by 5ft</p>`,
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
          createdTime: 1789038866517,
          modifiedTime: 1789038966704,
          lastModifiedBy: `Tu6NIikbqtsNemQh`,
          compendiumSource: null,
          duplicateSource: null,
          exportSource: null,
        },
      },
    ],
    folder: null,
    sort: 0,
    flags: {},
    _stats: {
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      createdTime: 1789038582032,
      modifiedTime: 1789039051129,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      compendiumSource: null,
      duplicateSource: null,
      exportSource: null,
    },
    ownership: {
      default: 0,
    },
  };
}
