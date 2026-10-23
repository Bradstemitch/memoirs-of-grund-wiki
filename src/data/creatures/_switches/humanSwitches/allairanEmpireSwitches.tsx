import { constArmourBuilder } from "../../_BUILDERS/_builderArmour";
import { constSkillBuilder } from "../../_BUILDERS/_builderSkills";
import { constWeaponBuilder } from "../../_BUILDERS/_builderWeapons";
import { constCreatureData, TOKEN_LOCATION } from "../../_BUILDERS/_Constants";
import { dnd5e_spell_coneOfCold5th } from "../../monsterFeatures_DnD5e/spells/coneOfCold";
import { dnd5e_trait_auraOfLeadership } from "../../monsterFeatures_DnD5e/traits/auraOfCommand";
import { dnd5e_trait_spellcasting } from "../../monsterFeatures_DnD5e/traits/spellcasting";

export function allairanEmpireSwitch(
  switchResponse: any,
  nameProp: string,
  speciesProp: string,
  factionProp: string,
  weaponProp: string,
  groupProp?: string
) {

  switch (groupProp) {
    case `Man-at-arms`:
      return constCreatureData({
        response: switchResponse,
        name: `${weaponProp && weaponProp + ` `}${nameProp}`,
        tags: [`heavy`],
        image: {
          wild: `${[`Sergeant`, `Man-at-arms`].includes(nameProp) ? `Sergeant` :
            [`Knight`, `Lord`, `Paladin`, `Champion`].includes(nameProp) ? `Knight` :
              ``
            }${weaponProp}.`,
        },
        token: {
          size:
            weaponProp ? (
              weaponProp === `Gryphon` ? 3 :
                weaponProp === `Mounted` ? 2 : 1
            ) : 1,
          ring: [`Paladin`].includes(nameProp) ? `Gold`
            : [`Lord`, `Man-at-arms`].includes(nameProp) ? `Silver`
              : `Brass`
        },
        dnd5eChanges: {
          cr: nameProp === `Sergeant` ? (
            weaponProp && weaponProp === `Mounted` ? 4    //AC:18(6-20)  HP:75(4)  Atk:4(0.5)  Dam:33(4-5)
              : /*                       Unmounted*/ 2)   //AC:18(6-20)  HP:45(2)  Atk:4(0.5)  Dam:11(1)
            : nameProp === `Knight` ? (
              weaponProp && weaponProp === `Mounted` ? 5    //AC:20(12-26)  HP:95(5)  Atk:6(4)  Dam:37(5)
                : /*                       Unmounted*/ 3)   //AC:20(12-26)  HP:65(3)  Atk:5(2)  Dam:15(1-2)
              : nameProp === `Man-at-arms` ? (
                weaponProp && weaponProp === `Mounted` ? 5    //AC:18(6-20)  HP:105(6)  Atk:6(4)  Dam:37(5)
                  : /*                       Unmounted*/ 3)   //AC:18(6-20)  HP:75(4)  Atk:5(2)  Dam:15(1-2)
                : nameProp === `Lord` ? (
                  weaponProp && weaponProp === `Mounted` ? 8    //AC:20(12-26)  HP:135(8)  Atk:7(6)  Dam:54(8)
                    : /*                       Unmounted*/ 6)   //AC:20(12-26)  HP:105(6)  Atk:7(6)  Dam:25(3)
                  : nameProp === `Paladin` ? (
                    weaponProp && weaponProp === `Gryphon` ? 11       //AC:20(12-26)  HP:180(11)  Atk:8(8)  Dam:?(?)
                      : weaponProp && weaponProp === `Mounted` ? 9    //AC:20(12-26)  HP:150(9)  Atk:8(8)  Dam:54(8)
                        : /*                         Unmounted*/ 7)   //AC:20(12-26)  HP:120(7)  Atk:7(6)  Dam:25(3)
                    : nameProp === `Champion` ? (
                      weaponProp && weaponProp === `Gryphon` ? 13       //AC:20(12-26)  HP:210(13)  Atk:10(12)  Dam:?(?)
                        : weaponProp && weaponProp === `Mounted` ? 11   //AC:20(12-26)  HP:180(11)  Atk:9(10)  Dam:54(8)
                          : /*                         Unmounted*/ 9)   //AC:20(12-26)  HP:150(9)  Atk:9(10)  Dam:25(3)
                      : 0
        },
        stats: {
          dnd5e:
            nameProp === `Sergeant` ? (weaponProp && weaponProp === `Mounted` ? `heavyCavT2` : `heavyInfT2`) :
              nameProp === `Knight` ? (weaponProp && weaponProp === `Mounted` ? `heavyCavT2_Cap` : `heavyInfT2_Cap`) :
                nameProp === `Man-at-arms` ? (weaponProp && weaponProp === `Mounted` ? `heavyCavT3` : `heavyInfT3`) :
                  nameProp === `Lord` ? (weaponProp && weaponProp === `Mounted` ? `heavyCavT3_Cap` : `heavyInfT3_Cap`) :
                    nameProp === `Paladin` ? (weaponProp && weaponProp === `Mounted` ? `heavyCavT4` : `heavyInfT4`) :
                      nameProp === `Champion` ? (weaponProp && weaponProp === `Mounted` ? `heavyCavT4_Cap` : `heavyInfT4_Cap`) :
                        ``,
          wfrp4e: `guard15`,
        },
        savingThrows: {
          ...[`Knight`, `Lord`].includes(nameProp) ? { con: 1, wis: 1 } : undefined,
        },
        skills: {
          proficient: [
            ...(weaponProp && weaponProp === `Mounted` ? [`ani`] : []),
            `ath`
          ],
        },
        armour: constArmourBuilder(
          [`Knight`, `Lord`, `Paladin`, `Champion`].includes(nameProp) ? `Plate`
            : `Chain Mail`
        ),
        weapons: constWeaponBuilder([
          ...(weaponProp && (weaponProp === `Gryphon` || weaponProp === `Mounted`) ? [
            {
              weapon: `Lance`, equipped: true, dnd5eDamage: 2,
              cavalryShockAssault: [2, 8]
            },
          ] : nameProp === `Sergeant` ? [
            { weapon: `Spear`, equipped: true }
          ] : [
            { weapon: `Greataxe`, equipped: true }
          ]),
          {
            weapon: `Longsword`, equipped: weaponProp ? false : true,
            dnd5eDamage:
              weaponProp && weaponProp === `Mounted` ? 2 : 1,
          },
          { weapon: `Large Shield`, equipped: true },
        ]),
        other: constSkillBuilder({
          types: [`allairan`, `heavy`, ...(weaponProp ? [`lancer`] : [`spearman`]),],
          wfrp4eBonus: 15,
          multiattack: [``, `two`],
        }),
        manual: {
          dnd5e: [
            ...[`Knight`, `Lord`, `Champion`].includes(nameProp) ?
              [
                dnd5e_trait_auraOfLeadership(
                  nameProp === `Knight` ? 30
                    : nameProp === `Lord` ? 45
                      : nameProp === `Champion` ? 60
                        : 0
                )
              ]
              : []
          ]
        },
      });

    default:
      switch (nameProp) {
        case `Levy`: //TODO
          return constCreatureData({
            response: switchResponse,
            image: {
              path: `${TOKEN_LOCATION}human/`,
              wild: `Militia.`,
            },
            stats: {
              dnd5e: `mediumInfT1`,
              wfrp4e: `guard5`,
            },
            skills: {
              proficient: [`prc`],
            },
            armour: constArmourBuilder(`Hide`),
            weapons: constWeaponBuilder([
              { weapon: `Spear`, equipped: true },
              { weapon: `Shield`, equipped: true },
            ]),
            other: constSkillBuilder({
              types: [`allairan`, `militia`, `spearman`],
              wfrp4eBonus: 5,
            }),
            manual: {},
          });

        case `Pyrokine of the Tower`: //TODO
          return constCreatureData({
            response: switchResponse,
            image: {
              wild: `Pyrokine.`,
            },
            token: {
              name: `Pyrokine`,
            },
            stats: {
              dnd5e: `wizardT4`,
              wfrp4e: `guard15`,
            },
            skills: {
              proficient: [`prc`],
            },
            armour: constArmourBuilder(`None`),
            weapons: constWeaponBuilder([
              { weapon: `Dagger`, equipped: true },
            ]),
            other: constSkillBuilder({
              types: [`allairan`, `heavy`, `lancer`],
              wfrp4eBonus: 20,
            }),
            manual: {
              dnd5e: [
                ...dnd5e_trait_spellcasting({
                  spells: [
                    dnd5e_spell_coneOfCold5th({ level: 9, perDay: 1 }),
                  ],
                }),
              ],
            },
          });

        case `Arbalest`: //TODO
          return constCreatureData({
            response: switchResponse,
            image: {
              wild: `Crossbowman.`,
            },
            stats: {
              dnd5e: `archerT2`,
              wfrp4e: `handgunner10`,
            },
            skills: {
              proficient: [`prc`],
            },
            armour: constArmourBuilder(`Breastplate`),
            weapons: constWeaponBuilder([
              { weapon: `Heavy Crossbow`, equipped: true },
              { weapon: `Dagger`, equipped: true },
            ]),
            other: constSkillBuilder({
              types: [`allairan`, `crossbowman`],
              wfrp4eBonus: 20,
            }),
            manual: {},
          });
      }
      break;
  }

}