
import Emblem from "../../../../images/messarEmblem.png"
import { NolaThesotiData } from "../../../characters/nolaThesoti"
import { OberonValerianData } from "../../../characters/oberonValerian"
import { MessarMessactData } from "../../../locations/cities/messarMessact"

export const MessanHeptarchyAtreaData = {
    'name': 'Principality of Atrea',
    'fileName': 'messarAtrea',
    'tags': [
        'Messar'
    ],
    "emblem": Emblem,
    "pronunciation": "ASS - erra",
    "info": {
        "basic": {
            "area": [
                "~5000 sq mi"
            ],
            "population": [
                "~800,000 (~160/sq. mi)"
            ],
            "founded": [
            ],
            "government": [
                "Elective Monarchy"
            ],
            "ruler": [
                "High King / Queen of Messar"
            ],
            "status": [
                "Petty Kingdom"
            ],
            "variations": [
            ]
        },
        "government": {
            "commander": [
            ],
            "headOfGovernment": [
            ],
            "intelligence": [
            ],
            "military": [
                "Fyrd"
            ],
            "headOfState": [
            ]
        },
        "social": {
            "capital": [
                "Messact"
            ],
            "currency": [

            ],
            "demonym": [
                "Atrean"
            ],
            "language": [
                "Aeaxon"
            ],
            "religion": [
                "Draconic Pantheon"
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
    "locations": [
            {
                "type": "Cities",
                "list": [
                    MessarMessactData,
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