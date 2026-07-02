import { creatureBuilder } from "../../utils/common"

export const AberrationDnD5eCategories: any = [
    {
        'cat': 'Scourge',
        'sub': []
    }
]

const AberrationScourge = [
    creatureBuilder(`Spider Swarm`, `Aberration`, `Scourge`, ``, 3, `Silver`, ['Aberration', 'Scourge']),            //Todo
    creatureBuilder(`Hunter`, `Aberration`, `Scourge`, ``, 3, `Silver`, ['Aberration', 'Scourge']),            //Todo
]

export const Aberrations = [
    creatureBuilder(`Devourer`, `Aberration`, `Aberration`, ``, 3, `Silver`, ['Aberration']),            //Todo
    creatureBuilder(`Pursuer`, `Aberration`, `Aberration`, ``, 3, `Silver`, ['Aberration']),            //Todo
    creatureBuilder(`Watcher`, `Aberration`, `Aberration`, ``, 3, `Silver`, ['Aberration']),            //Todo
    ...AberrationScourge
]