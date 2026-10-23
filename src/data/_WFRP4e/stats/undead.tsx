type characteristics = Record<string, any>;

export const aberrationStatsWFRP4e: characteristics = {
  //   WS  BS  S   T   I   AG  Dex Int WP  Fel     Wounds  Move    Fate    Size    Rank
  undead: {
    zombie: [15, 0, 30, 30, 5, 10, 15, 0, 0, 0, 12, 4, 0, 4],
    skeleton: [25, 25, 30, 30, 20, 20, 25, 0, 0, 0, 12, 4, 0, 4],
    spectre: [30, 0, 30, 30, 10, 30, 20, 15, 15, 0, 10, 6, 0, 4],
    wraith: [35, 0, 35, 30, 15, 30, 25, 25, 50, 15, 10, 6, 0, 4],
    wight: [50, 35, 45, 45, 38, 30, 20, 35, 50, 30, 17, 4, 0, 4],
    ghoul: [30, 0, 35, 30, 30, 35, 25, 20, 20, 5, 11, 6, 0, 4],
    'ghoul soldier': [30, 0, 35, 30, 30, 35, 25, 20, 20, 5, 11, 6, 0, 4],
  },
};
