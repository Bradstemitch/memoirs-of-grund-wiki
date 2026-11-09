import { coreItemMagicBuilder } from '../../../utils/builders';

const human = [`Humanoid`, `humanoid`, `Human`];
const tags = [`Magical`, `Armour`];

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
};

export const MAGIC_ITEMS_Core_Armour = {
  ...CREATURE_Core_AKITSUDO,
  ACHILLES_ARMOUR: coreItemMagicBuilder(`Armour of Achilles`, ``, [`First`, `Second`, `Third`], `http://www.digital-eel.com/scans/images/swords_fishy_big.gif`, [...tags]),
  ASPECT_ARMOUR: coreItemMagicBuilder(`Aspect Armour`, ``, [], `http://www.digital-eel.com/scans/images/swords_fishy_big.gif`, [...tags]),
  BLACK_PLATE: coreItemMagicBuilder(`Black Plate`, ``, [], `http://www.digital-eel.com/scans/images/swords_fishy_big.gif`, [...tags]),
  FOMORIAN_PLATE: coreItemMagicBuilder(`Fomorian Plate`, ``, [], `http://www.digital-eel.com/scans/images/swords_fishy_big.gif`, [...tags]),
  HEPHAESTUS_GIFT: coreItemMagicBuilder(`Hephaestus' Gift`, ``, [`Armour`, `Shield`], `http://www.digital-eel.com/scans/images/swords_fishy_big.gif`, [...tags]),
  MOLON_LABE: coreItemMagicBuilder(`Molon Labe`, ``, [], `http://www.digital-eel.com/scans/images/swords_fishy_big.gif`, [...tags]),
  MORTIS_GIFT: coreItemMagicBuilder(`Mortis' Gift`, ``, [], `http://www.digital-eel.com/scans/images/swords_fishy_big.gif`, [...tags]),
  ASPIS_VALIANT_HIPPEIS: coreItemMagicBuilder(`Aspis of Valiant Hippeis`, ``, [], `http://www.digital-eel.com/scans/images/swords_fishy_big.gif`, [...tags]),
  RAIMENT_WINTER_QUEEN: coreItemMagicBuilder(`Raiment of the Winter Queen`, ``, [], `http://www.digital-eel.com/scans/images/swords_fishy_big.gif`, [...tags]),
  REAPERS_VESTMENTS: coreItemMagicBuilder(`Vestments of the Reaper`, ``, [], `http://www.digital-eel.com/scans/images/swords_fishy_big.gif`, [...tags]),
};
