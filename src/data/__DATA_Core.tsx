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
import { MAGIC_ITEMS_Core_WondrousItems } from './armouryMagic/core/wondrousItems';
import { MAGIC_ITEMS_Core_Weapons } from './armouryMagic/core/weapons';
import { MAGIC_ITEMS_Core_Armour } from './armouryMagic/core/armour';
import { NATION_Core_ElvenRealms, NATION_Core_GoblinRealms, NATION_Core_HumanRealms } from './nations/nationList/humanNations';
import { ORGANISATION_Core_organisations } from './organisations/organisations';
import { CITY_Core_Human } from './locations/humanCities';
import { LOCATION_Core_Mystical_Sites } from './locations/mysticalSites';

export const NATION_Core = {
  ...NATION_Core_HumanRealms,
  ...NATION_Core_ElvenRealms,
  ...NATION_Core_GoblinRealms,
};

export const CITY_Core = {
  ...CITY_Core_Human,
};

export const LOCATION_Core ={
  ...LOCATION_Core_Mystical_Sites,
}

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
  ...ORGANISATION_Core_organisations,
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
