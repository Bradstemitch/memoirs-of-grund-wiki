import { WFRP4eNPCStats } from '../../_WFRP4e/FoundryDefault/WFRP4eDefault';
import {
  trait_bestial,
} from '../../_WFRP4e/Traits/WFRP4eTraits';
import { dnd5e_trait_sunlightSensitivity } from '../monsterFeatures_DnD5e/traits/sunlightSensitivity';
import { constArmourBuilder } from '../_BUILDERS/_builderArmour';
import { constSkillBuilder } from '../_BUILDERS/_builderSkills';
import { constWeaponBuilder } from '../_BUILDERS/_builderWeapons';
import { constCreatureData, TOKEN_LOCATION } from '../_BUILDERS/_Constants';
import { DnD5eNPCStats } from '../_BUILDERS/_defaultDnd5e';

export function UndeadSwitch(
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
        value: `undead`,
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
    imagePath: `${TOKEN_LOCATION}undead/`,
    imageLoc: ``,
    imageWild: ``,
  };

  switchResponse.wfrp4e.details.species = {
    value: `Undead`,
    subspecies: ``,
  };
  switchResponse.wfrp4e.details.size = {
    value: `avg`,
  };

  function creatureStats() {
    switch (speciesProp) {
      case `Ghoul`: //TODO
        switchResponse.wfrp4e.details.species.value = `Ghoul`;
        switchResponse.dnd5e.details.type.subtype = `ghoul`;
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
          ci: {
            ...switchResponse.dnd5e.traits.ci,
            value: [`charmed`, `exhaustion`, `poisoned`]
          }
        }

        switch (nameProp) {
          case `Ghoul`: //TODO
            return constCreatureData({
              response: switchResponse,
              image: { wild: `Ghoul.` },
              stats: {
                dnd5e: `ghoul`,
                wfrp4e: `ghoul`,
              },
              skills: {
                proficient: [`prc`],
              },
              armour: constArmourBuilder(`None`),
              weapons: constWeaponBuilder([
                { weapon: `Ghoul Bite`, equipped: true },
                { weapon: `Ghoul Claw`, equipped: true },
              ]),
              other: constSkillBuilder({
                types: [`feral`, `ghoul`],
                wfrp4eBonus: 15,
                multiattack: [`The [[lookup @name lowercase]]{monster} makes two Claw attacks.`, `two`],
              }),
              manual: {
                wfrp4e: [trait_bestial(true)],
              },
            });

          case `Ghoul Levy`: //TODO
            return constCreatureData({
              response: switchResponse,
              image: {
                path: `${TOKEN_LOCATION}human/`,
                wild: `Militia.`,
              },
              token: {
                name: `Ghoul`,
                tint: `Ghoul`,
              },
              stats: {
                dnd5e: `ghoulT1Infantry`,
                wfrp4e: `ghoul`,
              },
              skills: {
                proficient: [`prc`],
              },
              armour: constArmourBuilder(`Hide`),
              weapons: constWeaponBuilder([
                { weapon: `Ghoul Bite`, equipped: true },
                { weapon: `Ghoul Claw`, equipped: true },
              ]),
              other: constSkillBuilder({
                types: [`feral`, `ghoul`],
                wfrp4eBonus: 15,
                multiattack: [`The [[lookup @name lowercase]]{monster} makes two Claw attacks.`, `two`],
              }),
              manual: {
                wfrp4e: [trait_bestial(true)],
              },
            });

          case `Ghoul Infantry`: //TODO
            return constCreatureData({
              response: switchResponse,
              image: {
                path: `${TOKEN_LOCATION}human/`,
                wild: `Brigand.`,
              },
              token: {
                name: `Ghoul`,
                tint: `Ghoul`,
              },
              stats: {
                dnd5e: `ghoulT2Infantry`,
                wfrp4e: `ghoul`,
              },
              skills: {
                proficient: [`prc`],
              },
              armour: constArmourBuilder(`Chain Shirt`),
              weapons: constWeaponBuilder([
                { weapon: `Ghoul Bite`, equipped: true },
                { weapon: `Ghoul Claw`, equipped: true },
              ]),
              other: constSkillBuilder({
                types: [`feral`, `ghoul`],
                wfrp4eBonus: 15,
                multiattack: [`The [[lookup @name lowercase]]{monster} makes three Claw attacks.`, `three`],
              }),
              manual: {
                wfrp4e: [trait_bestial(true)],
              },
            });

          case `Ghoul Veteran`: //TODO
            return constCreatureData({
              response: switchResponse,
              image: {
                path: `${TOKEN_LOCATION}human/`,
                wild: `Marauder.`,
              },
              token: {
                name: `Ghoul`,
                ring: `Silver`,
                tint: `Ghoul`,
              },
              stats: {
                dnd5e: `ghoulT3Infantry`,
                wfrp4e: `ghoul`,
              },
              skills: {
                proficient: [`prc`],
              },
              armour: constArmourBuilder(`Chain Shirt`),
              weapons: constWeaponBuilder([
                { weapon: `Ghoul Bite`, equipped: true, dnd5eDamage: 2 },
                { weapon: `Ghoul Claw`, equipped: true, dnd5eDamage: 2 },
              ]),
              other: constSkillBuilder({
                types: [`feral`, `ghoul`],
                wfrp4eBonus: 15,
                multiattack: [`The [[lookup @name lowercase]]{monster} makes three Claw attacks.`, `three`],
              }),
              manual: {
                wfrp4e: [trait_bestial(true)],
              },
            });
        }
        break;

      case `Skeleton`: //TODO
        switchResponse.wfrp4e.details.species.value = `Skeleton`;
        switchResponse.dnd5e.traits = {
          ...switchResponse.dnd5e.traits,
          languages: {
            ...switchResponse.dnd5e.traits.languages,
            custom: `Any One Language (Usually Common)`
          },
          dv: {
            ...switchResponse.dnd5e.traits.dv,
            value: [`bludgeoning`],
          },
          di: {
            ...switchResponse.dnd5e.traits.di,
            value: [`poison`]
          },
          ci: {
            ...switchResponse.dnd5e.traits.ci,
            value: [`exhaustion`, `poisoned`]
          }
        }

        switch (nameProp) {
          case `Skeleton`: //TODO
            return constCreatureData({
              response: switchResponse,
              image: { wild: `Skeleton.` },
              stats: {
                dnd5e: `skeleton`,
                wfrp4e: `skeleton`,
              },
              skills: {
                proficient: [`prc`, `ste`],
              },
              armour: constArmourBuilder(`Chain Mail`),
              weapons: constWeaponBuilder([
                { weapon: `Shortsword`, equipped: true },
                { weapon: `Shortbow`, equipped: false },
              ]),
              other: constSkillBuilder({
                types: [`allairan`, `heavy`, `spearman`],
                wfrp4eBonus: 15,
              }),
              manual: {},
            });

          case `Skeleton Warrior`: //TODO
            return constCreatureData({
              response: switchResponse,
              name: `Skeleton${weaponProp && ` ` + weaponProp}`,
              image: { wild: `Skeleton.` },
              stats: {
                dnd5e:
                  weaponProp === `Archer` ? `skeleton` :
                    weaponProp === `Spearman` ? `skeleton` : ``,
                wfrp4e: `skeleton`,
              },
              skills: {
                proficient: [`prc`, `ste`],
              },
              armour: constArmourBuilder(`Hide`),
              weapons: constWeaponBuilder([
                ...(weaponProp === `Archer` ? [
                  { weapon: `Shortbow`, equipped: true },
                ]
                  : weaponProp === `Spearman` ? [
                    { weapon: `Spear`, equipped: true },
                    { weapon: `Shield`, equipped: true },
                  ] : []
                )
              ]),
              other: constSkillBuilder({
                types: [`skeleton`, `spearman`],
                wfrp4eBonus: 15,
                multiattack: [``, `two`,],
              }),
              manual: {},
            });
        }
        break;

      case `Wight`: //TODO
        switchResponse.wfrp4e.details.species.value = `Wight`;
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

        switch (nameProp) {
          case `Wight`: //TODO
            return constCreatureData({
              response: switchResponse,
              image: { wild: `Wight.` },
              dnd5eChanges: {
                cr: 3, //AC:14(2)  HP:82(4)  Atk:4(1)  Dam:22(3)
              },
              stats: {
                dnd5e: `wight`,
                wfrp4e: `wight`,
              },
              skills: {
                proficient: [`prc`, `ste`],
              },
              armour: constArmourBuilder(`Hide`),
              weapons: constWeaponBuilder([
                {
                  weapon: `Longsword`, equipped: true,
                  necroticDamage: [1, 8],
                },
                {
                  weapon: `Longbow`, equipped: false,
                  necroticDamage: [1, 8],
                },
              ]),
              other: constSkillBuilder({
                types: [`wight`],
                wfrp4eBonus: 15,
                multiattack: [
                  `The [[lookup @name lowercase]]{monster} makes two longsword attacks or two longbow attacks. It can use its Life Drain in place of one longsword attack.`,
                  `two`,
                ],
              }),
              manual: {
                dnd5e: [dnd5e_trait_sunlightSensitivity()]
              },
            });

          case `Immortal`: //TODO
            switchResponse.dnd5e.traits.languages = {
              ...switchResponse.dnd5e.traits.languages,
              value: [`draconic`],
              custom: `Kebechan`
            }
            return constCreatureData({
              response: switchResponse,
              name: `${weaponProp && weaponProp + ` `}Immortal`,
              image: { wild: `Immortal${weaponProp && weaponProp}.` },
              token: {
                size: weaponProp && weaponProp === `Mounted` ? 2 : 1,
                ring: `Silver`,
              },
              dnd5eChanges: {
                cr: weaponProp && weaponProp === `Mounted` ? 6  //AC:16(2)  HP:105(6)  Atk:7(6)  Dam:51(7-8)
                  : 4, //AC:16(2)  HP:75(4)  Atk:6(6)  Dam:31(4)
              },
              stats: {
                dnd5e: `settWight`,
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
                types: [`kebechan`, `wight`, ...weaponProp && weaponProp === `Mounted` ? [`lancer`] : [`spearman`]],
                wfrp4eBonus: 15,
                multiattack: [
                  `The [[lookup @name lowercase]]{monster} makes two longsword attacks or two longbow attacks. It can use its Life Drain in place of one longsword attack.`,
                  `two`,
                ],
              }),
              manual: {},
            });
        }
        break;

      case `Zombie`: //TODO
        switchResponse.wfrp4e.details.species.value = `Zombie`;
        switchResponse.dnd5e.traits = {
          ...switchResponse.dnd5e.traits,
          languages: {
            ...switchResponse.dnd5e.traits.languages,
            custom: `Any One Language (Usually Common)`
          },
        }
        switch (nameProp) {
          case `Zombie`: //TODO
            return constCreatureData({
              response: switchResponse,
              image: { wild: `Zombie.` },
              stats: {
                dnd5e: `zombie`,
                wfrp4e: `zombie`,
              },
              skills: {
                proficient: [`prc`],
              },
              armour: constArmourBuilder(`None`),
              weapons: constWeaponBuilder([
                { weapon: `Longsword`, equipped: false },
              ]),
              other: constSkillBuilder({
                types: [`allairan`, `heavy`, `spearman`],
                wfrp4eBonus: 15,
              }),
              manual: {},
            });
        }
        break;
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
