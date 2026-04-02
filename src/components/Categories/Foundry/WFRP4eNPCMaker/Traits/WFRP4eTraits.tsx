export const trait_hardy = {
    "name": "Hardy",
    "type": "trait",
    "img": "modules/wfrp4e-core/icons/traits/trait.png",
    "effects": [
        {
            "_id": "yrUvulIfrQfAJmkB",
            "flags": {
                "wfrp4e": {
                    "_legacyData": {
                        "effectApplication": "actor",
                        "effectTrigger": "preWoundCalc",
                        "preventDuplicateEffects": false,
                        "script": "args.multiplier.tb += 1"
                    }
                }
            },
            "changes": [],
            "disabled": false,
            "duration": {
                "startTime": 0,
                "seconds": null,
                "combat": null,
                "rounds": null,
                "turns": null,
                "startRound": 0,
                "startTurn": 0
            },
            "tint": "#ffffff",
            "transfer": false,
            "origin": "Compendium.memoirs-of-grund.grund-monsters-whf4e.Actor.sdWCZDrhLiySVTiF.Item.63Gh7SAE68q03M9U",
            "name": "Hardy",
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
            "img": "modules/wfrp4e-core/icons/traits/trait.png",
            "type": "base",
            "system": {
                "transferData": {
                    "type": "document",
                    "documentType": "Actor",
                    "equipTransfer": false,
                    "selfOnly": false,
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
                    "avoidTest": {
                        "value": "none",
                        "opposed": false,
                        "prevention": true,
                        "reversed": false
                    },
                    "testIndependent": false,
                    "prompt": false,
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
                        "label": "Hardy",
                        "trigger": "preWoundCalc",
                        "script": "args.multiplier.tb += 1",
                        "options": {
                            "targeter": false,
                            "defending": false,
                            "runIfDisabled": false,
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
                "itemTargetData": {
                    "ids": [],
                    "allItems": false
                },
                "condition": {
                    "value": null,
                    "numbered": false
                }
            },
            "sort": 0
        }
    ],
    "flags": {
        "core": {}
    },
    "system": {
        "description": {
            "value": "<p>The creature can sustain more damage than most. Increase its Wounds by a number equal to its Toughness Bonus (applied before any Size modifers).</p>"
        },
        "gmdescription": {
            "value": ""
        },
        "rollable": {
            "value": false,
            "damage": false,
            "skill": "",
            "bonusCharacteristic": "",
            "dice": "",
            "defaultDifficulty": "challenging",
            "SL": true,
            "attackType": "melee"
        },
        "specification": {
            "value": ""
        },
        "qualities": {
            "value": []
        },
        "flaws": {
            "value": []
        },
        "category": "standard",
        "disabled": false
    },
    "_stats": {
        "compendiumSource": "Compendium.wfrp4e-core.items.HbrwGhUl0ZXz4kLA",
        "duplicateSource": null,
        "exportSource": null,
        "coreVersion": "13.351",
        "systemId": "wfrp4e",
        "systemVersion": "9.3.2",
        "lastModifiedBy": null
    },
    "_id": "46rYko2udQp5fXws",
    "folder": "LjyFyBwUbRxLvkuI",
    "sort": 0,
    "ownership": {
        "default": 0
    }
}