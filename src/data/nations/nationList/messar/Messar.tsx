import { NolaThesotiData } from "../../../characters/nolaThesoti";
import { OberonValerianData } from "../../../characters/oberonValerian";
import { MessactData } from "../../../locations/cities/messarMessact";
import { DraconicPantheonData } from "../../../religions/draconicPantheon";
import { MessanHeptarchyAtreaData } from "./MessarAtrea";
import { MessanHeptarchyBabaccaData } from "./MessarBabaca";
import { MessanHeptarchyBreccaData } from "./MessarBrecca";
import { MessanHeptarchyEathyeData } from "./MessarEathye";
import { MessanHeptarchyMaarraData } from "./MessarMaarra";
import { MessanHeptarchyNeaxeData } from "./MessarNeaxe";
import { MessanHeptarchySeaxeData } from "./MessarSeaxe";
import { MessanHeptarchySudarData } from "./MessarSudar";
import { MessanHeptarchyTrifeData } from "./MessarTrife";
import { MessanHeptarchyWeaxeData } from "./MessarWeaxe";
import Emblem from "../../../../images/messarEmblem.png"

export const MessanHeptarchyData = {
    "name": "Messan Heptarchy",
    "fileName": "messar",
    "tags": [
        "Messar"
    ],
    "emblem": Emblem,
    "pronunciation": "May - sar",
    "info": {
        "basic": {
            "variations": [
                "Messar"
            ],
            "government": [
                "Elective Monarchy"
            ],
            "status": [
                "Kingdom"
            ],
            "ruler": [
                "High King / Queen of Messar"
            ],
            "founded": [
                "375 CE"
            ],
            "area": [
                "~210,000 sq mi"
            ],
            "population": [
                "~9,000,000 (~40/sq. mi)"
            ],
        },
        "government": {
            "headOfState": [
                "High King / Queen",
                "King’s Thegn (regent)"
            ],
            "headOfGovernment": [
                "Heptarchy"
            ],
            "commander": [
                "High-Thegn of Messar"
            ],
            "military": [
                "Fyrd"
            ],
            "intelligence": [
                "The Daughters"
            ],
        },
        "social": {
            "capital": [
                MessactData
            ],
            "currency": [

            ],
            "demonym": [
                "Messan"
            ],
            "language": [
                "Aeaxon"
            ],
            "religion": [
                DraconicPantheonData
            ]
        }
    },

    "notables": [
        {
            "type": "High Kings / Queens",
            "list": [
                {
                    "person": OberonValerianData,
                    "date": "982 CE - 983 CE"
                },
                {
                    "person": NolaThesotiData,
                    "date": "983 CE - Present"
                },
            ]
        },
    ],

    "provinces": [
        {
            "type": "Main",
            "list": [
                MessanHeptarchyAtreaData,
            ]
        },
        {
            "type": "Heptarchs",
            "list": [
                MessanHeptarchyBreccaData,
                MessanHeptarchyEathyeData,
                MessanHeptarchyNeaxeData,
                MessanHeptarchySeaxeData,
                MessanHeptarchyTrifeData,
                MessanHeptarchyWeaxeData,
            ]
        },
        {
            "type": "Vassals",
            "list": [
                MessanHeptarchyBabaccaData,
                MessanHeptarchyMaarraData,
                MessanHeptarchySudarData,
            ]
        }
    ],

    "locations": [
        // {
        //     "type": "Cities",
        //     "list": Messact Sylvastead (woodcutters and main canal user), Verdigris (former mining town), Creighwich (Mountain Springs), Stanshaw (in moutain surrounded by dense forest), Polton (built next to the lake), Norcester (northern barricade), Stanport (costal town), Astborough (fort town near brytth), Dale (valley city), Dolton (farming community on canal), Blenster, Sutport (large port town), wesford (bridge city across the frontier)
        // },
        // {
        //     "type": "Other",
        //     "list": Shadows Refuge, Solitude Portal, 
        // },
        // {
        //     "type": "Prometheus Facilities",
        //     "list": P-262, P-618
        // },
    ],
}

export const MessarList = [
    MessanHeptarchyData,
    MessanHeptarchyAtreaData,
    MessanHeptarchyBreccaData,
    MessanHeptarchyEathyeData,
    MessanHeptarchyNeaxeData,
    MessanHeptarchySeaxeData,
    MessanHeptarchyTrifeData,
    MessanHeptarchyWeaxeData,
    MessanHeptarchyBabaccaData,
    MessanHeptarchyMaarraData,
    MessanHeptarchySudarData,
]