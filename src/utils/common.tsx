export function capitalise(s: string) {
    return s[0].toUpperCase() + s.slice(1);
}

export function cleanFoundryVariables(s: string) {
    s = s.replaceAll('@UUID[Compendium.pf2e.actionspf2e.Item.2u915NdUyQan6uKF]{Demoralize}', 'Demoralize')
    s = s.replaceAll('@UUID[Compendium.pf2e.conditionitems.Item.TBSHQspnbcqxsmjL]{Frightened}', 'Frightened')
    s = s.replaceAll('@UUID[Compendium.pf2e.conditionitems.Item.AJh5ex99aV6VTggg]{Off-Guard}', 'Off-Guard')
    s = s.replaceAll('@UUID[Compendium.pf2e.bestiary-effects.Item.T9wQ1LvsvPWTefQR]{Effect: Under Command}', '')
    s = s.replaceAll('@UUID[Compendium.pf2e.bestiary-effects.Item.OxOMYmlPtjsEkRtY]{Effect: Aura of Command}', '')
    s = s.replaceAll('@UUID[Compendium.pf2e.bestiary-ability-glossary-srd.Item.v61oEQaDdcRpaZ9X]{Aura}', 'Aura')
    s = s.replaceAll('@Template[type:emanation|distance:30]{30 feet}', '30ft.')
    s = s.replaceAll('<p>', '')
    s = s.replaceAll('</p>', '')
    s = s.replaceAll('<hr />', ':')
    return s;
}