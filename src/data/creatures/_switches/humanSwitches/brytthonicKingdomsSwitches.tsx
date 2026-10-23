import { constArmourBuilder } from "../../_BUILDERS/_builderArmour";
import { constSkillBuilder } from "../../_BUILDERS/_builderSkills";
import { constWeaponBuilder } from "../../_BUILDERS/_builderWeapons";
import { constCreatureData } from "../../_BUILDERS/_Constants";
import { dnd5e_effect_halfCover } from "../../monsterFeatures_DnD5e/effects/halfCover";

export function brytthonicKingdomsSwitch(
  switchResponse: any,
  nameProp: string,
  speciesProp: string,
  factionProp: string,
  weaponProp: string,
  groupProp?: string
) {

  switch (groupProp) {
    case `Legio`: //TODO
      return constCreatureData({
        response: switchResponse,
        name: `${weaponProp}`,
        image: {
          wild: `${weaponProp}.`,
        },
        stats: {
          dnd5e:
            nameProp === `Legionary` ? (
              weaponProp === `Limitaneus` ? `mediumInfT2`
                : weaponProp === `Comitatensis` ? `shockInfT2` : ``) :
              nameProp === `Centurion` ? `shockInfT2_Cap`
                : ``,
          wfrp4e:
            nameProp === `Legionary` ? (
              weaponProp === `Limitaneus` ? `soldier10`
                : weaponProp === `Comitatensis` ? `soldier15` : ``) :
              nameProp === `Centurion` ? `soldier20`
                : ``,
        },
        savingThrows: {
          ...[`Centurion`].includes(nameProp) ? { con: 1, wis: 1 } : undefined,
        },
        skills: {
          proficient: [`ath`],
        },
        armour: constArmourBuilder(
          nameProp === `Legionary` ? (
            weaponProp === `Limitaneus` ? `Hide`
              : weaponProp === `Comitatensis` ? `Chain Shirt` : `None`) :
            nameProp === `Centurion` ? `Chain Shirt`
              : `None`,
        ),
        weapons: constWeaponBuilder([
          {
            weapon: `Spear`, equipped: true, otherName: `Hasta`,
            notBloodied: [1, 6],
          },
          {
            weapon: `Short Sword`, equipped: false,
            notBloodied: [1, 6]
          },
          {
            weapon: `Dart`, equipped: false, quantity: 5, otherName: `Plumbata`,
            notBloodied: [1, 6],
          },
          {
            weapon: `Large Shield`, equipped: true,
            otherName: `Clipeus`,
          },
        ]),
        other: constSkillBuilder({
          types: [`brytthonic`, `heavy`, `legio`],
          wfrp4eBonus:
            weaponProp === `Limitaneus` ? 10
              : weaponProp === `Comitatensis` ? 15 : 0,
          multiattack: [`LateLegionary`, `two`],
        }),
        manual: {},
        effects: {
          dnd5e: [dnd5e_effect_halfCover()],
        },
      });

    case `Contarii`: //TODO
      return constCreatureData({
        response: switchResponse,
        tags: [...nameProp === `Catafractarius` ? [`heavy`] : []],
        image: {
          wild: `${nameProp}${weaponProp}.`,
        },
        token: {
          size: 2,
          ...(nameProp === `Catafractarius` ? { ring: `Silver` } : undefined)
        },
        dnd5eChanges: {
          cr:
            nameProp === `Contarius` ? 3            //AC:15(0-11)  HP:63(3)  Atk:5(2)  Dam:35(5)
              : nameProp === `Catafractarius` ? 7   //AC:17(3-17)  HP:115(7)  Atk:7(6)  Dam:39(5-6)
                : 0
        },
        stats: {
          dnd5e:
            nameProp === `Contarius` ? `shockCavT2` :
              nameProp === `Catafractarius` ? `cataphractT3` :
                ``,
          wfrp4e: `guard15`,
        },
        skills: {
          proficient: [`ani`, `ath`],
        },
        armour: constArmourBuilder(`Scale Mail`),
        weapons: constWeaponBuilder([
          {
            weapon: `Lance`, equipped: true, dnd5eDamage: 2,
            cavalryShockAssault: [4, 8]
          },
          { weapon: `Short Sword`, equipped: false, dnd5eDamage: 2 },

          ...(weaponProp && weaponProp === `Shield` ? [
            { weapon: `Shield`, equipped: true },
          ] : [])
        ]),
        other: constSkillBuilder({
          types: [`brytthonic`, `heavy`, `lancer`,
          ],
          wfrp4eBonus: 20,
          multiattack: [``, `two`],
        }),
        manual: {},
        // switchResponse.statBonus = `knight15`
      });

    case `Longbow`: //TODO
      return constCreatureData({
        response: switchResponse,
        image: {
          wild: `${nameProp}.`,
        },
        stats: {
          dnd5e:
            nameProp === `Longbowman` ? `archerT2`
              : nameProp === `Yeoman` ? `archerT3`
                : ``,
          wfrp4e:
            nameProp === `Longbowman` ? `archer10`
              : nameProp === `Yeoman` ? `archer15`
                : ``,
        },
        skills: {
          expertise: [`nat`, `prc`, `ste`, `sur`],
        },
        armour: constArmourBuilder(`Hide`),
        weapons: constWeaponBuilder([
          { weapon: `Longbow`, equipped: true },
          { weapon: `Dagger`, equipped: false },
        ]),
        other: constSkillBuilder({
          types: [`archer`],
          wfrp4eBonus:
            nameProp === `Longbowman` ? 10
              : nameProp === `Yeoman` ? 15
                : 0,
          multiattack: [``, `two`],
        }),
        manual: {},
      });

    // case `Black Company`: //TODO
    //   return constCreatureData({
    //     response: switchResponse,
    //     image: {
    //       wild: `BlackCompany.`,
    //     },
    //     stats: {
    //       dnd5e: `archerT3`,
    //       wfrp4e: `archer15`,
    //     },
    //     skills: {
    //       proficient: [`prc`],
    //     },
    //     armour: constArmourBuilder(`Hide`),
    //     weapons: constWeaponBuilder([
    //       { weapon: `Longbow`, equipped: true },
    //       { weapon: `Dagger`, equipped: false },
    //     ]),
    //     other: constSkillBuilder({
    //       types: [`archer`],
    //       wfrp4eBonus: 20,
    //       multiattack: [``, `two`],
    //     }),
    //     manual: {},
    //   });

    default:
      switch (nameProp) {
        case `Eques`: //TODO
          return constCreatureData({
            response: switchResponse,
            name: `Eques ${weaponProp}`,
            image: {
              wild: `${weaponProp}.`,
            },
            token: {
              size: 2,
            },
            stats: {
              dnd5e: `shockCavT2`,
              wfrp4e: `guard15`,
            },
            skills: {
              proficient: [`ani`, `ath`],
            },
            armour: constArmourBuilder(`Chain Shirt`),
            weapons: constWeaponBuilder([
              {
                weapon: `Lance`, equipped: true, dnd5eDamage: 2,
                cavalryCharge: [2, 6]
              },
              { weapon: `Short Sword`, equipped: false, dnd5eDamage: 2 },
              { weapon: `Large Shield`, equipped: true },
            ]),
            other: constSkillBuilder({
              types: [`brytthonic`, `heavy`, `lancer`],
              wfrp4eBonus: 20,
              multiattack: [``, `two`],
            }),
            manual: {},
            // switchResponse.statBonus = `knight15`
          });

        case `Decurion`: //TODO
          return constCreatureData({
            response: switchResponse,
            image: {
              wild: `Decurion.`,
            },
            token: {
              size: 2,
            },
            stats: {
              dnd5e: `shockCavT2_Cap`,
              wfrp4e: `soldier20`,
            },
            savingThrows: {
              con: 1,
              wis: 1,
            },
            skills: {
              proficient: [`ani`, `ath`],
            },
            armour: constArmourBuilder(`Chain Shirt`),
            weapons: constWeaponBuilder([
              {
                weapon: `Lance`, equipped: true, dnd5eDamage: 2,
                cavalryShockAssault: [2, 8]
              },
              { weapon: `Short Sword`, equipped: false, dnd5eDamage: 2 },
              { weapon: `Large Shield`, equipped: true },
            ]),
            other: constSkillBuilder({
              types: [`brytthonic`, `heavy`, `lancer`],
              wfrp4eBonus: 20,
              multiattack: [``, `two`],
            }),
            manual: {},
          });

        case `Bucellarius`: //TODO
          return constCreatureData({
            response: switchResponse,
            name: `${weaponProp && weaponProp + ` `}Bucellarius`,
            image: {
              wild: `Bucellarius${weaponProp}.`,
            },

            token: {
              size: weaponProp ? 2 : 1,
            },
            stats: {
              dnd5e: weaponProp ? `mediumCavT3` : `mediumInfT3`,
              wfrp4e: `guard15`,
            },
            skills: {
              proficient: [...(weaponProp && [`ani`]), `ath`],
            },
            armour: constArmourBuilder(`Scale Mail`),
            weapons: constWeaponBuilder([
              ...(weaponProp
                ? [
                  {
                    weapon: `Lance`, equipped: true, dnd5eDamage: 2,
                    cavalryShockAssault: [2, 8]
                  },
                ]
                : []),
              {
                weapon: `Short Sword`, equipped: weaponProp ? false : true,
                dnd5eDamage:
                  weaponProp && weaponProp === `Mounted` ? 2 : 1,
              },
              { weapon: `Longbow`, equipped: false },
              { weapon: `Shield`, equipped: true },
            ]),
            other: constSkillBuilder({
              types: [
                `brytthonic`,
                `heavy`,
                ...(weaponProp ? [`lancer`] : [`spearman`]),
              ],
              wfrp4eBonus: 20,
              multiattack: [``, `two`],
            }),
            manual: {},
            // switchResponse.statBonus = `knight15`
          });

        case `Comes`: //TODO
          return constCreatureData({
            response: switchResponse,
            name: `${weaponProp && weaponProp + ` `}Comes`,
            image: {
              wild: `Comes${weaponProp}.`,
            },
            token: {
              size: weaponProp && weaponProp === `Mounted` ? 2 : 1,
              ring: `Silver`,
            },
            stats: {
              dnd5e:
                weaponProp && weaponProp === `Mounted` ? `shockCavT3_Cap`
                  : weaponProp && weaponProp === `Longbow` ? `archerT3_Cap`
                    : `shockInfT3_Cap`,
              wfrp4e: `guard15`,
            },
            savingThrows: {
              con: 1,
              wis: 1,
            },
            skills: {
              proficient: [...(weaponProp && [`ani`]), `ath`],
            },
            armour: constArmourBuilder(`Half Plate`),
            // heavy: weaponProp && weaponProp === `Longbow` ? false : true,
            weapons: constWeaponBuilder([
              ...(weaponProp && weaponProp === `Mounted`
                ? [
                  {
                    weapon: `Lance`, equipped: true, dnd5eDamage: 2,
                    cavalryShockAssault: [2, 8]
                  },
                ]
                : []),
              {
                weapon: `Short Sword`, equipped: weaponProp ? false : true,
                dnd5eDamage:
                  weaponProp && weaponProp === `Mounted` ? 2 : 1,
              },
              {
                weapon: `Longbow`, equipped:
                  weaponProp && weaponProp === `Longbow` ? true : false,
                dnd5eDamage:
                  weaponProp && weaponProp === `Longbow` ? 2 :
                    weaponProp && weaponProp === `Mounted` ? 2 : 1,
              },
            ]),
            other: constSkillBuilder({
              types: [
                `brytthonic`,
                `heavy`,
                ...(weaponProp && weaponProp === `Mounted` ? [`lancer`]
                  : weaponProp && weaponProp === `Longbow` ? [`archer`]
                    : [`spearman`]),
              ],
              wfrp4eBonus: 20,
              multiattack: [``, `three`],
            }),
            manual: {},
            // switchResponse.statBonus = `knight15`
          });

        case `Gradalirius`: //TODO
          return constCreatureData({
            response: switchResponse,
            name: `${weaponProp && weaponProp + ` `}Bucellarius`,
            image: {
              wild: `Bucellarius${weaponProp}.`,
            },

            token: {
              size: weaponProp ? 2 : 1,
            },
            stats: {
              dnd5e: weaponProp ? `mediumCavT3` : `mediumInfT3`,
              wfrp4e: `guard15`,
            },
            savingThrows: {
              con: 1,
              wis: 1,
            },
            skills: {
              proficient: [...(weaponProp && [`ani`]), `ath`],
            },
            armour: constArmourBuilder(`Scale Mail`),
            weapons: constWeaponBuilder([
              ...(weaponProp
                ? [
                  {
                    weapon: `Lance`, equipped: true,
                    cavalryShockAssault: [2, 8]
                  },
                ]
                : []),
              {
                weapon: `Short Sword`, equipped: weaponProp ? false : true,
              },
              { weapon: `Longbow`, equipped: false },
              { weapon: `Shield`, equipped: true },
            ]),
            other: constSkillBuilder({
              types: [
                `allairan`,
                `heavy`,
                ...(weaponProp ? [`lancer`] : [`spearman`]),
              ],
              wfrp4eBonus: 20,
              multiattack: [``, `two`],
            }),
            manual: {},
            // switchResponse.statBonus = `knight15`
          });
      }
  }

}