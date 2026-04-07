export function arm_mailCoif(equipped: boolean) {
  return {
    "name": "Mail Coif",
    "type": "armour",
    "img": "modules/wfrp4e-core/icons/equipment/armour/mail-coif.png",
    "effects": [
      {
        "_id": "6pQrluba3OWBJgYI",
        "flags": {
          "wfrp4e": {
            "hide": false,
            "applicationData": {},
            "scriptData": [],
            "_legacyData": {}
          }
        },
        "changes": [],
        "disabled": false,
        "duration": {
          "startTime": null,
          "seconds": null,
          "combat": null,
          "rounds": null,
          "turns": null,
          "startRound": null,
          "startTurn": null
        },
        "tint": "#ffffff",
        "transfer": true,
        "origin": null,
        "name": "Mail Coif",
        "description": "",
        "statuses": [],
        "_stats": {
          "compendiumSource": null,
          "duplicateSource": null,
          "exportSource": null,
          "coreVersion": "13.351",
          "systemId": "wfrp4e",
          "systemVersion": "9.4.1",
          "lastModifiedBy": null
        },
        "img": "modules/wfrp4e-core/icons/equipment/armour/mail-coif.png",
        "type": "base",
        "system": {
          "transferData": {
            "type": "document",
            "documentType": "Actor",
            "avoidTest": {
              "value": "none",
              "opposed": false,
              "prevention": true,
              "reversed": false
            },
            "equipTransfer": true,
            "prompt": false,
            "area": {
              "aura": {
                "transferred": false,
                "render": false
              },
              "templateData": {
                "borderColor": null,
                "fillColor": null,
                "texture": null
              },
              "keep": false,
              "duration": "sustained"
            },
            "originalType": "document",
            "testIndependent": false,
            "selfOnly": false,
            "zone": {
              "type": "zone",
              "transferred": false,
              "traits": {},
              "skipImmediateOnPlacement": false,
              "keep": false
            }
          },
          "scriptData": [
            {
              "label": "Mail Coif",
              "trigger": "dialog",
              "script": "[Script.xvGxwv7X0Vq3vNqb]",
              "options": {
                "activateScript": "[Script.9RFoasDcFnYZ1txR]",
                "hideScript": "[Script.h0DfPwUUOBjyAHMZ]",
                "submissionScript": "",
                "targeter": false,
                "deleteEffect": false,
                "defending": false,
                "runIfDisabled": false,
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
          "itemTargetData": {
            "ids": [],
            "allItems": false
          },
          "condition": {
            "numbered": false
          }
        },
        "sort": 0
      }
    ],
    "flags": {
      "_sheetTab": {},
      "core": {}
    },
    "system": {
      "description": {
        "value": "<p></p>"
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
      "armorType": {
        "value": "mail"
      },
      "penalty": {
        "value": "-10 Perception"
      },
      "qualities": {
        "value": [
          {
            "name": "flexible"
          }
        ]
      },
      "flaws": {
        "value": [
          {
            "name": "partial"
          }
        ]
      },
      "special": {
        "value": ""
      },
      "AP": {
        "head": 2,
        "lArm": 0,
        "rArm": 0,
        "lLeg": 0,
        "rLeg": 0,
        "body": 0
      },
      "APdamage": {
        "head": 0,
        "lArm": 0,
        "rArm": 0,
        "lLeg": 0,
        "rLeg": 0,
        "body": 0
      },
      "equipped": {
        "value": equipped
      }
    },
    "_stats": {
      "compendiumSource": "Compendium.wfrp4e-core.items.Item.4xV16ttsxCa311vl",
      "duplicateSource": null,
      "exportSource": {
        "worldId": "compendium-project-whf4e",
        "uuid": "Item.4xV16ttsxCa311vl",
        "coreVersion": "13.351",
        "systemId": "wfrp4e",
        "systemVersion": "9.4.1"
      },
      "coreVersion": "13.351",
      "systemId": "wfrp4e",
      "systemVersion": "9.4.1",
      "createdTime": 1775241857658,
      "modifiedTime": 1775241857658,
      "lastModifiedBy": "khhY7fuxf56JOp5M"
    },
    "_id": "4xV16ttsxCa311vl",
    "folder": "urDb04aC38SChVU2",
    "ownership": {
      "default": 0
    }
  }
}
export function arm_mailCoat(equipped: boolean) {
  return {
    "name": "Mail Coat",
    "type": "armour",
    "img": "modules/wfrp4e-core/icons/equipment/armour/mail-coat.png",
    "effects": [],
    "flags": {
      "_sheetTab": {},
      "core": {}
    },
    "system": {
      "description": {
        "value": "<p></p>"
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
        "gc": 3,
        "ss": 0,
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
      "armorType": {
        "value": "mail"
      },
      "penalty": {
        "value": ""
      },
      "qualities": {
        "value": [
          {
            "name": "flexible"
          }
        ]
      },
      "flaws": {
        "value": []
      },
      "special": {
        "value": ""
      },
      "AP": {
        "head": 0,
        "lArm": 2,
        "rArm": 2,
        "lLeg": 0,
        "rLeg": 0,
        "body": 2
      },
      "APdamage": {
        "head": 0,
        "lArm": 0,
        "rArm": 0,
        "lLeg": 0,
        "rLeg": 0,
        "body": 0
      },
      "equipped": {
        "value": equipped
      }
    },
    "_stats": {
      "compendiumSource": "Compendium.wfrp4e-core.items.Item.i76oPVM2eFEs5IBh",
      "duplicateSource": null,
      "exportSource": {
        "worldId": "compendium-project-whf4e",
        "uuid": "Item.ujVANHVKb4SP5YK2",
        "coreVersion": "13.351",
        "systemId": "wfrp4e",
        "systemVersion": "9.4.1"
      },
      "coreVersion": "13.351",
      "systemId": "wfrp4e",
      "systemVersion": "9.4.1",
      "createdTime": 1775241936437,
      "modifiedTime": 1775241936437,
      "lastModifiedBy": "khhY7fuxf56JOp5M"
    },
    "_id": "ujVANHVKb4SP5YK2",
    "folder": "urDb04aC38SChVU2",
    "ownership": {
      "default": 0
    }
  }
}
export function arm_mailShirt(equipped: boolean) {
  return {
    "name": "Mail Shirt",
    "type": "armour",
    "img": "modules/wfrp4e-core/icons/equipment/armour/mail-shirt.png",
    "effects": [],
    "flags": {
      "_sheetTab": {},
      "core": {}
    },
    "system": {
      "description": {
        "value": "<p></p>"
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
        "gc": 2,
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
      "armorType": {
        "value": "mail"
      },
      "penalty": {
        "value": ""
      },
      "qualities": {
        "value": [
          {
            "name": "flexible"
          }
        ]
      },
      "flaws": {
        "value": []
      },
      "special": {
        "value": ""
      },
      "AP": {
        "head": 0,
        "lArm": 0,
        "rArm": 0,
        "lLeg": 0,
        "rLeg": 0,
        "body": 2
      },
      "APdamage": {
        "head": 0,
        "lArm": 0,
        "rArm": 0,
        "lLeg": 0,
        "rLeg": 0,
        "body": 0
      },
      "equipped": {
        "value": equipped
      }
    },
    "_stats": {
      "compendiumSource": "Compendium.wfrp4e-core.items.Item.cJdfHOVbghTf4Eo0",
      "duplicateSource": null,
      "exportSource": null,
      "coreVersion": "13.351",
      "systemId": "wfrp4e",
      "systemVersion": "9.3.2",
      "createdTime": 1764673138153,
      "modifiedTime": 1764673138153,
      "lastModifiedBy": "khhY7fuxf56JOp5M"
    },
    "_id": "qg4QjgZPU3flxx0N",
    "folder": "urDb04aC38SChVU2",
    "sort": 900000,
    "ownership": {
      "default": 0
    }
  }
}
export function arm_mailChausses(equipped: boolean) {
  return{
  "name": "Mail Chausses",
  "type": "armour",
  "img": "modules/wfrp4e-core/icons/equipment/armour/mail-chausses.png",
  "effects": [],
  "flags": {
    "_sheetTab": {},
    "core": {}
  },
  "system": {
    "description": {
      "value": "<p></p>"
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
      "gc": 2,
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
    "armorType": {
      "value": "mail"
    },
    "penalty": {
      "value": ""
    },
    "qualities": {
      "value": [
        {
          "name": "flexible"
        }
      ]
    },
    "flaws": {
      "value": []
    },
    "special": {
      "value": ""
    },
    "AP": {
      "head": 0,
      "lArm": 0,
      "rArm": 0,
      "lLeg": 2,
      "rLeg": 2,
      "body": 0
    },
    "APdamage": {
      "head": 0,
      "lArm": 0,
      "rArm": 0,
      "lLeg": 0,
      "rLeg": 0,
      "body": 0
    },
    "equipped": {
      "value": equipped
    }
  },
  "_stats": {
    "compendiumSource": "Compendium.wfrp4e-core.items.Item.XWlkZVUhzO0CwaiJ",
    "duplicateSource": null,
    "exportSource": {
      "worldId": "compendium-project-whf4e",
      "uuid": "Item.XWlkZVUhzO0CwaiJ",
      "coreVersion": "13.351",
      "systemId": "wfrp4e",
      "systemVersion": "9.4.1"
    },
    "coreVersion": "13.351",
    "systemId": "wfrp4e",
    "systemVersion": "9.4.1",
    "createdTime": 1775241989380,
    "modifiedTime": 1775241989380,
    "lastModifiedBy": "khhY7fuxf56JOp5M"
  },
  "_id": "XWlkZVUhzO0CwaiJ",
  "folder": "urDb04aC38SChVU2",
  "ownership": {
    "default": 0
  }
}
}
