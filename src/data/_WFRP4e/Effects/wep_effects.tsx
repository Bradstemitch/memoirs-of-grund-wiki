export const wepEffect_wreathedInShadows = {
    "name": "Wreathed in Shadow",
    "img": "systems/wfrp4e/icons/blank.png",
    "description": "<p>These weapons are often made by Grey Wizard artificers. The blade of a melee weapon seems insubstantial and ghostly, while the same effect lingers on the string of a bow or crossbow, and is conferred to any ammunition the weapon fires. Any target hit by the weapon receives no benefit from non-magical armour.</p>",
    "system": {
        "transferData": {
            "documentType": "Item",
            "type": "document",
            "originalType": "document",
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
                "aura": {
                    "transferred": false,
                    "render": false,
                    "visibility": 0
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
        "scriptData": [
            {
                "script": "[Script.YjKiWcx7d2nwPy4L]",
                "label": "@effect.name",
                "trigger": "computeApplyDamageModifiers",
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
        "itemTargetData": {
            "ids": [],
            "allItems": false
        },
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
        },
        "changes": []
    },
    "_id": "BLG7cB4KkyvyQjRA",
    "type": "base",
    "disabled": false,
    "start": null,
    "duration": {
        "value": null,
        "units": "seconds",
        "expiry": null,
        "expired": false
    },
    "origin": null,
    "tint": "#ffffff",
    "transfer": false,
    "statuses": [],
    "showIcon": 1,
    "folder": "ZiSGnZWrqwrU8Dba",
    "sort": 50000,
    "flags": {
        "wfrp4e": {
            "manualEffectKeys": false,
            "applicationData": {},
            "scriptData": [],
            "_legacyData": {}
        }
    },
    "_stats": {
        "coreVersion": "14.364",
        "systemId": "wfrp4e",
        "systemVersion": "9.6.1",
        "createdTime": 1783600855648,
        "modifiedTime": 1783600855648,
        "lastModifiedBy": "khhY7fuxf56JOp5M",
        "compendiumSource": "Compendium.wfrp4e-archives2.effects.ActiveEffect.KRHZ49jjhIoEV4LR",
        "duplicateSource": null,
        "exportSource": null
    }
}