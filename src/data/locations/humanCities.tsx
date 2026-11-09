import { EMBLEM } from '../../../images/_images';
import { coreLocationBuilder } from '../../utils/builders';
import { BRYTTH, KRASAHEIM } from '../nations/nationList/humanNations';

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

const BRYTTH = {
    BRYTTH_CAERLLEON: coreLocationBuilder(`Caerlleon`, `May-sack-t`, [``]),
    BRYTTH_GLYNDEN: coreLocationBuilder(`Glynden`, `May-sack-t`, [``]),
    BRYTTH_BEDDMAWR: coreLocationBuilder(`Beddmawr`, `May-sack-t`, [``]),
    BRYTTH_BRYNGLAS: coreLocationBuilder(`Brynglas`, `May-sack-t`, [``]),
    BRYTTH_CAERRHODRI: coreLocationBuilder(`Caerrhodri`, `May-sack-t`, [``]), //Formerly know by its fomorian name Riagáin
    BRYTTH_GLANNEWYDD: coreLocationBuilder(`Glannewydd`, `May-sack-t`, [``]),
    BRYTTH_LLYSTRAETH: coreLocationBuilder(`Llystraeth`, `May-sack-t`, [``]),
}
const KRASAHEIM = {
    KRASAHEIM_HOFNTYR: coreLocationBuilder(`Hǫfntyr`, `May-sack-t`, [``]),
    KRASAHEIM_PAVLLINN: coreLocationBuilder(`Pavllinn`, `May-sack-t`, [``]),

}
const MESSAR = {
    MESSAR_MESSACT: coreLocationBuilder(`Messact`, `May-sack-t`, [``]),
    MESSAR_ASTBOR: coreLocationBuilder(`Astbor`, `May-sack-t`, [``]), // Astborough(fort town near brytth),
    MESSAR_BLEINST: coreLocationBuilder(`Bleinst`, `May-sack-t`, [``]),
    MESSAR_CREICH: coreLocationBuilder(`Vergris`, `May-sack-t`, [``]), // Creich(Mountain Springs),
    MESSAR_DALE: coreLocationBuilder(`Dale`, `May-sack-t`, [``]), // Dale(valley city),
    MESSAR_DOLTEN: coreLocationBuilder(`Dolten`, `May-sack-t`, [``]), // Dolton(farming community on canal),
    MESSAR_NORCEST: coreLocationBuilder(`Norcest`, `May-sack-t`, [``]), // Norcester(northern barricade)
    MESSAR_POLTEN: coreLocationBuilder(`Polten`, `May-sack-t`, [``]), // Polton(built next to the lake),
    MESSAR_STARNPOR: coreLocationBuilder(`Starnpor`, `May-sack-t`, [``]), // Stanport(costal town),
    MESSAR_STARNSHAW: coreLocationBuilder(`Starnshaw`, `May-sack-t`, [``]), // Stanshaw(in moutain surrounded by dense forest),
    MESSAR_SUTPOR: coreLocationBuilder(`Sutpor`, `May-sack-t`, [``]), // Sutport(large port town),
    MESSAR_SYLVASTEAD: coreLocationBuilder(`Sylvastead`, `May-sack-t`, [``]), // Sylvastead(woodcutters and main canal user),
    MESSAR_VERGRIS: coreLocationBuilder(`Vergris`, `May-sack-t`, [``]), // Vergris(former mining town),
    MESSAR_VILLEN: coreLocationBuilder(`Villen`, `May-sack-t`, [``]),
    MESSAR_WESFER: coreLocationBuilder(`Wesfer`, `May-sack-t`, [``]), // wesford(bridge city across the frontier)
}

export const CITY_Core_Human = {
    ...BRYTTH,
    ...MESSAR,
}