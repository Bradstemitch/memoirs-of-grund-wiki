import latinize from 'latinize';
import { THUMBNAIL } from '../images/_images';

function coreBuilder(
  name: any,
  filename: any,
  fileLoc: any,
  imageLoc: any,
  pronunciation: any,
  tags: string[]
) {
  return {
    name: name,
    fileName: latinize(filename),
    fileLoc: fileLoc,
    imageLoc: imageLoc,
    pronunciation: pronunciation,
    tags: tags,
  };
}

export function coreCharacterBuilder(
  forname: string,
  surname: string,
  tags: string[],
  pronunciation: string
) {
  const nameObj = {
    fore: forname,
    sur: surname,
  };
  return coreBuilder(
    nameObj,
    (forname + surname).replace(/\s/g, ``),
    `characters`,
    THUMBNAIL[
    `./characters/THUMBNAIL_${latinize((forname + surname).replace(/\s/g, ``))}.webp`
    ],
    pronunciation,
    tags
  );
}
export function coreCreatureBuilder(
  name: string,
  creatureType: string,
  species: string,
  faction: string,
  weapons: string[],
  tags: string[],
  group?: string
) {
  return {
    ...coreBuilder(
      name,
      (faction + name).replace(/\s/g, ``),
      `creatures`,
      ``,
      ``,
      tags
    ),
    creatureType: creatureType,
    species: species,
    faction: faction,
    group: group || ``,
    weapons: weapons,
  };
}

export function coreLocationBuilder(
  name: any,
  pronunciation: string,
  tags: string[]
) {
  return coreBuilder(
    name,
    name.toLowerCase(),
    `locations`,
    ``,
    pronunciation,
    tags
  );
}
export function coreNationBuilder(
  name: any,
  imageLoc: any,
  pronunciation: string,
  tags: string[]
) {
  return coreBuilder(
    name,
    name.replace(/\s/g, ``),
    `nations`,
    imageLoc,
    pronunciation,
    tags
  );
}
export function coreOrganisationBuilder(name: any, tags: string[]) {
  return coreBuilder(
    name,
    name.replace(/\s/g, ``),
    `organisation`,
    ``,
    ``,
    tags
  );
}
export function coreReligionBuilder(name: any, tags: string[]) {
  return coreBuilder(name, name.replace(/\s/g, ``), `religions`, ``, ``, tags);
}
export function coreSpeciesBuilder(name: any, tags: string[]) {
  return coreBuilder(name, name.replace(/\s/g, ``), `species`, ``, ``, tags);
}

export function detailBuilder(name: any, detail: string) {
  return {
    detail: detail,
    data: { name: name },
  };
}

export function coreItemMagicBuilder(
  name: any,
  epitath: string,
  variants: string[],
  imageLoc: string,
  tags: string[]
) {
  return {
    ...coreBuilder(
      name,
      name.replace(/\s/g, ``),
      `magicItems`,
      imageLoc,
      ``,
      tags
    ),
    variants: variants,
    epitath: epitath,
  };
}
