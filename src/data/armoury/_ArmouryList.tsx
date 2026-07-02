import { AdventuringGear } from "./ArmouryListAdventuringGear";
import { Armour } from "./ArmouryListArmour";
import { Weapons } from "./ArmouryListWeapons";
import { MagicWeapons } from "./ArmouryListWeaponsMagic";
import { WondrousItems } from "./ArmouryListWondrousItems";

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