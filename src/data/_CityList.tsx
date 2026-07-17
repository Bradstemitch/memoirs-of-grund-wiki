import { coreLocationBuilder } from "../utils/builders";
import { NATION_Core, RELIGION_Core } from "./__DATA_Core";

function cityInfoBasic(variations: any, type: any, ruler: any, country: any, region: any, location: any, institutions: any, placesOfNote: any, status: any) {
    return ({
        'basic': {
            'title': 'Basic',
            'values': {
                "variations": {
                    'title': 'Variations',
                    'value': variations,
                },
                "type": {
                    'title': 'Type',
                    'value': type,
                },
                "ruler": {
                    'title': 'Ruler',
                    'value': ruler,
                },
                "country": {
                    'title': 'Country',
                    'value': country,
                },
                "region": {
                    'title': 'Region',
                    'value': region,
                },
                "location": {
                    'title': 'Location',
                    'value': location,
                },
                'institutions': {
                    'title': 'Institutions',
                    'value': institutions,
                },
                'placesOfNote': {
                    'title': 'Places of Note',
                    'value': placesOfNote,
                },
                'status': {
                    'title': 'Status',
                    'value': status,
                },
            }
        }
    })
}

function cityInfoSocial(population: any, garrison: any, religion: any, founded: any, age: any, founder: any) {
    return ({
        'social': {
            'title': 'Social',
            'values': {
                "population": {
                    'title': 'Population',
                    'value': population,
                },
                "garrison": {
                    'title': 'Garrison',
                    'value': garrison,
                },
                "religion": {
                    'title': 'Religion',
                    'value': religion,
                },
                "founded": {
                    'title': 'Founded',
                    'value': founded,
                },
                "age": {
                    'title': 'Age',
                    'value': age,
                },
                "founder": {
                    'title': 'Founder',
                    'value': founder,
                },
            }
        }
    })
}

export const CITY_Core = {
    'MESSACT': coreLocationBuilder('Messact', 'May-sack-t', [''])
}

export const CITY_Info = {
    'MESSACT': {
        'info': {
            ...cityInfoBasic([''], 'Capital City', 'Monarch of Atrea', NATION_Core.MESSAR, '', '',
                [
                    "University",
                    "Messan Theives Guild",
                    "Priesthood of Mortis",
                    "Priesthood of Vitae"
                ],
                [
                    "Citadel",
                    "Docks",
                    "The Broken Shield",
                    "Shrine of the Entwined Dragons"
                ], 'Capital of Atrea and the Messan Heptarchy'
            ),
            ...cityInfoSocial(500000, '', RELIGION_Core.DRACONIC_PANTHEON, null, '>1000 years', null),
        }
    }
}

export const MessarMessactData =
{
    "summary": [
        "Infiltration and assassination unit made up of the stealthiest troops in the Remnant. They replace or remove people in positions of power to turn the odds in their favour"
    ]
}

