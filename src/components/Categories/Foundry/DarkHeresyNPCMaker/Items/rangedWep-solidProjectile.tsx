export const wep_autogun = {
  "img": "systems/dark-heresy-2nd/icons/items/pistols/pistols_09.png",
  "name": "Autogun",
  "type": "weapon",
  "_id": "d2acw2WOZsRodGw9",
  "effects": [],
  "_stats": {
    "compendiumSource": "Compendium.dark-heresy-2nd.weapons.Item.LgSBXVb8NAZ2WSVV",
    "duplicateSource": null,
    "exportSource": null,
    "coreVersion": "13.351",
    "systemId": "dark-heresy-2nd",
    "systemVersion": "1.8.1",
    "createdTime": 1770159066066,
    "modifiedTime": 1770159070622,
    "lastModifiedBy": "0y7rGeV1OEmD18HE"
  },
  "system": {
    "craftsmanship": "Common",
    "availability": "Average",
    "weight": 5,
    "equipped": true,
    "inBackpack": false,
    "description": "",
    "source": "DH2 - 155",
    "damage": "1d10+3",
    "damageType": "Impact",
    "penetration": "0",
    "special": {},
    "range": "100",
    "attackType": "",
    "attackBonus": "0",
    "rateOfFire": {
      "single": 1,
      "burst": 3,
      "full": 10
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
    "type": "Solid Projectile",
    "reload": "Full Action",
    "clip": {
      "max": 30,
      "value": 30
    },
    "modifications": []
  },
  "folder": null,
  "sort": 0,
  "flags": {},
  "ownership": {
    "default": 0
  }
}

export const wep_shotgun = {
  "img": "systems/dark-heresy-2nd/icons/items/pistols/pistols_09.png",
  "name": "Shotgun",
  "type": "weapon",
  "_id": "iJqEBOX7pHXa0m2j",
  "effects": [],
  "_stats": {
    "compendiumSource": "Compendium.dark-heresy-2nd.weapons.Item.5TVcbSo5Ku2JQ7GT",
    "duplicateSource": null,
    "exportSource": null,
    "coreVersion": "13.351",
    "systemId": "dark-heresy-2nd",
    "systemVersion": "1.8.1",
    "createdTime": 1770160648154,
    "modifiedTime": 1770160651084,
    "lastModifiedBy": "0y7rGeV1OEmD18HE"
  },
  "system": {
    "craftsmanship": "Common",
    "availability": "Average",
    "weight": 5,
    "equipped": true,
    "inBackpack": false,
    "description": "",
    "source": "DH2 - 156",
    "damage": "1d10+4",
    "damageType": "Impact",
    "penetration": "0",
    "special": {
      "scatter": true
    },
    "range": "30",
    "attackType": "",
    "attackBonus": "0",
    "rateOfFire": {
      "single": 1,
      "burst": 0,
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
    "type": "Solid Projectile",
    "reload": "2 Full Actions",
    "clip": {
      "max": 8,
      "value": 8
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
          "name": "Scatter",
          "type": "attackSpecial",
          "_id": "IAEmSe6WF7oh5318",
          "folder": null,
          "sort": 0,
          "system": {
            "description": "The standard ammunition of these weapons spreads out when fired, ripping apart targets at close range but inflicting considerably less harm from afar. When fired at Point Blank range, this weapon gains +10 to hit and deals +3 damage. When fired at Short range, it gains +10 to hit. At any longer ranges, it suffers -3 damage.",
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

export function wep_stubAutomatic(number: string) {
  return {
    "img": "systems/dark-heresy-2nd/icons/items/pistols/pistols_09.png",
    "name": "Stub Automatic",
    "type": "weapon",
    "_id": "gWK3DoePbqRHKVU" + number,
    "effects": [],
    "_stats": {
      "compendiumSource": "Compendium.dark-heresy-2nd.weapons.Item.g5crfVSpffmWDbZx",
      "duplicateSource": null,
      "exportSource": null,
      "coreVersion": "13.351",
      "systemId": "dark-heresy-2nd",
      "systemVersion": "1.8.1",
      "createdTime": 1770245751429,
      "modifiedTime": 1770245756994,
      "lastModifiedBy": "0y7rGeV1OEmD18HE"
    },
    "system": {
      "craftsmanship": "Common",
      "availability": "Average",
      "weight": 2,
      "equipped": true,
      "inBackpack": false,
      "description": "",
      "source": "DH2 - 156",
      "damage": "1d10+3",
      "damageType": "Impact",
      "penetration": "0",
      "special": {},
      "range": "30",
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
      "class": "Pistol",
      "type": "Solid Projectile",
      "reload": "Full Action",
      "clip": {
        "max": 9,
        "value": 9
      },
      "modifications": []
    },
    "folder": null,
    "sort": 0,
    "flags": {},
    "ownership": {
      "default": 0
    }
  }
}

export const wep_stubCannon = {
  "img": "systems/dark-heresy-2nd/icons/items/pistols/pistols_09.png",
  "name": "Stub Cannon",
  "type": "weapon",
  "effects": [],
  "_stats": {
    "compendiumSource": "Compendium.dark-heresy-2nd.weapons.Item.CkWb2LgnP9vzoLFO",
    "duplicateSource": null,
    "exportSource": {
      "worldId": "hive-arcos-dh",
      "uuid": "Item.aDB1yu3QxXCr3rDs",
      "coreVersion": "13.351",
      "systemId": "dark-heresy-2nd",
      "systemVersion": "1.8.1"
    },
    "coreVersion": "13.351",
    "systemId": "dark-heresy-2nd",
    "systemVersion": "1.8.1",
    "createdTime": 1770735840990,
    "modifiedTime": 1771328616952,
    "lastModifiedBy": "0y7rGeV1OEmD18HE"
  },
  "system": {
    "craftsmanship": "Common",
    "availability": "Scarce",
    "weight": 3,
    "equipped": true,
    "inBackpack": false,
    "description": "",
    "source": "DH2 - 155",
    "damage": "1d10+5",
    "damageType": "Impact",
    "penetration": "2",
    "special": {
      "!": true
    },
    "range": "60",
    "attackType": "",
    "attackBonus": "0",
    "rateOfFire": {
      "single": 1,
      "burst": 0,
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
    "type": "Solid Projectile",
    "reload": "2 Full Actions",
    "clip": {
      "max": 8,
      "value": 8
    },
    "modifications": []
  },
  "folder": null,
  "flags": {
    "dark-heresy-2nd": {
      "nested": [
        {
          "img": "systems/dark-heresy-2nd/icons/talents/red/r_01.png",
          "name": "Inaccurate",
          "type": "attackSpecial",
          "_id": "FQ2PQXjNm5lUHYm8",
          "effects": [],
          "_stats": {
            "coreVersion": "13.351",
            "systemId": null,
            "systemVersion": null,
            "createdTime": null,
            "modifiedTime": null,
            "lastModifiedBy": null,
            "compendiumSource": null,
            "duplicateSource": null,
            "exportSource": null
          },
          "system": {
            "description": "Poorly manufactured with often shoddy construction, inaccurate weapons are Common in underhive gangs and heretical cults. A character gains no benefit from the Aim action when attacking with a weapon with this quality.",
            "source": "",
            "enabled": true,
            "hasLevel": false,
            "level": 0
          },
          "folder": null,
          "sort": 0,
          "ownership": {
            "default": 0
          },
          "flags": {}
        },
        {
          "img": "systems/dark-heresy-2nd/icons/talents/red/r_01.png",
          "name": "Concussive",
          "type": "attackSpecial",
          "_id": "xTJ9jg9dytspswbB",
          "effects": [],
          "_stats": {
            "coreVersion": "13.351",
            "systemId": null,
            "systemVersion": null,
            "createdTime": null,
            "modifiedTime": null,
            "lastModifiedBy": null,
            "compendiumSource": null,
            "duplicateSource": null,
            "exportSource": null
          },
          "system": {
            "description": "Concussive weapons strike with a powerful impact strong enough to temporarily knock a foe senseless. When a target is struck by a Concussive weapon, he must take a Toughness test with a penalty equal to 10 times the number in parentheses (X). For example, a weapon with Concussive (2) would impose a  -20 on this Toughness test and Concussive (0) would cause a test with no penalty. If he fails, the target is Stunned for 1 round per degree of failure. If the attack also inflicted an amount of damage greater than the target's Strength bonus, the target is knocked Prone.",
            "source": "",
            "enabled": true,
            "hasLevel": true,
            "level": 0
          },
          "folder": null,
          "sort": 0,
          "ownership": {
            "default": 0
          },
          "flags": {}
        }
      ]
    }
  },
  "ownership": {
    "default": 0
  }
}