import Emblem from "../../../../images/goblinEmpire.png"

const GoblinEmpirePettyKingdoms: any = [
  // {
  //   'name': 'Erd Zrol',
  //   'fileName': 'goblinEmpireErd',
  //   'type': 'Petty Kingdom',
  //   'tags': ['Goblin Empire']
  // },
  // {
  //   'name': 'Jaax Ferd',
  //   'fileName': 'goblinEmpireJaax',
  //   'type': 'Petty Kingdom',
  //   'tags': ['Goblin Empire']
  // },
  // {
  //   'name': 'Kaak Zrol',
  //   'fileName': 'goblinEmpireKaak',
  //   'type': 'Petty Kingdom',
  //   'tags': ['Goblin Empire']
  // },
  // {
  //   'name': 'Klir Ferd',
  //   'fileName': 'goblinEmpireKlir',
  //   'type': 'Petty Kingdom',
  //   'tags': ['Goblin Empire']
  // },
  // {
  //   'name': 'Sralb Zrol',
  //   'fileName': 'goblinEmpireSralb',
  //   'type': 'Petty Kingdom',
  //   'tags': ['Goblin Empire']
  // },
]
export const GoblinEmpireList = [
  {
    'name': 'Divine Goblin Empire',
    "fileName": "goblinEmpire",
    "tags": [
      "Goblin"
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
          "Empire"
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
    "provinces": [
      {
        "type": "Zrol",
        "list": GoblinEmpirePettyKingdoms
      }
    ],
  },
  ...GoblinEmpirePettyKingdoms
]