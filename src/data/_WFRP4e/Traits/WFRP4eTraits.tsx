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

export function trait_size(size: string) {
    return {
        "name": "Size",
        "type": "trait",
        "img": "modules/wfrp4e-core/icons/traits/trait.png",
        "effects": [
            {
                "name": "Size ("+size+")",
                "_id": "JMSrxnNcqyguP1pz",
                "disabled": false,
                "duration": {
                    "value": null,
                    "units": "seconds",
                    "expiry": null,
                    "expired": false
                },
                "description": "",
                "origin": null,
                "transfer": true,
                "statuses": [],
                "flags": {
                    "wfrp4e": {
                        "applicationData": {},
                        "scriptData": [],
                        "_legacyData": {}
                    }
                },
                "tint": "#ffffff",
                "_stats": {
                    "coreVersion": "14.364",
                    "systemId": "wfrp4e",
                    "systemVersion": "9.6.1",
                    "createdTime": 1782345963585,
                    "modifiedTime": 1782345963585,
                    "lastModifiedBy": "khhY7fuxf56JOp5M",
                    "compendiumSource": null,
                    "duplicateSource": null,
                    "exportSource": null
                },
                "img": "modules/wfrp4e-core/icons/traits/trait.png",
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
                        "testIndependent": false,
                        "equipTransfer": false,
                        "prompt": false,
                        "area": {
                            "aura": {
                                "transferred": false,
                                "render": false,
                                "visibility": 0
                            },
                            "shape": {
                                "color": null,
                                "type": "circle",
                                "angle": 60,
                                "curvature": "round",
                                "base": {
                                    "width": 1,
                                    "height": 1,
                                    "hole": false,
                                    "shape": 4,
                                    "type": "token"
                                }
                            },
                            "keep": false,
                            "duration": "sustained"
                        },
                        "originalType": "document",
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
                            "label": "Size",
                            "trigger": "immediate",
                            "options": {
                                "hideScript": "",
                                "activateScript": "",
                                "submissionScript": "",
                                "targeter": false,
                                "deleteEffect": false,
                                "defending": false,
                                "runIfDisabled": false,
                                "showDuplicates": false
                            },
                            "script": "[Script.PmELrzD3RmF9qKkO]",
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
                    "changes": [],
                    "itemTargetData": {
                        "ids": [],
                        "allItems": false
                    },
                    "condition": {
                        "numbered": false
                    }
                },
                "sort": 0,
                "start": null,
                "showIcon": 1,
                "folder": null
            }
        ],
        "flags": {
            "_sheetTab": {},
            "core": {}
        },
        "system": {
            "description": {
                "value": "<p>@UUID[Compendium.wfrp4e-core.journals.JournalEntry.3ZynTGhFpgwv6l1n.JournalEntryPage.JY7F6lwqt2YGPddY]{Size}</p>"
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
                "value": "Small"
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
            "systemId": "wfrp4e",
            "systemVersion": "9.6.1",
            "coreVersion": "14.364",
            "createdTime": 1782345963585,
            "modifiedTime": 1782345963585,
            "lastModifiedBy": "khhY7fuxf56JOp5M",
            "compendiumSource": "Compendium.wfrp4e-core.items.Item.8slW8CJ2oVTxeQ6q",
            "duplicateSource": null,
            "exportSource": null
        },
        "_id": "yB6azOaL9k1x207v",
        "folder": "LjyFyBwUbRxLvkuI",
        "sort": 1200000,
        "ownership": {
            "default": 0
        }
    }
}