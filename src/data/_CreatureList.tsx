
import { CREATURE_Core } from "./__DATA_Core";
import WFRP4eNPCJSONBuilder from "./_WFRP4e/Summary/WFRP4eNPCJSONBuilder";
import { Humans } from "./creatures/Humans";

// export const CreatureList = [
//   creatureBuilder(`Ashigaru`, `Human`, `Akitsudo`, `Yari`, 3, `Silver`, ['Humanoid', 'Human', 'Akitsudo']),            //Todo
//   creatureBuilder(`Samurai`, `Human`, `Akitsudo`, `Sengoku`, 3, `Silver`, ['Humanoid', 'Human', 'Akitsudo']),     //Todo

// ...Aberrations,
// ...Dragons,
// ...Fey,
// ...Fiends,
// ...Giants,
// ...Humans,
// ...Humanoids,
// ...Monsters,
// ...Undead
// ]

export function creatureBuilder(name: string) {
  return ({
    ...CREATURE_Core[name],
    'WFRP4e': WFRP4eNPCJSONBuilder(CREATURE_Core[name]),
  })
}

export const CreatureList = Object.keys(CREATURE_Core).map(character => {
  console.log(creatureBuilder(character).species)
  return creatureBuilder(character)
})