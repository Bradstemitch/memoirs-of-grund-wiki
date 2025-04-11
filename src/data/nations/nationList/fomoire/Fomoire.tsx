import { FomoireAnundingList } from "./FomoireAnunding"
import { FomoireCionaoithList } from "./FomoireCionaoith"
import { FomoireHadhogungList } from "./FomoireHadhogung"
import { FomoireHermundingList } from "./FomoireHermunding"
import { FomoireMortungList } from "./FomoireMortung"
import { FomoireMuireannList } from "./FomoireMuireann"
import { FomoireOtryggundList } from "./FomoireOtryggund"
import { FomoireYriingList } from "./FomoireYriing"

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
        "emblem": "fomoire.png",
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
        "locations": [
            FomorianPettyKingdoms
        ],
        "summary": "Temeria is one of the northern kingdoms, lying south of the Pontar river. Its neighbors are Redania, Kerack, Kaedwen, Aedirn, Mahakam, Lower Sodden, and Cidaris. After the first and second wars, Temeria profited the most out of the defeat of Nilfgaard, expanding its borders as far south as Angren and Riverdell, reaching the Amell mountains. But the Kingdom also received a heavy blow regarding its economy, which forced it to buy goods from their southern neighbor. "
    },
    ...FomorianPettyKingdoms,
]