import { BrytthAlbionList } from "./BrytthAlbion"
import { BrytthCambriaList } from "./BrytthCambria"
import Emblem from "../../../../images/brytth.png"

const BrytthonPettyKingdoms: any = [
    ...BrytthAlbionList,
    ...BrytthCambriaList,
]

export const BrytthList = [
    {
        "name": "Kingdom of Brytth",
        "fileName": "brytth",
        "tags": [
            "Brytth"
        ],
        "emblem": Emblem,
        "pronunciation": "Bree - th",
        "info": {
            "basic": {
                "area": [
                    "~440,000 sq mi"
                ],
                "population": [
                    "~17,000,000 (~40/sq. mi)"
                ],
                "founded": [
                    "43 CE"
                ],
                "government": [
                    "Council Regency"
                ],
                "ruler": [
                    ""
                ],
                "status": [
                    "Kingdom"
                ],
                "variations": [
                    ""
                ]
            },
            "government": {
                "commander": [
                    ""
                ],
                "headOfGovernment": [
                    "King / Queen",
                    "Round Table of Camelot"
                ],
                "intelligence": [
                    ""
                ],
                "military": [
                    "Brytthonic Legion"
                ],
                "headOfState": [
                    "King / Queen"
                ]
            },
            "social": {
                "capital": [
                    "Camelot (~45,000)"
                ],
                "currency": [
                    "Denarii"
                ],
                "demonym": [
                    "Brytthon"
                ],
                "language": [
                    "Brytthonic"
                ],
                "religion": [
                    "Celtic Paganism"
                ]
            }
        },
        "summary": [
            "Temeria is one of the northern kingdoms, lying south of the Pontar river. Its neighbors are Redania, Kerack, Kaedwen, Aedirn, Mahakam, Lower Sodden, and Cidaris. After the first and second wars, Temeria profited the most out of the defeat of Nilfgaard, expanding its borders as far south as Angren and Riverdell, reaching the Amell mountains. But the Kingdom also received a heavy blow regarding its economy, which forced it to buy goods from their southern neighbor. "
        ],
        "notables": [
            {
                "type": "Governor",
                "list": [
                    {
                        "name": "Marcus Decimus Libanius Brytthanicus",
                        "date": "43 CE -> 45 CE"
                    },
                    {
                        "name": "Unknown",
                        "date": "45 CE - 407 CE"
                    },
                    {
                        "name": "Constantine III",
                        "date": "407 CE - 410 CE"
                    }
                ]
            },
            {
                "type": "Kings / Queens",
                "list": [
                    {
                        "name": "Constantine III",
                        "date": "410 CE - 411 CE"
                    },
                    {
                        "name": "Ulther Pendragon",
                        "date": "411 CE - 496 CE"
                    },
                    {
                        "name": "Vortigern",
                        "date": "496 CE - 503 CE"
                    },
                    {
                        "name": "Arthur Pendragon",
                        "date": "503 CE - 537 CE"
                    },
                    {
                        "name": "Mordred Pendragon",
                        "date": "535 CE - 537 CE"
                    }
                ]
            },
            {
                "type": "Round Table",
                "list": [
                    {
                        "name": "Lancelot Du Lac",
                        "date": "?? CE - 534 CE"
                    },
                ]
            }
        ],
        "provinces": [
            {
                "type": "Petty Kingdoms",
                "list": BrytthonPettyKingdoms
            }
        ],
        "locations":[
            // {
            //     "type": "Cities",
            //     "list": Camelot, Treporth (costal), Pontmawr (guard a bridge), Llynyngs (Lake town on an island), Cwnavon (Valley Town), Aber-y-coed (small comreeled islands on a lake), Bree (hill town), Blaenmawr (hill town, excesively hilly area), Mynyddmere (mountain town built next to large lake)
            // },
        ],
        "history": [
            {
                "name": "Brytth is Formed",
                "date": "43 CE",
                "text": [
                    ""
                ]
            },
            {
                "name": "Battle of Salisbury",
                "date": "480 CE",
                "text": [
                    ""
                ]
            },
            {
                "name": "Mordred's Rebellion",
                "date": "535 CE",
                "text": [
                    ""
                ]
            },
            {
                "name": "Battle of Camlann",
                "date": "537 CE",
                "text": [
                    ""
                ]
            },
        ]
    },
    ...BrytthonPettyKingdoms
]