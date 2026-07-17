import { creatureBuilder } from "../../utils/common"

export const HumanDnD5eCategories: any = [
    {
        'cat': 'Human',
        'sub': [
            'Akitsudo',
            'Allaire',
            'Brytth',
            'Carna',
            'Fomorian',
            'Krasaheim',
            'Messar',
            'Mycenae',
            'Vindictis'
        ]
    },
    {
        'cat': 'Outlaw',
        'sub': [
            'Killer',
            'Bandit'
        ]
    }
]

const HumanoidsHumanAkitsudo = {
    "ASHIGARU_YARI": creatureBuilder(`Ashigaru`, `Human`, `Akitsudo`, `Yari`, 3, `Silver`, ['Humanoid', 'Human', 'Akitsudo']),            //Todo
    // creatureBuilder(`Ashigaru`, `Human`, `Akitsudo`, `Yumi`, 3, `Silver`, ['Humanoid', 'Human', 'Akitsudo']),            //Todo
    "SAMURAI": creatureBuilder(`Samurai`, `Human`, `Akitsudo`, `Sengoku`, 3, `Silver`, ['Humanoid', 'Human', 'Akitsudo']),     //Todo
}
// const HumanoidsHumanAllaire = [
//     creatureBuilder(`Arbalest`, `Human`, `Allaire`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),             //Todo
//     creatureBuilder(`Levy`, `Human`, `Allaire`, ``, 1, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
//     creatureBuilder(`Pedite`, `Human`, `Allaire`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),               //Todo
//     creatureBuilder(`Milite`, `Human`, `Allaire`, ``, 5, `Silver`, ['Humanoid', 'Human', 'Allaire']),               //Todo
//     creatureBuilder(`Knight`, `Human`, `Allaire`, ``, 2, `Gold`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
// ]
// const HumanoidsHumanBrytth = [
//     creatureBuilder(`Black Company`, `Human`, `Brytth`, ``, 2, `Gold`, ['Humanoid', 'Human', 'Brytth']),           //Todo
//     creatureBuilder(`Limitanei`, `Human`, `Brytth`, ``, 2, `Gold`, ['Humanoid', 'Human', 'Brytth']),               //Todo
//     creatureBuilder(`Comitatenses`, `Human`, `Brytth`, ``, 2, `Gold`, ['Humanoid', 'Human', 'Brytth']),            //Todo
//     creatureBuilder(`Palatini`, `Human`, `Brytth`, ``, 2, `Gold`, ['Humanoid', 'Human', 'Brytth']),                //Todo
// ]
// const HumanoidsHumanFomoire = [
//     creatureBuilder(`Youth`, `Human`, `Fomoire`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
//     creatureBuilder(`Ceithearn`, `Human`, `Fomoire`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
//     creatureBuilder(`Gallóglaigh`, `Human`, `Fomoire`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
//     creatureBuilder(`Chosen`, `Human`, `Fomoire`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
// ]
// const HumanoidsHumanKrasaheim = [
//     creatureBuilder(`Raider`, `Human`, `Krasaheim`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
//     creatureBuilder(`Huskarl`, `Human`, `Krasaheim`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
//     creatureBuilder(`Berserker`, `Human`, `Krasaheim`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
// ]
// const HumanoidsHumanMessar = [
//     creatureBuilder(`Archer`, `Human`, `Messar`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
//     creatureBuilder(`Fyrd`, `Human`, `Messar`, ``, 5, `Brass`, ['Humanoid', 'Human', 'Allaire']),                    //Todo
//     creatureBuilder(`Select-Fyrd`, `Human`, `Messar`, ``, 1, `Silver`, ['Humanoid', 'Human', 'Allaire']),            //Todo
//     creatureBuilder(`Huscarl`, `Human`, `Messar`, ``, 4, `Silver`, ['Humanoid', 'Human', 'Allaire']),                //Todo
//     creatureBuilder(`Thegn`, `Human`, `Messar`, ``, 2, `Gold`, ['Humanoid', 'Human', 'Allaire']),                    //Todo
// ]
// const HumanoidsHumanMycenae = [
//     creatureBuilder(`Hoplite`, `Human`, `Mycenae`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
//     creatureBuilder(`Armoured Hoplite`, `Human`, `Mycenae`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
//     creatureBuilder(`Myrmidon`, `Human`, `Mycenae`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
// ]
// const HumanoidsHumanVindictis = [
//     creatureBuilder(`Fusilier`, `Human`, `Vindictis`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
//     creatureBuilder(`Voltigeur`, `Human`, `Vindictis`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
// ]
// const HumanoidsHumanOutlaw = [
//     creatureBuilder(`Mugger`, `Human`, `Outlaw`, ``, 2, `Brass`, ['Humanoid', 'Human', 'Allaire']),                  //Todo
//     creatureBuilder(`Assassin`, `Human`, `Outlaw`, ``, 1, `Gold`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
//     creatureBuilder(`Robber`, `Human`, `Outlaw`, ``, 1, `Brass`, ['Humanoid', 'Human', 'Allaire']),                  //Todo
//     creatureBuilder(`Brigand`, `Human`, `Outlaw`, ``, 2, `Brass`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
//     creatureBuilder(`Marauder`, `Human`, `Outlaw`, ``, 4, `Brass`, ['Humanoid', 'Human', 'Allaire']),                //Todo
// ]
// ...WFRP4eNPC("Giant", "Giant", "Ogre", "", 4, "Silver"),

export const Humans: any = {
    ...HumanoidsHumanAkitsudo,
    // ...HumanoidsHumanAllaire,
    // ...HumanoidsHumanBrytth,
    // ...HumanoidsHumanFomoire,
    // ...HumanoidsHumanKrasaheim,
    // ...HumanoidsHumanMessar,
    // ...HumanoidsHumanMycenae,
    // ...HumanoidsHumanVindictis,
    // ...HumanoidsHumanOutlaw,
}