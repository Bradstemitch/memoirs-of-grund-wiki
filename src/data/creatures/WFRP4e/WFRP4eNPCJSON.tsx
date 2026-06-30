import React from 'react';
import { WFRP4eNPC } from './Summary/WFRP4eNPC';
export function WFRP4eNPCJSON(props: any) {
    const creature = {
        // ...WFRP4eNPC("Goblin", "Clanless", "Goblin", "", 3, "Silver"),

    }

    const json = {
        ...WFRP4eNPC(props.species, props.faction, props.name, props.weapon, props.threat, props.rank),
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
