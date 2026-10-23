import { WFRP4eRings } from '../../_WFRP4e/Token/WFRP4eTokenRing';
import { DnD5eNPCCharacteristics } from '../monsterAttributes/_dnd5eAttributes';

export const TOKEN_LOCATION = `modules/memoirs-of-grund/assets/tokens/`;

function DnD5eAbilityBuilder(value: number, proficient: number) {
  return {
    value: value,
    proficient: proficient,
    max: null,
    bonuses: {
      check: ``,
      save: ``,
    },
    check: {
      roll: {
        min: null,
        max: null,
        mode: 0,
      },
    },
    save: {
      roll: {
        min: null,
        max: null,
        mode: 0,
      },
    },
  };
}

export function constCreatureData({
  response,
  name,
  tags,
  token,
  image,
  stats,
  armour,
  weapons,
  other,
  manual,
  skills,
  languages,
  dnd5eChanges,
  savingThrows,
  effects,
}: {
  response: any;
  name?: string;
  tags?: string[];
  armour: { dnd5e: any; wfrp4e: any };
  weapons: { dnd5e: any; wfrp4e: any };
  other: { dnd5e: any; wfrp4e: any };
  manual: { dnd5e?: any; wfrp4e?: any };
  effects?: { dnd5e?: any[]; wfrp4e?: any[] };
  savingThrows?: {
    str?: number;
    dex?: number;
    con?: number;
    int?: number;
    wis?: number;
    cha?: number;
  };
  dnd5eChanges?: {
    cr?: number;
    tempHP?: number;
  };
  token?: {
    name?: string;
    size?: number;
    ring?: string;
    tint?: string;
  };
  image?: {
    path?: string;
    loc?: string;
    wild?: string;
  };
  stats?: { dnd5e: string; wfrp4e: string };
  skills?: {
    proficient?: string[];
    expertise?: string[];
    jackOfAll?: string[];
  };
  languages?: string[];
}) {
  const creatureStats = {
    dnd5e: stats ? stats.dnd5e : response.stats.dnd5e.replace(/\s/g, ``),
    wfrp4e: stats ? stats.wfrp4e : response.stats.wfrp4e,
  };

  if (
    DnD5eNPCCharacteristics[response.species.toLowerCase().replace(/\s/g, ``)]
  ) {
    if (
      DnD5eNPCCharacteristics[
      response.species.toLowerCase().replace(/\s/g, ``)
      ][creatureStats.dnd5e]
    ) {
      const dnd5eCreature =
        DnD5eNPCCharacteristics[
        response.species.toLowerCase().replace(/\s/g, ``)
        ][creatureStats.dnd5e];

      response.dnd5e.abilities = {
        str: DnD5eAbilityBuilder(dnd5eCreature.attributes[0], (savingThrows && savingThrows.str) || 0),
        dex: DnD5eAbilityBuilder(dnd5eCreature.attributes[1], (savingThrows && savingThrows.dex) || 0),
        con: DnD5eAbilityBuilder(dnd5eCreature.attributes[2], (savingThrows && savingThrows.con) || 0),
        int: DnD5eAbilityBuilder(dnd5eCreature.attributes[3], (savingThrows && savingThrows.int) || 0),
        wis: DnD5eAbilityBuilder(dnd5eCreature.attributes[4], (savingThrows && savingThrows.wis) || 0),
        cha: DnD5eAbilityBuilder(dnd5eCreature.attributes[5], (savingThrows && savingThrows.cha) || 0),
      };
      response.dnd5e.attributes.hp = {
        value: dnd5eCreature.baseHp,
        max: dnd5eCreature.baseHp,
        temp: dnd5eChanges?.tempHP ? dnd5eChanges?.tempHP : dnd5eCreature.tempHp,
        tempmax: ``,
        formula: dnd5eCreature.hpFormula,
      };

      response.dnd5e.attributes.movement.walk = dnd5eCreature.speed;
      response.dnd5e.details.cr = dnd5eChanges?.cr
        ? dnd5eChanges.cr
        : dnd5eCreature.cr;
    }
  } else {
    console.log(`ERROR, MISSING: ${response.name} for DnD5e`);
  }
  if (tags) {
    if (tags.includes(`heavy`)) {
      response.dnd5e.traits.dm.amount = {
        bludgeoning: `-@prof`,
        slashing: `-@prof`,
        piercing: `-@prof`,
      }
    }
    if (tags.includes(`marksman`)) {
      response.dnd5e.bonuses.rwak.attack = 2
    }
  }

  const imageName = (image?.loc || image?.wild || response.imageWild).replace(/[^\w.]|\s_-/g, ``)
  const switchResponse = {
    dnd5e: {
      name: name || response.name,
      img: `${image?.path || response.imagePath}THUMBNAIL_${imageName}webp`,
      system: { ...response.dnd5e },
      ...WFRP4eRings(
        `DnD5e`,
        token?.ring || `Brass`,
        token?.name || name || response.name,
        `${image?.path || response.imagePath}${image?.wild?.replace(/[^\w.]|\s_-/g, ``)}*`,
        token?.size || 1,
        token?.tint || ``
      ),
      items: [
        ...(other.dnd5e || []),
        ...(weapons.dnd5e || []),
        ...(armour.dnd5e || []),
        ...(manual.dnd5e || []),
      ].sort(function (a, b) {
        return a.name !== `Multiattack` && a.name.localeCompare(b.name);
      }),
      effects: (effects && effects.dnd5e) || [],
    },
    wfrp4e: {
      // name: `${switchResponse.name} (${ringRank} ${threat})`,
      name: name || response.name,
      img: `${image?.path || response.imagePath}THUMBNAIL_${imageName}webp`,
      system: { ...response.wfrp4e },
      ...WFRP4eRings(
        `WFRP4e`,
        `Brass`,
        token?.name || name || response.name,
        `${image?.path || response.imagePath}${image?.wild.replace(/[^\w.]|\s_-/g, ``)}*`,
        token?.size || 1,
        token?.tint || ``
      ),
      items: [
        ...(other.wfrp4e || []),
        ...(weapons.wfrp4e || []),
        ...(armour.wfrp4e || []),
        ...(manual.wfrp4e || []),
      ].sort(function (a, b) {
        return a.name.localeCompare(b.name);
      }),
    },
    stats: {
      dnd5e: stats?.dnd5e || name,
      wfrp4e: stats?.wfrp4e || name,
    },
  };

  // stats && (stats.dnd5e && (switchResponse.stats.dnd5e = stats.dnd5e))
  // stats && (stats.dnd5e && (switchResponse.stats.wfrp4e = stats.wfrp4e))
  // cr && (switchResponse.details.dnd5e.cr = cr)
  if (skills) {
    if (skills.proficient)
      skills.proficient.map((skill) => switchResponse.dnd5e.system.skills[skill].value = 1)
    if (skills.expertise)
      skills.expertise.map((skill) => switchResponse.dnd5e.system.skills[skill].value = 2);
  }
  return switchResponse;
}

// function skillBuilder(types: string[], value: number) {

export function makeid() {
  let result = ``;
  const characters =
    `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`;
  const charactersLength = characters.length;
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
