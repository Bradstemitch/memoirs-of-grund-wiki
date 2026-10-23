export function characterInfoBasic(
  alias: any,
  nationality: any,
  born: number | null,
  status: string,
  death: number | null
) {
  return {
    basic: {
      title: `Basic`,
      values: {
        alias: {
          title: `Alias(s)`,
          value: alias,
        },
        nationality: {
          title: `Nationality`,
          value: nationality,
        },
        born: {
          title: `Born`,
          value: born,
        },
        status: {
          title: `Status`,
          value: status,
        },
        died: {
          title: `Died`,
          value: death,
        },
      },
    },
  };
}

export function characterInfoPhysical(
  species: any,
  gender: string,
  height: number,
  hairColour: string,
  eyeColour: string,
  skinColour: string
) {
  return {
    physical: {
      title: `Physical`,
      values: {
        species: {
          title: `Species`,
          value: species,
        },
        gender: {
          title: `Gender`,
          value: gender,
        },
        height: {
          title: `Height`,
          value: height.toString() + ` meters`,
        },
        hair: {
          title: `Hair Colour`,
          value: hairColour,
        },
        eyes: {
          title: `Eye Colour`,
          value: eyeColour,
        },
        skin: {
          title: `Skin Colour`,
          value: skinColour,
        },
      },
    },
  };
}

export function characterInfoPersonal(
  titles: string | string[] | null,
  professions: string | string[] | null,
  affiliations: any,
  skills: string | string[] | null
) {
  return {
    personal: {
      title: `Personal`,
      values: {
        titles: {
          title: `Titles`,
          value: titles,
        },
        professions: {
          title: `Professions`,
          value: professions,
        },
        affiliations: {
          title: `Affiliations`,
          value: affiliations,
        },
        skills: {
          title: `Skills`,
          value: skills,
        },
      },
    },
  };
}

export function characterInfoFamily(
  relatives: any,
  partner: any,
  children: any
) {
  return {
    family: {
      title: `Family`,
      values: {
        relatives: {
          title: `Relatives`,
          value: relatives,
        },
        partner: {
          title: `Partner`,
          value: partner,
        },
        children: {
          title: `Children`,
          value: children,
        },
      },
    },
  };
}
