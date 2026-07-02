import { creatureBuilder } from "../../utils/common"

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

const HumanoidsGoblinoid = [
    creatureBuilder(`Goblin`, `Goblin`, `Goblin`, ``, 3, `Silver`, ['Humanoid', 'Goblinoid', 'Goblin']),            //Todo
]

export const Humanoids: any = [
    ...HumanoidsGoblinoid,
]