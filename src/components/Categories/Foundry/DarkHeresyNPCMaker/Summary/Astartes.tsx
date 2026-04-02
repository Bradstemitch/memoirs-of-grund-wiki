import { Rings } from "../Token/TokenRing"
import { talent_bulgingBiceps, talent_crushingBlow, talent_hardy, talent_ironJaw, talent_trueGrit } from "../Traits/Talents"
import { trait_brutalCharge, trait_sturdy, trait_unnaturalStrength, trait_unnaturalToughness } from "../Traits/Traits"
import { NPCStats } from "../DH2eDefault"
import { NPCCharacteristics } from "./00DHStats"

const gang= 'astartes'

export function AstartesPowerArmour(chapter: string, weapon: string, threat: number) {
    const name = 'powerArmour'
    let traits = {
        trait_brutalCharge,
        trait_sturdy,
        ...trait_unnaturalStrength(),
        trait_unnaturalToughness,
    }
    let talents = {
        talent_bulgingBiceps,
        talent_crushingBlow,
        talent_hardy,
        talent_ironJaw,
        talent_trueGrit,
    }

    function imageLoc(chapter: string) {
        switch (chapter) {
            case "Word Bearer":
                return "HumanChaosTrooperLasgun1.png"
        }
    }

    function imageWild(chapter: string) {
        switch (chapter) {
            case "Word Bearer":
                return "HumanChaosTrooperLasgun1.png"
        }
    }

    let systemData = NPCStats
        systemData.system.characteristics.weaponSkill.base =    NPCCharacteristics[gang][name][0]
        systemData.system.characteristics.ballisticSkill.base = NPCCharacteristics[gang][name][1]
        systemData.system.characteristics.strength.base =       NPCCharacteristics[gang][name][2]
        systemData.system.characteristics.toughness.base =      NPCCharacteristics[gang][name][3]
        systemData.system.characteristics.agility.base =        NPCCharacteristics[gang][name][4]
        systemData.system.characteristics.intelligence.base =   NPCCharacteristics[gang][name][5]
        systemData.system.characteristics.perception.base =     NPCCharacteristics[gang][name][6]
        systemData.system.characteristics.willpower.base =      NPCCharacteristics[gang][name][7]
        systemData.system.characteristics.fellowship.base =     NPCCharacteristics[gang][name][8]
        systemData.system.characteristics.influence.base =      NPCCharacteristics[gang][name][9]
        systemData.system.wounds.max =      NPCCharacteristics[gang][name][10]
        systemData.system.wounds.value =    NPCCharacteristics[gang][name][10]
        systemData.system.fate.max =        NPCCharacteristics[gang][name][11]
        systemData.system.fate.value =      NPCCharacteristics[gang][name][11]
        systemData.system.size =            NPCCharacteristics[gang][name][12].toString()

    systemData.system.characteristics.strength.unnatural = 4
    systemData.system.characteristics.toughness.unnatural = 4

    systemData.system.skills.athletics.advance = "1"
    systemData.system.skills.dodge.advance = "1"
    systemData.system.skills.survival.advance = "2"
    systemData.system.skills.techUse.advance = "1"
    systemData.system.skills.operate.specialities.surface.advance = 2
    systemData.system.skills.operate.specialities.surface.taken = true


    return {
        "folder": "i9T3WbYPTw5zOyyo",
        "name": `${chapter} Astartes (${threat})`,
        "type": "npc",
        "img": "modules/40k-rpg-addons/assets/tokens/" + imageLoc(weapon),
        ...systemData,
        ...Rings("Troop", "Astartes", "modules/40k-rpg-addons/assets/tokens/" + imageWild(weapon), 2.2),
        "items": [
            traits,
            talents,
        ],
    }
}