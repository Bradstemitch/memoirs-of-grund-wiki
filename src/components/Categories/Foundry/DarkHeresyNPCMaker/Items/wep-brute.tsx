export const wep_tunnellingClawsMelee = {
  "img": "systems/dark-heresy-2nd/icons/items/pistols/pistols_09.png",
  "name": "Tunnelling Claw (Melee)",
  "type": "weapon",
  "effects": [],
  "_stats": {
    "compendiumSource": "Compendium.dark-heresy-2nd.weapons.Item.Q4cGSgS2Dch60Vxc",
    "duplicateSource": null,
    "exportSource": {
      "worldId": "hive-arcos-dh",
      "uuid": "Item.Vjs6wCV32gr0hakp",
      "coreVersion": "13.351",
      "systemId": "dark-heresy-2nd",
      "systemVersion": "1.8.1"
    },
    "coreVersion": "13.351",
    "systemId": "dark-heresy-2nd",
    "systemVersion": "1.8.1",
    "createdTime": 1773710100601,
    "modifiedTime": 1773710131180,
    "lastModifiedBy": "0y7rGeV1OEmD18HE"
  },
  "system": {
    "craftsmanship": "Common",
    "availability": "Very Rare",
    "weight": 6,
    "equipped": true,
    "inBackpack": false,
    "description": "",
    "source": "DH2 - 161",
    "damage": "1d10+7",
    "damageType": "Energy",
    "penetration": "7",
    "special": {
      "power-field": true,
      "two-handed": true,
      "unbalanced": true
    },
    "range": 0,
    "attackType": "",
    "attackBonus": "0",
    "rateOfFire": {
      "single": -1,
      "burst": -1,
      "full": -1
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
    "class": "Melee",
    "type": "Power",
    "reload": "",
    "clip": {
      "max": 0,
      "value": 0
    },
    "modifications": []
  },
  "folder": null,
  "flags": {
    "dark-heresy-2nd": {
      "nested": [
        {
          "img": "systems/dark-heresy-2nd/icons/talents/red/r_01.png",
          "name": "Unbalanced",
          "type": "attackSpecial",
          "_id": "Ez5EGtswufL5FyDo",
          "folder": null,
          "sort": 0,
          "system": {
            "description": "Cumbersome, awkward to use, and often heavy, these are usually powerful offensively, but suffer in defence actions such as parrying. These weapons cannot be used to make Lighting Attack actions, and impose a -10 penalty when used to Parry.",
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
export const wep_tunnellingClawsRanged = {
  "img": "systems/dark-heresy-2nd/icons/items/pistols/pistols_09.png",
  "name": "Tunnelling Claw (Ranged)",
  "type": "weapon",
  "effects": [],
  "_stats": {
    "compendiumSource": "Compendium.dark-heresy-2nd.weapons.Item.Mdp4GBnitp8hdJv1",
    "duplicateSource": null,
    "exportSource": {
      "worldId": "hive-arcos-dh",
      "uuid": "Item.NdcBijIDSdPpIOSb",
      "coreVersion": "13.351",
      "systemId": "dark-heresy-2nd",
      "systemVersion": "1.8.1"
    },
    "coreVersion": "13.351",
    "systemId": "dark-heresy-2nd",
    "systemVersion": "1.8.1",
    "createdTime": 1773709791040,
    "modifiedTime": 1773710271946,
    "lastModifiedBy": "0y7rGeV1OEmD18HE"
  },
  "system": {
    "craftsmanship": "Common",
    "availability": "Very Rare",
    "weight": 15,
    "equipped": true,
    "inBackpack": false,
    "description": "",
    "source": "DH2 - 155",
    "damage": "5d10",
    "damageType": "Energy",
    "penetration": "6",
    "special": {
      "melta": true
    },
    "range": "20",
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
    "class": "Heavy",
    "type": "Melta",
    "reload": "Full Action",
    "clip": {
      "max": 5,
      "value": 5
    },
    "modifications": []
  },
  "folder": null,
  "flags": {
    "dark-heresy-2nd": {
      "nested": [
        {
          "name": "Blast",
          "system": {
            "description": "Attacks from this weapon explode on impact, hurling debris and shrapnel in all directions. When working out a hit from a Blast weapon, anyone within the weapon's blast radius in metres, indicated by the number in parentheses, is also suffers a single hit from the weapon. Roll damage once and apply it to each character affected by the blast. A Blast weapon also scatters when the user fails his Ballistic Skill test when firing it.",
            "source": "",
            "enabled": true,
            "hasLevel": true,
            "level": 1
          },
          "img": "systems/dark-heresy-2nd/icons/talents/red/r_01.png",
          "_id": "llkO3wMfjMiUhpDN",
          "type": "attackSpecial",
          "folder": null,
          "sort": 0,
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
        },
        {
          "name": "Felling",
          "system": {
            "description": "Felling weapons make a mockery of even the most resilient enemies, cutting dense tissue and bone with ease. When calculating damage from Felling weapons, reduce the target's Unnatural Toughness bonus by the number in parentheses (X). Felling only reduces Unnatural Toughness, not the target's base Toughness bonus, and does not persist once the damage has been calculated.",
            "source": "",
            "enabled": true,
            "hasLevel": true,
            "level": 6
          },
          "img": "systems/dark-heresy-2nd/icons/talents/red/r_01.png",
          "_id": "BM2nEVqiwWLYWJKK",
          "type": "attackSpecial",
          "folder": null,
          "sort": 0,
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
        },
        {
          "img": "systems/dark-heresy-2nd/icons/talents/red/r_01.png",
          "name": "Inaccurate",
          "type": "attackSpecial",
          "_id": "cx2S5e2QfAn75p8u",
          "folder": null,
          "sort": 0,
          "system": {
            "description": "Poorly manufactured with often shoddy construction, inaccurate weapons are Common in underhive gangs and heretical cults. A character gains no benefit from the Aim action when attacking with a weapon with this quality.",
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
        },
        {
          "img": "systems/dark-heresy-2nd/icons/talents/red/r_01.png",
          "name": "Recharge",
          "type": "attackSpecial",
          "_id": "U4ucB76eKXxUvnJU",
          "folder": null,
          "sort": 0,
          "system": {
            "description": "Some weapons lack continuous power or ammunition supplies, and each strike drains capacitors or empties fuel reservoirs. When a weapon with this quality is used to make an attack, that weapon cannot be used to attack again until the end of the next round (in effect, it can only be used once every other round).",
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