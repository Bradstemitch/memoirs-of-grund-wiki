import { coreCreatureBuilder } from '../../../utils/builders';

const undead = [`Undead`];

const species = {
  wight: [...undead, `Wight`],
  Allaire: [...undead, `Allairan Empire`],
  ArcadiaE: [...undead, `Arcadian Empire`],
  ArcadiaR: [...undead, `Republic of Arcadia`],
  Brytth: [...undead, `Brytthonic Kingdoms`],
  Carne: [...undead, `S.P.Q.C`],
  Fomoire: [...undead, `Fomorian Clans`],
  Krasaheim: [...undead, `Isle of Krasaheim`],
  Messar: [...undead, `Messan Heptarchy`],
  Mycenae: [...undead, `Mycenaean League`],
  VindictisC: [...undead, `Vindictis Confederation`],
  Outlaw: [...undead, `Outlaws`],
};

const CREATURE_Core_SETTS_LEGION = {
  SETT_Obelisk: coreCreatureBuilder(`Sett Obelisk`, `Construct`, `Obelisk`, ``, [`Small`, `Medium`, `Large`, `Huge`, `Gargantuan`], [...species.wight, `Kebech`]), //Todo
  SETT_SILVER_IMMORTAL: coreCreatureBuilder(`Immortal`, `Undead`, `Wight`, ``, [``, `Mounted`, `Charioteer`], [...species.wight, `Kebech`]), //Todo
  SETT_GOLDEN_IMMORTAL: coreCreatureBuilder(`Golden Immortal`, `Undead`, `Wight`, ``, [``, `Mounted`, `Charioteer`], [...species.wight, `Kebech`]), //Todo
};

export const CREATURE_Core_Undead = {
  ...CREATURE_Core_SETTS_LEGION,
  WIGHT: coreCreatureBuilder(`Wight`, `Undead`, `Wight`, ``, [], [...species.wight]), //Todo
  ZOMBIE: coreCreatureBuilder(`Zombie`, `Undead`, `Zombie`, ``, [], [`Undead`, `Zombie`]), //Todo
  SKELETON: coreCreatureBuilder(`Skeleton`, `Undead`, `Skeleton`, ``, [], [`Undead`, `Skeleton`]), //Todo
  SKELETON_WARRIOR: coreCreatureBuilder(`Skeleton`, `Undead`, `Skeleton`, ``, [`Archer`,`Spearman`], [`Undead`, `Skeleton`]), //Todo
  GHOUL: coreCreatureBuilder(`Ghoul`, `Undead`, `Ghoul`, ``, [], [`Undead`, `Ghoul`]), //Todo
  GHOUL_LEVY: coreCreatureBuilder(`Ghoul Levy`, `Undead`, `Ghoul`, ``, [], [`Undead`, `Ghoul`]), //Todo
  GHOUL_INFANTRY: coreCreatureBuilder(`Ghoul Infantry`, `Undead`, `Ghoul`, ``, [], [`Undead`, `Ghoul`]), //Todo
  GHOUL_VETERAN: coreCreatureBuilder(`Ghoul Veteran`, `Undead`, `Ghoul`, ``, [], [`Undead`, `Ghoul`]), //Todo
};
