import { MessarAtreaList } from "./MessarAtrea";
import { MessarBreccaList } from "./MessarBrecca";
import { MessarEathyeList } from "./MessarEathye";
import { MessarNeaxeList } from "./MessarNeaxe";
import { MessarSeaxeList } from "./MessarSeaxe";
import { MessarTrifeList } from "./MessarTrife";
import { MessarWeaxeList } from "./MessarWeaxe";

const MessanPettyKingdoms = [
    ...MessarAtreaList,
    ...MessarBreccaList,
    ...MessarEathyeList,
    ...MessarNeaxeList,
    ...MessarSeaxeList,
    ...MessarTrifeList,
    ...MessarWeaxeList,
]

export const MessarList = [
    {
        "name": "Messan Heptarchy",
        "fileName": "messar",
        "tags": [
            "Messar"
        ],
        "emblem": "messarEmblem.png",
        "pronunciation": "ASS - erra",
        "info": {
            "basic": {
                "area": [
                    "~210,000 sq mi"
                ],
                "population": [
                    "~9,000,000 (~40/sq. mi)"
                ],
                "founded": [
                    "375CE"
                ],
                "government": [
                    "Elective Monarchy"
                ],
                "ruler": [
                    "High King / Queen of Messar"
                ],
                "status": [
                    "Kingdom"
                ],
                "variations": [
                    "Messar"
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
                    "High King / Queen",
                    "King’s Thegn (regent)"
                ]
            },
            "social": {
                "capital": [
                    "Messact"
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
                    "Draconic Pantheon"
                ]
            }
        },
        "locations": [
            MessanPettyKingdoms
        ],
        "summary": "Temeria is one of the northern kingdoms, lying south of the Pontar river. Its neighbors are Redania, Kerack, Kaedwen, Aedirn, Mahakam, Lower Sodden, and Cidaris. After the first and second wars, Temeria profited the most out of the defeat of Nilfgaard, expanding its borders as far south as Angren and Riverdell, reaching the Amell mountains. But the Kingdom also received a heavy blow regarding its economy, which forced it to buy goods from their southern neighbor. "
    },
    ...MessanPettyKingdoms
]