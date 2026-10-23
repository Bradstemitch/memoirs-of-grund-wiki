import { makeid } from '../../../creatures/_BUILDERS/_Constants';

export function dnd5e_arm_shield(equipped: boolean) {
  return {
    _id: makeid(),
    name: `Shield`,
    type: `equipment`,
    img: `icons/equipment/shield/round-wooden-boss-steel-brown.webp`,
    system: {
      description: {
        value:
          `<p>A shield is made from wood or metal and is carried in one hand. Wielding a shield increases your Armor Class by 2. You can benefit from only one shield at a time.</p>`,
        chat: ``,
      },
      source: {
        custom: ``,
        book: `SRD 5.1`,
        page: ``,
        license: `CC-BY-4.0`,
      },
      quantity: 1,
      weight: {
        value: 6,
        units: `lb`,
      },
      price: {
        value: 10,
        denomination: `gp`,
      },
      attunement: ``,
      rarity: ``,
      identified: true,
      activation: {
        type: ``,
        cost: null,
        condition: ``,
      },
      duration: {
        value: ``,
        units: ``,
      },
      cover: null,
      crewed: false,
      target: {
        value: ``,
        width: null,
        units: ``,
        type: ``,
        prompt: true,
      },
      range: {
        value: null,
        long: null,
        units: ``,
      },
      uses: {
        value: null,
        max: ``,
        per: null,
        recovery: ``,
        prompt: true,
      },
      consume: {
        type: ``,
        target: null,
        amount: null,
        scale: false,
      },
      ability: null,
      actionType: ``,
      chatFlavor: ``,
      critical: {
        threshold: null,
        damage: ``,
      },
      damage: {
        parts: [],
        versatile: ``,
      },
      formula: ``,
      save: {
        ability: ``,
        dc: null,
        scaling: `spell`,
      },
      armor: {
        value: 2,
        dex: null,
        magicalBonus: null,
      },
      hp: {
        value: 0,
        max: 0,
        dt: null,
        conditions: ``,
      },
      speed: {
        value: null,
        conditions: ``,
      },
      strength: null,
      type: {
        value: `shield`,
        baseItem: `shield`,
      },
      unidentified: {
        description: ``,
      },
      container: null,
      properties: [],
      attack: {
        bonus: ``,
        flat: false,
      },
      summons: null,
      enchantment: null,
      attuned: false,
      equipped: equipped,
      proficient: null,
    },
    effects: [],
    folder: `JqTP017wj3uxDJ8g`,
    sort: 0,
    ownership: {
      default: 0,
      Tu6NIikbqtsNemQh: 3,
    },
    flags: {},
    _stats: {
      compendiumSource: `Compendium.dnd5e.items.Item.sSs3hSzkKBMNBgTs`,
      duplicateSource: null,
      coreVersion: `12.330`,
      systemId: `dnd5e`,
      systemVersion: `3.3.1`,
      createdTime: null,
      modifiedTime: null,
      lastModifiedBy: null,
    },
  };
}
