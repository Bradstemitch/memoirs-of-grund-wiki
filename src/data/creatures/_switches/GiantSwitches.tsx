import { WFRP4eNPCStats } from '../../_WFRP4e/FoundryDefault/WFRP4eDefault';
import { constArmourBuilder } from '../_BUILDERS/_builderArmour';
import { constSkillBuilder } from '../_BUILDERS/_builderSkills';
import { constWeaponBuilder } from '../_BUILDERS/_builderWeapons';
import { TOKEN_LOCATION, constCreatureData } from '../_BUILDERS/_Constants';
import { DnD5eNPCStats } from '../_BUILDERS/_defaultDnd5e';
import { switchResponseType } from '../_BUILDERS/_Types';

export function GiantSwitch(
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
        value: `giant`,
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
      case `Fomorian`:
        switchResponse.wfrp4e.details.species.value = `Fomorian`;
        switchResponse.dnd5e.details.type.subtype = `fomorian`;

        switch (nameProp) {
          case `Fomorian`:
            return constCreatureData({
              response: switchResponse,
              image: { wild: `Fomorian.` },
              armour: constArmourBuilder(`None`),
              weapons: constWeaponBuilder([]),
              other: constSkillBuilder({ types: [], wfrp4eBonus: 0 }),
              manual: {},
            });
        }
        break;

      case `Giant`:
        switchResponse.wfrp4e.details.species.value = `Giant`;

        switch (nameProp) {
          case `Giant`:
            return constCreatureData({
              response: switchResponse,
              image: { wild: `Giant.` },
              armour: constArmourBuilder(`None`),
              weapons: constWeaponBuilder([]),
              other: constSkillBuilder({ types: [], wfrp4eBonus: 0 }),
              manual: {},
            });
        }
        break;

      case `Ogre`:
        switchResponse.wfrp4e.details.species.value = `Ogre`;
        switchResponse.dnd5e.details.type.subtype = `ogre`;

        switch (nameProp) {
          case `Ogre`:
            return constCreatureData({
              response: switchResponse,
              image: { wild: `Ogre.` },
              armour: constArmourBuilder(`None`),
              weapons: constWeaponBuilder([]),
              other: constSkillBuilder({ types: [], wfrp4eBonus: 0 }),
              manual: {},
            });

          case `Oni`:
            return constCreatureData({
              response: switchResponse,
              image: { wild: `Oni.` },
              armour: constArmourBuilder(`None`),
              weapons: constWeaponBuilder([]),
              other: constSkillBuilder({ types: [], wfrp4eBonus: 0 }),
              manual: {},
            });
        }
        break;

      case `Troll`:
        switchResponse.wfrp4e.details.species.value = `Troll`;
        switchResponse.dnd5e.details.type.subtype = `troll`;

        switch (nameProp) {
          case `Troll`:
            return constCreatureData({
              response: switchResponse,
              image: { wild: `Troll.` },
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
