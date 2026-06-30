export function wep_lance(equipped: boolean) {
  return {
    "folder": "o8W3vHYG6Tv7SgNp",
    "name": "Lance",
    "type": "weapon",
    "img": "modules/wfrp4e-up-in-arms/assets/icons/lance.png",
    "system": {
      "description": {
        "value": "<p>Lances resemble spears, but with a weighty grip designed to brace the weapon against the arm and chest of a charging knight. The demi-lance is similar, but shorter and lighter.</p><p>* Lances and Demi-Lances count as @UUID[Compendium.wfrp4e-up-in-arms.items.okPRj8ixa55d9ETF]{Improvised Weapons} if used on a round where you have not charged.</p>"
      },
      "gmdescription": {
        "value": ""
      },
      "quantity": {
        "value": 1
      },
      "encumbrance": {
        "value": 3
      },
      "price": {
        "gc": 1,
        "ss": 0,
        "bp": 0
      },
      "availability": {
        "value": "scarce"
      },
      "location": {
        "value": ""
      },
      "damageToItem": {
        "value": 0,
        "shield": 0
      },
      "damage": {
        "dice": "",
        "value": "+SB+6"
      },
      "reach": {
        "value": "vLong"
      },
      "range": {
        "value": ""
      },
      "skill": {
        "value": ""
      },
      "modeOverride": {
        "value": ""
      },
      "twohanded": {
        "value": false
      },
      "ammunitionGroup": {
        "value": ""
      },
      "currentAmmo": {
        "value": "0"
      },
      "consumesAmmo": {
        "value": true
      },
      "weaponGroup": {
        "value": "cavalry"
      },
      "qualities": {
        "value": [
          {
            "name": "impact",
            "value": null
          },
          {
            "name": "impale",
            "value": null
          }
        ]
      },
      "flaws": {
        "value": []
      },
      "special": {
        "value": ""
      },
      "equipped": {
        "value": equipped
      },
      "loaded": {
        "value": false,
        "repeater": false,
        "amt": 0
      },
      "offhand": {
        "value": false
      }
    },
    "effects": [],
    "sort": -100000,
    "flags": {
      "wfrp4e-up-in-arms": {
        "initialization-folder": "Weapons",
        "sort": 3600000
      }
    },
    "_stats": {
      "compendiumSource": "Compendium.wfrp4e-up-in-arms.items.Item.efk3W6z1CMAA8NrB",
      "duplicateSource": null,
      "exportSource": null,
      "coreVersion": "14.364",
      "systemId": "wfrp4e",
      "systemVersion": "9.6.1",
      "createdTime": 1782295637423,
      "modifiedTime": 1782295637423,
      "lastModifiedBy": "khhY7fuxf56JOp5M"
    },
    "_id": "Jkiyi93qlKpX2E2O",
    "ownership": {
      "default": 0
    }
  }
}
export function wep_spear(equipped: boolean) {
  return {
    "folder": "o8W3vHYG6Tv7SgNp",
    "name": "Spear",
    "type": "weapon",
    "img": "modules/wfrp4e-up-in-arms/assets/icons/spear.png",
    "system": {
      "description": {
        "value": "<p>Besides the club, the spear is probably the most ubiquitous weapon in the Old World. Almost all species and nations employ troops armed with spears, aside from the Dwarfs who tend to eschew polearms in general.</p>"
      },
      "gmdescription": {
        "value": ""
      },
      "quantity": {
        "value": 1
      },
      "encumbrance": {
        "value": 2
      },
      "price": {
        "gc": 0,
        "ss": 15,
        "bp": 0
      },
      "availability": {
        "value": "common"
      },
      "location": {
        "value": ""
      },
      "damageToItem": {
        "value": 0,
        "shield": 0
      },
      "damage": {
        "dice": "",
        "value": "+SB+4"
      },
      "reach": {
        "value": "vLong"
      },
      "range": {
        "value": ""
      },
      "skill": {
        "value": ""
      },
      "modeOverride": {
        "value": ""
      },
      "twohanded": {
        "value": false
      },
      "ammunitionGroup": {
        "value": ""
      },
      "currentAmmo": {
        "value": "0"
      },
      "consumesAmmo": {
        "value": true
      },
      "weaponGroup": {
        "value": "polearm"
      },
      "qualities": {
        "value": [
          {
            "name": "impale",
            "value": null
          }
        ]
      },
      "flaws": {
        "value": []
      },
      "special": {
        "value": ""
      },
      "equipped": {
        "value": equipped
      },
      "loaded": {
        "value": false,
        "repeater": false,
        "amt": 0
      },
      "offhand": {
        "value": false
      }
    },
    "effects": [
      {
        "name": "Spear",
        "img": "modules/wfrp4e-up-in-arms/assets/icons/spear.png",
        "_id": "ow5cxa8QCQL9boTi",
        "type": "base",
        "system": {
          "transferData": {
            "type": "document",
            "originalType": "document",
            "documentType": "Item",
            "avoidTest": {
              "value": "none",
              "opposed": false,
              "prevention": true,
              "reversed": false
            },
            "testIndependent": false,
            "equipTransfer": false,
            "selfOnly": false,
            "prompt": false,
            "area": {
              "templateData": {
                "borderColor": null,
                "fillColor": null,
                "texture": null
              },
              "keep": false,
              "aura": {
                "transferred": false,
                "render": false
              },
              "duration": "sustained"
            },
            "zone": {
              "type": "zone",
              "transferred": false,
              "traits": {},
              "skipImmediateOnPlacement": false,
              "keep": false
            }
          },
          "itemTargetData": {
            "ids": [],
            "allItems": false
          },
          "scriptData": [
            {
              "script": "this.item.update({\"system.twohanded.value\" : !this.item.system.twohanded.value})",
              "label": "Toggle Two-handed",
              "trigger": "manual",
              "options": {
                "targeter": false,
                "defending": false,
                "runIfDisabled": false,
                "hideScript": "",
                "deleteEffect": false,
                "showDuplicates": false
              },
              "async": false
            },
            {
              "script": "if (!this.item.system.twohanded.value)\n{\n    this.item.system.flaws.value = this.item.system.flaws.value.concat([{name : \"unbalanced\"}]),\nthis.item.system.damage.value=\"+SB+3\",\nthis.item.system.reach.value=\"long\"\n}",
              "label": "Spear",
              "trigger": "prepareOwned",
              "options": {
                "targeter": false,
                "defending": false,
                "runIfDisabled": false,
                "hideScript": "",
                "deleteEffect": false,
                "showDuplicates": false
              },
              "async": false
            }
          ],
          "zone": {
            "type": "zone",
            "traits": {},
            "skipImmediateOnPlacement": false
          },
          "sourceData": {
            "test": {}
          },
          "condition": {
            "numbered": false
          }
        },
        "changes": [],
        "disabled": false,
        "duration": {
          "startTime": null,
          "combat": null,
          "seconds": null,
          "rounds": null,
          "turns": null,
          "startRound": null,
          "startTurn": null
        },
        "description": "",
        "origin": null,
        "tint": "#ffffff",
        "transfer": true,
        "statuses": [],
        "sort": 0,
        "flags": {
          "wfrp4e": {
            "manualEffectKeys": false,
            "applicationData": {},
            "scriptData": [],
            "_legacyData": {}
          }
        },
        "_stats": {
          "compendiumSource": null,
          "duplicateSource": null,
          "exportSource": null,
          "coreVersion": "13.351",
          "systemId": "wfrp4e",
          "systemVersion": "9.3.2",
          "lastModifiedBy": null
        }
      }
    ],
    "sort": -100000,
    "flags": {
      "wfrp4e-up-in-arms": {
        "initialization-folder": "Weapons",
        "sort": 1500000
      }
    },
    "_stats": {
      "compendiumSource": "Compendium.wfrp4e-up-in-arms.items.Item.HxOhYpAxqdcyoSje",
      "duplicateSource": null,
      "exportSource": null,
      "coreVersion": "13.351",
      "systemId": "wfrp4e",
      "systemVersion": "9.4.1",
      "lastModifiedBy": "khhY7fuxf56JOp5M",
      "modifiedTime": 1774895298046
    },
    "_id": "LS1d4k14X5rmHhSj",
    "ownership": {
      "default": 0
    }
  }
}
