import { makeid } from '../../_BUILDERS/_Constants';

export function dnd5e_weaponTrait_necroticDamage(base: any, damageDie: number, damageDieSize: number) {
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
          value: `<p>[[/attack extended]]. [[/damage extended]]</p>`,
          // value: `<p>[[/attack extended]]. [[/damage extended]], plus (${damageDie}d${damageDieSize}) necrotic damage.</p>`,
        },
        activities: {
          [newID]: {
            ...attack,
            damage: {
              critical: {
                bonus: ``,
              },
              includeBase: true,
              parts: [
                {
                  custom: {
                    enabled: false,
                    formula: ``,
                  },
                  number: damageDie,
                  denomination: damageDieSize,
                  bonus: ``,
                  types: [`necrotic`],
                  scaling: {
                    number: 1,
                  },
                },
              ],
            },
            _id: newID,
          },
        },
      },
    },
  ];
}
