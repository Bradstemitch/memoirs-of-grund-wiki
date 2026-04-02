import Emblem from "../../../../images/messarEthye.png"
import { MessarVillenData } from "../../../locations/cities/messarVillen"

export const MessanHeptarchyEthyeData = {
    'name': 'Ethye',
    'fileName': 'messarEthye',
    'tags': [
        'Messar'
    ],
    "emblem": Emblem,
    "pronunciation": "Meh - sarr",
    "info": {
        "basic": {
            "area": [
            ],
            "population": [
            ],
            "founded": [
            ],
            "government": [
                "Hereditary Monarchy"
            ],
            "ruler": [
                "King / Queen of Ethye"
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
            ],
            "currency": [

            ],
            "demonym": [
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
                {
                    "type": "Cities",
                    "list": [
                        MessarVillenData,
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