import { CREATURE_Core } from './__DATA_Core';
import NPCJSONBuilder from './creatures/_NPCJSONBuilder';
import { FEY_CREATURE_ContentsSumary } from './creatures/summary/Fey';
import { HUMAN_CREATURE_ContentsSumary } from './creatures/summary/Human';
import { MONSTER_CREATURE_ContentsSumary } from './creatures/summary/Monsters';

export const CREATURE_Info = {
  ANEURIN: {},
};

const CREATURE_ContentsSumary = {
  ...FEY_CREATURE_ContentsSumary,
  ...HUMAN_CREATURE_ContentsSumary,
  ...MONSTER_CREATURE_ContentsSumary,
};

export function creatureBuilder(name: string) {
  return {
    ...CREATURE_Core[name],
    info: CREATURE_Info[name],
    summary: CREATURE_ContentsSumary[name],
    statlines: NPCJSONBuilder(CREATURE_Core[name]),
  };
}

export const CreatureList = Object.keys(CREATURE_Core).map((character) => {
  return creatureBuilder(character);
});
