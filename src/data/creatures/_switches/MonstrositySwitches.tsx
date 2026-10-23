import { WFRP4eNPCStats } from '../../_WFRP4e/FoundryDefault/WFRP4eDefault';
import { constArmourBuilder } from '../_BUILDERS/_builderArmour';
import { constSkillBuilder } from '../_BUILDERS/_builderSkills';
import { constWeaponBuilder } from '../_BUILDERS/_builderWeapons';
import { constCreatureData, TOKEN_LOCATION } from '../_BUILDERS/_Constants';
import { DnD5eNPCStats } from '../_BUILDERS/_defaultDnd5e';

export function MonstrositySwitch(
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
    imagePath: `${TOKEN_LOCATION}monstrosity/`,
    imageLoc: ``,
    imageWild: ``,
  };

  function creatureStats() {
    switch (speciesProp) {
      case `Basilisk`:
        switchResponse.wfrp4e.details.species.value = `Basilisk`;
        switchResponse.dnd5e.details.type.subtype = `basilisk`;

        switch (nameProp) {
          case `Basilisk`:
            return constCreatureData({
              response: switchResponse,
              image: { wild: `Basilisk.` },
              armour: constArmourBuilder(`None`),
              weapons: constWeaponBuilder([]),
              other: constSkillBuilder({ types: [], wfrp4eBonus: 0 }),
              manual: {},
            });
        }
        break;

      case `Centaur`:
        switchResponse.wfrp4e.details.species.value = `Centaur`;
        switchResponse.dnd5e.details.type.subtype = `centaur`;
        switch (nameProp) {
          case `Centaur`:
            return constCreatureData({
              response: switchResponse,
              image: { wild: `Centaur.` },
              armour: constArmourBuilder(`None`),
              weapons: constWeaponBuilder([]),
              other: constSkillBuilder({ types: [], wfrp4eBonus: 0 }),
              manual: {},
            });
        }
        break;

      case `Chimera`:
        switchResponse.wfrp4e.details.species.value = `Chimera`;
        switchResponse.dnd5e.details.type.subtype = `chimera`;

        switch (nameProp) {
          case `Chimera`:
            return constCreatureData({
              response: switchResponse,
              image: { wild: `Chimera.` },
              armour: constArmourBuilder(`None`),
              weapons: constWeaponBuilder([]),
              other: constSkillBuilder({ types: [], wfrp4eBonus: 0 }),
              manual: {},
            });
        }
        break;

      case `Cockatrice`:
        switchResponse.wfrp4e.details.species.value = `Cockatrice`;
        switchResponse.dnd5e.details.type.subtype = `cockatrice`;

        switch (nameProp) {
          case `Cockatrice`:
            return constCreatureData({
              response: switchResponse,
              image: { wild: `Cockatrice.` },
              armour: constArmourBuilder(`None`),
              weapons: constWeaponBuilder([]),
              other: constSkillBuilder({ types: [], wfrp4eBonus: 0 }),
              manual: {},
            });
        }
        break;

      case `Crocotta`:
        switchResponse.wfrp4e.details.species.value = `Crocotta`;
        switchResponse.dnd5e.details.type.subtype = `crocotta`;

        switch (nameProp) {
          case `Crocotta`:
            return constCreatureData({
              response: switchResponse,
              image: { wild: `Crocotta.` },
              armour: constArmourBuilder(`None`),
              weapons: constWeaponBuilder([]),
              other: constSkillBuilder({ types: [], wfrp4eBonus: 0 }),
              manual: {},
            });
        }
        break;

      case `Gorgon`:
        switchResponse.wfrp4e.details.species.value = `Gorgon`;
        switchResponse.dnd5e.details.type.subtype = `gorgon`;

        switch (nameProp) {
          case `Gorgon`:
            return constCreatureData({
              response: switchResponse,
              image: { wild: `Gorgon.` },
              armour: constArmourBuilder(`None`),
              weapons: constWeaponBuilder([]),
              other: constSkillBuilder({ types: [], wfrp4eBonus: 0 }),
              manual: {},
            });
        }
        break;

      case `Gryphon`:
        switchResponse.wfrp4e.details.species.value = `Gryphon`;
        switchResponse.dnd5e.details.type.subtype = `gryphon`;

        switch (nameProp) {
          case `Gryphon`:
            return constCreatureData({
              response: switchResponse,
              image: { wild: `Gryphon.` },
              armour: constArmourBuilder(`None`),
              weapons: constWeaponBuilder([]),
              other: constSkillBuilder({ types: [], wfrp4eBonus: 0 }),
              manual: {},
            });
        }
        break;

      case `Hippogryph`:
        switchResponse.wfrp4e.details.species.value = `Hippogryph`;
        switchResponse.dnd5e.details.type.subtype = `hippogryph`;

        switch (nameProp) {
          case `Hippogryph`:
            return constCreatureData({
              response: switchResponse,
              image: { wild: `Hippogryph.` },
              armour: constArmourBuilder(`None`),
              weapons: constWeaponBuilder([]),
              other: constSkillBuilder({ types: [], wfrp4eBonus: 0 }),
              manual: {},
            });
        }
        break;

      case `Lahmia`:
        switchResponse.wfrp4e.details.species.value = `Lahmia`;
        switchResponse.dnd5e.details.type.subtype = `lahmia`;

        switch (nameProp) {
          case `Lahmia`:
            return constCreatureData({
              response: switchResponse,
              image: { wild: `Lahmia.` },
              armour: constArmourBuilder(`None`),
              weapons: constWeaponBuilder([]),
              other: constSkillBuilder({ types: [], wfrp4eBonus: 0 }),
              manual: {},
            });
        }
        break;

      case `Manticore`:
        switchResponse.wfrp4e.details.species.value = `Manticore`;
        switchResponse.dnd5e.details.type.subtype = `manticore`;

        switch (nameProp) {
          case `Manticore`:
            return constCreatureData({
              response: switchResponse,
              image: { wild: `Manticore.` },
              armour: constArmourBuilder(`None`),
              weapons: constWeaponBuilder([]),
              other: constSkillBuilder({ types: [], wfrp4eBonus: 0 }),
              manual: {},
            });
        }
        break;

      case `Minotaur`:
        switchResponse.wfrp4e.details.species.value = `Minotaur`;
        switchResponse.dnd5e.details.type.subtype = `minotaur`;

        switch (nameProp) {
          case `Minotaur`:
            return constCreatureData({
              response: switchResponse,
              image: { wild: `Minotaur.` },
              armour: constArmourBuilder(`None`),
              weapons: constWeaponBuilder([]),
              other: constSkillBuilder({ types: [], wfrp4eBonus: 0 }),
              manual: {},
            });
        }
        break;

      case `Pegasus`:
        switchResponse.wfrp4e.details.species.value = `Pegasus`;
        switchResponse.dnd5e.details.type.subtype = `pegasus`;

        switch (nameProp) {
          case `Pegasus`:
            return constCreatureData({
              response: switchResponse,
              image: { wild: `Pegasus.` },
              armour: constArmourBuilder(`None`),
              weapons: constWeaponBuilder([]),
              other: constSkillBuilder({ types: [], wfrp4eBonus: 0 }),
              manual: {},
            });
        }
        break;

      case `Peryton`:
        switchResponse.wfrp4e.details.species.value = `Peryton`;
        switchResponse.dnd5e.details.type.subtype = `peryton`;

        switch (nameProp) {
          case `Peryton`:
            return constCreatureData({
              response: switchResponse,
              image: { wild: `Peryton.` },
              armour: constArmourBuilder(`None`),
              weapons: constWeaponBuilder([]),
              other: constSkillBuilder({ types: [], wfrp4eBonus: 0 }),
              manual: {},
            });
        }
        break;

      case `Roc`:
        switchResponse.wfrp4e.details.species.value = `Roc`;
        switchResponse.dnd5e.details.type.subtype = `roc`;

        switch (nameProp) {
          case `Roc`:
            return constCreatureData({
              response: switchResponse,
              image: { wild: `Roc.` },
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
