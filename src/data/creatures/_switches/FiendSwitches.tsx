import { WFRP4eNPCStats } from '../../_WFRP4e/FoundryDefault/WFRP4eDefault';
import { dnd5e_trait_brute } from '../monsterFeatures_DnD5e/traits/brute';
import { constArmourBuilder } from '../_BUILDERS/_builderArmour';
import { constSkillBuilder } from '../_BUILDERS/_builderSkills';
import { constWeaponBuilder } from '../_BUILDERS/_builderWeapons';
import { constCreatureData, TOKEN_LOCATION } from '../_BUILDERS/_Constants';
import { DnD5eNPCStats } from '../_BUILDERS/_defaultDnd5e';

export function FiendSwitch(
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
        value: `fiend`,
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
    imagePath: `${TOKEN_LOCATION}fiend/`,
    imageLoc: ``,
    imageWild: ``,
  };

  function creatureStats() {
    switch (
    speciesProp // Attributes
    ) {
      case `Demon`: //TODO
        switchResponse.wfrp4e.details.species.value = `Demon`;
        switchResponse.dnd5e.details.type.subtype = `demon`;
        switchResponse.dnd5e.traits.languages.custom = `Any One Language (Usually Common)`;

        switchResponse.dnd5e.attributes.senses.ranges.darkvision = 60;
        switchResponse.dnd5e.traits.di.value = [`poison`];
        switchResponse.dnd5e.traits.ci.value = [
          `charmed`,
          `exhaustion`,
          `poisoned`,
        ];

        switch (nameProp) {
          case `Gluttony`: //TODO
            return constCreatureData({
              response: switchResponse,
              image: { wild: `Ghoul.` },
              stats: {
                dnd5e: `ghoul`,
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
                multiattack: [`The [[lookup @name lowercase]]{monster} makes two Claw attacks.`, `two`],
              }),
              manual: {},
            });
        }
        break;

      case `Vampire`: //TODO
        switchResponse.imagePath += `vampire/`;
        switchResponse.wfrp4e.details.species.value = `Vampire`;
        switchResponse.dnd5e.details.type.subtype = `vampire`;

        switchResponse.dnd5e.attributes.senses.ranges.darkvision = 120;

        switchResponse.dnd5e.traits = {
          ...switchResponse.dnd5e.traits,
          languages: {
            ...switchResponse.dnd5e.traits.languages,
            custom: `Any One Language (Usually Common)`
          },
          dr: {
            ...switchResponse.dnd5e.traits.dr,
            value: [`necrotic`],
          },
        }

        switch (nameProp) {
          case `Black Knight Squire`: //TODO
            // const multiattack = 'The [[lookup @name lowercase]]{monster} makes two Claw attacks.'
            return constCreatureData({
              response: switchResponse,
              image: { wild: `BlackKnightSquire.` },
              stats: {
                dnd5e: `ghoul`,
                wfrp4e: `vampireSpawn`,
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
                types: [`heavy`, `lancer`],
                wfrp4eBonus: 20,
                multiattack: [``, `three`],
              }),
              manual: {},
              // switchResponse.statBonus = "knight5",
            });

          case `Black Knight`: //TODO
            // const multiattack = 'The [[lookup @name lowercase]]{monster} makes two Claw attacks.'
            return constCreatureData({
              response: switchResponse,
              name: `Mounted Black Knight`,
              image: { wild: `BlackKnight.` },
              token: {
                size: weaponProp && weaponProp === `Mounted` ? 2 : 1,
                ring: `Silver`,
              },
              stats: {
                dnd5e: `vampire`,
                wfrp4e: `vampire`,
              },
              skills: {
                proficient: [`ath`, `prc`],
              },
              savingThrows: {
                dex: 1,
                con: 1,
                wis: 1,
                cha: 1,
              },
              armour: constArmourBuilder(`Half Plate`),
              weapons: constWeaponBuilder([
                ...(weaponProp && weaponProp === `Mounted` ? [
                  {
                    weapon: `Lance`, equipped: true, dnd5eDamage: 3,
                    necroticDamage: [2, 8],
                    cavalryShockAssault: [2, 8]
                  },
                ] : []),
                {
                  weapon: `Longsword`, equipped: weaponProp && weaponProp === `Mounted` ? false : true, dnd5eDamage: weaponProp && weaponProp === `Mounted` ? 3 : 2,
                  necroticDamage: [2, 6],
                },
                { weapon: `Large Shield`, equipped: true },
              ]),
              other: constSkillBuilder({
                types: [`brytthonic`, `vampire`, `heavy`, ...(weaponProp && weaponProp === `Mounted` ? [`lancer`] : [`spearman`])],
                wfrp4eBonus: 20,
                multiattack: [``, `two`],
              }),
              manual: {
                dnd5e: [dnd5e_trait_brute()],
              },
              // switchResponse.statBonus = "knight15",
            });
        }
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
