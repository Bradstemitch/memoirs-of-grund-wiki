export function dnd5e_trait_vampireWeaknesses() {
  return {
    _id: `mmVampireWeaknes`,
    name: `Vampire Weakness`,
    type: `feat`,
    system: {
      type: {
        value: `monster`,
        subtype: ``,
      },
      activities: {
        Ss5LwXo6bHOciPNQ: {
          type: `damage`,
          _id: `Ss5LwXo6bHOciPNQ`,
          sort: 100000,
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
            chatFlavor: `Damage from Running Water`,
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
            special: ``,
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
          damage: {
            critical: {
              allow: false,
            },
            parts: [
              {
                custom: {
                  enabled: false,
                  formula: ``,
                },
                number: null,
                denomination: 0,
                bonus: `20`,
                types: [`acid`],
                scaling: {
                  number: 1,
                },
              },
            ],
          },
          name: `Damage: Running Water`,
          img: null,
          flags: {},
          visibility: {
            level: {},
            requireAttunement: false,
            requireIdentification: false,
            requireMagic: false,
          },
        },
        Q18pvRsbOyRbHiVK: {
          type: `damage`,
          _id: `Q18pvRsbOyRbHiVK`,
          sort: 300000,
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
            chatFlavor: `Damage from Sunligvht`,
          },
          duration: {
            units: `inst`,
            concentration: false,
            override: false,
          },
          effects: [
            {
              _id: `v2EdEMrtcddO1p8U`,
              level: {},
            },
          ],
          range: {
            override: false,
            units: `self`,
            special: ``,
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
          damage: {
            critical: {
              allow: false,
            },
            parts: [
              {
                custom: {
                  enabled: false,
                  formula: ``,
                },
                number: null,
                denomination: 0,
                bonus: `20`,
                types: [`radiant`],
                scaling: {
                  number: 1,
                },
              },
            ],
          },
          name: `Damage: Sunlight`,
          img: null,
          flags: {},
          visibility: {
            level: {},
            requireAttunement: false,
            requireIdentification: false,
            requireMagic: false,
          },
        },
        HsKPQH0SsWtL4znC: {
          type: `utility`,
          sort: 200000,
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
          effects: [],
          range: {
            override: false,
            units: `self`,
            special: ``,
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
            prompt: false,
          },
          uses: {
            spent: 0,
            recovery: [],
            max: ``,
          },
          roll: {
            prompt: false,
            visible: false,
            formula: ``,
            name: ``,
          },
          name: `Staked to the Heart`,
          img: `systems/dnd5e/icons/svg/monster.svg`,
          _id: `HsKPQH0SsWtL4znC`,
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
          `<p class="feature">The [[lookup @name lowercase]]{monster} has these weaknesses:</p><p class="feature-trait"><strong>Forbiddance.</strong> The [[lookup @name lowercase]]{monster} can't enter a residence without an invitation from an occupant.</p><p class="feature-trait"><strong>Running Water.</strong> The [[lookup @name lowercase]]{monster} takes 20 Acid damage if it ends its turn in running water.</p><p class="feature-trait"><strong>Stake to the Heart.</strong> The [[lookup @name lowercase]]{monster} is destroyed if a weapon that deals Piercing damage is driven into the [[lookup @name lowercase]]{monster}'s heart while the [[lookup @name lowercase]]{monster} has the Incapacitated condition.</p><p class="feature-trait"><strong>Sunlight.</strong> The [[lookup @name lowercase]]{monster} takes 20 Radiant damage if it starts its turn in sunlight. While in sunlight, it has Disadvantage on attack rolls and ability checks.</p>`,
        chat: ``,
      },
      identifier: `vampire-weakness`,
      source: {
        revision: 1,
        rules: `2024`,
        book: ``,
        license: `CC-BY-4.0`,
      },
      enchant: {},
      prerequisites: {
        level: null,
        repeatable: false,
        items: [],
      },
      properties: [`trait`],
      requirements: ``,
      advancement: {},
      cover: null,
      crewed: false,
    },
    folder: `L9Zgr8qAPc3ngKhb`,
    img: `icons/sundries/survival/stake-rough-heavy-brown.webp`,
    effects: [
      {
        name: `Disadv. Attacks & Checks`,
        img: `icons/magic/light/explosion-star-glow-orange.webp`,
        origin: `Compendium.dnd-monster-manual.features.Item.mmVampireWeaknes`,
        _id: `v2EdEMrtcddO1p8U`,
        type: `base`,
        system: {
          changes: [],
        },
        disabled: true,
        duration: {
          value: null,
          units: `seconds`,
          expiry: null,
          expired: false,
        },
        description:
          `<p><span style="font-family:'Roboto Condensed', sans-serif">While in sunlight, it has Disadvantage on attack rolls and ability checks.</span></p>`,
        tint: `#ffffff`,
        transfer: true,
        statuses: [],
        sort: 0,
        flags: {},
        _stats: {
          compendiumSource:
            `Compendium.dnd5e.actors24.Actor.mmVampire0000000.Item.mmVampireWeaknes.ActiveEffect.bD4TxnlUEUBC3nDq`,
          duplicateSource: null,
          exportSource: null,
          coreVersion: `14.364`,
          systemId: `dnd5e`,
          systemVersion: `5.3.3`,
          lastModifiedBy: `Tu6NIikbqtsNemQh`,
          createdTime: 1788907213476,
          modifiedTime: 1788907213476,
        },
        start: {
          combat: null,
          round: null,
          time: 0,
          turn: null,
          combatant: null,
          initiative: null,
        },
        showIcon: 1,
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
        `Compendium.dnd-monster-manual.features.Item.mmVampireWeaknes`,
      duplicateSource: null,
      exportSource: null,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      createdTime: 1788907213476,
      modifiedTime: 1788907213476,
    },
    sort: 100002,
    ownership: {
      default: 0,
    },
  };
}
