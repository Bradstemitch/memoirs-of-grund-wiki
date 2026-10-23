import { detailBuilder } from '../utils/builders';
import { internalLink } from '../utils/common';
import { ARMOURY_Core, CHARACTER_Core } from './__DATA_Core';
import { wepEffect_wreathedInShadows } from './_WFRP4e/Effects/wep_effects';
import { wep_sword } from './_WFRP4e/Items/_WFRP4e/wep_sword';
import { dnd5e_wep_shortsword } from './armoury/_DnD5e/weapons/melee/shortsword';
import { WEAPONS_ARMOURY_ContentsSummary } from './magicItems/summary/weapons';
import { magicItemTraits } from './magicItems/traits';

function armouryInfoBasic(alias: any, type: any, rarity: any) {
  return {
    basic: {
      title: `Basic`,
      values: {
        alias: { title: `Alias`, value: alias, }, type: { title: `Type`, value: type, }, rarity: { title: `Rarity`, value: rarity, },
      },
    },
  };
}

function armouryInfoHistorical(creator: any, owner: any) {
  return {
    historical: {
      title: `Historical`,
      values: {
        creator: { title: `Creator`, value: creator, }, owner: { title: `Owner`, value: owner, },
      },
    },
  };
}

export const ARMOURY_Info = {
  CALADBOLG: {
    ...armouryInfoBasic(
      [`Caladbolg`, `Caladcholg`],
      detailBuilder(`Weapon`, `Greatsword`),
      `Unique`
    ),
    ...armouryInfoHistorical(
      `Unknown`,
      detailBuilder(`Fergus mac Róich`, `Formerly`)
    ),
  },
  EXCALIBUR: {
    ...armouryInfoBasic(
      [],
      detailBuilder(`Weapon`, `Shortsword, Longsword or Greatsword`),
      `Unique`
    ),
    ...armouryInfoHistorical(`Unknown`, [
      detailBuilder(`Lady of the Lake`, `Formerly`),
      detailBuilder(CHARACTER_Core.BALOR, `Formerly`),
      detailBuilder(CHARACTER_Core.ARTHUR_PENDRAGON, `Formerly`),
    ]),
  },
  SHARD: {
    ...armouryInfoBasic(
      [`Shard`, `The Black-fire Blade`, `The Obsidian Blade`],
      detailBuilder(`Weapon`, `Longsword`),
      `Unique`
    ),
    ...armouryInfoHistorical(
      detailBuilder(CHARACTER_Core.ARLYSS_KNIGHT, `Formerly`),
      [detailBuilder(CHARACTER_Core.ARLYSS_KNIGHT, `Formerly`), detailBuilder(CHARACTER_Core.REAPER, `Formerly`), `Eve`,
      ]
    ),
  },
};

function ArmouryDnD5eBuilder(key: string, base: any, mechanics: any) {
  const magicItem = base;
  magicItem.name = ARMOURY_Core[key].name;
  magicItem.system.description.value = ARMOURY_ContentsSummary[key];
  // magicItem.system.gmdescription.value = mechanics;
  return magicItem;
}

const ARMOURY_ContentsSummary = {
  ...WEAPONS_ARMOURY_ContentsSummary,
};

function magicItemBuilder(name: string) {
  return {
    ...ARMOURY_Core[name],
    info: ARMOURY_Info[name],
    summary: ARMOURY_ContentsSummary[name],
    statlines: magicItemTraits[name]
  }
}

function ArmouryWFRP4eBuilder(
  key: string,
  base: any,
  mechanics: any,
  effects?: any
) {
  const magicItem = base;
  magicItem.name = ARMOURY_Core[key].name;
  magicItem.system.description.value = ARMOURY_ContentsSummary[key];
  magicItem.system.gmdescription.value = mechanics;
  magicItem.effects = effects;
  return magicItem;
}

const ARMOURY_WFRP4e = {
  ALDER_BLADE: ArmouryWFRP4eBuilder(
    `ALDER_BLADE`,
    wep_sword(false),
    <>
      <p> <strong>Boon</strong>: +10 to Melee (Basic), first melee attack each turn triggers deathblow, +10 Language (Magick) when casting any spell
      </p>
      <p> <strong>Description</strong>: This ...
      </p>
    </>
  ),
  SHARD: ArmouryWFRP4eBuilder(
    `SHARD`,
    wep_sword(false),
    <>
      <p> <strong>Boon</strong>: +30 to Melee (Basic), +4 damage, first melee attack each turn triggers deathblow, any target hit does not beenfit from non=magical armour, language(magick) +20 to generate 8 yeards of light, creatures struck by shard cannot benefit from regeneration until a full day has passed, +30 Language (Magick) when casting any spell, spells of Aqshy gain an additional +1 SL
      </p>
      <p> <strong>Bane</strong>: Gain the Ablaze condition
      </p>
      <p> <strong>Trigger</strong>: Failed Willpower Test at start of turn (if you are already ablaze this does not trigger)
      </p>
      <p> <strong>Description</strong>: This ...
      </p>
    </>,
    [wepEffect_wreathedInShadows]
  ),
};

// function itemBuilder(name: string) {
//   return {
//     ...ARMOURY_Core[name],
//     info: {
//       ...ARMOURY_Info[name],
//     },
//     summary: ARMOURY_ContentsSummary[name],
//     statlines: [
//       { DnD5e: ARMOURY_DnD5e[name] },
//       { WFRP4e: ARMOURY_WFRP4e[name] }
//     ]
//   };
// }

export const ArmouryListMagic = Object.keys(ARMOURY_Core)
  .filter((i) => ARMOURY_Core[i].tags.some((e: any) => `Magical` == e))
  .map((item) => {
    return magicItemBuilder(item);
  });
