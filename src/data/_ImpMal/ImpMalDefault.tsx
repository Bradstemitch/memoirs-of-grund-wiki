export const ImpMalNPCStats = {
  system: {
    characteristics: {
      ws: {
        starting: 0,
        advances: 0,
        modifier: 0,
      },
      bs: {
        starting: 0,
        advances: 0,
        modifier: 0,
      },
      str: {
        starting: 0,
        advances: 0,
        modifier: 0,
      },
      tgh: {
        starting: 0,
        advances: 0,
        modifier: 0,
      },
      ag: {
        starting: 0,
        advances: 0,
        modifier: 0,
      },
      int: {
        starting: 0,
        advances: 0,
        modifier: 0,
      },
      per: {
        starting: 0,
        advances: 0,
        modifier: 0,
      },
      wil: {
        starting: 0,
        advances: 0,
        modifier: 0,
      },
      fel: {
        starting: 0,
        advances: 0,
        modifier: 0,
      },
    },
    skills: {
      athletics: {
        characteristic: `str`,
        advances: 0,
        modifier: 0,
      },
      awareness: {
        characteristic: `per`,
        advances: 0,
        modifier: 0,
      },
      dexterity: {
        characteristic: `ag`,
        advances: 0,
        modifier: 0,
      },
      discipline: {
        characteristic: `wil`,
        advances: 0,
        modifier: 0,
      },
      fortitude: {
        characteristic: `tgh`,
        advances: 0,
        modifier: 0,
      },
      intuition: {
        characteristic: `per`,
        advances: 0,
        modifier: 0,
      },
      linguistics: {
        characteristic: `int`,
        advances: 0,
        modifier: 0,
      },
      logic: {
        characteristic: `int`,
        advances: 0,
        modifier: 0,
      },
      lore: {
        characteristic: `int`,
        advances: 0,
        modifier: 0,
      },
      medicae: {
        characteristic: `int`,
        advances: 0,
        modifier: 0,
      },
      melee: {
        characteristic: `ws`,
        advances: 0,
        modifier: 0,
      },
      navigation: {
        characteristic: `int`,
        advances: 0,
        modifier: 0,
      },
      piloting: {
        characteristic: `ag`,
        advances: 0,
        modifier: 0,
      },
      presence: {
        characteristic: `wil`,
        advances: 0,
        modifier: 0,
      },
      psychic: {
        characteristic: `wil`,
        advances: 0,
        modifier: 0,
      },
      ranged: {
        characteristic: `bs`,
        advances: 0,
        modifier: 0,
      },
      rapport: {
        characteristic: `fel`,
        advances: 0,
        modifier: 0,
      },
      reflexes: {
        characteristic: `ag`,
        advances: 0,
        modifier: 0,
      },
      stealth: {
        characteristic: `ag`,
        advances: 0,
        modifier: 0,
      },
      tech: {
        characteristic: `int`,
        advances: 0,
        modifier: 0,
      },
    },
    notes: {},
    combat: {
      size: `medium`,
      armourModifier: 0,
      speed: {
        land: {
          value: `normal`,
          modifier: 0,
        },
        fly: {
          value: `none`,
          modifier: 0,
        },
      },
      wounds: {
        max: 0,
        value: 0,
      },
      criticals: {
        max: 0,
        value: 0,
      },
      hitLocations: {
        head: {
          range: [1, 1],
          label: `IMPMAL.Head`,
          abbrev: `IMPMAL.HeadAbbrev`,
        },
        leftArm: {
          range: [2, 2],
          label: `IMPMAL.LeftArm`,
          abbrev: `IMPMAL.LeftArmAbbrev`,
        },
        rightArm: {
          range: [3, 3],
          label: `IMPMAL.RightArm`,
          abbrev: `IMPMAL.RightArmAbbrev`,
        },
        leftLeg: {
          range: [4, 4],
          label: `IMPMAL.LeftLeg`,
          abbrev: `IMPMAL.LeftLegAbbrev`,
        },
        rightLeg: {
          range: [5, 5],
          label: `IMPMAL.RightLeg`,
          abbrev: `IMPMAL.RightLegAbbrev`,
        },
        body: {
          range: [6, 10],
          label: `IMPMAL.Body`,
          abbrev: `IMPMAL.BodyAbbrev`,
        },
      },
      resolve: 1,
      armour: {
        formula: ``,
        value: 0,
        useItems: true,
      },
      initiative: 0,
    },
    faction: {
      id: `oa5nKvqMjOoHsBcK`,
      name: `Infractionist`,
    },
    species: `Human`,
    role: `troop`,
    warp: {
      charge: 0,
      state: 0,
      sustaining: {
        list: [],
      },
    },
    autoCalc: {
      wounds: true,
      criticals: true,
      initiative: true,
    },
  },
};
