import { WFRP4eRings } from "../Token/WFRP4eTokenRing"
import { NPCStats } from "../WFRP4eDefault"
import { NPCCharacteristics } from "./WFRP4eNPCStats"
import { trait_hardy } from "../Traits/WFRP4eTraits"
import { wep_spear } from "../Items/wep_polearm"
import { shi_shield, shi_shieldLarge } from "../Items/wep_shield"
import { talent_marksman, talent_warriorBorn } from "../Traits/WFRP4eTalents"
import { skill_meleeBasic, skill_meleePolearm, skill_rangedBow } from "../Traits/WFRP4eSkills"
import { arm_plateOpenHelm } from "../Items/arm-plate"
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
        case "Goblin":
            systemData.system.details.species.value = "Goblin"
            systemData.system.details.species.subspecies = ""
            systemData.system.details.size.value = "avg"
            switch (faction) {
                case "Clanless":
                    switch (name) {
                        case "Goblin":
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
            }
            break;
        case "Human":
            systemData.system.details.species.value = "Human"
            systemData.system.details.species.subspecies = ""
            systemData.system.details.size.value = "avg"
            switch (faction) {
                case "Allaire":
                    // talents.push(talent_warriorBorn)
                    switch (name) {
                        case "Pedite":
                            imageLoc = "HumanoidAllairanSergeant.png"
                            imageWild = "Messar/HumanoidAllairanSergeant.png"
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
                    }
                    break;
                case "Fomoire":
                    talents.push(trait_hardy)
                    switch (name) {
                        case "Youth":
                            imageLoc = "HumanoidFomorianYouth.png"
                            imageWild = "Fomoire/HumanoidFomorianYouth.png"
                            skills.push(skill_meleeBasic(5))
                            skills.push(skill_meleePolearm(5))
                            weapons.push(wep_spear(true))
                            weapons.push(shi_shieldLarge(true))
                            break;
                        case "Ceithearn":
                            imageLoc = "HumanoidFomorianCeithearn.png"
                            imageWild = "Fomoire/HumanoidFomorianCeithearn.png"
                            skills.push(skill_meleeBasic(10))
                            skills.push(skill_meleePolearm(10))
                            weapons.push(wep_spear(true))
                            weapons.push(shi_shieldLarge(true))
                            break;
                        case "Gallóglaigh":
                            imageLoc = "HumanoidFomorianGall%C3%B3glaigh.png"
                            imageWild = "Fomoire/HumanoidFomorianGall%C3%B3glaigh.png"
                            skills.push(skill_meleeBasic(10))
                            skills.push(skill_meleePolearm(10))
                            weapons.push(wep_spear(true))
                            weapons.push(shi_shieldLarge(true))
                            break;
                    }
                    break;
                case "Krasaheim":
                    talents.push(trait_hardy)
                    switch (name) {
                        case "Raider":
                            imageLoc = "HumanoidVikingRaider.png"
                            imageWild = "Krasaheim/HumanoidVikingRaider.png"
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
                    talents.push(talent_warriorBorn)
                    switch (name) {
                        case "Archer":
                            imageLoc = "HumanoidHumanArcher.png"
                            imageWild = "Messar/HumanoidHumanArcher.png"
                            talents.push(talent_marksman)
                            skills.push(skill_rangedBow(10))
                            weapons.push(...wep_bow(true, false, 30))
                            weapons.push(wep_dagger(true))
                            armour.push(arm_leatherJack(true))
                            armour.push(arm_leatherLeggings(true))
                            break;
                        case "Select-Fyrd":
                            imageLoc = "HumanoidMessarSelectFyrd.png"
                            imageWild = "Messar/HumanoidMessarSelectFyrd.png"
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
                        case "Robber":
                            imageLoc = "HumanoidHumanMilitia.png"
                            imageWild = "Messar/HumanoidHumanMilitia.png"
                            traits.push(trait_hardy)
                            skills.push(skill_meleeBasic(5))
                            weapons.push(wep_club(true))
                            weapons.push(shi_shield(true))
                            break;
                        case "Brigand":
                            imageLoc = "HumanoidHumanBrigand.png"
                            imageWild = "Messar/HumanoidHumanBrigand.png"
                            traits.push(trait_hardy)
                            skills.push(skill_meleeBasic(10))
                            weapons.push(wep_axe(true))
                            weapons.push(shi_shield(true))
                            armour.push(arm_leatherJack(true))
                            armour.push(arm_leatherLeggings(true))
                            break;
                        case "Marauder":
                            imageLoc = "HumanoidHumanMarauder.png"
                            imageWild = "Messar/HumanoidHumanMarauder.png"
                            traits.push(trait_hardy)
                            skills.push(skill_meleeBasic(15))
                            weapons.push(wep_axe(true))
                            weapons.push(shi_shield(true))
                            armour.push(arm_leatherJack(true))
                            armour.push(arm_leatherLeggings(true))
                            break;
                    }
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