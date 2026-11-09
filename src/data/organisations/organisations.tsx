import { EMBLEM } from '../../../images/_images';
import { coreOrganisationBuilder } from '../../utils/builders';

const fiend = [`fiend`];

const species = {
  vampire: [...fiend, `Vampire`],
  Allaire: [...fiend, `Allairan Empire`],
  ArcadiaE: [...fiend, `Arcadian Empire`],
  ArcadiaR: [...fiend, `Republic of Arcadia`],
  Brytth: [...fiend, `Brytthonic Kingdoms`],
  Carne: [...fiend, `S.P.Q.C`],
  Fomoire: [...fiend, `Fomorian Clans`],
  Krasaheim: [...fiend, `Isle of Krasaheim`],
  Messar: [...fiend, `Messan Heptarchy`],
  Mycenae: [...fiend, `Mycenaean League`],
  VindictisC: [...fiend, `Vindictis Confederation`],
  Outlaw: [...fiend, `Outlaws`],
};
export const ARCADIA_MERCENARIES = {
  PALE_HOST: coreOrganisationBuilder(`Pale Host`, [``]),
  BAND_OF_SONS: coreOrganisationBuilder(`Band of Sons`, [``]),
}


export const ORGANISATION_Core_organisations = {
  ...ARCADIA_MERCENARIES,
  SWORDS_OF_DAMOCLES: coreOrganisationBuilder(`Swords of Damocles`, [``]),
  SHARDS_OF_DAMOCLES: coreOrganisationBuilder(`Shards of Damocles`, [``]),
  HARLEQUINS_REVELRY: coreOrganisationBuilder(`Harlequin's Revelry`, [``]),
  KNIGHT_COMMANDO: coreOrganisationBuilder(`Knight Commando`, [``]),
  VINDICTIS: coreOrganisationBuilder(`Vindictis`, [``]),
  PROMETHEUS_INITIATIVE: coreOrganisationBuilder(`Prometheus Initiative`, [``]),
  REMNANT: coreOrganisationBuilder(`The Remnant`, [``]),
  LEGION: coreOrganisationBuilder(`The Legion`, [``]),
  MESSAN_REBELLION: coreOrganisationBuilder(`Messan Rebellion`, [``]),
  TRINITY: coreOrganisationBuilder(`Trinity`, [``]),
  ZEALOTS: coreOrganisationBuilder(`Zealots`, [``]),
};
