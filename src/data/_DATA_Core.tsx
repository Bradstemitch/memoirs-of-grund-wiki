import { coreCharacterBuilder, coreLocationBuilder, coreNationBuilder, coreReligionBuilder } from "../utils/builders"
import { EMBLEM } from "./emblems"

export const NATION_Core = {
    "ACRE": coreNationBuilder('Acre', EMBLEM.ACRE, 'Acre', ['Acre']),
    "AKITSUDO": coreNationBuilder('Akitsudo', EMBLEM.ACRE, 'Acre', ['Acre']),
    "ALLAIRE": coreNationBuilder('Allairan Empire', EMBLEM.ACRE, 'Acre', ['Acre']),
    "ARCADIA": coreNationBuilder('Republic of Arcadia', EMBLEM.ACRE, 'Acre', ['Acre']),
    "ARCADIA_ASSERE": coreNationBuilder('Assere', EMBLEM.ACRE, 'Acre', ['Acre']),
    "ARCADIA_CERESSE": coreNationBuilder('Ceresse', EMBLEM.ACRE, 'Acre', ['Acre']),
    "ARCADIA_COMINO": coreNationBuilder('Comino', EMBLEM.ACRE, 'Acre', ['Acre']),
    "BRYTTH": coreNationBuilder('Brytth', EMBLEM.ACRE, 'Acre', ['Acre']),
    "BRYTTH_ALBION": coreNationBuilder('Albion', EMBLEM.ACRE, 'Acre', ['Acre']),
    "BRYTTH_CAMBRIA": coreNationBuilder('Cambria', EMBLEM.ACRE, 'Acre', ['Acre']),
    "CALETH": coreNationBuilder('Caleth', EMBLEM.ACRE, 'Acre', ['Acre']),
    "CARNA": coreNationBuilder('Senātus Populusque Cārnānus', EMBLEM.ACRE, 'Acre', ['Acre']),
    "FOMOIRE": coreNationBuilder('Fomoire', EMBLEM.ACRE, 'Acre', ['Acre']),
    "FOMOIRE_ANUNDING": coreNationBuilder('Anunding', EMBLEM.ACRE, 'Acre', ['Acre']),
    "FOMOIRE_CIONAOITH": coreNationBuilder('Cionaoith', EMBLEM.ACRE, 'Acre', ['Acre']),
    "FOMOIRE_HADHOGUNG": coreNationBuilder('Hadhogung', EMBLEM.ACRE, 'Acre', ['Acre']),
    "FOMOIRE_HERMUNDING": coreNationBuilder('Hermunding', EMBLEM.ACRE, 'Acre', ['Acre']),
    "FOMOIRE_MORTUNG": coreNationBuilder('Mortung', EMBLEM.ACRE, 'Acre', ['Acre']),
    "FOMOIRE_MUIREANN": coreNationBuilder('Muireann', EMBLEM.ACRE, 'Acre', ['Acre']),
    "FOMOIRE_OTRYGGUND": coreNationBuilder('Otryggund', EMBLEM.ACRE, 'Acre', ['Acre']),
    "FOMOIRE_YRIING": coreNationBuilder('Yriing', EMBLEM.ACRE, 'Acre', ['Acre']),
    "GOL": coreNationBuilder('Gol Clans', EMBLEM.ACRE, 'Acre', ['Acre']),
    "KRASAHEIM": coreNationBuilder('Isle of Krasaheim', EMBLEM.ACRE, 'Acre', ['Acre']),
    "MESSAR": coreNationBuilder('Messan Heptarchy', EMBLEM.MESSAR, 'May - sar', ['Messar']),
    "MESSAR_ATREA": coreNationBuilder('Ethye', EMBLEM.MESSAR, 'Acre', ['Acre']),
    "MESSAR_BABACA": coreNationBuilder('Ethye', EMBLEM.ACRE, 'Acre', ['Acre']),
    "MESSAR_BRECCA": coreNationBuilder('Brecca', EMBLEM.ACRE, 'Acre', ['Acre']),
    "MESSAR_ETHYE": coreNationBuilder('Ethye', EMBLEM.ACRE, 'Acre', ['Acre']),
    "MESSAR_MAARRA": coreNationBuilder('Maarra', EMBLEM.ACRE, 'Acre', ['Acre']),
    "MESSAR_NEAXE": coreNationBuilder('Neaxe', EMBLEM.ACRE, 'Acre', ['Acre']),
    "MESSAR_SEAXE": coreNationBuilder('Seaxe', EMBLEM.ACRE, 'Acre', ['Acre']),
    "MESSAR_SUDAR": coreNationBuilder('Sudar', EMBLEM.ACRE, 'Acre', ['Acre']),
    "MESSAR_TRIFE": coreNationBuilder('Trife', EMBLEM.ACRE, 'Acre', ['Acre']),
    "MESSAR_WEAXE": coreNationBuilder('Weaxe', EMBLEM.ACRE, 'Acre', ['Acre']),
    "MYCENAE": coreNationBuilder('Mycenaean League', EMBLEM.ACRE, 'Acre', ['Acre']),
    "GOBLIN_EMPIRE": coreNationBuilder('Acre', EMBLEM.ACRE, 'Acre', ['Acre']),
    "GOBLIN_EMPIRE_ERD": coreNationBuilder('Acre', EMBLEM.ACRE, 'Acre', ['Acre']),
    "GOBLIN_EMPIRE_JAAX": coreNationBuilder('Acre', EMBLEM.ACRE, 'Acre', ['Acre']),
    "GOBLIN_EMPIRE_KLIR": coreNationBuilder('Acre', EMBLEM.ACRE, 'Acre', ['Acre']),
    "GOBLIN_EMPIRE_SRALB": coreNationBuilder('Acre', EMBLEM.ACRE, 'Acre', ['Acre']),
    "SYLVAN": coreNationBuilder('Sylvan Realms', EMBLEM.ACRE, 'Acre', ['Acre']),
    "SYLVAN_ORCHID": coreNationBuilder('Orchid Hall', EMBLEM.ACRE, 'Acre', ['Acre']),
}

export const CITY_Core = {
    'MESSACT': coreLocationBuilder('Messact', 'May-sack-t', [''])
}

export const RELIGION_Core = {
    'DRACONIC_PANTHEON': coreReligionBuilder('Draconic Pantheon', [''])
}

export const CHARACTER_Core = {
    "ANEURIN": coreCharacterBuilder('Aneurin', '', ['Damocles'], '', ''),
    "ArlyssKnight": coreCharacterBuilder('Arlyss', 'Knight', ['Damocles'], '', 'Arr-lys nigh-t'),
    "ArthurPendragon": coreCharacterBuilder('Arthur', 'Pendragon', ['Brytthon'], '', ''),
    "ASH": coreCharacterBuilder('Ash', '', ['Dryad'], '', ''),
    "BALOR": coreCharacterBuilder('Balor', '', ['Fomorian'], '', ''),
    "BEHEMOTH": coreCharacterBuilder('Behemoth', '', ['Primordial'], '', ''),
    "DagInnVæni": coreCharacterBuilder('Dag', 'Inn Væni', ['Krasen'], '', 'Dar-g inn '),
    "ELM": coreCharacterBuilder('Elm', '', ['Dryad'], '', ''),
    "EZRA": coreCharacterBuilder('Ezra', '', ['Damocles'], '', ''),
    "FiadhÓCionaoith": coreCharacterBuilder('Fiadh', 'Ó Cionaoith', ['Fomorian'], '', ''),
    "GuaireÓRiagáin": coreCharacterBuilder('Guaire', 'Ó Riagáin', ['Fomorian'], '', ''),
    "LEVIATHAN": coreCharacterBuilder('Leviathan', '', ['Primordial'], '', ''),
    "LETA": coreCharacterBuilder('Leta', '', ['Messan'], '', ''),
    "LilithFaire": coreCharacterBuilder('Lilith', 'Faire', ['Messan'], '', ''),
    "LyraVitae": coreCharacterBuilder('Lyra', 'Vitae', ['Messan'], '', ''),
    "MarcusDecimusLibaniusBrytthanicus": coreCharacterBuilder('Marcus', 'Decimus Libanius Brytthanicus', ['Carnan'], '', ''),
    "MORDRED": coreCharacterBuilder('Mordred', '', ['Brytthon'], '', ''),
    "NolaThesoti": coreCharacterBuilder('Nola', 'Thesoti', ['Messan'], '', ''),
    "NóttInnRauði": coreCharacterBuilder('Nótt', 'Inn Rauði', ['Krasen'], '', 'Nor-t inn Row-see'),
    "OAK": coreCharacterBuilder('Oak', '', ['Dryad'], '', ''),
    "OberonValerian": coreCharacterBuilder('Oberon', 'Valerian', ['Vindictis'], '', ''),
    "REAPER": coreCharacterBuilder('Reaper', '', ['Legion'], '', ''),
    "Scáthach": coreCharacterBuilder('Scáthach', '', ['Sylvan'], '', ''),
    "THORN": coreCharacterBuilder('Thorn', '', ['Dryad'], '', ''),
    "THRESTROM": coreCharacterBuilder('Threstrom', '', ['Gol'], '', ''),
    "ZYZ": coreCharacterBuilder('Zyz', '', ['Primordial'], '', ''),
}