import { HumanoidsGoblinoid } from "./Humanoids/Goblinoids";
import { HumanoidsHuman } from "./Humanoids/Human";
import { HumanoidsOutlaw } from "./Humanoids/Outlaw";

export const Humanoids: any = [
    ...HumanoidsGoblinoid, 
    ...HumanoidsHuman, 
    ...HumanoidsOutlaw
]

export const HumanoidDnD5eCategories: any = [
    {
        'cat': 'Goblinoid',
        'sub': [
            'Goblin'
        ]
    },
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
