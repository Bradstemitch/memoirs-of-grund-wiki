import { coreCharacterBuilder, coreCreatureBuilder, coreItemMagicBuilder, coreLocationBuilder, coreNationBuilder, coreOrganisationBuilder, coreReligionBuilder, coreSpeciesBuilder } from "../utils/builders"
import { EMBLEM } from "../images/_images"

export const NATION_Core = {
    "ACRE": coreNationBuilder(`Bishopric of Acre`, EMBLEM[`./emblems/ArcadiaAcre.webp`], ``, [`Acre`, `Kingdom`]),
    "AKITSUDO": coreNationBuilder(`Akitsudan Empire`, EMBLEM[`./emblems/Akitsudo.webp`], ``, [`Akitsudo`, `Empire`]),
    "ALLAIRE": coreNationBuilder(`Allairan Empire`, EMBLEM[`./emblems/Allaire.webp`], ``, [`Allaire`, `Empire`]),
    "ARCADIA_ASSERE": coreNationBuilder(`Assere`, EMBLEM[`./emblems/ArcadiaAssere.webp`], ``, [``, `City State`]),
    "ARCADIA_CERESSE": coreNationBuilder(`Ceresse`, EMBLEM[`./emblems/ArcadiaCeresse.webp`], ``, [``, `City State`]),
    "ARCADIA_COMINO": coreNationBuilder(`Comino`, EMBLEM[`./emblems/ArcadiaComino.webp`], ``, [``, `City State`]),
    "ARCADIA": coreNationBuilder(`Republic of Arcadia`, EMBLEM[`./emblems/Arcadia.webp`], ``, [``, `Empire`]),
    "BRYTTH_ALBION": coreNationBuilder(`Albion`, EMBLEM[`./emblems/Brytth.webp`], ``, [``, `Petty Kingdom`]),
    "BRYTTH_CAMBRIA": coreNationBuilder(`Cambria`, EMBLEM[`./emblems/Brytth.webp`], ``, [``, `Petty Kingdom`]),
    "BRYTTH": coreNationBuilder(`Kingdom of Brytth`, EMBLEM[`./emblems/Brytth.webp`], ``, [`Brytth`, `Kingdom`]),
    "CALETH": coreNationBuilder(`Calethean Empire`, EMBLEM[`./emblems/Caleth.webp`], ``, [`Caleth`, `Empire`]),
    "CARNA": coreNationBuilder(`Senātus Populusque Cārnānus`, EMBLEM[`./emblems/Carna.webp`], ``, [`Carna`, `Empire`]),
    "DROW": coreNationBuilder(`Drow Empire`, EMBLEM[`./emblems/Drow.webp`], ``, [`Drow`, `Empire`]),
    "FOMOIRE_ANUNDING": coreNationBuilder(`Clan Anunding`, EMBLEM[`./emblems/Fomoire.webp`], ``, [``, `Tribal`]),
    "FOMOIRE_CIONAOITH": coreNationBuilder(`Clan Cionaoith`, EMBLEM[`./emblems/Fomoire.webp`], ``, [``, `Tribal`]),
    "FOMOIRE_HADHOGUNG": coreNationBuilder(`Clan Hadhogung`, EMBLEM[`./emblems/Fomoire.webp`], ``, [``, `Tribal`]),
    "FOMOIRE_HERMUNDING": coreNationBuilder(`Clan Hermunding`, EMBLEM[`./emblems/Fomoire.webp`], ``, [``, `Tribal`]),
    "FOMOIRE_MORTUNG": coreNationBuilder(`Clan Mortung`, EMBLEM[`./emblems/Fomoire.webp`], ``, [``, `Tribal`]),
    "FOMOIRE_MUIREANN": coreNationBuilder(`Clan Muireann`, EMBLEM[`./emblems/Fomoire.webp`], ``, [``, `Tribal`]),
    "FOMOIRE_OTRYGGUND": coreNationBuilder(`Clan Otryggund`, EMBLEM[`./emblems/Fomoire.webp`], ``, [``, `Tribal`]),
    "FOMOIRE_YRIING": coreNationBuilder(`Clan Yriing`, EMBLEM[`./emblems/Fomoire.webp`], ``, [``, `Tribal`]),
    "FOMOIRE": coreNationBuilder(`Fomorian Clans`, EMBLEM[`./emblems/Fomoire.webp`], ``, [`Fomoire`, `Kingdom`]),
    "GOBLIN_EMPIRE_ERD": coreNationBuilder(`Zrol Erd`, EMBLEM[`./emblems/GoblinErd.webp`], ``, [``, `Tribal`]),
    "GOBLIN_EMPIRE_JAAX": coreNationBuilder(`Ferd Jaax`, EMBLEM[`./emblems/GoblinJaax.webp`], ``, [``, `Tribal`]),
    "GOBLIN_EMPIRE_KAAK": coreNationBuilder(`Zrol Kaak`, EMBLEM[`./emblems/GoblinKaak.webp`], ``, [``, `Tribal`]),
    "GOBLIN_EMPIRE_KLIR": coreNationBuilder(`Ferd Klir`, EMBLEM[`./emblems/GoblinKlir.webp`], ``, [``, `Tribal`]),
    "GOBLIN_EMPIRE_SRALB": coreNationBuilder(`Zrol Sralb`, EMBLEM[`./emblems/GoblinSralb.webp`], ``, [``, `Tribal`]),
    "GOBLIN_EMPIRE": coreNationBuilder(`Goblin Empire`, EMBLEM[`./emblems/GoblinKaak.webp`], ``, [``, `Empire`]),
    "GOL": coreNationBuilder(`Gol Clans`, EMBLEM[`./emblems/Gol.webp`], ``, [``, `Kingdom`]),
    "KEBECH": coreNationBuilder(`Kebech`, EMBLEM[`./emblems/Kebech.webp`], ``, [`Kebech`, `Empire`]),
    "KRASAHEIM": coreNationBuilder(`Isle of Krasaheim`, EMBLEM[`./emblems/Krasaheim.webp`], ``, [``, `Kingdom`]),
    "MESSAR_ATREA": coreNationBuilder(`Atrea`, EMBLEM[`./emblems/Messar.webp`], ``, [``, `Petty Kingdom`]),
    "MESSAR_BABACA": coreNationBuilder(`Babaca`, EMBLEM[`./emblems/Messar.webp`], ``, [``, `Petty Kingdom`]),
    "MESSAR_BRECCA": coreNationBuilder(`Brecca`, EMBLEM[`./emblems/MessarBrecca.webp`], ``, [``, `Petty Kingdom`]),
    "MESSAR_ETHYE": coreNationBuilder(`Ethye`, EMBLEM[`./emblems/MessarEthye.webp`], ``, [``, `Petty Kingdom`]),
    "MESSAR_MAARRA": coreNationBuilder(`Maarra`, EMBLEM[`./emblems/Messar.webp`], ``, [``, `Petty Kingdom`]),
    "MESSAR_NEAXE": coreNationBuilder(`Neaxe`, EMBLEM[`./emblems/MessarNeaxe.webp`], ``, [``, `Petty Kingdom`]),
    "MESSAR_SEAXE": coreNationBuilder(`Seaxe`, EMBLEM[`./emblems/MessarSeaxe.webp`], ``, [``, `Petty Kingdom`]),
    "MESSAR_SUDAR": coreNationBuilder(`Sudar`, EMBLEM[`./emblems/Messar.webp`], ``, [``, `Petty Kingdom`]),
    "MESSAR_TRIFE": coreNationBuilder(`Trife`, EMBLEM[`./emblems/MessarTrife.webp`], ``, [``, `Petty Kingdom`]),
    "MESSAR_WEAXE": coreNationBuilder(`Weaxe`, EMBLEM[`./emblems/MessarWeaxe.webp`], ``, [``, `Petty Kingdom`]),
    "MESSAR": coreNationBuilder(`Messan Heptarchy`, EMBLEM[`./emblems/Messar.webp`], `May - sar`, [`Messar`, `Kingdom`]),
    "MYCENAEAN_LEAGUE_AEGINA": coreNationBuilder(`Aegina Polis`, EMBLEM[`./emblems/MycenaeanLeagueAegina.webp`], ``, [`Mycenae`, `City State`]),
    "MYCENAEAN_LEAGUE_ELAE": coreNationBuilder(`Elae Polis`, EMBLEM[`./emblems/MycenaeanLeagueElae.webp`], ``, [`Mycenae`, `City State`]),
    "MYCENAEAN_LEAGUE_KNOSSOS": coreNationBuilder(`Knossos Polis`, EMBLEM[`./emblems/MycenaeanLeagueKnossos.webp`], ``, [`Mycenae`, `City State`]),
    "MYCENAEAN_LEAGUE_LACONIA": coreNationBuilder(`Laconia Polis`, EMBLEM[`./emblems/MycenaeanLeagueLaconia.webp`], ``, [`Mycenae`, `City State`]),
    "MYCENAEAN_LEAGUE_LERNA": coreNationBuilder(`Lerna Polis`, EMBLEM[`./emblems/MycenaeanLeagueLerna.webp`], ``, [`Mycenae`, `City State`]),
    "MYCENAEAN_LEAGUE_MYCENAE": coreNationBuilder(`Mycenae Polis`, EMBLEM[`./emblems/MycenaeanLeagueMycenae.webp`], ``, [`Mycenae`, `City State`]),
    "MYCENAEAN_LEAGUE": coreNationBuilder(`Mycenaean League`, EMBLEM[`./emblems/MycenaeanLeague.webp`], ``, [`Mycenae`, `Kingdom`]),
    "NAGRA": coreNationBuilder(`Nagra`, EMBLEM[`./emblems/Nagra.webp`], ``, [`Nagra`, `Empire`]),
    "SYLVAN_ORCHID": coreNationBuilder(`Orchid Hall`, EMBLEM[`./emblems/Sylvan.webp`], ``, [`Sylvan`, `City State`]),
    "SYLVAN": coreNationBuilder(`Sylvan Realms`, EMBLEM[`./emblems/Sylvan.webp`], ``, [`Sylvan`, `Kingdom`]),
    "TUATHA_DE_DANANN": coreNationBuilder(`Tuatha de Danann`, EMBLEM[`./emblems/TuathaDeDanann.webp`], ``, [`Tuatha`, `Kingdom`]),
}

export const CITY_Core = {
    "MESSACT": coreLocationBuilder(`Messact`, `May-sack-t`, [``])
}

const MagicArmour = () => {
    const tags = ['Magical', 'Armour']
    return ({
        "ACHILLES_ARMOUR": coreItemMagicBuilder(`Armour of Achilles`, '', [`First`, `Second`, `Third`], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "ASPECT_ARMOUR": coreItemMagicBuilder(`Aspect Armour`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "BLACK_PLATE": coreItemMagicBuilder(`Black Plate`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "FOMORIAN_PLATE": coreItemMagicBuilder(`Fomorian Plate`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "HEPHAESTUS_GIFT": coreItemMagicBuilder(`Hephaestus' Gift`, '', [`Armour`, `Shield`], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "MOLON_LABE": coreItemMagicBuilder(`Molon Labe`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "MORTIS_GIFT": coreItemMagicBuilder(`Mortis' Gift`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "ASPIS_VALIANT_HIPPEIS": coreItemMagicBuilder(`Aspis of Valiant Hippeis`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "RAIMENT_WINTER_QUEEN": coreItemMagicBuilder(`Raiment of the Winter Queen`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "REAPERS_VESTMENTS": coreItemMagicBuilder(`Vestments of the Reaper`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
    })
}

const MagicItems = () => {
    const tags = ['Magical', 'Item']
    return ({
        "STYX_FLASK": coreItemMagicBuilder(`Flask of the Styx`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "KNIGHT_ELIXIR": coreItemMagicBuilder(`Knight Elixir`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "AQUILA_LOST_LEGION": coreItemMagicBuilder(`Aquila of the Lost Legion`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "BODHMALLS_LILY": coreItemMagicBuilder(`Bodhmall's Lily`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "CORRBOLG": coreItemMagicBuilder(`Bodhmall's Lily`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "ELVEN_AMULET": coreItemMagicBuilder(`Elven Amulet`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "MORRIGANS_BAND": coreItemMagicBuilder(`Morrigan's Band`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
    })
}

const MagicWeapons = () => {
    const tags = ['Magical', 'Weapon']
    return {
        "ACHILLES_SPEAR": coreItemMagicBuilder(`Achilles' Spear`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "ALDER_BLADE": coreItemMagicBuilder(`Alder Blade`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "BODHMALLS_DARTS": coreItemMagicBuilder(`Bodhmall's Darts`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "DRAGONBONE_WEAPON": coreItemMagicBuilder(`Dragonbone Weapon`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "DRAGONHORN_STAFF": coreItemMagicBuilder(`Dragonhorn Staff`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "ASCALON": coreItemMagicBuilder(`Ascalon`, '', [`Sword`, `Lance`], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "BALMUNG": coreItemMagicBuilder(`Balmung`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "BEAGALLTACH": coreItemMagicBuilder(`Beagalltach`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "CALADBOLG": coreItemMagicBuilder(`Caladbolg`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "CLARENT": coreItemMagicBuilder(`Clarent`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "COSGARACH_MHOR": coreItemMagicBuilder(`Cosgarach Mhor`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "CRUADH_CHOSGARACH": coreItemMagicBuilder(`Cruadh-Chosgarach`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "DRAGON_STONE": coreItemMagicBuilder(`Dragon Stone`, '', [`Juvenille`, `Young`, `Adult`, `Ancient`], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "DURENDAL": coreItemMagicBuilder(`Durendal`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "DRYNWYN": coreItemMagicBuilder(`Drynwyn`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "ELVEN_BLADE": coreItemMagicBuilder(`Elven Blade`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "ELVEN_BOW": coreItemMagicBuilder(`Elven Bow`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "EXCALIBUR": coreItemMagicBuilder(`Excalibur`, 'the Sword of Promised Victory', [], 'https://i.pinimg.com/originals/33/10/dd/3310ddc6a803e5d1328f7b6515a0eb3f.jpg', [...tags]),
        "FAILNAUGHT": coreItemMagicBuilder(`Failnaught`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "FANGS_CERBERUS": coreItemMagicBuilder(`Fangs of Cerberus`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "FIACLA": coreItemMagicBuilder(`Fiacla`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "FIRBOW": coreItemMagicBuilder(`Firebow`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "FRAGARACH": coreItemMagicBuilder(`Fragarach`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "GAE_ASSAIL": coreItemMagicBuilder(`Gáe Assail`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "GAE_BUIDHE": coreItemMagicBuilder(`Gáe Buidhe`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "GAE_BULG": coreItemMagicBuilder(`Gáe Bulg`, 'the Mortal Spear', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "GAE_DEARG": coreItemMagicBuilder(`Gáe Dearg`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "GRAM": coreItemMagicBuilder(`Gram`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "JADE": coreItemMagicBuilder(`Jade`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "LUIN": coreItemMagicBuilder(`Lúin`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "MAC_AN_LUIN": coreItemMagicBuilder(`Mac an Luin`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "MERVEILLEUSE": coreItemMagicBuilder(`Merveilleuse`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "MORALLTACH": coreItemMagicBuilder(`Móralltach`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "MYRMIDON_SPEAR": coreItemMagicBuilder(`Myrmidon Spear`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "ODYSSEUS_BOW": coreItemMagicBuilder(`Odysseus' Bow`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "SECACE": coreItemMagicBuilder(`Secace`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "SHARD": coreItemMagicBuilder(`Shard`, 'the Black-fire Blade', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "SOMMERSWERD": coreItemMagicBuilder(`Sommerswerd`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "SYLVAN_BOW": coreItemMagicBuilder(`Sylvan Bow`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "TALON": coreItemMagicBuilder(`Talon`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "TRACE": coreItemMagicBuilder(`Trace`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "TONBOKIRI": coreItemMagicBuilder(`Tonbokiri`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
        "UMBRA": coreItemMagicBuilder(`Umbra`, '',
            [
                'Umbral Envy',
                'Umbral Greed',
                'Umbral Gluttony',
                'Umbral Lust',
                'Umbral Pride',
                'Umbral Sloth',
                'Umbral Wrath',
            ],
            'http://www.digital-eel.com/scans/images/swords_fishy_big.gif',
            [...tags]
        ),
        "XIPHOS_PELEUS": coreItemMagicBuilder(`Xiphos Peleus`, '', [], 'http://www.digital-eel.com/scans/images/swords_fishy_big.gif', [...tags]),
    }
}

export const CREATURE_Core = {
    "AKITSUDAN_ASHIGARU_YARI": coreCreatureBuilder(`Ashigaru`, `Human`, `Akitsudo`, `Yari`, 3, `Silver`, ['Humanoid', 'Human', 'Akitsudo']), //TODO
    "AKITSUDAN_ASHIGARU_YUMI": coreCreatureBuilder(`Ashigaru`, `Human`, `Akitsudo`, `Yumi`, 3, `Silver`, ['Humanoid', 'Human', 'Akitsudo']), //TODO
    // "AKITSUDAN_SAMURAI": coreCreatureBuilder(`Samurai`, `Human`, `Akitsudo`, `Sengoku`, 3, `Silver`, ['Humanoid', 'Human', 'Akitsudo']), //TODO
    "ALLAIRAN_ARBALEST":coreCreatureBuilder(`Arbalest`, `Human`, `Allaire`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),             //Todo
    "ALLAIRAN_LEVY":coreCreatureBuilder(`Levy`, `Human`, `Allaire`, ``, 1, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
    "ALLAIRAN_PEDITE":coreCreatureBuilder(`Pedite`, `Human`, `Allaire`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),               //Todo
    "ALLAIRAN_MILITE":coreCreatureBuilder(`Milite`, `Human`, `Allaire`, ``, 5, `Silver`, ['Humanoid', 'Human', 'Allaire']),               //Todo
    "ALLAIRAN_KNIGHT":coreCreatureBuilder(`Knight`, `Human`, `Allaire`, ``, 2, `Gold`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
    "BRYTTHON_BLACK_COMPANY":coreCreatureBuilder(`Black Company`, `Human`, `Brytth`, ``, 2, `Gold`, ['Humanoid', 'Human', 'Brytth']),           //Todo
    "BRYTTHON_LIMITANEI":coreCreatureBuilder(`Limitanei`, `Human`, `Brytth`, ``, 2, `Gold`, ['Humanoid', 'Human', 'Brytth']),               //Todo
    "BRYTTHON_COMITATENSES":coreCreatureBuilder(`Comitatenses`, `Human`, `Brytth`, ``, 2, `Gold`, ['Humanoid', 'Human', 'Brytth']),            //Todo
    "BRYTTHON_PALATINI":coreCreatureBuilder(`Palatini`, `Human`, `Brytth`, ``, 2, `Gold`, ['Humanoid', 'Human', 'Brytth']),                //Todo
    "FOMORIAN_YOUTH":coreCreatureBuilder(`Youth`, `Human`, `Fomoire`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
    "FOMORIAN_CEITHEARN":coreCreatureBuilder(`Ceithearn`, `Human`, `Fomoire`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
    "FOMORIAN_GALLOGLAIGH":coreCreatureBuilder(`Gallóglaigh`, `Human`, `Fomoire`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
    "FOMORIAN_CHOSEN":coreCreatureBuilder(`Chosen`, `Human`, `Fomoire`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
    "KRASEN_RAIDER":coreCreatureBuilder(`Raider`, `Human`, `Krasaheim`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
    "KRASEN_HUSKARL":coreCreatureBuilder(`Huskarl`, `Human`, `Krasaheim`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
    "KRASEN_BERSERKER":coreCreatureBuilder(`Berserker`, `Human`, `Krasaheim`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
    "MESSAN_ARCHER":coreCreatureBuilder(`Archer`, `Human`, `Messar`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
    "MESSAN_FYRD":coreCreatureBuilder(`Fyrd`, `Human`, `Messar`, ``, 5, `Brass`, ['Humanoid', 'Human', 'Allaire']),                    //Todo
    "MESSAN_SELECTFYRD":coreCreatureBuilder(`Select-Fyrd`, `Human`, `Messar`, ``, 1, `Silver`, ['Humanoid', 'Human', 'Allaire']),            //Todo
    "MESSAN_HUSCARL":coreCreatureBuilder(`Huscarl`, `Human`, `Messar`, ``, 4, `Silver`, ['Humanoid', 'Human', 'Allaire']),                //Todo
    "MESSAN_THEGN":coreCreatureBuilder(`Thegn`, `Human`, `Messar`, ``, 2, `Gold`, ['Humanoid', 'Human', 'Allaire']),                    //Todo
    "MYCENAEAN_HOPLITE":coreCreatureBuilder(`Hoplite`, `Human`, `Mycenae`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
    "MYCENAEAN_ARMOURED_HOPLITE":coreCreatureBuilder(`Armoured Hoplite`, `Human`, `Mycenae`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
    "MYCENAEAN_MYRMIDON":coreCreatureBuilder(`Myrmidon`, `Human`, `Mycenae`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
    "VINDICTIS_FUSILIER":coreCreatureBuilder(`Fusilier`, `Human`, `Vindictis`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
    "VINDICTIS_VOLTIGEUR":coreCreatureBuilder(`Voltigeur`, `Human`, `Vindictis`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
    "OUTLAW_MUGGER":coreCreatureBuilder(`Mugger`, `Human`, `Outlaw`, ``, 2, `Brass`, ['Humanoid', 'Human', 'Allaire']),                  //Todo
    "OUTLAW_ASSASSIN":coreCreatureBuilder(`Assassin`, `Human`, `Outlaw`, ``, 1, `Gold`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
    "OUTLAW_ROBBER":coreCreatureBuilder(`Robber`, `Human`, `Outlaw`, ``, 1, `Brass`, ['Humanoid', 'Human', 'Allaire']),                  //Todo
    "OUTLAW_BRIGAND":coreCreatureBuilder(`Brigand`, `Human`, `Outlaw`, ``, 2, `Brass`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
    "OUTLAW_MARAUDER":coreCreatureBuilder(`Marauder`, `Human`, `Outlaw`, ``, 4, `Brass`, ['Humanoid', 'Human', 'Allaire']),                //Todo
}

export const ARMOURY_Core = {
    ...MagicArmour(),
    ...MagicWeapons(),
    ...MagicItems(),
}

export const ORGANISATION_Core = {
    "SWORDS_OF_DAMOCLES": coreOrganisationBuilder(`Swords of Damocles`, [``]),
    "SHARDS_OF_DAMOCLES": coreOrganisationBuilder(`Shards of Damocles`, [``]),
    "HARLEQUINS_REVELRY": coreOrganisationBuilder(`Harlequin's Revelry`, [``]),
    "KNIGHT_COMMANDO": coreOrganisationBuilder(`Knight Commando`, [``]),
    "VINDICTIS": coreOrganisationBuilder(`Vindictis`, [``]),
    "PROMETHEUS_INITIATIVE": coreOrganisationBuilder(`Prometheus Initiative`, [``]),
    "REMNANT": coreOrganisationBuilder(`The Remnant`, [``]),
    "LEGION": coreOrganisationBuilder(`The Legion`, [``]),
    "MESSAN_REBELLION": coreOrganisationBuilder(`Messan Rebellion`, [``]),
    "ZEALOTS": coreOrganisationBuilder(`Zealots`, [``]),
}

export const RELIGION_Core = {
    "DRACONIC_PANTHEON": coreReligionBuilder(`Draconic Pantheon`, [``])
}

export const SPECIES_Core = {
    "HUMAN": coreSpeciesBuilder(`Human`, [``]),
    "ELF": coreSpeciesBuilder(`Elf`, [``]),
    "GOBLIN": coreSpeciesBuilder(`Goblin`, [``]),
    "VAMPIRE": coreSpeciesBuilder(`Vampire`, [``]),
    "HIGH_DRAGON": coreSpeciesBuilder(`High dragon`, [``]),
}

export const CHARACTER_Core = {
    "ABADDON": coreCharacterBuilder(`Abaddon`, ``, [`Demon`], ``),
    "ABRAHAM_VAN_HELSING": coreCharacterBuilder(`Abraham`, `Van Helsing`, [`Human`, `Allaire`], ``),
    "ACHILLES": coreCharacterBuilder(`Achilles`, ``, [`Human`, `Mycenae`], ``),
    "ALEC": coreCharacterBuilder(`Alec`, ``, [`Human`, `Messar`], ``),
    "ANEURIN": coreCharacterBuilder(`Aneurin`, ``, [`Human`, `Damocles`], ``),
    "ANUBIS": coreCharacterBuilder(`Anubis`, ``, [`Inpw`, `Kebech`], ``),
    "ARLYSS_KNIGHT": coreCharacterBuilder(`Arlyss`, `Knight`, [`Human`, `Dragon`, `Damocles`], `Arr-lys nigh-t`),
    "ARTHUR_PENDRAGON": coreCharacterBuilder(`Arthur`, `Pendragon`, [`Human`, `Brytth`], ``),
    "ASH": coreCharacterBuilder(`Ash`, ``, [`Dryad`], ``),
    "AURELIA": coreCharacterBuilder(`Aurelia`, ``, [`Dragon`, `Legion`], ``),
    "BALOR": coreCharacterBuilder(`Balor`, ``, [`Human`, `Fomoire`], ``),
    "BARDR": coreCharacterBuilder(`Bárðr`, ``, [`Dwarf`], `Par-wer`),
    "BEHEMOTH": coreCharacterBuilder(`Behemoth`, ``, [`Primordial`], ``),
    "CERBERUS": coreCharacterBuilder(`Cerberus`, ``, [`Human`, `Vampire`, `Vindictis`, `Legion`], ``),
    "DAG_INN_VAENI": coreCharacterBuilder(`Dag`, `Inn Væni`, [`Human`, `Krasaheim`], `Dar-g inn `),
    "ELIJAH_SPENCER": coreCharacterBuilder(`Elijah`, `Spencer`, [`Human`, `Vindictis`], ``),
    "ELM": coreCharacterBuilder(`Elm`, ``, [`Dryad`], ``),
    "ELVA_KNIGHT": coreCharacterBuilder(`Elva`, `Knight`, [`Human`, `Legion`], ``),
    "EMRY_BARNETT": coreCharacterBuilder(`Emry`, `Barnett`, [`Human`, `Legion`], ``),
    "ESSYLT": coreCharacterBuilder(`Essylt`, ``, [`Scourge`, `Legion`], ``),
    "EZRA": coreCharacterBuilder(`Ezra`, ``, [`Elf`, `Damocles`], ``),
    "FIADH_O_CIONAOITH": coreCharacterBuilder(`Fiadh`, `Ó Cionaoith`, [`Human`, `Fomoire`], `fee-a oh key-uh-nee`),
    "FORGOTTEN_KING": coreCharacterBuilder(`Forgotten King`, ``, [`Demon`], ``),
    "GUAIRE_O_RIAGAIN": coreCharacterBuilder(`Guaire`, `Ó Riagáin`, [`Human`, `Fomoire`], `Goo-ore oh Ree-gone`),
    "ICARUS": coreCharacterBuilder(`Icarus`, ``, [`Human`, `Legion`], ``),
    "IRA": coreCharacterBuilder(`Ira`, ``, [`Dragon`, `Allaire`], ``),
    "IRIS_VON_RAVENSKRIEG": coreCharacterBuilder(`Iris`, `Von Ravenskrieg`, [`Human`, `Arcadia`], ``),
    "KATHLEEN_SPENCER": coreCharacterBuilder(`Kathleen`, `Spencer`, [`Human`, `Damocles`], ``),
    "KITAI_MASAMUNE": coreCharacterBuilder(`Kitai`, `Masamune`, [`Human`, `Akitsudo`], ``), //(鍛代 雅志)
    "LEALIAVAN_HELSING": coreCharacterBuilder(`Lealiavan`, `Helsing`, [`Human`, `Allaire`], ``),
    "LEGION": coreCharacterBuilder(`Legion`, ``, [`Demon`], ``),
    "LETA": coreCharacterBuilder(`Leta`, ``, [`Dragon`, `Messar`], ``),
    "LEVIATHAN": coreCharacterBuilder(`Leviathan`, ``, [`Primordial`], ``),
    "LILITH_FAIRE": coreCharacterBuilder(`Lilith`, `Faire`, [`Elf`, `Messar`], ``),
    "LYRA_VITAE": coreCharacterBuilder(`Lyra`, `Vitae`, [`Dragon`, `Messar`], ``),
    "MAGNUS": coreCharacterBuilder(`Magnus`, ``, [`Demon`], ``),
    "BRYTTHANICUS": coreCharacterBuilder(`Brytthanicus`, ``, [`Human`, `Carne`], ``),
    "MEDEA": coreCharacterBuilder(`Medea`, ``, [`Human`, `Mycenae`], ``),
    "MORDRED": coreCharacterBuilder(`Mordred`, ``, [`Human`, `Vampire`, `Brytth`, `Black Knight`], ``),
    "MORGAN_LE_FAY": coreCharacterBuilder(`Morgan`, `Le Fay`, [`Human`, `Brytth`], ``),
    "MORRIGAN": coreCharacterBuilder(`Morrigan`, ``, [`Demon`], ``),
    "NEMED": coreCharacterBuilder(`Nemed`, ``, [`Human`, `Fomoire`], ``),
    "NIAMH": coreCharacterBuilder(`Niamh`, ``, [`Fairy`, `Sylvan`], ``),
    "NIMUE": coreCharacterBuilder(`Nimue`, ``, [`Brytth`], ``),
    "NOLA_THESOTI": coreCharacterBuilder(`Nola`, `Thesoti`, [`Human`, `Messar`], ``),
    "NOTT_INN_RAUDI": coreCharacterBuilder(`Nótt`, `Inn Rauði`, [`Human`, `Krasaheim`], `Nor-t inn Row-see`),
    "OAK": coreCharacterBuilder(`Oak`, ``, [`Dryad`], ``),
    "OBERON_VALERIAN": coreCharacterBuilder(`Oberon`, `Valerian`, [`Human`, `Dragon`, `Vindictis`], ``),
    "PAX": coreCharacterBuilder(`Pax`, ``, [`Human`, `Werewolf`, `Messar`], ``),
    "REAPER": coreCharacterBuilder(`Reaper`, ``, [`Legion`], ``),
    "RED": coreCharacterBuilder(`Red`, ``, [`Elf`, `Red Stags`], ``),
    "SCATHACH": coreCharacterBuilder(`Scáthach`, ``, [`Elf`, `Sylvan`], ``),
    "SETT": coreCharacterBuilder(`Sett`, ``, [`Dragon`, `Kebech`], ``),
    "TAXMAN": coreCharacterBuilder(`TAXMAN`, ``, [`Human`, `Messar`], ``),
    "THORN": coreCharacterBuilder(`Thorn`, ``, [`Dryad`], ``),
    "THRESTROM": coreCharacterBuilder(`Threstrom`, ``, [`Human`, `Gol`], ``),
    "THULKATAR": coreCharacterBuilder(`Thul"Katar`, ``, [`Orc`], ``),
    "TRENTIN_FULLERTON": coreCharacterBuilder(`Trentin`, `Fullerton`, [`Human`, `Vindictis`], ``),
    "WRATH": coreCharacterBuilder(`Wrath`, ``, [`Demon`], ``),
    "ZUBEIR_ALKAS": coreCharacterBuilder(`Zubeir`, `Alkas`, [`Human`, `Fomoire`], ``),
    "ZYZ": coreCharacterBuilder(`Zyz`, ``, [`Primordial`], ``),
    "MORRIGAN_BADB": coreCharacterBuilder(`Badb`, `Morrigan`, [`Primordial`], ``),
    "MORRIGAN_MACHA": coreCharacterBuilder(`Macha`, `Morrigan`, [`Primordial`], ``),
    "MORRIGAN_NEMAIN": coreCharacterBuilder(`Nemain`, `Morrigan`, [`Primordial`], ``),
    "TWIG": coreCharacterBuilder(`Twig`, ``, [`Goblin`], ``),
}
