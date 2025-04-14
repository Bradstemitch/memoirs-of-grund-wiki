import { SylvanOrchidList } from "./SylvanOrchid"
import Emblem from "../../../../images/sylvan.png"

const SylvanPettyKingdoms: any = [
    ...SylvanOrchidList,
]

export const SylvanList = [
    {
        'name': 'Sylvan Realms',
        "fileName": "sylvan",
        "tags": [
            "Sylvan"
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
                    "Elected Monarchy"
                ],
                "ruler": [
                    "Imperator Allairus"
                ],
                "status": [
                    "Tribal"
                ],
                "variations": [
                    "Wood Elves", "Syl'van"
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
                    "Avalon"
                ],
                "currency": [

                ],
                "demonym": [
                    "Sylvan"
                ],
                "language": [
                    "Sylvan", "Elven"
                ],
                "religion": [
                    "Celtic Paganism"
                ]
            }
        },
        "provinces": [
            {
                "type": "City States",
                "list": SylvanPettyKingdoms
            }
        ],
        "summary": [
            "The Wood Elves, more commonly known as the Sylvan, or in more fanciful tales, as the Fey Folk of Tír na nÓg, are a reclusive, and highly isolationist race of Elves that have split off from their kin high in the mountains, preferring instead to live out their lives alongside the Spirits and Fey within their enchanted forests. Connected as one by the roots of the great tree on the Isle of Avalon.",

            "Within their realms, the Sylvan have learnt to dwell in concord with nature, learning the ways of tree singing, to form great houses and halls from the sturdiest of trees that can spread from the highest boughs to the deepest roots. Living so tightly entwined with the Fey, the Sylvan have an innate and deep affinity for magic, calling upon it as naturally as their kin would breathe. They are the defenders of the forest, guardians of all things natural and pure. For millennia, the Sylvan have lived in this state of harmony, lying in wait and hidden from the prying eyes of the wider World.",

            "Yet, with the arrival of Humanity, from their initial small tribes to their vast empires, the Sylvans have be increasingly forced deeper into their forests, and now with the rise of the Vindictis Confederation, the survival of their very race hangs in the balance. Sylvan wanderers find themselves expelled from towns, chased from the plains and hunted in the wilds by supremacists and the opportunistic. Their young neighbours invade the Sylvan forests first with axes, then with swords numbering in their thousands, slaughtering and kidnapping wherever they step.",

            "With the fall of their High Elven kin to the Carnan Legions, the Sylvan have retreated deeper into their forests, avoiding human interaction and weaving the mists to deny them entry, yet this has proven to be insufficient, or merely too late, as one by one the Sylvan Halls fall silent, their defenders and citizens never returning to Avalon and their blessed springs fading away.",

            "The Sylvan have spent their entire existence bent solely on the preservation of their forested realms, to ensure that it persists throughout the ages and to protect their great Isle of Avalon from all harms. Never has this been truer than in these dark days. It is this cause in which they fight, for no land endures long if it cannot take up arms against those that wish it harm, and the waking woodland of Tír na nÓg have endured for many thousands of years, so long as the watchful eyes of her protectors continue their loyal vigilance.",
        ]
    },
    ...SylvanPettyKingdoms,
]