import { makeid } from '../creatures/_BUILDERS/_Constants';

export function arm_guardFlak(equipped: boolean) {
  return {
    name: `Astra Militarum Flak Armour`,
    type: `protection`,
    folder: `ZuAeviXZUQVXVQQr`,
    _id: makeid(),
    img: `modules/impmal-core/assets/icons/protection/armour.webp`,
    system: {
      notes: {
        player: ``,
        gm: ``,
      },
      encumbrance: {
        value: 5,
      },
      cost: 1000,
      availability: `rare`,
      quantity: 1,
      equipped: {
        value: equipped,
        force: false,
      },
      traits: {
        list: [
          {
            key: `loud`,
          },
        ],
      },
      category: `mundane`,
      armour: 4,
      locations: {
        list: [`rightLeg`, `leftLeg`, `rightArm`, `leftArm`, `body`, `head`],
        label: `All`,
      },
      damage: {},
      slots: {
        list: [],
        value: 0,
      },
      mods: {
        list: [],
      },
      destroyed: {},
    },
    effects: [],
    sort: 0,
    flags: {
      core: {},
    },
    _stats: {
      compendiumSource: `Item.pEFmeV070knXgwZ5`,
      duplicateSource: null,
      exportSource: null,
      coreVersion: `14.364`,
      systemId: `impmal`,
      systemVersion: `4.1.0`,
      lastModifiedBy: null,
      createdTime: null,
      modifiedTime: 1786134144413,
    },
    ownership: {
      default: 0,
    },
  };
}

export function arm_heavyLeathers(equipped: boolean) {
  return {
    name: `Heavy Leathers`,
    type: `protection`,
    folder: `ZuAeviXZUQVXVQQr`,
    _id: makeid(),
    img: `modules/impmal-core/assets/icons/protection/armour.webp`,
    system: {
      notes: {
        player: ``,
        gm: ``,
      },
      encumbrance: {
        value: 3,
      },
      cost: 60,
      availability: `common`,
      quantity: 1,
      equipped: {
        value: equipped,
        force: false,
      },
      traits: {
        list: [],
      },
      category: `mundane`,
      armour: 2,
      locations: {
        list: [`rightArm`, `leftArm`, `body`, `rightLeg`, `leftLeg`],
        label: `Arms, Body, Legs`,
      },
      damage: {},
      destroyed: {},
      slots: {
        list: [],
        value: 0,
      },
      mods: {
        list: [],
      },
    },
    effects: [],
    sort: 0,
    flags: {
      core: {},
    },
    _stats: {
      systemId: `impmal`,
      systemVersion: `4.1.0`,
      coreVersion: `14.364`,
      createdTime: 1786137622045,
      modifiedTime: 1786137622045,
      lastModifiedBy: `79TGpaW8JtXdSDiv`,
      compendiumSource: `Item.LmBKbPMN8CsK4B3T`,
      duplicateSource: null,
      exportSource: null,
    },
    ownership: {
      default: 0,
    },
  };
}

export function arm_enforcerCarapace(equipped: boolean) {
  return {
    name: `Enforcer Carapace`,
    type: `protection`,
    folder: `ZuAeviXZUQVXVQQr`,
    _id: makeid(),
    img: `modules/impmal-core/assets/icons/protection/armour.webp`,
    system: {
      notes: {
        player: ``,
        gm: ``,
      },
      encumbrance: {
        value: 5,
      },
      cost: 1800,
      availability: `rare`,
      quantity: 1,
      equipped: {
        value: false,
        force: false,
      },
      traits: {
        list: [
          {
            key: `heavy`,
            value: `4`,
          },
          {
            key: `loud`,
          },
        ],
      },
      category: `carapace`,
      armour: 5,
      locations: {
        list: [`rightLeg`, `leftLeg`, `rightArm`, `leftArm`, `body`, `head`],
        label: `All`,
      },
      damage: {},
      destroyed: {},
      slots: {
        list: [],
        value: 0,
      },
      mods: {
        list: [],
      },
    },
    effects: [],
    flags: {},
    _stats: {
      systemId: `impmal`,
      systemVersion: `4.1.0`,
      coreVersion: `14.364`,
      createdTime: 1786150221906,
      modifiedTime: 1786150221906,
      lastModifiedBy: `79TGpaW8JtXdSDiv`,
      compendiumSource: `Compendium.impmal-core.items.Item.Gbv79Tx6A5OS0zqe`,
      duplicateSource: null,
      exportSource: {
        worldId: `hive-arcos`,
        uuid: `Item.Gbv79Tx6A5OS0zqe`,
        coreVersion: `14.364`,
        systemId: `impmal`,
        systemVersion: `4.1.0`,
      },
    },
    ownership: {
      default: 0,
    },
  };
}
