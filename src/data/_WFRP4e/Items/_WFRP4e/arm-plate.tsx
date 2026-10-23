export function arm_plateOpenHelm(equipped: boolean) {
  return {
    name: `Plate Open Helm`,
    type: `armour`,
    img: `modules/wfrp4e-core/icons/equipment/armour/plate-open-helm.png`,
    effects: [
      {
        _id: `YLns5DNubGbr27Lh`,
        flags: {
          wfrp4e: {
            applicationData: {},
            scriptData: [],
            _legacyData: {},
          },
        },
        changes: [],
        disabled: false,
        duration: {
          startTime: null,
          seconds: null,
          combat: null,
          rounds: null,
          turns: null,
          startRound: null,
          startTurn: null,
        },
        tint: `#ffffff`,
        transfer: true,
        origin: null,
        name: `Plate Open Helm`,
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
        img: `modules/wfrp4e-core/icons/equipment/armour/plate-open-helm.png`,
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
            equipTransfer: true,
            prompt: false,
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
              label: `Plate Open Helm`,
              trigger: `dialog`,
              script: `[Script.xvGxwv7X0Vq3vNqb]`,
              options: {
                activateScript: `[Script.9RFoasDcFnYZ1txR]`,
                hideScript: `[Script.h0DfPwUUOBjyAHMZ]`,
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
          itemTargetData: {
            ids: [],
            allItems: false,
          },
          condition: {
            numbered: false,
          },
        },
        sort: 0,
      },
    ],
    flags: {
      _sheetTab: {},
      core: {},
    },
    system: {
      description: {
        value: `<p></p>`,
      },
      gmdescription: {
        value: ``,
      },
      quantity: {
        value: 1,
      },
      encumbrance: {
        value: 1,
      },
      price: {
        gc: 2,
        ss: 0,
        bp: 0,
      },
      availability: {
        value: `common`,
      },
      location: {
        value: ``,
      },
      damageToItem: {
        value: 0,
        shield: 0,
      },
      armorType: {
        value: `plate`,
      },
      penalty: {
        value: `-10 Perception`,
      },
      qualities: {
        value: [],
      },
      flaws: {
        value: [
          {
            name: `partial`,
          },
        ],
      },
      special: {
        value: ``,
      },
      AP: {
        head: 2,
        lArm: 0,
        rArm: 0,
        lLeg: 0,
        rLeg: 0,
        body: 0,
      },
      APdamage: {
        head: 0,
        lArm: 0,
        rArm: 0,
        lLeg: 0,
        rLeg: 0,
        body: 0,
      },
      equipped: {
        value: equipped,
      },
    },
    _stats: {
      compendiumSource: `Compendium.wfrp4e-core.items.Item.TvUKzvXjc2VChuTT`,
      duplicateSource: null,
      exportSource: null,
      coreVersion: `13.351`,
      systemId: `wfrp4e`,
      systemVersion: `9.3.2`,
      createdTime: 1764673159111,
      modifiedTime: 1764673161322,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
    },
    _id: `vECmcQxaCcwDMn4b`,
    folder: `urDb04aC38SChVU2`,
    sort: 800000,
    ownership: {
      default: 0,
    },
  };
}
export function arm_plateHelm(equipped: boolean) {
  return {
    name: `Plate Helm`,
    type: `armour`,
    img: `modules/wfrp4e-core/icons/equipment/armour/plate-helm.png`,
    effects: [
      {
        _id: `Vljt1mEPqTTJIIxs`,
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
        name: `Plate Helm`,
        description: ``,
        statuses: [],
        _stats: {
          compendiumSource: null,
          duplicateSource: null,
          exportSource: null,
          coreVersion: `14.364`,
          systemId: `wfrp4e`,
          systemVersion: `9.6.1`,
          lastModifiedBy: `khhY7fuxf56JOp5M`,
          createdTime: 1782295648894,
          modifiedTime: 1782295648894,
        },
        img: `modules/wfrp4e-core/icons/equipment/armour/plate-helm.png`,
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
            equipTransfer: true,
            prompt: false,
            area: {
              aura: {
                transferred: false,
                render: false,
                visibility: 0,
              },
              keep: false,
              duration: `sustained`,
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
              label: `Plate Helm`,
              trigger: `dialog`,
              script: `[Script.0iTLDgFHO9Rgc010]`,
              options: {
                activateScript: `[Script.9RFoasDcFnYZ1txR]`,
                hideScript: `[Script.h0DfPwUUOBjyAHMZ]`,
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
          itemTargetData: {
            ids: [],
            allItems: false,
          },
          condition: {
            numbered: false,
          },
          changes: [],
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
        value: `<p></p>`,
      },
      gmdescription: {
        value: ``,
      },
      quantity: {
        value: 1,
      },
      encumbrance: {
        value: 2,
      },
      price: {
        gc: 3,
        ss: 0,
        bp: 0,
      },
      availability: {
        value: `rare`,
      },
      location: {
        value: ``,
      },
      damageToItem: {
        value: 0,
        shield: 0,
      },
      armorType: {
        value: `plate`,
      },
      penalty: {
        value: `-20 Perception`,
      },
      qualities: {
        value: [
          {
            name: `impenetrable`,
          },
        ],
      },
      flaws: {
        value: [
          {
            name: `weakpoints`,
          },
        ],
      },
      special: {
        value: ``,
      },
      AP: {
        head: 2,
        lArm: 0,
        rArm: 0,
        lLeg: 0,
        rLeg: 0,
        body: 0,
      },
      APdamage: {
        head: 0,
        lArm: 0,
        rArm: 0,
        lLeg: 0,
        rLeg: 0,
        body: 0,
      },
      equipped: {
        value: equipped,
      },
    },
    _stats: {
      compendiumSource: `Compendium.wfrp4e-core.items.Item.e9WmLbD7AuXSeWp0`,
      duplicateSource: null,
      exportSource: null,
      coreVersion: `14.364`,
      systemId: `wfrp4e`,
      systemVersion: `9.6.1`,
      createdTime: 1782295648894,
      modifiedTime: 1782295648894,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
    },
    _id: `LbsAKkbqUJhQbbcz`,
    folder: `urDb04aC38SChVU2`,
    sort: -50000,
    ownership: {
      default: 0,
    },
  };
}

export function arm_plateBreastplate(equipped: boolean) {
  return {
    name: `Plate Breastplate`,
    type: `armour`,
    img: `modules/wfrp4e-core/icons/equipment/armour/plate-breastplate.png`,
    effects: [],
    flags: {
      _sheetTab: {},
      core: {},
    },
    system: {
      description: {
        value: `<p></p>`,
      },
      gmdescription: {
        value: ``,
      },
      quantity: {
        value: 1,
      },
      encumbrance: {
        value: 3,
      },
      price: {
        gc: 10,
        ss: 0,
        bp: 0,
      },
      availability: {
        value: `scarce`,
      },
      location: {
        value: ``,
      },
      damageToItem: {
        value: 0,
        shield: 0,
      },
      armorType: {
        value: `plate`,
      },
      penalty: {
        value: ``,
      },
      qualities: {
        value: [
          {
            name: `impenetrable`,
          },
        ],
      },
      flaws: {
        value: [
          {
            name: `weakpoints`,
          },
        ],
      },
      special: {
        value: ``,
      },
      AP: {
        head: 0,
        lArm: 0,
        rArm: 0,
        lLeg: 0,
        rLeg: 0,
        body: 2,
      },
      APdamage: {
        head: 0,
        lArm: 0,
        rArm: 0,
        lLeg: 0,
        rLeg: 0,
        body: 0,
      },
      equipped: {
        value: equipped,
      },
    },
    _stats: {
      systemId: `wfrp4e`,
      systemVersion: `9.6.3`,
      coreVersion: `14.364`,
      createdTime: 1786596600196,
      modifiedTime: 1786596600196,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
      compendiumSource: `Compendium.wfrp4e-core.items.Item.oBNXxRFPh1sOT4K2`,
      duplicateSource: null,
      exportSource: {
        worldId: `compendium-project-whf4e`,
        uuid: `Item.OQkA4VOgJkoLsyFM`,
        coreVersion: `14.364`,
        systemId: `wfrp4e`,
        systemVersion: `9.6.3`,
      },
    },
    folder: `urDb04aC38SChVU2`,
    _id: `OQkA4VOgJkoLsyFM`,
    ownership: {
      default: 0,
    },
  };
}

export function arm_plateBracers(equipped: boolean) {
  return {
    name: `Plate Bracers`,
    type: `armour`,
    img: `modules/wfrp4e-core/icons/equipment/armour/plate-bracers.png`,
    effects: [],
    flags: {
      _sheetTab: {},
      core: {},
    },
    system: {
      description: {
        value: `<p></p>`,
      },
      gmdescription: {
        value: ``,
      },
      quantity: {
        value: 1,
      },
      encumbrance: {
        value: 3,
      },
      price: {
        gc: 8,
        ss: 0,
        bp: 0,
      },
      availability: {
        value: `rare`,
      },
      location: {
        value: ``,
      },
      damageToItem: {
        value: 0,
        shield: 0,
      },
      armorType: {
        value: `plate`,
      },
      penalty: {
        value: ``,
      },
      qualities: {
        value: [
          {
            name: `impenetrable`,
          },
        ],
      },
      flaws: {
        value: [
          {
            name: `weakpoints`,
          },
        ],
      },
      special: {
        value: ``,
      },
      AP: {
        head: 0,
        lArm: 2,
        rArm: 2,
        lLeg: 0,
        rLeg: 0,
        body: 0,
      },
      APdamage: {
        head: 0,
        lArm: 0,
        rArm: 0,
        lLeg: 0,
        rLeg: 0,
        body: 0,
      },
      equipped: {
        value: equipped,
      },
    },
    _stats: {
      systemId: `wfrp4e`,
      systemVersion: `9.6.3`,
      coreVersion: `14.364`,
      createdTime: 1786596678668,
      modifiedTime: 1786596678668,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
      compendiumSource: `Compendium.wfrp4e-core.items.Item.oW7wSkl4JMb5sBH8`,
      duplicateSource: null,
      exportSource: {
        worldId: `compendium-project-whf4e`,
        uuid: `Item.oW7wSkl4JMb5sBH8`,
        coreVersion: `14.364`,
        systemId: `wfrp4e`,
        systemVersion: `9.6.3`,
      },
    },
    _id: `oW7wSkl4JMb5sBH8`,
    folder: `urDb04aC38SChVU2`,
    ownership: {
      default: 0,
    },
  };
}

export function arm_plateLeggings(equipped: boolean) {
  return {
    name: `Plate Leggings`,
    type: `armour`,
    img: `modules/wfrp4e-core/icons/equipment/armour/plate-leggings.png`,
    effects: [
      {
        _id: `u46Xpql4mjj6JOD0`,
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
        name: `Plate Leggings`,
        description: ``,
        statuses: [],
        _stats: {
          coreVersion: `14.364`,
          systemId: `wfrp4e`,
          systemVersion: `9.6.3`,
          createdTime: 1786596729515,
          modifiedTime: 1786596729515,
          lastModifiedBy: `khhY7fuxf56JOp5M`,
          compendiumSource: null,
          duplicateSource: null,
          exportSource: null,
        },
        img: `modules/wfrp4e-core/icons/equipment/armour/plate-leggings.png`,
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
            equipTransfer: true,
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
              label: `Plate Leggings`,
              trigger: `dialog`,
              script: `[Script.xvGxwv7X0Vq3vNqb]`,
              options: {
                activateScript: `[Script.AV2Kj6jgmIc45zKi]`,
                hideScript: `[Script.l8qFKSnMpy4P7XQR]`,
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
        value: `<p></p>`,
      },
      gmdescription: {
        value: ``,
      },
      quantity: {
        value: 1,
      },
      encumbrance: {
        value: 3,
      },
      price: {
        gc: 10,
        ss: 0,
        bp: 0,
      },
      availability: {
        value: `rare`,
      },
      location: {
        value: ``,
      },
      damageToItem: {
        value: 0,
        shield: 0,
      },
      armorType: {
        value: `plate`,
      },
      penalty: {
        value: `-10 Stealth`,
      },
      qualities: {
        value: [
          {
            name: `impenetrable`,
          },
        ],
      },
      flaws: {
        value: [
          {
            name: `weakpoints`,
          },
        ],
      },
      special: {
        value: ``,
      },
      AP: {
        head: 0,
        lArm: 0,
        rArm: 0,
        lLeg: 2,
        rLeg: 2,
        body: 0,
      },
      APdamage: {
        head: 0,
        lArm: 0,
        rArm: 0,
        lLeg: 0,
        rLeg: 0,
        body: 0,
      },
      equipped: {
        value: equipped,
      },
    },
    _stats: {
      systemId: `wfrp4e`,
      systemVersion: `9.6.3`,
      coreVersion: `14.364`,
      createdTime: 1786596729515,
      modifiedTime: 1786596729515,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
      compendiumSource: `Compendium.wfrp4e-core.items.Item.bY6M9XxbqmFmqpA8`,
      duplicateSource: null,
      exportSource: {
        worldId: `compendium-project-whf4e`,
        uuid: `Item.bY6M9XxbqmFmqpA8`,
        coreVersion: `14.364`,
        systemId: `wfrp4e`,
        systemVersion: `9.6.3`,
      },
    },
    _id: `bY6M9XxbqmFmqpA8`,
    folder: `urDb04aC38SChVU2`,
    ownership: {
      default: 0,
    },
  };
}
