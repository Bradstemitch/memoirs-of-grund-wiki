import React from 'react';
import { WFRP4eNPC } from './Summary/WFRP4eNPC';
function WFRP4eNPCJSON(props: any) {
    const creature = {
        // ...WFRP4eNPC("Goblin", "Clanless", "Goblin", "", 3, "Silver"),
        //----Outlaw
        // ...WFRP4eNPC("Human", "Outlaw", "Mugger", "", 2, "Brass"),
        // ...WFRP4eNPC("Human", "Outlaw", "Assassin", "", 1, "Gold"),
        // ...WFRP4eNPC("Human", "Outlaw", "Robber", "", 1, "Brass"),
        // ...WFRP4eNPC("Human", "Outlaw", "Brigand", "", 2, "Brass"),
        // ...WFRP4eNPC("Human", "Outlaw", "Marauder", "", 4, "Brass"),
        //----Allaire
        // ...WFRP4eNPC("Human", "Allaire", "Levy", "", 1, "Silver"),
        ...WFRP4eNPC("Human", "Allaire", "Pedite", "", 3, "Silver"),
        // ...WFRP4eNPC("Human", "Allaire", "Milite", "", 5, "Silver"),
        // ...WFRP4eNPC("Human", "Allaire", "Knight", "", 2, "Gold"),
        //----Krasaheim
        //----Messar
        // ...WFRP4eNPC("Human", "Messar", "Archer", "", 3, "Silver"),
        // ...WFRP4eNPC("Human", "Messar", "Fyrd", "", 5, "Brass"),
        // ...WFRP4eNPC("Human", "Messar", "Select-Fyrd", "", 1, "Silver"),
        // ...WFRP4eNPC("Human", "Messar", "Huscarl", "", 4, "Silver"),
        // ...WFRP4eNPC("Giant", "Giant", "Ogre", "", 4, "Silver"),


    }

    const json = {
        ...creature,
        "effects": [],
        "flags": {},
        "_stats": {
            "compendiumSource": "Actor.d5GbHkPF1uKD8KwX",
            "duplicateSource": "Actor.d5GbHkPF1uKD8KwX",
            "exportSource": {
                "worldId": "compendium-project-whf4e",
                "uuid": "Actor.xJanPH2o4pCiNMvW",
                "coreVersion": "13.351",
                "systemId": "wfrp4e",
                "systemVersion": "9.4.1"
            },
            "coreVersion": "13.351",
            "systemId": "wfrp4e",
            "systemVersion": "9.3.2",
            "createdTime": 1764502127183,
            "modifiedTime": 1764502279802,
            "lastModifiedBy": "khhY7fuxf56JOp5M"
        },
        "_id": "xJanPH2o4pCiNMvW",
        "ownership": {
            "default": 0
        }
    }


    return json
}

export default WFRP4eNPCJSON;
