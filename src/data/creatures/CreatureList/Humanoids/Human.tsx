import { HumanoidsHumanAkitsudo } from "./HumanAkitsudo";
import { HumanoidsHumanAllaire } from "./HumanAllaire";
import { HumanoidsHumanBrytth } from "./HumanBrytth";
import { HumanoidsHumanFomorian } from "./HumanFomorian";
import { HumanoidsHumanKrasaheim } from "./HumanKrasaheim";
import { HumanoidsHumanMessar } from "./HumanMessar";
import { HumanoidsHumanMycenae } from "./HumanMycenae";
import { HumanoidsHumanVindictis } from "./HumanVindictis";

export const HumanoidsHuman = [
    {
        'name': 'Archer',
        'fileName': 'CommonArcher',
        'tags': ['Humanoid','Human']
    },
    ...HumanoidsHumanAkitsudo,
    ...HumanoidsHumanAllaire,
    ...HumanoidsHumanBrytth,
    ...HumanoidsHumanFomorian,
    ...HumanoidsHumanKrasaheim,
    ...HumanoidsHumanMessar,
    ...HumanoidsHumanMycenae,
    ...HumanoidsHumanVindictis
]