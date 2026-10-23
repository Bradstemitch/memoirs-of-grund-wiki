import { makeid } from '../creatures/_BUILDERS/_Constants';

export function wep_lasgun(equipped: boolean) {
  return {
    name: `Lasgun`,
    type: `weapon`,
    system: {
      notes: {
        player: ``,
        gm: ``,
      },
      encumbrance: {
        value: 2,
      },
      cost: 600,
      availability: `common`,
      quantity: 1,
      equipped: {
        value: equipped,
        force: false,
      },
      damage: {
        base: `6`,
        characteristic: ``,
        SL: false,
        ignoreAP: false,
      },
      traits: {
        list: [
          {
            key: `burst`,
          },
          {
            key: `loud`,
          },
          {
            key: `reliable`,
          },
          {
            key: `twohanded`,
          },
        ],
      },
      ammoCost: 150,
      attackType: `ranged`,
      category: `las`,
      spec: `longGun`,
      range: `long`,
      rangeModifier: {
        value: 0,
        override: ``,
      },
      mag: {
        value: 8,
        current: 8,
      },
      ammo: {
        id: ``,
      },
      mods: {
        list: [],
      },
      slots: {
        list: [],
        value: 0,
      },
      test: {
        self: false,
        skill: {},
      },
      skillOverride: {},
    },
    folder: `Eic6vQH0ZQYinOav`,
    _id: makeid(),
    img: `modules/impmal-core/assets/icons/weapons/lasgun.webp`,
    effects: [],
    sort: 0,
    flags: {},
    _stats: {
      compendiumSource: null,
      duplicateSource: null,
      exportSource: null,
      coreVersion: `14.364`,
      systemId: `impmal`,
      systemVersion: `4.1.0`,
      lastModifiedBy: null,
      createdTime: null,
      modifiedTime: null,
    },
    ownership: {
      default: 0,
    },
  };
}

export function wep_hotshotLasgun(equipped: boolean) {
  return {
    name: `Hot-Shot Lasgun`,
    type: `weapon`,
    system: {
      notes: {
        player: ``,
        gm: ``,
      },
      encumbrance: {
        value: 3,
      },
      cost: 1000,
      availability: `rare`,
      quantity: 1,
      equipped: {
        value: equipped,
        force: false,
      },
      damage: {
        base: `8`,
        characteristic: ``,
        SL: false,
        ignoreAP: false,
      },
      traits: {
        list: [
          {
            key: `burst`,
          },
          {
            key: `loud`,
          },
          {
            key: `penetrating`,
            value: `2`,
          },
          {
            key: `twohanded`,
          },
        ],
      },
      ammoCost: 250,
      attackType: `ranged`,
      category: `las`,
      spec: `longGun`,
      range: `long`,
      rangeModifier: {
        value: 0,
        override: ``,
      },
      mag: {
        value: 4,
        current: 4,
      },
      ammo: {
        id: ``,
      },
      mods: {
        list: [],
      },
      test: {
        self: false,
        skill: {},
      },
      skillOverride: {},
      slots: {
        list: [],
        value: 0,
      },
    },
    folder: `Eic6vQH0ZQYinOav`,
    _id: makeid(),
    img: `modules/impmal-core/assets/icons/weapons/hot-shot-lasgun.webp`,
    effects: [],
    flags: {},
    _stats: {
      systemId: `impmal`,
      systemVersion: `4.1.0`,
      coreVersion: `14.364`,
      createdTime: 1786453799236,
      modifiedTime: 1786453799236,
      lastModifiedBy: `79TGpaW8JtXdSDiv`,
      compendiumSource: `Compendium.impmal-core.items.Item.nKwFS4aOusUI0GZR`,
      duplicateSource: null,
      exportSource: {
        worldId: `hive-arcos`,
        uuid: `Item.nKwFS4aOusUI0GZR`,
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

export function wep_knife(equipped: boolean) {
  return {
    name: `Knife`,
    type: `weapon`,
    system: {
      notes: {
        player: ``,
        gm: ``,
      },
      encumbrance: {
        value: 0,
      },
      cost: 50,
      availability: `common`,
      quantity: 1,
      equipped: {
        value: equipped,
        force: false,
      },
      damage: {
        base: `0`,
        characteristic: `str`,
        SL: false,
        ignoreAP: false,
      },
      traits: {
        list: [
          {
            key: `subtle`,
          },
          {
            key: `thrown`,
            value: `Short`,
          },
        ],
      },
      ammoCost: 0,
      attackType: `melee`,
      category: `mundane`,
      spec: `oneHanded`,
      range: ``,
      rangeModifier: {
        value: 0,
        override: ``,
      },
      mag: {
        value: 0,
        current: null,
      },
      ammo: {
        id: ``,
      },
      mods: {
        list: [],
      },
      slots: {
        list: [],
        value: 0,
      },
      test: {
        self: false,
        skill: {},
      },
      skillOverride: {},
    },
    folder: `Eic6vQH0ZQYinOav`,
    _id: makeid(),
    img: `modules/impmal-core/assets/icons/weapons/melee-weapon.webp`,
    effects: [],
    sort: 0,
    flags: {},
    _stats: {
      compendiumSource: null,
      duplicateSource: null,
      exportSource: null,
      coreVersion: `14.364`,
      systemId: `impmal`,
      systemVersion: `4.1.0`,
      lastModifiedBy: null,
      createdTime: null,
      modifiedTime: null,
    },
    ownership: {
      default: 0,
    },
  };
}

export function wep_fragGrenade(equipped: boolean) {
  return {
    name: `Frag Grenade`,
    type: `weapon`,
    folder: `eSLlzO0CrtyK8IEA`,
    _id: makeid(),
    img: `modules/impmal-core/assets/icons/weapons/frag-grenade.webp`,
    system: {
      notes: {
        player:
          `<p>Perhaps the most widely used Imperial military-grade munitions, Frag munitions are most commonly found in grenade and missile form. Both explode in showers of shrapnel and other lacertaing metals, making them ideal for anti-infantry duties. Almost every warrior in the Imperium, from Militarum troopers to elite Space Marines, carries frag grenades to aid in assaulting positions, with grenade launchers providing longer range infantry suppression. Frag missiles are the more powerful version, with a greater range to soften up distant positions such as heavy weapon teams.</p><p>Frag grenades have a large radius, and deal decent damage.</p>`,
        gm: ``,
      },
      encumbrance: {
        value: 0,
      },
      cost: 50,
      availability: `common`,
      quantity: 1,
      equipped: {
        value: equipped,
        force: false,
      },
      damage: {
        base: `6`,
        characteristic: ``,
        SL: false,
        ignoreAP: false,
      },
      traits: {
        list: [
          {
            key: `blast`,
          },
          {
            key: `loud`,
          },
          {
            key: `thrown`,
            value: `Medium`,
          },
          {
            key: `unstable`,
          },
        ],
      },
      ammoCost: null,
      attackType: `ranged`,
      category: `grenadesExplosives`,
      spec: `ordnance`,
      range: `medium`,
      rangeModifier: {
        value: 0,
        override: ``,
      },
      mag: {
        value: null,
        current: null,
      },
      ammo: {
        id: ``,
      },
      mods: {
        list: [],
      },
      slots: {
        list: [],
        value: 0,
      },
      test: {
        self: false,
        skill: {},
      },
      skillOverride: {},
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
      systemVersion: `4.1.0`,
      lastModifiedBy: null,
      createdTime: null,
      modifiedTime: null,
    },
    ownership: {
      default: 0,
    },
  };
}

export function wep_krakGrenade(equipped: boolean) {
  return {
    name: `Krak Grenade`,
    type: `weapon`,
    folder: `eSLlzO0CrtyK8IEA`,
    _id: makeid(),
    img: `modules/impmal-core/assets/icons/weapons/krak-grenade.webp`,
    system: {
      notes: {
        player:
          `<p>Krak grenades and missiles are found throughout the Imperium war machine. They are designed for armour penetration and overwhelm most personal protective gear with ease. Krak rounds also excel at blowing apart bulkheads, vehicle hulls, and fortifications, leaving those inside exposed and vulnerable. </p><p>Krak munitions have high damage and the @UUID[JournalEntry.wqlquQ8Njtd5fb4Y.JournalEntryPage.wsM53RDPPrqwS3Te#penetrating-(rating)]{Penetrating} Trait, but a limited radius.</p>`,
        gm: ``,
      },
      encumbrance: {
        value: 0,
      },
      cost: 60,
      availability: `scarce`,
      quantity: 1,
      equipped: {
        value: equipped,
        force: false,
      },
      damage: {
        base: `12`,
        characteristic: ``,
        SL: false,
        ignoreAP: false,
      },
      traits: {
        list: [
          {
            key: `loud`,
          },
          {
            key: `penetrating`,
            value: `4`,
          },
          {
            key: `spread`,
          },
          {
            key: `thrown`,
            value: `Medium`,
          },
          {
            key: `unstable`,
          },
        ],
      },
      ammoCost: null,
      attackType: `ranged`,
      category: `grenadesExplosives`,
      spec: `thrown`,
      range: `medium`,
      rangeModifier: {
        value: 0,
        override: ``,
      },
      mag: {
        value: null,
        current: null,
      },
      ammo: {
        id: ``,
      },
      mods: {
        list: [],
      },
      slots: {
        list: [],
        value: 0,
      },
      test: {
        self: false,
        skill: {},
      },
      skillOverride: {},
    },
    effects: [],
    sort: 0,
    flags: {
      core: {},
    },
    _stats: {
      compendiumSource: `Item.LhciQZrfQDuk8k3W`,
      duplicateSource: null,
      exportSource: null,
      coreVersion: `14.364`,
      systemId: `impmal`,
      systemVersion: `4.1.0`,
      lastModifiedBy: null,
      createdTime: null,
      modifiedTime: null,
    },
    ownership: {
      default: 0,
    },
  };
}

export function wep_autogun(equipped: boolean) {
  return {
    name: `Autogun`,
    type: `weapon`,
    system: {
      notes: {
        player: ``,
        gm: ``,
      },
      encumbrance: {
        value: 2,
      },
      cost: 600,
      availability: `common`,
      quantity: 1,
      equipped: {
        value: equipped,
        force: false,
      },
      damage: {
        base: `6`,
        characteristic: ``,
        SL: false,
        ignoreAP: false,
      },
      traits: {
        list: [
          {
            key: `loud`,
          },
          {
            key: `rapidFire`,
            value: `3`,
          },
          {
            key: `twohanded`,
          },
        ],
      },
      ammoCost: 30,
      attackType: `ranged`,
      category: `solid`,
      spec: `longGun`,
      range: `long`,
      rangeModifier: {
        value: 0,
        override: ``,
      },
      mag: {
        value: 5,
        current: 5,
      },
      ammo: {
        id: ``,
      },
      mods: {
        list: [],
      },
      test: {
        self: false,
        skill: {},
      },
      skillOverride: {},
      slots: {
        list: [],
        value: 0,
      },
    },
    folder: `Eic6vQH0ZQYinOav`,
    _id: makeid(),
    img: `modules/impmal-core/assets/icons/weapons/autogun.webp`,
    effects: [],
    sort: 0,
    flags: {},
    _stats: {
      systemId: `impmal`,
      systemVersion: `4.1.0`,
      coreVersion: `14.364`,
      createdTime: 1786137622045,
      modifiedTime: 1786137622045,
      lastModifiedBy: `79TGpaW8JtXdSDiv`,
      compendiumSource: null,
      duplicateSource: null,
      exportSource: null,
    },
    ownership: {
      default: 0,
    },
  };
}

export function wep_stubPistol(equipped: boolean) {
  return {
    name: `Stub Pistol`,
    type: `weapon`,
    system: {
      notes: {
        player: ``,
        gm: ``,
      },
      encumbrance: {
        value: 0,
      },
      cost: 250,
      availability: `common`,
      quantity: 1,
      equipped: {
        value: equipped,
        force: false,
      },
      damage: {
        base: `6`,
        characteristic: ``,
        SL: false,
        ignoreAP: false,
      },
      traits: {
        list: [
          {
            key: `burst`,
          },
          {
            key: `close`,
          },
          {
            key: `loud`,
          },
        ],
      },
      ammoCost: 20,
      attackType: `ranged`,
      category: `solid`,
      spec: `pistol`,
      range: `medium`,
      rangeModifier: {
        value: 0,
        override: ``,
      },
      mag: {
        value: 2,
        current: 2,
      },
      ammo: {
        id: ``,
      },
      mods: {
        list: [],
      },
      test: {
        self: false,
        skill: {},
      },
      skillOverride: {},
      slots: {
        list: [],
        value: 0,
      },
    },
    folder: `Eic6vQH0ZQYinOav`,
    _id: makeid(),
    img: `modules/impmal-core/assets/icons/weapons/stub-pistol.webp`,
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
      compendiumSource: `Item.85opt2usT8oNSZyt`,
      duplicateSource: null,
      exportSource: null,
    },
    ownership: {
      default: 0,
    },
  };
}

export function wep_fireBomb(equipped: boolean) {
  return {
    name: `Fire Bomb`,
    type: `weapon`,
    folder: `eSLlzO0CrtyK8IEA`,
    _id: makeid(),
    img: `modules/impmal-core/assets/icons/weapons/fire-bomb.webp`,
    system: {
      notes: {
        player:
          `<p>Fire bombs are ancient explosives, dating back to the unknowable past when Humans first discovered that certain liquids were flammable. Promethium or other exotic substances are placed in fragile containers, fitted with burning cloth or electronic igniters, and hurled. The container bursts on impact, spreading flaming liquid across a wide area. Due to their ease of construction, crude bombs are found on almost all Imperial worlds, and the flames they spread are often the first signs of an uprising.</p><p>You can make a Ranged Attack to target an enemy with a Fire Bomb. The target is set @UUID[JournalEntry.DjxnvYJajGflu7IY.JournalEntryPage.Tu0sU1bo9eZI6qoe#ablaze]{Ablaze}. Alternatively, you can target a Zone with a Fire Bomb. A Fire Bombs turns a Zone it hits into a @UUID[JournalEntry.hdElQAwiBr5AyoRf.JournalEntryPage.zQYkbNcsJmGintdL#hazard]{Minor Hazard} for three rounds. This duration can be extended or shortened depending on the amount of flammable material in the Zone, such as arid forests or rain-slicked spires.</p>`,
        gm: ``,
      },
      encumbrance: {
        value: 0,
      },
      cost: 10,
      availability: `common`,
      quantity: 1,
      equipped: {
        value: equipped,
        force: false,
      },
      damage: {
        base: ``,
        characteristic: ``,
        SL: false,
        ignoreAP: false,
      },
      traits: {
        list: [
          {
            key: `blast`,
          },
          {
            key: `inflict`,
            value: `Ablaze`,
          },
          {
            key: `loud`,
          },
          {
            key: `thrown`,
            value: `Medium`,
          },
          {
            key: `unstable`,
          },
        ],
      },
      ammoCost: null,
      attackType: `ranged`,
      category: `grenadesExplosives`,
      spec: `thrown`,
      range: `medium`,
      rangeModifier: {
        value: 0,
        override: ``,
      },
      mag: {
        value: null,
        current: null,
      },
      ammo: {
        id: ``,
      },
      mods: {
        list: [],
      },
      test: {
        self: false,
        skill: {},
      },
      skillOverride: {},
      slots: {
        list: [],
        value: 0,
      },
    },
    effects: [
      {
        name: `Fire Bomb`,
        _id: `5LDPhyGjVLQTTOkZ`,
        disabled: false,
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
          impmal: {
            manualEffectKeys: false,
          },
        },
        tint: `#ffffff`,
        _stats: {
          coreVersion: `14.364`,
          systemId: `impmal`,
          systemVersion: `4.1.0`,
          createdTime: 1786138101029,
          modifiedTime: 1786138101029,
          lastModifiedBy: `79TGpaW8JtXdSDiv`,
          compendiumSource: null,
          duplicateSource: null,
          exportSource: null,
        },
        img: `modules/impmal-core/assets/icons/weapons/fire-bomb.webp`,
        type: `base`,
        system: {
          transferData: {
            type: `zone`,
            documentType: `Actor`,
            avoidTest: {
              value: `none`,
              opposed: false,
              prevention: true,
              reversed: false,
              skill: {},
            },
            prompt: false,
            zone: {
              type: `zone`,
              keep: false,
              traits: {
                barrier: false,
                hazard: `minorHazard`,
                warpTouched: false,
                difficult: false,
              },
              transferred: false,
              skipImmediateOnPlacement: false,
            },
            originalType: `document`,
            testIndependent: false,
            equipTransfer: false,
            selfOnly: false,
            area: {
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
              aura: {
                transferred: false,
                render: false,
                visibility: 0,
              },
              duration: `sustained`,
            },
          },
          changes: [],
          itemTargetData: {
            ids: [],
            allItems: false,
          },
          scriptData: [],
          zone: {
            type: `zone`,
            traits: {},
            skipImmediateOnPlacement: false,
          },
          sourceData: {
            test: {},
          },
          computed: false,
        },
        sort: 0,
        start: null,
        showIcon: 1,
        folder: null,
      },
      {
        statuses: [`ablaze`],
        name: `Ablaze (Minor)`,
        flags: {
          impmal: {
            type: `minor`,
            manualEffectKeys: false,
          },
        },
        duration: {
          value: null,
          units: `seconds`,
          expiry: null,
          expired: false,
        },
        origin: null,
        _id: `nmLvasngUzLgYCvC`,
        disabled: false,
        description: ``,
        transfer: true,
        tint: `#ffffff`,
        _stats: {
          coreVersion: `14.364`,
          systemId: `impmal`,
          systemVersion: `4.1.0`,
          createdTime: 1786138101029,
          modifiedTime: 1786138101029,
          lastModifiedBy: `79TGpaW8JtXdSDiv`,
          compendiumSource: null,
          duplicateSource: null,
          exportSource: null,
        },
        img: `systems/impmal/assets/icons/conditions/ablaze-minor.svg`,
        type: `base`,
        system: {
          transferData: {
            type: `target`,
            documentType: `Actor`,
            avoidTest: {
              value: `none`,
              opposed: false,
              prevention: true,
              reversed: false,
              skill: {},
            },
            prompt: false,
            zone: {
              type: `zone`,
              transferred: false,
              traits: {
                barrier: false,
                difficult: false,
                warpTouched: false,
              },
              skipImmediateOnPlacement: false,
              keep: false,
            },
            originalType: `document`,
            testIndependent: false,
            equipTransfer: false,
            selfOnly: false,
            area: {
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
              aura: {
                transferred: false,
                render: false,
                visibility: 0,
              },
              duration: `sustained`,
            },
          },
          scriptData: [
            {
              label: `Damage`,
              trigger: `startTurn`,
              script: `[Script.RUyELC7eSSXomvB8]`,
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
          changes: [],
          itemTargetData: {
            ids: [],
            allItems: false,
          },
          zone: {
            type: `zone`,
            traits: {},
            skipImmediateOnPlacement: false,
          },
          sourceData: {
            test: {},
          },
          computed: false,
        },
        sort: 0,
        showIcon: 2,
        start: null,
        folder: null,
      },
    ],
    flags: {},
    _stats: {
      systemId: `impmal`,
      systemVersion: `4.1.0`,
      coreVersion: `14.364`,
      createdTime: 1786138101029,
      modifiedTime: 1786138101029,
      lastModifiedBy: `79TGpaW8JtXdSDiv`,
      compendiumSource: `Compendium.impmal-core.items.Item.JU4aGpoaxZLY7eIO`,
      duplicateSource: null,
      exportSource: {
        worldId: `hive-arcos`,
        uuid: `Item.JU4aGpoaxZLY7eIO`,
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

export function wep_sword(equipped: boolean) {
  return {
    name: `Sword`,
    type: `weapon`,
    system: {
      notes: {
        player: ``,
        gm: ``,
      },
      encumbrance: {
        value: 1,
      },
      cost: 150,
      availability: `common`,
      quantity: 1,
      equipped: {
        value: equipped,
        force: false,
      },
      damage: {
        base: `2`,
        characteristic: `str`,
        SL: false,
        ignoreAP: false,
      },
      traits: {
        list: [],
      },
      ammoCost: 0,
      attackType: `melee`,
      category: `mundane`,
      spec: `oneHanded`,
      range: ``,
      rangeModifier: {
        value: 0,
        override: ``,
      },
      mag: {
        value: 0,
        current: null,
      },
      ammo: {
        id: ``,
      },
      mods: {
        list: [],
      },
      test: {
        self: false,
        skill: {},
      },
      skillOverride: {},
      slots: {
        list: [],
        value: 0,
      },
    },
    folder: `Eic6vQH0ZQYinOav`,
    _id: makeid(),
    img: `modules/impmal-core/assets/icons/weapons/melee-weapon.webp`,
    effects: [],
    flags: {},
    _stats: {
      systemId: `impmal`,
      systemVersion: `4.1.0`,
      coreVersion: `14.364`,
      createdTime: 1786138329864,
      modifiedTime: 1786138329864,
      lastModifiedBy: `79TGpaW8JtXdSDiv`,
      compendiumSource: `Compendium.impmal-core.items.Item.bS4Uy21y8pkp7I7P`,
      duplicateSource: null,
      exportSource: {
        worldId: `hive-arcos`,
        uuid: `Item.bS4Uy21y8pkp7I7P`,
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

export function wep_boltgun(equipped: boolean) {
  return {
    name: `Boltgun`,
    type: `weapon`,
    system: {
      notes: {
        player: ``,
        gm: ``,
      },
      encumbrance: {
        value: 3,
      },
      cost: 5000,
      availability: `rare`,
      quantity: 1,
      equipped: {
        value: equipped,
        force: false,
      },
      damage: {
        base: `8`,
        characteristic: ``,
        SL: false,
        ignoreAP: false,
      },
      traits: {
        list: [
          {
            key: `loud`,
          },
          {
            key: `penetrating`,
            value: `4`,
          },
          {
            key: `rapidFire`,
            value: `2`,
          },
          {
            key: `spread`,
          },
          {
            key: `twohanded`,
          },
        ],
      },
      ammoCost: 500,
      attackType: `ranged`,
      category: `bolt`,
      spec: `longGun`,
      range: `long`,
      rangeModifier: {
        value: 0,
        override: ``,
      },
      mag: {
        value: 4,
        current: 4,
      },
      ammo: {
        id: ``,
      },
      mods: {
        list: [],
      },
      test: {
        self: false,
        skill: {},
      },
      skillOverride: {},
      slots: {
        list: [],
        value: 0,
      },
    },
    folder: `Eic6vQH0ZQYinOav`,
    _id: makeid(),
    img: `modules/impmal-core/assets/icons/weapons/boltgun.webp`,
    effects: [],
    flags: {},
    _stats: {
      systemId: `impmal`,
      systemVersion: `4.1.0`,
      coreVersion: `14.364`,
      createdTime: 1786449728673,
      modifiedTime: 1786449728673,
      lastModifiedBy: `79TGpaW8JtXdSDiv`,
      compendiumSource: `Compendium.impmal-core.items.Item.Vh51HJbH7SyCyudv`,
      duplicateSource: null,
      exportSource: {
        worldId: `hive-arcos`,
        uuid: `Item.Vh51HJbH7SyCyudv`,
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

export function wep_heavyBolter(equipped: boolean) {
  return {
    name: `Heavy Bolter`,
    type: `weapon`,
    system: {
      notes: {
        player: ``,
        gm: ``,
      },
      encumbrance: {
        value: 4,
      },
      cost: 9000,
      availability: `rare`,
      quantity: 1,
      equipped: {
        value: equipped,
        force: false,
      },
      damage: {
        base: `10`,
        characteristic: ``,
        SL: false,
        ignoreAP: false,
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
          {
            key: `penetrating`,
            value: `5`,
          },
          {
            key: `rapidFire`,
            value: `3`,
          },
          {
            key: `spread`,
          },
          {
            key: `twohanded`,
          },
        ],
      },
      ammoCost: 900,
      attackType: `ranged`,
      category: `bolt`,
      spec: `ordnance`,
      range: `long`,
      rangeModifier: {
        value: 0,
        override: ``,
      },
      mag: {
        value: 6,
        current: 6,
      },
      ammo: {
        id: ``,
      },
      mods: {
        list: [],
      },
      test: {
        self: false,
        skill: {},
      },
      skillOverride: {},
      slots: {
        list: [],
        value: 0,
      },
    },
    folder: `Eic6vQH0ZQYinOav`,
    _id: makeid(),
    img: `modules/impmal-core/assets/icons/weapons/heavy-bolter.webp`,
    effects: [],
    flags: {},
    _stats: {
      systemId: `impmal`,
      systemVersion: `4.1.0`,
      coreVersion: `14.364`,
      createdTime: 1786369125356,
      modifiedTime: 1786369125356,
      lastModifiedBy: `79TGpaW8JtXdSDiv`,
      compendiumSource: `Compendium.impmal-core.items.Item.rMIaVi1gx3wUghfU`,
      duplicateSource: null,
      exportSource: {
        worldId: `hive-arcos`,
        uuid: `Item.rMIaVi1gx3wUghfU`,
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

export function wep_chainsword(equipped: boolean) {
  return {
    name: `Chainsword`,
    type: `weapon`,
    system: {
      notes: {
        player: ``,
        gm: ``,
      },
      encumbrance: {
        value: 1,
      },
      cost: 500,
      availability: `scarce`,
      quantity: 1,
      equipped: {
        value: equipped,
        force: false,
      },
      damage: {
        base: `3`,
        characteristic: `str`,
        SL: false,
        ignoreAP: false,
      },
      traits: {
        list: [
          {
            key: `loud`,
          },
          {
            key: `rend`,
            value: `2`,
          },
        ],
      },
      ammoCost: 0,
      attackType: `melee`,
      category: `chain`,
      spec: `oneHanded`,
      range: ``,
      rangeModifier: {
        value: 0,
        override: ``,
      },
      mag: {
        value: 0,
        current: null,
      },
      ammo: {
        id: ``,
      },
      mods: {
        list: [],
      },
      test: {
        self: false,
        skill: {},
      },
      skillOverride: {},
      slots: {
        list: [],
        value: 0,
      },
    },
    folder: `Eic6vQH0ZQYinOav`,
    _id: makeid(),
    img: `modules/impmal-core/assets/icons/weapons/chainsword.webp`,
    effects: [],
    flags: {},
    _stats: {
      systemId: `impmal`,
      systemVersion: `4.1.0`,
      coreVersion: `14.364`,
      createdTime: 1786369222463,
      modifiedTime: 1786369222463,
      lastModifiedBy: `79TGpaW8JtXdSDiv`,
      compendiumSource: `Compendium.impmal-core.items.Item.tjUKnuDKTCCon28r`,
      duplicateSource: null,
      exportSource: {
        worldId: `hive-arcos`,
        uuid: `Item.tjUKnuDKTCCon28r`,
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

export function wep_shotgun(equipped: boolean) {
  return {
    name: `Shotgun (Pump Action)`,
    type: `weapon`,
    system: {
      notes: {
        player: ``,
        gm: ``,
      },
      encumbrance: {
        value: 1,
      },
      cost: 400,
      availability: `common`,
      quantity: 1,
      equipped: {
        value: equipped,
        force: false,
      },
      damage: {
        base: `6`,
        characteristic: ``,
        SL: false,
        ignoreAP: false,
      },
      traits: {
        list: [
          {
            key: `inflict`,
            value: `Prone`,
          },
          {
            key: `loud`,
          },
          {
            key: `spread`,
          },
          {
            key: `twohanded`,
          },
        ],
      },
      ammoCost: 10,
      attackType: `ranged`,
      category: `solid`,
      spec: `longGun`,
      range: `medium`,
      rangeModifier: {
        value: 0,
        override: ``,
      },
      mag: {
        value: 8,
        current: 8,
      },
      ammo: {
        id: ``,
      },
      mods: {
        list: [],
      },
      test: {
        self: false,
        skill: {},
      },
      skillOverride: {},
      slots: {
        list: [],
        value: 0,
      },
    },
    folder: `Eic6vQH0ZQYinOav`,
    _id: makeid(),
    img: `modules/impmal-core/assets/icons/weapons/pump-action-shotgun.webp`,
    effects: [],
    flags: {},
    _stats: {
      systemId: `impmal`,
      systemVersion: `4.1.0`,
      coreVersion: `14.364`,
      createdTime: 1786369582419,
      modifiedTime: 1786369582419,
      lastModifiedBy: `79TGpaW8JtXdSDiv`,
      compendiumSource: `Compendium.impmal-core.items.Item.NLKRLMgcYzandwsL`,
      duplicateSource: null,
      exportSource: {
        worldId: `hive-arcos`,
        uuid: `Item.NLKRLMgcYzandwsL`,
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

export function wep_powerFist(equipped: boolean) {
  return {
    name: `Power Fist`,
    type: `weapon`,
    system: {
      notes: {
        player: ``,
        gm: ``,
      },
      encumbrance: {
        value: 2,
      },
      cost: 4000,
      availability: `rare`,
      quantity: 1,
      equipped: {
        value: equipped,
        force: false,
      },
      damage: {
        base: `6`,
        characteristic: `str`,
        SL: false,
        ignoreAP: false,
      },
      traits: {
        list: [
          {
            key: `heavy`,
            value: `4`,
          },
          {
            key: `penetrating`,
            value: `6`,
          },
        ],
      },
      ammoCost: 0,
      attackType: `melee`,
      category: `power`,
      spec: `brawling`,
      range: ``,
      rangeModifier: {
        value: 0,
        override: ``,
      },
      mag: {
        value: 0,
        current: null,
      },
      ammo: {
        id: ``,
      },
      mods: {
        list: [],
      },
      test: {
        self: false,
        skill: {},
      },
      skillOverride: {},
      slots: {
        list: [],
        value: 0,
      },
    },
    folder: `Eic6vQH0ZQYinOav`,
    _id: makeid(),
    img: `modules/impmal-core/assets/icons/weapons/power-fist.webp`,
    effects: [],
    flags: {},
    _stats: {
      systemId: `impmal`,
      systemVersion: `4.1.0`,
      coreVersion: `14.364`,
      createdTime: 1786369831771,
      modifiedTime: 1786369831771,
      lastModifiedBy: `79TGpaW8JtXdSDiv`,
      compendiumSource: `Compendium.impmal-core.items.Item.Tm38HWpxtnkcrmKl`,
      duplicateSource: null,
      exportSource: {
        worldId: `hive-arcos`,
        uuid: `Item.Tm38HWpxtnkcrmKl`,
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

export function wep_flamer(equipped: boolean) {
  return {
    name: `Flamer`,
    type: `weapon`,
    system: {
      notes: {
        player: ``,
        gm: ``,
      },
      encumbrance: {
        value: 2,
      },
      cost: 1000,
      availability: `scarce`,
      quantity: 1,
      equipped: {
        value: equipped,
        force: false,
      },
      damage: {
        base: `8`,
        characteristic: ``,
        SL: false,
        ignoreAP: false,
      },
      traits: {
        list: [
          {
            key: `flamer`,
          },
          {
            key: `inflict`,
            value: `Ablaze`,
          },
          {
            key: `loud`,
          },
          {
            key: `twohanded`,
          },
        ],
      },
      ammoCost: 50,
      attackType: `ranged`,
      category: `flame`,
      spec: `longGun`,
      range: `medium`,
      rangeModifier: {
        value: 0,
        override: ``,
      },
      mag: {
        value: 4,
        current: 4,
      },
      ammo: {
        id: ``,
      },
      mods: {
        list: [],
      },
      test: {
        self: false,
        skill: {},
      },
      skillOverride: {},
      slots: {
        list: [],
        value: 0,
      },
    },
    folder: `Eic6vQH0ZQYinOav`,
    _id: makeid(),
    img: `modules/impmal-core/assets/icons/weapons/flamer.webp`,
    effects: [],
    flags: {},
    _stats: {
      systemId: `impmal`,
      systemVersion: `4.1.0`,
      coreVersion: `14.364`,
      createdTime: 1786450036291,
      modifiedTime: 1786450036291,
      lastModifiedBy: `79TGpaW8JtXdSDiv`,
      compendiumSource: `Compendium.impmal-core.items.Item.blRx8XLXQaD9sjDz`,
      duplicateSource: null,
      exportSource: {
        worldId: `hive-arcos`,
        uuid: `Item.blRx8XLXQaD9sjDz`,
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

export function wep_needlePistol(equipped: boolean) {
  return {
    name: `Needle Pistol`,
    type: `weapon`,
    system: {
      notes: {
        player: ``,
        gm: ``,
      },
      encumbrance: {
        value: 1,
      },
      cost: 1500,
      availability: `exotic`,
      quantity: 1,
      equipped: {
        value: equipped,
        force: false,
      },
      damage: {
        base: `1`,
        characteristic: ``,
        SL: false,
        ignoreAP: false,
      },
      traits: {
        list: [
          {
            key: `close`,
          },
          {
            key: `inflict`,
            value: `Poisoned`,
          },
          {
            key: `penetrating`,
            value: `6`,
          },
          {
            key: `subtle`,
          },
        ],
      },
      ammoCost: 200,
      attackType: `ranged`,
      category: `specialised`,
      spec: `pistol`,
      range: `medium`,
      rangeModifier: {
        value: 0,
        override: ``,
      },
      mag: {
        value: 4,
        current: 4,
      },
      ammo: {
        id: ``,
      },
      mods: {
        list: [],
      },
      test: {
        self: false,
        skill: {},
      },
      skillOverride: {},
      slots: {
        list: [],
        value: 0,
      },
    },
    folder: `Eic6vQH0ZQYinOav`,
    _id: makeid(),
    img: `modules/impmal-core/assets/icons/weapons/needle-pistol.webp`,
    effects: [],
    flags: {},
    _stats: {
      systemId: `impmal`,
      systemVersion: `4.1.0`,
      coreVersion: `14.364`,
      createdTime: 1786450135670,
      modifiedTime: 1786450135670,
      lastModifiedBy: `79TGpaW8JtXdSDiv`,
      compendiumSource: `Compendium.impmal-core.items.Item.DEguAzj8uwUgVTs8`,
      duplicateSource: null,
      exportSource: {
        worldId: `hive-arcos`,
        uuid: `Item.DEguAzj8uwUgVTs8`,
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

export function wep_shockMaul(equipped: boolean) {
  return {
    name: `Shock Maul`,
    type: `weapon`,
    system: {
      notes: {
        player: ``,
        gm: ``,
      },
      encumbrance: {
        value: 1,
      },
      cost: 250,
      availability: `scarce`,
      quantity: 1,
      equipped: {
        value: equipped,
        force: false,
      },
      damage: {
        base: `2`,
        characteristic: `str`,
        SL: false,
        ignoreAP: false,
      },
      traits: {
        list: [
          {
            key: `loud`,
          },
          {
            key: `inflict`,
            value: `Stunned`,
          },
        ],
      },
      ammoCost: 0,
      attackType: `melee`,
      category: `shock`,
      spec: `oneHanded`,
      range: ``,
      rangeModifier: {
        value: 0,
        override: ``,
      },
      mag: {
        value: 0,
        current: null,
      },
      ammo: {
        id: ``,
      },
      mods: {
        list: [],
      },
      test: {
        self: false,
        skill: {},
      },
      skillOverride: {},
      slots: {
        list: [],
        value: 0,
      },
    },
    folder: `Eic6vQH0ZQYinOav`,
    _id: makeid(),
    img: `modules/impmal-core/assets/icons/weapons/shock-maul.webp`,
    effects: [],
    flags: {},
    _stats: {
      systemId: `impmal`,
      systemVersion: `4.1.0`,
      coreVersion: `14.364`,
      createdTime: 1786450226293,
      modifiedTime: 1786450226293,
      lastModifiedBy: `79TGpaW8JtXdSDiv`,
      compendiumSource: `Compendium.impmal-core.items.Item.DSKAdYMPRHvadLZz`,
      duplicateSource: null,
      exportSource: {
        worldId: `hive-arcos`,
        uuid: `Item.DSKAdYMPRHvadLZz`,
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

export function wep_laspistol(equipped: boolean) {
  return {
    name: `Laspistol`,
    type: `weapon`,
    system: {
      notes: {
        player: ``,
        gm: ``,
      },
      encumbrance: {
        value: 0,
      },
      cost: 400,
      availability: `common`,
      quantity: 1,
      equipped: {
        value: equipped,
        force: false,
      },
      damage: {
        base: `5`,
        characteristic: ``,
        SL: false,
        ignoreAP: false,
      },
      traits: {
        list: [
          {
            key: `burst`,
          },
          {
            key: `close`,
          },
          {
            key: `loud`,
          },
          {
            key: `reliable`,
          },
        ],
      },
      ammoCost: 100,
      attackType: `ranged`,
      category: `las`,
      spec: `pistol`,
      range: `medium`,
      rangeModifier: {
        value: 0,
        override: ``,
      },
      mag: {
        value: 4,
        current: 4,
      },
      ammo: {
        id: ``,
      },
      mods: {
        list: [],
      },
      test: {
        self: false,
        skill: {},
      },
      skillOverride: {},
      slots: {
        list: [],
        value: 0,
      },
    },
    folder: `Eic6vQH0ZQYinOav`,
    _id: makeid(),
    img: `modules/impmal-core/assets/icons/weapons/laspistol.webp`,
    effects: [],
    flags: {},
    _stats: {
      systemId: `impmal`,
      systemVersion: `4.1.0`,
      coreVersion: `14.364`,
      createdTime: 1786450869218,
      modifiedTime: 1786450869218,
      lastModifiedBy: `79TGpaW8JtXdSDiv`,
      compendiumSource: `Compendium.impmal-core.items.Item.jNxvsLBybPPenmmn`,
      duplicateSource: null,
      exportSource: {
        worldId: `hive-arcos`,
        uuid: `Item.jNxvsLBybPPenmmn`,
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

export function wep_plasmaPistol(equipped: boolean) {
  return {
    name: `Plasma Pistol`,
    type: `weapon`,
    system: {
      notes: {
        player: ``,
        gm: ``,
      },
      encumbrance: {
        value: 1,
      },
      cost: 7000,
      availability: `rare`,
      quantity: 1,
      equipped: {
        value: equipped,
        force: false,
      },
      damage: {
        base: `10`,
        characteristic: ``,
        SL: false,
        ignoreAP: false,
      },
      traits: {
        list: [
          {
            key: `close`,
          },
          {
            key: `loud`,
          },
          {
            key: `penetrating`,
            value: `6`,
          },
          {
            key: `supercharge`,
            value: `4`,
          },
          {
            key: `unstable`,
          },
        ],
      },
      ammoCost: 500,
      attackType: `ranged`,
      category: `plasma`,
      spec: `pistol`,
      range: `medium`,
      rangeModifier: {
        value: 0,
        override: ``,
      },
      mag: {
        value: 6,
        current: 6,
      },
      ammo: {
        id: ``,
      },
      mods: {
        list: [],
      },
      test: {
        self: false,
        skill: {},
      },
      skillOverride: {},
      slots: {
        list: [],
        value: 0,
      },
    },
    folder: `Eic6vQH0ZQYinOav`,
    _id: makeid(),
    img: `modules/impmal-core/assets/icons/weapons/plasma-pistol.webp`,
    effects: [],
    flags: {},
    _stats: {
      systemId: `impmal`,
      systemVersion: `4.1.0`,
      coreVersion: `14.364`,
      createdTime: 1786451679570,
      modifiedTime: 1786451679570,
      lastModifiedBy: `79TGpaW8JtXdSDiv`,
      compendiumSource: `Compendium.impmal-core.items.Item.gS119ICqR5yR5RCy`,
      duplicateSource: null,
      exportSource: {
        worldId: `hive-arcos`,
        uuid: `Item.gS119ICqR5yR5RCy`,
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

export function wep_clawsAndTalons(equipped: boolean) {
  return {
    name: `Claws and Talons`,
    type: `trait`,
    system: {
      notes: {
        player: ``,
        gm: ``,
      },
      attack: {
        type: `melee`,
        characteristic: ``,
        skill: {
          key: `melee`,
          specialisation: `Brawling`,
        },
        damage: {
          SL: true,
          base: `0`,
          characteristic: `str`,
          ignoreAP: false,
        },
        range: ``,
        traits: {
          list: [
            {
              key: `penetrating`,
              value: `2`,
            },
            {
              key: `rend`,
              value: `2`,
            },
          ],
        },
        self: false,
      },
      test: {
        difficulty: `challenging`,
        characteristic: ``,
        skill: {
          key: ``,
          specialisation: ``,
        },
        self: false,
      },
      roll: {
        enabled: false,
        formula: ``,
        label: ``,
      },
      category: `standard`,
      vehicle: {
        maneuverable: 0,
      },
    },
    _id: makeid(),
    img: `modules/impmal-core/assets/icons/weapons/trait.webp`,
    effects: [],
    folder: null,
    sort: 0,
    flags: {},
    _stats: {
      systemId: `impmal`,
      systemVersion: `4.1.0`,
      coreVersion: `14.364`,
      createdTime: 1786894155573,
      modifiedTime: 1786894155573,
      lastModifiedBy: `79TGpaW8JtXdSDiv`,
      compendiumSource: null,
      duplicateSource: null,
      exportSource: null,
    },
    ownership: {
      default: 0,
    },
  };
}
