import { coreLocationBuilder } from "../../utils/builders";
import { NATION_Core, RELIGION_Core } from "../_DATA_Core";

function cityInfoBasic(variations: any, type: any, ruler: any, country: any, region: any, location: any, institutions: any, placesOfNote: any, status: any) {
    return ({
        'basic': {
            "variations": variations,
            "type": type,
            "ruler": ruler,
            "country": country,
            "region": region,
            "location": location,
            'institutions': institutions,
            'placesOfNote': placesOfNote,
            'status': status
        }
    })
}

function cityInfoSocial(population: any, garrison: any, religion: any, founded: any, age: any, founder: any) {
    return ({
        'basic': {
            "population": population,
            "garrison": garrison,
            "religion": religion,
            "founded": founded,
            "age": age,
            "founder": founder,
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

