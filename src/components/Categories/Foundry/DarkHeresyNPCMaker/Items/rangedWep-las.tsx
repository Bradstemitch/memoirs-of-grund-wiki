export const wep_lasgun = {
  "img": "systems/dark-heresy-2nd/icons/items/pistols/pistols_09.png",
  "name": "Lasgun",
  "type": "weapon",
  "_id": "G4gSLc8ooFvV1JNA",
  "effects": [],
  "_stats": {
    "compendiumSource": "Compendium.dark-heresy-2nd.weapons.Item.K5ytZn0XGJPvEGAX",
    "duplicateSource": null,
    "exportSource": null,
    "coreVersion": "13.351",
    "systemId": "dark-heresy-2nd",
    "systemVersion": "1.8.1",
    "createdTime": 1770254544420,
    "modifiedTime": 1770254547908,
    "lastModifiedBy": "0y7rGeV1OEmD18HE"
  },
  "system": {
    "craftsmanship": "Common",
    "availability": "Common",
    "weight": 4,
    "equipped": true,
    "inBackpack": false,
    "description": "",
    "source": "DH2 - 153",
    "damage": "1d10+3",
    "damageType": "Energy",
    "penetration": "0",
    "special": {
      "reliable": true
    },
    "range": "100",
    "attackType": "",
    "attackBonus": "0",
    "rateOfFire": {
      "single": 1,
      "burst": 3,
      "full": 0
    },
    "target": "",
    "effect": "",
    "backpack": {
      "inBackpack": false
    },
    "container": true,
    "containerTypes": [
      "weaponModification",
      "attackSpecial",
      "ammunition"
    ],
    "class": "Basic",
    "type": "Las",
    "reload": "Full Action",
    "clip": {
      "max": 60,
      "value": 60
    },
    "modifications": []
  },
  "folder": null,
  "sort": 0,
  "flags": {
    "dark-heresy-2nd": {
      "nested": [
        {
          "img": "systems/dark-heresy-2nd/icons/talents/red/r_01.png",
          "name": "Reliable",
          "type": "attackSpecial",
          "_id": "gQQnLRvqNlMSe6dq",
          "folder": null,
          "sort": 0,
          "system": {
            "description": "Using ancient and well-consecrated designs, reliable weapons bring glory to the Omnissiah with each attack. Reliable weapons only jam on an unmodified result of 100. Reliable weapons with the Spray quality, or which do not make hit rolls, never jam.",
            "source": "",
            "enabled": true,
            "hasLevel": false,
            "level": 0
          },
          "effects": [],
          "ownership": {
            "default": 0
          },
          "flags": {},
          "_stats": {
            "coreVersion": "13.351",
            "systemId": "dark-heresy-2nd",
            "systemVersion": "1.8.1",
            "lastModifiedBy": null,
            "compendiumSource": null,
            "duplicateSource": null,
            "exportSource": null
          }
        }
      ]
    }
  },
  "ownership": {
    "default": 0
  }
}

export function wep_laspistol(number: string) {
  return {
    "img": "systems/dark-heresy-2nd/icons/items/pistols/pistols_09.png",
    "name": "Laspistol",
    "type": "weapon",
    "_id": "XjIp3kzZzZ6Or2x" + number,
    "effects": [],
    "_stats": {
      "compendiumSource": "Compendium.dark-heresy-2nd.weapons.Item.AmbJlloDqvjLfLqC",
      "duplicateSource": null,
      "exportSource": null,
      "coreVersion": "13.351",
      "systemId": "dark-heresy-2nd",
      "systemVersion": "1.8.1",
      "createdTime": 1770254727868,
      "modifiedTime": 1770254727890,
      "lastModifiedBy": "0y7rGeV1OEmD18HE"
    },
    "system": {
      "craftsmanship": "Common",
      "availability": "Common",
      "weight": 2,
      "equipped": true,
      "inBackpack": false,
      "description": "",
      "source": "DH2 - 153",
      "damage": "1d10+2",
      "damageType": "Energy",
      "penetration": 0,
      "special": {
        "reliable": true
      },
      "range": 30,
      "attackType": "",
      "attackBonus": 0,
      "rateOfFire": {
        "single": 1,
        "burst": 2,
        "full": 0
      },
      "target": "",
      "effect": "",
      "backpack": {
        "inBackpack": false
      },
      "container": true,
      "containerTypes": [
        "weaponModification",
        "attackSpecial",
        "ammunition"
      ],
      "class": "Pistol",
      "type": "Las",
      "reload": "Half Action",
      "clip": {
        "max": 30,
        "value": 30
      },
      "modifications": []
    },
    "folder": null,
    "sort": 0,
    "flags": {
      "dark-heresy-2nd": {
        "nested": [
          {
            "img": "systems/dark-heresy-2nd/icons/talents/red/r_01.png",
            "name": "Reliable",
            "type": "attackSpecial",
            "_id": "wKu2xjASJIutYKoY",
            "folder": null,
            "sort": 0,
            "system": {
              "description": "Using ancient and well-consecrated designs, reliable weapons bring glory to the Omnissiah with each attack. Reliable weapons only jam on an unmodified result of 100. Reliable weapons with the Spray quality, or which do not make hit rolls, never jam.",
              "source": "",
              "enabled": true,
              "hasLevel": false,
              "level": 0
            },
            "effects": [],
            "ownership": {
              "default": 0
            },
            "flags": {},
            "_stats": {
              "coreVersion": "13.351",
              "systemId": "dark-heresy-2nd",
              "systemVersion": "1.8.1",
              "lastModifiedBy": null,
              "compendiumSource": null,
              "duplicateSource": null,
              "exportSource": null
            }
          }
        ]
      }
    },
    "ownership": {
      "default": 0
    }
  }
}
export const wep_hotShotLasgun = {
  "img": "systems/dark-heresy-2nd/icons/items/pistols/pistols_09.png",
  "name": "Hot-shot Lasgun",
  "type": "weapon",
  "effects": [],
  "_stats": {
    "compendiumSource": "Compendium.dark-heresy-2nd.weapons.Item.kRZNGYClEyYst31S",
    "duplicateSource": null,
    "exportSource": {
      "worldId": "hive-arcos-dh",
      "uuid": "Item.ZiYAMI8BxXqhhvZ9",
      "coreVersion": "13.351",
      "systemId": "dark-heresy-2nd",
      "systemVersion": "1.8.1"
    },
    "coreVersion": "13.351",
    "systemId": "dark-heresy-2nd",
    "systemVersion": "1.8.1",
    "createdTime": 1773151553531,
    "modifiedTime": 1773151555477,
    "lastModifiedBy": "0y7rGeV1OEmD18HE"
  },
  "system": {
    "craftsmanship": "Common",
    "availability": "Rare",
    "weight": 6,
    "equipped": true,
    "inBackpack": false,
    "description": "",
    "source": "DH2 - 154",
    "damage": "1d10+4",
    "damageType": "Energy",
    "penetration": "7",
    "special": {},
    "range": "60",
    "attackType": "",
    "attackBonus": "0",
    "rateOfFire": {
      "single": 1,
      "burst": 3,
      "full": 0
    },
    "target": "",
    "effect": "",
    "backpack": {
      "inBackpack": false
    },
    "container": true,
    "containerTypes": [
      "weaponModification",
      "attackSpecial",
      "ammunition"
    ],
    "class": "Basic",
    "type": "Las",
    "reload": "N/A",
    "clip": {
      "max": 30,
      "value": 30
    },
    "modifications": []
  },
  "folder": null,
  "flags": {},
  "ownership": {
    "default": 0
  }
}