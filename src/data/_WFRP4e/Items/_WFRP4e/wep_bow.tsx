import { makeid } from '../../../creatures/_BUILDERS/_Constants';

export function wep_bow(
  equipped: boolean,
  elvenAmmo: boolean,
  ammoAmount: number
) {
  let ammo: any = ``;
  let ammoId = `DC7oJjWgPePRgaFO`;
  if (elvenAmmo === true) {
    ammo = ammo_arrows(ammoAmount);
    ammoId = `DC7oJjWgPePRgaFO`;
  } else {
    ammo = ammo_arrows(ammoAmount);
    ammoId = `DC7oJjWgPePRgaFO`;
  }
  return [
    {
      name: `Bow`,
      type: `weapon`,
      img: `modules/wfrp4e-core/icons/equipment/weapons/bow.png`,
      effects: [],
      flags: {
        _sheetTab: {},
        wfrp4e: {
          optimalRange: `normal`,
        },
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
          gc: 4,
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
        damage: {
          dice: ``,
          value: `SB+3`,
        },
        reach: {
          value: ``,
        },
        range: {
          value: `50`,
        },
        skill: {
          value: ``,
        },
        modeOverride: {
          value: ``,
        },
        twohanded: {
          value: true,
        },
        ammunitionGroup: {
          value: `bow`,
        },
        currentAmmo: {
          value: ammoId,
        },
        consumesAmmo: {
          value: true,
        },
        weaponGroup: {
          value: `bow`,
        },
        qualities: {
          value: [],
        },
        flaws: {
          value: [],
        },
        special: {
          value: ``,
        },
        equipped: {
          value: equipped,
        },
        loaded: {
          value: false,
          repeater: false,
          amt: 0,
        },
        offhand: {
          value: false,
        },
      },
      _stats: {
        compendiumSource: `Compendium.wfrp4e-core.items.Item.U94l3IDj3xfIc78i`,
        duplicateSource: null,
        exportSource: null,
        coreVersion: `13.351`,
        systemId: `wfrp4e`,
        systemVersion: `9.3.2`,
        createdTime: 1764502802025,
        modifiedTime: 1764502890449,
        lastModifiedBy: `khhY7fuxf56JOp5M`,
      },
      _id: makeid(),
      folder: `pG7lWm5hsAoxzrto`,
      sort: 0,
      ownership: {
        default: 0,
      },
    },
    ammo,
  ];
}

export function wep_longbow(
  equipped: boolean,
  elvenAmmo: boolean,
  ammoAmount: number
) {
  let ammo: any = ``;
  let ammoId = `DC7oJjWgPePRgaFO`;
  if (elvenAmmo === true) {
    ammo = ammo_arrows(ammoAmount);
    ammoId = `DC7oJjWgPePRgaFO`;
  } else {
    ammo = ammo_arrows(ammoAmount);
    ammoId = `DC7oJjWgPePRgaFO`;
  }
  return [
    {
      name: `Longbow`,
      type: `weapon`,
      img: `modules/wfrp4e-core/icons/equipment/weapons/longbow.png`,
      effects: [],
      flags: {
        _sheetTab: {},
        wfrp4e: {
          optimalRange: `long`,
        },
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
          gc: 5,
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
        damage: {
          dice: ``,
          value: `SB+4`,
        },
        reach: {
          value: ``,
        },
        range: {
          value: `100`,
        },
        skill: {
          value: ``,
        },
        modeOverride: {
          value: ``,
        },
        twohanded: {
          value: true,
        },
        ammunitionGroup: {
          value: `bow`,
        },
        currentAmmo: {
          value: ammoId,
        },
        consumesAmmo: {
          value: true,
        },
        weaponGroup: {
          value: `bow`,
        },
        qualities: {
          value: [
            {
              name: `damaging`,
            },
          ],
        },
        flaws: {
          value: [],
        },
        special: {
          value: ``,
        },
        equipped: {
          value: equipped,
        },
        loaded: {
          value: false,
          repeater: false,
          amt: 0,
        },
        offhand: {
          value: false,
        },
      },
      _stats: {
        systemId: `wfrp4e`,
        systemVersion: `9.6.3`,
        coreVersion: `14.364`,
        createdTime: 1786589587091,
        modifiedTime: 1786589587091,
        lastModifiedBy: `khhY7fuxf56JOp5M`,
        compendiumSource: `Compendium.wfrp4e-core.items.Item.RHkj94yUJp620xr1`,
        duplicateSource: null,
        exportSource: {
          worldId: `compendium-project-whf4e`,
          uuid: `Item.RHkj94yUJp620xr1`,
          coreVersion: `14.364`,
          systemId: `wfrp4e`,
          systemVersion: `9.6.3`,
        },
      },
      _id: `RHkj94yUJp620xr1`,
      folder: `pG7lWm5hsAoxzrto`,
      ownership: {
        default: 0,
      },
    },
    ammo,
  ];
}

export function ammo_arrows(ammoAmount: number) {
  return {
    name: `Arrow`,
    type: `ammunition`,
    img: `modules/wfrp4e-core/icons/equipment/ammunition/arrow.png`,
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
        value: ammoAmount,
      },
      encumbrance: {
        value: 0,
      },
      price: {
        gc: 0,
        ss: 5,
        bp: 0,
      },
      availability: {
        value: `common`,
      },
      location: {
        value: ``,
      },
      ammunitionType: {
        value: `bow`,
      },
      range: {
        value: `As weapon`,
      },
      damage: {
        dice: ``,
        value: ``,
      },
      qualities: {
        value: [
          {
            name: `impale`,
          },
        ],
      },
      flaws: {
        value: [],
      },
      special: {
        value: ``,
      },
      damageToItem: {
        value: null,
        shield: null,
      },
    },
    _stats: {
      compendiumSource: `Compendium.wfrp4e-core.items.Item.6GNNpWIGxO9CkTCR`,
      duplicateSource: null,
      exportSource: null,
      coreVersion: `13.351`,
      systemId: `wfrp4e`,
      systemVersion: `9.3.2`,
      createdTime: 1764502851272,
      modifiedTime: 1764502851272,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
    },
    _id: `DC7oJjWgPePRgaFO`,
    folder: `4vBO7teanONzXaqE`,
    sort: 0,
    ownership: {
      default: 0,
    },
  };
}

export function wep_plumbata(equipped: boolean, quantity: number) {
  return {
    name: `Plumbata`,
    type: `weapon`,
    img: `modules/wfrp4e-core/icons/equipment/weapons/dart.png`,
    effects: [],
    flags: {
      _sheetTab: {},
      wfrp4e: {
        optimalRange: `normal`,
      },
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
        value: quantity,
      },
      encumbrance: {
        value: 0,
      },
      price: {
        gc: 0,
        ss: 2,
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
      damage: {
        dice: ``,
        value: `+SB+1`,
      },
      reach: {
        value: ``,
      },
      range: {
        value: `SBx8`,
      },
      skill: {
        value: ``,
      },
      modeOverride: {
        value: ``,
      },
      twohanded: {
        value: false,
      },
      ammunitionGroup: {
        value: `none`,
      },
      currentAmmo: {
        value: `0`,
      },
      consumesAmmo: {
        value: true,
      },
      weaponGroup: {
        value: `throwing`,
      },
      qualities: {
        value: [
          {
            name: `impale`,
          },
        ],
      },
      flaws: {
        value: [],
      },
      special: {
        value: ``,
      },
      equipped: {
        value: equipped,
      },
      loaded: {
        value: false,
        repeater: false,
        amt: 0,
      },
      offhand: {
        value: false,
      },
    },
    _stats: {
      systemId: `wfrp4e`,
      systemVersion: `9.6.3`,
      coreVersion: `14.364`,
      createdTime: 1786589791362,
      modifiedTime: 1786589791362,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
      compendiumSource: `Compendium.wfrp4e-core.items.Item.ddXgrDWZXSM3nXaf`,
      duplicateSource: null,
      exportSource: {
        worldId: `compendium-project-whf4e`,
        uuid: `Item.ddXgrDWZXSM3nXaf`,
        coreVersion: `14.364`,
        systemId: `wfrp4e`,
        systemVersion: `9.6.3`,
      },
    },
    _id: makeid(),
    folder: `pG7lWm5hsAoxzrto`,
    ownership: {
      default: 0,
    },
  };
}
