import { RELIGION_Core } from "./__DATA_Core"

function speciesBuilder(name: string) {
  return ({
    ...RELIGION_Core[name] || null,
  })
}

export const SpeciesList = Object.keys(RELIGION_Core).map(species => {
  return speciesBuilder(species)
})