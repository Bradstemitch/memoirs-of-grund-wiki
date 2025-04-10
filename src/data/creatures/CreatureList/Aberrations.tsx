import { AberrationScourge } from "./Aberrations/Scourge"

export const Aberrations = [
    {
        'name': 'Devourer',
        'fileName': 'AberrationDevourer',
        'tags': ['Aberration']
    },
    {
        'name': 'Pursuer',
        'fileName': 'AberrationPursuer',
        'tags': ['Aberration']
    },
    {
        'name': 'Watcher',
        'fileName': 'AberrationWatcher',
        'tags': ['Aberration']
    },
    ...AberrationScourge
]

export const AberrationDnD5eCategories: any = [
    {
        'cat': 'Scourge',
        'sub': []
    }
]