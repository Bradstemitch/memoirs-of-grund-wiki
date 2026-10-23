import { dnd5e_wep_javelin } from './javelin';

export function dnd5e_wep_javelinPilum(
  equipped: boolean,
  damageDie: number,
  quantity: number
) {
  const origin = dnd5e_wep_javelin(equipped, damageDie, quantity);
  return {
    ...origin,
    name: `Pilum`,
    system: {
      ...origin.system,
      description: {
        ...origin.system.description,
        value:
          `<p>[[/attack extended]]. [[/damage extended]].</p><p> If the target is wielding a shield, they must make a [[/save]] saving throw. On a failure, the Pilum is lodged into the shield, negating its benefits until an action is taken to dislodge it</p>`,
      },
      activities: {
        ...origin.system.activities,
        dnd5eactivity100: {
          _id: `dnd5eactivity100`,
          type: `save`,
          activation: {
            type: `action`,
            value: 1,
            condition: ``,
            override: false,
          },
          consumption: {
            targets: [],
            scaling: {
              allowed: false,
              max: ``,
            },
            spellSlot: true,
          },
          description: {
            chatFlavor: ``,
          },
          duration: {
            concentration: false,
            value: ``,
            units: `inst`,
            special: ``,
            override: false,
          },
          effects: [],
          range: {
            value: `5`,
            units: `ft`,
            special: ``,
            override: false,
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
              stationary: false,
            },
            affects: {
              count: ``,
              type: ``,
              choice: false,
              special: ``,
            },
            prompt: true,
            override: false,
          },
          uses: {
            spent: 0,
            max: ``,
            recovery: [],
          },
          damage: {},
          save: {
            ability: [`str`],
            dc: {
              calculation: ``,
              formula: `8 + @mod + @prof`,
            },
          },
          sort: 0,
          name: ``,
          img: ``,
          flags: {},
          visibility: {
            level: {},
            requireAttunement: false,
            requireIdentification: false,
            requireMagic: false,
          },
        },
      },
    },
  };
}
