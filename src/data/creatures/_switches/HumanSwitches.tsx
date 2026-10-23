import { WFRP4eNPCStats } from '../../_WFRP4e/FoundryDefault/WFRP4eDefault';
import { dnd5e_effect_halfCover } from '../monsterFeatures_DnD5e/effects/halfCover';
import { dnd5e_spell_coneOfCold5th } from '../monsterFeatures_DnD5e/spells/coneOfCold';
import { dnd5e_trait_brute } from '../monsterFeatures_DnD5e/traits/brute';
import { dnd5e_trait_spellcasting } from '../monsterFeatures_DnD5e/traits/spellcasting';
import { dnd5e_trait_triarii } from '../monsterFeatures_DnD5e/traits/triarii';
import { constArmourBuilder } from '../_BUILDERS/_builderArmour';
import { constSkillBuilder } from '../_BUILDERS/_builderSkills';
import { constWeaponBuilder } from '../_BUILDERS/_builderWeapons';
import { constCreatureData, TOKEN_LOCATION } from '../_BUILDERS/_Constants';
import { DnD5eNPCStats } from '../_BUILDERS/_defaultDnd5e';
import { messanHeptarchySwitch } from './humanSwitches/messanHeptarchySwitches';
import { brytthonicKingdomsSwitch } from './humanSwitches/brytthonicKingdomsSwitches';
import { allairanEmpireSwitch } from './humanSwitches/allairanEmpireSwitches';
import { akitsudanEmpireSwitch } from './humanSwitches/akitsudanEmpireSwitches';

export function HumanSwitch(
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
        value: `humanoid`,
        subtype: `human`,
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
    imagePath: `${TOKEN_LOCATION}human/`,
    imageLoc: ``,
    imageWild: ``,
  };

  switchResponse.wfrp4e.details.species = {
    value: `Human`,
    subspecies: ``,
  };
  switchResponse.wfrp4e.details.size = {
    value: `avg`,
  };

  function creatureStats() {
    switch (factionProp) {
      case `Akitsudo`: //TODO
        switchResponse.imagePath += `akitsudan/`;
        switchResponse.dnd5e.traits.languages.custom = `Nori`;
        return akitsudanEmpireSwitch(switchResponse, nameProp, speciesProp, factionProp, weaponProp, groupProp)

      case `Allaire`: //TODO
        switchResponse.imagePath += `allairan/`;
        switchResponse.dnd5e.traits.languages.custom = `Allairan`;
        return allairanEmpireSwitch(switchResponse, nameProp, speciesProp, factionProp, weaponProp, groupProp)

      // case `ArcadiaR`: //TODO
      //     switchResponse.imagePath = switchResponse.imagePath + `arcdaiaR/`
      //     switchResponse.details.dnd5e.traits.languages.value = [`Arcadian`]
      //     systemProp === `WFRP4e` && switchResponse.other.push(skill_language(0, `Arcadian`))
      //     switch (name) {
      //         case `Mercenary Novice`: //TODO
      //             switchResponse.imageWild = `Novice.`
      //             constSkillBuilder({ system:systemProp,types: [`spearman`], wfrp4eBonus: 5 })
      //             switchResponse.stats = {
      //                 dnd5e: `mediumInfT2`,
      //                 wfrp4e: `soldier5`
      //             }
      //             switchResponse.armour = constArmourBuilder(systemProp,`Hide`)
      //             switchResponse.weapons = [
      //                 ...constWeaponBuilder({ weapon: `Spear`, equipped: true }),
      //                 ...constWeaponBuilder({ weapon: `Short Sword`, equipped: true }),
      //                 ...constWeaponBuilder({ weapon: `Large Shield`, equipped: true }),
      //             ]
      //             break;

      //         case `Mercenary`: //TODO
      //             switchResponse.imageWild = `Mercenary.`
      //             constSkillBuilder({ system:systemProp,types: [`spearman`], wfrp4eBonus: 10 })
      //             switchResponse.stats = {
      //                 dnd5e: `mediumInfT2`,
      //                 wfrp4e: `soldier10`
      //             }
      //             switchResponse.armour = constArmourBuilder(systemProp,`Hide`)
      //             switchResponse.weapons = [
      //                 ...constWeaponBuilder({ weapon: `Spear`, equipped: true }),
      //                 ...constWeaponBuilder({ weapon: `Short Sword`, equipped: true }),
      //                 ...constWeaponBuilder({ weapon: `Large Shield`, equipped: true }),
      //             ]
      //             break;

      //         case `Mercenary Sergeant`: //TODO
      //             switchResponse.imageWild = `Recruit.`
      //             constSkillBuilder({ system:systemProp,types: [`spearman`], wfrp4eBonus: 15 })
      //             switchResponse.stats = {
      //                 dnd5e: `mediumInfT2`,
      //                 wfrp4e: `soldier15`
      //             }
      //             switchResponse.armour = constArmourBuilder(systemProp,`Hide`)
      //             switchResponse.weapons = [
      //                 ...constWeaponBuilder({ weapon: `Spear`, equipped: true }),
      //                 ...constWeaponBuilder({ weapon: `Short Sword`, equipped: true }),
      //                 ...constWeaponBuilder({ weapon: `Large Shield`, equipped: true }),
      //             ]
      //             break;

      //         case `Mercenary Seneschal`: //TODO
      //             switchResponse.imageWild = `Recruit.`
      //             constSkillBuilder({ system:systemProp,types: [`spearman`], wfrp4eBonus: 20 })
      //             switchResponse.stats = {
      //                 dnd5e: `mediumInfT2`,
      //                 wfrp4e: `soldier20`
      //             }
      //             switchResponse.armour = constArmourBuilder(systemProp,`Hide`)
      //             switchResponse.weapons = [
      //                 ...constWeaponBuilder({ weapon: `Spear`, equipped: true }),
      //                 ...constWeaponBuilder({ weapon: `Short Sword`, equipped: true }),
      //                 ...constWeaponBuilder({ weapon: `Large Shield`, equipped: true }),
      //             ]
      //             break;
      //     }
      //     break;

      // case `Assere`: //TODO
      //     switchResponse.imagePath = switchResponse.imagePath + `arcadiaR/`
      //     switchResponse.details.dnd5e.traits.languages.value = [`Arcadian`]
      //     systemProp === `WFRP4e` && switchResponse.other.push(skill_language(0, `Arcadian`))
      //     switch (name) {
      //         case `House Militant Recruit`: //TODO
      //             switchResponse.stats = {
      //                 dnd5e: `mediumInfT2`,
      //                 wfrp4e: `guard5`
      //             }
      //             break;

      //         case `House Militant`: //TODO
      //             switchResponse.stats = {
      //                 dnd5e: `mediumInfT2`,
      //                 wfrp4e: `guard10`
      //             }
      //             break;

      //         case `Honour Guard`: //TODO
      //             switchResponse.stats = {
      //                 dnd5e: `mediumInfT2`,
      //                 wfrp4e: `guard15`
      //             }
      //             break;

      //         case `Honour Guard Officer`: //TODO
      //             switchResponse.stats = {
      //                 dnd5e: `mediumInfT2`,
      //                 wfrp4e: `guard20`
      //             }
      //             break;

      //         case `Scion`: //TODO
      //             break;
      //     }
      //     break;

      case `Comino`:
        switchResponse.imagePath += `arcadiaR/`;
        switchResponse.dnd5e.traits.languages.custom = `Arcadian`;
        switch (nameProp) {
          case `Hastatus`: //TODO
            return constCreatureData({
              response: switchResponse,
              image: {
                wild: `Princeps.`,
              },
              stats: {
                dnd5e: `mediumInfT2`,
                wfrp4e: `soldier10`,
              },
              skills: {
                proficient: [`ath`],
              },
              armour: constArmourBuilder(`Chain Shirt`),

              weapons: constWeaponBuilder([
                { weapon: `Short Sword`, equipped: true },
                {
                  weapon: `Javelin`,
                  equipped: true,
                  quantity: 2,
                  otherName: `Pilum`,
                },
                { weapon: `Large Shield`, equipped: true, otherName: `Scutum` },
              ]),
              other: constSkillBuilder({
                types: [`arcadian`, `heavy`, `legio`],
                wfrp4eBonus: 5,
                multiattack: [`Legionary`, `two`],
              }),
              manual: {},
              effects: {
                dnd5e: [dnd5e_effect_halfCover()],
              },
            });

          case `Princeps`: //TODO
            return constCreatureData({
              response: switchResponse,
              image: {
                wild: `Princeps.`,
              },
              stats: {
                dnd5e: `shockInfT2`,
                wfrp4e: `soldier10`,
              },
              skills: {
                proficient: [`ath`],
              },
              armour: constArmourBuilder(`Chain Shirt`),

              weapons: constWeaponBuilder([
                { weapon: `Short Sword`, equipped: true },
                {
                  weapon: `Javelin`,
                  equipped: true,
                  quantity: 2,
                  otherName: `Pilum`,
                },
                { weapon: `Large Shield`, equipped: true, otherName: `Scutum` },
              ]),
              other: constSkillBuilder({
                types: [`arcadian`, `heavy`, `legio`],
                wfrp4eBonus: 10,
                multiattack: [`Legionary`, `two`],
              }),
              manual: {},
              effects: {
                dnd5e: [dnd5e_effect_halfCover()],
              },
            });

          case `Triarius`: //TODO
            return constCreatureData({
              response: switchResponse,
              image: {
                wild: `Triarius.`,
              },
              stats: {
                dnd5e: `shockInfT3`,
                wfrp4e: `soldier15`,
              },
              skills: {
                proficient: [`ath`],
              },
              armour: constArmourBuilder(`Breastplate`),

              weapons: constWeaponBuilder([
                { weapon: `Spear`, equipped: true, otherName: `Hasta` },
                { weapon: `Large Shield`, equipped: true, otherName: `Scutum` },
              ]),
              other: constSkillBuilder({
                types: [`arcadian`, `heavy`, `legio`],
                wfrp4eBonus: 15,
                multiattack: [``, `three`],
              }),
              manual: {
                dnd5e: [dnd5e_trait_triarii()],
              },
              effects: {
                dnd5e: [dnd5e_effect_halfCover()],
              },
            });

          case `Decurion`: //TODO
            return constCreatureData({
              response: switchResponse,
              image: {
                wild: `Triarius.`,
              },
              stats: {
                dnd5e: `shockInfT3`,
                wfrp4e: `soldier15`,
              },
              skills: {
                proficient: [`ath`, `prc`],
              },
              armour: constArmourBuilder(`Chain Shirt`),

              weapons: constWeaponBuilder([
                { weapon: `Spear`, equipped: true, dnd5eDamage: 2 },
                { weapon: `Large Shield`, equipped: true, otherName: `Scutum` },
              ]),
              other: constSkillBuilder({
                types: [`arcadian`, `heavy`, `legio`],
                wfrp4eBonus: 20,
                multiattack: [``, `three`],
              }),
              manual: {},
              effects: {
                dnd5e: [dnd5e_effect_halfCover()],
              },
            });
        }
        break;

      case `Brytth`: //TODO
        switchResponse.imagePath += `brytthonic/`;
        switchResponse.dnd5e.traits.languages.custom = `Brytthonic`;

        return brytthonicKingdomsSwitch(switchResponse, nameProp, speciesProp, factionProp, weaponProp, groupProp)

      case `Carne`: //TODO
        switchResponse.imagePath = switchResponse.imagePath + `carnan/`;
        switchResponse.dnd5e.traits.languages.custom = `Carnan`;

        switch (groupProp) {
          case `Legio`: //TODO
            switch (nameProp) {
              case `Legionary`: //TODO
                return constCreatureData({
                  response: switchResponse,
                  image: {
                    wild: `Legionary.`,
                  },
                  stats: {
                    dnd5e: `shockInfT2`,
                    wfrp4e: `soldier15`,
                  },
                  skills: {
                    proficient: [`ath`],
                  },
                  armour: constArmourBuilder(`Chain Shirt`),

                  weapons: constWeaponBuilder([
                    { weapon: `Short Sword`, equipped: true },
                    { weapon: `Javelin`, equipped: true, otherName: `Pilum` },
                    {
                      weapon: `Large Shield`, equipped: true,
                      otherName: `Scutum`,
                    },
                  ]),
                  other: constSkillBuilder({
                    types: [`carnan`, `heavy`, `legio`],
                    wfrp4eBonus: 20,
                    multiattack: [`Legionary`, `two`],
                  }),
                  manual: {},
                  effects: {
                    dnd5e: [dnd5e_effect_halfCover()],
                  },
                });

              case `Decurion`: //TODO
                return constCreatureData({
                  response: switchResponse,
                  image: {
                    wild: `Decurion.`,
                  },
                  stats: {
                    dnd5e: `shockInfT2`,
                    wfrp4e: `soldier20`,
                  },
                  skills: {
                    proficient: [`prc`],
                  },
                  armour: constArmourBuilder(`Chain Shirt`),

                  weapons: constWeaponBuilder([
                    { weapon: `Short Sword`, equipped: true },
                    { weapon: `Javelin`, equipped: true, otherName: `Pilum` },
                    {
                      weapon: `Large Shield`, equipped: true,
                      otherName: `Scutum`,
                    },
                  ]),
                  other: constSkillBuilder({
                    types: [`carnan`, `heavy`, `legio`],
                    wfrp4eBonus: 15,
                    multiattack: [`Legionary`, `two`],
                  }),
                  manual: {},
                  effects: {
                    dnd5e: [dnd5e_effect_halfCover()],
                  },
                });

              case `Centurion`: //TODO
                return constCreatureData({
                  response: switchResponse,
                  image: {
                    wild: `Centurion.`,
                  },
                  stats: {
                    dnd5e: `shockInfT2`,
                    wfrp4e: `soldier20`,
                  },
                  skills: {
                    proficient: [`prc`],
                  },
                  armour: constArmourBuilder(`Chain Shirt`),

                  weapons: constWeaponBuilder([
                    { weapon: `Short Sword`, equipped: true },
                    { weapon: `Javelin`, equipped: true, otherName: `Pilum` },
                    {
                      weapon: `Large Shield`, equipped: true,
                      otherName: `Scutum`,
                    },
                  ]),
                  other: constSkillBuilder({
                    types: [`carnan`, `heavy`, `legio`],
                    wfrp4eBonus: 15,
                    multiattack: [`Legionary`, `two`],
                  }),
                  manual: {},
                  effects: {
                    dnd5e: [dnd5e_effect_halfCover()],
                  },
                });
            }
            break;

          case `Eques`: //TODO
            switch (nameProp) {
              case `Eques`: //TODO
                return constCreatureData({
                  response: switchResponse,
                  image: {
                    wild: `Eques.`,
                  },
                  stats: {
                    dnd5e: `shockInfT2`,
                    wfrp4e: `soldier20`,
                  },
                  skills: {
                    proficient: [`prc`],
                  },
                  armour: constArmourBuilder(`Chain Shirt`),
                  weapons: constWeaponBuilder([
                    { weapon: `Short Sword`, equipped: true },
                    { weapon: `Large Shield`, equipped: true },
                  ]),
                  other: constSkillBuilder({
                    types: [`carnan`, `heavy`, `legio`],
                    wfrp4eBonus: 15,
                    multiattack: [`Legionary`, `two`],
                  }),
                  manual: {},
                });
            }
            break;

          case `Skirmishers`: //TODO
            switch (nameProp) {
              case `Sagittarius`: //TODO
                return constCreatureData({
                  response: switchResponse,
                  image: {
                    wild: `Sagittarius.`,
                  },
                  stats: {
                    dnd5e: `archerT1`,
                    wfrp4e: `archer5`,
                  },
                  skills: {
                    proficient: [`prc`],
                  },
                  armour: constArmourBuilder(`Chain Shirt`),
                  weapons: constWeaponBuilder([
                    { weapon: `Shortbow`, equipped: true },
                    { weapon: `Dagger`, equipped: true },
                  ]),
                  other: constSkillBuilder({
                    types: [`carnan`, `archer`],
                    wfrp4eBonus: 5,
                    multiattack: [``, `two`],
                  }),
                  manual: {},
                });
            }
            break;
        }
        break;

      case `Fomoire`: //TODO
        switchResponse.imagePath += `fomorian/`;
        switchResponse.dnd5e.traits.languages.value = [`giant`];

        switch (nameProp) {
          case `Youth`: //TODO
            return constCreatureData({
              response: switchResponse,
              image: {
                wild: `Youth.`,
              },
              stats: {
                dnd5e: `lightInfT1`,
                wfrp4e: `pitfighter5`,
              },
              skills: {
                proficient: [`prc`],
              },
              armour: constArmourBuilder(`Hide`),
              weapons: constWeaponBuilder([
                { weapon: `Spear`, equipped: true },
                { weapon: `Large Shield`, equipped: true },
              ]),
              other: constSkillBuilder({
                types: [`fomroian`, `spearman`],
                wfrp4eBonus: 5,
              }),
              manual: {},
            });

          case `Ceithearn`: //TODO
            return constCreatureData({
              response: switchResponse,
              image: {
                wild: `Ceithearn.`,
              },
              stats: {
                dnd5e: `mediumInfT2`,
                wfrp4e: `pitfighter10`,
              },
              skills: {
                proficient: [`prc`],
              },
              armour: constArmourBuilder(`Hide`),
              weapons: constWeaponBuilder([
                { weapon: `Spear`, equipped: true },
                { weapon: `Large Shield`, equipped: true },
              ]),
              other: constSkillBuilder({
                types: [`fomroian`, `spearman`],
                wfrp4eBonus: 10,
                multiattack: [``, `two`],
              }),
              manual: {},
            });

          // case `Gallóglaigh`: //TODO
          //     switchResponse.imageWild = `Galloglaigh.`
          //     constSkillBuilder({ types: [`spearman`], wfrp4eBonus: 15 })
          //     switchResponse.stats = {
          //         dnd5e: `ligInfT1`,
          //         wfrp4e: `pitfighter5`
          //     }
          //     switchResponse.armour = constArmourBuilder(`None`)
          //     switchResponse.weapons.push(
          //         ...constWeaponBuilder({ weapon: `Spear`, equipped: true }),
          //         ...constWeaponBuilder({ weapon: `Large Shield`, equipped: true }),
          //     )
          //     break;

          // case `Woad Warrior`: //TODO
          //     switchResponse.imageWild = `Galloglaigh.`
          //     constSkillBuilder({ types: [`spearman`], wfrp4eBonus: 15 })
          //     switchResponse.stats = {
          //         dnd5e: `ligInfT1`,
          //         wfrp4e: `pitfighter5`
          //     }
          //     switchResponse.armour = constArmourBuilder(`None`)
          //     switchResponse.weapons.push(
          //         ...constWeaponBuilder({ weapon: `Spear`, equipped: true }),
          //         ...constWeaponBuilder({ weapon: `Large Shield`, equipped: true }),
          //     )
          //     break;
        }
        break;

      case `Mycenae`: //TODO
        switchResponse.imagePath += `mycenaean/`;
        switchResponse.dnd5e.traits.languages.custom = `Mycenaean`;

        switch (nameProp) {
          case `Hoplite`: //TODO
            return constCreatureData({
              response: switchResponse,
              image: {
                wild: `Hoplite.`,
              },
              stats: {
                dnd5e: `mediumInfT2`,
                wfrp4e: `pikeman5`,
              },
              skills: {
                proficient: [`ath`],
              },
              armour: constArmourBuilder(`Hide`),
              weapons: constWeaponBuilder([
                { weapon: `Spear`, equipped: true, otherName: `Dory` },
                { weapon: `Short Sword`, equipped: true },
                { weapon: `Large Shield`, equipped: true, otherName: `Aspis` },
              ]),
              other: constSkillBuilder({
                types: [`mycenaean`, `phalanx`],
                wfrp4eBonus: 20,
                multiattack: [``, `two`],
              }),
              manual: {},
              effects: {
                dnd5e: [dnd5e_effect_halfCover()],
              },
              //switchResponse.statBonus = `knight15`
            });

          case `Armoured Hoplite`: //TODO
            return constCreatureData({
              response: switchResponse,
              image: {
                wild: `RoyalHoplite.`,
              },
              stats: {
                dnd5e: `shockInfT2`,
                wfrp4e: `pikeman5`,
              },
              skills: {
                proficient: [`ath`],
              },
              armour: constArmourBuilder(`Breastplate`),

              weapons: constWeaponBuilder([
                { weapon: `Spear`, equipped: true, otherName: `Dory` },
                { weapon: `Short Sword`, equipped: true },
                { weapon: `Large Shield`, equipped: true, otherName: `Aspis` },
              ]),
              other: constSkillBuilder({
                types: [`mycenaean`, `heavy`, `phalanx`],
                wfrp4eBonus: 20,
                multiattack: [``, `two`],
              }),
              manual: {},
              effects: {
                dnd5e: [dnd5e_effect_halfCover()],
              },
              //switchResponse.statBonus = `knight15`
            });

          case `Myrmidon`: //TODO
            return constCreatureData({
              response: switchResponse,
              image: {
                wild: `Myrmidon.`,
              },
              stats: {
                dnd5e: `shockInfT3`,
                wfrp4e: `pikeman5`,
              },
              skills: {
                proficient: [`ath`],
              },
              armour: constArmourBuilder(`Half Plate`),

              weapons: constWeaponBuilder([
                { weapon: `Spear`, equipped: true, otherName: `Dory` },
                { weapon: `Short Sword`, equipped: true },
                { weapon: `Large Shield`, equipped: true, otherName: `Aspis` },
              ]),
              other: constSkillBuilder({
                types: [`mycenaean`, `heavy`, `phalanx`],
                wfrp4eBonus: 20,
                multiattack: [``, `two`],
              }),
              manual: {},
              effects: {
                dnd5e: [dnd5e_effect_halfCover()],
              },
              //switchResponse.statBonus = `knight15`
            });
        }
        break;

      case `Krasaheim`: //TODO
        switchResponse.imagePath += `norse/`;
        switchResponse.dnd5e.traits.languages.custom = `Norse`;
        switch (nameProp) {
          case `Raider`: //TODO
            return constCreatureData({
              response: switchResponse,
              image: {
                wild: `Raider.`,
              },
              stats: {
                dnd5e: `mediumInfT2`,
                wfrp4e: `pitFighter10`,
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
                types: [`krasen`, `shieldwall`, `spearman`],
                wfrp4eBonus: 10,
                multiattack: [``, `two`],
              }),
              manual: {},
            });

          case `Huskarl`: //TODO
            return constCreatureData({
              response: switchResponse,
              image: {
                wild: `Huskarl.`,
              },
              stats: {
                dnd5e: `mediumInfT3`,
                wfrp4e: `pitFighter10`,
              },
              skills: {
                proficient: [`prc`],
              },
              armour: constArmourBuilder(`Scale Mail`),
              weapons: constWeaponBuilder([
                { weapon: `Greataxe`, equipped: false, dnd5eDamage: 2 },
                { weapon: `Short Sword`, equipped: true, dnd5eDamage: 2 },
                { weapon: `Shield`, equipped: true },
                { weapon: `ShieldBash`, equipped: true, dnd5eDamage: 2 },
              ]),
              other: constSkillBuilder({
                types: [`krasen`, `shieldwall`, `huscarl`],
                wfrp4eBonus: 25,
                multiattack: [`ShieldBash`, `two`],
              }),
              manual: {
                dnd5e: [dnd5e_trait_brute()],
              },
            });

          case `Ufeonar`: //TODO
            return constCreatureData({
              response: switchResponse,
              image: {
                wild: `Huskarl.`,
              },
              stats: {
                dnd5e: `mediumInfT1`,
                wfrp4e: `pitFighter10`,
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
                types: [`krasen`, `shieldwall`, `huscarl`],
                wfrp4eBonus: 25,
              }),
              manual: {},
            });

          case `Berserker`: //TODO
            return constCreatureData({
              response: switchResponse,
              image: {
                wild: `Berserker.`,
              },
              stats: {
                dnd5e: `mediumInfT1`,
                wfrp4e: `pitFighter10`,
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
                types: [`krasen`, `shieldwall`, `huscarl`],
                wfrp4eBonus: 25,
              }),
              manual: {},
            });
        }
        break;

      case `Messar`: //TODO
        switchResponse.imagePath += `messan/`;
        switchResponse.dnd5e.traits.languages.custom = `Aeaxon`;
        return messanHeptarchySwitch(switchResponse, nameProp, speciesProp, factionProp, weaponProp, groupProp)

      case `Outlaw`: //TODO
        switch (nameProp) {
          case `Robber`: //TODO
            return constCreatureData({
              response: switchResponse,
              image: {
                wild: `Militia.`,
              },
              stats: {
                dnd5e: `lightInfT1`,
                wfrp4e: `outlaw5`,
              },
              skills: {
                proficient: [`prc`],
              },
              armour: constArmourBuilder(`Hide`),
              weapons: constWeaponBuilder([
                { weapon: `Handaxe`, equipped: true },
                { weapon: `Shield`, equipped: true },
              ]),
              other: constSkillBuilder({ types: [`basic`], wfrp4eBonus: 5 }),
              manual: {},
            });

          case `Brigand`: //TODO
            return constCreatureData({
              response: switchResponse,
              image: {
                wild: `Brigand.`,
              },
              stats: {
                dnd5e: `mediumInfT2`,
                wfrp4e: `outlaw10`,
              },
              skills: {
                proficient: [`prc`],
              },
              armour: constArmourBuilder(`Hide`),
              weapons: constWeaponBuilder([
                { weapon: `Handaxe`, equipped: true },
                { weapon: `Shield`, equipped: true },
              ]),
              other: constSkillBuilder({
                types: [`basic`],
                wfrp4eBonus: 10,
                multiattack: [``, `two`],
              }),
              manual: {},
            });

          case `Marauder`: //TODO
            return constCreatureData({
              response: switchResponse,
              image: {
                wild: `Marauder.`,
              },
              stats: {
                dnd5e: `shockInfT2`,
                wfrp4e: `outlaw15`,
              },
              skills: {
                proficient: [`prc`],
              },
              armour: constArmourBuilder(`Hide`),
              weapons: constWeaponBuilder([
                { weapon: `Handaxe`, equipped: true },
                { weapon: `Handaxe`, equipped: true, offhand: true },
              ]),
              other: constSkillBuilder({
                types: [`basic`],
                wfrp4eBonus: 15,
                multiattack: [``, `three`],
              }),
              manual: {},
            });

          case `Mugger`: //TODO
            return constCreatureData({
              response: switchResponse,
              image: {
                wild: `Mugger.`,
              },
              stats: {
                dnd5e: `shockInfT1`,
                wfrp4e: `protagonist5`,
              },
              skills: {
                proficient: [`prc`],
              },
              armour: constArmourBuilder(`Hide`),
              weapons: constWeaponBuilder([
                { weapon: `Axe`, equipped: true },
                { weapon: `Axe`, equipped: true, offhand: true },
              ]),
              other: constSkillBuilder({ types: [`basic`], wfrp4eBonus: 5 }),
              manual: {},
            });

          case `Assassin`: //TODO
            return constCreatureData({
              response: switchResponse,
              image: {
                wild: `Assassin.`,
              },
              stats: {
                dnd5e: `shockInfT1`,
                wfrp4e: `protagonist20`,
              },
              skills: {
                proficient: [`prc`],
              },
              armour: constArmourBuilder(`Hide`),
              weapons: constWeaponBuilder([
                { weapon: `Axe`, equipped: true },
                { weapon: `Axe`, equipped: true, offhand: true },
              ]),
              other: constSkillBuilder({ types: [`basic`], wfrp4eBonus: 20 }),
              manual: {},
            });

          case `Footpad`: //TODO
            return constCreatureData({
              response: switchResponse,
              image: {
                wild: `Footpad.`,
              },
              stats: {
                dnd5e: `shockInfT1`,
                wfrp4e: `protagonist5`,
              },
              skills: {
                proficient: [`prc`],
              },
              armour: constArmourBuilder(`Hide`),
              weapons: constWeaponBuilder([
                { weapon: `Axe`, equipped: true },
                { weapon: `Axe`, equipped: true, offhand: true },
              ]),
              other: constSkillBuilder({ types: [`basic`], wfrp4eBonus: 20 }),
              manual: {},
            });
        }
        break;

      case `Prometheus`: //TODO
        switchResponse.imagePath += `promethean/`;
        switchResponse.dnd5e.traits.languages.custom = `Standard`;
        // systemProp === `WFRP4e` && switchResponse.other.push(skill_language(0, `Standard`))
        switch (nameProp) {
          case `Security`: //TODO
            return constCreatureData({
              response: switchResponse,
              image: {
                wild: `Security.`,
              },
              stats: {
                dnd5e: weaponProp ? `heavyCavT3Cap` : `heavyInfT3Cap`,
                wfrp4e: `guard15`,
              },
              skills: {
                proficient: [`ath`],
              },
              armour: constArmourBuilder(`Hide`),

              weapons: constWeaponBuilder([
                ...(weaponProp ? [
                  {
                    weapon: `Lance`, equipped: true,
                    cavalryShockAssault: [2, 8]
                  },
                ]
                  : [{ weapon: `Spear`, equipped: true }]),
                { weapon: `Longsword`, equipped: weaponProp ? false : true },
                { weapon: `Large Shield`, equipped: true },
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
            });

          case `Rifleman`: //TODO
            return constCreatureData({
              response: switchResponse,
              image: {
                wild: `Rifleman.`,
              },
              token: {
                ring: `Gold`,
              },
              stats: {
                dnd5e: `modernSolderT3`,
                wfrp4e: `guard15`,
              },
              dnd5eChanges: {
                cr: 9,
                tempHP: 30,
              },
              skills: {
                proficient: [`ath`],
              },
              armour: constArmourBuilder(`Plate`),

              weapons: constWeaponBuilder([
                {
                  weapon: `Laser Rifle`,
                  equipped: true,
                  magic: { bonus: 2 },
                  otherName: `Mk XIV Carbine`,
                },
              ]),
              other: constSkillBuilder({
                types: [
                  `allairan`,
                  `heavy`,
                  ...(weaponProp ? [`lancer`] : [`spearman`]),
                ],
                wfrp4eBonus: 20,
                multiattack: [``, `three`],
              }),
              manual: {},
            });

          // case `Rifleman`: //TODO
          //     return constCreatureData({
          //         response: switchResponse,
          //         image: {
          //             wild: `Rifleman.`
          //         },
          //         token: {
          //             ring: `Gold`
          //         },
          //         stats: {
          //             dnd5e: `modernSolderT4`,
          //             wfrp4e: `guard15`
          //         },
          //         dnd5eChanges: {
          //             cr: 9,
          //             tempHP: 30,
          //         },
          //         skills: {
          //             proficient: [`ath`]
          //         },
          //         armour: constArmourBuilder(`Plate`),
          //         
          //         weapons: constWeaponBuilder([
          //             { weapon: `Laser Rifle`, equipped: true, magic: { bonus: 2 }, otherName: `Mk XIV Carbine` },
          //         ]),
          //         other: constSkillBuilder({ types: [`allairan`, `heavy`, ...(weaponProp ? [`lancer`] : ['spearman'])], wfrp4eBonus: 20, multiattack: [``, `three`] }),
          //         manual: {}
          //     })
        }
        break;

      // case `Vindictis`: //TODO
      //     switchResponse.imagePath = switchResponse.imagePath + `vindictis/`
      //     switchResponse.details.dnd5e.traits.languages.value = [`Standard`]
      //     systemProp === `WFRP4e` && switchResponse.other.push(skill_language(0, `Standard`))
      //     switch (nameProp) {
      //         case `Fusilier`: //TODO
      //             switchResponse.imageWild = `LineInfantry.`
      //             switchResponse.stats = {
      //                 dnd5e: `shockInfT1`,
      //                 wfrp4e: `soldier10`
      //             }
      //             break;

      //         case `Grenadier`: //TODO
      //             switchResponse.imageWild = `LineInfantry.`
      //             switchResponse.stats = {
      //                 dnd5e: `shockInfT1`,
      //                 wfrp4e: `handgunner10`
      //             }
      //             break;

      //         case `Voltigeur`: //TODO
      //             switchResponse.imageWild = `LightInfantry.`
      //             switchResponse.stats = {
      //                 dnd5e: `shockInfT1`,
      //                 wfrp4e: `handgunner10`
      //             }
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
