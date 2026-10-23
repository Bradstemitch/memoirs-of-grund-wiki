import { coreItemMagicBuilder } from '../../../utils/builders';

const human = [`Humanoid`, `humanoid`, `Human`];
const tags = [`Magical`, `Item`, `Wondrous Item`];

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
  PrometheusI: [...human, `Prometheus Initiative`],
  Outlaw: [...human, `Outlaws`],
};

const CREATURE_Core_AKITSUDO = {
  STYX_FLASK: coreItemMagicBuilder(`Flask of the Styx`, ``, [], `http://www.digital-eel.com/scans/images/swords_fishy_big.gif`, [...tags]),
  JOHNNY_JUMP_UP: coreItemMagicBuilder(`Johnny Jump up`, ``, [`Quart`, `Pint`], `http://www.digital-eel.com/scans/images/swords_fishy_big.gif`, [...tags]),
  KNIGHT_ELIXIR: coreItemMagicBuilder(`Knight Elixir`, ``, [], `http://www.digital-eel.com/scans/images/swords_fishy_big.gif`, [...tags]),
  AQUILA_LOST_LEGION: coreItemMagicBuilder(`Aquila of the Lost Legion`, ``, [], `http://www.digital-eel.com/scans/images/swords_fishy_big.gif`, [...tags]),
  BODHMALLS_LILY: coreItemMagicBuilder(`Bodhmall's Lily`, ``, [], `http://www.digital-eel.com/scans/images/swords_fishy_big.gif`, [...tags]),
  CORRBOLG: coreItemMagicBuilder(`Corrbolg`, ``, [], `http://www.digital-eel.com/scans/images/swords_fishy_big.gif`, [...tags]),
  ELVEN_AMULET: coreItemMagicBuilder(`Elven Amulet`, ``, [], `http://www.digital-eel.com/scans/images/swords_fishy_big.gif`, [...tags]),
  MORRIGANS_BAND: coreItemMagicBuilder(`Morrigan's Band`, ``, [`one`, `two`, `three`], `http://www.digital-eel.com/scans/images/swords_fishy_big.gif`, [...tags]),
};

export const MAGIC_ITEMS_Core_WondrousItems = {
  ...CREATURE_Core_AKITSUDO,
};
