export function dnd5e_action_ghoulBite({ damageDie }: { damageDie: number }) {
  return {
    _id: `mafdXNIx6EIRujnK`,
    name: `Bite`,
    type: `weapon`,
    system: {
      type: {
        value: `natural`,
        baseItem: ``,
      },
      activities: {
        W1T7dZnG8GMMwyEP: {
          _id: `W1T7dZnG8GMMwyEP`,
          type: `attack`,
          sort: 0,
          activation: {
            type: `action`,
            value: null,
            override: false,
            condition: ``,
          },
          consumption: {
            scaling: {
              allowed: false,
            },
            spellSlot: true,
            targets: [],
          },
          description: {
            chatFlavor: ``,
          },
          duration: {
            units: `inst`,
            concentration: false,
            override: false,
          },
          effects: [],
          range: {
            override: false,
            units: `self`,
          },
          target: {
            template: {
              contiguous: false,
              units: `ft`,
              type: ``,
              stationary: false,
            },
            affects: {
              choice: false,
              type: ``,
            },
            override: false,
            prompt: true,
          },
          uses: {
            spent: 0,
            recovery: [],
            max: ``,
          },
          attack: {
            critical: {
              threshold: null,
            },
            flat: false,
            type: {
              value: ``,
              classification: ``,
            },
            ability: `dex`,
            bonus: ``,
          },
          damage: {
            critical: {
              bonus: ``,
            },
            includeBase: true,
            parts: [],
          },
          name: ``,
          img: null,
          flags: {},
          visibility: {
            level: {},
            requireAttunement: false,
            requireIdentification: false,
            requireMagic: false,
          },
        },
        u64Kjp19EAOJoLeo: {
          type: `save`,
          _id: `u64Kjp19EAOJoLeo`,
          sort: 0,
          activation: {
            type: ``,
            value: null,
            override: false,
            condition: ``,
          },
          consumption: {
            scaling: {
              allowed: false,
            },
            spellSlot: true,
            targets: [],
          },
          description: {
            chatFlavor: ``,
          },
          duration: {
            units: `inst`,
            concentration: false,
            override: false,
          },
          effects: [
            {
              _id: `F66nPf6crMVqKXCc`,
              onSave: false,
              level: {},
            },
          ],
          range: {
            override: false,
            units: `self`,
          },
          target: {
            template: {
              contiguous: false,
              units: `ft`,
              type: ``,
              stationary: false,
            },
            affects: {
              choice: false,
              type: `creature`,
              count: `1`,
              special: `that isn’t an Undead or elf`,
            },
            override: false,
            prompt: true,
          },
          uses: {
            spent: 0,
            recovery: [],
            max: ``,
          },
          damage: {
            parts: [],
            onSave: `none`,
          },
          save: {
            ability: [`con`],
            dc: {
              calculation: `con`,
              formula: `8 + @mod + @prof`,
            },
          },
          name: ``,
          img: null,
          flags: {},
          visibility: {
            level: {},
            requireAttunement: false,
            requireIdentification: false,
            requireMagic: false,
          },
        },
      },
      uses: {
        spent: 0,
        recovery: [],
        max: ``,
      },
      description: {
        value:
          `<p>[[/attack extended]]. [[/damage average extended]]. If the target is a [[lookup @target.affects.type activity=u64Kjp19EAOJoLeo]] [[lookup @target.affects.special activity=u64Kjp19EAOJoLeo]], it is subjected to the following effect.</p><p><em>Constitution Saving Throw:</em> DC [[lookup @save.dc.value activity=u64Kjp19EAOJoLeo]].</p><p><em>Failure:</em> The target has the &amp;Reference[Paralyzed apply=false] condition until the end of its next turn.</p>`,
        chat: ``,
      },
      identifier: `bite`,
      source: {
        revision: 1,
        rules: `2024`,
        book: ``,
        license: `CC-BY-4.0`,
      },
      identified: true,
      unidentified: {
        description: ``,
      },
      container: null,
      quantity: 1,
      weight: {
        value: 0,
        units: `lb`,
      },
      price: {
        value: 0,
        denomination: `gp`,
      },
      rarity: ``,
      attunement: ``,
      armor: {
        value: null,
      },
      cover: null,
      hp: {
        value: null,
        max: null,
        dt: null,
        conditions: ``,
      },
      ammunition: {},
      damage: {
        base: {
          number: 1,
          denomination: 4,
          types: [`slashing`],
          custom: {
            enabled: false,
          },
          scaling: {
            number: 1,
          },
          bonus: ``,
        },
        versatile: {
          number: null,
          denomination: null,
          types: [],
          custom: {
            enabled: false,
          },
          scaling: {
            number: 1,
          },
        },
      },
      properties: [`fin`],
      proficient: null,
      range: {
        value: null,
        long: null,
        reach: null,
        units: `ft`,
      },
      mastery: ``,
      attuned: false,
      equipped: true,
      crew: {
        value: [],
      },
    },
    folder: `pSCWWdqMX9eUATRJ`,
    img: `icons/creatures/abilities/fangs-teeth-bite.webp`,
    effects: [
      {
        name: `Paralyzed`,
        img: `systems/dnd5e/icons/svg/statuses/paralyzed.svg`,
        origin:
          `Compendium.dnd5e.actors24.Actor.mmGhoul000000000.Item.mafdXNIx6EIRujnK`,
        _id: `F66nPf6crMVqKXCc`,
        type: `base`,
        system: {
          changes: [],
        },
        disabled: false,
        duration: {
          value: 1,
          units: `turns`,
          expiry: `turnStart`,
          expired: false,
        },
        description:
          `<p>The target has the &amp;Reference[Paralyzed apply=false] condition until the end of its next turn.</p>`,
        tint: `#ffffff`,
        transfer: false,
        statuses: [`paralyzed`],
        sort: 0,
        flags: {},
        _stats: {
          compendiumSource: null,
          duplicateSource: null,
          exportSource: null,
          coreVersion: `14.364`,
          systemId: `dnd5e`,
          systemVersion: `5.3.3`,
          lastModifiedBy: `Tu6NIikbqtsNemQh`,
          createdTime: 1788880820857,
          modifiedTime: 1788880820857,
        },
        showIcon: 2,
        start: null,
        folder: null,
      },
    ],
    flags: {
      dnd5e: {
        riders: {
          activity: [],
          effect: [],
        },
      },
    },
    _stats: {
      compendiumSource:
        `Compendium.dnd-monster-manual.features.Item.mmClaw0000000000`,
      duplicateSource: null,
      exportSource: null,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      createdTime: 1788880820857,
      modifiedTime: 1788880820857,
    },
    sort: 5800000,
    ownership: {
      default: 0,
    },
  };
}
