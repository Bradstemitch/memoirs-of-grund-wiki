import { EMBLEM } from '../../../images/_images';
import { coreLocationBuilder } from '../../utils/builders';
import { BRYTTH } from '../nations/nationList/humanNations';

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

export const LOCATION_Core_Mystical_Sites = {
    PAIR_DADENI: coreLocationBuilder(`Pair Dadeni`, `May-sack-t`, [``]),

}