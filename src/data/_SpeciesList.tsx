import { SPECIES_Core } from './__DATA_Core';

function speciesBuilder(name: string) {
  return {
    ...(SPECIES_Core[name] || null),
  };
}




export const SpeciesList = Object.keys(SPECIES_Core).map((species) => {
  return speciesBuilder(species);
});
