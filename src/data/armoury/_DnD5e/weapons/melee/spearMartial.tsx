import { dnd5e_wep_spear } from './spear';

export function dnd5e_wep_spearMartial(
  equipped: boolean,
  damageDie: number,
  name: string
) {
  const origin = dnd5e_wep_spear(equipped, damageDie);
  return {
    ...origin,
    name: `${name} (spear)`,
    system: {
      ...origin.system,
      range: {
        value: null,
        long: null,
        units: `ft`,
        reach: null,
      },
      properties: [`rch`, `ver`],
      type: {
        ...origin.system.type,
        value: `martialM`,
      },
    },
  };
}
