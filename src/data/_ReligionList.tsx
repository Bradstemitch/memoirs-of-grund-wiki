import { RELIGION_Core } from "./__DATA_Core"

function religionBuilder(name: string) {
  return ({
    ...RELIGION_Core[name] || null,
  })
}

export const ReligionList = Object.keys(RELIGION_Core).map(religion => {
  return religionBuilder(religion)
})