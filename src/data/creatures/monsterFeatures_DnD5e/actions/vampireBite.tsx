export function dnd5e_action_vampireBite() {
  return {
    _id: `mmBite0000000000`,
    name: `Bite`,
    type: `weapon`,
    system: {
      type: {
        value: `natural`,
        baseItem: ``,
      },
      activities: {
        ngPzlEI5pVSdBv86: {
          type: `save`,
          _id: `ngPzlEI5pVSdBv86`,
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
            override: true,
            units: `ft`,
            special: ``,
            value: `5`,
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
              special:
                `that is willing or that has the Grappled, Incapacitated, or Restrained condition`,
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
            parts: [
              {
                custom: {
                  enabled: false,
                  formula: ``,
                },
                number: 1,
                denomination: 4,
                bonus: `@mod`,
                types: [`piercing`],
                scaling: {
                  number: 1,
                },
              },
              {
                custom: {
                  enabled: false,
                  formula: ``,
                },
                number: 3,
                denomination: 8,
                bonus: ``,
                types: [`necrotic`],
                scaling: {
                  number: 1,
                },
              },
            ],
            onSave: `none`,
          },
          save: {
            ability: [`con`],
            dc: {
              calculation: `cha`,
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
        oLqtEY8JoKIopB6u: {
          type: `summon`,
          _id: `oLqtEY8JoKIopB6u`,
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
          bonuses: {
            ac: ``,
            hd: ``,
            hp: ``,
            attackDamage: ``,
            saveDamage: ``,
            healing: ``,
          },
          creatureSizes: [],
          creatureTypes: [],
          match: {
            attacks: false,
            proficiency: false,
            saves: false,
            ability: ``,
            disposition: false,
          },
          profiles: [
            {
              _id: `OlYpkQNoTxYKs5gm`,
              level: {
                min: null,
                max: null,
              },
              types: [],
              uuid: `Compendium.dnd5e.actors24.Actor.mmVampireSpawn00`,
            },
          ],
          summon: {
            prompt: true,
            mode: ``,
          },
          name: `Vampire Spawn Rises`,
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
          `<p class="feature"><em>Constitution Saving Throw:</em> DC [[lookup @save.dc.value activity=ngPzlEI5pVSdBv86]], one [[lookup @target.affects.type activity=ngPzlEI5pVSdBv86]] within [[lookup @range.value activity=ngPzlEI5pVSdBv86]] feet [[lookup @target.affects.special activity=ngPzlEI5pVSdBv86]].</p><p><em>Failure:</em> [[/damage average]] damage. The target's Hit Point maximum decreases by an amount equal to the Necrotic damage taken, and the [[lookup @name lowercase]]{monster} regains Hit Points equal to that amount. A Humanoid reduced to 0 Hit Points by this damage and then buried rises the following sunset as a <strong>@UUID[Compendium.dnd5e.actors24.Actor.mmVampireSpawn00]{Vampire Spawn}</strong> under the [[lookup @name lowercase]]{monster}'s control.</p>`,
        chat: ``,
      },
      identifier: `bite`,
      source: {
        revision: 1,
        rules: `2024`,
        book: ``,
        license: `CC-BY-4.0`,
      },
      properties: [],
      identified: true,
      unidentified: {
        name: `Unidentified Weapon`,
        description: ``,
      },
      mastery: ``,
      range: {
        units: `ft`,
        value: null,
        long: null,
        reach: null,
      },
      damage: {
        base: {
          denomination: 0,
          bonus: ``,
          number: null,
          types: [`piercing`],
          custom: {
            enabled: false,
          },
          scaling: {
            number: 1,
          },
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
      attuned: false,
      equipped: true,
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
      proficient: null,
      crew: {
        value: [],
      },
    },
    folder: `pSCWWdqMX9eUATRJ`,
    img: `icons/creatures/abilities/fangs-teeth-bite.webp`,
    effects: [],
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
        `Compendium.dnd-monster-manual.features.Item.mmBite0000000000`,
      duplicateSource: null,
      exportSource: null,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      createdTime: 1788907213476,
      modifiedTime: 1788907213476,
    },
    sort: 10,
    ownership: {
      default: 0,
    },
  };
}
