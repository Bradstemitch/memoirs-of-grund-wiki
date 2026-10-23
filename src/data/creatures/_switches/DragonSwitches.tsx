import { WFRP4eNPCStats } from '../../_WFRP4e/FoundryDefault/WFRP4eDefault';
import { constArmourBuilder } from '../_BUILDERS/_builderArmour';
import { constSkillBuilder } from '../_BUILDERS/_builderSkills';
import { constWeaponBuilder } from '../_BUILDERS/_builderWeapons';
import { constCreatureData, TOKEN_LOCATION } from '../_BUILDERS/_Constants';
import { DnD5eNPCStats } from '../_BUILDERS/_defaultDnd5e';

export function DragonSwitch(
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
        value: `dragon`,
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

  function creatureStats() {
    switch (speciesProp) {
      case `High Dragon`:
        switchResponse.wfrp4e.details.species.value = `High Dragon`;
        switchResponse.dnd5e.details.type.subtype = `high dragon`;
        switchResponse.dnd5e.traits.languages.custom = `Any One Language (Usually Common)`;

        switchResponse.dnd5e.attributes.senses.ranges.darkvision = 60;
        switchResponse.dnd5e.traits.di.value = [`poison`];
        switchResponse.dnd5e.traits.ci.value = [
          `charmed`,
          `exhaustion`,
          `poisoned`,
        ];

        switch (nameProp) {
          case `Ancient High Dragon`: //TODO
            const multiattack =
              `The [[lookup @name lowercase]]{monster} makes two Claw attacks.`;
            return constCreatureData({
              response: switchResponse,
              image: {
                path: `systems/dnd5e/tokens/dragon/`,
                wild: `RedDragonAncient.`,
              },
              stats: {
                dnd5e: `ancientHighDragon`,
                wfrp4e: `guard15`,
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
                multiattack: [multiattack, `two`],
              }),
              manual: {},
            });
        }
        break;
      // default:
      //     switch (name) {
      //         case "Beithir":
      //             switchResponse.details.wfrp4e.species.value = "Beithir"
      //             switchResponse.imageWild = "Beithir."
      //             break;

      //         case "Hydra":
      //             switchResponse.details.wfrp4e.species.value = "Hydra"
      //             switchResponse.imageWild = "Hydra."
      //             break;

      //         case "Wyvern":
      //             switchResponse.details.wfrp4e.species.value = "Wyvern"
      //             switchResponse.imageWild = "Wyvern."
      //             break;
      //     }
      //     break;
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
