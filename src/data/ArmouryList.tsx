import { AdventuringGear } from "./armoury/ArmouryListAdventuringGear";
import { Armour } from "./armoury/ArmouryListArmour";
import { Weapons } from "./armoury/ArmouryListWeapons";
import { MagicWeapons } from "./armoury/ArmouryListWeaponsMagic";
import { WondrousItems } from "./armoury/ArmouryListWondrousItems";

// export const ArmouryList = [
//   {
//     "Adventuring Gear": AdventuringGear
//   },
//   {
//     "Alchemical Items": AlchemicalItems
//   },
// {
//   "Armour": Armour
// },
//   {
//     "Held Items": HeldItems
//   },
//   {
//     "Runes": Runes
//   },
//   {
//     "Shields": Shields
//   },
// {
//   "Weapons": Weapons
// }
//   {
//     "Worn Items": WornItems
//   }
// ]

export const ArmouryList = AdventuringGear.concat(Armour, Weapons)
export const ArmouryListMagic = MagicWeapons.concat(WondrousItems)