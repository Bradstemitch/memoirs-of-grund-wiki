export function arm_plateOpenHelm(equipped: boolean) {
  return {
    "name": "Plate Open Helm",
    "type": "armour",
    "img": "modules/wfrp4e-core/icons/equipment/armour/plate-open-helm.png",
    "effects": [
      {
        "_id": "YLns5DNubGbr27Lh",
        "flags": {
          "wfrp4e": {
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
        "name": "Plate Open Helm",
        "description": "",
        "statuses": [],
        "_stats": {
          "compendiumSource": null,
          "duplicateSource": null,
          "exportSource": null,
          "coreVersion": "13.351",
          "systemId": "wfrp4e",
          "systemVersion": "9.3.2",
          "lastModifiedBy": null
        },
        "img": "modules/wfrp4e-core/icons/equipment/armour/plate-open-helm.png",
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
              "label": "Plate Open Helm",
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
        "value": 1
      },
      "price": {
        "gc": 2,
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
        "value": "plate"
      },
      "penalty": {
        "value": "-10 Perception"
      },
      "qualities": {
        "value": []
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
      "compendiumSource": "Compendium.wfrp4e-core.items.Item.TvUKzvXjc2VChuTT",
      "duplicateSource": null,
      "exportSource": null,
      "coreVersion": "13.351",
      "systemId": "wfrp4e",
      "systemVersion": "9.3.2",
      "createdTime": 1764673159111,
      "modifiedTime": 1764673161322,
      "lastModifiedBy": "khhY7fuxf56JOp5M"
    },
    "_id": "vECmcQxaCcwDMn4b",
    "folder": "urDb04aC38SChVU2",
    "sort": 800000,
    "ownership": {
      "default": 0
    }
  }
}