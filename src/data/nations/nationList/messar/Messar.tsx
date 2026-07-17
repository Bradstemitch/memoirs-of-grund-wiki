import { NOLA_THESOTIData } from "../../../characters/NOLA_THESOTI";
import { OBERON_VALERIANData } from "../../../characters/OBERON_VALERIAN";
import { MessarMessactData } from "../../../locations/cities/messarMessact";
import { DraconicPantheonData } from "../../../religions/draconicPantheon";
import { MessanHeptarchyAtreaData } from "./MessarAtrea";
import { MessanHeptarchyBabaccaData } from "./MessarBabaca";
import { MessanHeptarchyBreccaData } from "./MessarBrecca";
import { MessanHeptarchyEthyeData } from "./MessarEthye";
import { MessanHeptarchyMaarraData } from "./MessarMaarra";
import { MessanHeptarchyNeaxeData } from "./MessarNeaxe";
import { MessanHeptarchySeaxeData } from "./MessarSeaxe";
import { MessanHeptarchySudarData } from "./MessarSudar";
import { MessanHeptarchyTrifeData } from "./MessarTrife";
import { MessanHeptarchyWeaxeData } from "./MessarWeaxe";
import Emblem from "../../../../images/messarEmblem.png"
import { MessarVillenData } from "../../../locations/cities/messarVillen";
import { messarVergrisData } from "../../../locations/cities/messarVergris";
import { MessarSylvasteadData } from "../../../locations/cities/messarSylvastead";
import { MessarCreichData } from "../../../locations/cities/messarCreich";
import { MessarStanshawData } from "../../../locations/cities/messarStanshaw";
import { MessarPoltonData } from "../../../locations/cities/messarPolton";
import { MessarNorcesterData } from "../../../locations/cities/messarNorcester";
import { MessarStanportData } from "../../../locations/cities/messarStanport";
import { MessarAstboroughData } from "../../../locations/cities/messarAstborough";
import { MessarDaleData } from "../../../locations/cities/messarDale";
import { MessarDoltonData } from "../../../locations/cities/messarDolton";
import { MessarBlensterData } from "../../../locations/cities/messarBlenster";
import { MessarSutportData } from "../../../locations/cities/messarSutport";
import { MessarWesfordData } from "../../../locations/cities/messarWesford";

export const MessanHeptarchyName = {
    "name": "Messan Heptarchy",
    "fileName": "messar",
}

export const MessanHeptarchyInfo = {
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
                MessarMessactData
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
    }
}

export const MessanHeptarchyNotables = {
    "notables": [
        {
            "type": "High Kings / Queens",
            "list": [
                {
                    "person": OBERON_VALERIANData,
                    "date": "982 CE - 983 CE"
                },
                {
                    "person": NOLA_THESOTIData,
                    "date": "983 CE - Present"
                },
            ]
        },
    ]
}

export const MessanHeptarchyProvinces = {
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
                MessanHeptarchyEthyeData,
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
    ]
}

export const MessanHeptarchyLocations = {
    "locations": [
        {
            "type": "Cities",
            "list": [
                MessarMessactData,
                // Sylvastead(woodcutters and main canal user), 
                MessarSylvasteadData,
                // Vergris(former mining town),
                messarVergrisData,
                MessarVillenData,
                // Creich(Mountain Springs),
                MessarCreichData,
                // Stanshaw(in moutain surrounded by dense forest), 
                MessarStanshawData,
                // Polton(built next to the lake),
                MessarPoltonData,
                // Norcester(northern barricade),
                MessarNorcesterData,
                // Stanport(costal town), 
                MessarStanportData,
                // Astborough(fort town near brytth),
                MessarAstboroughData,
                // Dale(valley city),
                MessarDaleData,
                // Dolton(farming community on canal),
                MessarDoltonData,
                // Blenster, 
                MessarBlensterData,
                // Sutport(large port town), 
                MessarSutportData,
                // wesford(bridge city across the frontier)
                MessarWesfordData,
            ]
        }
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
export const MessanHeptarchyData = {
    ...MessanHeptarchyName,
    "tags": [
        "Messar"
    ],
    "emblem": Emblem,
    "pronunciation": "May - sar",
    ...MessanHeptarchyInfo,
    ...MessanHeptarchyNotables,
    ...MessanHeptarchyProvinces,
    ...MessanHeptarchyLocations
}

export const MessarList = [
    MessanHeptarchyData,
    MessanHeptarchyAtreaData,
    MessanHeptarchyBreccaData,
    MessanHeptarchyEthyeData,
    MessanHeptarchyNeaxeData,
    MessanHeptarchySeaxeData,
    MessanHeptarchyTrifeData,
    MessanHeptarchyWeaxeData,
    MessanHeptarchyBabaccaData,
    MessanHeptarchyMaarraData,
    MessanHeptarchySudarData,
]
