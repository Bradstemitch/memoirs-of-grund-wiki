import { makeid } from '../creatures/_BUILDERS/_Constants';

export function spec_longGuns(advances: number) {
  return {
    folder: `RK7ZH8sQLg4GKQWP`,
    name: `Long Guns`,
    type: `specialisation`,
    img: `modules/impmal-core/assets/icons/blank.webp`,
    system: {
      notes: {
        player:
          `<p>@UUID[JournalEntry.J8NVn5iNgM57cKmw.JournalEntryPage.NrJuy93Put0XCYq9#ranged-(bs)]{Ranged}</p><p>Extensive training in the use of longer firearms, such as lasguns, shotguns, bolters, autoguns, meltaguns, and similar ranged weapons. </p>`,
        gm: ``,
      },
      advances: advances,
      restricted: false,
      skill: `ranged`,
    },
    effects: [],
    sort: 0,
    flags: {},
    _stats: {
      compendiumSource: null,
      duplicateSource: null,
      exportSource: null,
      coreVersion: `14.364`,
      systemId: `impmal`,
      systemVersion: `3.3.0`,
      lastModifiedBy: null,
      createdTime: null,
      modifiedTime: null,
    },
    _id: makeid(),
    ownership: {
      default: 0,
    },
  };
}

export function spec_ordnance(advances: number) {
  return {
    folder: `RK7ZH8sQLg4GKQWP`,
    name: `Ordnance`,
    type: `specialisation`,
    img: `modules/impmal-core/assets/icons/generic.webp`,
    system: {
      notes: {
        player:
          `<p>@UUID[JournalEntry.J8NVn5iNgM57cKmw.JournalEntryPage.NrJuy93Put0XCYq9#ranged-(bs)]{Ranged}</p><p>Extensive training in the use of heavier ranged weaponry, such as lascannons, heavy bolters, missile launchers, and similarly devastating means of causing death and destruction. </p>`,
        gm: ``,
      },
      advances: advances,
      restricted: false,
      skill: `ranged`,
    },
    effects: [],
    sort: 100000,
    flags: {},
    _stats: {
      systemId: `impmal`,
      systemVersion: `4.1.0`,
      coreVersion: `14.364`,
      createdTime: 1786899384370,
      modifiedTime: 1786899388151,
      lastModifiedBy: `79TGpaW8JtXdSDiv`,
      compendiumSource: null,
      duplicateSource: `Actor.rZs5wH0oDbF8hQEz.Item.2GRjJ5CSjMJ8peJp`,
      exportSource: null,
    },
    _id: makeid(),
    ownership: {
      default: 0,
    },
  };
}
