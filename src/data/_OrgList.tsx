import { ORGANISATION_Core } from "./__DATA_Core";

export const OrgList = [
  // KnightCommando,
  // PrometheusInitiative,
  // ShardsOfDamocles,
  // DamocleseRemnant,
  // HarlequinsRevelry,
]


function organisationBuilder(name: string) {
  return ({
    ...ORGANISATION_Core[name],
  })
}

export const OrganisationList = Object.keys(ORGANISATION_Core).map(organisation => {
  return organisationBuilder(organisation)
})