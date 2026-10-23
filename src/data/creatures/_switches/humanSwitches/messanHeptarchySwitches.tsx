import { constArmourBuilder } from "../../_BUILDERS/_builderArmour";
import { constSkillBuilder } from "../../_BUILDERS/_builderSkills";
import { constWeaponBuilder } from "../../_BUILDERS/_builderWeapons";
import { constCreatureData, TOKEN_LOCATION } from "../../_BUILDERS/_Constants";
import { dnd5e_trait_brute } from "../../monsterFeatures_DnD5e/traits/brute";

export function messanHeptarchySwitch(
  switchResponse: any,
  nameProp: string,
  speciesProp: string,
  factionProp: string,
  weaponProp: string,
  groupProp?: string
) {
  switch (groupProp) {
    case `Fyrd`:
      return constCreatureData({
        response: switchResponse,
        image: {
          path: nameProp === `Fyrdsman` ? `${TOKEN_LOCATION}human/` : switchResponse.imagePath,
          wild: nameProp === `Fyrdsman` ? `Militia.` : `${nameProp.replace(/[^\w\s]|_-/g, ``)}.`,
        },
        stats: {
          dnd5e:
            nameProp === `Fyrdsman` ? `mediumInfT1` :
              nameProp === `Select-Fyrdsman` ? `mediumInfT2` :
                ``,
          wfrp4e:
            nameProp === `Fyrdsman` ? `pikeman5` :
              nameProp === `Select-Fyrdsman` ? `pikeman10` :
                ``,
        },
        skills: {
          proficient: [...nameProp === `Fyrdsman` ? [`prc`] : [`ath`]],
        },
        armour: constArmourBuilder(
          nameProp === `Fyrdsman` ? `Hide`
            : nameProp === `Select-Fyrdsman` ? `Chain Shirt`
              : `None`
        ),
        weapons: constWeaponBuilder([
          { weapon: `Spear`, equipped: true, otherName: `Gār` },
          { weapon: `Shield`, equipped: true },
        ]),
        other: constSkillBuilder({
          types: [`messan`, ...nameProp === `Fyrdsman` ? [`militia`] : [], `shieldwall`, `spearman`],
          wfrp4eBonus: 5,
          ...nameProp !== `Fyrdsman` ? { multiattack: [``, `two`] } : undefined
        }),
        manual: {},
      });
      
    default:
      switch (nameProp) {
        case `Huscarl`: //TODO
          return constCreatureData({
            response: switchResponse,
            image: {
              wild: `Huscarl.`,
            },
            stats: {
              dnd5e: `mediumInfT3`,
              wfrp4e: `pikeman5`,
            },
            token: {
              ring: `Silver`
            },
            skills: {
              proficient: [`ath`, `prc`],
            },
            armour: constArmourBuilder(`Scale Mail`),
            weapons: constWeaponBuilder([
              { weapon: `Greataxe`, equipped: false, dnd5eDamage: 2 },
              { weapon: `Longsword`, equipped: true, dnd5eDamage: 2 },
              { weapon: `Shield Bash`, equipped: true, dnd5eDamage: 2 },
              { weapon: `Shield`, equipped: true },
            ]),
            other: constSkillBuilder({
              types: [`messan`, `shieldwall`, `huscarl`],
              wfrp4eBonus: 20,
              multiattack: [`ShieldBash`, `two`],
            }),
            manual: {
              dnd5e: [dnd5e_trait_brute()],
            },
          });

        case `Archer`: //TODO
          return constCreatureData({
            response: switchResponse,
            image: {
              path: `${TOKEN_LOCATION}human/`,
              wild: `Archer.`,
            },
            stats: {
              dnd5e: `archerT1`,
              wfrp4e: `archer5`,
            },
            skills: {
              proficient: [`ath`, `prc`],
            },
            armour: constArmourBuilder(`None`),
            weapons: constWeaponBuilder([
              { weapon: `Shortbow`, equipped: true },
              { weapon: `Dagger`, equipped: true },
            ]),
            other: constSkillBuilder({ types: [`archer`], wfrp4eBonus: 5 }),
            manual: {},
          });

        case `Skirmisher`: //TODO
          return constCreatureData({
            response: switchResponse,
            image: {
              path: `${TOKEN_LOCATION}human/`,
              wild: `Skirmisher.`,
            },
            stats: {
              dnd5e: `lightInfT1`,
              wfrp4e: `archer5`,
            },
            skills: {
              proficient: [`ath`, `prc`],
            },
            armour: constArmourBuilder(`None`),
            weapons: constWeaponBuilder([
              { weapon: `Javelin`, equipped: true, quantity: 6 },
              { weapon: `Spear`, equipped: true },
              { weapon: `Dagger`, equipped: true },
            ]),
            other: constSkillBuilder({
              types: [`messan`, `shieldwall`, `archer`],
              wfrp4eBonus: 5,
            }),
            manual: {},
          });
      }
  }

}