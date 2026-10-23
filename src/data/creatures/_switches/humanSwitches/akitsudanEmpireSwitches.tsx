import { constArmourBuilder } from "../../_BUILDERS/_builderArmour";
import { constSkillBuilder } from "../../_BUILDERS/_builderSkills";
import { constWeaponBuilder } from "../../_BUILDERS/_builderWeapons";
import { constCreatureData } from "../../_BUILDERS/_Constants";

export function akitsudanEmpireSwitch(
  switchResponse: any,
  nameProp: string,
  speciesProp: string,
  factionProp: string,
  weaponProp: string,
  groupProp?: string
) {

  switch (groupProp) {
    case `Ashigaru`:
      return constCreatureData({
        response: switchResponse,
        name: `${weaponProp} Ashigaru`,
        image: {
          wild: `Ashigaru${weaponProp}.`,
        },
        stats: {
          dnd5e:
            nameProp === `Ashigaru` ? (weaponProp === `Yari` ? `mediumInfT1` : weaponProp === `Yumi` ? `archerT1` : ``)
              : nameProp === `Seasoned Ashigaru` ? (weaponProp === `Yari` ? `mediumInfT2` : weaponProp === `Yumi` ? `archerT2` : ``)
                : nameProp === `Ashigaru Bannerman` ? (weaponProp === `Yari` ? `mediumInfT3` : weaponProp === `Yumi` ? `archerT3` : ``)
                  : nameProp === `Seasoned Ashigaru` ? (weaponProp === `Yari` ? `mediumInfT2` : weaponProp === `Yumi` ? `archerT2` : ``)
                    : ``,
          wfrp4e:
            weaponProp === `Yari` ? `pikeman5`
              : weaponProp === `Yumi` ? `archer5` : ``,
        },
        skills: {
          proficient: [`ath`],
        },
        armour: constArmourBuilder(`Ashigaru`),
        weapons: constWeaponBuilder([
          ...weaponProp === `Yari` ?
            [{ weapon: `Spear`, equipped: true }]
            : weaponProp === `Yumi` ? [
              { weapon: `Shortbow`, equipped: true },
              { weapon: `Dagger`, equipped: false },
            ]
              : []
        ]),
        other: constSkillBuilder({
          types: [`akitsudan`, ...weaponProp === `Yumi` ? [`pikeman`] : weaponProp === `Yumi` ? [`archer`] : []],
          wfrp4eBonus:
            nameProp === `Ashigaru` ? 5
              : nameProp === `Seasoned Ashigaru` ? 10
                : nameProp === `Ashigaru Bannerman` ? 15
                  : 0,
        }),
        manual: {},
      });

    case `Bushi`:
      return constCreatureData({
        response: switchResponse,
        name: `${weaponProp} ${nameProp}`,
        image: {
          wild: `Samurai${weaponProp}.`,
        },
        stats: {
          dnd5e:
            nameProp === `Samurai` ? (weaponProp === `Yari` ? `mediumInfT2_Cap` : weaponProp === `Yumi` ? `archerT2_Cap` : ``)
              : nameProp === `Daimyo` ? (weaponProp === `Yari` ? `mediumInfT3_Cap` : weaponProp === `Yumi` ? `archerT3_Cap` : ``)
                : ``,
          wfrp4e:
            weaponProp === `Yari` ? `pikeman20`
              : weaponProp === `Yumi` ? `archer20` : ``,
        },
        skills: {
          proficient: [`ath`, `prc`],
        },
        armour: constArmourBuilder(`Breastplate`),
        weapons: constWeaponBuilder([
          ...weaponProp === `Yari` ?
            [{ weapon: `Spear`, equipped: true }]
            : weaponProp === `Yumi` ? [
              { weapon: `Shortbow`, equipped: true },
              { weapon: `Dagger`, equipped: false },
            ]
              : []
        ]),
        other: constSkillBuilder({
          types: [`akitsudan`, ...weaponProp === `Yumi` ? [`pikeman`] : weaponProp === `Yumi` ? [`archer`] : []],
          wfrp4eBonus:
            nameProp === `Samurai` ? 20
              : 0,
        }),
        manual: {},
      });

    default:
      switch (nameProp) {
        case `Jizamurai`: //TODO
          return constCreatureData({
            response: switchResponse,
            name: `${weaponProp} Jizamurai`,
            image: {
              wild: `Jizamurai${weaponProp}.`,
            },
            stats: {
              dnd5e:
                weaponProp === `Yari` ? `mediumInfT2`
                  : weaponProp === `Yumi` ? `archerT2` : ``,
              wfrp4e:
                weaponProp === `Yari` ? `pikeman20`
                  : weaponProp === `Yumi` ? `archer20` : ``,
            },
            skills: {
              proficient: [`ath`],
            },
            armour: constArmourBuilder(`Ashigaru`),
            weapons: constWeaponBuilder([
              ...weaponProp === `Yari` ?
                [{ weapon: `Spear`, equipped: true }]
                : weaponProp === `Yumi` ? [
                  { weapon: `Shortbow`, equipped: true },
                  { weapon: `Dagger`, equipped: false },
                ]
                  : []
            ]),
            other: constSkillBuilder({
              types: [`akitsudan`, ...weaponProp === `Yumi` ? [`pikeman`] : weaponProp === `Yumi` ? [`archer`] : []],
              wfrp4eBonus:
                nameProp === `Jizamurai` ? 5
                  : 0,
            }),
            manual: {},
          });
      }
      break;
  }
}