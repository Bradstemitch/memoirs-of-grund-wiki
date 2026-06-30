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
function creatureBuilder(name: string, species: string, faction: string, weapon: string, threat: number, rank: string, tags: string[]) {
    return (
        {
            'name': name,
            'species': species,
            'faction': faction,
            'weapon': weapon,
            'threat': threat,
            'rank': rank,
            'fileName': (faction + name).replace(/\s/g, ""),
            'tags': tags
        }
    )
}
const HumanoidsHumanAkitsudo = [
    creatureBuilder(`Ashigaru`, `Human`, `Akitsudan`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Akitsudo']),            //Todo
    creatureBuilder(`Sengoku Samurai`, `Human`, `Akitsudan`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Akitsudo']),     //Todo
]
const HumanoidsHumanAllaire = [
    creatureBuilder(`Arbalest`, `Human`, `Allairan`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),             //Todo
    creatureBuilder(`Levy`, `Human`, `Allairan`, ``, 1, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
    creatureBuilder(`Pedite`, `Human`, `Allairan`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),               //Todo
    creatureBuilder(`Milite`, `Human`, `Allairan`, ``, 5, `Silver`, ['Humanoid', 'Human', 'Allaire']),               //Todo
    creatureBuilder(`Knight`, `Human`, `Allairan`, ``, 2, `Gold`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
]
const HumanoidsHumanBrytth = [
    creatureBuilder(`Black Company`, `Human`, `Brythonic`, ``, 2, `Gold`, ['Humanoid', 'Human', 'Brytth']),           //Todo
    creatureBuilder(`Limitanei`, `Human`, `Brythonic`, ``, 2, `Gold`, ['Humanoid', 'Human', 'Brytth']),               //Todo
    creatureBuilder(`Comitatenses`, `Human`, `Brythonic`, ``, 2, `Gold`, ['Humanoid', 'Human', 'Brytth']),            //Todo
    creatureBuilder(`Palatini`, `Human`, `Brythonic`, ``, 2, `Gold`, ['Humanoid', 'Human', 'Brytth']),                //Todo
]
const HumanoidsHumanFomoire = [
    creatureBuilder(`Youth`, `Human`, `Fomorian`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
    creatureBuilder(`Ceithearn`, `Human`, `Fomorian`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
    creatureBuilder(`Gallóglaigh`, `Human`, `Fomorian`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
    creatureBuilder(`Chosen`, `Human`, `Fomorian`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
]
const HumanoidsHumanKrasaheim = [
    creatureBuilder(`Raider`, `Human`, `Krasen`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
    creatureBuilder(`Huskarl`, `Human`, `Krasen`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
    creatureBuilder(`Berserker`, `Human`, `Krasen`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
]
const HumanoidsHumanMessar = [
    creatureBuilder(`Archer`, `Human`, `Messan`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
    creatureBuilder(`Fyrd`, `Human`, `Messan`, ``, 5, `Brass`, ['Humanoid', 'Human', 'Allaire']),                    //Todo
    creatureBuilder(`Select-Fyrd`, `Human`, `Messan`, ``, 1, `Silver`, ['Humanoid', 'Human', 'Allaire']),            //Todo
    creatureBuilder(`Huscarl`, `Human`, `Messan`, ``, 4, `Silver`, ['Humanoid', 'Human', 'Allaire']),                //Todo
    creatureBuilder(`Thegn`, `Human`, `Messan`, ``, 2, `Gold`, ['Humanoid', 'Human', 'Allaire']),                    //Todo
]
const HumanoidsHumanMycenae = [
    creatureBuilder(`Hoplite`, `Human`, `Mycenaean`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
    creatureBuilder(`Armoured Hoplite`, `Human`, `Mycenaean`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
    creatureBuilder(`Myrmidon`, `Human`, `Mycenaean`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
]
const HumanoidsHumanVindictis = [
    creatureBuilder(`Fusilier`, `Human`, `Vindictis`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
    creatureBuilder(`Voltigeur`, `Human`, `Vindictis`, ``, 3, `Silver`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
]
const HumanoidsHumanOutlaw = [
    creatureBuilder(`Mugger`, `Human`, `Outlaw`, ``, 2, `Brass`, ['Humanoid', 'Human', 'Allaire']),                  //Todo
    creatureBuilder(`Assassin`, `Human`, `Outlaw`, ``, 1, `Gold`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
    creatureBuilder(`Robber`, `Human`, `Outlaw`, ``, 1, `Brass`, ['Humanoid', 'Human', 'Allaire']),                  //Todo
    creatureBuilder(`Brigand`, `Human`, `Outlaw`, ``, 2, `Brass`, ['Humanoid', 'Human', 'Allaire']),                 //Todo
    creatureBuilder(`Marauder`, `Human`, `Outlaw`, ``, 4, `Brass`, ['Humanoid', 'Human', 'Allaire']),                //Todo
]
// ...WFRP4eNPC("Giant", "Giant", "Ogre", "", 4, "Silver"),

export const Humans: any = [
    ...HumanoidsHumanAkitsudo,
    ...HumanoidsHumanAllaire,
    ...HumanoidsHumanBrytth,
    ...HumanoidsHumanFomoire,
    ...HumanoidsHumanKrasaheim,
    ...HumanoidsHumanMessar,
    ...HumanoidsHumanMycenae,
    ...HumanoidsHumanVindictis,
    ...HumanoidsHumanOutlaw,
]