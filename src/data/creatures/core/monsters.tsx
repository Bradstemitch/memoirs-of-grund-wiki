import { coreCreatureBuilder } from '../../../utils/builders';

const human = [`Humanoid`, `humanoid`, `Human`];

const factions = {
  Akitsudo: [...human, `Akitsudan Empire`],
  Allaire: [...human, `Allairan Empire`],
  ArcadiaE: [...human, `Arcadian Empire`],
  ArcadiaR: [...human, `Republic of Arcadia`],
  Brytth: [...human, `Brytthonic Kingdoms`],
  Carne: [...human, `S.P.Q.C`],
  Fomoire: [...human, `Fomorian Clans`],
  Krasaheim: [...human, `Isle of Krasaheim`],
  Messar: [...human, `Messan Heptarchy`],
  Mycenae: [...human, `Mycenaean League`],
  VindictisC: [...human, `Vindictis Confederation`],
  Outlaw: [...human, `Outlaws`],
};

export const CREATURE_Core_Monsters = {
  BASILISK: coreCreatureBuilder( `Basilisk`, `Monstrosity`, `Basilisk`, ``, [], [`Monstrosity`, `Basilisk`]), //Todo
  CENTAUR: coreCreatureBuilder( `Centaur`, `Monstrosity`, `Centaur`, ``, [], [`Monstrosity`, `Centaur`]), //Todo
  CHIMERA: coreCreatureBuilder( `Chimera`, `Monstrosity`, `Chimera`, ``, [], [`Monstrosity`, `Chimera`]), //Todo
  COCKATRICE: coreCreatureBuilder( `Cockatrice`, `Monstrosity`, `Cockatrice`, ``, [], [`Monstrosity`, `Cockatrice`]), //Todo
  CROCOTTA: coreCreatureBuilder( `Crocotta`, `Monstrosity`, `Crocotta`, ``, [], [`Monstrosity`, `Crocotta`]), //Todo
  GORGON: coreCreatureBuilder( `Gorgon`, `Monstrosity`, `Gorgon`, ``, [], [`Monstrosity`, `Gorgon`]), //Todo
  HIPPOGRYPH: coreCreatureBuilder( `Hippogryph`, `Monstrosity`, `Hippogryph`, ``, [], [`Monstrosity`, `Hippogryph`]), //Todo
  HYDRA: coreCreatureBuilder( `Hydra`, `Monstrosity`, `Hydra`, ``, [], [`Monstrosity`, `Hydra`]), //Todo
  LAHMIA: coreCreatureBuilder( `Lahmia`, `Monstrosity`, `Lahmia`, ``, [], [`Monstrosity`, `Lahmia`]), //Todo
  LYCAN_WEREWOLF: coreCreatureBuilder( `Werewolf`, `Monstrosity`, `Lycanthrope`, ``, [], [`Monstrosity`, `Werewolf`]), //Todo
  MANTICORE: coreCreatureBuilder( `Manticore`, `Monstrosity`, `Manticore`, ``, [], [`Monstrosity`, `Manticore`]), //Todo
  MINOTAUR: coreCreatureBuilder( `Minotaur`, `Monstrosity`, `Minotaur`, ``, [], [`Monstrosity`, `Minotaur`]), //Todo
  PEGASUS: coreCreatureBuilder( `Pegasus`, `Monstrosity`, `Pegasus`, ``, [], [`Monstrosity`, `Pegasus`]), //Todo
  PERYTON: coreCreatureBuilder( `Peryton`, `Monstrosity`, `Peryton`, ``, [], [`Monstrosity`, `Peryton`]), //Todo
  ROC: coreCreatureBuilder( `Roc`, `Monstrosity`, `Roc`, ``, [], [`Monstrosity`, `Roc`]), //Todo
};
