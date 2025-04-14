import { FomoireAnundingList } from "./FomoireAnunding"
import { FomoireCionaoithList } from "./FomoireCionaoith"
import { FomoireHadhogungList } from "./FomoireHadhogung"
import { FomoireHermundingList } from "./FomoireHermunding"
import { FomoireMortungList } from "./FomoireMortung"
import { FomoireMuireannList } from "./FomoireMuireann"
import { FomoireOtryggundList } from "./FomoireOtryggund"
import { FomoireYriingList } from "./FomoireYriing"
import Emblem from "../../../../images/fomoire.png"


const FomorianPettyKingdoms: any = [
    ...FomoireAnundingList,
    ...FomoireCionaoithList,
    ...FomoireHadhogungList,
    ...FomoireHermundingList,
    ...FomoireMortungList,
    ...FomoireMuireannList,
    ...FomoireOtryggundList,
    ...FomoireYriingList,
]

export const FomoireList = [
    {
        'name': 'Fomóiri Clans',
        "fileName": "fomoire",
        "tags": [
            "Fomori"
        ],
        "emblem": Emblem,
        "pronunciation": "ASS - erra",
        "info": {
            "basic": {
                "area": [
                    "~440,000 sq mi"
                ],
                "population": [
                    "~17,000,000 (~40/sq. mi)"
                ],
                "founded": [
                    "-97CE"
                ],
                "government": [
                    "Hereditary Monarchy"
                ],
                "ruler": [
                    "Imperator Allairus"
                ],
                "status": [
                    "Tribal"
                ],
                "variations": [
                    "Acre"
                ]
            },
            "government": {
                "commander": [
                    "High-Thegn of Messar"
                ],
                "headOfGovernment": [
                    "Heptarchy"
                ],
                "intelligence": [
                    "The Daughters"
                ],
                "military": [
                    "Fyrd"
                ],
                "headOfState": [
                    "Imperator Allairus",
                    "King’s Thegn (regent)"
                ]
            },
            "social": {
                "capital": [
                    "Allaire", "Ackon"
                ],
                "currency": [

                ],
                "demonym": [
                    "Allairan"
                ],
                "language": [
                    "Allairan"
                ],
                "religion": [
                    "Draconic Pantheon"
                ]
            }
        },
    },
    ...FomorianPettyKingdoms,
]