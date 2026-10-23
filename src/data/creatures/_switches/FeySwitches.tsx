import { WFRP4eNPCStats } from '../../_WFRP4e/FoundryDefault/WFRP4eDefault';
import { constArmourBuilder } from '../_BUILDERS/_builderArmour';
import { constSkillBuilder } from '../_BUILDERS/_builderSkills';
import { constWeaponBuilder } from '../_BUILDERS/_builderWeapons';
import { constCreatureData, TOKEN_LOCATION } from '../_BUILDERS/_Constants';
import { DnD5eNPCStats } from '../_BUILDERS/_defaultDnd5e';
import { switchResponseType } from '../_BUILDERS/_Types';

export function FeySwitch(
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
        value: `fey`,
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
    imagePath: `${TOKEN_LOCATION}giant/`,
    imageLoc: ``,
    imageWild: ``,
  };
  
  function creatureStats() {
    switch (speciesProp) {
      case `Dryad`:
        switchResponse.wfrp4e.details.species.value = `Dryad`;
        switchResponse.dnd5e.details.type.subtype = `dryad`;

        switch (nameProp) {
          case `Young Dryad`:
            return constCreatureData({
              response: switchResponse,
              image: { wild: `YoungDryad.` },
              armour: constArmourBuilder(`None`),
              weapons: constWeaponBuilder([]),
              other: constSkillBuilder({ types: [], wfrp4eBonus: 0 }),
              manual: {},
            });
        }
        break;

      default:
        switch (nameProp) {
          case `Black Shuck`:
            switchResponse.wfrp4e.details.species.value = `Black Shuck`;
            return constCreatureData({
              response: switchResponse,
              image: { wild: `BlackShuck.` },
              armour: constArmourBuilder(`None`),
              weapons: constWeaponBuilder([]),
              other: constSkillBuilder({ types: [], wfrp4eBonus: 0 }),
              manual: {},
            });

          case `Cú Sídhe`:
            switchResponse.wfrp4e.details.species.value = `Cú Sídhe`;
            return constCreatureData({
              response: switchResponse,
              image: { wild: `CúSídhe.` },
              armour: constArmourBuilder(`None`),
              weapons: constWeaponBuilder([]),
              other: constSkillBuilder({ types: [], wfrp4eBonus: 0 }),
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
