import { makeid } from '../../_BUILDERS/_Constants';
import { dnd5e_trait_cavalryCharge, dnd5e_trait_cavalryShockAssault } from '../traits/cavalryCharge';

export function dnd5e_weaponTrait_cavalryCharge(base: any, damageDie: number, damageDieSize: number, name?: string) {
  const origin = base[0];
  const newID = makeid();
  const attack =
    origin.system.activities[Object.keys(origin.system.activities)[0]];
  return [
    {
      ...origin,
      system: {
        ...origin.system,
        description: {
          ...origin.system.description,
          value: origin.system.description.value + `<p>While mounted, if the [[lookup @name lowercase]]{monster} moves at least 20 ft. in a straight line straight toward a target and then hits it with a lance attack on the same turn, the target takes an extra (${damageDie}d${damageDieSize}) ${origin.system.damage.base.types[0]} damage.</p>`
        },
        activities: {
          ...origin.system.activities,
          [newID]: {
            ...attack,
            damage: {
              critical: {
                bonus: ``,
              },
              includeBase: true,
              parts: [
                ...attack.damage.parts,
                {
                  custom: {
                    enabled: false,
                    formula: ``,
                  },
                  number: damageDie,
                  denomination: damageDieSize,
                  bonus: ``,
                  types: [...origin.system.damage.base.types],
                  scaling: {
                    number: 1,
                  },
                },
              ],
            },
            _id: newID,
            name: name || `Cavalry Charge`,
          },
        },
      },
    },
    dnd5e_trait_cavalryCharge(damageDie, damageDieSize, origin.system.damage.base.types[0])
  ];
}

export function dnd5e_weaponTrait_cavalryShockAssault(base: any, damageDie: number, damageDieSize: number) {
  const newID = makeid();
  const origin = dnd5e_weaponTrait_cavalryCharge(base, damageDie, damageDieSize, `Cavalry Shock Assault`)[0];

  return [
    {
      ...origin,
      system: {
        ...origin.system,
        description: {
          ...origin.system.description,
          value: origin.system.description.value + `<p>If the target is a creature, it must succeed on a DC [[8 + @abilities.str.mod + @prof]] Strength saving throw or be knocked prone.</p>`
        },
        activities: {
          ...origin.system.activities,
          [newID]: {
            _id: newID,
            type: `save`,
            activation: {
              type: `action`,
              value: 1,
              condition: ``,
              override: false
            },
            consumption: {
              targets: [],
              scaling: {
                allowed: false,
                max: ``
              },
              spellSlot: true
            },
            description: {
              chatFlavor: ``
            },
            duration: {
              concentration: false,
              value: ``,
              units: `inst`,
              special: ``,
              override: false
            },
            effects: [],
            range: {
              value: `5`,
              units: `ft`,
              special: ``,
              override: false
            },
            target: {
              template: {
                count: ``,
                contiguous: false,
                type: ``,
                size: ``,
                width: ``,
                height: ``,
                units: `ft`,
                stationary: false
              },
              affects: {
                count: ``,
                type: ``,
                choice: false,
                special: ``
              },
              prompt: true,
              override: false
            },
            uses: {
              spent: 0,
              max: ``,
              recovery: []
            },
            damage: {
              onSave: `half`,
              parts: []
            },
            save: {
              ability: [
                `str`
              ],
              dc: {
                calculation: ``,
                formula: `8 + @mod + @prof`
              }
            },
            sort: 0,
            img: null,
            flags: {},
            visibility: {
              level: {},
              requireAttunement: false,
              requireIdentification: false,
              requireMagic: false
            }
          },
        },
      },
    },
    dnd5e_trait_cavalryShockAssault(damageDie, damageDieSize, origin.system.damage.base.types[0])
  ];
}
