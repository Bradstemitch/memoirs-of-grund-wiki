import { Aberrations } from "./CreatureList/Aberrations";
import { Dragons } from "./CreatureList/Dragons";
import { Fey } from "./CreatureList/Fey";
import { Fiends } from "./CreatureList/Fiends";
import { Giants } from "./CreatureList/Giants";
import { Humanoids } from "./CreatureList/Humanoids";
import { Humans } from "./CreatureList/Humans";
import { Monsters } from "./CreatureList/Monsters";
import { Undead } from "./CreatureList/Undead";

export const CreatureList = [
  ...Aberrations,
  ...Dragons,
  ...Fey,
  ...Fiends,
  ...Giants,
  ...Humans,
  ...Humanoids,
  ...Monsters,
  ...Undead
]