import {
  coreCharacterBuilder,
  coreCreatureBuilder,
  coreItemMagicBuilder,
  coreLocationBuilder,
  coreNationBuilder,
  coreOrganisationBuilder,
  coreReligionBuilder,
  coreSpeciesBuilder,
} from '../utils/builders';
import { EMBLEM } from '../images/_images';
import { CREATURE_Core_Humans } from './creatures/core/humans';
import { CREATURE_Core_Monsters } from './creatures/core/monsters';
import { CREATURE_Core_Undead } from './creatures/core/undead';
import { CREATURE_Core_Fiends } from './creatures/core/fiends';
import { CREATURE_Core_Humanoids } from './creatures/core/humanoids';
import { MAGIC_ITEMS_Core_WondrousItems } from './magicItems/core/wondrousItems';
import { MAGIC_ITEMS_Core_Weapons } from './magicItems/core/weapons';
import { MAGIC_ITEMS_Core_Armour } from './magicItems/core/armour';

export const NATION_Core = {
  ACRE: coreNationBuilder(`Bishopric of Acre`, EMBLEM[`./emblems/ArcadiaAcre.webp`], ``, [`Acre`, `Kingdom`]),
  AKITSUDO: coreNationBuilder(`Akitsudan Empire`, EMBLEM[`./emblems/Akitsudo.webp`], ``, [`Akitsudo`, `Empire`]),
  ALLAIRE: coreNationBuilder(`Allairan Empire`, EMBLEM[`./emblems/Allaire.webp`], ``, [`Allaire`, `Empire`]),
  ARCADIA_ASSERE: coreNationBuilder(`Assere`, EMBLEM[`./emblems/ArcadiaAssere.webp`], ``, [``, `City State`]),
  ARCADIA_CERESSE: coreNationBuilder(`Ceresse`, EMBLEM[`./emblems/ArcadiaCeresse.webp`], ``, [``, `City State`]),
  ARCADIA_COMINO: coreNationBuilder(`Comino`, EMBLEM[`./emblems/ArcadiaComino.webp`], ``, [``, `City State`]),
  ARCADIA: coreNationBuilder(`Republic of Arcadia`, EMBLEM[`./emblems/Arcadia.webp`], ``, [``, `Empire`]),
  BRYTTH_ALBION: coreNationBuilder(`Albion`, EMBLEM[`./emblems/Brytth.webp`], ``, [``, `Petty Kingdom`]),
  BRYTTH_CAMBRIA: coreNationBuilder(`Cambria`, EMBLEM[`./emblems/Brytth.webp`], ``, [``, `Petty Kingdom`]),
  BRYTTH: coreNationBuilder(`Kingdom of Brytth`, EMBLEM[`./emblems/Brytth.webp`], ``, [`Brytth`, `Kingdom`]),
  CALETH: coreNationBuilder(`Calethean Empire`, EMBLEM[`./emblems/Caleth.webp`], ``, [`Caleth`, `Empire`]),
  CARNA: coreNationBuilder(`Senātus Populusque Cārnānus`, EMBLEM[`./emblems/Carna.webp`], ``, [`Carna`, `Empire`]),
  DROW: coreNationBuilder(`Drow Empire`, EMBLEM[`./emblems/Drow.webp`], ``, [`Drow`, `Empire`,
  ]),
  FOMOIRE_ANUNDING: coreNationBuilder(`Clan Anunding`, EMBLEM[`./emblems/Fomoire.webp`], ``, [``, `Tribal`]),
  FOMOIRE_CIONAOITH: coreNationBuilder(`Clan Cionaoith`, EMBLEM[`./emblems/Fomoire.webp`], ``, [``, `Tribal`]),
  FOMOIRE_HADHOGUNG: coreNationBuilder(`Clan Hadhogung`, EMBLEM[`./emblems/Fomoire.webp`], ``, [``, `Tribal`]),
  FOMOIRE_HERMUNDING: coreNationBuilder(`Clan Hermunding`, EMBLEM[`./emblems/Fomoire.webp`], ``, [``, `Tribal`]),
  FOMOIRE_MORTUNG: coreNationBuilder(`Clan Mortung`, EMBLEM[`./emblems/Fomoire.webp`], ``, [``, `Tribal`]),
  FOMOIRE_MUIREANN: coreNationBuilder(`Clan Muireann`, EMBLEM[`./emblems/Fomoire.webp`], ``, [``, `Tribal`]),
  FOMOIRE_OTRYGGUND: coreNationBuilder(`Clan Otryggund`, EMBLEM[`./emblems/Fomoire.webp`], ``, [``, `Tribal`]),
  FOMOIRE_YRIING: coreNationBuilder(`Clan Yriing`, EMBLEM[`./emblems/Fomoire.webp`], ``, [``, `Tribal`]),
  FOMOIRE: coreNationBuilder(`Fomorian Clans`, EMBLEM[`./emblems/Fomoire.webp`], ``, [`Fomoire`, `Kingdom`]),
  GOBLIN_EMPIRE_ERD: coreNationBuilder(`Zrol Erd`, EMBLEM[`./emblems/GoblinErd.webp`], ``, [``, `Tribal`]),
  GOBLIN_EMPIRE_JAAX: coreNationBuilder(`Ferd Jaax`, EMBLEM[`./emblems/GoblinJaax.webp`], ``, [``, `Tribal`]),
  GOBLIN_EMPIRE_KAAK: coreNationBuilder(`Zrol Kaak`, EMBLEM[`./emblems/GoblinKaak.webp`], ``, [``, `Tribal`]),
  GOBLIN_EMPIRE_KLIR: coreNationBuilder(`Ferd Klir`, EMBLEM[`./emblems/GoblinKlir.webp`], ``, [``, `Tribal`]),
  GOBLIN_EMPIRE_SRALB: coreNationBuilder(`Zrol Sralb`, EMBLEM[`./emblems/GoblinSralb.webp`], ``, [``, `Tribal`]),
  GOBLIN_EMPIRE: coreNationBuilder(`Goblin Empire`, EMBLEM[`./emblems/GoblinKaak.webp`], ``, [``, `Empire`]),
  GOL: coreNationBuilder(`Gol Clans`, EMBLEM[`./emblems/Gol.webp`], ``, [``, `Kingdom`,]),
  KEBECH: coreNationBuilder(`Kebech`, EMBLEM[`./emblems/Kebech.webp`], ``, [`Kebech`, `Empire`,]),
  KRASAHEIM: coreNationBuilder(`Isle of Krasaheim`, EMBLEM[`./emblems/Krasaheim.webp`], ``, [``, `Kingdom`]),
  MESSAR_ATREA: coreNationBuilder(`Atrea`, EMBLEM[`./emblems/Messar.webp`], ``, [``, `Petty Kingdom`]),
  MESSAR_BABACA: coreNationBuilder(`Babaca`, EMBLEM[`./emblems/Messar.webp`], ``, [``, `Petty Kingdom`]),
  MESSAR_BRECCA: coreNationBuilder(`Brecca`, EMBLEM[`./emblems/MessarBrecca.webp`], ``, [``, `Petty Kingdom`]),
  MESSAR_ETHYE: coreNationBuilder(`Ethye`, EMBLEM[`./emblems/MessarEthye.webp`], ``, [``, `Petty Kingdom`]),
  MESSAR_MAARRA: coreNationBuilder(`Maarra`, EMBLEM[`./emblems/Messar.webp`], ``, [``, `Petty Kingdom`]),
  MESSAR_NEAXE: coreNationBuilder(`Neaxe`, EMBLEM[`./emblems/MessarNeaxe.webp`], ``, [``, `Petty Kingdom`]),
  MESSAR_SEAXE: coreNationBuilder(`Seaxe`, EMBLEM[`./emblems/MessarSeaxe.webp`], ``, [``, `Petty Kingdom`]),
  MESSAR_SUDAR: coreNationBuilder(`Sudar`, EMBLEM[`./emblems/Messar.webp`], ``, [``, `Petty Kingdom`]),
  MESSAR_TRIFE: coreNationBuilder(`Trife`, EMBLEM[`./emblems/MessarTrife.webp`], ``, [``, `Petty Kingdom`]),
  MESSAR_WEAXE: coreNationBuilder(`Weaxe`, EMBLEM[`./emblems/MessarWeaxe.webp`], ``, [``, `Petty Kingdom`]),
  MESSAR: coreNationBuilder(`Messan Heptarchy`, EMBLEM[`./emblems/Messar.webp`], `May - sar`, [`Messar`, `Kingdom`]),
  MYCENAEAN_LEAGUE_AEGINA: coreNationBuilder(`Aegina Polis`, EMBLEM[`./emblems/MycenaeanLeagueAegina.webp`], ``, [`Mycenae`, `City State`]),
  MYCENAEAN_LEAGUE_ELAE: coreNationBuilder(`Elae Polis`, EMBLEM[`./emblems/MycenaeanLeagueElae.webp`], ``, [`Mycenae`, `City State`]),
  MYCENAEAN_LEAGUE_KNOSSOS: coreNationBuilder(`Knossos Polis`, EMBLEM[`./emblems/MycenaeanLeagueKnossos.webp`], ``, [`Mycenae`, `City State`]),
  MYCENAEAN_LEAGUE_LACONIA: coreNationBuilder(`Laconia Polis`, EMBLEM[`./emblems/MycenaeanLeagueLaconia.webp`], ``, [`Mycenae`, `City State`]),
  MYCENAEAN_LEAGUE_LERNA: coreNationBuilder(`Lerna Polis`, EMBLEM[`./emblems/MycenaeanLeagueLerna.webp`], ``, [`Mycenae`, `City State`]),
  MYCENAEAN_LEAGUE_MYCENAE: coreNationBuilder(`Mycenae Polis`, EMBLEM[`./emblems/MycenaeanLeagueMycenae.webp`], ``, [`Mycenae`, `City State`]),
  MYCENAEAN_LEAGUE: coreNationBuilder(`Mycenaean League`, EMBLEM[`./emblems/MycenaeanLeague.webp`], ``, [`Mycenae`, `Kingdom`]),
  NAGRA: coreNationBuilder(`Nagra`, EMBLEM[`./emblems/Nagra.webp`], ``, [`Nagra`, `Empire`,
  ]),
  SYLVAN_ORCHID: coreNationBuilder(`Orchid Hall`, EMBLEM[`./emblems/Sylvan.webp`], ``, [`Sylvan`, `City State`]),
  SYLVAN: coreNationBuilder(`Sylvan Realms`, EMBLEM[`./emblems/Sylvan.webp`], ``, [`Sylvan`, `Kingdom`]),
  TUATHA_DE_DANANN: coreNationBuilder(`Tuatha de Danann`, EMBLEM[`./emblems/TuathaDeDanann.webp`], ``, [`Tuatha`, `Kingdom`]),
};

export const CITY_Core = {
  MESSAR_MESSACT: coreLocationBuilder(`Messact`, `May-sack-t`, [``]),
};

export const CREATURE_Core = {
  ...CREATURE_Core_Fiends,
  ...CREATURE_Core_Humanoids,
  ...CREATURE_Core_Humans,
  ...CREATURE_Core_Monsters,
  ...CREATURE_Core_Undead,
  BLACK_SHUCK: coreCreatureBuilder(`Black Shuck`, `Fey`, `Black Shuck`, ``, [], [`Fey`, `Black Shuck`]), //Todo
  CU_SIDHE: coreCreatureBuilder(`Cú Sídhe`, `Fey`, `Cú Sídhe`, ``, [], [`Fey`, `Cú Sídhe`]), //Todo
  DRAGON_HIGH_ANCIENT: coreCreatureBuilder(`Ancient High Dragon`, `Dragon`, `High Dragon`, ``, [], [`Dragon`, `High Dragon`]), //Todo
  DRYAD_YOUNG: coreCreatureBuilder(`Young Dryad`, `Fey`, `Dryad`, ``, [``, `Treeform`], [`Fey`, `Dryad`]), //Todo
  // DRYAD_YOUNG_TREEFORM: coreCreatureBuilder(`Young Dryad`, `Fey`, `Dryad`, ``, [`Treeform`], [`Fey`, `Dryad`]),                //Todo
  NGIN_VANGUARD: coreCreatureBuilder(`Vanguard Mk XIII`, `Construct`, `Ngin`, ``, [], [`Construct`, `Ngin`]), //Todo
  ERINYS: coreCreatureBuilder(`Erinys`, `Celestial`, `Erinys`, ``, [], [`Celestial`, `Erinys`]), //Todo
  FOMORIAN: coreCreatureBuilder(`Fomorian`, `Giant`, `Fomorian`, ``, [], [`Giant`, `Fomorian`]), //Todo
  GIANT: coreCreatureBuilder(`Giant`, `Giant`, `Giant`, ``, [], [`Giant`]), //Todo
  GREY_TROLL: coreCreatureBuilder(`Grey Troll`, `Giant`, `Troll`, ``, [], [`Giant`, `Troll`]), //Todo
  GRYPHON: coreCreatureBuilder(`Gryphon`, `Monstrosity`, `Gryphon`, ``, [], [`Monstrosity`, `Gryphon`]), //Todo
  OGRE: coreCreatureBuilder(`Ogre`, `Giant`, `Ogre`, ``, [], [`Giant`, `Ogre`]), //Todo
  OLD_ONE_DEVOURER: coreCreatureBuilder(`Devourer`, `Aberration`, `Old One`, ``, [], [`Aberration`, `Old One`]), //Todo
  OLD_ONE_DWELLER: coreCreatureBuilder(`Dweller`, `Aberration`, `Old One`, ``, [], [`Aberration`, `Old One`]), //Todo
  OLD_ONE_PURSUER: coreCreatureBuilder(`Pursuer`, `Aberration`, `Old One`, ``, [], [`Aberration`, `Old One`]), //Todo
  OLD_ONE_WATCHER: coreCreatureBuilder(`Watcher`, `Aberration`, `Old One`, ``, [], [`Aberration`, `Old One`]), //Todo
  ONI: coreCreatureBuilder(`Oni`, `Giant`, `Ogre`, ``, [], [`Giant`, `Ogre`]), //Todo
  SCOURGE_BEHEMOTH: coreCreatureBuilder(`Scourge Behemoth`, `Aberration`, `Scourge`, ``, [], [`Aberration`, `Scourge`]), //Todo
  SCOURGE_CRAWLER: coreCreatureBuilder(`Scourge Crawler`, `Aberration`, `Scourge`, ``, [], [`Aberration`, `Scourge`]), //Todo
  SCOURGE_DRAGON: coreCreatureBuilder(`Scourge Dragon`, `Aberration`, `Scourge`, ``, [], [`Aberration`, `Scourge`]), //Todo
  SCOURGE_EMPRESS: coreCreatureBuilder(`Scourge Empress`, `Aberration`, `Scourge`, ``, [], [`Aberration`, `Scourge`]), //Todo
  SCOURGE_HIVE_QUEEN: coreCreatureBuilder(`Scourge Hive Queen`, `Aberration`, `Scourge`, ``, [], [`Aberration`, `Scourge`]), //Todo
  SCOURGE_HUNTER: coreCreatureBuilder(`Scourge Hunter`, `Aberration`, `Scourge`, ``, [], [`Aberration`, `Scourge`]), //Todo
  SCOURGE_QUEEN: coreCreatureBuilder(`Scourge Queen`, `Aberration`, `Scourge`, ``, [], [`Aberration`, `Scourge`]), //Todo
  SCOURGE_SPIDER_SWARM: coreCreatureBuilder(`Scourge Spider Swarm`, `Aberration`, `Scourge`, ``, [], [`Aberration`, `Scourge`, `Swarm`]), //Todo
  SCOURGE_SPIDER: coreCreatureBuilder(`Scourge Spider`, `Aberration`, `Scourge`, ``, [], [`Aberration`, `Scourge`]), //Todo
  SCOURGE_WARRIOR: coreCreatureBuilder(`Scourge Warrior`, `Aberration`, `Scourge`, ``, [], [`Aberration`, `Scourge`]), //Todo
  VALKYRIE: coreCreatureBuilder(`Valkyrie`, `Celestial`, `Valkyrie`, ``, [], [`Celestial`, `Valkyrie`]), //Todo
};

export const ARMOURY_Core = {
  ...MAGIC_ITEMS_Core_Armour,
  ...MAGIC_ITEMS_Core_Weapons,
  ...MAGIC_ITEMS_Core_WondrousItems,
};

export const ORGANISATION_Core = {
  SWORDS_OF_DAMOCLES: coreOrganisationBuilder(`Swords of Damocles`, [``]),
  SHARDS_OF_DAMOCLES: coreOrganisationBuilder(`Shards of Damocles`, [``]),
  HARLEQUINS_REVELRY: coreOrganisationBuilder(`Harlequin's Revelry`, [``]),
  KNIGHT_COMMANDO: coreOrganisationBuilder(`Knight Commando`, [``]),
  VINDICTIS: coreOrganisationBuilder(`Vindictis`, [``]),
  PROMETHEUS_INITIATIVE: coreOrganisationBuilder(`Prometheus Initiative`, [``]),
  REMNANT: coreOrganisationBuilder(`The Remnant`, [``]),
  LEGION: coreOrganisationBuilder(`The Legion`, [``]),
  MESSAN_REBELLION: coreOrganisationBuilder(`Messan Rebellion`, [``]),
  ZEALOTS: coreOrganisationBuilder(`Zealots`, [``]),
};

export const RELIGION_Core = {
  DRACONIC_PANTHEON: coreReligionBuilder(`Draconic Pantheon`, [``]),
};

export const SPECIES_Core = {
  HUMAN: coreSpeciesBuilder(`Human`, [``]),
  ELF: coreSpeciesBuilder(`Elf`, [``]),
  GOBLIN: coreSpeciesBuilder(`Goblin`, [``]),
  VAMPIRE: coreSpeciesBuilder(`Vampire`, [``]),
  HIGH_DRAGON: coreSpeciesBuilder(`High dragon`, [``]),
};

export const CHARACTER_Core = {
  ABADDON: coreCharacterBuilder(`Abaddon`, ``, [`Demon`], ``),
  ABRAHAM_VAN_HELSING: coreCharacterBuilder(`Abraham`, `Van Helsing`, [`Human`, `Allaire`], ``),
  ACHILLES: coreCharacterBuilder(`Achilles`, ``, [`Human`, `Mycenae`], ``),
  ALEC: coreCharacterBuilder(`Alec`, ``, [`Human`, `Messar`], `Alec the Valkyr`),
  ANEURIN: coreCharacterBuilder(`Aneurin`, ``, [`Human`, `Damocles`], ``),
  ANUBIS: coreCharacterBuilder(`Anubis`, ``, [`Inpw`, `Kebech`], ``),
  ARLYSS_KNIGHT: coreCharacterBuilder(`Arlyss`, `Knight`, [`Human`, `Dragon`, `Damocles`], `Arr-lys nigh-t`),
  ARTHUR_PENDRAGON: coreCharacterBuilder(`Arthur`, `Pendragon`, [`Human`, `Brytth`], ``),
  ASH: coreCharacterBuilder(`Ash`, ``, [`Dryad`], ``),
  AURELIA: coreCharacterBuilder(`Aurelia`, ``, [`Dragon`, `Legion`], ``),
  BALOR: coreCharacterBuilder(`Balor`, ``, [`Human`, `Fomoire`], ``),
  BARDR: coreCharacterBuilder(`Bárðr`, ``, [`Dwarf`], `Par-wer`),
  BEHEMOTH: coreCharacterBuilder(`Behemoth`, ``, [`Primordial`], ``),
  CERBERUS: coreCharacterBuilder(`Cerberus`, ``, [`Human`, `Vampire`, `Vindictis`, `Legion`], ``),
  DAG_INN_VAENI: coreCharacterBuilder(`Dag`, `Inn Væni`, [`Human`, `Krasaheim`], `Dar-g inn `),
  ELIJAH_SPENCER: coreCharacterBuilder(`Elijah`, `Spencer`, [`Human`, `Vindictis`], ``),
  ELM: coreCharacterBuilder(`Elm`, ``, [`Dryad`], ``),
  ELVA_KNIGHT: coreCharacterBuilder(`Elva`, `Knight`, [`Human`, `Legion`], ``),
  EMRY_BARNETT: coreCharacterBuilder(`Emry`, `Barnett`, [`Human`, `Legion`], ``),
  ESSYLT: coreCharacterBuilder(`Essylt`, ``, [`Scourge`, `Legion`], ``),
  EZRA: coreCharacterBuilder(`Ezra`, ``, [`Elf`, `Damocles`], ``),
  FIADH_O_CIONAOITH: coreCharacterBuilder(`Fiadh`, `Ó Cionaoith`, [`Human`, `Fomoire`], `fee-a oh key-uh-nee`),
  FORGOTTEN_KING: coreCharacterBuilder(`Forgotten King`, ``, [`Demon`], ``),
  GUAIRE_O_RIAGAIN: coreCharacterBuilder(`Guaire`, `Ó Riagáin`, [`Human`, `Fomoire`], `Goo-ore oh Ree-gone`),
  ICARUS: coreCharacterBuilder(`Icarus`, ``, [`Human`, `Legion`], ``),
  IRA: coreCharacterBuilder(`Ira`, ``, [`Dragon`, `Allaire`], ``),
  IRIS_VON_RAVENSKRIEG: coreCharacterBuilder(`Iris`, `Von Ravenskrieg`, [`Human`, `Arcadia`], ``),
  KATHLEEN_SPENCER: coreCharacterBuilder(`Kathleen`, `Spencer`, [`Human`, `Damocles`], ``),
  KITAI_MASAMUNE: coreCharacterBuilder(`Kitai`, `Masamune`, [`Human`, `Akitsudo`], ``), //(鍛代 雅志)
  LEALIAVAN_HELSING: coreCharacterBuilder(`Lealiavan`, `Helsing`, [`Human`, `Allaire`], ``),
  LEGION: coreCharacterBuilder(`Legion`, ``, [`Demon`], ``),
  LETA: coreCharacterBuilder(`Leta`, ``, [`Dragon`, `Messar`], ``),
  LEVIATHAN: coreCharacterBuilder(`Leviathan`, ``, [`Primordial`], ``),
  LILITH_FAIRE: coreCharacterBuilder(`Lilith`, `Faire`, [`Elf`, `Messar`], ``),
  LYRA_VITAE: coreCharacterBuilder(`Lyra`, `Vitae`, [`Dragon`, `Messar`], ``),
  MAGNUS: coreCharacterBuilder(`Magnus`, ``, [`Demon`], ``),
  BRYTTHANICUS: coreCharacterBuilder(`Brytthanicus`, ``, [`Human`, `Carne`], ``),
  MEDEA: coreCharacterBuilder(`Medea`, ``, [`Human`, `Mycenae`], ``),
  MORDRED: coreCharacterBuilder(`Mordred`, ``, [`Human`, `Vampire`, `Brytth`, `Black Knight`], ``),
  MORGAN_LE_FAY: coreCharacterBuilder(`Morgan`, `Le Fay`, [`Human`, `Brytth`], ``),
  MORRIGAN: coreCharacterBuilder(`Morrigan`, ``, [`Demon`], ``),
  NEMED: coreCharacterBuilder(`Nemed`, ``, [`Human`, `Fomoire`], ``),
  NIAMH: coreCharacterBuilder(`Niamh`, ``, [`Fairy`, `Sylvan`], ``),
  NIMUE: coreCharacterBuilder(`Nimue`, ``, [`Brytth`], ``),
  NOLA_THESOTI: coreCharacterBuilder(`Nola`, `Thesoti`, [`Human`, `Messar`], ``),
  NOTT_INN_RAUDI: coreCharacterBuilder(`Nótt`, `Inn Rauði`, [`Human`, `Krasaheim`], `Nor-t inn Row-see`),
  OAK: coreCharacterBuilder(`Oak`, ``, [`Dryad`], ``),
  OBERON_VALERIAN: coreCharacterBuilder(`Oberon`, `Valerian`, [`Human`, `Dragon`, `Vindictis`], ``),
  PAX: coreCharacterBuilder(`Pax`, ``, [`Human`, `Werewolf`, `Messar`], ``),
  REAPER: coreCharacterBuilder(`Reaper`, ``, [`Legion`], ``),
  RED: coreCharacterBuilder(`Red`, ``, [`Elf`, `Red Stags`], ``),
  SCATHACH: coreCharacterBuilder(`Scáthach`, ``, [`Elf`, `Sylvan`], ``),
  SETT: coreCharacterBuilder(`Sett`, ``, [`Dragon`, `Kebech`], ``),
  TAXMAN: coreCharacterBuilder(`TAXMAN`, ``, [`Human`, `Messar`], ``),
  THORN: coreCharacterBuilder(`Thorn`, ``, [`Dryad`], ``),
  THRESTROM: coreCharacterBuilder(`Threstrom`, ``, [`Human`, `Gol`], ``),
  THULKATAR: coreCharacterBuilder(`Thul"Katar`, ``, [`Orc`], ``),
  TRENTIN_FULLERTON: coreCharacterBuilder(`Trentin`, `Fullerton`, [`Human`, `Vindictis`], ``),
  WRATH: coreCharacterBuilder(`Wrath`, ``, [`Demon`], ``),
  ZUBEIR_ALKAS: coreCharacterBuilder(`Zubeir`, `Alkas`, [`Human`, `Fomoire`], ``),
  ZYZ: coreCharacterBuilder(`Zyz`, ``, [`Primordial`], ``),
  MORRIGAN_BADB: coreCharacterBuilder(`Badb`, `Morrigan`, [`Primordial`], ``),
  MORRIGAN_MACHA: coreCharacterBuilder(`Macha`, `Morrigan`, [`Primordial`], ``),
  MORRIGAN_NEMAIN: coreCharacterBuilder(`Nemain`, `Morrigan`, [`Primordial`], ``),
  TWIG: coreCharacterBuilder(`Twig`, ``, [`Goblin`], ``),
};
