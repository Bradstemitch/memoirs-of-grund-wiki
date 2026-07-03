import { CHARACTER_Core, CITY_Core, NATION_Core, RELIGION_Core } from "./__DATA_Core";

function nationInfoBasic(variations: any, government: any, status: string, ruler: any, founded: Number, area: Number, population: Number) {
    return ({
        'basic': {
            "variations": variations,
            "government": government,
            "status": status,
            "ruler": ruler,
            "founded": founded,
            "area": area,
            "population": population,
        }
    })
}
function nationInfoGov(headOfState: any, headOfGovernment: any, commander: string, military: any, intelligence: any) {
    return ({
        'government': {
            "headOfState": headOfState,
            'headOfGovernment': headOfGovernment,
            'commander': commander,
            'military': military,
            'intelligence': intelligence,
        }
    })
}
function nationInfoSocial(capital: any, currency: any, demonym: string, language: any, religion: any) {
    return ({
        'social': {
            "capital": capital,
            'currency': currency,
            'demonym': demonym,
            'language': language,
            'religion': religion,
        }
    })
}
function nationNotables(notables: any) {
    return ({
        'notables': {
            "notables": notables,
        }
    })
}
function notableBuilder(person: any, startDate: Number | null, endDate: Number | null) {
    return ({
        'person': person,
        "startDate": startDate,
        "endDate": endDate,
    })
}
function notablesBuilder(title: any, notables: any) {
    return ({
        'type': title,
        "list": notables,

    })
}
function nationLocations(type: any, location: any) {
    return ({
        "type": type,
        'list': location
    })
}


export const NATION_Info = {
    'MESSAR': {
        'info': {
            ...nationInfoBasic(['Messar'], 'Elective Monarchy', 'Kingdom', 'High King / Queen of Messar', 375, 210000, 9000000),
            ...nationInfoGov(['High King / Queen', 'King’s Thegn (regent)'], 'Heptarchy', 'High-Thegn of Messar', 'Fyrd', 'The Daughters'),
            ...nationInfoSocial(CITY_Core.MESSACT, '', 'Messan', 'Aeaxon', RELIGION_Core.DRACONIC_PANTHEON),
        }
    }
}

export const NATION_Notables = {
    'MESSAR': nationNotables([
        notablesBuilder('High Kings / Queens', [notableBuilder(CHARACTER_Core.OberonValerian, 982, 983), notableBuilder(CHARACTER_Core.NolaThesoti, 983, null)])
    ])
}

export const NATION_Locations = {
    'MESSAR': {
        'locations': {
            ...nationLocations('City', [
                CITY_Core.MESSACT
                // MessarMessactData,
                // // Sylvastead(woodcutters and main canal user), 
                // MessarSylvasteadData,
                // // Vergris(former mining town),
                // messarVergrisData,
                // MessarVillenData,
                // // Creich(Mountain Springs),
                // MessarCreichData,
                // // Stanshaw(in moutain surrounded by dense forest), 
                // MessarStanshawData,
                // // Polton(built next to the lake),
                // MessarPoltonData,
                // // Norcester(northern barricade),
                // MessarNorcesterData,
                // // Stanport(costal town), 
                // MessarStanportData,
                // // Astborough(fort town near brytth),
                // MessarAstboroughData,
                // // Dale(valley city),
                // MessarDaleData,
                // // Dolton(farming community on canal),
                // MessarDoltonData,
                // // Blenster, 
                // MessarBlensterData,
                // // Sutport(large port town), 
                // MessarSutportData,
                // // wesford(bridge city across the frontier)
                // MessarWesfordData,
            ]),
            ...nationLocations('Ruins', [
                'Shadows Refuge',
                'Solitude Portal',
            ]),
            ...nationLocations('Prometheus Facilities', [
                'P-262',
                'P-618',
            ]),
        }
    }
}
export const MessanHeptarchyInfo = {
    'info': {
        // "basic": {
        //     nationBuilder('variations": [
        //         nationBuilder('Messar'),
        //     ],
        //     nationBuilder('government": [
        //         nationBuilder('Elective Monarchy'),
        //     ],
        //     nationBuilder('status": [
        //         nationBuilder('Kingdom'),
        //     ],
        //     nationBuilder('ruler": [
        //         nationBuilder('High King / Queen of Messar'),
        //     ],
        //     nationBuilder('founded": [
        //         nationBuilder('375 CE'),
        //     ],
        //     nationBuilder('area": [
        //         nationBuilder('~210,000 sq mi'),
        //     ],
        //     nationBuilder('population": [
        //         nationBuilder('~9,000,000 (~40/sq. mi)'),
        //     ],
        // },
        // },
    }
}

export const MessanHeptarchyProvinces = {
    'provinces': [
        {
            'type': "Main",
            'list': [
                // MessanHeptarchyAtreaData,
            ]
        },
        {
            'type': "Heptarchs",
            'list': [
                // MessanHeptarchyBreccaData,
                // MessanHeptarchyEthyeData,
                // MessanHeptarchyNeaxeData,
                // MessanHeptarchySeaxeData,
                // MessanHeptarchyTrifeData,
                // MessanHeptarchyWeaxeData,
            ]
        },
        {
            'type': "Vassals",
            'list': [
                // MessanHeptarchyBabaccaData,
                // MessanHeptarchyMaarraData,
                // MessanHeptarchySudarData,
            ]
        }
    ]
}

function nationBuilder(name: string) {
  return ({
    ...NATION_Core[name] || null,
    ...NATION_Info[name] || null,
    ...NATION_Notables[name] || null,
    ...NATION_Locations[name] || null,
  })
}

export const NationList = Object.keys(NATION_Core).map(nation => {
  return nationBuilder(nation)
})