import { coreLocationBuilder } from '../utils/builders';
import { NATION_Core, RELIGION_Core } from './__DATA_Core';

function cityInfoBasic(
  variations: any,
  type: any,
  ruler: any,
  country: any,
  region: any,
  location: any,
  institutions: any,
  placesOfNote: any,
  status: any
) {
  return {
    basic: {
      title: `Basic`,
      values: {
        variations: {
          title: `Variations`,
          value: variations,
        },
        type: {
          title: `Type`,
          value: type,
        },
        ruler: {
          title: `Ruler`,
          value: ruler,
        },
        country: {
          title: `Country`,
          value: country,
        },
        region: {
          title: `Region`,
          value: region,
        },
        location: {
          title: `Location`,
          value: location,
        },
        institutions: {
          title: `Institutions`,
          value: institutions,
        },
        placesOfNote: {
          title: `Places of Note`,
          value: placesOfNote,
        },
        status: {
          title: `Status`,
          value: status,
        },
      },
    },
  };
}

function cityInfoSocial(
  population: any,
  garrison: any,
  religion: any,
  founded: any,
  age: any,
  founder: any
) {
  return {
    social: {
      title: `Social`,
      values: {
        population: {
          title: `Population`,
          value: population,
        },
        garrison: {
          title: `Garrison`,
          value: garrison,
        },
        religion: {
          title: `Religion`,
          value: religion,
        },
        founded: {
          title: `Founded`,
          value: founded,
        },
        age: {
          title: `Age`,
          value: age,
        },
        founder: {
          title: `Founder`,
          value: founder,
        },
      },
    },
  };
}

export const CITY_Core = {
  MESSAR_ASTBOR: coreLocationBuilder(`Astbor`, `May-sack-t`, [``]), // Astborough(fort town near brytth),
  MESSAR_BLEINST: coreLocationBuilder(`Bleinst`, `May-sack-t`, [``]),
  MESSAR_CREICH: coreLocationBuilder(`Vergris`, `May-sack-t`, [``]), // Creich(Mountain Springs),
  MESSAR_DALE: coreLocationBuilder(`Dale`, `May-sack-t`, [``]), // Dale(valley city),
  MESSAR_DOLTEN: coreLocationBuilder(`Dolten`, `May-sack-t`, [``]), // Dolton(farming community on canal),
  MESSAR_MESSACT: coreLocationBuilder(`Messact`, `May-sack-t`, [``]),
  MESSAR_NORCEST: coreLocationBuilder(`Norcest`, `May-sack-t`, [``]), // Norcester(northern barricade)
  MESSAR_POLTEN: coreLocationBuilder(`Polten`, `May-sack-t`, [``]), // Polton(built next to the lake),
  MESSAR_STARNPOR: coreLocationBuilder(`Starnpor`, `May-sack-t`, [``]), // Stanport(costal town),
  MESSAR_STARNSHAW: coreLocationBuilder(`Starnshaw`, `May-sack-t`, [``]), // Stanshaw(in moutain surrounded by dense forest),
  MESSAR_SUTPOR: coreLocationBuilder(`Sutpor`, `May-sack-t`, [``]), // Sutport(large port town),
  MESSAR_SYLVASTEAD: coreLocationBuilder(`Sylvastead`, `May-sack-t`, [``]), // Sylvastead(woodcutters and main canal user),
  MESSAR_VERGRIS: coreLocationBuilder(`Vergris`, `May-sack-t`, [``]), // Vergris(former mining town),
  MESSAR_VILLEN: coreLocationBuilder(`Villen`, `May-sack-t`, [``]),
  MESSAR_WESFER: coreLocationBuilder(`Wesfer`, `May-sack-t`, [``]), // wesford(bridge city across the frontier)
};

export const CITY_Info = {
  MESSAR_MESSACT: {
    info: {
      ...cityInfoBasic(
        [``],
        `Capital City`,
        `Monarch of Atrea`,
        NATION_Core.MESSAR,
        ``,
        ``,
        [
          `University`,
          `Messan Theives Guild`,
          `Priesthood of Mortis`,
          `Priesthood of Vitae`,
        ],
        [
          `Citadel`,
          `Docks`,
          `The Broken Shield`,
          `Shrine of the Entwined Dragons`,
        ],
        `Capital of Atrea and the Messan Heptarchy`
      ),
      ...cityInfoSocial(
        500000,
        ``,
        RELIGION_Core.DRACONIC_PANTHEON,
        null,
        `>1000 years`,
        null
      ),
    },
  },
};

export const MessarMessactData = {
  summary: [
    `Infiltration and assassination unit made up of the stealthiest troops in the Remnant. They replace or remove people in positions of power to turn the odds in their favour`,
  ],
};
