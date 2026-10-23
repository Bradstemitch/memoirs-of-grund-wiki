export function trait_armour(enabled: boolean, value: number) {
  return {
    name: `Armour`,
    type: `trait`,
    img: `modules/wfrp4e-core/icons/traits/trait.png`,
    effects: [
      {
        _id: `CAcGBn8sq62mVUxJ`,
        flags: {
          wfrp4e: {
            applicationData: {},
            scriptData: [],
            _legacyData: {},
          },
        },
        disabled: false,
        duration: {
          value: null,
          units: `seconds`,
          expiry: null,
          expired: false,
        },
        tint: `#ffffff`,
        transfer: true,
        origin: null,
        name: `Armour`,
        description: ``,
        statuses: [],
        _stats: {
          coreVersion: `14.364`,
          systemId: `wfrp4e`,
          systemVersion: `9.6.3`,
          createdTime: 1786590554151,
          modifiedTime: 1786590554151,
          lastModifiedBy: `khhY7fuxf56JOp5M`,
          compendiumSource: null,
          duplicateSource: null,
          exportSource: null,
        },
        img: `modules/wfrp4e-core/icons/traits/trait.png`,
        type: `base`,
        system: {
          transferData: {
            type: `document`,
            documentType: `Actor`,
            avoidTest: {
              value: `none`,
              opposed: false,
              prevention: true,
              reversed: false,
            },
            testIndependent: false,
            equipTransfer: false,
            prompt: false,
            area: {
              aura: {
                transferred: false,
                render: false,
                visibility: 0,
              },
              shape: {
                color: null,
                type: `circle`,
                angle: 60,
                curvature: `round`,
                base: {
                  width: 1,
                  height: 1,
                  hole: false,
                  shape: 4,
                  type: `token`,
                },
              },
              keep: false,
              duration: `sustained`,
            },
            originalType: `document`,
            selfOnly: false,
            zone: {
              type: `zone`,
              transferred: false,
              traits: {},
              skipImmediateOnPlacement: false,
              keep: false,
            },
          },
          scriptData: [
            {
              label: `Armour`,
              trigger: `APCalc`,
              script: `[Script.Vb7rgl8T4VRswbnZ]`,
              options: {
                hideScript: ``,
                activateScript: ``,
                submissionScript: ``,
                targeter: false,
                deleteEffect: false,
                defending: false,
                runIfDisabled: false,
                showDuplicates: false,
              },
              async: false,
            },
            {
              label: `Set Value`,
              script: `[Script.2QB0LjueuJcIaHaC]`,
              trigger: `immediate`,
              options: {
                hideScript: ``,
                activateScript: ``,
                submissionScript: ``,
                targeter: false,
                deleteEffect: false,
                defending: false,
                runIfDisabled: false,
                showDuplicates: false,
              },
              async: false,
            },
          ],
          zone: {
            type: `zone`,
            traits: {},
            skipImmediateOnPlacement: false,
          },
          sourceData: {
            test: {},
          },
          changes: [],
          itemTargetData: {
            ids: [],
            allItems: false,
          },
          condition: {
            numbered: false,
          },
        },
        sort: 0,
        start: null,
        showIcon: 1,
        folder: null,
      },
    ],
    flags: {
      _sheetTab: {},
      core: {},
    },
    system: {
      description: {
        value:
          `<p>The creature is protected by armor or thick hide. It has Rating Armor Points on all Hit Locations</p>`,
      },
      gmdescription: {
        value: ``,
      },
      rollable: {
        value: false,
        damage: false,
        skill: ``,
        bonusCharacteristic: ``,
        dice: ``,
        defaultDifficulty: `challenging`,
        SL: true,
        attackType: `melee`,
      },
      specification: {
        value: value,
      },
      qualities: {
        value: [],
      },
      flaws: {
        value: [],
      },
      category: `standard`,
      disabled: false,
    },
    _stats: {
      systemId: `wfrp4e`,
      systemVersion: `9.6.3`,
      coreVersion: `14.364`,
      createdTime: 1786590554151,
      modifiedTime: 1786590554151,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
      compendiumSource: `Compendium.wfrp4e-core.items.Item.VUJUZVN3VYhOaPjj`,
      duplicateSource: null,
      exportSource: {
        worldId: `compendium-project-whf4e`,
        uuid: `Item.VUJUZVN3VYhOaPjj`,
        coreVersion: `14.364`,
        systemId: `wfrp4e`,
        systemVersion: `9.6.3`,
      },
    },
    _id: `VUJUZVN3VYhOaPjj`,
    folder: `LjyFyBwUbRxLvkuI`,
    ownership: {
      default: 0,
    },
  };
}

export function trait_hardy(enabled: boolean) {
  return {
    name: `Hardy`,
    type: `trait`,
    img: `modules/wfrp4e-core/icons/traits/trait.png`,
    effects: [
      {
        _id: `yrUvulIfrQfAJmkB`,
        flags: {
          wfrp4e: {
            _legacyData: {
              effectApplication: `actor`,
              effectTrigger: `preWoundCalc`,
              preventDuplicateEffects: false,
              script: `args.multiplier.tb += 1`,
            },
          },
        },
        changes: [],
        disabled: !enabled,
        duration: {
          startTime: 0,
          seconds: null,
          combat: null,
          rounds: null,
          turns: null,
          startRound: 0,
          startTurn: 0,
        },
        tint: `#ffffff`,
        transfer: false,
        origin:
          `Compendium.memoirs-of-grund.grund-monsters-whf4e.Actor.sdWCZDrhLiySVTiF.Item.63Gh7SAE68q03M9U`,
        name: `Hardy`,
        description: ``,
        statuses: [],
        _stats: {
          compendiumSource: null,
          duplicateSource: null,
          exportSource: null,
          coreVersion: `13.351`,
          systemId: `wfrp4e`,
          systemVersion: `9.3.2`,
          lastModifiedBy: null,
        },
        img: `modules/wfrp4e-core/icons/traits/trait.png`,
        type: `base`,
        system: {
          transferData: {
            type: `document`,
            documentType: `Actor`,
            equipTransfer: false,
            selfOnly: false,
            area: {
              aura: {
                transferred: false,
                render: false,
              },
              templateData: {
                borderColor: null,
                fillColor: null,
                texture: null,
              },
              keep: false,
              duration: `sustained`,
            },
            originalType: `document`,
            avoidTest: {
              value: `none`,
              opposed: false,
              prevention: true,
              reversed: false,
            },
            testIndependent: false,
            prompt: false,
            zone: {
              type: `zone`,
              transferred: false,
              traits: {},
              skipImmediateOnPlacement: false,
              keep: false,
            },
          },
          scriptData: [
            {
              label: `Hardy`,
              trigger: `preWoundCalc`,
              script: `args.multiplier.tb += 1`,
              options: {
                targeter: false,
                defending: false,
                runIfDisabled: false,
                deleteEffect: false,
                showDuplicates: false,
              },
              async: false,
            },
          ],
          zone: {
            type: `zone`,
            traits: {},
            skipImmediateOnPlacement: false,
          },
          sourceData: {
            test: {},
          },
          itemTargetData: {
            ids: [],
            allItems: false,
          },
          condition: {
            value: null,
            numbered: false,
          },
        },
        sort: 0,
      },
    ],
    flags: {
      core: {},
    },
    system: {
      description: {
        value:
          `<p>The creature can sustain more damage than most. Increase its Wounds by a number equal to its Toughness Bonus (applied before any Size modifers).</p>`,
      },
      gmdescription: {
        value: ``,
      },
      rollable: {
        value: false,
        damage: false,
        skill: ``,
        bonusCharacteristic: ``,
        dice: ``,
        defaultDifficulty: `challenging`,
        SL: true,
        attackType: `melee`,
      },
      specification: {
        value: ``,
      },
      qualities: {
        value: [],
      },
      flaws: {
        value: [],
      },
      category: `standard`,
      disabled: false,
    },
    _stats: {
      compendiumSource: `Compendium.wfrp4e-core.items.HbrwGhUl0ZXz4kLA`,
      duplicateSource: null,
      exportSource: null,
      coreVersion: `13.351`,
      systemId: `wfrp4e`,
      systemVersion: `9.3.2`,
      lastModifiedBy: null,
    },
    _id: `46rYko2udQp5fXws`,
    folder: `LjyFyBwUbRxLvkuI`,
    sort: 0,
    ownership: {
      default: 0,
    },
  };
}

export function trait_size(enabled: boolean, size: string) {
  return {
    name: `Size`,
    type: `trait`,
    img: `modules/wfrp4e-core/icons/traits/trait.png`,
    effects: [
      {
        name: `Size (` + size + `)`,
        _id: `JMSrxnNcqyguP1pz`,
        disabled: !enabled,
        duration: {
          value: null,
          units: `seconds`,
          expiry: null,
          expired: false,
        },
        description: ``,
        origin: null,
        transfer: true,
        statuses: [],
        flags: {
          wfrp4e: {
            applicationData: {},
            scriptData: [],
            _legacyData: {},
          },
        },
        tint: `#ffffff`,
        _stats: {
          coreVersion: `14.364`,
          systemId: `wfrp4e`,
          systemVersion: `9.6.1`,
          createdTime: 1782345963585,
          modifiedTime: 1782345963585,
          lastModifiedBy: `khhY7fuxf56JOp5M`,
          compendiumSource: null,
          duplicateSource: null,
          exportSource: null,
        },
        img: `modules/wfrp4e-core/icons/traits/trait.png`,
        type: `base`,
        system: {
          transferData: {
            type: `document`,
            documentType: `Actor`,
            avoidTest: {
              value: `none`,
              opposed: false,
              prevention: true,
              reversed: false,
            },
            testIndependent: false,
            equipTransfer: false,
            prompt: false,
            area: {
              aura: {
                transferred: false,
                render: false,
                visibility: 0,
              },
              shape: {
                color: null,
                type: `circle`,
                angle: 60,
                curvature: `round`,
                base: {
                  width: 1,
                  height: 1,
                  hole: false,
                  shape: 4,
                  type: `token`,
                },
              },
              keep: false,
              duration: `sustained`,
            },
            originalType: `document`,
            selfOnly: false,
            zone: {
              type: `zone`,
              transferred: false,
              traits: {},
              skipImmediateOnPlacement: false,
              keep: false,
            },
          },
          scriptData: [
            {
              label: `Size`,
              trigger: `immediate`,
              options: {
                hideScript: ``,
                activateScript: ``,
                submissionScript: ``,
                targeter: false,
                deleteEffect: false,
                defending: false,
                runIfDisabled: false,
                showDuplicates: false,
              },
              script: `[Script.PmELrzD3RmF9qKkO]`,
              async: false,
            },
          ],
          zone: {
            type: `zone`,
            traits: {},
            skipImmediateOnPlacement: false,
          },
          sourceData: {
            test: {},
          },
          changes: [],
          itemTargetData: {
            ids: [],
            allItems: false,
          },
          condition: {
            numbered: false,
          },
        },
        sort: 0,
        start: null,
        showIcon: 1,
        folder: null,
      },
    ],
    flags: {
      _sheetTab: {},
      core: {},
    },
    system: {
      description: {
        value:
          `<p>@UUID[Compendium.wfrp4e-core.journals.JournalEntry.3ZynTGhFpgwv6l1n.JournalEntryPage.JY7F6lwqt2YGPddY]{Size}</p>`,
      },
      gmdescription: {
        value: ``,
      },
      rollable: {
        value: false,
        damage: false,
        skill: ``,
        bonusCharacteristic: ``,
        dice: ``,
        defaultDifficulty: `challenging`,
        SL: true,
        attackType: `melee`,
      },
      specification: {
        value: `Small`,
      },
      qualities: {
        value: [],
      },
      flaws: {
        value: [],
      },
      category: `standard`,
      disabled: false,
    },
    _stats: {
      systemId: `wfrp4e`,
      systemVersion: `9.6.1`,
      coreVersion: `14.364`,
      createdTime: 1782345963585,
      modifiedTime: 1782345963585,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
      compendiumSource: `Compendium.wfrp4e-core.items.Item.8slW8CJ2oVTxeQ6q`,
      duplicateSource: null,
      exportSource: null,
    },
    _id: `yB6azOaL9k1x207v`,
    folder: `LjyFyBwUbRxLvkuI`,
    sort: 1200000,
    ownership: {
      default: 0,
    },
  };
}

export function trait_bite(enabled: boolean) {
  return {
    name: `Bite`,
    type: `trait`,
    img: `modules/wfrp4e-core/icons/traits/trait.png`,
    effects: [
      {
        name: `Bite`,
        _id: `JqX5XmH4ZXiST9ML`,
        disabled: !enabled,
        duration: {
          value: null,
          units: `seconds`,
          expiry: null,
          expired: false,
        },
        description: ``,
        origin: null,
        transfer: true,
        statuses: [],
        flags: {
          wfrp4e: {
            applicationData: {},
            scriptData: [],
            _legacyData: {},
          },
        },
        tint: `#ffffff`,
        _stats: {
          coreVersion: `14.364`,
          systemId: `wfrp4e`,
          systemVersion: `9.6.3`,
          createdTime: 1786091780072,
          modifiedTime: 1786091780072,
          lastModifiedBy: `khhY7fuxf56JOp5M`,
          compendiumSource: null,
          duplicateSource: null,
          exportSource: null,
        },
        img: `modules/wfrp4e-core/icons/traits/trait.png`,
        type: `base`,
        system: {
          transferData: {
            type: `document`,
            documentType: `Actor`,
            avoidTest: {
              value: `none`,
              opposed: false,
              prevention: true,
              reversed: false,
            },
            equipTransfer: false,
            prompt: false,
            area: {
              aura: {
                transferred: false,
                render: false,
                visibility: 0,
              },
              shape: {
                color: null,
                type: `circle`,
                angle: 60,
                curvature: `round`,
                base: {
                  width: 1,
                  height: 1,
                  hole: false,
                  shape: 4,
                  type: `token`,
                },
              },
              keep: false,
              duration: `sustained`,
            },
            originalType: `document`,
            testIndependent: false,
            selfOnly: false,
            zone: {
              type: `zone`,
              transferred: false,
              traits: {},
              skipImmediateOnPlacement: false,
              keep: false,
            },
          },
          scriptData: [
            {
              label: `Bite (Free Attack)`,
              trigger: `manual`,
              options: {
                hideScript: ``,
                activateScript: ``,
                submissionScript: ``,
                targeter: false,
                deleteEffect: false,
                defending: false,
                runIfDisabled: false,
                showDuplicates: false,
              },
              script: `[Script.n5RJqJL9fdRIxkuN]`,
              async: false,
            },
          ],
          zone: {
            type: `zone`,
            traits: {},
            skipImmediateOnPlacement: false,
          },
          sourceData: {
            test: {},
          },
          changes: [],
          itemTargetData: {
            ids: [],
            allItems: false,
          },
          condition: {
            numbered: false,
          },
        },
        sort: 0,
        start: {
          combat: null,
          round: null,
          time: 0,
          turn: null,
          combatant: null,
          initiative: null,
        },
        showIcon: 1,
        folder: null,
      },
    ],
    flags: {
      _sheetTab: {},
      core: {},
    },
    system: {
      description: {
        value:
          `On its turn, the creature may make a Free Attack by spending 1 Advantage. The Damage of the attack equals Rating and includes the creature’s Strength Bonus already`,
      },
      gmdescription: {
        value: ``,
      },
      rollable: {
        value: true,
        damage: true,
        skill: ``,
        rollCharacteristic: `ws`,
        bonusCharacteristic: `s`,
        dice: ``,
        defaultDifficulty: `challenging`,
        SL: true,
        attackType: `melee`,
      },
      specification: {
        value: `2`,
      },
      qualities: {
        value: [],
      },
      flaws: {
        value: [],
      },
      disabled: false,
      category: `standard`,
    },
    _stats: {
      systemId: `wfrp4e`,
      systemVersion: `9.6.3`,
      coreVersion: `14.364`,
      createdTime: 1786091780072,
      modifiedTime: 1786091780072,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
      compendiumSource:
        `Compendium.wfrp4e-core.actors.Actor.6B7LMdYtunAftsFN.Item.ND1rUyBl5LcDKUpq`,
      duplicateSource: null,
      exportSource: null,
    },
    folder: `LjyFyBwUbRxLvkuI`,
    sort: 6600000,
    _id: `ND1rUyBl5LcDKUpq`,
    ownership: {
      default: 0,
    },
  };
}

export function trait_infected(enabled: boolean) {
  return {
    name: `Infected`,
    type: `trait`,
    img: `modules/wfrp4e-core/icons/traits/trait.png`,
    effects: [
      {
        _id: `6rMAx2bGefOkubv8`,
        flags: {
          wfrp4e: {
            applicationData: {},
            scriptData: [],
            _legacyData: {},
          },
        },
        disabled: !enabled,
        duration: {
          value: null,
          units: `seconds`,
          expiry: null,
          expired: false,
        },
        tint: `#ffffff`,
        transfer: true,
        origin: null,
        name: `Infected`,
        description: ``,
        statuses: [],
        _stats: {
          coreVersion: `14.364`,
          systemId: `wfrp4e`,
          systemVersion: `9.6.3`,
          createdTime: 1786091780072,
          modifiedTime: 1786091780072,
          lastModifiedBy: `khhY7fuxf56JOp5M`,
          compendiumSource: null,
          duplicateSource: null,
          exportSource: null,
        },
        img: `modules/wfrp4e-core/icons/traits/trait.png`,
        type: `base`,
        system: {
          transferData: {
            type: `document`,
            documentType: `Actor`,
            avoidTest: {
              value: `none`,
              opposed: false,
              prevention: true,
              reversed: false,
            },
            equipTransfer: false,
            prompt: false,
            area: {
              aura: {
                transferred: false,
                render: false,
                visibility: 0,
              },
              shape: {
                color: null,
                type: `circle`,
                angle: 60,
                curvature: `round`,
                base: {
                  width: 1,
                  height: 1,
                  hole: false,
                  shape: 4,
                  type: `token`,
                },
              },
              keep: false,
              duration: `sustained`,
            },
            originalType: `document`,
            testIndependent: false,
            selfOnly: false,
            zone: {
              type: `zone`,
              transferred: false,
              traits: {},
              skipImmediateOnPlacement: false,
              keep: false,
            },
          },
          scriptData: [
            {
              label: `Infected`,
              trigger: `applyDamage`,
              script: `[Script.LQEWSN5KnHHATPsf]`,
              options: {
                hideScript: ``,
                activateScript: ``,
                submissionScript: ``,
                targeter: false,
                deleteEffect: false,
                defending: false,
                runIfDisabled: false,
                showDuplicates: false,
              },
              async: false,
            },
          ],
          zone: {
            type: `zone`,
            traits: {},
            skipImmediateOnPlacement: false,
          },
          sourceData: {
            test: {},
          },
          changes: [],
          itemTargetData: {
            ids: [],
            allItems: false,
          },
          condition: {
            numbered: false,
          },
        },
        sort: 0,
        start: {
          combat: null,
          round: null,
          time: 0,
          turn: null,
          combatant: null,
          initiative: null,
        },
        showIcon: 1,
        folder: null,
      },
    ],
    flags: {
      core: {},
    },
    system: {
      description: {
        value:
          `<p>The creature, or its weapon, carries a nasty infection. If it causes a living opponent to lose Wounds, it must pass an<strong> Easy (+40) Endurance </strong>Test or contract a @UUID[Compendium.wfrp4e-core.items.kKccDTGzWzSXCBOb]{Festering Wound}</p>`,
      },
      gmdescription: {
        value: ``,
      },
      rollable: {
        value: false,
        damage: false,
        skill: ``,
        bonusCharacteristic: ``,
        dice: ``,
        defaultDifficulty: `challenging`,
        SL: true,
        attackType: `melee`,
      },
      specification: {
        value: ``,
      },
      qualities: {
        value: [],
      },
      flaws: {
        value: [],
      },
      disabled: false,
      category: `standard`,
    },
    _stats: {
      systemId: `wfrp4e`,
      systemVersion: `9.6.3`,
      coreVersion: `14.364`,
      createdTime: 1786091780072,
      modifiedTime: 1786091780072,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
      compendiumSource:
        `Compendium.wfrp4e-core.actors.Actor.6B7LMdYtunAftsFN.Item.jcqCsiMeJlWUNm6k`,
      duplicateSource: null,
      exportSource: null,
    },
    folder: `LjyFyBwUbRxLvkuI`,
    sort: 5000000,
    _id: `jcqCsiMeJlWUNm6k`,
    ownership: {
      default: 0,
    },
  };
}

export function trait_nightVision(enabled: boolean) {
  return {
    name: `Night Vision`,
    type: `trait`,
    img: `modules/wfrp4e-core/icons/traits/trait.png`,
    effects: [],
    flags: {
      _sheetTab: {},
      core: {},
    },
    system: {
      description: {
        value:
          `<p>You can see very well in natural darkness. Assuming you have at least a faint source of light (such as starlight, moonlight, or bioluminescence) you can see clearly for 20 yards per level of Night Vision. Further, you can extend the effective illumination distance of any light sources by 20 yards per level of Night Vision.</p>`,
      },
      gmdescription: {
        value: ``,
      },
      rollable: {
        value: false,
        damage: false,
        skill: ``,
        bonusCharacteristic: ``,
        dice: ``,
        defaultDifficulty: `challenging`,
        SL: true,
        attackType: `melee`,
      },
      specification: {
        value: ``,
      },
      qualities: {
        value: [],
      },
      flaws: {
        value: [],
      },
      disabled: !enabled,
      category: `standard`,
    },
    _stats: {
      systemId: `wfrp4e`,
      systemVersion: `9.6.3`,
      coreVersion: `14.364`,
      createdTime: 1786091780072,
      modifiedTime: 1786091780072,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
      compendiumSource:
        `Compendium.wfrp4e-core.actors.Actor.6B7LMdYtunAftsFN.Item.H1IIwUfwFijJNbSx`,
      duplicateSource: null,
      exportSource: null,
    },
    folder: `LjyFyBwUbRxLvkuI`,
    sort: 2700000,
    _id: `H1IIwUfwFijJNbSx`,
    ownership: {
      default: 0,
    },
  };
}

export function trait_bestial(enabled: boolean) {
  return {
    name: `Bestial`,
    type: `trait`,
    img: `modules/wfrp4e-core/icons/traits/trait.png`,
    effects: [],
    flags: {
      _sheetTab: {},
      core: {},
    },
    system: {
      description: {
        value:
          `<p>The creature has no rational thought or language. It shies away from fire and gains a @Condition[Broken] Condition if struck by it. In defense, it only uses the Dodge Skill. If it loses more than half its Wounds, it will attempt to Flee unless protecting its young or cornered, or unless it has the Territorial Trait. If so, it enters Frenzy. Bestial creatures have no Fellowship characteristic</p>`,
      },
      gmdescription: {
        value: ``,
      },
      rollable: {
        value: false,
        damage: false,
        skill: ``,
        bonusCharacteristic: ``,
        dice: ``,
        defaultDifficulty: `challenging`,
        SL: true,
        attackType: `melee`,
      },
      specification: {
        value: ``,
      },
      qualities: {
        value: [],
      },
      flaws: {
        value: [],
      },
      disabled: !enabled,
      category: `standard`,
    },
    _stats: {
      systemId: `wfrp4e`,
      systemVersion: `9.6.3`,
      coreVersion: `14.364`,
      createdTime: 1786091780072,
      modifiedTime: 1786091780072,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
      compendiumSource:
        `Compendium.wfrp4e-core.actors.Actor.6B7LMdYtunAftsFN.Item.fuJRprYiNdM6s1N4`,
      duplicateSource: null,
      exportSource: null,
    },
    folder: `LjyFyBwUbRxLvkuI`,
    sort: 1600000,
    _id: `fuJRprYiNdM6s1N4`,
    ownership: {
      default: 0,
    },
  };
}

export function trait_painless(enabled: boolean) {
  return {
    name: `Painless`,
    type: `trait`,
    img: `modules/wfrp4e-core/icons/traits/trait.png`,
    effects: [],
    flags: {
      core: {},
    },
    system: {
      description: {
        value:
          `The creature feels no pain or can ignore it. All non-amputation penalties suffered from Critical Wounds are ignored, although Conditions are suffered as normal.`,
      },
      gmdescription: {
        value: ``,
      },
      rollable: {
        value: false,
        damage: false,
        skill: ``,
        bonusCharacteristic: ``,
        dice: ``,
        defaultDifficulty: `challenging`,
        SL: true,
        attackType: `melee`,
      },
      specification: {
        value: ``,
      },
      qualities: {
        value: [],
      },
      flaws: {
        value: [],
      },
      disabled: !enabled,
      category: `standard`,
    },
    _stats: {
      systemId: `wfrp4e`,
      systemVersion: `9.6.3`,
      coreVersion: `14.364`,
      createdTime: 1786091780072,
      modifiedTime: 1786091780072,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
      compendiumSource:
        `Compendium.wfrp4e-core.actors.Actor.6B7LMdYtunAftsFN.Item.LbXw9DO9twIZPtJA`,
      duplicateSource: null,
      exportSource: null,
    },
    folder: `LjyFyBwUbRxLvkuI`,
    sort: 7600000,
    _id: `LbXw9DO9twIZPtJA`,
    ownership: {
      default: 0,
    },
  };
}

export function trait_undead(enabled: boolean) {
  return {
    name: `Undead`,
    type: `trait`,
    img: `modules/wfrp4e-core/icons/traits/trait.png`,
    effects: [],
    flags: {
      core: {},
    },
    system: {
      description: {
        value:
          `The Undead are neither living, nor dead, meaning they are not reliant on the usual prerequisites for life: air, food, water… This Trait most commonly come into use when spells, miracles, or other abilities affect Undead only.`,
      },
      gmdescription: {
        value: ``,
      },
      rollable: {
        value: false,
        damage: false,
        skill: ``,
        bonusCharacteristic: ``,
        dice: ``,
        defaultDifficulty: `challenging`,
        SL: true,
        attackType: `melee`,
      },
      specification: {
        value: ``,
      },
      qualities: {
        value: [],
      },
      flaws: {
        value: [],
      },
      disabled: !enabled,
      category: `standard`,
    },
    _stats: {
      systemId: `wfrp4e`,
      systemVersion: `9.6.3`,
      coreVersion: `14.364`,
      createdTime: 1786097166209,
      modifiedTime: 1786097166209,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
      compendiumSource:
        `Compendium.wfrp4e-core.actors.Actor.T5qAtpoKtB8iwTBd.Item.229a02yzMXVY09sN`,
      duplicateSource: null,
      exportSource: null,
    },
    folder: `LjyFyBwUbRxLvkuI`,
    sort: 4200000,
    _id: `229a02yzMXVY09sN`,
    ownership: {
      default: 0,
    },
  };
}

export function trait_vampiric(enabled: boolean) {
  return {
    name: `Vampiric`,
    type: `trait`,
    img: `modules/wfrp4e-core/icons/traits/trait.png`,
    effects: [
      {
        name: `Vampiric`,
        _id: `X0Urs8Rlr15d3WAw`,
        disabled: !enabled,
        duration: {
          value: null,
          units: `seconds`,
          expiry: null,
          expired: false,
        },
        description: ``,
        origin: null,
        transfer: true,
        statuses: [],
        flags: {
          wfrp4e: {
            applicationData: {},
            scriptData: [],
            _legacyData: {},
          },
        },
        tint: `#ffffff`,
        _stats: {
          coreVersion: `14.364`,
          systemId: `wfrp4e`,
          systemVersion: `9.6.3`,
          createdTime: 1786097166209,
          modifiedTime: 1786097166209,
          lastModifiedBy: `khhY7fuxf56JOp5M`,
          compendiumSource: null,
          duplicateSource: null,
          exportSource: null,
        },
        img: `modules/wfrp4e-core/icons/traits/trait.png`,
        type: `base`,
        system: {
          transferData: {
            type: `document`,
            documentType: `Actor`,
            avoidTest: {
              value: `none`,
              opposed: false,
              prevention: true,
              reversed: false,
            },
            equipTransfer: false,
            prompt: false,
            area: {
              aura: {
                transferred: false,
                render: false,
                visibility: 0,
              },
              shape: {
                color: null,
                type: `circle`,
                angle: 60,
                curvature: `round`,
                base: {
                  width: 1,
                  height: 1,
                  hole: false,
                  shape: 4,
                  type: `token`,
                },
              },
              keep: false,
              duration: `sustained`,
            },
            originalType: `document`,
            testIndependent: false,
            selfOnly: false,
            zone: {
              type: `zone`,
              transferred: false,
              traits: {},
              skipImmediateOnPlacement: false,
              keep: false,
            },
          },
          scriptData: [
            {
              label: `Vampiric`,
              trigger: `applyDamage`,
              options: {
                hideScript: ``,
                activateScript: ``,
                submissionScript: ``,
                targeter: false,
                deleteEffect: false,
                defending: false,
                runIfDisabled: false,
                showDuplicates: false,
              },
              script: `[Script.chUpiI3el8IO8MSs]`,
              async: false,
            },
          ],
          zone: {
            type: `zone`,
            traits: {},
            skipImmediateOnPlacement: false,
          },
          sourceData: {
            test: {},
          },
          changes: [],
          itemTargetData: {
            ids: [],
            allItems: false,
          },
          condition: {
            numbered: false,
          },
        },
        sort: 0,
        start: {
          combat: null,
          round: null,
          time: 0,
          turn: null,
          combatant: null,
          initiative: null,
        },
        showIcon: 1,
        folder: null,
      },
    ],
    flags: {
      core: {},
    },
    system: {
      description: {
        value:
          `The creature feeds on blood and draws great physical strength from this act. Whenever it performs a successful Bite attack against an appropriate opponent, it heals as many Wounds as its opponent loses. Drinking blood in this way is the only way it can heal.`,
      },
      gmdescription: {
        value: ``,
      },
      rollable: {
        value: false,
        damage: false,
        skill: ``,
        bonusCharacteristic: ``,
        dice: ``,
        defaultDifficulty: `challenging`,
        SL: true,
        attackType: `melee`,
      },
      specification: {
        value: ``,
      },
      qualities: {
        value: [],
      },
      flaws: {
        value: [],
      },
      disabled: false,
      category: `standard`,
    },
    _stats: {
      systemId: `wfrp4e`,
      systemVersion: `9.6.3`,
      coreVersion: `14.364`,
      createdTime: 1786097166209,
      modifiedTime: 1786097166209,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
      compendiumSource:
        `Compendium.wfrp4e-core.actors.Actor.T5qAtpoKtB8iwTBd.Item.tlJHwKRjcKvzmVNN`,
      duplicateSource: null,
      exportSource: null,
    },
    folder: `LjyFyBwUbRxLvkuI`,
    sort: 400000,
    _id: `tlJHwKRjcKvzmVNN`,
    ownership: {
      default: 0,
    },
  };
}

export function trait_champion(enabled: boolean) {
  return {
    name: `Champion`,
    type: `trait`,
    img: `modules/wfrp4e-core/icons/traits/trait.png`,
    effects: [
      {
        name: `Champion`,
        _id: `5RbsPoPp8aQ6b8ub`,
        disabled: !enabled,
        duration: {
          value: null,
          units: `seconds`,
          expiry: null,
          expired: false,
        },
        description: ``,
        origin: null,
        transfer: true,
        statuses: [],
        flags: {
          wfrp4e: {
            applicationData: {},
            scriptData: [],
            _legacyData: {},
          },
        },
        tint: `#ffffff`,
        _stats: {
          coreVersion: `14.364`,
          systemId: `wfrp4e`,
          systemVersion: `9.6.3`,
          createdTime: 1786097166209,
          modifiedTime: 1786097166209,
          lastModifiedBy: `khhY7fuxf56JOp5M`,
          compendiumSource: null,
          duplicateSource: null,
          exportSource: null,
        },
        img: `modules/wfrp4e-core/icons/traits/trait.png`,
        type: `base`,
        system: {
          transferData: {
            type: `document`,
            documentType: `Actor`,
            avoidTest: {
              value: `none`,
              opposed: false,
              prevention: true,
              reversed: false,
            },
            testIndependent: false,
            equipTransfer: false,
            prompt: false,
            area: {
              aura: {
                transferred: false,
                render: false,
                visibility: 0,
              },
              shape: {
                color: null,
                type: `circle`,
                angle: 60,
                curvature: `round`,
                base: {
                  width: 1,
                  height: 1,
                  hole: false,
                  shape: 4,
                  type: `token`,
                },
              },
              keep: false,
              duration: `sustained`,
            },
            originalType: `document`,
            selfOnly: false,
            zone: {
              type: `zone`,
              transferred: false,
              traits: {},
              skipImmediateOnPlacement: false,
              keep: false,
            },
          },
          scriptData: [
            {
              label: `Champion`,
              trigger: `opposedDefender`,
              options: {
                hideScript: ``,
                activateScript: ``,
                submissionScript: ``,
                targeter: false,
                deleteEffect: false,
                defending: false,
                runIfDisabled: false,
                showDuplicates: false,
              },
              script: `[Script.Lp261O9fgEXmgPf3]`,
              async: false,
            },
          ],
          zone: {
            type: `zone`,
            traits: {},
            skipImmediateOnPlacement: false,
          },
          sourceData: {
            test: {},
          },
          changes: [],
          itemTargetData: {
            ids: [],
            allItems: false,
          },
          condition: {
            numbered: false,
          },
        },
        sort: 0,
        start: null,
        showIcon: 1,
        folder: null,
      },
    ],
    flags: {
      core: {},
    },
    system: {
      description: {
        value:
          `The creature is an extraordinarily skilled warrior. If it wins an Opposed Test when defending in melee combat, it can cause Damage just as if it was the attacker.`,
      },
      gmdescription: {
        value: ``,
      },
      rollable: {
        value: false,
        damage: false,
        skill: ``,
        bonusCharacteristic: ``,
        dice: `1d10`,
        defaultDifficulty: `challenging`,
        SL: true,
        attackType: `melee`,
      },
      specification: {
        value: ``,
      },
      qualities: {
        value: [],
      },
      flaws: {
        value: [],
      },
      disabled: true,
      category: `standard`,
    },
    _stats: {
      systemId: `wfrp4e`,
      systemVersion: `9.6.3`,
      coreVersion: `14.364`,
      createdTime: 1786097166209,
      modifiedTime: 1786097166209,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
      compendiumSource:
        `Compendium.wfrp4e-core.actors.Actor.T5qAtpoKtB8iwTBd.Item.mzqZEEO9rvV7Imtd`,
      duplicateSource: null,
      exportSource: null,
    },
    folder: `LjyFyBwUbRxLvkuI`,
    sort: 800000,
    _id: `mzqZEEO9rvV7Imtd`,
    ownership: {
      default: 0,
    },
  };
}

export function trait_corruption(enabled: boolean) {
  return {
    name: `Corruption`,
    type: `trait`,
    img: `modules/wfrp4e-core/icons/traits/trait.png`,
    effects: [
      {
        name: `Corruption`,
        _id: `rNq9moHHK0N4dC3S`,
        disabled: !enabled,
        duration: {
          value: null,
          units: `seconds`,
          expiry: null,
          expired: false,
        },
        description: ``,
        origin: null,
        transfer: true,
        statuses: [],
        flags: {
          wfrp4e: {
            applicationData: {},
            scriptData: [],
            _legacyData: {},
          },
        },
        tint: `#ffffff`,
        _stats: {
          coreVersion: `14.364`,
          systemId: `wfrp4e`,
          systemVersion: `9.6.3`,
          createdTime: 1786097166209,
          modifiedTime: 1786097166209,
          lastModifiedBy: `khhY7fuxf56JOp5M`,
          compendiumSource: null,
          duplicateSource: null,
          exportSource: null,
        },
        img: `modules/wfrp4e-core/icons/traits/trait.png`,
        type: `base`,
        system: {
          transferData: {
            type: `document`,
            documentType: `Actor`,
            avoidTest: {
              value: `none`,
              opposed: false,
              prevention: true,
              reversed: false,
            },
            testIndependent: false,
            equipTransfer: false,
            prompt: false,
            area: {
              aura: {
                transferred: false,
                render: false,
                visibility: 0,
              },
              shape: {
                color: null,
                type: `circle`,
                angle: 60,
                curvature: `round`,
                base: {
                  width: 1,
                  height: 1,
                  hole: false,
                  shape: 4,
                  type: `token`,
                },
              },
              keep: false,
              duration: `sustained`,
            },
            originalType: `document`,
            selfOnly: false,
            zone: {
              type: `zone`,
              transferred: false,
              traits: {},
              skipImmediateOnPlacement: false,
              keep: false,
            },
          },
          scriptData: [
            {
              label: `Corruption`,
              trigger: `manual`,
              options: {
                hideScript: ``,
                activateScript: ``,
                submissionScript: ``,
                targeter: false,
                deleteEffect: false,
                defending: false,
                runIfDisabled: false,
                showDuplicates: false,
              },
              script: `[Script.2AOo7KUyzMrgIlgM]`,
              async: false,
            },
            {
              label: `Strength Choice`,
              trigger: `immediate`,
              options: {
                hideScript: ``,
                activateScript: ``,
                submissionScript: ``,
                targeter: false,
                deleteEffect: false,
                defending: false,
                runIfDisabled: false,
                showDuplicates: false,
              },
              script: `[Script.xS2su09zcza9du09]`,
              async: false,
            },
          ],
          zone: {
            type: `zone`,
            traits: {},
            skipImmediateOnPlacement: false,
          },
          sourceData: {
            test: {},
          },
          changes: [],
          itemTargetData: {
            ids: [],
            allItems: false,
          },
          condition: {
            numbered: false,
          },
        },
        sort: 0,
        start: null,
        showIcon: 1,
        folder: null,
      },
    ],
    flags: {
      _sheetTab: {},
      core: {},
    },
    system: {
      description: {
        value:
          `<p>The creature is tainted by Chaos, or perhaps suffused with Dark Magics. The Strength of the Corruption is marked in brackets (@Corruption[minor]{Minor}, @Corruption[moderate]{Moderate}, or @Corruption[major]{Major}).</p>`,
      },
      gmdescription: {
        value: ``,
      },
      rollable: {
        value: false,
        damage: false,
        skill: ``,
        bonusCharacteristic: ``,
        dice: ``,
        defaultDifficulty: `challenging`,
        SL: true,
        attackType: `melee`,
      },
      specification: {
        value: `Minor`,
      },
      qualities: {
        value: [],
      },
      flaws: {
        value: [],
      },
      disabled: true,
      category: `standard`,
    },
    _stats: {
      systemId: `wfrp4e`,
      systemVersion: `9.6.3`,
      coreVersion: `14.364`,
      createdTime: 1786097166209,
      modifiedTime: 1786097166209,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
      compendiumSource:
        `Compendium.wfrp4e-core.actors.Actor.T5qAtpoKtB8iwTBd.Item.GWoF1sqHoCgSzYyd`,
      duplicateSource: null,
      exportSource: null,
    },
    folder: `LjyFyBwUbRxLvkuI`,
    sort: 7900000,
    _id: `GWoF1sqHoCgSzYyd`,
    ownership: {
      default: 0,
    },
  };
}

export function trait_darkVision(enabled: boolean) {
  return {
    name: `Dark Vision`,
    type: `trait`,
    img: `modules/wfrp4e-core/icons/traits/trait.png`,
    effects: [],
    flags: {
      core: {},
    },
    system: {
      description: {
        value: `The creature can see in the dark as daylight.`,
      },
      gmdescription: {
        value: ``,
      },
      rollable: {
        value: false,
        damage: false,
        skill: ``,
        bonusCharacteristic: ``,
        dice: ``,
        defaultDifficulty: `challenging`,
        SL: true,
        attackType: `melee`,
      },
      specification: {
        value: ``,
      },
      qualities: {
        value: [],
      },
      flaws: {
        value: [],
      },
      disabled: !enabled,
      category: `standard`,
    },
    _stats: {
      systemId: `wfrp4e`,
      systemVersion: `9.6.3`,
      coreVersion: `14.364`,
      createdTime: 1786097166209,
      modifiedTime: 1786097166209,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
      compendiumSource:
        `Compendium.wfrp4e-core.actors.Actor.T5qAtpoKtB8iwTBd.Item.w8PgVkk1aJh0PS9k`,
      duplicateSource: null,
      exportSource: null,
    },
    folder: `LjyFyBwUbRxLvkuI`,
    sort: 3400000,
    _id: `w8PgVkk1aJh0PS9k`,
    ownership: {
      default: 0,
    },
  };
}

export function trait_dieHard(enabled: boolean) {
  return {
    name: `Die Hard`,
    type: `trait`,
    img: `modules/wfrp4e-core/icons/traits/trait.png`,
    effects: [],
    flags: {
      _sheetTab: {},
      core: {},
    },
    system: {
      description: {
        value:
          `No matter how hard the creature is hit, it gets back up. All Critical Wounds not resulting in death can be healed; just attach the requisite body parts to the correct places, perhaps with staples or large spikes to hold them in place, and it’s good to go. Even ‘death’ may be ‘healed’ if the appropriate parts, such as a lost head, are attached to the body. If death occurs and all parts are in place, it may attempt a Challenging (+0) Endurance Test requiring an SL of 6 at the start of every round for Toughness Bonus Rounds after death. If a Test is successful, the creature chokes back to life with 1 Wound \r\r\rHR: A successful Challenging (+0) Toughness Test each turn keeps it alive, on a failure, it dies. Increasing difficulty each time it 'dies?'`,
      },
      gmdescription: {
        value: ``,
      },
      rollable: {
        value: false,
        damage: false,
        skill: ``,
        bonusCharacteristic: ``,
        dice: ``,
        defaultDifficulty: `challenging`,
        SL: true,
        attackType: `melee`,
      },
      specification: {
        value: ``,
      },
      qualities: {
        value: [],
      },
      flaws: {
        value: [],
      },
      disabled: !enabled,
      category: `standard`,
    },
    _stats: {
      systemId: `wfrp4e`,
      systemVersion: `9.6.3`,
      coreVersion: `14.364`,
      createdTime: 1786097166209,
      modifiedTime: 1786097166209,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
      compendiumSource:
        `Compendium.wfrp4e-core.actors.Actor.T5qAtpoKtB8iwTBd.Item.9QEj4WgvIag1X9UT`,
      duplicateSource: null,
      exportSource: null,
    },
    folder: `LjyFyBwUbRxLvkuI`,
    sort: 4900000,
    _id: `9QEj4WgvIag1X9UT`,
    ownership: {
      default: 0,
    },
  };
}

export function trait_distracting(enabled: boolean) {
  return {
    name: `Distracting`,
    type: `trait`,
    img: `modules/wfrp4e-core/icons/traits/trait.png`,
    effects: [
      {
        _id: `et9TgrjWHZYQI7OJ`,
        flags: {
          wfrp4e: {
            applicationData: {},
            scriptData: [],
            _legacyData: {},
          },
        },
        disabled: !enabled,
        duration: {
          value: null,
          units: `seconds`,
          expiry: null,
          expired: false,
        },
        tint: `#ffffff`,
        transfer: true,
        origin: null,
        name: `Distracting`,
        description: ``,
        statuses: [],
        _stats: {
          coreVersion: `14.364`,
          systemId: `wfrp4e`,
          systemVersion: `9.6.3`,
          createdTime: 1786097166209,
          modifiedTime: 1786097166209,
          lastModifiedBy: `khhY7fuxf56JOp5M`,
          compendiumSource: null,
          duplicateSource: null,
          exportSource: null,
        },
        img: `modules/wfrp4e-core/icons/traits/trait.png`,
        type: `base`,
        system: {
          transferData: {
            type: `aura`,
            documentType: `Actor`,
            avoidTest: {
              value: `none`,
              opposed: false,
              prevention: true,
              reversed: false,
            },
            equipTransfer: false,
            filter:
              `return ["NAME.Undead", "NAME.Construct", "Ethereal", "NAME.Daemonic"].map(i => game.i18n.localize(i)).some(i => args.has(i))`,
            prompt: false,
            area: {
              radius: `@actor.system.characteristics.t.bonus`,
              keep: false,
              aura: {
                transferred: false,
                render: false,
                visibility: 0,
              },
              shape: {
                color: null,
                type: `circle`,
                angle: 60,
                curvature: `round`,
                base: {
                  width: 1,
                  height: 1,
                  hole: false,
                  shape: 4,
                  type: `token`,
                },
              },
              duration: `sustained`,
            },
            originalType: `document`,
            testIndependent: false,
            selfOnly: false,
            zone: {
              type: `zone`,
              transferred: false,
              traits: {},
              skipImmediateOnPlacement: false,
              keep: false,
            },
          },
          scriptData: [
            {
              label: `Distracting`,
              trigger: `dialog`,
              script: `[Script.0iTLDgFHO9Rgc010]`,
              options: {
                activateScript: `[Script.AZGXrZOQ4EzjxRL9]`,
                hideScript: ``,
                submissionScript: ``,
                targeter: false,
                deleteEffect: false,
                defending: false,
                runIfDisabled: false,
                showDuplicates: false,
              },
              async: false,
            },
          ],
          zone: {
            type: `zone`,
            traits: {},
            skipImmediateOnPlacement: false,
          },
          sourceData: {
            test: {},
          },
          changes: [],
          itemTargetData: {
            ids: [],
            allItems: false,
          },
          condition: {
            numbered: false,
          },
        },
        sort: 0,
        start: null,
        showIcon: 1,
        folder: null,
      },
    ],
    flags: {
      _sheetTab: {},
      core: {},
    },
    system: {
      description: {
        value:
          `The creature distracts or confuse foes, possibly exuding a soporific musk or nauseating reek, or maybe its appearance is bizarrely horrifying. All living targets within a number of yards equal to its Toughness Bonus suffer a penalty of –20 to all Tests. A target can only suffer this penalty once, no matter how many Distracting foes there are.`,
      },
      gmdescription: {
        value: ``,
      },
      rollable: {
        value: false,
        damage: false,
        skill: ``,
        bonusCharacteristic: ``,
        dice: ``,
        defaultDifficulty: `challenging`,
        SL: true,
        attackType: `melee`,
      },
      specification: {
        value: ``,
      },
      qualities: {
        value: [],
      },
      flaws: {
        value: [],
      },
      disabled: true,
      category: `standard`,
    },
    _stats: {
      systemId: `wfrp4e`,
      systemVersion: `9.6.3`,
      coreVersion: `14.364`,
      createdTime: 1786097166209,
      modifiedTime: 1786097166209,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
      compendiumSource:
        `Compendium.wfrp4e-core.actors.Actor.T5qAtpoKtB8iwTBd.Item.L3NBP75PXqxDKqnE`,
      duplicateSource: null,
      exportSource: null,
    },
    folder: `LjyFyBwUbRxLvkuI`,
    sort: 3900000,
    _id: `L3NBP75PXqxDKqnE`,
    ownership: {
      default: 0,
    },
  };
}

export function trait_fear(enabled: boolean) {
  return {
    name: `Fear`,
    type: `trait`,
    img: `modules/wfrp4e-core/icons/traits/trait.png`,
    effects: [
      {
        _id: `ODxbsuuS0splmVEN`,
        flags: {
          wfrp4e: {
            applicationData: {},
            scriptData: [],
            _legacyData: {},
          },
        },
        disabled: !enabled,
        duration: {
          value: null,
          units: `seconds`,
          expiry: null,
          expired: false,
        },
        tint: `#ffffff`,
        transfer: true,
        origin: null,
        name: `Fear`,
        description: ``,
        statuses: [],
        _stats: {
          coreVersion: `14.364`,
          systemId: `wfrp4e`,
          systemVersion: `9.6.3`,
          createdTime: 1786097166209,
          modifiedTime: 1786097166209,
          lastModifiedBy: `khhY7fuxf56JOp5M`,
          compendiumSource: null,
          duplicateSource: null,
          exportSource: null,
        },
        img: `modules/wfrp4e-core/icons/traits/trait.png`,
        type: `base`,
        system: {
          transferData: {
            type: `document`,
            documentType: `Item`,
            avoidTest: {
              value: `none`,
              opposed: false,
              prevention: true,
              reversed: false,
            },
            equipTransfer: false,
            prompt: false,
            area: {
              aura: {
                transferred: false,
                render: false,
                visibility: 0,
              },
              shape: {
                color: null,
                type: `circle`,
                angle: 60,
                curvature: `round`,
                base: {
                  width: 1,
                  height: 1,
                  hole: false,
                  shape: 4,
                  type: `token`,
                },
              },
              keep: false,
              duration: `sustained`,
            },
            originalType: `document`,
            testIndependent: false,
            selfOnly: false,
            zone: {
              type: `zone`,
              transferred: false,
              traits: {},
              skipImmediateOnPlacement: false,
              keep: false,
            },
          },
          scriptData: [
            {
              label: `Fear`,
              trigger: `manual`,
              script: `[Script.IfEu1hO8sKEZBpvg]`,
              options: {
                targeter: false,
                defending: false,
                runIfDisabled: false,
                deleteEffect: false,
                showDuplicates: false,
              },
              async: false,
            },
          ],
          zone: {
            type: `zone`,
            traits: {},
            skipImmediateOnPlacement: false,
          },
          sourceData: {
            test: {},
          },
          changes: [],
          itemTargetData: {
            ids: [],
            allItems: false,
          },
          condition: {
            numbered: false,
          },
        },
        sort: 0,
        start: null,
        showIcon: 1,
        folder: null,
      },
    ],
    flags: {
      _sheetTab: {},
      core: {},
    },
    system: {
      description: {
        value:
          `<p>The creature causes supernatural Fear in other creatures, with a rating equal to its Rating.</p>\n<p>The Fear trait represents an extreme aversion to something. Creatures that cause Fear have a Fear Rating; this value reﬂects the SL you are required to pass on an Extended Cool Test to overcome your Fear. You may continue to Test at the end of every round until your SL equals or surpasses the creature&rsquo;s Fear rating. Until you do this, you are subject to Fear.</p>\n<p>When subject to Fear, you suffer &ndash;1 SL on all Tests to affect the source of your fear. You may not move closer to whatever is causing Fear without passing a <strong>Challenging (+0) Cool</strong> Test. If it comes closer to you, you must pass a <strong>Challenging (+0) Cool</strong> Test, or gain a @Condition[Broken] Condition.</p>`,
      },
      gmdescription: {
        value: ``,
      },
      rollable: {
        value: false,
        damage: false,
        skill: ``,
        bonusCharacteristic: ``,
        dice: ``,
        defaultDifficulty: `challenging`,
        SL: true,
        attackType: `melee`,
      },
      specification: {
        value: `#`,
      },
      qualities: {
        value: [],
      },
      flaws: {
        value: [],
      },
      disabled: true,
      category: `standard`,
    },
    _stats: {
      systemId: `wfrp4e`,
      systemVersion: `9.6.3`,
      coreVersion: `14.364`,
      createdTime: 1786097166209,
      modifiedTime: 1786097166209,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
      compendiumSource:
        `Compendium.wfrp4e-core.actors.Actor.T5qAtpoKtB8iwTBd.Item.XMRPxqno80Wf0aZi`,
      duplicateSource: null,
      exportSource: null,
    },
    folder: `LjyFyBwUbRxLvkuI`,
    sort: 6700000,
    _id: `XMRPxqno80Wf0aZi`,
    ownership: {
      default: 0,
    },
  };
}

export function trait_flight(enabled: boolean) {
  return {
    name: `Flight`,
    type: `trait`,
    img: `modules/wfrp4e-core/icons/traits/trait.png`,
    effects: [
      {
        name: `Flying`,
        _id: `qFRVjb5kUqUPzBgB`,
        disabled: !enabled,
        duration: {
          value: null,
          units: `seconds`,
          expiry: null,
          expired: false,
        },
        description: ``,
        origin: null,
        transfer: true,
        statuses: [],
        flags: {
          wfrp4e: {
            applicationData: {},
            scriptData: [],
            _legacyData: {},
          },
        },
        tint: `#ffffff`,
        _stats: {
          coreVersion: `14.364`,
          systemId: `wfrp4e`,
          systemVersion: `9.6.3`,
          createdTime: 1786097166209,
          modifiedTime: 1786097166209,
          lastModifiedBy: `khhY7fuxf56JOp5M`,
          compendiumSource: null,
          duplicateSource: null,
          exportSource: null,
        },
        img: `modules/wfrp4e-core/icons/traits/trait.png`,
        type: `base`,
        system: {
          transferData: {
            type: `document`,
            documentType: `Actor`,
            avoidTest: {
              value: `none`,
              opposed: false,
              prevention: true,
              reversed: false,
            },
            equipTransfer: false,
            prompt: false,
            area: {
              aura: {
                transferred: false,
                render: false,
                visibility: 0,
              },
              shape: {
                color: null,
                type: `circle`,
                angle: 60,
                curvature: `round`,
                base: {
                  width: 1,
                  height: 1,
                  hole: false,
                  shape: 4,
                  type: `token`,
                },
              },
              keep: false,
              duration: `sustained`,
            },
            originalType: `document`,
            testIndependent: false,
            selfOnly: false,
            zone: {
              type: `zone`,
              transferred: false,
              traits: {},
              skipImmediateOnPlacement: false,
              keep: false,
            },
          },
          scriptData: [
            {
              label: `Ranged Test while Flying`,
              trigger: `dialog`,
              options: {
                hideScript: `[Script.RZlMkxJz5apn0mUj]`,
                activateScript: `[Script.nSXzktHyNjGUXjaw]`,
                submissionScript: ``,
                targeter: false,
                deleteEffect: false,
                defending: false,
                runIfDisabled: false,
                showDuplicates: false,
              },
              script: `[Script.0iTLDgFHO9Rgc010]`,
              async: false,
            },
          ],
          zone: {
            type: `zone`,
            traits: {},
            skipImmediateOnPlacement: false,
          },
          sourceData: {
            test: {},
          },
          changes: [],
          itemTargetData: {
            ids: [],
            allItems: false,
          },
          condition: {
            numbered: false,
          },
        },
        sort: 0,
        start: null,
        showIcon: 1,
        folder: null,
      },
    ],
    flags: {
      _sheetTab: {},
      core: {},
    },
    system: {
      description: {
        value:
          `<p>As the creature’s Move, it can ﬂy up to Rating yards. When ﬂying, it ignores all intervening terrain, obstacles, or characters. At the end of the move, it decides whether it has landed or is still ﬂying. It can use this move to Charge. If it starts its turn ﬂying, it must choose to Fly for its Move. If it cannot do this, the GM decides how far the creature falls.</p>\n        <p>When targeting it, measure horizontal distance as normal, then increase range by 1 step. So, a Long Range shot would become Extreme Range, and if it was at Extreme Range it could not be shot at all.</p>\n        <p>When ﬂying, it suffers a penalty of –20 to all ranged combat attempts as it swoops and wheels in the sky</p>`,
      },
      gmdescription: {
        value: ``,
      },
      rollable: {
        value: false,
        damage: false,
        skill: ``,
        bonusCharacteristic: ``,
        dice: ``,
        defaultDifficulty: `challenging`,
        SL: true,
        attackType: `melee`,
      },
      specification: {
        value: `#`,
      },
      qualities: {
        value: [],
      },
      flaws: {
        value: [],
      },
      disabled: true,
      category: `standard`,
    },
    _stats: {
      systemId: `wfrp4e`,
      systemVersion: `9.6.3`,
      coreVersion: `14.364`,
      createdTime: 1786097166209,
      modifiedTime: 1786097166209,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
      compendiumSource:
        `Compendium.wfrp4e-core.actors.Actor.T5qAtpoKtB8iwTBd.Item.8nWYGGnZGHfArrFm`,
      duplicateSource: null,
      exportSource: null,
    },
    folder: `LjyFyBwUbRxLvkuI`,
    sort: 2600000,
    _id: `8nWYGGnZGHfArrFm`,
    ownership: {
      default: 0,
    },
  };
}

export function trait_frenzy(enabled: boolean) {
  return {
    name: `Frenzy`,
    type: `trait`,
    img: `modules/wfrp4e-core/icons/traits/trait.png`,
    effects: [
      {
        _id: `ydTMvbmqv6BZ4u6d`,
        flags: {
          wfrp4e: {
            hide: false,
            applicationData: {},
            scriptData: [],
            _legacyData: {},
          },
          core: {},
        },
        disabled: !enabled,
        duration: {
          value: null,
          units: `seconds`,
          expiry: null,
          expired: false,
        },
        tint: `#ffffff`,
        transfer: true,
        origin: null,
        name: `Frenzy`,
        description: ``,
        statuses: [],
        _stats: {
          coreVersion: `14.364`,
          systemId: `wfrp4e`,
          systemVersion: `9.6.3`,
          createdTime: 1786097166209,
          modifiedTime: 1786097166209,
          lastModifiedBy: `khhY7fuxf56JOp5M`,
          compendiumSource:
            `Compendium.wfrp4e-core.items.Item.DrNUTPeodEgpWTnT.ActiveEffect.fChUE7dauqBKrKWx`,
          duplicateSource: null,
          exportSource: null,
        },
        img: `modules/wfrp4e-core/icons/traits/trait.png`,
        type: `base`,
        system: {
          transferData: {
            type: `document`,
            documentType: `Actor`,
            avoidTest: {
              value: `none`,
              opposed: false,
              prevention: true,
              reversed: false,
            },
            equipTransfer: false,
            prompt: false,
            area: {
              aura: {
                transferred: false,
                render: false,
                visibility: 0,
              },
              shape: {
                color: null,
                type: `circle`,
                angle: 60,
                curvature: `round`,
                base: {
                  width: 1,
                  height: 1,
                  hole: false,
                  shape: 4,
                  type: `token`,
                },
              },
              keep: false,
              duration: `sustained`,
            },
            originalType: `document`,
            testIndependent: false,
            selfOnly: false,
            zone: {
              type: `zone`,
              transferred: false,
              traits: {},
              skipImmediateOnPlacement: false,
              keep: false,
            },
          },
          scriptData: [
            {
              label: `Frenzy`,
              trigger: `computeCharacteristics`,
              script: `[Script.91S2GnBFYFbxmOCK]`,
              options: {
                hideScript: ``,
                activateScript: ``,
                submissionScript: ``,
                targeter: false,
                deleteEffect: false,
                defending: false,
                runIfDisabled: false,
                showDuplicates: false,
              },
              async: false,
            },
            {
              label: `Disable`,
              trigger: `update`,
              options: {
                hideScript: ``,
                activateScript: ``,
                submissionScript: ``,
                targeter: false,
                deleteEffect: false,
                defending: false,
                runIfDisabled: false,
                showDuplicates: false,
              },
              script: `[Script.OeKeQAAcJhdI4Qky]`,
              async: false,
            },
          ],
          zone: {
            type: `zone`,
            traits: {},
            skipImmediateOnPlacement: false,
          },
          sourceData: {
            test: {},
          },
          changes: [],
          itemTargetData: {
            ids: [],
            allItems: false,
          },
          condition: {
            numbered: false,
          },
        },
        sort: 0,
        start: null,
        showIcon: 1,
        folder: null,
      },
    ],
    flags: {
      _sheetTab: {},
      core: {},
    },
    system: {
      description: {
        value:
          `<p>With a Willpower Test, you can work yourself into a state of frenzy by psyching yourself up, howling, biting your shield, or similar. If you succeed, you become subject to Frenzy.</p>\n<p>While subject to Frenzy</p>\n<ul>\n<li>You are immune to all other psychology, and will not ﬂee or retreat for any reason;</li>\n<li>Indeed you must always move at full rate towards the closest enemy you can see in order to attack.</li>\n<li>Generally, the only Action you may take is a Weapon Skill Test or an Athletics Test to reach an enemy more quickly.</li>\n<li>Further, you may take a Free Action Melee Test each Round as you are throwing everything you have into your attacks.</li>\n<li>Lastly, you gain a bonus of +1 Strength Bonus, such is your ferocity.</li>\n</ul>\n<p>You remain in Frenzy until all enemies in your line of sight are pacified, or you receive the&nbsp;<em>@Condition[Stunned]</em>&nbsp;or&nbsp;<em>@Condition[Unconscious]</em>&nbsp;condition. After your Frenzy is over you immediately receive a&nbsp;<em>@Condition[Fatigued]</em>&nbsp;condition.</p>`,
      },
      gmdescription: {
        value: ``,
      },
      rollable: {
        value: true,
        damage: false,
        skill: ``,
        rollCharacteristic: `wp`,
        bonusCharacteristic: ``,
        dice: ``,
        defaultDifficulty: `challenging`,
        SL: true,
        attackType: `melee`,
      },
      specification: {
        value: ``,
      },
      qualities: {
        value: [],
      },
      flaws: {
        value: [],
      },
      disabled: true,
      category: `standard`,
    },
    _stats: {
      systemId: `wfrp4e`,
      systemVersion: `9.6.3`,
      coreVersion: `14.364`,
      createdTime: 1786097166209,
      modifiedTime: 1786097166209,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
      compendiumSource:
        `Compendium.wfrp4e-core.actors.Actor.T5qAtpoKtB8iwTBd.Item.L6IqVnq0hgnLQtY0`,
      duplicateSource: null,
      exportSource: null,
    },
    folder: `LjyFyBwUbRxLvkuI`,
    sort: 8000000,
    _id: `L6IqVnq0hgnLQtY0`,
    ownership: {
      default: 0,
    },
  };
}

export function trait_fury(enabled: boolean) {
  return {
    name: `Fury`,
    type: `trait`,
    img: `modules/wfrp4e-core/icons/traits/trait.png`,
    effects: [
      {
        name: `Fury`,
        _id: `UrY6shI382y5L9os`,
        disabled: !enabled,
        duration: {
          value: null,
          units: `seconds`,
          expiry: null,
          expired: false,
        },
        description: ``,
        origin: null,
        transfer: true,
        statuses: [],
        flags: {
          wfrp4e: {
            applicationData: {},
            scriptData: [],
            _legacyData: {},
          },
        },
        tint: `#ffffff`,
        _stats: {
          coreVersion: `14.364`,
          systemId: `wfrp4e`,
          systemVersion: `9.6.3`,
          createdTime: 1786097166209,
          modifiedTime: 1786097166209,
          lastModifiedBy: `khhY7fuxf56JOp5M`,
          compendiumSource: null,
          duplicateSource: null,
          exportSource: null,
        },
        img: `modules/wfrp4e-core/icons/traits/trait.png`,
        type: `base`,
        system: {
          transferData: {
            type: `document`,
            documentType: `Actor`,
            avoidTest: {
              value: `none`,
              opposed: false,
              prevention: true,
              reversed: false,
            },
            testIndependent: false,
            equipTransfer: false,
            prompt: false,
            area: {
              aura: {
                transferred: false,
                render: false,
                visibility: 0,
              },
              shape: {
                color: null,
                type: `circle`,
                angle: 60,
                curvature: `round`,
                base: {
                  width: 1,
                  height: 1,
                  hole: false,
                  shape: 4,
                  type: `token`,
                },
              },
              keep: false,
              duration: `sustained`,
            },
            originalType: `document`,
            selfOnly: false,
            zone: {
              type: `zone`,
              transferred: false,
              traits: {},
              skipImmediateOnPlacement: false,
              keep: false,
            },
          },
          scriptData: [
            {
              label: `Fury`,
              trigger: `manual`,
              options: {
                hideScript: ``,
                activateScript: ``,
                submissionScript: ``,
                targeter: false,
                deleteEffect: false,
                defending: false,
                runIfDisabled: false,
                showDuplicates: false,
              },
              script: `[Script.E1vUepgop09FF5wy]`,
              async: false,
            },
          ],
          zone: {
            type: `zone`,
            traits: {},
            skipImmediateOnPlacement: false,
          },
          sourceData: {
            test: {},
          },
          changes: [],
          itemTargetData: {
            ids: [],
            allItems: false,
          },
          condition: {
            numbered: false,
          },
        },
        sort: 0,
        start: null,
        showIcon: 1,
        folder: null,
      },
    ],
    flags: {
      core: {},
    },
    system: {
      description: {
        value:
          `The creature can work itself into an all-consuming rage. It can spend all of its Advantage (minimum of 1) to become subject to Hatred to close combat opponents. If the creature has at least 3 Advantage, it may instead expend all of its Advantage to become subject to Frenzy.`,
      },
      gmdescription: {
        value: ``,
      },
      rollable: {
        value: false,
        damage: false,
        skill: ``,
        bonusCharacteristic: ``,
        dice: ``,
        defaultDifficulty: `challenging`,
        SL: true,
        attackType: `melee`,
      },
      specification: {
        value: ``,
      },
      qualities: {
        value: [],
      },
      flaws: {
        value: [],
      },
      disabled: true,
      category: `standard`,
    },
    _stats: {
      systemId: `wfrp4e`,
      systemVersion: `9.6.3`,
      coreVersion: `14.364`,
      createdTime: 1786097166209,
      modifiedTime: 1786097166209,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
      compendiumSource:
        `Compendium.wfrp4e-core.actors.Actor.T5qAtpoKtB8iwTBd.Item.2BXe9cfzmto1gXGp`,
      duplicateSource: null,
      exportSource: null,
    },
    folder: `LjyFyBwUbRxLvkuI`,
    sort: 5800000,
    _id: `2BXe9cfzmto1gXGp`,
    ownership: {
      default: 0,
    },
  };
}

export function trait_petrifyingGaze(enabled: boolean) {
  return {
    name: `Petrifying Gaze`,
    type: `trait`,
    img: `modules/wfrp4e-core/icons/traits/trait.png`,
    effects: [
      {
        name: `Petrifying Gaze`,
        _id: `ko7dK1aP7NOva4vV`,
        disabled: !enabled,
        duration: {
          value: null,
          units: `seconds`,
          expiry: null,
          expired: false,
        },
        description: ``,
        origin: null,
        transfer: true,
        statuses: [],
        flags: {
          wfrp4e: {
            applicationData: {},
            scriptData: [],
            _legacyData: {},
          },
        },
        tint: `#ffffff`,
        _stats: {
          coreVersion: `14.364`,
          systemId: `wfrp4e`,
          systemVersion: `9.6.3`,
          createdTime: 1786097166209,
          modifiedTime: 1786097166209,
          lastModifiedBy: `khhY7fuxf56JOp5M`,
          compendiumSource: null,
          duplicateSource: null,
          exportSource: null,
        },
        img: `modules/wfrp4e-core/icons/traits/trait.png`,
        type: `base`,
        system: {
          transferData: {
            type: `document`,
            documentType: `Actor`,
            avoidTest: {
              value: `none`,
              opposed: false,
              prevention: true,
              reversed: false,
            },
            equipTransfer: false,
            prompt: false,
            area: {
              aura: {
                transferred: false,
                render: false,
                visibility: 0,
              },
              shape: {
                color: null,
                type: `circle`,
                angle: 60,
                curvature: `round`,
                base: {
                  width: 1,
                  height: 1,
                  hole: false,
                  shape: 4,
                  type: `token`,
                },
              },
              keep: false,
              duration: `sustained`,
            },
            originalType: `document`,
            testIndependent: false,
            selfOnly: false,
            zone: {
              type: `zone`,
              transferred: false,
              traits: {},
              skipImmediateOnPlacement: false,
              keep: false,
            },
          },
          scriptData: [
            {
              label: `Petrifying Gaze`,
              trigger: `manual`,
              options: {
                hideScript: ``,
                activateScript: ``,
                submissionScript: ``,
                targeter: false,
                deleteEffect: false,
                defending: false,
                runIfDisabled: false,
                showDuplicates: false,
              },
              script: `[Script.ft0LaRWZT5WtnptP]`,
              async: false,
            },
          ],
          zone: {
            type: `zone`,
            traits: {},
            skipImmediateOnPlacement: false,
          },
          sourceData: {
            test: {},
          },
          changes: [],
          itemTargetData: {
            ids: [],
            allItems: false,
          },
          condition: {
            numbered: false,
          },
        },
        sort: 0,
        start: null,
        showIcon: 1,
        folder: null,
      },
    ],
    flags: {
      _sheetTab: {},
      core: {},
    },
    system: {
      description: {
        value:
          `The creature’s gaze can turn ﬂesh to stone. For its Action, it can spend all its Advantage to unleash its gaze (minimum of 1). The creature performs an Opposed Ballistic Skill/Initiative test, adding 1 SL per Advantage spent. Its opponent gains 1 Stunned status per 2 SL by which it wins. If it wins by at least 6 SL, its target is permanently turned to stone.\n        \n        If the target is a spellcaster, the test can be Opposed with Language (Magick) instead of Initiative as counter spells are cast.`,
      },
      gmdescription: {
        value: ``,
      },
      rollable: {
        value: true,
        damage: false,
        skill: ``,
        rollCharacteristic: `bs`,
        bonusCharacteristic: ``,
        dice: ``,
        defaultDifficulty: `challenging`,
        SL: true,
        attackType: `melee`,
      },
      specification: {
        value: ``,
      },
      qualities: {
        value: [],
      },
      flaws: {
        value: [],
      },
      disabled: true,
      category: `standard`,
    },
    _stats: {
      systemId: `wfrp4e`,
      systemVersion: `9.6.3`,
      coreVersion: `14.364`,
      createdTime: 1786097166209,
      modifiedTime: 1786097166209,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
      compendiumSource:
        `Compendium.wfrp4e-core.actors.Actor.T5qAtpoKtB8iwTBd.Item.QgJOL3mKrdtVy2WZ`,
      duplicateSource: null,
      exportSource: null,
    },
    folder: `LjyFyBwUbRxLvkuI`,
    sort: 200000,
    _id: `QgJOL3mKrdtVy2WZ`,
    ownership: {
      default: 0,
    },
  };
}

export function trait_regenerate(enabled: boolean) {
  return {
    name: `Regenerate`,
    type: `trait`,
    img: `modules/wfrp4e-core/icons/traits/trait.png`,
    effects: [
      {
        _id: `0CEu4kmUhYSxWGJZ`,
        flags: {
          wfrp4e: {
            applicationData: {},
            scriptData: [],
            _legacyData: {},
          },
        },
        disabled: !enabled,
        duration: {
          value: null,
          units: `seconds`,
          expiry: null,
          expired: false,
        },
        tint: `#ffffff`,
        transfer: true,
        origin: null,
        name: `Regenerate`,
        description: ``,
        statuses: [],
        _stats: {
          coreVersion: `14.364`,
          systemId: `wfrp4e`,
          systemVersion: `9.6.3`,
          createdTime: 1786097166209,
          modifiedTime: 1786097166209,
          lastModifiedBy: `khhY7fuxf56JOp5M`,
          compendiumSource: null,
          duplicateSource: null,
          exportSource: null,
        },
        img: `modules/wfrp4e-core/icons/traits/trait.png`,
        type: `base`,
        system: {
          transferData: {
            type: `document`,
            documentType: `Actor`,
            avoidTest: {
              value: `none`,
              opposed: false,
              prevention: true,
              reversed: false,
            },
            testIndependent: false,
            equipTransfer: false,
            prompt: false,
            area: {
              aura: {
                transferred: false,
                render: false,
                visibility: 0,
              },
              shape: {
                color: null,
                type: `circle`,
                angle: 60,
                curvature: `round`,
                base: {
                  width: 1,
                  height: 1,
                  hole: false,
                  shape: 4,
                  type: `token`,
                },
              },
              keep: false,
              duration: `sustained`,
            },
            originalType: `document`,
            selfOnly: false,
            zone: {
              type: `zone`,
              transferred: false,
              traits: {},
              skipImmediateOnPlacement: false,
              keep: false,
            },
          },
          scriptData: [
            {
              label: `Regenerate`,
              trigger: `endRound`,
              script: `[Script.OGX4BneaYAnV25TO]`,
              options: {
                hideScript: ``,
                activateScript: ``,
                submissionScript: ``,
                targeter: false,
                deleteEffect: false,
                defending: false,
                runIfDisabled: false,
                showDuplicates: false,
              },
              async: false,
            },
          ],
          zone: {
            type: `zone`,
            traits: {},
            skipImmediateOnPlacement: false,
          },
          sourceData: {
            test: {},
          },
          changes: [],
          itemTargetData: {
            ids: [],
            allItems: false,
          },
          condition: {
            numbered: false,
          },
        },
        sort: 0,
        start: null,
        showIcon: 1,
        folder: null,
      },
    ],
    flags: {
      core: {},
    },
    system: {
      description: {
        value:
          `The creature is capable of healing at an extraordinary rate, even regrowing severed parts. At the start of each round, if it has more than 0 Wounds remaining, it will automatically regenerate 1d10 Wounds. If it has 0 Wounds remaining, it will regenerate a single Wound on a 1d10 roll of 8+. If it ever rolls a 10 for regenerating, it also fully regenerates a Critical Wound, losing all penalties and Conditions associated with it. Any Critical Wounds or Wounds caused by Fire may not be regenerated and should be recorded separately.`,
      },
      gmdescription: {
        value: ``,
      },
      rollable: {
        value: false,
        damage: false,
        skill: ``,
        bonusCharacteristic: ``,
        dice: ``,
        defaultDifficulty: `challenging`,
        SL: true,
        attackType: `melee`,
      },
      specification: {
        value: ``,
      },
      qualities: {
        value: [],
      },
      flaws: {
        value: [],
      },
      disabled: true,
      category: `standard`,
    },
    _stats: {
      systemId: `wfrp4e`,
      systemVersion: `9.6.3`,
      coreVersion: `14.364`,
      createdTime: 1786097166209,
      modifiedTime: 1786097166209,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
      compendiumSource:
        `Compendium.wfrp4e-core.actors.Actor.T5qAtpoKtB8iwTBd.Item.4em2FMzLHVWq6pGG`,
      duplicateSource: null,
      exportSource: null,
    },
    folder: `LjyFyBwUbRxLvkuI`,
    sort: 4400000,
    _id: `4em2FMzLHVWq6pGG`,
    ownership: {
      default: 0,
    },
  };
}

export function trait_spellcaster(enabled: boolean, type: string) {
  return {
    name: `Spellcaster`,
    type: `trait`,
    img: `modules/wfrp4e-core/icons/traits/trait.png`,
    effects: [],
    flags: {
      _sheetTab: {},
      core: {},
    },
    system: {
      description: {
        value:
          `The creature can cast spells; the specific Lore of Magic will be indicated in brackets.`,
      },
      gmdescription: {
        value: ``,
      },
      rollable: {
        value: false,
        damage: false,
        skill: ``,
        bonusCharacteristic: ``,
        dice: ``,
        defaultDifficulty: `challenging`,
        SL: true,
        attackType: `melee`,
      },
      specification: {
        value: type,
      },
      qualities: {
        value: [],
      },
      flaws: {
        value: [],
      },
      disabled: !enabled,
      category: `standard`,
    },
    _stats: {
      systemId: `wfrp4e`,
      systemVersion: `9.6.3`,
      coreVersion: `14.364`,
      createdTime: 1786097166209,
      modifiedTime: 1786097166209,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
      compendiumSource:
        `Compendium.wfrp4e-core.actors.Actor.T5qAtpoKtB8iwTBd.Item.J8Aqp9R1G3f3RQsK`,
      duplicateSource: null,
      exportSource: null,
    },
    folder: `LjyFyBwUbRxLvkuI`,
    sort: 7400000,
    _id: `J8Aqp9R1G3f3RQsK`,
    ownership: {
      default: 0,
    },
  };
}

export function trait_tracker(enabled: boolean) {
  return {
    name: `Tracker`,
    type: `trait`,
    img: `modules/wfrp4e-core/icons/traits/trait.png`,
    effects: [
      {
        _id: `ftGagmf8rj6rq3ir`,
        flags: {
          wfrp4e: {
            applicationData: {},
            scriptData: [],
            _legacyData: {},
          },
        },
        disabled: !enabled,
        duration: {
          value: null,
          units: `seconds`,
          expiry: null,
          expired: false,
        },
        tint: `#ffffff`,
        transfer: true,
        origin: null,
        name: `Tracker`,
        description: ``,
        statuses: [],
        _stats: {
          coreVersion: `14.364`,
          systemId: `wfrp4e`,
          systemVersion: `9.6.3`,
          createdTime: 1786097166209,
          modifiedTime: 1786097166209,
          lastModifiedBy: `khhY7fuxf56JOp5M`,
          compendiumSource: null,
          duplicateSource: null,
          exportSource: null,
        },
        img: `modules/wfrp4e-core/icons/traits/trait.png`,
        type: `base`,
        system: {
          transferData: {
            type: `document`,
            documentType: `Actor`,
            avoidTest: {
              value: `none`,
              opposed: false,
              prevention: true,
              reversed: false,
            },
            equipTransfer: false,
            prompt: false,
            area: {
              aura: {
                transferred: false,
                render: false,
                visibility: 0,
              },
              shape: {
                color: null,
                type: `circle`,
                angle: 60,
                curvature: `round`,
                base: {
                  width: 1,
                  height: 1,
                  hole: false,
                  shape: 4,
                  type: `token`,
                },
              },
              keep: false,
              duration: `sustained`,
            },
            originalType: `document`,
            testIndependent: false,
            selfOnly: false,
            zone: {
              type: `zone`,
              transferred: false,
              traits: {},
              skipImmediateOnPlacement: false,
              keep: false,
            },
          },
          scriptData: [
            {
              label: `Tracker`,
              trigger: `dialog`,
              script: `[Script.neaaVy6D6tfcst5P]`,
              options: {
                activateScript: `[Script.FmLx9pwOkzqqU7Ph]`,
                hideScript: `[Script.yatUu0cd7iKs50rq]`,
                submissionScript: ``,
                targeter: false,
                deleteEffect: false,
                defending: false,
                runIfDisabled: false,
                showDuplicates: false,
              },
              async: false,
            },
          ],
          zone: {
            type: `zone`,
            traits: {},
            skipImmediateOnPlacement: false,
          },
          sourceData: {
            test: {},
          },
          changes: [],
          itemTargetData: {
            ids: [],
            allItems: false,
          },
          condition: {
            numbered: false,
          },
        },
        sort: 0,
        start: null,
        showIcon: 1,
        folder: null,
      },
    ],
    flags: {
      core: {},
    },
    system: {
      description: {
        value:
          `Trackers are adept at following their prey, generally through scent or hearing. They add SL equal to their Initiative Bonus to all Track Tests.`,
      },
      gmdescription: {
        value: ``,
      },
      rollable: {
        value: false,
        damage: false,
        skill: ``,
        bonusCharacteristic: ``,
        dice: ``,
        defaultDifficulty: `challenging`,
        SL: true,
        attackType: `melee`,
      },
      specification: {
        value: ``,
      },
      qualities: {
        value: [],
      },
      flaws: {
        value: [],
      },
      disabled: true,
      category: `standard`,
    },
    _stats: {
      systemId: `wfrp4e`,
      systemVersion: `9.6.3`,
      coreVersion: `14.364`,
      createdTime: 1786097166209,
      modifiedTime: 1786097166209,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
      compendiumSource:
        `Compendium.wfrp4e-core.actors.Actor.T5qAtpoKtB8iwTBd.Item.3zqfLLGwMcia4KiN`,
      duplicateSource: null,
      exportSource: null,
    },
    folder: `LjyFyBwUbRxLvkuI`,
    sort: 2300000,
    _id: `3zqfLLGwMcia4KiN`,
    ownership: {
      default: 0,
    },
  };
}

export function trait_wallcrawler(enabled: boolean) {
  return {
    name: `Wallcrawler`,
    type: `trait`,
    img: `modules/wfrp4e-core/icons/traits/trait.png`,
    effects: [
      {
        name: `Wallcrawler`,
        _id: `4RAK0qWFG27tQSmB`,
        disabled: !enabled,
        duration: {
          value: null,
          units: `seconds`,
          expiry: null,
          expired: false,
        },
        description: ``,
        origin: null,
        transfer: true,
        statuses: [],
        flags: {
          wfrp4e: {
            applicationData: {},
            scriptData: [],
            _legacyData: {},
          },
        },
        tint: `#ffffff`,
        _stats: {
          coreVersion: `14.364`,
          systemId: `wfrp4e`,
          systemVersion: `9.6.3`,
          createdTime: 1786097166209,
          modifiedTime: 1786097166209,
          lastModifiedBy: `khhY7fuxf56JOp5M`,
          compendiumSource: null,
          duplicateSource: null,
          exportSource: null,
        },
        img: `modules/wfrp4e-core/icons/traits/trait.png`,
        type: `base`,
        system: {
          transferData: {
            type: `document`,
            documentType: `Actor`,
            avoidTest: {
              value: `none`,
              opposed: false,
              prevention: true,
              reversed: false,
            },
            equipTransfer: false,
            prompt: false,
            area: {
              aura: {
                transferred: false,
                render: false,
                visibility: 0,
              },
              shape: {
                color: null,
                type: `circle`,
                angle: 60,
                curvature: `round`,
                base: {
                  width: 1,
                  height: 1,
                  hole: false,
                  shape: 4,
                  type: `token`,
                },
              },
              keep: false,
              duration: `sustained`,
            },
            originalType: `document`,
            testIndependent: false,
            selfOnly: false,
            zone: {
              type: `zone`,
              transferred: false,
              traits: {},
              skipImmediateOnPlacement: false,
              keep: false,
            },
          },
          scriptData: [
            {
              label: `Wallcrawler`,
              trigger: `rollTest`,
              options: {
                hideScript: ``,
                activateScript: ``,
                submissionScript: ``,
                targeter: false,
                deleteEffect: false,
                defending: false,
                runIfDisabled: false,
                showDuplicates: false,
              },
              script: `[Script.OqLKL0PiCvYH2QxW]`,
              async: false,
            },
            {
              label: `Cannot fail Climb Tests`,
              trigger: `dialog`,
              options: {
                hideScript: `[Script.bWr8leucbWslBCYG]`,
                activateScript: `[Script.aAvJrAKLzXhS9qN6]`,
                submissionScript: `[Script.ZCkYe5XMVY1RWMXG]`,
                targeter: false,
                deleteEffect: false,
                defending: false,
                runIfDisabled: false,
                showDuplicates: false,
              },
              script: ``,
              async: false,
            },
          ],
          zone: {
            type: `zone`,
            traits: {},
            skipImmediateOnPlacement: false,
          },
          sourceData: {
            test: {},
          },
          changes: [],
          itemTargetData: {
            ids: [],
            allItems: false,
          },
          condition: {
            numbered: false,
          },
        },
        sort: 0,
        start: null,
        showIcon: 1,
        folder: null,
      },
    ],
    flags: {
      core: {},
    },
    system: {
      description: {
        value:
          `The creature can effortlessly scale vertical surfaces and even traverse ceilings, ready to drop on unwary prey. It moves at full Movement across any appropriate surface and automatically passes all Climb tests.`,
      },
      gmdescription: {
        value: ``,
      },
      rollable: {
        value: false,
        damage: false,
        skill: ``,
        bonusCharacteristic: ``,
        dice: ``,
        defaultDifficulty: `challenging`,
        SL: true,
        attackType: `melee`,
      },
      specification: {
        value: ``,
      },
      qualities: {
        value: [],
      },
      flaws: {
        value: [],
      },
      disabled: true,
      category: `standard`,
    },
    _stats: {
      systemId: `wfrp4e`,
      systemVersion: `9.6.3`,
      coreVersion: `14.364`,
      createdTime: 1786097166209,
      modifiedTime: 1786097166209,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
      compendiumSource:
        `Compendium.wfrp4e-core.actors.Actor.T5qAtpoKtB8iwTBd.Item.sE1s8ShkhQoFaNz5`,
      duplicateSource: null,
      exportSource: null,
    },
    folder: `LjyFyBwUbRxLvkuI`,
    sort: 3600000,
    _id: `sE1s8ShkhQoFaNz5`,
    ownership: {
      default: 0,
    },
  };
}

export function trait_mentalCorruption(enabled: boolean) {
  return {
    name: `Mental Corruption`,
    type: `trait`,
    img: `modules/wfrp4e-core/icons/traits/trait.png`,
    effects: [
      {
        name: `Mental Corruption`,
        _id: `gh8P4EJqUjx9JGnO`,
        disabled: !enabled,
        duration: {
          value: null,
          units: `seconds`,
          expiry: null,
          expired: false,
        },
        description: ``,
        origin: null,
        transfer: true,
        statuses: [],
        flags: {
          wfrp4e: {
            applicationData: {},
            scriptData: [],
            _legacyData: {},
          },
        },
        tint: `#ffffff`,
        _stats: {
          coreVersion: `14.364`,
          systemId: `wfrp4e`,
          systemVersion: `9.6.3`,
          createdTime: 1786097166209,
          modifiedTime: 1786097166209,
          lastModifiedBy: `khhY7fuxf56JOp5M`,
          compendiumSource: null,
          duplicateSource: null,
          exportSource: null,
        },
        img: `modules/wfrp4e-core/icons/traits/trait.png`,
        type: `base`,
        system: {
          transferData: {
            type: `document`,
            documentType: `Actor`,
            avoidTest: {
              value: `none`,
              opposed: false,
              prevention: true,
              reversed: false,
            },
            equipTransfer: false,
            prompt: false,
            area: {
              aura: {
                transferred: false,
                render: false,
                visibility: 0,
              },
              shape: {
                color: null,
                type: `circle`,
                angle: 60,
                curvature: `round`,
                base: {
                  width: 1,
                  height: 1,
                  hole: false,
                  shape: 4,
                  type: `token`,
                },
              },
              keep: false,
              duration: `sustained`,
            },
            originalType: `document`,
            testIndependent: false,
            selfOnly: false,
            zone: {
              type: `zone`,
              transferred: false,
              traits: {},
              skipImmediateOnPlacement: false,
              keep: false,
            },
          },
          scriptData: [
            {
              label: `Add Mental Corruption`,
              trigger: `manual`,
              options: {
                hideScript: ``,
                activateScript: ``,
                submissionScript: ``,
                targeter: false,
                deleteEffect: false,
                defending: false,
                runIfDisabled: false,
                showDuplicates: false,
              },
              script: `[Script.KICZPwLvbUSxbDrE]`,
              async: false,
            },
          ],
          zone: {
            type: `zone`,
            traits: {},
            skipImmediateOnPlacement: false,
          },
          sourceData: {
            test: {},
          },
          changes: [],
          itemTargetData: {
            ids: [],
            allItems: false,
          },
          condition: {
            numbered: false,
          },
        },
        sort: 0,
        start: null,
        showIcon: 1,
        folder: null,
      },
    ],
    flags: {
      core: {},
    },
    system: {
      description: {
        value:
          `<p>The creature has Chaos on the mind. Roll on the Mental Corruption Table</p>\n<p>@Table[mutatemental]</p>\n<p>@Table[expandedmutatemental] (If EiS module installed)</p>`,
      },
      gmdescription: {
        value: ``,
      },
      rollable: {
        value: false,
        damage: false,
        skill: ``,
        bonusCharacteristic: ``,
        dice: ``,
        defaultDifficulty: `challenging`,
        SL: true,
        attackType: `melee`,
      },
      specification: {
        value: ``,
      },
      qualities: {
        value: [],
      },
      flaws: {
        value: [],
      },
      disabled: true,
      category: `standard`,
    },
    _stats: {
      systemId: `wfrp4e`,
      systemVersion: `9.6.3`,
      coreVersion: `14.364`,
      createdTime: 1786097166209,
      modifiedTime: 1786097166209,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
      compendiumSource:
        `Compendium.wfrp4e-core.actors.Actor.T5qAtpoKtB8iwTBd.Item.Zz5K5YHsPJCthtVa`,
      duplicateSource: null,
      exportSource: null,
    },
    folder: `LjyFyBwUbRxLvkuI`,
    sort: 1700000,
    _id: `Zz5K5YHsPJCthtVa`,
    ownership: {
      default: 0,
    },
  };
}
