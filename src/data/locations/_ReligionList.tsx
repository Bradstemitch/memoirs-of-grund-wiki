import { coreReligionBuilder } from "../../utils/builders"

export const RELIGION_Core = {
    'DRACONIC_PANTHEON': coreReligionBuilder('Messact', [''])
}

export function religionCore(name: any, image: any, pronunciation: any, tags: string[]) {
    return ({
        "name": name,
        "fileName": name.toLowerCase(),
        "fileLoc": "locations",
        "tags": tags,
        "image": image,
        "pronunciation": pronunciation,
    })
}