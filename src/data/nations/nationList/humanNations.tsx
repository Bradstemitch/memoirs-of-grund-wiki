import { EMBLEM } from '../../../images/_images';
import { coreNationBuilder } from '../../../utils/builders';

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

const ARCADIA = {
    ARCADIA_ASSERE: coreNationBuilder(`Assere`, EMBLEM[`./emblems/ArcadiaAssere.webp`], ``, [``, `City State`]),
    ARCADIA_CERESSE: coreNationBuilder(`Ceresse`, EMBLEM[`./emblems/ArcadiaCeresse.webp`], ``, [``, `City State`]),
    ARCADIA_COMINO: coreNationBuilder(`Comino`, EMBLEM[`./emblems/ArcadiaComino.webp`], ``, [``, `City State`]),
}

const BRYTTH = {
    BRYTTH_ALBION: coreNationBuilder(`Albion`, EMBLEM[`./emblems/Brytth.webp`], ``, [``, `Petty Kingdom`]),
    BRYTTH_CAMBRIA: coreNationBuilder(`Cambria`, EMBLEM[`./emblems/Brytth.webp`], ``, [``, `Petty Kingdom`]),
    BRYTTH_GLYNDEN: coreNationBuilder(`Glynden`, EMBLEM[`./emblems/Brytth.webp`], ``, [``, `Petty Kingdom`]),
}

const FOMOIRE = {
    FOMOIRE_ANUNDING: coreNationBuilder(`Clan Anunding`, EMBLEM[`./emblems/Fomoire.webp`], ``, [``, `Tribal`]),
    FOMOIRE_CIONAOITH: coreNationBuilder(`Clan Cionaoith`, EMBLEM[`./emblems/Fomoire.webp`], ``, [``, `Tribal`]),
    FOMOIRE_HADHOGUNG: coreNationBuilder(`Clan Hadhogung`, EMBLEM[`./emblems/Fomoire.webp`], ``, [``, `Tribal`]),
    FOMOIRE_HERMUNDING: coreNationBuilder(`Clan Hermunding`, EMBLEM[`./emblems/Fomoire.webp`], ``, [``, `Tribal`]),
    FOMOIRE_MORTUNG: coreNationBuilder(`Clan Mortung`, EMBLEM[`./emblems/Fomoire.webp`], ``, [``, `Tribal`]),
    FOMOIRE_MUIREANN: coreNationBuilder(`Clan Muireann`, EMBLEM[`./emblems/Fomoire.webp`], ``, [``, `Tribal`]),
    FOMOIRE_OTRYGGUND: coreNationBuilder(`Clan Otryggund`, EMBLEM[`./emblems/Fomoire.webp`], ``, [``, `Tribal`]),
    FOMOIRE_YRIING: coreNationBuilder(`Clan Yriing`, EMBLEM[`./emblems/Fomoire.webp`], ``, [``, `Tribal`]),
}

const GOL = {
    GOL_CRAB: coreNationBuilder(`Golscrab`, EMBLEM[`./emblems/Gol.webp`], ``, [``, `Tribal`]),
    GOL_YAK: coreNationBuilder(`Golyak`, EMBLEM[`./emblems/Gol.webp`], ``, [``, `Tribal`]),
}

const KRASAHEIM = {
    KRASAHEIM_TELLAND: coreNationBuilder(`Clan Telland`, EMBLEM[`./emblems/Krasaheim.webp`], ``, [``, `Petty Kingdom`]),
    KRASAHEIM_KNAY: coreNationBuilder(`Clan Knay`, EMBLEM[`./emblems/Krasaheim.webp`], ``, [``, `Petty Kingdom`]),
}

const MESSAR = {
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
}

const MYCENAEAN_LEAGUE = {
    MYCENAEAN_LEAGUE_AEGINA: coreNationBuilder(`Aegina Polis`, EMBLEM[`./emblems/MycenaeanLeagueAegina.webp`], ``, [`Mycenae`, `City State`]),
    MYCENAEAN_LEAGUE_ELAE: coreNationBuilder(`Elae Polis`, EMBLEM[`./emblems/MycenaeanLeagueElae.webp`], ``, [`Mycenae`, `City State`]),
    MYCENAEAN_LEAGUE_KNOSSOS: coreNationBuilder(`Knossos Polis`, EMBLEM[`./emblems/MycenaeanLeagueKnossos.webp`], ``, [`Mycenae`, `City State`]),
    MYCENAEAN_LEAGUE_LACONIA: coreNationBuilder(`Laconia Polis`, EMBLEM[`./emblems/MycenaeanLeagueLaconia.webp`], ``, [`Mycenae`, `City State`]),
    MYCENAEAN_LEAGUE_LERNA: coreNationBuilder(`Lerna Polis`, EMBLEM[`./emblems/MycenaeanLeagueLerna.webp`], ``, [`Mycenae`, `City State`]),
    MYCENAEAN_LEAGUE_MYCENAE: coreNationBuilder(`Mycenae Polis`, EMBLEM[`./emblems/MycenaeanLeagueMycenae.webp`], ``, [`Mycenae`, `City State`]),
}

export const NATION_Core_HumanRealms = {
    ACRE: coreNationBuilder(`Bishopric of Acre`, EMBLEM[`./emblems/ArcadiaAcre.webp`], ``, [`Acre`, `Kingdom`]),
    AKITSUDO: coreNationBuilder(`Akitsudan Empire`, EMBLEM[`./emblems/Akitsudo.webp`], ``, [`Akitsudo`, `Empire`, `Human Realm`]),
    ALLAIRE: coreNationBuilder(`Allairan Empire`, EMBLEM[`./emblems/Allaire.webp`], ``, [`Allaire`, `Empire`, `Human Realm`]),
    ARCADIA: coreNationBuilder(`Republic of Arcadia`, EMBLEM[`./emblems/Arcadia.webp`], ``, [``, `Empire`, `Human Realm`]),
    ...ARCADIA,
    BRYTTH: coreNationBuilder(`Kingdom of Brytth`, EMBLEM[`./emblems/Brytth.webp`], ``, [`Brytth`, `Kingdom`, `Human Realm`]),
    ...BRYTTH,
    CALETH: coreNationBuilder(`Calethean Empire`, EMBLEM[`./emblems/Caleth.webp`], ``, [`Caleth`, `Empire`, `Human Realm`]),
    CARNA: coreNationBuilder(`Senātus Populusque Cārnānus`, EMBLEM[`./emblems/Carna.webp`], ``, [`Carna`, `Empire`, `Human Realm`]),
    FOMOIRE: coreNationBuilder(`Fomorian Clans`, EMBLEM[`./emblems/Fomoire.webp`], ``, [`Fomoire`, `Kingdom`, `Human Realm`]),
    ...FOMOIRE,
    GOL: coreNationBuilder(`Gol Clans`, EMBLEM[`./emblems/Gol.webp`], ``, [``, `Kingdom`, `Human Realm`]),
    ...GOL,
    KEBECH: coreNationBuilder(`Kebech`, EMBLEM[`./emblems/Kebech.webp`], ``, [`Kebech`, `Empire`, `Human Realm`]),
    KRASAHEIM: coreNationBuilder(`Isle of Krasaheim`, EMBLEM[`./emblems/Krasaheim.webp`], ``, [``, `Kingdom`, `Human Realm`]),
    ...KRASAHEIM,
    MESSAR: coreNationBuilder(`Messan Heptarchy`, EMBLEM[`./emblems/Messar.webp`], `May - sar`, [`Messar`, `Kingdom`, `Human Realm`]),
    ...MESSAR,
    MYCENAEAN_LEAGUE: coreNationBuilder(`Mycenaean League`, EMBLEM[`./emblems/MycenaeanLeague.webp`], ``, [`Mycenae`, `Kingdom`, `Human Realm`]),
    ...MYCENAEAN_LEAGUE,
    NAGRA: coreNationBuilder(`Nagra`, EMBLEM[`./emblems/Nagra.webp`], ``, [`Nagra`, `Empire`, `Human Realm`]),
    TUATHA_DE_DANANN: coreNationBuilder(`Tuatha de Danann`, EMBLEM[`./emblems/TuathaDeDanann.webp`], ``, [`Tuatha`, `Kingdom`, `Human Realm`]),
    DUREGAR: coreNationBuilder(`Duregar`, EMBLEM[`./emblems/TuathaDeDanann.webp`], ``, [`Duregar`, `Kingdom`, `Dwarven Realm`]),
    URUK: coreNationBuilder(`Uruk`, EMBLEM[`./emblems/TuathaDeDanann.webp`], ``, [`Uruk`, `Kingdom`, `Orc Realm`]),
    STRIX: coreNationBuilder(`Strix`, EMBLEM[`./emblems/TuathaDeDanann.webp`], ``, [`Strix`, `City State`, `Minor Realm`]),
};

export const NATION_Core_ElvenRealms = {
    DROW: coreNationBuilder(`Drow Empire`, EMBLEM[`./emblems/Drow.webp`], ``, [`Drow`, `Empire`, 'Elven Realm',]),
    SYLVAN: coreNationBuilder(`Sylvan Realms`, EMBLEM[`./emblems/Sylvan.webp`], ``, [`Sylvan`, `Kingdom`, 'Elven Realm']),
    SYLVAN_ORCHID: coreNationBuilder(`Orchid Hall`, EMBLEM[`./emblems/Sylvan.webp`], ``, [`Sylvan`, `City State`]),
}

export const NATION_Core_GoblinRealms = {
    GOBLIN_EMPIRE_ERD: coreNationBuilder(`Zrol Erd`, EMBLEM[`./emblems/GoblinErd.webp`], ``, [``, `Tribal`, `Goblin Realm`]),
    GOBLIN_EMPIRE_JAAX: coreNationBuilder(`Ferd Jaax`, EMBLEM[`./emblems/GoblinJaax.webp`], ``, [``, `Tribal`, `Goblin Realm`]),
    GOBLIN_EMPIRE_KAAK: coreNationBuilder(`Zrol Kaak`, EMBLEM[`./emblems/GoblinKaak.webp`], ``, [``, `Tribal`, `Goblin Realm`]),
    GOBLIN_EMPIRE_KLIR: coreNationBuilder(`Ferd Klir`, EMBLEM[`./emblems/GoblinKlir.webp`], ``, [``, `Tribal`, `Goblin Realm`]),
    GOBLIN_EMPIRE_SRALB: coreNationBuilder(`Zrol Sralb`, EMBLEM[`./emblems/GoblinSralb.webp`], ``, [``, `Tribal`, `Goblin Realm`]),
}