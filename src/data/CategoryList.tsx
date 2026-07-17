// import { AberrationDnD5eCategories } from "./creatures/Aberrations"
// import { DragonDnD5eCategories } from "./creatures/Dragons"
// import { FeyDnD5eCategories } from "./creatures/Fey"
// import { FiendDnD5eCategories } from "./creatures/Fiends"
// import { GiantDnD5eCategories } from "./creatures/Giants"
// import { HumanoidDnD5eCategories } from "./creatures/Humanoids"
// import { MonsterDnD5eCategories } from "./creatures/Monsters"
// import { UndeadDnD5eCategories } from "./creatures/Undead"

export const nationTypes: any = [
    {
        'type': 'Empire',
        'plural': ' Empires',
    },
    {
        'type': 'Kingdom',
        'plural': ' Kingdoms',
    },
    {
        'type': 'Tribal',
        'plural': 'Tribes',
    },
    {
        'type': 'Petty Kingdom',
        'plural': 'Petty Kingdoms',
    },
    {
        'type': 'City State',
        'plural': 'City States',
    }
]

export const itemTypes: any = {
    'DnD5e': ['Armour', 'Weapons', 'Adventuring Gear', 'Tools'],
    'Path2e': ['Adventuring Gear', 'Alchemical Items', 'Armour', 'Shields', 'Weapons'],
    'WFRP4e': ['Armour', 'Weapon', 'Adventuring Gear', 'Tool']
}

export const magicItemTypes: any = {
    'DnD5e': ['Armour', 'Potion', 'Ring', 'Rod', 'Scroll', 'Staff', 'Wand', 'Weapon', 'Wondrous Item'],
    'Path2e': ['Armour', 'Held Items', 'Runes', 'Shields', 'Weapons', 'Worn Items'],
    'WFRP4e': ['Armour', 'Potion', 'Ring', 'Rod', 'Scroll', 'Staff', 'Wand', 'Weapon', 'Wondrous Item'],
}
function categoryBuilder(single: string, plural: string | null, subCat?: any) {
    return ({
        'single': single,
        'plural': plural || single + 's',
        'searchCat': single,
        'subCat': subCat
    })
}
export const factions: any = [
    categoryBuilder('Elf', 'Elves', [
        categoryBuilder('Alder', 'Alder'),
        categoryBuilder('Sylvan', null),
        categoryBuilder('Drow', 'Drow'),
    ]),
    categoryBuilder('Human Kingdom', null, [
        categoryBuilder('Akitsudo', null),
        categoryBuilder('Allaire', null),
        categoryBuilder('Brytth', null),
        categoryBuilder('Carne', null),
        categoryBuilder('Damocles', null),
        categoryBuilder('Fomoire', null),
        categoryBuilder('Gol', 'Gol'),
        categoryBuilder('Krasaheim', null),
        categoryBuilder('Legion', null),
        categoryBuilder('Messar', null),
        categoryBuilder('Mycenae', null),
        categoryBuilder('Vindictis', null),
    ]),
    categoryBuilder('Dryad', null),
    categoryBuilder('Primordial', null),
    categoryBuilder('Damocles', 'Damocles'),
    categoryBuilder('Vindictis', 'Vindictis'),
    categoryBuilder('Promethean', null),
]

export const creatureTypes = {
    'single': 'Human',
    'plural': 'Human',
    'searchCat': 'Human',
}
// export const creatureTypes: any = {
//     'DnD5e': [
//         {
//             'single': 'Aberration',
//             'plural': 'Aberrations',
//             'searchCat': 'Aberration',
//             'system': AberrationDnD5eCategories
//         },
//         {
//             'single': 'Dragon',
//             'plural': 'Dragons',
//             'searchCat': 'Dragon',
//             'system': DragonDnD5eCategories
//         },
//         {
//             'single': 'Fey',
//             'plural': 'Fey',
//             'searchCat': 'Fey',
//             'system': FeyDnD5eCategories
//         },
//         {
//             'single': 'Fiend',
//             'plural': 'Fiends',
//             'searchCat': 'Fiend',
//             'system': FiendDnD5eCategories
//         },
//         {
//             'single': 'Giant',
//             'plural': 'Giants',
//             'searchCat': 'Giant',
//             'system': GiantDnD5eCategories
//         },
//         {
//             'single': 'Humanoid',
//             'plural': 'Humanoids',
//             'searchCat': 'Humanoid',
//             'system': HumanoidDnD5eCategories
//         },
//         {
//             'single': 'Monstrosity',
//             'plural': 'Monstrosities',
//             'searchCat': 'Monster',
//             'system': MonsterDnD5eCategories
//         },
//         {
//             'single': 'Undead',
//             'plural': 'Undead',
//             'searchCat': 'Undead',
//             'system': UndeadDnD5eCategories
//         }
//     ],
//     'Path2e': [
//         {
//             'single': 'Aberration',
//             'plural': 'Aberrations',
//             'searchCat': 'Aberration',
//             'system': AberrationDnD5eCategories
//         },
//         {
//             'single': 'Beast',
//             'plural': 'Beasts',
//             'searchCat': 'Monster',
//             'system': MonsterDnD5eCategories
//         },
//         {
//             'single': 'Dragon',
//             'plural': 'Dragons',
//             'searchCat': 'Dragon',
//             'system': DragonDnD5eCategories
//         },
//         {
//             'single': 'Fey',
//             'plural': 'Fey',
//             'searchCat': 'Fey',
//             'system': FeyDnD5eCategories
//         },
//         {
//             'single': 'Fiend',
//             'plural': 'Fiends',
//             'searchCat': 'Fiend',
//             'system': FiendDnD5eCategories
//         },
//         {
//             'single': 'Giant',
//             'plural': 'Giants',
//             'searchCat': 'Giant',
//             'system': GiantDnD5eCategories
//         },
//         {
//             'single': 'Humanoid',
//             'plural': 'Humanoids',
//             'searchCat': 'Humanoid',
//             'system': HumanoidDnD5eCategories
//         },
//         {
//             'single': 'Undead',
//             'plural': 'Undead',
//             'searchCat': 'Undead',
//             'system': UndeadDnD5eCategories
//         }
//     ],
//     'WFRP4e': [
//         {
//             'single': 'Aberration',
//             'plural': 'Aberrations',
//             'searchCat': 'Aberration',
//             'system': AberrationDnD5eCategories
//         },
//         {
//             'single': 'Dragon',
//             'plural': 'Dragons',
//             'searchCat': 'Dragon',
//             'system': DragonDnD5eCategories
//         },
//         {
//             'single': 'Fey',
//             'plural': 'Fey',
//             'searchCat': 'Fey',
//             'system': FeyDnD5eCategories
//         },
//         {
//             'single': 'Fiend',
//             'plural': 'Fiends',
//             'searchCat': 'Fiend',
//             'system': FiendDnD5eCategories
//         },
//         {
//             'single': 'Giant',
//             'plural': 'Giants',
//             'searchCat': 'Giant',
//             'system': GiantDnD5eCategories
//         },
//         {
//             'single': 'Humanoid',
//             'plural': 'Humanoids',
//             'searchCat': 'Humanoid',
//             'system': HumanoidDnD5eCategories
//         },
//         {
//             'single': 'Monstrosity',
//             'plural': 'Monstrosities',
//             'searchCat': 'Monster',
//             'system': MonsterDnD5eCategories
//         },
//         {
//             'single': 'Undead',
//             'plural': 'Undead',
//             'searchCat': 'Undead',
//             'system': UndeadDnD5eCategories
//         }
//     ]
// }



