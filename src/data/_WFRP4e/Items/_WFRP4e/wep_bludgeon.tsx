import { makeid } from '../../../creatures/_BUILDERS/_Constants';

export function wep_club(equipped: boolean, offhand?: boolean) {
  return {
    folder: `o8W3vHYG6Tv7SgNp`,
    name: `Club`,
    type: `weapon`,
    img: `modules/wfrp4e-up-in-arms/assets/icons/club.png`,
    system: {
      description: {
        value:
          `<p>Clubs are as often found as they are crafted. The price listed indicates that a purchaser needs such a weapon in a hurry, though if a Character is in a wooded environment, they can source themselves a club by passing an Extended <strong>Challenging (+0) Outdoor Survival</strong> Test requiring a total of 7 SL.</p>`,
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
        ss: 4,
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
        value: [],
      },
      flaws: {
        value: [
          {
            name: `undamaging`,
            value: null,
          },
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
        sort: 2600000,
      },
    },
    _stats: {
      systemId: `wfrp4e`,
      systemVersion: `9.6.3`,
      coreVersion: `14.364`,
      createdTime: 1786728957915,
      modifiedTime: 1786728957915,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
      compendiumSource:
        `Compendium.wfrp4e-up-in-arms.items.Item.XvvHQ8amxyhTaORs`,
      duplicateSource: null,
      exportSource: {
        worldId: `compendium-project-whf4e`,
        uuid: `Item.XvvHQ8amxyhTaORs`,
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
