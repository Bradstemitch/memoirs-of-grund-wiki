import { makeid } from '../../../creatures/_BUILDERS/_Constants';

export function wep_axe(equipped: boolean, offhand?: boolean) {
  return {
    folder: `o8W3vHYG6Tv7SgNp`,
    name: `Axe`,
    type: `weapon`,
    img: `modules/wfrp4e-up-in-arms/assets/icons/axe.png`,
    system: {
      description: {
        value:
          `<p>Much beloved of Dwarfs, the axe is not as agile in the hand as a sword but the heavy cleaving head can make a mess of armour and shields.</p>`,
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
        gc: 0,
        ss: 10,
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
        value: `+SB+4`,
      },
      reach: {
        value: `average`,
      },
      range: {
        value: ``,
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
        value: ``,
      },
      currentAmmo: {
        value: `0`,
      },
      consumesAmmo: {
        value: true,
      },
      weaponGroup: {
        value: `basic`,
      },
      qualities: {
        value: [
          {
            name: `hack`,
            value: null,
          },
        ],
      },
      flaws: {
        value: [
          {
            name: `unbalanced`,
            value: null,
          },
        ],
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
        value: offhand ? true : false,
      },
    },
    effects: [],
    flags: {
      'wfrp4e-up-in-arms': {
        'initialization-folder': `Weapons`,
        sort: 2000000,
      },
    },
    _stats: {
      systemId: `wfrp4e`,
      systemVersion: `9.6.3`,
      coreVersion: `14.364`,
      createdTime: 1786727935736,
      modifiedTime: 1786727935736,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
      compendiumSource:
        `Compendium.wfrp4e-up-in-arms.items.Item.FaPOAjXnBXWLjQBl`,
      duplicateSource: null,
      exportSource: {
        worldId: `compendium-project-whf4e`,
        uuid: `Item.FaPOAjXnBXWLjQBl`,
        coreVersion: `14.364`,
        systemId: `wfrp4e`,
        systemVersion: `9.6.3`,
      },
    },
    _id: makeid(),
    ownership: {
      default: 0,
    },
  };
}
