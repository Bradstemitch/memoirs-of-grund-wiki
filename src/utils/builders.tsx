import latinize from 'latinize';

function coreBuilder(name: any, filename: any, fileLoc: any, imageLoc: any, pronunciation: any, tags: string[]) {
    return ({
        "name": name,
        "fileName": latinize(filename),
        "fileLoc": fileLoc,
        "imageLoc": `images/${latinize(imageLoc)}`,
        "pronunciation": pronunciation,
        "tags": tags,
    })
}

export function coreCharacterBuilder(forname: string, surname: string, tags: string[], pronunciation: string) {
    const nameObj = {
        'fore': forname,
        'sur': surname,
    }
    return coreBuilder(nameObj, (forname + surname).replace(/\s/g, ""), 'characters', `characters/THUMBNAIL_${(forname + surname.replace(/\s/g, ""))}.webp`, pronunciation, tags)
}

export function coreLocationBuilder(name: any, pronunciation: string, tags: string[]) {
    return coreBuilder(name, name.toLowerCase(), 'locations', '', pronunciation, tags)
}
export function coreNationBuilder(name: any, imageLoc: any, pronunciation: string, tags: string[]) {
    return coreBuilder(name, name.replace(/\s/g, ""), 'nations', `emblems/${(imageLoc.replace(/\s/g, ""))}.webp`, pronunciation, tags)
}
export function coreReligionBuilder(name: any, tags: string[]) {
    return coreBuilder(name, name.replace(/\s/g, ""), 'religions', '', '', tags)
}