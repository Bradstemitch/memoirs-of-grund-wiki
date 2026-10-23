import { coreCreatureBuilder } from '../../../utils/builders';

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

export const CREATURE_Core_Fiends = {
  BRYTTH_BLACK_KNIGHT_SQUIRE: coreCreatureBuilder(`Black Knight Squire`, `Fiend`, `Vampire`, ``, [], [...species.vampire, `Brytthonic Kingdoms`]), //Todo
  BRYTTH_BLACK_KNIGHT: coreCreatureBuilder(`Black Knight`, `Fiend`, `Vampire`, ``, [``, `Mounted`], [`Fiend`, `Vampire`, `Brytthonic Kingdoms`]), //Todo
  // BRYTTH_BLACK_KNIGHT_MOUNTED: coreCreatureBuilder(`Black Knight`, `Fiend`, `Vampire`, ``, `Mounted`, [`Fiend`, `Vampire`, `Brytthonic Kingdoms`]),                //Todo
  BRYTTH_BLACK_KNIGHT_SENESCHAL: coreCreatureBuilder(`Black Knight Seneschal`, `Fiend`, `Vampire`, ``, [], [`Fiend`, `Vampire`, `Brytthonic Kingdoms`]), //Todo
    VAMPIRE: coreCreatureBuilder(`Vampire`, `Fiend`, `Vampire`, ``, [], [`Fiend`, `Vampire`]), //Todo
};
