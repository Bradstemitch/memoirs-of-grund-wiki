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

const CREATURE_Core_SYLVAN = {
  ELVEN_SYLVAN: coreCreatureBuilder(`Hunter`, `Humanoid`, `Elf`, `Sylvan`, [``,`Wild Hunt`], [`Humanoid`, `Elf`, `Sylvan`], `Ranger`), //Todo
  ELVEN_SYLVAN_HELWR: coreCreatureBuilder(`Scout`, `Humanoid`, `Elf`, `Sylvan`, [``,`Wild Hunt`], [`Humanoid`, `Elf`, `Sylvan`], `Ranger`), //Todo
  ELVEN_SYLVAN_CEIDWAD: coreCreatureBuilder(`Ranger`, `Humanoid`, `Elf`, `Sylvan`, [``,`Wild Hunt`], [`Humanoid`, `Elf`, `Sylvan`], `Ranger`), //Todo
};

export const CREATURE_Core_Humanoids = {
  ...CREATURE_Core_SYLVAN,
  DWARF_DWARF: coreCreatureBuilder(`Dwarf`, `Humanoid`, `Dwarf`, ``, [], [`Humanoid`, `Dwarf`]), //Todo
  DWARF_VIGIL: coreCreatureBuilder(`Vigil`, `Humanoid`, `Dwarf`, ``, [], [`Humanoid`, `Dwarf`]), //Todo
  ELVEN_DROW_GOTRAHIN_SCOUT: coreCreatureBuilder(`Gotrahin Scout`, `Humanoid`, `Elf`, `Drow`, [], [`Humanoid`, `Elf`, `Drow`]), //Todo
  ELVEN_DROW_GOTRAHIN_MILITIA: coreCreatureBuilder(`Gotrahin Militia`, `Humanoid`, `Elf`, `Drow`, [], [`Humanoid`, `Elf`, `Drow`]), //Todo
  ELVEN_DROW_GOTRAHIN_VETERAN: coreCreatureBuilder(`Gotrahin Veteran`, `Humanoid`, `Elf`, `Drow`, [], [`Humanoid`, `Elf`, `Drow`]), //Todo
  ELVEN_DROW_GOTRAHIR_KARAMATI: coreCreatureBuilder(`Gotrahir Karamati`, `Humanoid`, `Elf`, `Drow`, [], [`Humanoid`, `Elf`, `Drow`]), //Todo
  ELVEN_DROW_GOTRAHIR_RAKSHAK: coreCreatureBuilder(`Gotrahir Rakshak`, `Humanoid`, `Elf`, `Drow`, [], [`Humanoid`, `Elf`, `Drow`]), //Todo
  GOBLIN_BOSS: coreCreatureBuilder(`Goblin Boss`, `Humanoid`, `Goblin`, `Goblin`, [], [`Humanoid`, `Goblin`, `Goblinoid`]), //Todo
  GOBLIN_CLANLIN: coreCreatureBuilder(`Goblin Clanlin`, `Humanoid`, `Goblin`, `Goblin`, [], [`Humanoid`, `Goblin`, `Goblinoid`]), //Todo
  GOBLIN: coreCreatureBuilder(`Goblin`, `Humanoid`, `Goblin`, `Clanless`, [], [`Humanoid`, `Goblin`, `Goblinoid`]), //Todo
  HARPY_HARPY: coreCreatureBuilder(`Harpy`, `Humanoid`, `Harpy`, ``, [], [`Humanoid`, `Harpy`]), //Todo
  MERFOLK_COMMONER: coreCreatureBuilder(`Merfolk`, `Humanoid`, `Humanoid`, `Merfolk`, [], [`Humanoid`, `Merfolk`]), //Todo
  NUTH_COMMONER: coreCreatureBuilder(`Nuth`, `Humanoid`, `Nuth`, ``, [], [`Humanoid`, `Nuth`]), //Todo
  ORC_HUNTER: coreCreatureBuilder(`Hunter`, `Humanoid`, `Orc`, ``, [], [`Humanoid`, `Orc`]), //Todo
  ROAK_CLANSMAN: coreCreatureBuilder(`Roak`, `Humanoid`, `Roak`, ``, [], [`Humanoid`, `Roak`]), //Todo
  INPW_PRIEST: coreCreatureBuilder(`Inpw Priest`, `Humanoid`, `Inpw`, ``, [], [`Humanoid`, `Inpw`]), //Todo
};
