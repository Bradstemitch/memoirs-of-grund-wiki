type characteristics = Record<string, any>;

export const ImpMalNPCAttributes: characteristics = {
  //     WS  BS  Str Tgh AG  Int Per Wil Fel     Wounds      Resolve     Fate    Size    Rank
  necromunda: {
    ganger: [30, 30, 40, 40, 30, 25, 30, 30, 25, 14, 2, 0, `medium`], //Done (Astra Militarum Trooper)
  },
  cawdor: {
    // "bonepicker":               [   35, 35, 35, 30, 45, 25, 30, 25, 25,  0,      9,         0,      4      ],  //Done (Thug Template)
    brethren: [30, 30, 40, 40, 30, 25, 30, 30, 25, 14, 2, 0, `medium`], //Done (Astra Militarum Trooper)
    firebrand: [45, 55, 45, 45, 45, 40, 50, 50, 45, 0, 24, 2, 4], //Done (Rogue Trader Template)
    'word-keeper': [35, 35, 30, 40, 35, 25, 30, 35, 25, 0, 11, 0, 4],
  },
  'cawdor redemptionist': {
    // "zealot":                   [   45, 35, 35, 30, 45, 25, 25, 25, 20,  0,      9,         0,      4      ],  //Done (Thug Template)
    brethren: [30, 30, 40, 40, 30, 25, 30, 30, 25, 15, 2, 0, `medium`], //Done (Astra Militarum Trooper)
    redemptor: [45, 55, 45, 45, 45, 40, 50, 50, 45, 0, 24, 2, 4], //Done (Rogue Trader Template)
    'word-keeper': [35, 35, 30, 40, 35, 25, 30, 35, 25, 0, 11, 0, 4],
  },
  delaque: {
    // "shadow":                   [   35, 35, 35, 30, 45, 25, 30, 25, 25,  0,      9,         0,      4      ],  //Done (Thug Template)
    ghost: [30, 30, 40, 40, 30, 25, 30, 30, 25, 14, 2, 0, `medium`], //Done (Astra Militarum Trooper)
    'nacht-ghul': [35, 35, 30, 40, 35, 25, 40, 25, 25, 0, 11, 0, 4],
    phantom: [55, 55, 35, 45, 45, 40, 50, 50, 45, 0, 22, 2, 4], //Done (Rogue Trader Template)
    master: [35, 35, 30, 40, 35, 25, 40, 25, 25, 0, 11, 0, 4],
  },
  escher: {
    // "little sister":            [   45, 35, 35, 30, 35, 25, 30, 25, 25,  0,      9,         0,      4      ],  //Done (Thug Template)
    sister: [30, 30, 40, 40, 30, 25, 30, 30, 25, 15, 2, 0, `medium`], //Done (Astra Militarum Trooper)
    matriarch: [55, 55, 35, 45, 45, 40, 50, 50, 45, 0, 22, 1, 4], //Done (Rogue Trader Template)
    'death maiden': [70, 70, 45, 45, 58, 30, 50, 50, 25, 10, 24, 2, 4], //Done (Eversor Template)
    queen: [55, 55, 35, 45, 45, 40, 50, 50, 45, 60, 36, 2, 4], //Done (Rogue Trader Template)
  },
  goliath: {
    // "bully":                    [   45, 35, 45, 40, 25, 25, 20, 25, 25,  0,     12,         0,      4      ],  //Done (Thug Template)
    bruiser: [30, 30, 40, 40, 30, 25, 30, 30, 25, 14, 2, 0, `medium`], //Done (Astra Militarum Trooper)
    'forge boss': [55, 45, 45, 55, 35, 50, 50, 50, 45, 0, 28, 1, 4], //Done (Rogue Trader Template)
    stimmer: [65, 45, 45, 55, 35, 50, 50, 50, 45, 0, 28, 1, 4], //Done (Rogue Trader Template)
    'forge tyrant': [55, 35, 40, 50, 25, 25, 30, 35, 25, 0, 19, 0, 4],
  },
  orlock: {
    // "greenhorn":                [   25, 25, 40, 40, 40, 25, 30, 30, 25,         9,          2,      0,      `medium`     ],  //Done (Thug Template)
    gunner: [30, 30, 40, 40, 30, 25, 30, 30, 25, 14, 2, 0, `medium`], //Done (Astra Militarum Trooper)
    'road sergeant': [45, 55, 45, 45, 45, 40, 50, 50, 45, 0, 24, 1, 4], //Done (Rogue Trader Template)
    'arms master': [55, 55, 35, 45, 45, 40, 50, 50, 45, 0, 22, 1, 4], //Done (Rogue Trader Template)
    'road captain': [55, 55, 35, 45, 45, 40, 50, 50, 45, 0, 33, 2, 4], //Done (Rogue Trader Template)
  },
  'van saar': {
    // "subtek":                   [   25, 30, 40, 40, 30, 35, 30, 25, 25,     13,         2,          0,      `medium`      ],  //Done (Thug Template)
    tek: [30, 30, 40, 40, 30, 25, 30, 30, 25, 14, 2, 0, `medium`], //Done (Astra Militarum Trooper)
    archeotek: [35, 55, 30, 40, 25, 35, 30, 45, 25, 0, 11, 0, 4],
    augmek: [45, 65, 35, 45, 35, 50, 50, 50, 45, 0, 22, 1, 4], //Done (Rogue Trader Template)
    prime: [35, 55, 30, 40, 25, 35, 30, 45, 25, 0, 11, 0, 4],
  },
  'corpse grinder cults': {
    initiate: [45, 45, 35, 30, 35, 20, 30, 25, 20, 0, 9, 0, 4], //Done (Thug Template)
    skinner: [55, 35, 30, 40, 35, 25, 45, 35, 35, 0, 14, 0, 4],
    cutter: [55, 35, 55, 45, 45, 40, 50, 50, 45, 0, 30, 1, 4], //Done (Arco-Flagellant)
    butcher: [65, 55, 55, 55, 45, 40, 50, 50, 45, 0, 33, 2, 4],
  },
  'bounty hunter': {
    'harvest lord': [65, 15, 45, 55, 45, 35, 30, 65, 35, 25, 40, 2, 4], //Done (Herald of Khorne)
    'kal jerico': [35, 45, 40, 40, 40, 35, 45, 30, 35, 0, 17, 0, 4],
  },
  'blood pact': {
    trooper: [40, 40, 50, 50, 40, 30, 40, 30, 30, 18, 3, 0, `medium`], //Done (Astra Militarum Trooper)
  },
  brute: {
    ambot: [55, 35, 55, 55, 25, 25, 25, 25, 5, 0, 30, 0, 5], //Done (Wraithguard Template)
  },
  ork: {
    gretchin: [15, 35, 15, 15, 35, 35, 35, 20, 25, 0, 7, 0, 3],
    boy: [50, 25, 45, 55, 30, 25, 30, 30, 25, 0, 19, 0, 4],
    nob: [55, 25, 50, 65, 35, 30, 30, 35, 35, 0, 35, 0, 5],
  },
  astartes: {
    astartes: [55, 55, 65, 45, 40, 40, 40, 45, 40, 45, 26, 3, 5],
    terminator: [55, 55, 75, 45, 20, 40, 40, 45, 40, 55, 26, 3, 5],
  },
  tyranid: {
    genestealer: [60, 10, 50, 60, 60, 10, 30, 30, 10, 20, 3, 0, `medium`], //Done (Purestrain Genestealer)
  },
};
export default ImpMalNPCAttributes;
