import { CHARACTERS, NATIONS, ORGANISATIONS, SPECIES } from "../constants";

export const LilithFaire = {
    ...CHARACTERS.LILITH_FAIRE,
    "tags": [
        "Knight Commando"
    ],
    //"image": "",
    //"pronunciation": "",
    "info": {
        // "alias":[],
        "basic": {
            "nationality": [
                NATIONS.TUATHA_DE_DANANN
            ],
            "born": [
                "-35 CE"
            ],
            "status": [
                "Alive"
            ]
        },
        "physical": {
            "species": [
                {
                    "detail": "Sylvan",
                    "data": SPECIES.ELF
                },
            ],
            "gender": [
                "Female"
            ],
            "height": [
                "1.83 meters"
            ],
            "hair": [
                "Orange"
            ],
            "eyes": [
                "Green"
            ],
            "skin": [
                "White"
            ]
        },
        "personal": {
            // "titles": [
            // ],
            // "professions": [
            // ],
            "affiliations": [
                {
                    "detail": "Formerly",
                    "data": ORGANISATIONS.VINDICTIS_CONFEDERATION
                },
                {
                    "detail": "Formerly",
                    "data": ORGANISATIONS.KNIGHT_COMMANDO
                },
                ORGANISATIONS.MESSAN_REBELION

            ],
            // "skills": [
            // ]
        },
        "family": {
            "relatives": [
                {
                    "detail": "Mother",
                    "data": { "name": "Unknown" }
                },
                {
                    "detail": "Father",
                    "data": { "name": "Unknown" }
                }
            ],
            "partner": [
                {
                    "detail": "Wife",
                    "data": CHARACTERS.LETA
                },
            ],
            // "children": [
            // ]
        }
    },
    "summary": [
        "Infiltration and assassination unit made up of the stealthiest troops in the Remnant. They replace or remove people in positions of power to turn the odds in their favour"
    ]
}
