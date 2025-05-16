import { ArlyssKnightData } from "../characters/arlyssKnight";
import Emblem from "../../images/damoclesKnightCommando.png"
import { CHARACTERS, ORGANISATIONS } from "../constants";


export const KnightCommando: any = {
    ...ORGANISATIONS.KNIGHT_COMMANDO,
    "tags": [
        "Damocles",
        "Knight Commando"
    ],
    "emblem": Emblem,
    "pronunciation": "Bree - th",
    "info": {
        "basic": {
            "commander": [
                CHARACTERS.ARLYSS_KNIGHT
            ],
            "second": [
                CHARACTERS.LILITH_FAIRE
            ]
        },
    },
    "summary": [
        "Guerilla unit that specialises in ambush tactics, traps and skirmish warfare to kill an enemy wth 1000 cuts or remove their strongest elements before the Remnant move in"
    ]
}

//light-medium armour
//spears, swords,shields
//recurve bows
//horse archery + light cav training