import { dnd5e_wep_dart } from './dart';

export function dnd5e_wep_dartPlumbata(
  equipped: boolean,
  damageDie: number,
  quantity: number
) {
  const origin = dnd5e_wep_dart(equipped, damageDie, quantity);

  return {
    ...origin,
    name: `Plumbata`,
    system: {
      ...origin.system,
      range: {
        ...origin.system.range,
        value: 60,
        long: 240,
      },
    },
  };
}
