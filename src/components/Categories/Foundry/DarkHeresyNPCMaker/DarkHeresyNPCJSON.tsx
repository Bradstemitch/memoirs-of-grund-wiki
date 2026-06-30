import React from 'react';
import { DarkHeresyNPC } from './Summary/DarkHeresyNPC';
function DarkHeresyNPCJSON(props: any) {
    const creature = {
        // ...DarkHeresyNPC("Blood Pact", "Trooper", "Lasgun", 9, "Troop"),
        // ...DarkHeresyNPC("Blood Pact", "Brigade", "Hot-Shot Lasgun", 12, "Elite"),
        //Cawdor
        // ...DarkHeresyNPC("Cawdor", "Bonepicker", "Pistol", 4, "Juve"),
        // ...DarkHeresyNPC("Cawdor", "Bonepicker", "Pistols", 4, "Juve"),
        // ...DarkHeresyNPC("Cawdor", "Brethren", "Autogun", 7, "Ganger"),
        // ...DarkHeresyNPC("Cawdor", "Brethren", "Pistol", 7, "Ganger"),
        // ...DarkHeresyNPC("Cawdor", "Brethren", "Pistols", 7, "Ganger"),
        // ...DarkHeresyNPC("Cawdor", "Firebrand", "Autogun", 7, "Ganger"),
        // ...DarkHeresyNPC("Cawdor", "Word-Keeper", "Greataxe", 5),
        // ...DarkHeresyNPC("Cawdor Redemptionist", "Brethren", "Autogun", 7, "Ganger"),
        // ...DarkHeresyNPC("Cawdor Redemptionist", "Brethren", "Pistols", 7, "Ganger"),
        // ...DarkHeresyNPC("Cawdor Redemptionist", "Brethren", "Shotgun", 7, "Ganger"),
        // ...DarkHeresyNPC("Cawdor Redemptionist", "Brethren", "Flamer", 8, "Specialist"),
        // ...DarkHeresyNPC("Cawdor Redemptionist", "Brethren", "Eviscerator", 8, "Specialist"),
        // ...DarkHeresyNPC("Cawdor Redemptionist", "Redemptor", "Chainaxe", 25, "Master"),
        //Escher
        // ...DarkHeresyNPC("Escher", "Little Sister", "Pistol", 4, "Juve"),
        // ...DarkHeresyNPC("Escher", "Little Sister", "Pistols", 4, "Juve"),
        // ...DarkHeresyNPC("Escher", "Sister", "Autogun", 7, "Ganger"),
        // ...DarkHeresyNPC("Escher", "Sister", "Lasgun", 7, "Ganger"),
        // ...DarkHeresyNPC("Escher", "Sister", "Pistol", 7, "Ganger"),
        // ...DarkHeresyNPC("Escher", "Sister", "Pistols", 7, "Ganger"),
        // ...DarkHeresyNPC("Escher", "Sister", "Flamer", 10, "Specialist"),
        // ...DarkHeresyNPC("Escher", "Matriarch", "Plasma Pistol", 25, "Elite"),
        // ...DarkHeresyNPC("Escher", "Death Maiden", "", 33, "Elite"),
        // ...DarkHeresyNPC("Escher", "Queen", "Bolter", 33, "Master"),
        //Goliath
        // ...DarkHeresyNPC("Goliath", "Bruiser", "Chainaxe", 7),
        // ...DarkHeresyNPC("Goliath", "Bruiser", "Grenade Launcher", 7),
        // ...DarkHeresyNPC("Goliath", "Bruiser", "Stub Cannon", 6),
        // ...DarkHeresyNPC("Goliath", "Stimmer", "Chainaxe", 25),
        //Orlock
        // ...DarkHeresyNPC("Orlock", "Greenhorn", "Pistol", 4, "Juve"),
        // ...DarkHeresyNPC("Orlock", "Greenhorn", "Pistols", 4, "Juve"),
        // ...DarkHeresyNPC("Orlock", "Greenhorn", "Shotgun", 5, "Juve"),
        // ...DarkHeresyNPC("Orlock", "Gunner", "Autogun", 7, "Ganger"),
        // ...DarkHeresyNPC("Orlock", "Gunner", "Pistol", 7, "Ganger"),
        // ...DarkHeresyNPC("Orlock", "Gunner", "Pistols", 7, "Ganger"),
        // ...DarkHeresyNPC("Orlock", "Gunner", "Shotgun", 7, "Ganger"),
        // ...DarkHeresyNPC("Orlock", "Road Sergeant", "Heavy Bolter", 14, "Elite"),
        // ...DarkHeresyNPC("Orlock", "Road Sergeant", "Chainsword", 14, "Elite"),
        // ...DarkHeresyNPC("Orlock", "Road Captain", "Powerfist", 30, "Master"),
        //Van Saar
        ...DarkHeresyNPC("Van Saar", "Subtek", "Lasgun", 6, "Juve"),
        // ...DarkHeresyNPC("Van Saar", "Tek", "Lasgun", 7, "Ganger"),
        // ...DarkHeresyNPC("Van Saar", "Augmek", "Lasgun", 22, "Elite"),
        //Corpse Grinder Cults
        // ...DarkHeresyNPC("Corpse Grinder Cults", "Skinner", "", 8, "Ganger"),
        // ...DarkHeresyNPC("Corpse Grinder Cults", "Cutter", "", 18, "Elite"),
        // ...DarkHeresyNPC("Corpse Grinder Cults", "Butcher", "", 18, "Master"),
        //Brutes
        // ...DarkHeresyNPC("Brute", "Ambot", "", 22, "Elite"),
        //Astartes
        // ...DarkHeresyNPC("Astartes", "Word Bearer Legionary", "", 20, "Elite"),
        //Orks
        // ...DarkHeresyNPC("Ork", "Kommando Boy", "", 20, "Elite"),
        // ...DarkHeresyNPC("Ork", "Kommando Boy", "Sniper", 10, "Elite"),
        // ...DarkHeresyNPC("Ork", "Kommando Boy", "Choppa", 10, "Elite"),
        // ...DarkHeresyNPC("Ork", "Kommando Boy", "Burna", 10, "Elite"),
        // ...DarkHeresyNPC("Ork", "Kommando Boy", "Shoota", 10, "Elite"),
        // ...DarkHeresyNPC("Ork", "Kommando Boy", "Rokkit", 10, "Elite"),
        // ...DarkHeresyNPC("Ork", "Kommando Nob", "", 20, "Elite"),
        //Tyranids
        // ...DarkHeresyNPC("Tyranid", "Genestealer", "", 16, "Elite"),
        // ...DarkHeresyNPC("Bounty Hunter", "Harvest Lord", "", 33, "Master"),
    }

    const json = {
        ...creature,
        "effects": [],
        "flags": {},
        "_stats": {
            "compendiumSource": null,
            "duplicateSource": null,
            "exportSource": {
                "worldId": "hive-arcos-dh",
                "uuid": "Actor.lRGkAX3SgYwkZBUD",
                "coreVersion": "13.351",
                "systemId": "dark-heresy-2nd",
                "systemVersion": "1.8.1"
            },
            "coreVersion": "13.351",
            "systemId": "dark-heresy-2nd",
            "systemVersion": "1.8.1",
            "createdTime": 1770156659103,
            "modifiedTime": 1770231216386,
            "lastModifiedBy": "0y7rGeV1OEmD18HE"
        },
        "ownership": {
            "default": 0
        }
    }

    return json
}

export default DarkHeresyNPCJSON;
