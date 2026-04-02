import { WFRP4eRings } from "../Token/WFRP4eTokenRing"
import { NPCStats } from "../WFRP4eDefault"
import { NPCCharacteristics } from "./00DHStats"
import {trait_hardy } from "../Traits/WFRP4eTraits"
import { wep_spear } from "../Items/wep_polearm"
import { shi_shield } from "../Items/wep_shield"
import { talent_warriorBorn } from "../Traits/WFRP4eTalents"
import { skill_meleeBasic, skill_meleePolearm } from "../Traits/WFRP4eSkills"
import { arm_plateOpenHelm } from "../Items/arm-plate"
import { arm_mailShirt } from "../Items/arm-mail"
import { arm_leatherJack, arm_leatherLeggings } from "../Items/arm-leather"

export function WFRP4eNPC(speciesProp: string, nameProp: string, weaponProp: string, threatProp: number, rank?: string) {
    let species = speciesProp
    let name = nameProp
    let weapon = weaponProp
    let threat = threatProp
    let ringRank = rank || "Troop"
    let size = 1
    let imageLoc = ""
    let imageWild = ""
    let traits = []
    let talents = []
    let skills = []
    let weapons = []
    let armour = []
    let equipment = []
    let cybernetics = []
    let systemData = NPCStats

    // switch (faction) {
    //     case "Cawdor":
    //         switch (weapon) {
    //             case "Autogun":
    //                 imageLoc = "Necromunda/Cawdor/HumanCawdorGangerAutogunAndMolotov.png"
    //                 imageWild = "Necromunda/Cawdor/HumanCawdorGangerAutogun*"
    //                 weapons.push(wep_autogun)
    //                 weapons.push(wep_spear)
    //                 weapons.push(wep_fireBomb)
    //                 break;
    //             case "Pistol":
    //                 imageLoc = "Necromunda/Cawdor/HumanCawdorGangerPistol(Auto)AndAxe.png"
    //                 imageWild = "Necromunda/Cawdor/HumanCawdorGangerPistol(*"
    //                 weapons.push(wep_stubAutomatic("1"))
    //                 weapons.push(wep_axe)
    //                 break;
    //             case "Pistols":
    //                 imageLoc = "Necromunda/Cawdor/HumanCawdorGangerPistols(Stub).png"
    //                 imageWild = "Necromunda/Cawdor/HumanCawdorGangerPistols*"
    //                 weapons.push(wep_stubAutomatic("1"))
    //                 weapons.push(wep_stubAutomatic("2"))
    //                 weapons.push(wep_knife_mel)
    //                 break;
    //             case "Polearm":
    //                 imageLoc = "Necromunda/Cawdor/HumanCawdorGangerPolearmAutogun.png"
    //                 imageWild = "Necromunda/Cawdor/HumanCawdorGangerPolearm*"
    //                 weapons.push(wep_autogun)
    //                 weapons.push(wep_spear)
    //                 break;
    //         }
    //         switch (name) {
    //             case "Bonepicker":
    //                 systemData.system.skills.athletics.advance = "2"
    //                 systemData.system.skills.dodge.advance = "1"
    //                 systemData.system.skills.intimidate.advance = "1"
    //                 armour.push(arm_heavyLeathers)
    //                 break;
    //             case "Brethren":
    //                 systemData.system.skills.athletics.advance = "1"
    //                 systemData.system.skills.dodge.advance = "1"
    //                 systemData.system.skills.survival.advance = "2"
    //                 systemData.system.skills.techUse.advance = "1"
    //                 armour.push(arm_hiveLeathers)
    //                 break;
    //         }
    //         break;
    //     case "Cawdor Redemptionist":
    //         switch (weapon) {
    //             case "Autogun":
    //                 imageLoc = "Necromunda/Cawdor/HumanCawdorRedGangerAutogun1.png"
    //                 imageWild = "Necromunda/Cawdor/HumanCawdorRedGangerAutogun*"
    //                 weapons.push(wep_autogun)
    //                 weapons.push(wep_exterminator)
    //                 weapons.push(wep_knife_mel)
    //                 break;
    //             case "Chainaxe":
    //                 imageLoc = "Necromunda/Cawdor/HumanCawdorRedLeaderChainaxe.png"
    //                 imageWild = "Necromunda/Cawdor/HumanCawdorRedLeaderChainaxe*"
    //                 break;
    //             case "Eviscerator":
    //                 imageLoc = "Necromunda/Cawdor/HumanCawdorRedGangerEviscerator.png"
    //                 imageWild = "Necromunda/Cawdor/HumanCawdorRedGangerEviscerator*"
    //                 weapons.push(wep_eviscerator)
    //                 weapons.push(wep_exterminator)
    //                 talents.push(talent_preternaturalSpeed)
    //                 break;
    //             case "Flamer":
    //                 imageLoc = "Necromunda/Cawdor/HumanCawdorRedGangerFlamer.png"
    //                 imageWild = "Necromunda/Cawdor/HumanCawdorRedGangerFlamer*"
    //                 weapons.push(wep_flamer)
    //                 weapons.push(wep_knife_mel)
    //                 talents.push(talent_divineProtection)
    //                 break;
    //             case "Pistol":
    //                 imageLoc = "Necromunda/Cawdor/HumanCawdorRedGangerPistol(Auto).png"
    //                 imageWild = "Necromunda/Cawdor/HumanCawdorRedGangerPistol(*"
    //                 weapons.push(wep_stubAutomatic("1"))
    //                 weapons.push(wep_knife_mel)
    //                 break;
    //             case "Pistols":
    //                 imageLoc = "Necromunda/Cawdor/HumanCawdorRedGangerPistols(Auto).png"
    //                 imageWild = "Necromunda/Cawdor/HumanCawdorRedGangerPistols*"
    //                 weapons.push(wep_stubAutomatic("1"))
    //                 weapons.push(wep_stubAutomatic("2"))
    //                 weapons.push(wep_knife_mel)
    //                 break;
    //             case "Shotgun":
    //                 imageLoc = "Necromunda/Cawdor/HumanCawdorRedGangerShotgun.png"
    //                 imageWild = "Necromunda/Cawdor/HumanCawdorRedGangerShotgun*"
    //                 weapons.push(wep_shotgun)
    //                 weapons.push(wep_exterminator)
    //                 weapons.push(wep_knife_mel)
    //                 break;
    //         }
    //         switch (name) {
    //             case "Zealot":
    //                 systemData.system.skills.athletics.advance = "2"
    //                 systemData.system.skills.dodge.advance = "1"
    //                 systemData.system.skills.intimidate.advance = "1"
    //                 armour.push(arm_heavyLeathers)
    //                 break;
    //             case "Brethren":
    //                 systemData.system.skills.athletics.advance = "1"
    //                 systemData.system.skills.dodge.advance = "1"
    //                 systemData.system.skills.survival.advance = "2"
    //                 systemData.system.skills.techUse.advance = "1"
    //                 armour.push(arm_hiveLeathers)
    //                 break;
    //         }
    //         break;
    //     case "Delaque":
    //         switch (weapon) {
    //             case "Autogun":
    //                 imageLoc = "HumanEscherGangerAutogun*"
    //                 break;
    //         }
    //         break;
    //     case "Escher":
    //         switch (weapon) {
    //             case "Autogun":
    //                 imageLoc = "Necromunda/Escher/HumanEscherGangerAutogun1.png"
    //                 imageWild = "Necromunda/Escher/HumanEscherGangerAutogun*"
    //                 weapons.push(wep_autogun)
    //                 weapons.push(wep_sword)
    //                 break;
    //             case "Bolter":
    //                 imageLoc = "Necromunda/Escher/HumanEscherChampionShockWhipAndBolter.png"
    //                 imageWild = "Necromunda/Escher/HumanEscherChampionShockWhipAndBolter.png"
    //                 weapons.push(wep_boltgun)
    //                 weapons.push(wep_needlePistol)
    //                 weapons.push(wep_shockWhip)
    //                 break;
    //             case "Flamer":
    //                 imageLoc = "Necromunda/Escher/HumanEscherGangerFlamer.png"
    //                 imageWild = "Necromunda/Escher/HumanEscherGangerFlamer*"
    //                 weapons.push(wep_flamer)
    //                 weapons.push(wep_knife_mel)
    //                 talents.push(talent_divineProtection)
    //                 break;
    //             case "Lasgun":
    //                 imageLoc = "Necromunda/Escher/HumanEscherGangerLasgunAndStiletto.png"
    //                 imageWild = "Necromunda/Escher/HumanEscherGangerLasgun*"
    //                 weapons.push(wep_lasgun)
    //                 weapons.push(wep_sword)
    //                 break;
    //             case "Pistol":
    //                 imageLoc = "Necromunda/Escher/HumanEscherGangerPistol(Las)AndStiletto1.png"
    //                 imageWild = "Necromunda/Escher/HumanEscherGangerPistol(*"
    //                 weapons.push(wep_laspistol("1"))
    //                 weapons.push(wep_sword)
    //                 break;
    //             case "Pistols":
    //                 imageLoc = "Necromunda/Escher/HumanEscherGangerPistols(Las)Dual.png"
    //                 imageWild = "Necromunda/Escher/HumanEscherGangerPistols*"
    //                 weapons.push(wep_laspistol("1"))
    //                 weapons.push(wep_laspistol("2"))
    //                 weapons.push(wep_sword)
    //                 break;
    //             case "Plasma Pistol":
    //                 imageLoc = "Necromunda/Escher/HumanEscherChampionPistol(Plasma)AndStiletto3.png"
    //                 imageWild = "Necromunda/Escher/HumanEscherChampionPistol(Plasma)*"
    //                 weapons.push(wep_plasmaPistol)
    //                 weapons.push(wep_sword)
    //                 break;
    //         }
    //         switch (name) {
    //             case "Little Sister":
    //                 systemData.system.skills.athletics.advance = "1"
    //                 systemData.system.skills.dodge.advance = "2"
    //                 systemData.system.skills.parry.advance = "2"
    //                 armour.push(arm_heavyLeathers)
    //                 break;
    //             case "Sister":
    //                 systemData.system.skills.acrobatics.advance = "2"
    //                 systemData.system.skills.athletics.advance = "1"
    //                 systemData.system.skills.dodge.advance = "2"
    //                 systemData.system.skills.parry.advance = "2"
    //                 systemData.system.skills.techUse.advance = "1"
    //                 armour.push(arm_hiveLeathers)
    //                 weapons.push(wep_fragGrenade)
    //                 weapons.push(wep_fragGrenade)
    //                 weapons.push(wep_fragGrenade)
    //                 weapons.push(wep_krakGrenade)
    //                 weapons.push(wep_krakGrenade)
    //                 break;
    //             case "Death Maiden":
    //                 imageLoc = "HumanEscherDeathMaiden1.png"
    //                 imageWild = "HumanEscherDeathMaiden*"
    //                 systemData.system.skills.acrobatics.advance = "3"
    //                 systemData.system.skills.athletics.advance = "4"
    //                 systemData.system.skills.awareness.advance = "3"
    //                 systemData.system.skills.dodge.advance = "3"
    //                 systemData.system.skills.security.advance = "3"
    //                 systemData.system.skills.stealth.advance = "3"
    //                 systemData.system.skills.techUse.advance = "3"
    //                 talents.push(talent_deathDealer)
    //                 talents.push(talent_constantVigilance)
    //                 talents.push(talent_templeAssassin)
    //                 talents.push(talent_unarmedSpecialist)
    //                 talents.push(talent_twoWeaponMaster("Melee, Ranged"))
    //                 talents.push(talent_twoWeaponWielder("Melee, Ranged"))
    //                 talents.push(talent_preternaturalSpeed)
    //                 traits.push(trait_fear(2))
    //                 traits.push(trait_fromBeyond)
    //                 traits.push(trait_unnaturalStrength(3))
    //                 systemData.system.characteristics.strength.unnatural = 3
    //                 traits.push(trait_unnaturalToughness(3))
    //                 systemData.system.characteristics.toughness.unnatural = 3
    //                 weapons.push(wep_needlePistol)
    //                 weapons.push(wep_neuroGauntlet)
    //                 equipment.push(equip_eversorCombatDrugs)
    //                 break;
    //         }
    //         break;
    //     case "Goliath":
    //         size = 1.25
    //         switch (weapon) {
    //             case "Chainaxe":
    //                 imageLoc = "Necromunda/Goliath/HumanGoliathGangerChainAxe.png"
    //                 imageWild = "Necromunda/Goliath/HumanGoliathGangerChainAxe*"
    //                 break;
    //             case "Grenade Launcher":
    //                 imageLoc = "Necromunda/Goliath/HumanGoliathGangerGrenadeLauncher.png"
    //                 imageWild = "Necromunda/Goliath/HumanGoliathGangerGrenadeLauncher*"
    //                 break;
    //             case "Stub Cannon":
    //                 imageLoc = "Necromunda/Goliath/HumanGoliathGangerCannon3.png"
    //                 imageWild = "Necromunda/Goliath/HumanGoliathGangerCannon*"
    //                 break;
    //         }
    //         switch (name) {
    //             case "Bully":
    //                 systemData.system.skills.athletics.advance = "2"
    //                 systemData.system.skills.dodge.advance = "1"
    //                 systemData.system.skills.intimidate.advance = "1"
    //                 break;
    //             case "Bruiser":
    //                 systemData.system.skills.athletics.advance = "1"
    //                 systemData.system.skills.dodge.advance = "1"
    //                 systemData.system.skills.survival.advance = "2"
    //                 systemData.system.skills.techUse.advance = "1"
    //                 systemData.system.skills.operate.specialities.surface.advance = 2
    //                 systemData.system.skills.operate.specialities.surface.taken = true
    //                 break;
    //             case "Stimmer":
    //                 size = 1.6
    //                 systemData.system.skills.athletics.advance = "1"
    //                 systemData.system.skills.dodge.advance = "1"
    //                 systemData.system.skills.survival.advance = "2"
    //                 systemData.system.skills.techUse.advance = "1"
    //                 systemData.system.skills.operate.specialities.surface.advance = 2
    //                 systemData.system.skills.operate.specialities.surface.taken = true
    //                 break;
    //             case "Forge Boss":
    //                 size = 1.6
    //                 systemData.system.skills.athletics.advance = "1"
    //                 systemData.system.skills.dodge.advance = "1"
    //                 systemData.system.skills.survival.advance = "2"
    //                 systemData.system.skills.techUse.advance = "1"
    //                 systemData.system.skills.operate.specialities.surface.advance = 2
    //                 systemData.system.skills.operate.specialities.surface.taken = true
    //                 break;
    //             case "Forge Tyrant":
    //                 size = 1.6
    //                 systemData.system.skills.athletics.advance = "1"
    //                 systemData.system.skills.dodge.advance = "1"
    //                 systemData.system.skills.survival.advance = "2"
    //                 systemData.system.skills.techUse.advance = "1"
    //                 systemData.system.skills.operate.specialities.surface.advance = 2
    //                 systemData.system.skills.operate.specialities.surface.taken = true
    //                 break;
    //         }
    //         break;
    //     case "Orlock":
    //         switch (weapon) {
    //             case "Autogun":
    //                 imageLoc = "Necromunda/Orlock/HumanOrlockGangerAutogun1.png"
    //                 imageWild = "Necromunda/Orlock/HumanOrlockGangerAutogun*"
    //                 weapons.push(wep_autogun)
    //                 weapons.push(wep_knife_mel)
    //                 break;
    //             case "Chainsword":
    //                 imageLoc = "Necromunda/Orlock/HumanOrlockGangerChainswordPistol.png"
    //                 imageWild = "Necromunda/Orlock/HumanOrlockGangerChainsword*"
    //                 weapons.push(wep_stubAutomatic("1"))
    //                 weapons.push(wep_chainsword)
    //                 break;
    //             case "Heavy Bolter":
    //                 imageLoc = "Necromunda/Orlock/HumanOrlockGangerHeavyBolter.png"
    //                 imageWild = "Necromunda/Orlock/HumanOrlockGangerHeavyBolter*"
    //                 weapons.push(wep_heavyBolter)
    //                 weapons.push(wep_knife_mel)
    //                 break;
    //             case "Pistol":
    //                 imageLoc = "Necromunda/Orlock/HumanOrlockGangerPistol(Auto)AndKnife.png"
    //                 imageWild = "Necromunda/Orlock/HumanOrlockGangerPistol(*"
    //                 weapons.push(wep_stubAutomatic("1"))
    //                 weapons.push(wep_knife_mel)
    //                 break;
    //             case "Pistols":
    //                 imageLoc = "Necromunda/Orlock/HumanOrlockGangerPistols(Auto)AndPistol(Stub).png"
    //                 imageWild = "Necromunda/Orlock/HumanOrlockGangerPistols*"
    //                 weapons.push(wep_stubAutomatic("1"))
    //                 weapons.push(wep_stubAutomatic("2"))
    //                 weapons.push(wep_knife_mel)
    //                 break;
    //             case "Powerfist":
    //                 imageLoc = "Necromunda/Orlock/HumanOrlockGangerSawnOffAndFist.png"
    //                 imageWild = "Necromunda/Orlock/HumanOrlockGangerSawnOffAndFist.png"
    //                 weapons.push(wep_shotgun)
    //                 weapons.push(wep_powerFist)
    //                 break;
    //             case "Shotgun":
    //                 imageLoc = "Necromunda/Orlock/HumanOrlockGangerShotgun.png"
    //                 imageWild = "Necromunda/Orlock/HumanOrlockGangerShotgun*"
    //                 weapons.push(wep_shotgun)
    //                 weapons.push(wep_knife_mel)
    //                 break;
    //         }
    //         switch (name) {
    //             case "Greenhorn":
    //                 systemData.system.skills.athletics.advance = "2"
    //                 systemData.system.skills.dodge.advance = "1"
    //                 systemData.system.skills.intimidate.advance = "1"
    //                 armour.push(arm_heavyLeathers)
    //                 break;
    //             case "Gunner":
    //                 systemData.system.skills.athletics.advance = "1"
    //                 systemData.system.skills.dodge.advance = "1"
    //                 systemData.system.skills.survival.advance = "2"
    //                 systemData.system.skills.techUse.advance = "1"
    //                 systemData.system.skills.operate.specialities.surface.advance = 2
    //                 systemData.system.skills.operate.specialities.surface.taken = true
    //                 armour.push(arm_hiveLeathers)
    //                 weapons.push(wep_fragGrenade)
    //                 weapons.push(wep_fragGrenade)
    //                 weapons.push(wep_fragGrenade)
    //                 weapons.push(wep_krakGrenade)
    //                 weapons.push(wep_krakGrenade)
    //                 break;
    //             case "Road Sergeant":
    //                 systemData.system.skills.athletics.advance = "1"
    //                 systemData.system.skills.dodge.advance = "1"
    //                 systemData.system.skills.survival.advance = "2"
    //                 systemData.system.skills.techUse.advance = "1"
    //                 systemData.system.skills.operate.specialities.surface.advance = 2
    //                 systemData.system.skills.operate.specialities.surface.taken = true
    //                 talents.push(talent_bulgingBiceps)
    //                 armour.push(arm_hiveLeathers)
    //                 weapons.push(wep_fragGrenade)
    //                 weapons.push(wep_fragGrenade)
    //                 weapons.push(wep_fragGrenade)
    //                 weapons.push(wep_krakGrenade)
    //                 weapons.push(wep_krakGrenade)
    //                 break;
    //         }
    //         break;
    //     case "Van Saar":
    //         cybernetics.push(cyb_subskinArmour)
    //         switch (weapon) {
    //             case "Lasgun":
    //                 imageLoc = "Necromunda/VanSaar/HumanVanSaarSpecialistLasgun1.png"
    //                 imageWild = "Necromunda/VanSaar/HumanVanSaarSpecialistLasgun*"
    //                 weapons.push(wep_lasgun)
    //                 weapons.push(wep_knife_mel)
    //                 break;
    //         }
    //         switch (name) {
    //             case "Subtek":
    //                 systemData.system.skills.athletics.advance = "2"
    //                 systemData.system.skills.dodge.advance = "1"
    //                 systemData.system.skills.intimidate.advance = "1"
    //                 armour.push(arm_guardFlakArmour)
    //                 break;
    //         }
    //         break;
    //     case "Corpse Grinder Cults":
    //         switch (name) {
    //             case "Skinner":
    //                 imageLoc = "Chaos/CorpseGrinder/CorpseGrinderSkinner.png"
    //                 imageWild = "Chaos/CorpseGrinder/CorpseGrinderSkinner.png"
    //                 systemData.system.skills.athletics.advance = "1"
    //                 systemData.system.skills.dodge.advance = "1"
    //                 systemData.system.skills.intimidate.advance = "1"
    //                 systemData.system.skills.parry.advance = "2"
    //                 talents.push(talent_ambidextrous)
    //                 talents.push(talent_combatMaster)
    //                 talents.push(talent_devastaingAssault)
    //                 talents.push(talent_ironJaw)
    //                 talents.push(talent_lightningAttack)
    //                 talents.push(talent_swiftAttack)
    //                 talents.push(talent_twoWeaponWielder("Melee"))
    //                 traits.push(trait_fear(1))
    //                 armour.push(arm_lightBrassArmour)
    //                 weapons.push(wep_chainaxe)
    //                 break;
    //             case "Cutter":
    //                 imageLoc = "Chaos/CorpseGrinder/CorpseGrinderCutter.png"
    //                 imageWild = "Chaos/CorpseGrinder/CorpseGrinderCutter.png"
    //                 systemData.system.skills.athletics.advance = "1"
    //                 systemData.system.skills.dodge.advance = "1"
    //                 systemData.system.skills.intimidate.advance = "1"
    //                 systemData.system.skills.parry.advance = "2"
    //                 systemData.system.skills.survival.advance = "2"
    //                 talents.push(talent_ambidextrous)
    //                 talents.push(talent_combatMaster)
    //                 talents.push(talent_devastaingAssault)
    //                 talents.push(talent_ironJaw)
    //                 talents.push(talent_lightningAttack)
    //                 talents.push(talent_swiftAttack)
    //                 talents.push(talent_twoWeaponMaster("Melee"))
    //                 talents.push(talent_twoWeaponWielder("Melee"))
    //                 talents.push(talent_preternaturalSpeed)
    //                 traits.push(trait_fear(1))
    //                 traits.push(trait_unnaturalStrength(3))
    //                 systemData.system.characteristics.strength.unnatural = 3
    //                 traits.push(trait_unnaturalToughness(1))
    //                 systemData.system.characteristics.toughness.unnatural = 1
    //                 armour.push(arm_lightBrassArmour)
    //                 weapons.push(wep_chainaxe)
    //                 break;
    //             case "Butcher":
    //                 imageLoc = "Chaos/CorpseGrinder/CorpseGrinderButcher.png"
    //                 imageWild = "Chaos/CorpseGrinder/CorpseGrinderButcher.png"
    //                 systemData.system.skills.athletics.advance = "1"
    //                 systemData.system.skills.dodge.advance = "1"
    //                 systemData.system.skills.intimidate.advance = "1"
    //                 systemData.system.skills.parry.advance = "2"
    //                 systemData.system.skills.survival.advance = "2"
    //                 talents.push(talent_bulgingBiceps)
    //                 armour.push(arm_lightBrassArmour)
    //                 break;
    //         }
    //         break;
    //     case "Bounty Hunter":
    //         switch (name) {
    //             case "Harvest Lord":
    //                 imageLoc = "Chaos/CorpseGrinder/EightfoldHarvestLord.png"
    //                 imageWild = "Chaos/CorpseGrinder/EightfoldHarvestLord.png"
    //                 systemData.system.skills.acrobatics.advance = "3"
    //                 systemData.system.skills.athletics.advance = "4"
    //                 systemData.system.skills.awareness.advance = "3"
    //                 systemData.system.skills.dodge.advance = "3"
    //                 systemData.system.skills.parry.advance = "3"
    //                 systemData.system.skills.security.advance = "3"
    //                 systemData.system.skills.stealth.advance = "3"
    //                 systemData.system.skills.techUse.advance = "3"
    //                 talents.push(talent_battleRage)
    //                 talents.push(talent_blademaster)
    //                 talents.push(talent_combatMaster)
    //                 talents.push(talent_counterAttack)
    //                 talents.push(talent_devastaingAssault)
    //                 talents.push(trait_frenzy)
    //                 talents.push(talent_inescapableAttack)
    //                 talents.push(talent_swiftAttack)
    //                 talents.push(talent_templeAssassin)
    //                 talents.push(talent_twoWeaponMaster("Melee"))
    //                 talents.push(talent_twoWeaponWielder("Melee"))
    //                 talents.push(talent_preternaturalSpeed)
    //                 traits.push(trait_fear(2))
    //                 traits.push(trait_fromBeyond)
    //                 traits.push(trait_unnaturalStrength(4))
    //                 systemData.system.characteristics.strength.unnatural = 4
    //                 traits.push(trait_unnaturalToughness(1))
    //                 systemData.system.characteristics.toughness.unnatural = 1
    //                 weapons.push(wep_heavyChainCleaver("1", true))
    //                 weapons.push(wep_heavyChainCleaver("2", true))
    //                 equipment.push(equip_eversorCombatDrugs)
    //                 break;
    //         }
    //         break;
    //     case "Blood Pact":
    //         switch (weapon) {
    //             case "Lasgun":
    //                 imageLoc = "HumanChaosTrooperLasgun1.png"
    //                 imageWild = "HumanChaosTrooperLasgun*"
    //                 break;
    //             case "Hot-Shot Lasgun":
    //                 imageLoc = "HumanChaosTrooperLasgun1.png"
    //                 imageWild = "HumanChaosTrooperLasgun*"
    //                 break;
    //         }
    //         switch (name) {
    //             case "Trooper":
    //                 systemData.system.skills.athletics.advance = "1"
    //                 systemData.system.skills.awareness.advance = "2"
    //                 systemData.system.skills.dodge.advance = "1"
    //                 systemData.system.skills.medicae.advance = "2"
    //                 systemData.system.skills.techUse.advance = "2"
    //                 systemData.system.skills.operate.specialities.surface.advance = 1
    //                 systemData.system.skills.operate.specialities.surface.taken = true
    //                 talents.push(talent_mightyShot)
    //                 talents.push(talent_rapidReload)
    //                 talents.push(talent_technicalKnock)
    //                 weapons.push(wep_lasgun)
    //                 weapons.push(wep_knife_mel)
    //                 armour.push(arm_enforcerCarapace)
    //                 break;
    //             case "Brigade":
    //                 systemData.system.skills.athletics.advance = "2"
    //                 systemData.system.skills.awareness.advance = "2"
    //                 systemData.system.skills.dodge.advance = "2"
    //                 systemData.system.skills.medicae.advance = "2"
    //                 systemData.system.skills.parry.advance = "1"
    //                 systemData.system.skills.techUse.advance = "2"
    //                 systemData.system.skills.operate.specialities.surface.advance = 1
    //                 systemData.system.skills.operate.specialities.surface.taken = true
    //                 talents.push(talent_adamantiumFaith)
    //                 talents.push(talent_mightyShot)
    //                 talents.push(talent_rapidReload)
    //                 talents.push(talent_technicalKnock)
    //                 weapons.push(wep_hotShotLasgun)
    //                 weapons.push(wep_knife_mel)
    //                 armour.push(arm_tempestusCarapace)
    //                 break;
    //         }
    //         break;
    //     case "Brute":
    //         switch (name) {
    //             case "Ambot":
    //                 size = 1.6
    //                 switch (weapon) {
    //                     default:
    //                         imageLoc = "Ambot.png"
    //                         imageWild = "Ambot*"
    //                         break;
    //                 }
    //                 systemData.system.skills.athletics.advance = "3"
    //                 systemData.system.skills.parry.advance = "1"
    //                 talents.push(talent_ambidextrous)
    //                 talents.push(talent_hardy)
    //                 talents.push(talent_trueGrit)
    //                 talents.push(talent_twoWeaponWielder("Melee"))
    //                 traits.push(trait_autoStabilised)
    //                 traits.push(trait_fear(1))
    //                 traits.push(trait_machine(4))
    //                 traits.push(trait_undying)
    //                 traits.push(trait_unnaturalStrength(3))
    //                 systemData.system.characteristics.strength.unnatural = 3
    //                 traits.push(trait_unnaturalToughness(5))
    //                 systemData.system.characteristics.toughness.unnatural = 5
    //                 weapons.push(wep_tunnellingClawsRanged)
    //                 weapons.push(wep_tunnellingClawsMelee)
    //                 weapons.push(wep_tunnellingClawsMelee)
    //                 break;
    //         }
    //         break;
    //     case "Astartes":
    //         switch (name) {
    //             case "Word Bearer Legionary":
    //                 size = 1.25
    //                 name = "Astartes"
    //                 switch (weapon) {
    //                     default:
    //                         imageLoc = "AstartesChaosWordBeaererLegionaryBolter.png"
    //                         imageWild = "AstartesChaosWordBeaererLegionaryBolter*"
    //                         break;
    //                 }
    //                 systemData.system.skills.athletics.advance = "2"
    //                 systemData.system.skills.awareness.advance = "2"
    //                 systemData.system.skills.dodge.advance = "2"
    //                 systemData.system.skills.stealth.advance = "2"
    //                 weapons.push(wep_rendingClaws)
    //                 talents.push(talent_combatMaster)
    //                 talents.push(talent_devastaingAssault)
    //                 talents.push(talent_hardTarget)
    //                 talents.push(talent_leapUp)
    //                 talents.push(talent_lightningAttack)
    //                 talents.push(talent_stepAside)
    //                 talents.push(talent_swiftAttack)
    //                 traits.push(trait_darkSight)
    //                 traits.push(trait_naturalWeaponsDeadly)
    //                 traits.push(trait_fear(1))
    //                 traits.push(trait_fromBeyond)
    //                 traits.push(trait_multipleArms(4))
    //                 traits.push(trait_naturalArmour(4))
    //                 traits.push(trait_unnaturalAgility(4))
    //                 systemData.system.characteristics.agility.unnatural = 4
    //                 traits.push(trait_unnaturalStrength(4))
    //                 systemData.system.characteristics.strength.unnatural = 4
    //                 traits.push(trait_unnaturalToughness(2))
    //                 systemData.system.characteristics.toughness.unnatural = 2
    //                 break;
    //         }
    //         break;
    //     case "Ork":
    //         switch (name) {
    //             case "Kommando Boy":
    //                 size = 1.25
    //                 name = "Boy"
    //                 switch (weapon) {
    //                     case "Burna":
    //                         imageLoc = "Orks/OrkKommandoBoyFlamer.png"
    //                         imageWild = "Orks/OrkKommandoBoyFlamer*"
    //                         weapons.push(wep_flamer)
    //                         break;
    //                     case "Choppa":
    //                         imageLoc = "Orks/OrkKommandoBoyChoppa.png"
    //                         imageWild = "Orks/OrkKommandoBoyChoppa*"
    //                         weapons.push(wep_ork_slugga)
    //                         weapons.push(wep_ork_choppa)
    //                         break;
    //                     case "Rokkit":
    //                         imageLoc = "Orks/OrkKommandoBoyRokkit.png"
    //                         imageWild = "Orks/OrkKommandoBoyRokkit*"
    //                         weapons.push(wep_ork_rokkit)
    //                         break;
    //                     case "Shoota":
    //                         imageLoc = "Orks/OrkKommandoBoyShoota1.png"
    //                         imageWild = "Orks/OrkKommandoBoyShoota*"
    //                         weapons.push(wep_ork_shootaTwinLinked)
    //                         break;
    //                     case "Sniper":
    //                         imageLoc = "Orks/OrkKommandoBoySniper.png"
    //                         imageWild = "Orks/OrkKommandoBoySniper*"
    //                         weapons.push(wep_ork_scopedBigShoota)
    //                         break;
    //                     default:
    //                         imageLoc = "Orks/OrkKommandoBoyShoota1.png"
    //                         imageWild = "Orks/OrkKommandoBoyShoota*"
    //                         break;
    //                 }
    //                 systemData.system.skills.athletics.advance = "1"
    //                 systemData.system.skills.dodge.advance = "1"
    //                 systemData.system.skills.intimidate.advance = "1"
    //                 systemData.system.skills.stealth.advance = "1"
    //                 talents.push(talent_bulgingBiceps)
    //                 talents.push(talent_crushingBlow)
    //                 talents.push(talent_devastaingAssault)
    //                 talents.push(talent_hardy)
    //                 talents.push(talent_ironJaw)
    //                 talents.push(talent_trueGrit)
    //                 traits.push(trait_unnaturalStrength(1))
    //                 systemData.system.characteristics.strength.unnatural = 1
    //                 traits.push(trait_unnaturalToughness(1))
    //                 systemData.system.characteristics.toughness.unnatural = 1
    //                 armour.push(arm_flakk)
    //                 break;
    //             case "Kommando Nob":
    //                 size = 1.25
    //                 name = "Nob"
    //                 switch (weapon) {
    //                     default:
    //                         imageLoc = "Orks/OrkKommandoNob.png"
    //                         imageWild = "Orks/OrkKommandoNob*"
    //                         break;
    //                 }
    //                 systemData.system.skills.athletics.advance = "2"
    //                 systemData.system.skills.command.advance = "2"
    //                 systemData.system.skills.dodge.advance = "1"
    //                 systemData.system.skills.intimidate.advance = "3"
    //                 systemData.system.skills.stealth.advance = "2"
    //                 talents.push(talent_bulgingBiceps)
    //                 talents.push(talent_crushingBlow)
    //                 talents.push(talent_devastaingAssault)
    //                 talents.push(talent_hardy)
    //                 talents.push(talent_ironJaw)
    //                 talents.push(talent_trueGrit)
    //                 traits.push(trait_unnaturalStrength(1))
    //                 systemData.system.characteristics.strength.unnatural = 1
    //                 traits.push(trait_unnaturalToughness(1))
    //                 systemData.system.characteristics.toughness.unnatural = 1
    //                 weapons.push(wep_ork_slugga)
    //                 weapons.push(wep_ork_powerKlaw)
    //                 armour.push(arm_flakk)
    //                 break;
    //         }
    //         break;
    //     case "Tyranid":
    //         switch (name) {
    //             case "Genestealer":
    //                 switch (name) {
    //                     case "Genestealer":
    //                         imageLoc = "Tyranids/TyranidGenestealer01.png"
    //                         imageWild = "Tyranids/TyranidGenestealer*"
    //                         size = 1.25
    //                         systemData.system.skills.athletics.advance = "2"
    //                         systemData.system.skills.awareness.advance = "2"
    //                         systemData.system.skills.dodge.advance = "2"
    //                         systemData.system.skills.stealth.advance = "2"
    //                         weapons.push(wep_rendingClaws)
    //                         talents.push(talent_combatMaster)
    //                         talents.push(talent_devastaingAssault)
    //                         talents.push(talent_hardTarget)
    //                         talents.push(talent_leapUp)
    //                         talents.push(talent_lightningAttack)
    //                         talents.push(talent_preternaturalSpeed)
    //                         talents.push(talent_stepAside)
    //                         talents.push(talent_swiftAttack)
    //                         traits.push(trait_darkSight)
    //                         traits.push(trait_naturalWeaponsDeadly)
    //                         traits.push(trait_fear(1))
    //                         traits.push(trait_fromBeyond)
    //                         traits.push(trait_multipleArms(4))
    //                         traits.push(trait_naturalArmour(4))
    //                         traits.push(trait_unnaturalAgility(4))
    //                         systemData.system.characteristics.agility.unnatural = 4
    //                         traits.push(trait_unnaturalStrength(4))
    //                         systemData.system.characteristics.strength.unnatural = 4
    //                         traits.push(trait_unnaturalToughness(1))
    //                         systemData.system.characteristics.toughness.unnatural = 1
    //                         break;
    //                 }
    //         }
    //         break;
    // }
    switch (species) {
        case "Human":
            systemData.system.details.species.value = "Human"
            systemData.system.details.species.subspecies = ""
            systemData.system.details.size.value = "avg"
            switch (name) {
                case "Select-Fyrd":
                    imageLoc = "HumanoidMessarSelectFyrd.png"
                    imageWild = "Messar/HumanoidMessarSelectFyrd.png"
                    traits.push(trait_hardy)
                    talents.push(talent_warriorBorn)
                    skills.push(skill_meleeBasic(10))
                    skills.push(skill_meleePolearm(10))
                    weapons.push(wep_spear(true))
                    weapons.push(shi_shield(true))
                    armour.push(arm_plateOpenHelm(true))
                    armour.push(arm_mailShirt(true))
                    armour.push(arm_leatherJack(true))
                    armour.push(arm_leatherLeggings(true))
                    break;
            }
            break;
        case "Ogre":
            systemData.system.details.species.value = "Human"
            systemData.system.details.species.subspecies = ""
            systemData.system.details.size.value = "avg"
            switch (name) {
                case "Select-Fyrd":
                    imageLoc = "HumanoidMessarSelectFyrd.png"
                    imageWild = "Messar/HumanoidMessarSelectFyrd.png*"
                    break;
            }
            break;
    }
    systemData.system.characteristics.ws.initial = NPCCharacteristics[species.toLowerCase()][name.toLowerCase()][0]
    systemData.system.characteristics.bs.initial = NPCCharacteristics[species.toLowerCase()][name.toLowerCase()][1]
    systemData.system.characteristics.s.initial = NPCCharacteristics[species.toLowerCase()][name.toLowerCase()][2]
    systemData.system.characteristics.t.initial = NPCCharacteristics[species.toLowerCase()][name.toLowerCase()][3]
    systemData.system.characteristics.i.initial = NPCCharacteristics[species.toLowerCase()][name.toLowerCase()][4]
    systemData.system.characteristics.ag.initial = NPCCharacteristics[species.toLowerCase()][name.toLowerCase()][5]
    systemData.system.characteristics.int.initial = NPCCharacteristics[species.toLowerCase()][name.toLowerCase()][6]
    systemData.system.characteristics.wp.initial = NPCCharacteristics[species.toLowerCase()][name.toLowerCase()][7]
    systemData.system.characteristics.fel.initial = NPCCharacteristics[species.toLowerCase()][name.toLowerCase()][8]
    systemData.system.status.wounds.value = NPCCharacteristics[species.toLowerCase()][name.toLowerCase()][9]
    systemData.system.status.wounds.max = NPCCharacteristics[species.toLowerCase()][name.toLowerCase()][9]
    systemData.system.details.move.value = NPCCharacteristics[species.toLowerCase()][name.toLowerCase()][10]
    // systemData.system.fate.max = NPCCharacteristics[gangConst][name.toLowerCase()][11]
    // systemData.system.fate.value = NPCCharacteristics[gangConst][name.toLowerCase()][11]
    // systemData.system.size = NPCCharacteristics[gangConst][name.toLowerCase()][12].toString()
    //Specialist
    if (["Troop", "Ganger", "Specialist"].includes(ringRank) && ["Eviscerator", "Flamer", "Plasma Pistol", "Plasma Gun"].includes(weapon)) {
        // ringRank = "Specialist"

        // systemData.system.wounds.max = systemData.system.wounds.max += 4
        // systemData.system.wounds.value = systemData.system.wounds.max

        // switch (weapon) {
        //     case "Eviscerator":
        //         systemData.system.characteristics.weaponSkill.base += 5
        //         break;
        //     case "Flamer":
        //         systemData.system.characteristics.ballisticSkill.base += 5

        //         break;
        //     case "Plasma Pistol":
        //         systemData.system.characteristics.ballisticSkill.base += 5
        //         break;
        // }
    }

    // switch (weapon) {
    //     case "Chainaxe":
    //         weapons.push(wep_chainaxe)
    //         break;
    //     case "Grenade Launcher":
    //         weapons.push(wep_grenadeLauncher)
    //         if (false) {

    //         }
    //         else {
    //             weapons.push(wep_knife_mel)
    //             // weapons.push(wep_knife_throw)
    //         }
    //         break;
    //     case "Hot-Shot Lasgun":
    //         weapons.push(wep_hotShotLasgun)
    //         weapons.push(wep_knife_mel)
    //         break;
    //     case "Stub Cannon":
    //         weapons.push(wep_stubCannon)
    //         if (false) {

    //         }
    //         else {
    //             weapons.push(wep_knife_mel)
    //         }
    //         break;
    // }

    // if (["Ghost", "Sister", "Bruiser", "Gunner", "Tek", "Skinner"].includes(name)) {
    //     weapons.push(wep_fragGrenade)
    //     weapons.push(wep_fragGrenade)
    //     weapons.push(wep_fragGrenade)
    //     weapons.push(wep_krakGrenade)
    //     weapons.push(wep_krakGrenade)
    // } else if (name === "Brethren") {
    //     weapons.push(wep_fireBomb)
    //     weapons.push(wep_fireBomb)
    //     weapons.push(wep_fireBomb)
    //     weapons.push(wep_krakGrenade)
    //     weapons.push(wep_krakGrenade)
    // }

    return {
        "folder": "muy7xy93oLOlDKP9",
        "name": `${nameProp} ${weapon && ("w/ " + weapon + " ")}(${ringRank} ${threat})`,
        "type": "creature",
        "img": "modules/memoirs-of-grund/assets/actors/" + imageLoc,
        ...systemData,
        ...WFRP4eRings(ringRank || "Brass", name, "modules/memoirs-of-grund/assets/tokens/" + imageWild, size),
        "items": [
            ...weapons,
            ...armour,
            // ...equipment,
            // ...cybernetics,
            ...skills,
            ...traits,
            ...talents,
        ],
    }
}