function regeneration() {
  return {
    _id: `mmRegeneration00`,
    name: `Regeneration`,
    type: `feat`,
    system: {
      type: {
        value: `monster`,
        subtype: ``,
      },
      activities: {
        '5cGvjZJIJVicjJ3d': {
          type: `heal`,
          sort: 0,
          activation: {
            type: `special`,
            value: null,
            override: false,
            condition: `starts its turn with at least 1 Hit Point`,
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
              count: ``,
              type: `self`,
            },
            override: false,
            prompt: true,
          },
          uses: {
            spent: 0,
            recovery: [],
            max: ``,
          },
          healing: {
            number: null,
            denomination: 0,
            types: [`healing`],
            custom: {
              enabled: false,
            },
            scaling: {
              number: 1,
            },
            bonus: `10`,
          },
          name: ``,
          _id: `5cGvjZJIJVicjJ3d`,
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
          `<p>The [[lookup @name lowercase]]{monster} regains [[lookup @healing.formula activity=5cGvjZJIJVicjJ3d]] Hit Points at the start of each of its turns if it has at least 1 Hit Point.</p>`,
        chat: ``,
      },
      identifier: `regeneration`,
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
      requirements: `At least 1 Hit Point`,
      advancement: {},
      cover: null,
      crewed: false,
    },
    folder: `L9Zgr8qAPc3ngKhb`,
    img: `icons/skills/wounds/injury-stitched-flesh-red.webp`,
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
        `Compendium.dnd-monster-manual.features.Item.mmRegeneration00`,
      duplicateSource: null,
      exportSource: null,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      createdTime: 1788909374298,
      modifiedTime: 1788909374298,
    },
    sort: 1,
    ownership: {
      default: 0,
    },
  };
}

export function dnd5e_trait_regenerationVampire() {
  const regenerationVampire = regeneration();
  // regenerationVampire.system.activities["5cGvjZJIJVicjJ3d"].activation.condition = "not incapacitated with a wooden stake"
  regenerationVampire.system.description.value =
    `<p>The [[lookup @name lowercase]]{monster} regains [[lookup @healing.formula activity=5cGvjZJIJVicjJ3d]] Hit Points at the start of each of its turns if it has at least 1 Hit Point. If the [[lookup @name lowercase]]{monster} takes Radiant Damage or Damage from Holy Water, this trait doesn't function at the start of its next turn.</p><p>If the [[lookup @name lowercase]]{monster} is not incapacitated by a wooden stake or submerged in holy water, a killed [[lookup @name lowercase]]{monster} regenerates its body in 5d10 days, regaining all its hit points and becoming active again.</p>`;
  return regenerationVampire;
}

export function dnd5e_trait_regenerationWerewolf() {
  const regenerationVampire = regeneration();
  // regenerationVampire.system.activities["5cGvjZJIJVicjJ3d"].activation.condition = "not incapacitated with a wooden stake"
  regenerationVampire.system.description.value =
    `<p>The [[lookup @name lowercase]]{monster} regains [[lookup @healing.formula activity=5cGvjZJIJVicjJ3d]] Hit Points at the start of each of its turns. If the [[lookup @name lowercase]]{monster} takes Damage from a Silver Weapon or a Weapon coated in wolfsbane, this trait doesn't function at the start of its next turn. The [[lookup @name lowercase]]{monster} dies only if it starts its turn with 0 Hit Points and doesn't Regenerate.</p>`;
  return regenerationVampire;
}
