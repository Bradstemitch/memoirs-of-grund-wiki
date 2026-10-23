import { WFRP4eNPCStats } from '../../_WFRP4e/FoundryDefault/WFRP4eDefault';
import { dnd5e_bonus_cunningAction } from '../monsterFeatures_DnD5e/bonusActions/cunningAction';
import { dnd5e_react_redirectAttack } from '../monsterFeatures_DnD5e/reactions/redirectAttack';
import { dnd5e_trait_coward } from '../monsterFeatures_DnD5e/traits/coward';
import { dnd5e_trait_packTactics } from '../monsterFeatures_DnD5e/traits/packTactics';
import { dnd5e_trait_sunlightSensitivity } from '../monsterFeatures_DnD5e/traits/sunlightSensitivity';
import { constArmourBuilder } from '../_BUILDERS/_builderArmour';
import { constSkillBuilder } from '../_BUILDERS/_builderSkills';
import { constWeaponBuilder } from '../_BUILDERS/_builderWeapons';
import { constCreatureData, TOKEN_LOCATION } from '../_BUILDERS/_Constants';
import { DnD5eNPCStats } from '../_BUILDERS/_defaultDnd5e';
import { dnd5e_trait_ranger } from '../monsterFeatures_DnD5e/traits/ranger';
import { dnd5e_effect_halfCover } from '../monsterFeatures_DnD5e/effects/halfCover';

export function HumanoidSwitch(
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
    imagePath: `${TOKEN_LOCATION}humanoid/`,
    imageLoc: ``,
    imageWild: ``,
  };

  function creatureStats() {
    switch (speciesProp) {

      case `Dwarf`:
        switchResponse.wfrp4e.details.species.value = `Dwarf`;
        switchResponse.dnd5e.details.type.subtype = `dwarf`;

        switchResponse.dnd5e.traits = {
          ...switchResponse.dnd5e.traits,
          languages: {
            ...switchResponse.dnd5e.traits.languages,
            value: [`dwarven`]
          },
        }
        switch (factionProp) {
          case `Alder`:
            switch (groupProp) {
              case `Goblin`:
                return constCreatureData({
                  response: switchResponse,
                  image: { wild: `Goblin.` },
                  stats: {
                    dnd5e: `goblinT1`,
                    wfrp4e: `soldier5`,
                  },
                  skills: {
                    proficient: [`ste`],
                  },
                  armour: constArmourBuilder(`None`),
                  weapons: constWeaponBuilder([
                    { weapon: `Dagger`, equipped: true },
                  ]),
                  other: constSkillBuilder({ types: [], wfrp4eBonus: 5 }),
                  manual: {
                    dnd5e: [
                      dnd5e_bonus_cunningAction(),
                      dnd5e_trait_coward(),
                      dnd5e_trait_packTactics(),
                      dnd5e_trait_sunlightSensitivity(),
                    ],
                  },
                });
              // switchResponse.other.push(trait_size(false, "Small"))
              // switchResponse.other.push(talent_warriorBorn)
              // switchResponse.other.push(skill_meleeBasic(5))

              default:
                switch (nameProp) {
                  case `Goblin Clanlin`:
                    return constCreatureData({
                      response: switchResponse,
                      image: { wild: `Goblin.` },
                      stats: {
                        dnd5e: `goblinClT1`,
                        wfrp4e: `soldier15`,
                      },
                      skills: {
                        proficient: [`ste`],
                      },
                      armour: constArmourBuilder(`None`),
                      weapons: constWeaponBuilder([
                        { weapon: `Short sword`, equipped: true },
                        { weapon: `Shield`, equipped: true },
                      ]),
                      other: constSkillBuilder({ types: [], wfrp4eBonus: 5 }),
                      manual: {
                        dnd5e: [
                          dnd5e_bonus_cunningAction(),
                          dnd5e_trait_coward(),
                          dnd5e_trait_packTactics(),
                          dnd5e_trait_sunlightSensitivity(),
                        ],
                      },
                    });

                  case `Goblin Boss`:
                    return constCreatureData({
                      response: switchResponse,
                      image: { wild: `Goblin.` },
                      stats: {
                        dnd5e: `goblinT2`,
                        wfrp4e: `soldier15`,
                      },
                      skills: {
                        proficient: [`ste`],
                      },
                      armour: constArmourBuilder(`None`),
                      weapons: constWeaponBuilder([
                        { weapon: `Short sword`, equipped: true },
                        { weapon: `Shield`, equipped: true },
                      ]),
                      other: constSkillBuilder({
                        types: [],
                        wfrp4eBonus: 5,
                        multiattack: [``, `two`],
                      }),
                      manual: {
                        dnd5e: [
                          dnd5e_bonus_cunningAction(),
                          dnd5e_trait_coward(),
                          dnd5e_trait_packTactics(),
                          dnd5e_trait_sunlightSensitivity(),
                          dnd5e_react_redirectAttack(),
                        ],
                      },
                    });
                }
            }
            break

          case `Drow`:
            switch (groupProp) {
              case `Goblin`:
                return constCreatureData({
                  response: switchResponse,
                  image: { wild: `Goblin.` },
                  stats: {
                    dnd5e: `goblinT1`,
                    wfrp4e: `soldier5`,
                  },
                  skills: {
                    proficient: [`ste`],
                  },
                  armour: constArmourBuilder(`None`),
                  weapons: constWeaponBuilder([
                    { weapon: `Dagger`, equipped: true },
                  ]),
                  other: constSkillBuilder({ types: [], wfrp4eBonus: 5 }),
                  manual: {
                    dnd5e: [
                      dnd5e_bonus_cunningAction(),
                      dnd5e_trait_coward(),
                      dnd5e_trait_packTactics(),
                      dnd5e_trait_sunlightSensitivity(),
                    ],
                  },
                });
              // switchResponse.other.push(trait_size(false, "Small"))
              // switchResponse.other.push(talent_warriorBorn)
              // switchResponse.other.push(skill_meleeBasic(5))

              default:
                switch (nameProp) {
                  case `Goblin Clanlin`:
                    return constCreatureData({
                      response: switchResponse,
                      image: { wild: `Goblin.` },
                      stats: {
                        dnd5e: `goblinClT1`,
                        wfrp4e: `soldier15`,
                      },
                      skills: {
                        proficient: [`ste`],
                      },
                      armour: constArmourBuilder(`None`),
                      weapons: constWeaponBuilder([
                        { weapon: `Short sword`, equipped: true },
                        { weapon: `Shield`, equipped: true },
                      ]),
                      other: constSkillBuilder({ types: [], wfrp4eBonus: 5 }),
                      manual: {
                        dnd5e: [
                          dnd5e_bonus_cunningAction(),
                          dnd5e_trait_coward(),
                          dnd5e_trait_packTactics(),
                          dnd5e_trait_sunlightSensitivity(),
                        ],
                      },
                    });

                  case `Goblin Boss`:
                    return constCreatureData({
                      response: switchResponse,
                      image: { wild: `Goblin.` },
                      stats: {
                        dnd5e: `goblinT2`,
                        wfrp4e: `soldier15`,
                      },
                      skills: {
                        proficient: [`ste`],
                      },
                      armour: constArmourBuilder(`None`),
                      weapons: constWeaponBuilder([
                        { weapon: `Short sword`, equipped: true },
                        { weapon: `Shield`, equipped: true },
                      ]),
                      other: constSkillBuilder({
                        types: [],
                        wfrp4eBonus: 5,
                        multiattack: [``, `two`],
                      }),
                      manual: {
                        dnd5e: [
                          dnd5e_bonus_cunningAction(),
                          dnd5e_trait_coward(),
                          dnd5e_trait_packTactics(),
                          dnd5e_trait_sunlightSensitivity(),
                          dnd5e_react_redirectAttack(),
                        ],
                      },
                    });
                }
            }
            break

          case `Sylvan`:
            switch (groupProp) {
              case `Ranger`:
                return constCreatureData({
                  response: switchResponse,
                  image: {
                    wild: `Goblin.`
                  },
                  stats: {
                    dnd5e:
                      nameProp === `Hunter` ? `woodElfT1`
                        : nameProp === `Scout` ? `woodElfT2`
                          : nameProp === `Ranger` ? `woodElfT3`
                            : nameProp === `tier4` ? `woodElfT4`
                              : nameProp === `tier5` ? `woodElfT5`
                                : ``,
                    wfrp4e: `soldier5`,
                  },
                  skills: {
                    proficient: [`ste`],
                  },
                  armour: constArmourBuilder(`None`),
                  weapons: constWeaponBuilder([
                    { weapon: `Dagger`, equipped: true },
                  ]),
                  other: constSkillBuilder({ types: [], wfrp4eBonus: 5 }),
                  manual: {
                    dnd5e: [
                      dnd5e_bonus_cunningAction(),
                      dnd5e_trait_coward(),
                      dnd5e_trait_packTactics(),
                      dnd5e_trait_sunlightSensitivity(),
                    ],
                  },
                });
              // switchResponse.other.push(trait_size(false, "Small"))
              // switchResponse.other.push(talent_warriorBorn)
              // switchResponse.other.push(skill_meleeBasic(5))

              default:
                switch (nameProp) {
                  case `Goblin Clanlin`:
                    return constCreatureData({
                      response: switchResponse,
                      image: { wild: `Goblin.` },
                      stats: {
                        dnd5e: `goblinClT1`,
                        wfrp4e: `soldier15`,
                      },
                      skills: {
                        proficient: [`ste`],
                      },
                      armour: constArmourBuilder(`None`),
                      weapons: constWeaponBuilder([
                        { weapon: `Short sword`, equipped: true },
                        { weapon: `Shield`, equipped: true },
                      ]),
                      other: constSkillBuilder({ types: [], wfrp4eBonus: 5 }),
                      manual: {
                        dnd5e: [
                          dnd5e_bonus_cunningAction(),
                          dnd5e_trait_coward(),
                          dnd5e_trait_packTactics(),
                          dnd5e_trait_sunlightSensitivity(),
                        ],
                      },
                    });

                  case `Goblin Boss`:
                    return constCreatureData({
                      response: switchResponse,
                      image: { wild: `Goblin.` },
                      stats: {
                        dnd5e: `goblinT2`,
                        wfrp4e: `soldier15`,
                      },
                      skills: {
                        proficient: [`ste`],
                      },
                      armour: constArmourBuilder(`None`),
                      weapons: constWeaponBuilder([
                        { weapon: `Short sword`, equipped: true },
                        { weapon: `Shield`, equipped: true },
                      ]),
                      other: constSkillBuilder({
                        types: [],
                        wfrp4eBonus: 5,
                        multiattack: [``, `two`],
                      }),
                      manual: {
                        dnd5e: [
                          dnd5e_bonus_cunningAction(),
                          dnd5e_trait_coward(),
                          dnd5e_trait_packTactics(),
                          dnd5e_trait_sunlightSensitivity(),
                          dnd5e_react_redirectAttack(),
                        ],
                      },
                    });
                }
            }
        }
        break;

      case `Elf`:
        switchResponse.imagePath = `${TOKEN_LOCATION}elf/`
        switchResponse.wfrp4e.details.species.value = `Elf`;
        switchResponse.dnd5e.details.type.subtype = `elf`;
        switchResponse.dnd5e.attributes.senses.ranges.darkvision = 60;

        switchResponse.dnd5e.traits = {
          ...switchResponse.dnd5e.traits,
          languages: {
            ...switchResponse.dnd5e.traits.languages,
            value: [`Elven`]
          },
        }

        switch (factionProp) {
          case `Alder`:
            switch (groupProp) {
              case `Goblin`:
                return constCreatureData({
                  response: switchResponse,
                  image: { wild: `Goblin.` },
                  stats: {
                    dnd5e: `goblinT1`,
                    wfrp4e: `soldier5`,
                  },
                  skills: {
                    proficient: [`ste`],
                  },
                  armour: constArmourBuilder(`None`),
                  weapons: constWeaponBuilder([
                    { weapon: `Dagger`, equipped: true },
                  ]),
                  other: constSkillBuilder({ types: [], wfrp4eBonus: 5 }),
                  manual: {
                    dnd5e: [
                      dnd5e_bonus_cunningAction(),
                      dnd5e_trait_coward(),
                      dnd5e_trait_packTactics(),
                      dnd5e_trait_sunlightSensitivity(),
                    ],
                  },
                });
              // switchResponse.other.push(trait_size(false, "Small"))
              // switchResponse.other.push(talent_warriorBorn)
              // switchResponse.other.push(skill_meleeBasic(5))

              default:
                switch (nameProp) {
                  case `Goblin Clanlin`:
                    return constCreatureData({
                      response: switchResponse,
                      image: { wild: `Goblin.` },
                      stats: {
                        dnd5e: `goblinClT1`,
                        wfrp4e: `soldier15`,
                      },
                      skills: {
                        proficient: [`ste`],
                      },
                      armour: constArmourBuilder(`None`),
                      weapons: constWeaponBuilder([
                        { weapon: `Short sword`, equipped: true },
                        { weapon: `Shield`, equipped: true },
                      ]),
                      other: constSkillBuilder({ types: [], wfrp4eBonus: 5 }),
                      manual: {
                        dnd5e: [
                          dnd5e_bonus_cunningAction(),
                          dnd5e_trait_coward(),
                          dnd5e_trait_packTactics(),
                          dnd5e_trait_sunlightSensitivity(),
                        ],
                      },
                    });

                  case `Goblin Boss`:
                    return constCreatureData({
                      response: switchResponse,
                      image: { wild: `Goblin.` },
                      stats: {
                        dnd5e: `goblinT2`,
                        wfrp4e: `soldier15`,
                      },
                      skills: {
                        proficient: [`ste`],
                      },
                      armour: constArmourBuilder(`None`),
                      weapons: constWeaponBuilder([
                        { weapon: `Short sword`, equipped: true },
                        { weapon: `Shield`, equipped: true },
                      ]),
                      other: constSkillBuilder({
                        types: [],
                        wfrp4eBonus: 5,
                        multiattack: [``, `two`],
                      }),
                      manual: {
                        dnd5e: [
                          dnd5e_bonus_cunningAction(),
                          dnd5e_trait_coward(),
                          dnd5e_trait_packTactics(),
                          dnd5e_trait_sunlightSensitivity(),
                          dnd5e_react_redirectAttack(),
                        ],
                      },
                    });
                }
            }
            break

          case `Drow`:
            switch (groupProp) {
              case `Goblin`:
                return constCreatureData({
                  response: switchResponse,
                  image: { wild: `Goblin.` },
                  stats: {
                    dnd5e: `goblinT1`,
                    wfrp4e: `soldier5`,
                  },
                  skills: {
                    proficient: [`ste`],
                  },
                  armour: constArmourBuilder(`None`),
                  weapons: constWeaponBuilder([
                    { weapon: `Dagger`, equipped: true },
                  ]),
                  other: constSkillBuilder({ types: [], wfrp4eBonus: 5 }),
                  manual: {
                    dnd5e: [
                      dnd5e_bonus_cunningAction(),
                      dnd5e_trait_coward(),
                      dnd5e_trait_packTactics(),
                      dnd5e_trait_sunlightSensitivity(),
                    ],
                  },
                });
              // switchResponse.other.push(trait_size(false, "Small"))
              // switchResponse.other.push(talent_warriorBorn)
              // switchResponse.other.push(skill_meleeBasic(5))

              default:
                switch (nameProp) {
                  case `Goblin Clanlin`:
                    return constCreatureData({
                      response: switchResponse,
                      image: { wild: `Goblin.` },
                      stats: {
                        dnd5e: `goblinClT1`,
                        wfrp4e: `soldier15`,
                      },
                      skills: {
                        proficient: [`ste`],
                      },
                      armour: constArmourBuilder(`None`),
                      weapons: constWeaponBuilder([
                        { weapon: `Short sword`, equipped: true },
                        { weapon: `Shield`, equipped: true },
                      ]),
                      other: constSkillBuilder({ types: [], wfrp4eBonus: 5 }),
                      manual: {
                        dnd5e: [
                          dnd5e_bonus_cunningAction(),
                          dnd5e_trait_coward(),
                          dnd5e_trait_packTactics(),
                          dnd5e_trait_sunlightSensitivity(),
                        ],
                      },
                    });

                  case `Goblin Boss`:
                    return constCreatureData({
                      response: switchResponse,
                      image: { wild: `Goblin.` },
                      stats: {
                        dnd5e: `goblinT2`,
                        wfrp4e: `soldier15`,
                      },
                      skills: {
                        proficient: [`ste`],
                      },
                      armour: constArmourBuilder(`None`),
                      weapons: constWeaponBuilder([
                        { weapon: `Short sword`, equipped: true },
                        { weapon: `Shield`, equipped: true },
                      ]),
                      other: constSkillBuilder({
                        types: [],
                        wfrp4eBonus: 5,
                        multiattack: [``, `two`],
                      }),
                      manual: {
                        dnd5e: [
                          dnd5e_bonus_cunningAction(),
                          dnd5e_trait_coward(),
                          dnd5e_trait_packTactics(),
                          dnd5e_trait_sunlightSensitivity(),
                          dnd5e_react_redirectAttack(),
                        ],
                      },
                    });
                }
            }
            break

          case `Sylvan`:
            switch (groupProp) {
              case `Ranger`:
                return constCreatureData({
                  response: switchResponse,
                  name: `${weaponProp} ${nameProp}`,
                  tags: [`marksman`],
                  image: {
                    wild: `Hunter.`
                  },
                  dnd5eChanges: {
                    cr:
                      nameProp === `Hunter` ? 3   //AC:15(0-8)  HP:45(1)  Atk:8(8)  Dam:31(4)
                        : nameProp === `Scout` ? 3   //AC:16(0-8)  HP:45(1)  Atk:8(8)  Dam:31(4)
                          : nameProp === `Ranger` ? 3   //AC:17(0-8)  HP:45(1)  Atk:8(8)  Dam:31(4)
                            : nameProp === `tier4` ? 3
                              : nameProp === `tier5` ? 3
                                : 0,                       //AC:18(6-20)  HP:45(2)  Atk:4(0.5)  Dam:11(1)
                  },
                  savingThrows: { dex: 1, wis: 1, },
                  stats: {
                    dnd5e:
                      nameProp === `Hunter` ? `woodElfT1`
                        : nameProp === `Scout` ? `woodElfT2`
                          : nameProp === `Ranger` ? `woodElfT3`
                            : nameProp === `tier4` ? `woodElfT4`
                              : nameProp === `tier5` ? `woodElfT5`
                                : ``,
                    wfrp4e: `soldier5`,
                  },
                  skills: {
                    proficient: [`acr`, `nat`, `prc`, `ste`, `sur`],
                  },
                  armour: constArmourBuilder(`Studded Leather`),
                  weapons: constWeaponBuilder([
                    {
                      weapon: `Longbow`, equipped: true, otherName: `Sylvan Bow`,
                      magic: { bonus: 1 },
                      forceDamage: [2, 6]
                    },
                    {
                      weapon: `Longsword`, equipped: false,
                      bonusTraits: [`fin`],
                      magic: { bonus: 1 },
                    },
                  ]),
                  other: constSkillBuilder({ types: [`sylvan`], wfrp4eBonus: 5, multiattack: [``, `two`] }),
                  manual: {
                    dnd5e: [
                      dnd5e_trait_ranger()
                    ],
                  },
                  effects: {
                    dnd5e: [dnd5e_effect_halfCover()],
                  },
                });

              default:
                switch (nameProp) {
                }
            }
        }
        break;

      case `Goblin`:
        switchResponse.wfrp4e.details.species.value = `Goblin`;
        switchResponse.dnd5e.details.type.subtype = `goblinoid`;

        switchResponse.dnd5e.traits = {
          ...switchResponse.dnd5e.traits,
          languages: {
            ...switchResponse.dnd5e.traits.languages,
            value: [`Goblin`]
          },
          size: `sm`,
        }

        switch (factionProp) {
          case `Clanless`:
            switch (nameProp) {
              case `Goblin`:
                return constCreatureData({
                  response: switchResponse,
                  image: { wild: `Goblin.` },
                  stats: {
                    dnd5e: `goblinT1`,
                    wfrp4e: `soldier5`,
                  },
                  skills: {
                    proficient: [`ste`],
                  },
                  armour: constArmourBuilder(`None`),
                  weapons: constWeaponBuilder([
                    { weapon: `Dagger`, equipped: true },
                  ]),
                  other: constSkillBuilder({ types: [], wfrp4eBonus: 5 }),
                  manual: {
                    dnd5e: [
                      dnd5e_bonus_cunningAction(),
                      dnd5e_trait_coward(),
                      dnd5e_trait_packTactics(),
                      dnd5e_trait_sunlightSensitivity(),
                    ],
                  },
                });
              // switchResponse.other.push(trait_size(false, "Small"))
              // switchResponse.other.push(talent_warriorBorn)
              // switchResponse.other.push(skill_meleeBasic(5))
            }
            break;

          default:
            switch (nameProp) {
              case `Goblin Clanlin`:
                return constCreatureData({
                  response: switchResponse,
                  image: { wild: `Goblin.` },
                  stats: {
                    dnd5e: `goblinClT1`,
                    wfrp4e: `soldier15`,
                  },
                  skills: {
                    proficient: [`ste`],
                  },
                  armour: constArmourBuilder(`None`),
                  weapons: constWeaponBuilder([
                    { weapon: `Short sword`, equipped: true },
                    { weapon: `Shield`, equipped: true },
                  ]),
                  other: constSkillBuilder({ types: [], wfrp4eBonus: 5 }),
                  manual: {
                    dnd5e: [
                      dnd5e_bonus_cunningAction(),
                      dnd5e_trait_coward(),
                      dnd5e_trait_packTactics(),
                      dnd5e_trait_sunlightSensitivity(),
                    ],
                  },
                });

              case `Goblin Boss`:
                return constCreatureData({
                  response: switchResponse,
                  image: { wild: `Goblin.` },
                  stats: {
                    dnd5e: `goblinT2`,
                    wfrp4e: `soldier15`,
                  },
                  skills: {
                    proficient: [`ste`],
                  },
                  armour: constArmourBuilder(`None`),
                  weapons: constWeaponBuilder([
                    { weapon: `Short sword`, equipped: true },
                    { weapon: `Shield`, equipped: true },
                  ]),
                  other: constSkillBuilder({
                    types: [],
                    wfrp4eBonus: 5,
                    multiattack: [``, `two`],
                  }),
                  manual: {
                    dnd5e: [
                      dnd5e_bonus_cunningAction(),
                      dnd5e_trait_coward(),
                      dnd5e_trait_packTactics(),
                      dnd5e_trait_sunlightSensitivity(),
                      dnd5e_react_redirectAttack(),
                    ],
                  },
                });
            }
            break;
        }
        break;

      // case "Lycan":
      //     switchResponse.details.wfrp4e.species.value = "Lycan"
      //     switchResponse.details.dnd5e.type.subtype = "lycan"
      //     switch (name) {
      //         case "Werewolf":
      //             switchResponse.imageWild = "Werewolf."
      //             break;
      //     }
      //     break;

      // case "Nuth":
      //     switchResponse.details.wfrp4e.species.value = "Nuth"
      //     switchResponse.details.dnd5e.type.subtype = "nuth"
      //     switch (name) {
      //         case "Nuth":
      //             switchResponse.imageWild = "Nuth."
      //             break;
      //     }
      //     break;

      // case "Orc":
      //     switchResponse.details.wfrp4e.species.value = "Orc"
      //     switchResponse.details.dnd5e.type.subtype = "orc"
      //     switch (name) {
      //         case "Hunter":
      //             switchResponse.imageWild = "HarpyFeral."
      //             break;
      //     }
      //     break;

      // case "Roak":
      //     switchResponse.details.wfrp4e.species.value = "Roak"
      //     switchResponse.details.dnd5e.type.subtype = "roak"
      //     switch (name) {
      //         case "Roak":
      //             switchResponse.imageWild = "HarpyFeral."
      //             break;
      //     }
      //     break;

      case `Inpw`:
        switchResponse.wfrp4e.details.species.value = `Harpy`;
        switchResponse.dnd5e.details.type.subtype = `harpy`;

        switchResponse.dnd5e.traits = {
          ...switchResponse.dnd5e.traits,
          languages: {
            ...switchResponse.dnd5e.traits.languages,
            value: [`Draconic`]
          },
        }
        switch (nameProp) {
          case `Inpw`:
            switchResponse.imageWild = `Inpw.`
            break;

          case `Inpw Wab`:
            return constCreatureData({
              response: switchResponse,
              image: {
                wild: `Inpw.`,
              },
              stats: {
                dnd5e: `inpwT3`,
                wfrp4e: `soldier10`,
              },
              skills: {
                proficient: [`arc`, `ath`, `rel`],
              },
              armour: constArmourBuilder(`Breastplate`),
              weapons: constWeaponBuilder([
                { weapon: `Greataxe`, equipped: true, dnd5eDamage: 2 },
              ]),
              other: constSkillBuilder({
                types: [`kebechan`, `huscarl`],
                wfrp4eBonus: 5,
                multiattack: [``, `two`],
              }),
              manual: {},
            });

          case `Inpw Priest`:
            return constCreatureData({
              response: switchResponse,
              image: {
                wild: `Inpw.`,
              },
              dnd5eChanges: {
                cr: 6, //AC:16(6)  HP:104(6)  Atk:7(6)  Dam:41(6)
              },
              token: {
                size: 1.114,
                ring: `Silver`
              },
              stats: {
                dnd5e: `inpwT4`,
                wfrp4e: `soldier10`,
              },
              skills: {
                proficient: [`arc`, `ath`, `rel`],
              },
              armour: constArmourBuilder(`Breastplate`),
              weapons: constWeaponBuilder([
                {
                  weapon: `Greataxe`, equipped: true, dnd5eDamage: 2,
                  necroticDamage: [1, 6]
                },
              ]),
              other: constSkillBuilder({
                types: [`kebechan`, `huscarl`],
                wfrp4eBonus: 5,
                multiattack: [``, `two`],
              }),
              manual: {},
            });

          case `Inpw High Priest`:
            switchResponse.imageWild = `Inpw.`
            break;
        }
        break;

      // case "Harpy":
      //     switchResponse.details.wfrp4e.species.value = "Harpy"
      //     switchResponse.details.dnd5e.type.subtype = "harpy"
      //     switch (name) {
      //         case "Feral Harpy":
      //             switchResponse.imageWild = "HarpyFeral."
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
