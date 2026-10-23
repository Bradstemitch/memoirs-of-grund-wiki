import { WFRP4eNPCStats } from '../../_WFRP4e/FoundryDefault/WFRP4eDefault';
import { constArmourBuilder } from '../_BUILDERS/_builderArmour';
import { constSkillBuilder } from '../_BUILDERS/_builderSkills';
import { constWeaponBuilder } from '../_BUILDERS/_builderWeapons';
import { TOKEN_LOCATION, constCreatureData } from '../_BUILDERS/_Constants';
import { DnD5eNPCStats } from '../_BUILDERS/_defaultDnd5e';
import { switchResponseType } from '../_BUILDERS/_Types';

export function ConstructSwitch(
  nameProp: string,
  speciesProp: string,
  factionProp: string,
  weaponProp: string,
  groupProp?: string
) {
  const switchResponse = {
    name: nameProp,
    species: speciesProp,
    dnd5e: DnD5eNPCStats({
      species: {
        value: `construct`,
        subtype: ``,
      },
      alignment: `Any`,
      size: `med`,
    }).system,
    wfrp4e: WFRP4eNPCStats().system,
    tokenName: nameProp,
    tokenSize: 1,
    stats: {
      dnd5e: nameProp.toLowerCase(),
      wfrp4e: nameProp.toLowerCase(),
    },
    statBonus: ``,
    imagePath: `${TOKEN_LOCATION}construct/`,
    imageLoc: ``,
    imageWild: ``,
  };

  function creatureStats() {
    switch (speciesProp) {
      case `Obelisk`:
        switchResponse.wfrp4e.details.species.value = `Obelisk`;
        switchResponse.dnd5e.details.type.subtype = `obelisk`;
        switchResponse.dnd5e.attributes.senses.ranges.darkvision = 60;

        switchResponse.dnd5e.traits = {
          ...switchResponse.dnd5e.traits,
          languages: {
            ...switchResponse.dnd5e.traits.languages,
            custom: `Any One Language (Usually Common)`
          },
          di: {
            ...switchResponse.dnd5e.traits.di,
            value: [`poison`],
          },
          dr: {
            ...switchResponse.dnd5e.traits.dr,
            value: [
              `necrotic`,
            ],
          },
          dm: {
            ...switchResponse.dnd5e.traits.dm,
            amount: {
              bludgeoning: `-@prof`,
              slashing: `-@prof`,
              piercing: `-@prof`,
            }
          },
          ci: {
            ...switchResponse.dnd5e.traits.ci,
            value: [`exhaustion`, `poisoned`]
          }
        }

        return constCreatureData({
          response: switchResponse,
          name: `Obelisk of Sett (${weaponProp})`,
          image: { wild: `${nameProp}.` },
          token: {
            size:
              weaponProp === `Gargantuan` ? 4
                : weaponProp === `Huge` ? 3
                  : weaponProp === `Large` ? 2
                    : weaponProp === `Medium` ? 1
                      : 0.8,
            ring:
              weaponProp === `Gargantuan` ? `Purple`
                : weaponProp === `Huge` ? `Gold`
                  : weaponProp === `Large` ? `Silver`
                    : weaponProp === `Medium` ? `Brass`
                      : `Brass`,
          },
          dnd5eChanges: {
            cr:
              weaponProp === `Gargantuan` ? 21       //AC:16(2)  HP:75(4)  Atk:6(6)  Dam:31(4)
                : weaponProp === `Huge` ? 13         //AC:16(2)  HP:75(4)  Atk:6(6)  Dam:31(4)
                  : weaponProp === `Large` ? 8      //AC:16(2)  HP:75(4)  Atk:6(6)  Dam:31(4)
                    : weaponProp === `Medium` ? 4   //AC:16(2)  HP:75(4)  Atk:6(6)  Dam:31(4)
                      : 1,                        //AC:16(2)  HP:75(4)  Atk:6(6)  Dam:31(4)
          },
          stats: {
            dnd5e:
              weaponProp === `Gargantuan` ? `settObeliskT5`
                : weaponProp === `Huge` ? `settObeliskT4`
                  : weaponProp === `Large` ? `settObeliskT3`
                    : weaponProp === `Medium` ? `settObeliskT2`
                      : `settObeliskT1`,
            wfrp4e: `wight`,
          },
          skills: {
            proficient: [`prc`, `ste`],
          },
          armour: constArmourBuilder(`Hide`),
          weapons: constWeaponBuilder([
            ...(weaponProp && weaponProp === `Mounted` ? [
              {
                weapon: `Lance`, equipped: true, dnd5eDamage: 2,
                necroticDamage: [2, 6],
                cavalryCharge: [2, 6],
              },
            ] : weaponProp && weaponProp === `Archer` ? [
              {
                weapon: `Longbow`, equipped: true, dnd5eDamage: 1,
                necroticDamage: [2, 6],
              },
            ] : []),
            {
              weapon: `Longsword`, equipped: true, dnd5eDamage: weaponProp && weaponProp === `Mounted` ? 2 : 1,
              necroticDamage: [2, 6],
            },
            { weapon: `Shield`, equipped: true },
          ]),
          other: constSkillBuilder({
            types: [`kebechan`, `wight`],
            wfrp4eBonus: 15,
            multiattack: [
              `The [[lookup @name lowercase]]{monster} makes two longsword attacks or two longbow attacks. It can use its Life Drain in place of one longsword attack.`,
              `two`,
            ],
          }),
          manual: {},
        });
    }
  }

  return (
    creatureStats() ||
    constCreatureData({
      response: switchResponse,
      armour: constArmourBuilder(`None`),
      weapons: constWeaponBuilder([]),
      other: constSkillBuilder({ types: [], wfrp4eBonus: 0 }),
      manual: {},
    })
  );
}
