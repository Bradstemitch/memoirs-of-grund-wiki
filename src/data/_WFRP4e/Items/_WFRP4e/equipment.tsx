export function equip_backpack(equipped: boolean) {
  return {
    name: `Backpack`,
    type: `container`,
    img: `modules/wfrp4e-core/icons/equipment/packs_and_containers/backpack.png`,
    effects: [],
    flags: {
      _sheetTab: {},
      core: {},
    },
    system: {
      description: {
        value: `<p>Counts as ‘worn’ when strapped to your back.&nbsp;</p>`,
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
        gc: 0,
        ss: 4,
        bp: 10,
      },
      availability: {
        value: `common`,
      },
      location: {
        value: ``,
      },
      wearable: {
        value: true,
      },
      carries: {
        value: 4,
      },
      countEnc: {
        value: true,
      },
      damageToItem: {
        value: null,
        shield: null,
      },
      equipped: {
        value: equipped,
      },
    },
    _stats: {
      systemId: `wfrp4e`,
      systemVersion: `9.6.3`,
      coreVersion: `14.364`,
      createdTime: 1786669315648,
      modifiedTime: 1786669315648,
      lastModifiedBy: `khhY7fuxf56JOp5M`,
      compendiumSource: `Compendium.wfrp4e-core.items.Item.kJziKlct30lfAiYA`,
      duplicateSource: null,
      exportSource: {
        worldId: `compendium-project-whf4e`,
        uuid: `Item.kJziKlct30lfAiYA`,
        coreVersion: `14.364`,
        systemId: `wfrp4e`,
        systemVersion: `9.6.3`,
      },
    },
    _id: `kJziKlct30lfAiYA`,
    folder: `UOfdGwcYSMIwf22o`,
    ownership: {
      default: 0,
    },
  };
}
