import {
  skill_language,
  skill_meleeBasic,
  skill_rangedBow,
  skill_meleePolearm,
  skill_rangedThrowing,
} from '../../_WFRP4e/Traits/WFRP4eSkills';
import {
  talent_marksman,
  talent_warriorBorn,
} from '../../_WFRP4e/Traits/WFRP4eTalents';
import {
  trait_nightVision,
  trait_bite,
  trait_infected,
  trait_painless,
  trait_dieHard,
  trait_vampiric,
  trait_armour,
  trait_hardy,
} from '../../_WFRP4e/Traits/WFRP4eTraits';
import { dnd5e_action_vampireBite } from '../monsterFeatures_DnD5e/actions/vampireBite';
import { dnd5e_bonus_cavalryMovement } from '../monsterFeatures_DnD5e/bonusActions/cavalryMovement';
import { dnd5e_bonusAction_shove } from '../monsterFeatures_DnD5e/bonusActions/shoveBA';
import { dnd5e_trait_ancestralArms } from '../monsterFeatures_DnD5e/traits/ancestralArms';
import { dnd5e_trait_bloodFrenzy } from '../monsterFeatures_DnD5e/traits/bloodFrenzy';
import { dnd5e_trait_cavalry } from '../monsterFeatures_DnD5e/traits/cavalry';
import { dnd5e_trait_legion } from '../monsterFeatures_DnD5e/traits/legion';
import { dnd5e_trait_militia } from '../monsterFeatures_DnD5e/traits/militia';
import { dnd5e_trait_multiattack } from '../monsterFeatures_DnD5e/traits/multiattack';
import { dnd5e_trait_packTactics } from '../monsterFeatures_DnD5e/traits/packTactics';
import { dnd5e_trait_regenerationVampire } from '../monsterFeatures_DnD5e/traits/regeneration';
import { dnd5e_trait_shieldWall } from '../monsterFeatures_DnD5e/traits/shieldWall';
import { dnd5e_trait_spiderClimb } from '../monsterFeatures_DnD5e/traits/spiderClimb';
import { dnd5e_trait_sunlightSensitivity } from '../monsterFeatures_DnD5e/traits/sunlightSensitivity';
import { dnd5e_trait_vampireWeaknesses } from '../monsterFeatures_DnD5e/traits/vampireWeaknesses';

function skillBuilder({
  type,
  wfrp4eBonus,
}: {
  type: string;
  wfrp4eBonus: number;
}) {
  switch (
    type // Nation
  ) {
    case `akitsudan`:
      return {
        dnd5e: [],
        wfrp4e: [skill_language(0, `Nori`)],
      };

    case `allairan`:
      return {
        dnd5e: [],
        wfrp4e: [skill_language(0, `Allairan`)],
      };

    case `arcadian`:
      return {
        dnd5e: [],
        wfrp4e: [skill_language(0, `Allairan`)],
      };

    case `brytthonic`:
      return {
        dnd5e: [],
        wfrp4e: [skill_language(0, `Brytthonic`), talent_marksman],
      };

    case `carnan`:
      return {
        dnd5e: [],
        wfrp4e: [skill_language(0, `Carnan`)],
      };

    case `fomorian`:
      return {
        dnd5e: [],
        wfrp4e: [skill_language(0, `Giant`), trait_hardy(true)],
      };

    case `krasen`:
      return {
        dnd5e: [],
        wfrp4e: [skill_language(0, `Norse`), talent_warriorBorn],
      };

    case `kebechan`:
      return {
        dnd5e: [],
        wfrp4e: [skill_language(0, `Kebechan`), talent_warriorBorn],
      };

    case `messan`:
      return {
        dnd5e: [],
        wfrp4e: [skill_language(0, `Aeaxon`), talent_warriorBorn],
      };

    case `mycenaean`:
      return {
        dnd5e: [],
        wfrp4e: [skill_language(0, `Mycenaean`)],
      };
  }

  switch (
    type // Racial Traits
  ) {
    case `sylvan`:
      return {
        dnd5e: [
          dnd5e_trait_ancestralArms(`Sylvan`)
        ],
        wfrp4e: [
        ],
      };

    case `ghoul`:
      return {
        dnd5e: [dnd5e_trait_bloodFrenzy(), dnd5e_trait_sunlightSensitivity()],
        wfrp4e: [
          trait_nightVision(true),
          trait_bite(true),
          trait_infected(true),
          trait_painless(true),
        ],
      };

    case `vampire`:
      return {
        dnd5e: [
          dnd5e_action_vampireBite(),
          dnd5e_trait_regenerationVampire(),
          dnd5e_trait_spiderClimb(),
          dnd5e_trait_vampireWeaknesses(),
        ],
        wfrp4e: [
          trait_bite(true),
          trait_dieHard(true),
          trait_nightVision(true),
          trait_painless(true),
          trait_vampiric(true),
        ],
      };

    case `wight`:
      return {
        dnd5e: [],
        wfrp4e: [
          trait_nightVision(true),
          trait_bite(true),
          trait_infected(true),
          trait_painless(true),
        ],
      };
  }

  switch (type) {
    case `militia`:
      return {
        dnd5e: [dnd5e_trait_militia()],
        wfrp4e: [],
      };

    case `shieldwall`:
      return {
        dnd5e: [dnd5e_trait_shieldWall()],
        wfrp4e: [],
      };

    case `heavy`:
      return {
        dnd5e: [],
        wfrp4e: [trait_armour(true, 1)],
      };

    case `archer`:
      return {
        dnd5e: [],
        wfrp4e: [skill_meleeBasic(wfrp4eBonus), skill_rangedBow(wfrp4eBonus)],
      };

    case `phalanx`:
      return {
        dnd5e: [
          dnd5e_trait_shieldWall(),
          dnd5e_trait_legion(`Phalanx`),
          dnd5e_bonusAction_shove(),
        ],
        wfrp4e: [
          skill_meleeBasic(wfrp4eBonus),
          skill_meleePolearm(wfrp4eBonus),
          skill_rangedThrowing(wfrp4eBonus),
          talent_warriorBorn,
        ],
      };

    case `legio`:
      return {
        dnd5e: [
          dnd5e_trait_shieldWall(),
          dnd5e_trait_legion(`Legion`),
          dnd5e_bonusAction_shove(),
        ],
        wfrp4e: [
          skill_meleeBasic(wfrp4eBonus),
          skill_meleePolearm(wfrp4eBonus),
          skill_rangedThrowing(wfrp4eBonus),
          talent_warriorBorn,
        ],
      };

    case `basic`:
      return {
        dnd5e: [],
        wfrp4e: [skill_meleeBasic(wfrp4eBonus)],
      };

    case `huscarl`:
      return {
        dnd5e: [dnd5e_trait_packTactics()],
        wfrp4e: [skill_meleeBasic(wfrp4eBonus)],
      };

    case `lancer`:
      return {
        dnd5e: [dnd5e_trait_cavalry(), dnd5e_bonus_cavalryMovement()],
        wfrp4e: [
          skill_meleeBasic(wfrp4eBonus),
          skill_meleePolearm(wfrp4eBonus),
        ],
      };

    case `pikeman`:
      return {
        dnd5e: [dnd5e_trait_packTactics()],
        wfrp4e: [
          skill_meleeBasic(wfrp4eBonus),
          skill_meleePolearm(wfrp4eBonus),
        ],
      };

    case `spearman`:
      return {
        dnd5e: [dnd5e_trait_packTactics()],
        wfrp4e: [
          skill_meleeBasic(wfrp4eBonus),
          skill_meleePolearm(wfrp4eBonus),
        ],
      };

    default:
      return {
        dnd5e: [],
        wfrp4e: [],
      };
  }
}

export function constSkillBuilder({
  types,
  wfrp4eBonus,
  multiattack,
}: {
  types: string[];
  wfrp4eBonus: number;
  multiattack?: string[];
}) {
  const skills = {
    dnd5e: [] as any[],
    wfrp4e: [] as any[],
  };
  multiattack &&
    skills.dnd5e.push(dnd5e_trait_multiattack(multiattack[0], multiattack[1]));

  types.map((type: string) => {
    const skill = skillBuilder({ type: type, wfrp4eBonus: wfrp4eBonus });
    skills.dnd5e.push(...skill.dnd5e);
    skills.wfrp4e.push(...skill.wfrp4e);
  });

  return skills;
}
