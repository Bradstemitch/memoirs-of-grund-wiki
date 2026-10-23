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
  PrometheusI: [...human, `Prometheus Initiative`],
  Outlaw: [...human, `Outlaws`],
};

const CREATURE_Core_AKITSUDO = {
  AKITSUDAN_ASHIGARU: coreCreatureBuilder(`Ashigaru`, `humanoid`, `Human`, `Akitsudo`, [`Yari`, `Yumi`], [...factions.Akitsudo], `Ashigaru`), //TODO
  AKITSUDAN_ASHIGARU_SEASONED: coreCreatureBuilder(`Seasoned Ashigaru`, `humanoid`, `Human`, `Akitsudo`, [`Yari`, `Yumi`], [...factions.Akitsudo], `Ashigaru`), //TODO
  AKITSUDAN_ASHIGARU_BANNERMAN: coreCreatureBuilder(`Ashigaru Bannerman`, `humanoid`, `Human`, `Akitsudo`, [`Yari`, `Yumi`], [...factions.Akitsudo], `Ashigaru`), //TODO
  AKITSUDAN_JIZAMURAI: coreCreatureBuilder(`Jizamurai`, `humanoid`, `Human`, `Akitsudo`, [`Yari`, `Yumi`], [...factions.Akitsudo], `Ashigaru`), //TODO
  AKITSUDAN_SAMURAI: coreCreatureBuilder(`Samurai`, `humanoid`, `Human`, `Akitsudo`, [`Yari`, `Mounted Yari`, `Yumi`, `Mounted Yumi`], [...factions.Akitsudo], `Bushi`), //TODO
  // AKITSUDAN_BANKATA: coreCreatureBuilder(`Bankata`,`humanoid`, `Human`, `Akitsudo`, `Sengoku`, [...factions.Akitsudo], `Samurai`), //TODO
  AKITSUDAN_DAIMYO: coreCreatureBuilder(`Daimyo`, `humanoid`, `Human`, `Akitsudo`, [`Yari`, `Mounted Yari`, `Yumi`, `Mounted Yumi`], [...factions.Akitsudo], `Bushi`), //TODO
};

const CREATURE_Core_ALLAIRE = {
  ALLAIRAN_ARBALEST: coreCreatureBuilder(`Arbalest`, `humanoid`, `Human`, `Allaire`, [], [...factions.Allaire]), //Todo
  ALLAIRAN_LEVY: coreCreatureBuilder(`Levy`, `humanoid`, `Human`, `Allaire`, [], [...factions.Allaire]), //Todo

  ALLAIRAN_SERGEANT: coreCreatureBuilder(`Sergeant`, `humanoid`, `Human`, `Allaire`, [``, `Mounted`], [...factions.Allaire], `Man-at-arms`), //Todo
  ALLAIRAN_MAN_AT_ARMS: coreCreatureBuilder(`Man-at-arms`, `humanoid`, `Human`, `Allaire`, [``, `Mounted`], [...factions.Allaire], `Man-at-arms`), //Todo
  ALLAIRAN_KNIGHT: coreCreatureBuilder(`Knight`, `humanoid`, `Human`, `Allaire`, [``, `Mounted`], [...factions.Allaire], `Man-at-arms`), //Todo
  ALLAIRAN_LORD: coreCreatureBuilder(`Lord`, `humanoid`, `Human`, `Allaire`, [``, `Mounted`], [...factions.Allaire], `Man-at-arms`), //Todo
  ALLAIRAN_PALADIN: coreCreatureBuilder(`Paladin`, `humanoid`, `Human`, `Allaire`, [``, `Mounted`, `Gryphon`], [...factions.Allaire], `Man-at-arms`), //Todo

  // ALLAIRAN_BARON: coreCreatureBuilder(`Baron`,`humanoid`, `Human`, `Allaire`, [], [...factions.Allaire]),                 //Todo
  // ALLAIRAN_VISCOUNT: coreCreatureBuilder(`Viscount`,`humanoid`, `Human`, `Allaire`, [], [...factions.Allaire]),                 //Todo
  // ALLAIRAN_EARL: coreCreatureBuilder(`Earl`,`humanoid`, `Human`, `Allaire`, [], [...factions.Allaire]),                 //Todo
  // ALLAIRAN_MARQUESS: coreCreatureBuilder(`Marquess`,`humanoid`, `Human`, `Allaire`, [], [...factions.Allaire]),                 //Todo
  // ALLAIRAN_DUKE: coreCreatureBuilder(`Duke`,`humanoid`, `Human`, `Allaire`, [], [...factions.Allaire]),                 //Todo
  ALLAIRAN_PYROKINE: coreCreatureBuilder(`Pyrokine of the Tower`, `humanoid`, `Human`, `Allaire`, [], [...factions.Allaire], `Tower Mages`), //Todo
};

const CREATURE_Core_ARCADIA_E = {
  ARCADIA_PHALANGITE: coreCreatureBuilder(`Phalangite`, `humanoid`, `Human`, `Brytth`, [], [...factions.ArcadiaE, `Arcadia Stratia`]), //Todo
  ARCADIA_HYSPASPIST: coreCreatureBuilder(`Hyspaspist`, `humanoid`, `Human`, `Brytth`, [], [...factions.ArcadiaE, `Arcadia Stratia`]), //Todo
  ARCADIA_COMPANIONS: coreCreatureBuilder(`Companions`, `humanoid`, `Human`, `Brytth`, [], [...factions.ArcadiaE, `Arcadia Stratia`]), //Todo
};

const CREATURE_Core_ARCADIA_R = {
  ASSERE_SCION: coreCreatureBuilder(`Scion`, `humanoid`, `Human`, `Assere`, [], [...factions.ArcadiaR], `Noble`), //Todo
  ASSERE_NOBLE: coreCreatureBuilder(`Noble`, `humanoid`, `Human`, `Assere`, [], [...factions.ArcadiaR], `Noble`), //Todo
  ASSERE_FAMILY_HEAD: coreCreatureBuilder(`Family Head`, `humanoid`, `Human`, `Assere`, [], [...factions.ArcadiaR], `Noble`), //Todo
  ASSERE_TOWER_MASTER: coreCreatureBuilder(`Tower Master`, `humanoid`, `Human`, `Assere`, [], [...factions.ArcadiaR], `Noble`), //Todo
  ASSERE_RECRUIT: coreCreatureBuilder(`House Militant Recruit`, `humanoid`, `Human`, `Assere`, [], [...factions.ArcadiaR], `House Militant`), //Todo
  ASSERE_MILITANT: coreCreatureBuilder(`House Militant`, `humanoid`, `Human`, `Assere`, [], [...factions.ArcadiaR], `House Militant`), //Todo
  ASSERE_HONOUR_GUARD: coreCreatureBuilder(`Honour Guard`, `humanoid`, `Human`, `Assere`, [], [...factions.ArcadiaR], `House Militant`), //Todo
  ASSERE_OFFICER: coreCreatureBuilder(`Honour Guard Officer`, `humanoid`, `Human`, `Assere`, [], [...factions.ArcadiaR], `House Militant`), //Todo
  ACRE_SERGEANT: coreCreatureBuilder(`Sergeant`, `humanoid`, `Human`, `Acre`, [], [...factions.ArcadiaR]), //Todo
  ACRE_TEMPLAR: coreCreatureBuilder(`Templar`, `humanoid`, `Human`, `Acre`, [], [...factions.ArcadiaR]), //Todo
  COMINO_HASTATUS: coreCreatureBuilder(`Hastatus`, `humanoid`, `Human`, `Comino`, [], [...factions.ArcadiaR], `Legio`), //Todo
  COMINO_PRINCEPS: coreCreatureBuilder(`Princeps`, `humanoid`, `Human`, `Comino`, [], [...factions.ArcadiaR], `Legio`), //Todo
  COMINO_TRIARII: coreCreatureBuilder(`Triarius`, `humanoid`, `Human`, `Comino`, [], [...factions.ArcadiaR], `Legio`), //Todo
  MERCENARY_NOVICE: coreCreatureBuilder(`Novice`, `humanoid`, `Human`, `Assere`, [], [...factions.ArcadiaR]), //Todo
  MERCENARY_MERCENARY: coreCreatureBuilder(`Mercenary`, `humanoid`, `Human`, `Assere`, [], [...factions.ArcadiaR]), //Todo
  MERCENARY_SERGEANT: coreCreatureBuilder(`Sergeant`, `humanoid`, `Human`, `Assere`, [], [...factions.ArcadiaR]), //Todo
  MERCENARY_SENESCHAL: coreCreatureBuilder(`Seneschal`, `humanoid`, `Human`, `Assere`, [], [...factions.ArcadiaR]), //Todo
};

const CREATURE_Core_BRYTTH = {
  BRYTTHON_LEGIONARY: coreCreatureBuilder(`Legionary`, `humanoid`, `Human`, `Brytth`, [`Limitaneus`, `Comitatensis`], [...factions.Brytth, `Legio Brytthanica`], `Legio`), //Todo
  BRYTTHON_CENTURION: coreCreatureBuilder(`Centurion`, `humanoid`, `Human`, `Brytth`, [], [...factions.Brytth, `Legio Brytthanica`], `Legio`), //Todo
  BRYTTHON_EQUES: coreCreatureBuilder(`Eques`, `humanoid`, `Human`, `Brytth`, [`Promotus`], [...factions.Brytth, `Legio Brytthanica`], `Equites`), //Todo
  BRYTTHON_DECURION: coreCreatureBuilder(`Decurion`, `humanoid`, `Human`, `Brytth`, [], [...factions.Brytth, `Legio Brytthanica`], `Equites`), //Todo
  BRYTTHON_COMES: coreCreatureBuilder(`Comes`, `humanoid`, `Human`, `Brytth`, [``, `Mounted`, `Longbow`], [...factions.Brytth, `Legio Brytthanica`], ``), //Todo
  BRYTTHON_LONGBOWMAN: coreCreatureBuilder(`Longbowman`, `humanoid`, `Human`, `Brytth`, [], [...factions.Brytth, `Auxilia Brytthanica`], `Longbow`), //Todo
  BRYTTHON_YEOMAN: coreCreatureBuilder(`Yeoman`, `humanoid`, `Human`, `Brytth`, [], [...factions.Brytth, `Auxilia Brytthanica`], `Longbow`), //Todo
  BRYTTHON_BLACK_COMPANY: coreCreatureBuilder(`Black Company`, `humanoid`, `Human`, `Brytth`, [], [...factions.Brytth, `Auxilia Brytthanica`], `Longbow`), //Todo
  // BRYTTHON_LIMITANEUS: coreCreatureBuilder(`Limitaneus`, `humanoid`, `Human`, `Brytth`, [], [...factions.Brytth, `Legio Brytthanica`], `Legio`),               //Todo
  // BRYTTHON_COMITATENSIS: coreCreatureBuilder(`Comitatensis`, `humanoid`, `Human`, `Brytth`, [], [...factions.Brytth, `Legio Brytthanica`], `Legio`),            //Todo
  BRYTTHON_CONTARIUS: coreCreatureBuilder(`Contarius`, `humanoid`, `Human`, `Brytth`, [], [...factions.Brytth, `Legio Brytthanica`], `Contarii`), //Todo
  BRYTTHON_CATAFRACTARIUS: coreCreatureBuilder(`Catafractarius`, `humanoid`, `Human`, `Brytth`, [`Shield`, `Contus`], [...factions.Brytth, `Legio Brytthanica`], `Contarii`), //Todo
  BRYTTHON_BUCELLARIUS: coreCreatureBuilder(`Bucellarius`, `humanoid`, `Human`, `Brytth`, [], [...factions.Brytth, `Legio Brytthanica`], `Equites`), //Todo
};

const CREATURE_Core_CARNE = {
  CARNE_LEGIONARY: coreCreatureBuilder(`Legionary`, `humanoid`, `Human`, `Carne`, [], [...factions.Carne, `Legio Carnanus`], `Legio`), //Todo
  CARNE_CENTURION: coreCreatureBuilder(`Centurion`, `humanoid`, `Human`, `Carne`, [], [...factions.Carne, `Legio Carnanus`], `Legio`), //Todo
  CARNE_EQUES: coreCreatureBuilder(`Eques`, `humanoid`, `Human`, `Carne`, [], [...factions.Carne, `Legio Carnanus`], `Equites`), //Todo
  CARNE_DECURION: coreCreatureBuilder(`Decurion`, `humanoid`, `Human`, `Carne`, [], [...factions.Carne, `Legio Carnanus`], `Equites`), //Todo
  CARNE_SAGITTARIUS: coreCreatureBuilder(`Sagittarius`, `humanoid`, `Human`, `Carne`, [], [...factions.Carne, `Legio Carnanus`], `Skirmishers`), //Todo
};

const CREATURE_Core_FOMOIRE = {
  FOMORIAN_YOUTH: coreCreatureBuilder(`Youth`, `humanoid`, `Human`, `Fomoire`, [], [...factions.Fomoire], `Clansman`), //Todo
  FOMORIAN_CEITHEARN: coreCreatureBuilder(`Ceithearn`, `humanoid`, `Human`, `Fomoire`, [], [...factions.Fomoire], `Clansman`), //Todo
  FOMORIAN_GALLOGLAIGH: coreCreatureBuilder(`Gallóglaigh`, `humanoid`, `Human`, `Fomoire`, [], [...factions.Fomoire]), //Todo
  FOMORIAN_WOAD_WARRIOR: coreCreatureBuilder(`Woad Warrior`, `humanoid`, `Human`, `Fomoire`, [``, `Shield`], [...factions.Fomoire]), //Todo
  FOMORIAN_CHOSEN: coreCreatureBuilder(`Chosen`, `humanoid`, `Human`, `Fomoire`, [], [...factions.Fomoire]), //Todo
};

const CREATURE_Core_KRASAHEIM = {
  KRASEN_FREEMAN: coreCreatureBuilder(`Freeman`, `humanoid`, `Human`, `Krasaheim`, [], [...factions.Krasaheim]), //Todo
  KRASEN_RAIDER: coreCreatureBuilder(`Raider`, `humanoid`, `Human`, `Krasaheim`, [], [...factions.Krasaheim]), //Todo
  KRASEN_HUSKARL: coreCreatureBuilder(`Huskarl`, `humanoid`, `Human`, `Krasaheim`, [], [...factions.Krasaheim]), //Todo
  KRASEN_THANE: coreCreatureBuilder(`Thane`, `humanoid`, `Human`, `Krasaheim`, [], [...factions.Krasaheim]), //Todo
  KRASEN_ULFEONHAR: coreCreatureBuilder(`Úlfhéðnar`, `humanoid`, `Human`, `Krasaheim`, [], [...factions.Krasaheim]), //Todo
  KRASEN_BERSERKER: coreCreatureBuilder(`Berserker`, `humanoid`, `Human`, `Krasaheim`, [], [...factions.Krasaheim]), //Todo
};

const CREATURE_Core_MESSAR = {
  MESSAN_ARCHER: coreCreatureBuilder(`Archer`, `humanoid`, `Human`, `Messar`, [], [...factions.Messar]), //Todo
  MESSAN_FYRDMAN: coreCreatureBuilder(`Fyrdman`, `humanoid`, `Human`, `Messar`, [], [...factions.Messar], `Fyrd`), //Todo
  MESSAN_SELECTFYRDMAN: coreCreatureBuilder(`Select-Fyrdman`, `humanoid`, `Human`, `Messar`, [], [...factions.Messar], `Fyrd`), //Todo
  MESSAN_HUSCARL: coreCreatureBuilder(`Huscarl`, `humanoid`, `Human`, `Messar`, [``, `Deadstalker`, `Children of the Vlakyrie`], [...factions.Messar]), //Todo
  // MESSAN_HUSCARL_DEADSTALKER: coreCreatureBuilder(`Huscarl`, `humanoid`, `Human`, `Messar`, , [...factions.Messar]),                //Todo
  // MESSAN_HUSCARL_VALKYR: coreCreatureBuilder(`Huscarl`, `humanoid`, `Human`, `Messar`, `Children of the Vlakyrie`, [...factions.Messar]),                //Todo
  MESSAN_THEGN_MIDDLE: coreCreatureBuilder(`Middle Thegn`, `humanoid`, `Human`, `Messar`, [], [...factions.Messar]), //Todo
  MESSAN_THEGN_KINGS: coreCreatureBuilder(`King's Thegn`, `humanoid`, `Human`, `Messar`, [], [...factions.Messar]), //Todo
  MESSAN_EALDORMAN: coreCreatureBuilder(`Ealdorman`, `humanoid`, `Human`, `Messar`, [], [...factions.Messar]), //Todo
};

const CREATURE_Core_MYCENAE = {
  MYCENAEAN_HOPLITE: coreCreatureBuilder(`Hoplite`, `humanoid`, `Human`, `Mycenae`, [], [...factions.Mycenae, `Polis Stratia`]), //Todo
  MYCENAEAN_ARMOURED_HOPLITE: coreCreatureBuilder(`Armoured Hoplite`, `humanoid`, `Human`, `Mycenae`, [], [...factions.Mycenae, `Polis Stratia`]), //Todo
  MYCENAEAN_MYRMIDON: coreCreatureBuilder(`Myrmidon`, `humanoid`, `Human`, `Mycenae`, [], [...factions.Mycenae, `Aegean Stratia`]), //Todo
};

const CREATURE_Core_DAMOCLESE = {
  COMMANDO_COMMANDO: coreCreatureBuilder(`Knight Commando`, `humanoid`, `Human`, `Vindictis`, [], [...factions.VindictisC, `Knight Commando`]), //Todo
  SHARD_SHARD: coreCreatureBuilder(`Shard`, `humanoid`, `Human`, `Vindictis`, [], [...factions.VindictisC, `Shards of Damoclese`]), //Todo
};

const CREATURE_Core_VINDICTIS = {
  VINDICTIS_FUSILIER: coreCreatureBuilder(`Fusilier`, `humanoid`, `Human`, `Vindictis`, [], [...factions.VindictisC]), //Todo
  VINDICTIS_GRENADIER: coreCreatureBuilder(`Grenadier`, `humanoid`, `Human`, `Vindictis`, [], [...factions.VindictisC]), //Todo
  VINDICTIS_VOLTIGEUR: coreCreatureBuilder(`Voltigeur`, `humanoid`, `Human`, `Vindictis`, [], [...factions.VindictisC]), //Todo
};

const CREATURE_Core_PROMETHEUS = {
  VINDICTIS_SECURITY: coreCreatureBuilder(`Security`, `humanoid`, `Human`, `Prometheus`, [], [...factions.VindictisC]), //Todo
  VINDICTIS_RIFLEMAN: coreCreatureBuilder(`Rifleman`, `humanoid`, `Human`, `Prometheus`, [], [...factions.VindictisC]), //Todo
};

const CREATURE_Core_OUTLAW = {
  OUTLAW_MUGGER: coreCreatureBuilder(`Mugger`, `humanoid`, `Human`, `Outlaw`, [], [...factions.Outlaw], `Assassin`), //Todo
  OUTLAW_ASSASSIN: coreCreatureBuilder(`Assassin`, `humanoid`, `Human`, `Outlaw`, [], [...factions.Outlaw], `Assassin`), //Todo
  OUTLAW_ROBBER: coreCreatureBuilder(`Robber`, `humanoid`, `Human`, `Outlaw`, [], [...factions.Outlaw], `Bandit`), //Todo
  OUTLAW_BRIGAND: coreCreatureBuilder(`Brigand`, `humanoid`, `Human`, `Outlaw`, [], [...factions.Outlaw], `Bandit`), //Todo
  OUTLAW_MARAUDER: coreCreatureBuilder(`Marauder`, `humanoid`, `Human`, `Outlaw`, [], [...factions.Outlaw], `Bandit`), //Todo
};

export const CREATURE_Core_Humans = {
  Guard: coreCreatureBuilder(`Guard`, `humanoid`, `Human`, ``, [], [...human]), //Todo
  ...CREATURE_Core_AKITSUDO,
  ...CREATURE_Core_ALLAIRE,
  ...CREATURE_Core_ARCADIA_E,
  ...CREATURE_Core_ARCADIA_R,
  ...CREATURE_Core_BRYTTH,
  ...CREATURE_Core_CARNE,
  ...CREATURE_Core_DAMOCLESE,
  ...CREATURE_Core_FOMOIRE,
  ...CREATURE_Core_KRASAHEIM,
  ...CREATURE_Core_MESSAR,
  ...CREATURE_Core_MYCENAE,
  ...CREATURE_Core_OUTLAW,
  ...CREATURE_Core_PROMETHEUS,
  ...CREATURE_Core_VINDICTIS,
};
