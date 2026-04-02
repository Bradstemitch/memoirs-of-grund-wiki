export const wep_plasmaPistol = {
  "img": "systems/dark-heresy-2nd/icons/items/pistols/pistols_09.png",
  "name": "Plasma Pistol",
  "type": "weapon",
  "effects": [],
  "_stats": {
    "compendiumSource": "Compendium.dark-heresy-2nd.weapons.Item.LOF16HrKpKTI3vvY",
    "duplicateSource": null,
    "exportSource": {
      "worldId": "hive-arcos-dh",
      "uuid": "Item.0h7NFSIDgn1Z7wsl",
      "coreVersion": "13.351",
      "systemId": "dark-heresy-2nd",
      "systemVersion": "1.8.1"
    },
    "coreVersion": "13.351",
    "systemId": "dark-heresy-2nd",
    "systemVersion": "1.8.1",
    "createdTime": 1774199770351,
    "modifiedTime": 1774199771845,
    "lastModifiedBy": "0y7rGeV1OEmD18HE"
  },
  "system": {
    "craftsmanship": "Common",
    "availability": "Very Rare",
    "weight": 4,
    "equipped": false,
    "inBackpack": false,
    "description": "",
    "source": "DH2 - 155",
    "damage": "1d10+6",
    "damageType": "Energy",
    "penetration": "6",
    "special": {
      "maximal": true,
      "overheats": true
    },
    "range": "30",
    "attackType": "",
    "attackBonus": "0",
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
    "type": "Plasma",
    "reload": "3 Full Actions",
    "clip": {
      "max": 10,
      "value": 10
    },
    "modifications": []
  },
  "folder": null,
  "flags": {
    "dark-heresy-2nd": {
      "nested": [
        {
          "img": "systems/dark-heresy-2nd/icons/talents/red/r_01.png",
          "name": "Maximal",
          "type": "attackSpecial",
          "_id": "0TwQlNLapox8GPpU",
          "folder": null,
          "sort": 0,
          "system": {
            "description": "Many energy weapons have multiple settings, allowing the user greater tactical flexibility in combat. As a Free Action, this weapon can be switched between two modes: Standard (which uses the normal weapon profile) and Maximal. When the weapon is fired on Maximal, it adds 10 metres to its range, 1d10 to its damage, and +2 to its penetration. If it has the Blast quality, then the value of this quality is increased by 2 (i.e., Blast [3] becomes Blast [5]). The weapon also uses three times the normal amount of ammunition per shot and gains the Recharge quality.",
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
          "name": "Overheats",
          "type": "attackSpecial",
          "_id": "CwovDtJrIuvYk2BJ",
          "folder": null,
          "sort": 0,
          "system": {
            "description": "Through inefficient shielding, defective venting, or simply inherent design, the weapon often becomes overcome with the heat of its ammunition or firing methods. On an attack roll of 91 or higher, this weapon overheats. The wielder suffers Energy damage equal to the weapon's damage with a penetration of 0 to an arm location (the arm holding the weapon if the weapon was fired one-handed, or a random arm if the weapon was fired with two hands). The wielder may choose to avoid taking the damage by dropping the weapon as a Free Action. A weapon that overheats must spend the round afterwards cooling down, and cannot be fired again until the second round after overheating. A weapon with this quality does not jam, and any effect that would cause the weapon to jam instead causes the weapon to overheat.",
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