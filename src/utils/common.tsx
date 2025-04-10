export function capitalise(s: string) {
    return s[0].toUpperCase() + s.slice(1);
}

export function cleanFoundryVariables(s: string) {
    s = s.replaceAll('@UUID[Compendium.pf2e.actionspf2e.Item.2u915NdUyQan6uKF]{Demoralize}', 'Demoralize')
    //pf2e.conditionitems.Item.
    s = s.replaceAll('@UUID[Compendium.pf2e.conditionitems.Item.', '')
    s = s.replaceAll('TBSHQspnbcqxsmjL]{Frightened}', 'Frightened')
    s = s.replaceAll('AJh5ex99aV6VTggg]{Off-Guard}', 'Off-Guard')
    s = s.replaceAll('fesd1n5eVhpCSS18]{Sickened 1}', 'Sickened 1')
    s = s.replaceAll('xYTAsEpcJE1Ccni3]{Slowed 1}', 'Slowed 1')
    //pf2e.bestiary-effects.Item
    s = s.replaceAll('@UUID[Compendium.pf2e.bestiary-effects.Item.', '')
    s = s.replaceAll('T9wQ1LvsvPWTefQR]{Effect: Under Command}', '')
    s = s.replaceAll('OxOMYmlPtjsEkRtY]{Effect: Aura of Command}', '')
    s = s.replaceAll('wX9L6fbqVMLP05hn]{Effect: Stench}', '')
    //
    s = s.replaceAll('@UUID[Compendium.pf2e.bestiary-ability-glossary-srd.Item.v61oEQaDdcRpaZ9X]{Aura}', 'Aura')
    //
    s = s.replaceAll('@Template[type:emanation|distance:', '')
    s = s.replaceAll('10]{10 feet}', '10ft.')
    s = s.replaceAll('30]{30 feet}', '30ft.')
    //
    s = s.replaceAll('<p>', '')
    s = s.replaceAll('</p>', '')
    s = s.replaceAll('<hr />', ':')
    return s;
}