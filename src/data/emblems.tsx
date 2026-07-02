import ACRE from "../images/acre.png"
import AKITSUDO from "../images/akitsudo.png"
import ALLAIRE from "../images/allaire.png"
import ARCADIA_ASSERE from "../images/arcadiaAssere.png"
import ARCADIA_COMINO from "../images/arcadiaComino.png"
import BRYTTH from "../images/brytth.png"
import CALETH from "../images/caleth.png"
import CARNA from "../images/carna.png"
import FOMOIRE from "../images/fomoire.png"
import GOL from "../images/gol.png"
import KRASAHEIM from "../images/krasaheim.png"
import MESSAR from "../images/messar.png"
import MESSAR_BRECCA from "../images/messarBrecca.png"
import MESSAR_ETHYE from "../images/messarEthye.png"
import MESSAR_NEAXE from "../images/messarNeaxe.png"
import MESSAR_SEAXE from "../images/messarSeaxe.png"
import MESSAR_TRIFE from "../images/messarTrife.png"
import MESSAR_WEAXE from "../images/messarWeaxe.png"
import MYCENAE from "../images/mycenaeanLeague.png"
import SYLVAN from "../images/sylvan.png"

function getEmblem(imageLoc: any){
    let rumour
    let error
    try {
        rumour = require(`../images/${imageLoc}.png`);
    } catch (e) {
        error = true
    }
    return rumour
}

export const EMBLEM = {
    "ACRE": ACRE,
    "MESSAR": MESSAR,
}