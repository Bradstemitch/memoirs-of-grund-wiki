import { WFRP4eRings } from "../Token/WFRP4eTokenRing"
import { NPCStats } from "../WFRP4eDefault"
import { NPCCharacteristics } from "./WFRP4eNPCStats"
import { trait_hardy, trait_size } from "../Traits/WFRP4eTraits"
import { wep_lance, wep_spear } from "../Items/wep_polearm"
import { shi_shield, shi_shieldLarge } from "../Items/wep_shield"
import { talent_marksman, talent_warriorBorn } from "../Traits/WFRP4eTalents"
import { skill_meleeBasic, skill_meleeCavalry, skill_meleePolearm, skill_rangedBow } from "../Traits/WFRP4eSkills"
import { arm_plateHelm, arm_plateOpenHelm } from "../Items/arm-plate"
import { arm_mailChausses, arm_mailCoat, arm_mailCoif, arm_mailShirt } from "../Items/arm-mail"
import { arm_leatherJack, arm_leatherLeggings } from "../Items/arm-leather"
import { wep_dagger, wep_sword } from "../Items/wep_sword"
import { wep_club } from "../Items/wep_bludgeon"
import { wep_axe } from "../Items/wep_axe"
import { wep_bow } from "../Items/wep_bow"

export function WFRP4eNPC(speciesProp: string, factionProp: string, nameProp: string, weaponProp: string, threatProp: number, rank?: string) {
    let species = speciesProp
    let faction = factionProp
    let name = nameProp
    let weapon = weaponProp
    let threat = threatProp
    let ringRank = rank || "Troop"
    let size = 1
    let imageLoc = ""
    let imagePath = ""
    let imageWild = ""
    let traits = []
    let talents = []
    let skills = []
    let weapons = []
    let armour = []
    let equipment = []
    let cybernetics = []
    let systemData = NPCStats

    switch (species) {
        case "Aberration"://TODO
            switch (name) {
                case "Dweller":
                    systemData.system.details.species.value = "Aberration"
                    systemData.system.details.species.subspecies = ""
                    systemData.system.details.size.value = "avg"
                    imageLoc = "Dweller.png"
                    imageWild = "Dweller."
                    break;
            }
            break;

        case "Beast"://TODO
            switch (name) {
                case "Wolf":
                    systemData.system.details.species.value = "Aberration"
                    systemData.system.details.species.subspecies = ""
                    systemData.system.details.size.value = "avg"
                    imageLoc = "Dweller.png"
                    imageWild = "Dweller."
                    break;
            }
            break;

        case "Celestial"://TODO
            switch (name) {
                case "Valkyrie":
                    systemData.system.details.species.value = "Valkyrie"
                    systemData.system.details.species.subspecies = ""
                    systemData.system.details.size.value = "avg"
                    imageLoc = "Valkyrie.png"
                    imageWild = "Valkyrie."
                    break;
            }
            break;

        case "Construct"://TODO
            switch (name) {
                case "Animated Armour":
                    systemData.system.details.species.value = "Animated Armour"
                    systemData.system.details.species.subspecies = ""
                    systemData.system.details.size.value = "avg"
                    imageLoc = "AnimatedArmour.png"
                    imageWild = "AnimatedArmour."
                    break;
            }
            break;

        case "Dragon"://TODO
            switch (name) {
                case "Wyvern":
                    systemData.system.details.species.value = "Wyvern"
                    systemData.system.details.species.subspecies = ""
                    systemData.system.details.size.value = "avg"
                    imageLoc = "Wyvern.png"
                    imageWild = "Wyvern."
                    break;
            }
            break;

        case "Elf"://TODO
            systemData.system.details.species.value = "Elf"
            systemData.system.details.species.subspecies = ""
            systemData.system.details.size.value = "avg"
            switch (name) {
                case "Hunter":
                    imageLoc = "Hunter.png"
                    imageWild = "Hunter."
                    break;
            }
            break;

        case "Fey"://TODO
            systemData.system.details.species.value = "Elf"
            systemData.system.details.species.subspecies = ""
            systemData.system.details.size.value = "avg"
            switch (name) {
                case "Hunter":
                    imageLoc = "Hunter.png"
                    imageWild = "Hunter."
                    break;
            }
            break;

        case "Fiend"://TODO
            switch (faction) {
                case "Demon":
                    systemData.system.details.species.value = "Demon"
                    systemData.system.details.species.subspecies = ""
                    systemData.system.details.size.value = "avg"
                    switch (name) {
                        case "Gluttony":
                            imageLoc = "Gluttony.png"
                            imageWild = "Gluttony."
                            break;
                    }
                    break;
            }
            break;

        case "Giant"://TODO
            imagePath = "giant/"
            switch (faction) {
                case "Fomorian"://TODO
                    systemData.system.details.species.value = "Fomorian"
                    systemData.system.details.species.subspecies = ""
                    systemData.system.details.size.value = "avg"
                    switch (name) {
                        case "Fomorian":
                            imageLoc = "Fomorian.png"
                            imageWild = "Fomorian."
                            break;
                    }
                    break;

                case "Giant"://TODO
                    systemData.system.details.species.value = "Giant"
                    systemData.system.details.species.subspecies = ""
                    systemData.system.details.size.value = "avg"
                    switch (name) {
                        case "Giant":
                            imageLoc = "Giant.png"
                            imageWild = "Giant."
                            break;
                    }
                    break;

                case "Ogre"://TODO
                    systemData.system.details.species.value = "Ogre"
                    systemData.system.details.species.subspecies = ""
                    systemData.system.details.size.value = "avg"
                    switch (name) {
                        case "Ogre":
                            imageLoc = "Ogre.png"
                            imageWild = "Ogre."
                            break;

                        case "Oni":
                            imageLoc = "Oni.png"
                            imageWild = "Oni"
                            break;
                    }
                    break;
            }
            break;

        case "Goblin":
            imagePath = "goblin/"
            systemData.system.details.species.value = "Goblin"
            systemData.system.details.species.subspecies = ""
            systemData.system.details.size.value = "avg"
            switch (faction) {
                case "Clanless":
                    switch (name) {
                        case "Goblin":
                            imageLoc = "HumanoidMessarSelectFyrd.png"
                            imageWild = "Goblin."
                            traits.push(trait_size("Small"))
                            talents.push(talent_warriorBorn)
                            skills.push(skill_meleeBasic(5))
                            weapons.push(wep_spear(true))
                            break;
                    }
                    break;
            }
            break;

        case "Human":
            imagePath = "human/"
            systemData.system.details.species.value = "Human"
            systemData.system.details.species.subspecies = ""
            systemData.system.details.size.value = "avg"
            switch (faction) {
                case "Akitsudo": //TODO
                    imagePath = imagePath + "akitsudan/"
                    switch (name) {
                        case "Ashigaru Yari": //TODO
                            name = "Ashigaru"
                            imageLoc = "AshigaruYari.png"
                            imageWild = "AshigaruYari."
                            skills.push(skill_meleeBasic(5))
                            weapons.push(wep_spear(true))
                            armour.push(arm_plateOpenHelm(true))
                            armour.push(arm_leatherJack(true))
                            armour.push(arm_leatherLeggings(true))
                            break;

                        case "Ashigaru Yumi": //TODO
                            name = "Ashigaru"
                            imageLoc = "AshigaruYumi.png"
                            imageWild = "AshigaruYumi."
                            skills.push(skill_rangedBow(5))
                            weapons.push(...wep_bow(true, false, 30))
                            weapons.push(wep_dagger(true))
                            armour.push(arm_plateOpenHelm(true))
                            armour.push(arm_leatherJack(true))
                            armour.push(arm_leatherLeggings(true))
                            break;
                    }
                    break;

                case "Allaire":
                    imagePath = imagePath + "allairan/"
                    // talents.push(talent_warriorBorn)
                    switch (name) {
                        case "Arbalest": //TODO
                            imageLoc = "Crossbowman.png"
                            imageWild = "Crossbowman."
                            traits.push(trait_hardy)
                            skills.push(skill_meleeBasic(0))
                            skills.push(skill_rangedBow(15))
                            weapons.push(wep_sword(false))
                            weapons.push(wep_spear(true))
                            weapons.push(shi_shieldLarge(true))
                            armour.push(arm_plateOpenHelm(true))
                            armour.push(arm_mailShirt(true))
                            armour.push(arm_leatherJack(true))
                            armour.push(arm_leatherLeggings(true))
                            break;

                        case "Levy":
                            imageLoc = "Militia.png"
                            imageWild = "human/Militia."
                            traits.push(trait_hardy)
                            skills.push(skill_meleeBasic(5))
                            skills.push(skill_meleePolearm(5))
                            weapons.push(wep_spear(true))
                            weapons.push(shi_shield(true))
                            armour.push(arm_leatherJack(true))
                            break;

                        case "Pedite":
                            imageLoc = "Sergeant.png"
                            imageWild = "Sergeant."
                            traits.push(trait_hardy)
                            skills.push(skill_meleeBasic(15))
                            skills.push(skill_meleePolearm(15))
                            weapons.push(wep_sword(false))
                            weapons.push(wep_spear(true))
                            weapons.push(shi_shieldLarge(true))
                            armour.push(arm_plateOpenHelm(true))
                            armour.push(arm_mailCoif(true))
                            armour.push(arm_mailCoat(true))
                            armour.push(arm_mailChausses(true))
                            armour.push(arm_leatherJack(true))
                            armour.push(arm_leatherLeggings(true))
                            break;

                        case "Milite"://TODO
                            imageLoc = "ManAtArms.png"
                            imageWild = "ManAtArms."
                            talents.push(talent_warriorBorn)
                            traits.push(trait_hardy)
                            skills.push(skill_meleeBasic(25))
                            skills.push(skill_meleeCavalry(25))
                            weapons.push(wep_sword(false))
                            weapons.push(wep_lance(true))
                            weapons.push(shi_shieldLarge(true))
                            armour.push(arm_plateOpenHelm(true))
                            armour.push(arm_mailCoif(true))
                            armour.push(arm_mailCoat(true))
                            armour.push(arm_mailChausses(true))
                            armour.push(arm_leatherJack(true))
                            armour.push(arm_leatherLeggings(true))
                            break;

                        case "Knight"://TODO
                            imageLoc = "HumanoidAllairanKnight.png"
                            imageWild = "Knight."
                            talents.push(talent_warriorBorn)
                            traits.push(trait_hardy)
                            skills.push(skill_meleeBasic(30))
                            skills.push(skill_meleeCavalry(30))
                            weapons.push(wep_sword(false))
                            weapons.push(wep_lance(true))
                            weapons.push(shi_shieldLarge(true))
                            armour.push(arm_plateHelm(true))
                            armour.push(arm_mailCoif(true))
                            armour.push(arm_mailCoat(true))
                            armour.push(arm_mailChausses(true))
                            armour.push(arm_leatherJack(true))
                            armour.push(arm_leatherLeggings(true))
                            break;

                    }
                    break;

                case "Brytth": //TODO
                    imagePath = imagePath + "brytthonic/"
                    // talents.push(talent_warriorBorn)
                    switch (name) {
                        case "Arbalest": //TODO
                            imageLoc = "HumanoidAllairanCrossbowman.png"
                            imageWild = "Crossbowman."
                            traits.push(trait_hardy)
                            skills.push(skill_meleeBasic(0))
                            skills.push(skill_rangedBow(15))
                            weapons.push(wep_sword(false))
                            weapons.push(wep_spear(true))
                            weapons.push(shi_shieldLarge(true))
                            armour.push(arm_plateOpenHelm(true))
                            armour.push(arm_mailShirt(true))
                            armour.push(arm_leatherJack(true))
                            armour.push(arm_leatherLeggings(true))
                            break;
                    }
                    break;

                case "Carne": //TODO
                    imagePath = imagePath + "carne/"
                    // talents.push(talent_warriorBorn)
                    switch (name) {
                        case "Arbalest": //TODO
                            imageLoc = "HumanoidAllairanCrossbowman.png"
                            imageWild = "Crossbowman."
                            traits.push(trait_hardy)
                            skills.push(skill_meleeBasic(0))
                            skills.push(skill_rangedBow(15))
                            weapons.push(wep_sword(false))
                            weapons.push(wep_spear(true))
                            weapons.push(shi_shieldLarge(true))
                            armour.push(arm_plateOpenHelm(true))
                            armour.push(arm_mailShirt(true))
                            armour.push(arm_leatherJack(true))
                            armour.push(arm_leatherLeggings(true))
                            break;
                    }
                    break;

                case "Fomoire":
                    imagePath = imagePath + "fomorian/"
                    talents.push(trait_hardy)
                    switch (name) {
                        case "Youth"://TODO
                            imageLoc = "Youth.png"
                            imageWild = "Youth."
                            skills.push(skill_meleeBasic(5))
                            skills.push(skill_meleePolearm(5))
                            weapons.push(wep_spear(true))
                            weapons.push(shi_shieldLarge(true))
                            break;
                        case "Ceithearn"://TODO
                            imageLoc = "Ceithearn.png"
                            imageWild = "Ceithearn."
                            skills.push(skill_meleeBasic(10))
                            skills.push(skill_meleePolearm(10))
                            weapons.push(wep_spear(true))
                            weapons.push(shi_shieldLarge(true))
                            break;
                        case "Gallóglaigh"://TODO
                            imageLoc = "Galloglaigh.png"
                            imageWild = "Galloglaigh."
                            skills.push(skill_meleeBasic(10))
                            skills.push(skill_meleePolearm(10))
                            weapons.push(wep_spear(true))
                            weapons.push(shi_shieldLarge(true))
                            break;
                    }
                    break;

                case "Mycenae": //TODO
                    imagePath = imagePath + "mycenaean/"
                    // talents.push(talent_warriorBorn)
                    switch (name) {
                        case "Arbalest": //TODO
                            imageLoc = "HumanoidAllairanCrossbowman.png"
                            imageWild = "Crossbowman."
                            traits.push(trait_hardy)
                            skills.push(skill_meleeBasic(0))
                            skills.push(skill_rangedBow(15))
                            weapons.push(wep_sword(false))
                            weapons.push(wep_spear(true))
                            weapons.push(shi_shieldLarge(true))
                            armour.push(arm_plateOpenHelm(true))
                            armour.push(arm_mailShirt(true))
                            armour.push(arm_leatherJack(true))
                            armour.push(arm_leatherLeggings(true))
                            break;
                    }
                    break;

                case "Krasaheim":
                    imagePath = imagePath + "norse/"
                    talents.push(trait_hardy)
                    switch (name) {
                        case "Raider"://TODO
                            imageLoc = "HumanoidVikingRaider.png"
                            imageWild = "Raider."
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

                case "Messar":
                    imagePath = imagePath + "messan/"
                    talents.push(talent_warriorBorn)
                    switch (name) {
                        case "Archer"://TODO
                            imagePath = "human/"
                            imageLoc = "Archer.png"
                            imageWild = "Archer."
                            talents.push(talent_marksman)
                            skills.push(skill_rangedBow(10))
                            weapons.push(...wep_bow(true, false, 30))
                            weapons.push(wep_dagger(true))
                            armour.push(arm_leatherJack(true))
                            armour.push(arm_leatherLeggings(true))
                            break;

                        case "Select-Fyrd"://TODO
                            imageLoc = "SelectFyrd.png"
                            imageWild = "SelectFyrd."
                            traits.push(trait_hardy)
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

                case "Outlaw":
                    switch (name) {
                        case "Robber"://TODO
                            imageLoc = "Militia.png"
                            imageWild = "Militia."
                            traits.push(trait_hardy)
                            skills.push(skill_meleeBasic(5))
                            weapons.push(wep_club(true))
                            weapons.push(shi_shield(true))
                            break;

                        case "Brigand"://TODO
                            imageLoc = "Brigand.png"
                            imageWild = "Brigand."
                            traits.push(trait_hardy)
                            skills.push(skill_meleeBasic(10))
                            weapons.push(wep_axe(true))
                            weapons.push(shi_shield(true))
                            armour.push(arm_leatherJack(true))
                            armour.push(arm_leatherLeggings(true))
                            break;

                        case "Marauder"://TODO
                            imageLoc = "Marauder.png"
                            imageWild = "Marauder."
                            traits.push(trait_hardy)
                            skills.push(skill_meleeBasic(15))
                            weapons.push(wep_axe(true))
                            weapons.push(shi_shield(true))
                            armour.push(arm_leatherJack(true))
                            armour.push(arm_leatherLeggings(true))
                            break;

                        case "Footpad"://TODO
                            imageLoc = "Footpad.png"
                            imageWild = "Footpad."
                            traits.push(trait_hardy)
                            skills.push(skill_meleeBasic(15))
                            weapons.push(wep_axe(true))
                            weapons.push(shi_shield(true))
                            armour.push(arm_leatherJack(true))
                            armour.push(arm_leatherLeggings(true))
                            break;
                        
                        case "Mugger"://TODO
                            imageLoc = "Mugger.png"
                            imageWild = "Mugger."
                            traits.push(trait_hardy)
                            skills.push(skill_meleeBasic(15))
                            weapons.push(wep_axe(true))
                            weapons.push(shi_shield(true))
                            armour.push(arm_leatherJack(true))
                            armour.push(arm_leatherLeggings(true))
                            break;
                        
                        case "Assassin"://TODO
                            imageLoc = "Assassin.png"
                            imageWild = "Assassin."
                            traits.push(trait_hardy)
                            skills.push(skill_meleeBasic(15))
                            weapons.push(wep_axe(true))
                            weapons.push(shi_shield(true))
                            armour.push(arm_leatherJack(true))
                            armour.push(arm_leatherLeggings(true))
                            break;
                    }
                    break;

                case "Prometheus": //TODO
                    imagePath = imagePath + "promethean/"
                    // talents.push(talent_warriorBorn)
                    switch (name) {
                        case "Security": //TODO
                            imageLoc = "Security.png"
                            imageWild = "Security."
                            traits.push(trait_hardy)
                            skills.push(skill_meleeBasic(0))
                            skills.push(skill_rangedBow(15))
                            weapons.push(wep_sword(false))
                            weapons.push(wep_spear(true))
                            weapons.push(shi_shieldLarge(true))
                            armour.push(arm_plateOpenHelm(true))
                            armour.push(arm_mailShirt(true))
                            armour.push(arm_leatherJack(true))
                            armour.push(arm_leatherLeggings(true))
                            break;
                            
                        case "Rifleman": //TODO
                            imageLoc = "Rifleman.png"
                            imageWild = "Rifleman."
                            traits.push(trait_hardy)
                            skills.push(skill_meleeBasic(0))
                            skills.push(skill_rangedBow(15))
                            weapons.push(wep_sword(false))
                            weapons.push(wep_spear(true))
                            weapons.push(shi_shieldLarge(true))
                            armour.push(arm_plateOpenHelm(true))
                            armour.push(arm_mailShirt(true))
                            armour.push(arm_leatherJack(true))
                            armour.push(arm_leatherLeggings(true))
                            break;
                    }
                    break;

                case "Vindictis": //TODO
                    imagePath = imagePath + "vindictis/"
                    // talents.push(talent_warriorBorn)
                    switch (name) {
                        case "Arbalest": //TODO
                            imageLoc = "HumanoidAllairanCrossbowman.png"
                            imageWild = "Crossbowman."
                            traits.push(trait_hardy)
                            skills.push(skill_meleeBasic(0))
                            skills.push(skill_rangedBow(15))
                            weapons.push(wep_sword(false))
                            weapons.push(wep_spear(true))
                            weapons.push(shi_shieldLarge(true))
                            armour.push(arm_plateOpenHelm(true))
                            armour.push(arm_mailShirt(true))
                            armour.push(arm_leatherJack(true))
                            armour.push(arm_leatherLeggings(true))
                            break;
                    }
                    break;
            }
            break;

        case "Humanoid"://TODO
            imagePath = "humanoid/"
            switch (faction) {
                case "Harpy"://TODO
                    systemData.system.details.species.value = "Harpy"
                    systemData.system.details.species.subspecies = ""
                    systemData.system.details.size.value = "avg"
                    switch (name) {
                        case "Fomorian":
                            imageLoc = "Harpy.png"
                            imageWild = "Harpy."
                            break;
                    }
                    break;

            }
            break;

        case "Monstrosity"://TODO
            switch (name) {
                case "Basilisk":
                    systemData.system.details.species.value = "Basilisk"
                    systemData.system.details.species.subspecies = ""
                    systemData.system.details.size.value = "avg"
                    imageLoc = "Basilisk.png"
                    imageWild = "Basilisk."
                    break;
            }
            break;

        case "Scourge"://TODO
            systemData.system.details.species.value = "Scourge"
            systemData.system.details.species.subspecies = ""
            systemData.system.details.size.value = "avg"
            switch (name) {
                case "Warrior":
                    imageLoc = "Warrior.png"
                    imageWild = "Warrior."
                    break;
            }
            break;

        case "Undead"://TODO
            switch (name) {
                case "Zombie":
                    systemData.system.details.species.value = "Zombie"
                    systemData.system.details.species.subspecies = ""
                    systemData.system.details.size.value = "avg"
                    imageLoc = "Zombie.png"
                    imageWild = "Zombie."
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
    systemData.system.characteristics.dex.initial = NPCCharacteristics[species.toLowerCase()][name.toLowerCase()][6]
    systemData.system.characteristics.int.initial = NPCCharacteristics[species.toLowerCase()][name.toLowerCase()][7]
    systemData.system.characteristics.wp.initial = NPCCharacteristics[species.toLowerCase()][name.toLowerCase()][8]
    systemData.system.characteristics.fel.initial = NPCCharacteristics[species.toLowerCase()][name.toLowerCase()][9]
    systemData.system.status.wounds.value = NPCCharacteristics[species.toLowerCase()][name.toLowerCase()][10]
    systemData.system.status.wounds.max = NPCCharacteristics[species.toLowerCase()][name.toLowerCase()][10]
    systemData.system.details.move.value = NPCCharacteristics[species.toLowerCase()][name.toLowerCase()][11]
    // systemData.system.fate.max = NPCCharacteristics[gangConst][name.toLowerCase()][11]
    // systemData.system.fate.value = NPCCharacteristics[gangConst][name.toLowerCase()][11]
    // systemData.system.size = NPCCharacteristics[gangConst][name.toLowerCase()][12].toString()
    //Specialist
    if (["Troop", "Ganger", "Specialist"].includes(ringRank) && ["Eviscerator", "Flamer", "Plasma Pistol", "Plasma Gun"].includes(weapon)) {

    }
    return {
        "folder": "muy7xy93oLOlDKP9",
        "name": `${nameProp} ${weapon && ("w/ " + weapon + " ")}(${ringRank} ${threat})`,
        "type": "creature",
        "img": "modules/memoirs-of-grund/assets/actors/" + imagePath + "THUMBNAIL_" + imageLoc,
        ...systemData,
        ...WFRP4eRings(ringRank || "Brass", name, "modules/memoirs-of-grund/assets/tokens/" + imagePath + imageWild + "*", size),
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