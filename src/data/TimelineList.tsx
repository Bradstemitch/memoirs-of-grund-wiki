function centuryBuilder(century: string, years: any[]) {
  return (
    {
      'century': century,
      'years': years
    }
  )
}
function yearBuilder(year: Number, events: any[]) {
  return (
    {
      'year': year,
      'events': events
    }
  )
}
function eventBuilder(name: string, fileName: string, tags: string[]) {
  return (
    {
      'name': name,
      'fileName': fileName || "TODO",
      'tags': tags
    }
  )
}
export const TimelineList = [
  centuryBuilder(`2nd Century BCE`, [
    yearBuilder(-117, [
      eventBuilder(`Roman Legions are called through the Tower of Babel`, 'TODO', []),
    ]),
    yearBuilder(-114, [
      eventBuilder(`The Northern cataclysm`, 'TODO', []),
    ]),
    yearBuilder(-113, [
      eventBuilder(`'The Accords' are agreed between 'The Prometheus Initiative' and 'The Swords of Damocles'`, 'TODO', []),
      eventBuilder(`First siege of Coed-Duon`, 'TODO', []),
      eventBuilder(`Devestation of Bedegar`, 'TODO', []),
      eventBuilder(`Sett sends his mesha to invade Arcadia, the Aeaxon Kingdoms, the Tuatha Kingdoms and Fomoire (War of the Dead)`, 'TODO', []),
    ]),
  ]),
  centuryBuilder(`1st Century BCE`, [
    yearBuilder(-97, [
      eventBuilder(`Roman Legions conquer the Al'der cities, forming the SPQC`, 'TODO', []),
    ]),
    yearBuilder(-53, [
      eventBuilder(`The SPQC undergoes its 'Elven Renaissance', granting any free elves Carnan Citizenship`, 'TODO', []),
    ]),
    yearBuilder(-18, [
      eventBuilder(`Vindictis assault the Refuge`, 'TODO', []),
      eventBuilder(`Vindictis declare the end of the Shadow War`, 'TODO', []),
    ]),
    yearBuilder(-16, [
      eventBuilder(`The Second Siege of Coed-Duon`, 'siegeOfCoedDuon2', []),
      eventBuilder(`Balor's invasion of the Tuatha Kingdoms begins (Fomoire Wars)`, 'TODO', []),
    ]),
    yearBuilder(-12, [
      eventBuilder(`The SPQC ends the Fomoire Wars and occupy the new province of Albion`, 'TODO', []),
      eventBuilder(`28/09 - Aneurin, Arlys and members of the Knight Commando enter the deep searching for Dark Elf allies and come across an awakened Scourge Hive, Aneurin and the commando escape but Arlyss delays the Scourge and is seemingly lost`, 'TODO', []),
    ]),
    yearBuilder(-11, [
      eventBuilder(`Captain Vitae leads the Zealots into the deep, hunting the last known location of Arlyss Knight and is forced into a brutal battle for survival against the dormant Scourge Hive`, 'TODO', []),
    ]),
  ]),
  centuryBuilder(`1st Century CE`, [
    yearBuilder(0, [
      eventBuilder(`End of the 60 years war`, 'TODO', []),
      eventBuilder(`Collapse of the Arcadian Empire`, 'TODO', []),
      eventBuilder(`First Emperor of Allaire crowned`, 'TODO', []),
    ]),
    yearBuilder(43, [
      eventBuilder(`Brytth is formed as a povince under the SPQC`, 'TODO', []),
    ]),
  ]),
  centuryBuilder(`4th Century CE`, [
    yearBuilder(363, [
      eventBuilder(`The SPQC undergoes civil war (80 years war)`, 'TODO', []),
    ]),
    yearBuilder(375, [
      eventBuilder(`The Aexon Kingdomes join together to form the Messan Heptarchy`, 'TODO', []),
    ]),
  ]),
  centuryBuilder(`5th Century CE`, [
    yearBuilder(410, [
      eventBuilder(`Brytth breaks away from the SPQC under Constantine III, becoming an independent kingdom`, 'TODO', []),
    ]),
    yearBuilder(442, [
      eventBuilder(`The 80 Year War ends with the crowning of Emperor ???`, 'TODO', []),
    ]),
  ]),
  centuryBuilder(`6th Century CE`, [
    yearBuilder(537, [
      eventBuilder(`Battle of Camlann`, 'TODO', []),
      eventBuilder(`Death of 'King' Mordred`, 'TODO', []),
      eventBuilder(`Death of King Arthur`, 'TODO', []),
    ]),
  ]),
  centuryBuilder(`9th Century CE`, [
    yearBuilder(868, [
      eventBuilder(`Mordred awakened from his post-mortem slumber`, 'TODO', []),
    ]),
  ]),
  centuryBuilder(`10th Century CE`, [
    yearBuilder(923, [
      eventBuilder(`The Messan Rebellion and The Legion defeat the Vindictis and Messan army at the Battle of Morton, ending the Messan Civil War`, 'TODO', []),
      eventBuilder(`The Reaper dies`, 'TODO', []),
    ]),
    yearBuilder(945, [
      eventBuilder(`Present`, 'TODO', []),
    ]),
  ]),
]