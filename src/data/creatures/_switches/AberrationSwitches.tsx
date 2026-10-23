import { WFRP4eNPCStats } from '../../_WFRP4e/FoundryDefault/WFRP4eDefault';
import { constArmourBuilder } from '../_BUILDERS/_builderArmour';
import { constSkillBuilder } from '../_BUILDERS/_builderSkills';
import { constWeaponBuilder } from '../_BUILDERS/_builderWeapons';
import { TOKEN_LOCATION, constCreatureData } from '../_BUILDERS/_Constants';
import { DnD5eNPCStats } from '../_BUILDERS/_defaultDnd5e';
import { switchResponseType } from '../_BUILDERS/_Types';

export function AberrationSwitch(
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
        value: `aberration`,
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
    imagePath: `${TOKEN_LOCATION}aberration/`,
    imageLoc: ``,
    imageWild: ``,
  };

  function creatureStats() {
    switch (speciesProp) {
      case `Old One`:
        switchResponse.wfrp4e.details.species.value = `Old One`;
        switchResponse.dnd5e.details.type.subtype = `old one`;

        switch (nameProp) {
          case `Devourer`:
            return constCreatureData({
              response: switchResponse,
              image: { wild: `Devourer.` },
              armour: constArmourBuilder(`None`),
              weapons: constWeaponBuilder([]),
              other: constSkillBuilder({ types: [], wfrp4eBonus: 0 }),
              manual: {},
            });

          case `Dweller`:
            return constCreatureData({
              response: switchResponse,
              image: { wild: `Dweller.` },
              armour: constArmourBuilder(`None`),
              weapons: constWeaponBuilder([]),
              other: constSkillBuilder({ types: [], wfrp4eBonus: 0 }),
              manual: {},
            });

          case `Pursuer`:
            return constCreatureData({
              response: switchResponse,
              image: { wild: `Pursuer.` },
              armour: constArmourBuilder(`None`),
              weapons: constWeaponBuilder([]),
              other: constSkillBuilder({ types: [], wfrp4eBonus: 0 }),
              manual: {},
            });

          case `Watcher`:
            return constCreatureData({
              response: switchResponse,
              image: { wild: `Watcher.` },
              armour: constArmourBuilder(`None`),
              weapons: constWeaponBuilder([]),
              other: constSkillBuilder({ types: [], wfrp4eBonus: 0 }),
              manual: {},
            });
        }
        break;

      case `Scourge`:
        switchResponse.wfrp4e.details.species.value = `Scourge`;
        switchResponse.dnd5e.details.type.subtype = `scourge`;

        switch (nameProp) {
          case `Devourer`:
            return constCreatureData({
              response: switchResponse,
              image: { wild: `Devourer.` },
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
