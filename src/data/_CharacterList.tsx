import { NATIONS, ORGANISATIONS, SPECIES } from "./constants"
import { CHARACTER_Core, NATION_Core } from "./__DATA_Core"
import { coreCharacterBuilder } from "../utils/builders"
import { internalLink } from "../utils/common"

export function characterInfoBasic(nationality: any, born: Number | null, status: string, death: Number | null) {
  const show = nationality || born || status || death
  return ({
    "basic": {
      'show': show,
      "nationality": [nationality],
      "born": born,
      "status": status,
      "died": death
    },
  })
}

export function characterInfoPhysical(species: any, gender: string, height: Number, hairColour: string, eyeColour: string, skinColour: string) {
  const show = species || gender || height || hairColour || eyeColour || skinColour
  return ({
    "physical": {
      'show': show,
      "species": species,
      "gender": gender,
      "height": height.toString() + " meters",
      "hair": hairColour,
      "eyes": eyeColour,
      "skin": skinColour,
    },
  })
}

export function characterInfoPersonal(titles: string | string[] | null, professions: string | string[] | null, affiliations: any, skills: string | string[] | null) {
  const show = titles || professions || affiliations || skills
  return ({
    "personal": {
      'show': show,
      "titles": titles,
      "professions": professions,
      "affiliations": affiliations,
      "skills": skills,
    },
  })
}

export function characterInfoFamily(relatives: any, partner: any, children: any) {
  const show = relatives || partner || children
  return ({
    "family": {
      'show': show,
      "relatives": relatives,
      "partner": partner,
      "children": children,
    }
  })
}


export function detailBuilder(name: any, detail: string) {
  return ({
    "detail": detail,
    "data": { "name": name }
  })
}

export const CHARACTER_Info = {
  'ANEURIN': {
    'alias': ['Reaper', `'Icarus'`],
    'info': {
      ...characterInfoBasic('Tuatha De Danann', -34, 'Stasis (9 BCE)', null),
      ...characterInfoPhysical(
        [
          detailBuilder('Human', 'Formerly'),
          detailBuilder('High Dragon', 'Zyz')
        ],
        'Male', 1.88, 'Brown', 'Green', 'White'),
      ...characterInfoPersonal(['Reaper'], ['Reaper of Damocles'],
        [
          detailBuilder('Swords of Damocles', 'Formerly'),
          'Shards of Damocles',
        ],
        [
          'Master Tactician',
          'Swordsmanship',
          'Spearsmanship',
          'Crossbow',
          'Magic',
        ]),
      ...characterInfoFamily(
        [
          detailBuilder('Unknown', 'Mother'),
          detailBuilder('Unknown', 'Father'),
          detailBuilder(CHARACTER_Core.Scáthach, 'Mentor'),
        ],
        [
          detailBuilder(CHARACTER_Core.LyraVitae, 'Wife'),
          detailBuilder('Eve', 'Melded'),
        ],
        [
          detailBuilder('Essylt', 'Scourge Imprint'),
          detailBuilder(CHARACTER_Core.LETA, 'Daughter'),
          detailBuilder(CHARACTER_Core.LilithFaire, 'Daughter in law'),
        ],),
    }
  },
  "ArlyssKnight": {
    'alias': ['Reaper', `'Tac'`, 'Knight'],
    'info': {
      ...characterInfoBasic('Terran', -24, 'Deceased', -7),
      ...characterInfoPhysical(
        [
          detailBuilder('Human', 'Formerly'),
          detailBuilder('High Dragon', 'Zyz')
        ],
        'Male', 1.63, 'Brown', 'Ice Blue', 'White'),
      ...characterInfoPersonal(['Knight', 'Reaper'], null,
        [
          detailBuilder('Swords of Damocles', 'Formerly'),
          'Knight Commando',
          detailBuilder('Vindictis', 'Infiltration'),
        ],
        [
          'Master Tactician',
          'Swordsmanship',
          'Spearsmanship',
          'Crossbow',
          'Magic',
        ]),
      ...characterInfoFamily(
        [
          detailBuilder('Unknown', 'Mother'),
          detailBuilder('Unknown', 'Father'),
        ],
        [
          detailBuilder(CHARACTER_Core.LyraVitae, 'Wife'),
          detailBuilder('Eve', 'Melded'),
        ],
        [
          detailBuilder('Essylt', 'Scourge Imprint'),
          detailBuilder(CHARACTER_Core.LETA, 'Daughter'),
          detailBuilder(CHARACTER_Core.LilithFaire, 'Daughter in law'),
        ],),
    }
  },
  "ArthurPendragon": {
    'alias': ['King Arthur', 'Knight', 'The Once and Future King'],
    'info': {
      ...characterInfoBasic(NATION_Core.BRYTTH, null, 'Statis (537 CE)', null),
      ...characterInfoPhysical(
        [
          'Human'
        ],
        'Male', 0, 'Blonde', 'Green', 'White'),
      ...characterInfoPersonal(['Sir', 'Prince', 'King'],
        [
          'King of Brytth'
        ], null, null),
      ...characterInfoFamily(
        [
          detailBuilder('Uther', 'Father'),
          detailBuilder('Ingraine', 'Mother'),
          detailBuilder('Anna', 'Sister'),
        ],
        [
          detailBuilder('Morgan Le Fay', 'Lover'),
          detailBuilder('Guinevere', 'Wife'),
        ],
        [
          detailBuilder(CHARACTER_Core.MORDRED, 'Son'),
        ],),
    }
  },
  'CERBERUS': {
    'alias': ['C3-R8'],
    'info': {
      ...characterInfoBasic(detailBuilder('Terran', 'Greek'), -37, 'Alive', null),
      ...characterInfoPhysical(
        [
          detailBuilder('Human', 'Formerly'),
          'True Vampire'
        ],
        'Male', 1.72, 'Black', 'Red', 'Olive'),
      ...characterInfoPersonal([null], [null],
        [
          detailBuilder('Vindictis', 'Formerly'),
          'The Remnant',
          'The Legion',
          detailBuilder('Messan Rebellion', 'Infiltration'),
        ],
        [
          'Master Tactician',
          'Swordsmanship',
          'Spearsmanship',
          'Crossbow',
          'Magic',
        ]),
      ...characterInfoFamily(
        [
          detailBuilder('Unknown', 'Mother'),
          detailBuilder('Unknown', 'Father'),
          detailBuilder('C4-R8', 'Brother'),
          detailBuilder('C2-R8', 'Sister'),
        ],
        [
          null
        ],
        [
          null
        ],),
    }
  },
  "DagInnVæni": {
    'alias': ['Dag Bothison'],
    'info': {
      ...characterInfoBasic(detailBuilder(NATION_Core.KRASAHEIM, 'Clan Knay'), null, 'Alive', null), // clan knay needs adding
      ...characterInfoPhysical(
        [
          'Human'
        ],
        'Male', 1.65, 'Brown', 'Grey', 'White'),
      ...characterInfoPersonal(['Chosen One'],
        [
          'Berserker'
        ], null, null),
      ...characterInfoFamily(
        [
          detailBuilder('Unknown', 'Father'),
          detailBuilder('Unknown', 'Mother'),
          detailBuilder(CHARACTER_Core.NóttInnRauði, 'Sister'),
        ], null, null),
    }
  },
  "LilithFaire": {
    'alias': ['Rhon’wyn'],
    'info': {
      ...characterInfoBasic(NATIONS.TUATHA_DE_DANANN.name, - 35, 'Alive', null),
      ...characterInfoPhysical(
        [
          detailBuilder(SPECIES.ELF.name, 'Sylvan')
        ]
        , 'Female', 1.83, 'Orange', 'Green', 'White'),
      ...characterInfoPersonal(
        [
          'Second', 'Captain'
        ],
        [
          'Scout', 'Skirmisher',
        ],
        [
          detailBuilder(ORGANISATIONS.VINDICTIS_CONFEDERATION.name, 'Formerly'),
          detailBuilder(ORGANISATIONS.KNIGHT_COMMANDO.name, 'Formerly'),
          ORGANISATIONS.MESSAN_REBELION.name
        ],
        [
          'Swordsmanship',
          'Archery',
          'Scouting,'
        ]),
      ...characterInfoFamily(
        [
          detailBuilder('Unknown', 'Mother'),
          detailBuilder('Unknown', 'Father'),
        ],
        [
          detailBuilder(CHARACTER_Core.LETA, 'Wife')
        ], null),
    }
  },
  "LyraVitae": {
    'alias': ['Song of Life', 'Goddess of Life', 'The Valkyrie'],
    'info': {
      ...characterInfoBasic('Terran', -46, 'Alive', null),
      ...characterInfoPhysical(
        [
          detailBuilder('High Dragon', 'Silver')
        ],
        'Female', 1.79, 'Silver', 'Silver', 'White'),
      ...characterInfoPersonal(['Captain', `'Vitae'`], 'Military Officer',
        [
          detailBuilder('Vindictis', 'Formerly'),
          detailBuilder('Zealots', 'Formerly'),
          detailBuilder('Knight Commando', 'Infiltration'),
          'Messan Rebellion',
        ],
        [
          'Strength',
          'Swordsmanship',
          'Spearsmanship',
          'Magic (Mage)',
        ]),
      ...characterInfoFamily(
        [
          detailBuilder('Macha', 'mother'),
          detailBuilder('Unknown', 'Father'),
        ],
        [
          detailBuilder(CHARACTER_Core.ArlyssKnight, 'Husband'),
        ],
        [
          detailBuilder(CHARACTER_Core.LETA, 'Daughter'),
          detailBuilder(CHARACTER_Core.LilithFaire, 'Daughter in law'),
        ],),
    }
  },
  "NóttInnRauði": {
    'alias': ['Nótt Bothidottir', `'Not' the Chosen-one`, 'Ice-witch'],
    'info': {
      ...characterInfoBasic(NATION_Core.KRASAHEIM, null, 'Alive', null), // clan knay needs adding
      ...characterInfoPhysical(
        [
          'Human'
        ],
        'Female', 1.63, 'White', 'Grey', 'White'),
      ...characterInfoPersonal(['Cursling'],
        [
          'Travelling Merchant'
        ], null, null),
      ...characterInfoFamily(
        [
          detailBuilder('Unknown', 'Father'),
          detailBuilder('Unknown', 'Mother'),
          detailBuilder(CHARACTER_Core.DagInnVæni, 'Brother'),
        ], null,
        [
          detailBuilder('Twig', 'Adopted Son'),
        ]),
    }
  },
  "THRESTROM": {
    'alias': [`"Is that a corpse?"`],
    'info': {
      ...characterInfoBasic(NATION_Core.GOL, -143, 'Deceased', -117),
      ...characterInfoPhysical(
        [
          detailBuilder('Human', 'Gol')
        ],
        'Male', 0, 'Black', 'Blue', 'White (Burnt)'),
      ...characterInfoPersonal(null, 'Paladin of the Forest',
        [
          'Adventurers of 117 BCE',
        ], null),
      ...characterInfoFamily(
        [
          detailBuilder('Unknown', 'mother'),
          detailBuilder('Unknown', 'Father'),
        ], null, null,),
    }
  },
}
/*
{internalLink('Leta', CHARACTER_Core.LETA)}
*/
export const CHARACTER_Contents = {
  '__TEMPLATE': {
    "summary":
      <div>
        <p>
        </p>
      </div>,
    "appearance":
      <div>
      </div>,
    "personality":
      <div>
      </div>,
    "trivia":
      <div>
      </div>,
  },
  'CERBERUS': {
    "summary":
      <div>
        <p>
          <i>"I wonder. If you’d been there when I woke up, what would I have become, would I charge into a horde of soldiers to save a single child? I wonder. If they didnt point me at their enemy and cry havoc, could I have been good?"</i> - Cerberus
        </p>
      </div>,
    "appearance":
      <div>
      </div>,
    "personality":
      <div>
      </div>,
    "trivia":
      <div>
        <p>
          Cerberus was the second named character in Decus
        </p>
      </div>,
  },
  'ACHILLES': {
    "summary":
      <div>
        <p>
          <i>"Hateful to me as the gates of Hades is that man who hides one thing in his heart and speaks another."</i> - Achilles
        </p>
      </div>,
    "appearance":
      <div>
      </div>,
    "personality":
      <div>
      </div>,
    "trivia":
      <div>
      </div>,
  },
  'MEDEA': {
    "summary":
      <div>
        <p>
          In Greek mythology, Medea is the daughter of King Aeëtes of Colchis, a niece of Circe and the granddaughter of the sun god Helios. Medea figures in the myth of Jason and the Argonauts, appearing in Hesiod's Theogony around 700 BC, but best known from Euripides's tragedy Medea and Apollonius of Rhodes' epic Argonautica. Medea is known in most stories as a sorceress and is often depicted as a priestess of the goddess Hecate.
        </p>
        <p>
          She aids Jason in his search for the Golden Fleece out of love, assisting him with her magic and saving his life in several quests, playing the role of an archetypal helper-maiden, before abandoning her native Colchis, marrying him, and fleeing with him westwards where they eventually settle in Corinth. Euripides' 5th century BC tragedy Medea, arguably the best known adaptation of the Medea myth, depicts the ending of said union with Jason, when after ten years of marriage, Jason abandons her to wed the king's daughter Creusa while Medea and her sons by Jason are to be banished from Corinth. In revenge, she murders Creusa and the king with poisoned gifts, and later murders her own sons by Jason before fleeing for Athens, where she eventually marries king Aegeus. Other traditions mention several other causes of death for Medea's sons.
        </p>
        <p>
          What happened afterwards varies according to several accounts. Herodotus in his Histories mentions that she ended up leaving Athens and settling in the Iranian plateau among the Aryans, who subsequently changed their name to the Medes.
        </p>
      </div>,
    "appearance":
      <div>
      </div>,
    "personality":
      <div>
      </div>,
    "trivia":
      <div>
      </div>,
  },
  'ANEURIN': {
    "summary":
      <div>
        <p>
          <i>"Honour is nothing so grand, it's really a small thing. Honour means when someone cries you offer your shoulder, when someone goes hungry you offer them food and when someone is attacked you stand beside them"</i> - Aneurin
        </p>
        <p>
          Aneurin, a native of Grund and born among the Tuatha Dé Danann nations bordering the Elven forest of Tír na nÓg. At a young age Aneurin’s family was slaughtered by human supremacists trying to find a way through the mists and when recovered, the Sylvans, not wanting to kill him, yet unwilling to raise him themselves took Aneurin to Dún Scáith, handing him over to the tutelage of Scáthach, where he spent most of his childhood, before being recruited into the Swords of Damocles.
        </p>
        <p>
          As a member of Damocles, Aneurin quickly earned the title of Reaper, going on to become Damocles most preeminent fighter and infiltrator. He admired Ezra’s calm demeanor and friendly attitude but quickly grated against Arlyss Knight upon his arrival, due to the latters reliance on underhanded tactics and trickery. The two eventually grew closer, with Arlyss nicknaming Aneurin ‘Icarus’ because of his often dangerous attachment to his ‘honour’, and Aneurin acting as a moral compass for Arlyss, more than willing to tell him when he was about to go too far.
        </p>
        <p>
          Towards the end of the shadow war, Aneurin and Arlyss fought the primordial dragon Zyz to prevent the Prometheus Initiative using him to clear the world, however after their victory, the ‘Knight Elixir’ proved too potent for Aneurin, destroying and rebuilding him over and over at a cellular level while releasing devastating amount of fire, obliterating the surrounding area. Aneurin teleported to Aegina, offering Medea the location of her daughter in stasis if she can find a way to control his overloading body. Aneurin has remained in stasis in the Palace of Aegina under the watchful gaze of Medea ever since as she tried to find a solution.
        </p>
      </div>,
    "appearance":
      <div>
      </div>,
    "personality":
      <div>
      </div>,
    'relationships':
      <div>
      </div>,
    'history':
      <div>
        <p>
          Early Life
          The Mists - (29 BCE)

          Scáthach - (28 BCE)

          The Last of Damocles
          Fall of the Refuge - (16 BCE)

          Forming the Shards of Damocles - (15 BCE)

          Man vs Zyz - (9 BCE)
        //Arlyss and Aneurin kill the Primordial Dragon Zyz
        </p>
      </div>,
    "trivia":
      <div>
        <p>
          Aneurin’s name means ‘Man of Honour’
        </p>
        <p>
          The Reapers: Aneurin, Arlyss and Ezra are inspired by celtic myths of three separate individuals also being one, such as Badb, Macha and Nemain being the Morrigan
        </p>
      </div>,
  },
  'ArlyssKnight': {
    "summary":
      <div>
        <p><i>"Your seers have seen a thousand versions of today, they have seen me stand victorious and lie broken in defeat, they have seen my army, triumphant and shattered, they have seen me live and they have seen me die. Yet for all this, in every vision of the sun rising, in each and every one they saw me standing here, weapons in hand and defiant, the bulwark between a tyrant and his goals"</i> - Arlyss, the Siege of Coed-Duon</p>

        <p>Arlyss Knight was born on Earth prior to its destruction and is a survivor of a Prometheus Initiative experimentation facility. After the intervention of Macha and rescue by Damocles, Arlyss was brought to Grund, where he was granted the title and training of a Reaper.</p>

        <p>As a member of Damocles, Arlyss found an aptitude for tactical planning and insight into the actions of his enemies, training for several years under Ezra alongside fellow Reaper Aneurin. A fierce rivalry ensued between them with Arlyss nicknaming Aneurin ‘Icarus’ after using traps and underhand tactics to finally beat him. During a routine scouting mission to his home world, Arlyss was forced to witness the nuclear holocaust of Earth, before returning to Grund.</p>

        <p>After the fall of Damocles, Arlyss guided many of the survivors north, establishing a village in the mountains before departing with Lilith Faire to form the Knight Command as a unit to avenge Damocles and ensure the Vindictis never forgot to fear them. Arlyss spent some time infiltrating the Children of the Valkyrie and grew close to Lyra Vitae, however his subsequent assassination of the Vindictis Council created a brutal feud between the two for several years, forcing Arlyss to spend most of the war on the move as Lyra hunted him down. He has participated in many pivotal historic events over several realities, but most notably on Grund.</p>
      </div>,
    "appearance":
      <div>
        <p>Arlyss Knight, as an Irish national, possesses caucasian features. He has cold icy blue eyes, often described as intimidating or piercing by those unfamiliar with him, however even close allies felt a chill when they witnessed his glare upon someone. He also possesses dark brown hair, often styled into a raised ponytail, and the sides shaved down. A single deep scar falls across his left eye, connecting to a patchwork lattice of deep scarring covering his lower face and neck, the brutal reminder of the fragmentation grenade that nearly killed him in H4-D35. Arlyss has spent much of his life involved in daily training and possesses an athlete's physique, standing 5 ft 11 inches tall.</p>

        <p>Arlyss clothing tends to revolve around deep blues and pure whites. He often wears a Blue Damocles styled robe over tighter white shirts and trousers, leather studded boots reaching almost to his knee with similarly reinforced bracers and gloves, a small blue cape covering his left arm and a white cloth face mask to cover the worst of his facial and throat scars. During times of war or impending conflict, he often wears a brigandine jack over his Damocles robes and a corinthian helmet. Arlyss carries a longsword on his back and two shortswords at his waist at all times, often accompanied by bandoliers of throwing knives.</p>
      </div>,
    "personality":
      <div>
        <p>Arylss doesn’t like to look back, often planning ahead or throwing himself into his task to stop himself remembering many of the things he’s seen. Arlyss has developed a surprisingly tactical mindset and impressive understanding of military strategy, consistently outmaneuvering seasoned veterans and even his elder Reapers, through unorthodox approaches and unparalleled insight into his foes mindset and capabilities. Despite this, Arlyss himself does not like to deal with those he is unfamiliar with, rarely performing recruitment and often being described as distant and cold by his allies in the Shards or the Remnant, yet a reliable and valued friend to members of the Knight Commando and his fellow Reapers.</p>

        <p>Despite his aversion to his own past, Arlyss takes a strong interest in the world's history, and the history of even fictional worlds, reading both fictional and non-fictional books he finds on his journey in his spare moments. Arlyss possesses a keen interest in architecture and structural planning, often teaching the soldiers who serve beneath him the basics of construction ‘for this war will end’, a statement he wishes for but had never truly believed, as he considers the Knight Commando a suicide unit, destined to fight a losing battle in an already lost war.</p>

        <p>Arlyss cares for those under his command and often goes out of his way to ease their burdens if he can, he also feels great revulsion for those who attack civilian targets for any reason, rallying any forces he can to defend even small hamlets from hostility, yet he is keenly aware he cant save everyone, and in those times he arrives late, seeing the broken eyes of those who survived when no other did, he extends the welcoming hand of the Knight Commando.</p>
      </div>,
    'relationships':
      <div>
      </div>,
    'history':
      <div>
      </div>,
    "trivia":
      <div>
        <p>Arlyss name means ‘Honourable Knight’</p>

        <p>"Arlyss was created after Elva Knight to be the person she was named in honour of.</p>

        <p>"The Reapers: Aneurin, Arlyss and Ezra are inspired by celtic myths of three separate individuals also being one, such as Badb, Macha and Nemain being the Morrigan</p>
      </div>,
  },
  'ArthurPendragon': {
    'summary':
      <div>
        <p>
          <i>“Courage must be the firmer, heart the bolder, spirit must be the greater, as our strength grows less.”</i>- Battle of Maldon </p>
        <p>
          King Arthur, whose full name was Arthur Pendragon, was a legendary British leader who, according to medieval histories and romances, led the defense of Britain against Saxon invaders in the late 5th and early 6th centuries. The details of Arthur's story are mainly composed of folklore and literary invention, and modern historians generally agree that he is unhistorical. The sparse historical background of Arthur is gleaned from various sources, including the Annales Cambriae, the Historia Brittonum, and the writings of Gildas. Arthur's name also occurs in early poetic sources such as Y Gododdin.
        </p>
      </div>,
    "appearance":
      <div>
      </div>,
    "personality":
      <div>
      </div>,
    'relationships':
      <div>
      </div>,
    'history':
      <div>
      </div >,
    "trivia":
      <div>
      </div>,
  },
  'DagInnVæni': {
    'summary':
      <div>
      </div>,
    "appearance":
      <div>
      </div>,
    "personality":
      <div>
      </div>,
    'relationships': <div>
    </div>,
    'history':
      <div>
      </div >,
    "trivia":
      <div>
        <p>
          Dag or DagR, are old norse names for 'day', the opposite of Nótt
        </p>
        <p>
          The byname 'inn Væni', in old norse means the promising one
        </p>
      </div>,
  },
  'EZRA': {
    "summary":
      <div>
        <p>
          <i>"I have met very few I consider evil, you have been tricked by men of power and there is no fault in that, there is only fault in our ignorance and inactivity once we learn the truth"</i> - Ezra
        </p>
        <p>
          Ezra, formerly named Fia’clann, was a native of Grund, and born amongst the Sylvan Elves living on the outskirts of Tír na nÓg. In his infancy, a Fomóire raid on Tír na nÓg maimed his younger sister and enslaved his parents, while later Vindictis military action imprisoned his elder brother. Ezra and his remaining siblings ended up growing up alongside displaced human travellers, harassed by bandits and the Vindictis Empire before being smuggled to safety by the Swords of Damocles.
        </p>
        <p>
          As a member of Damocles, Ezra proved himself adept at forgery, insidious planning and a familial charm, capable of inspiring and comforting in equal measure. The Reapers accepted him amongst their number after Ezra managed to diffuse multiple hostile situations without violence and even converted Vindictis agents, they considered him the ‘ideal Reaper’ and hoped that future generations would be able to follow his example. Ezra spent many years traveling in his role as Reaper, earning many allies and confidents across the world, ultimately recruiting Aneurin on the word of Scáthach and leading the raid on facility H4-D35 that recovered Arlyss Knight and Oberon Valerian. Ezra quickly grew fond of the two new Reapers, as they reminded him of his brothers throughout their rivalry.
        </p>
        <p>
          During the closing years of the Shadow War, Ezra commanded the Remnant, and acted as liaison between the many city states that formed the Concord of Swords. Ezra became the de facto leader and his camp the central headquarters for all that remained of Damocles, eventually being joined by the Arlyss’ Knight Commando and Aneurin’s Shards of Damocles. Ezra commanded many successful military actions, ultiately winning the war and retaining command until his assassination by Oberon Valerian.
        </p>
      </div>,
    "appearance":
      <div>
      </div>,
    "personality":
      <div>
      </div>,
    'relationships':
      <div>
      </div>,
    'history':
      <div>
      </div>,
    "trivia":
      <div>
      </div>,
  },
  'FiadhÓCionaoith': {
    'summary':
      <div>
        <p>
          A {internalLink('Fomorian', NATION_Core.FOMOIRE)} clan leader and apparent ‘Chosen’, Fiadh leads the remnants of a people, once abandoned to the cruel forests of {internalLink('Fomoire', NATION_Core.FOMOIRE)}, a people who do not seek the glory of rebirth, they instead study the relics of their forefathers, a mighty vessel, crashed amidst the trees and overflowing with a strange black powder.
        </p>
      </div>,
    "appearance":
      <div>
      </div>,
    "personality":
      <div>
      </div>,
    'relationships':
      <div>
      </div>,
    'history':
      <div>
      </div >,
    "trivia":
      <div>
      </div>,
  },
  'GuaireÓRiagáin': {
    'summary':
      <div>
        <p>
          Leader of clan Ó Riagáin, Guaire oversees the reconstruction of Riagáin, a town once owned by the Tuatha many centuries ago but ravaged by Fomorian invasions. Under his leadership, clan Ó Riagáin thrive as fishermen on their great lake and under the watchful eye of the Grove of Dagden, yet despite this, he tends to avoid the more warlike aspects of the Fomóiri, ignoring the call to war by Balor and instead sending his people to seek their glory against the beasts and monsters that would plague their walls.
        </p>
      </div>,
    "appearance":
      <div>
      </div>,
    "personality":
      <div>
      </div>,
    'relationships':
      <div>
      </div>,
    'history':
      <div>
      </div >,
    "trivia":
      <div>
      </div>,
  },
  'LilithFaire': {
    'summary':
      <div>
      </div>,
    "appearance":
      <div>
      </div>,
    "personality":
      <div>
      </div>,
    'relationships':
      <div>
      </div>,
    'history':
      <div>
      </div>,
    "trivia":
      <div>
      </div>,
  },
  'LyraVitae': {
    'summary':
      <div>
        <p>
          <i>“I’ve met our ‘mortal enemies’, spoke with them, laughed with them and fought beside them. I have watched them throw themselves in front of arrows to be a shield for terrified civilians, I have watched them mourn their fallen and toast, not to valour or bloodshed, but to lives saved. Why then do we fight them? Are we not the same?”</i>- Lyra, reporting to {internalLink('Oberon', CHARACTER_Core.OberonValerian)} after {internalLink(`Lilith's`, CHARACTER_Core.LilithFaire)} last stand </p>
        <p>
          Lyra, born on Earth prior to its destruction, is a silver High Dragon who participated in several world changing events. For the majority of her military career, she was a tenacious nemesis of {internalLink('Arlyss Knight', CHARACTER_Core.ArlyssKnight)} whom she later married. Shortly prior to his death, their daughter {internalLink('Leta', CHARACTER_Core.LETA)} was born, however {internalLink('Arlyss', CHARACTER_Core.ArlyssKnight)} never knew about her and Lyra was forced to raise {internalLink('Leta', CHARACTER_Core.LETA)} alone until her disappearance.
        </p>
        <p>
          During her time as an active Vindictis captain, Lyra led one of their most prestigious units the Zealots as they sought to unite the fragmented nations behind a single banner where Lyra’s near mythical ability for healing would unintentionally result in recklessness and steady loss of sensation, affecting even their descendants many centuries later. She was often involved and a victim of espionage and counter-espionage operations, culminating in Lyra accidentally leading the recovery and rehabilitation of {internalLink('Arlyss', CHARACTER_Core.ArlyssKnight)} after his violent reaction to the ‘Knight Elixir’. Lyra firmly agreed with the goals of the Vindictis until she eventually cut all ties after their assassination of {internalLink('Arlyss', CHARACTER_Core.ArlyssKnight)} and attempted assassination of herself.
        </p>
        <p>
          Lyra would eventually go on to join up with the Messan Rebellion several centuries later, where she used her powers again as a field medic, however her combat prowess left her the powerhouse of the 5th Outrider’s  and a Staunch ally to {internalLink('Lilith', CHARACTER_Core.LilithFaire)}, when asked why she would only ever say “I made a promise”.
        </p>
      </div>,
    "appearance":
      <div>
      </div>,
    "personality":
      <div>
      </div>,
    'relationships':
      <div>
        {/* Arlyss Knight
      Cerberus
      Lilith Faire
      “As she lay dying in my arms, she asked me if I was her mother, tears in her eyes as the toxin slowly wiped her memories away until she even forgot how to breathe, I sat there with her slowly trying to heal the damage, even just enough to deny death its prize but the girl I knew was no longer there. Those eyes stared at me blankly, uncomprehending of the world before fading away. I knelt there with her cold body in my arms and I promised her that tomorrow will be a better day. Then you came, and reminded me that I have ignored that promise for far too long” - Lyra Vitae
      Oberon Valerian */}
      </div>,
    'history':
      <div>
        <p>
          <strong>
            Early Life
          </strong>
        </p>
        <p>
          Born on Earth, a decade before its destruction, Lyra was raised in a fairly normal family life, not even realising her own draconic heritage until her father took her through the aether during Earth's final days. The main turning point for her childhood was shortly after observing the kidnapping of a boy she had just met and her mother's subsequent distancing herself from the family with ‘vital work’ that was never explained. During Lyra and her father’s escape from Earth, Lyra's mother was left behind and presumed dead, leading Lyra's father to go into self imposed hibernation when he believed Lyra old enough to make her own way in the world. Lyra travelled the land, enjoying meeting new people yet increasingly upset by the suffering and brutality displayed by each nation she passed though, intervening on the behalf of villagers but having very little overall impact.
        </p>
        <p>
          <strong>
            The Zealots
          </strong>
        </p>
        <p>
          News of the woman single handedly repelling nobles from razing disloyal villages eventually reached the ears of the Vindictis Council, who sent recruiters to bring her into the fold, offering her captaincy of her own unit if she proved herself capable enough. Lyra accepted the offer and quickly impressed her reviewers, almost being given her command immediately after joining. Lyra was marked as a Squad Captain, and assigned a small number of soldiers while she proved herself, often leading guerrilla missions or rallying villages against their overlords while the main Vindictis units dealt with the Cult of Shadows over to the west. Lyra’s unit earned the name ‘The Zealots’ after a fellow captain noticed their near fanatical loyalty to Lyra and willingness to throw themselves into suicidal situations without fear or hesitation. Lyra never explained how she had earned such loyalty and The Zealots kept their secrets well. The unit rapidly grew in number and with an incredibly low mortality rate, Lyra was quickly advancing up the chain of command, often involved in campaign scale planning and possessing influence amongst the Vindictis just below that of the council.
        </p>
        <p>
          <strong>
            The Wandering Knight

          </strong>
        </p>
        <p>
          During the war against the formian kingdom, Lyra’s Zealots suddenly became bogged down in the forests, as the enemy switched to precise ambush tactics and guerrilla warfare to inflict maximum losses with their smaller numbers. During one such skirmish, Lyra managed to push forwards and encountered the mercenary orchestrating the battle, crossing blades with him for a few moments before whistles announced the end of the battle and the mercenary unleashed his trap allowing his fellow soldiers to break free of the melee. In the after action review of military resources, the Council informed the remaining Vindictis units that they would each be getting a mercenary company as fodder and to bulk out their numbers for the coming siege. As she approached the unit assigned to her she heard laughter and turned to face the mercenary who had harried her Zealots at every turn. Knight and his mercenaries fought many battles beside the Zealots until Knight broke formation and fortified a village against the enemy army, talking near total casualties in the process. Lyra’s Zealots eventually arrived, managing to rout the few remaining enemies but only a handful of Knights mercenaries remained. Despite her earlier distrust of a wandering mercenary, she came to trust his intuition and surprising moral compass on the battlefield, she recruited him into the Zealots as an auxiliary for the purpose of keeping him on her strategic council. Knight quickly became a key member of the Zealots up until the reunification where he betrayed them in his plan to assassinate the council.
        </p>
        <p>
          <strong>
            The Hunt
          </strong>
        </p>
        <p>

        </p>
        <p>
          <strong>
            The Knight and the Dragon
          </strong>
        </p>
        <p>

        </p>
        <p>
          <strong>
            The Red Tunnels
          </strong>
        </p>
        <p>
          After nearly a year without any sightings of the Knight Commando, Lyra’s unit begin chasing up older leads, ending up with a strange report that a small group in similar attire to the Commando went beneath the ground into an ancient tunnel network. Fearing an underground hideout with access to everywhere, Lyra’s Zealots move quickly, stationing guards at the entrance before storming into the tunnels. The Zealots passed though a few stone gates and noticed the ground, covered in a thin red substance that felt slightly springy beneath their feet. The scourge fell on the Zealots, dragging them away from their comrades to be swarmed by lesser spiders, their screams dragging on as Lyra’s healing magic served only to prolong their agony. The zealots were forced backwards step by step as more and more of the creatures appeared until they found themselves in a large room. Backed slowly against the wall, the zealots eventually noticed the small spider like creatures stopped approaching, recoiling as if in fear from the wall they were pinned against. The Zealots used the respite to recuperate but were pinned in by the arrival of the Hive Queen. The Queen made Lyra a strange offer, stab the wall behind her, kill the creature trapped there and Lyra’s unit would be allowed to leave unmolested. Lyra considered the offer and observed the wall, sensing a human soul and something else trapped within the wall. Lyra started bartering with the Queen, not trusting her to keep her word when the sounds of battle could be heard approaching. Aneurin, leading all that remained of the Knight Commando burst into the room, using tactics designed to dominate the scourge before they could become a threat, keeping the horde at bay as they regrouped with the Zealots. After a quick and tense confrontation, the Zealots and the Knight Commando set about systematically killing off the nearby scourge creatures and retreating to safety while Aneurin and Lyra cut into the wall, freeing a cocooned Arlyss Knight from his captivity. At his release the scourge retreated, allowing the beleaguered units to make their way back to the surface. Lyra and Aneurin agreeing to a brief cessation of hostilities between the Zealots and the varied Remnant units.
        </p>
        <p>
          <strong>
            Lyra’s Infiltration
          </strong>
        </p>
        <p>

        </p>
        <p>
          <strong>
            Lilith’s Last Stand
          </strong>
        </p>
        <p>
          A Vindictis force manages to corner the Remnant units in their hideout and the Knight Commando and the Blades lead the defence to buy the Remnant time to escape. In the chaos, Lyra is provided with a unique chance to assassinate Arlyss as he lies bleeding to death. She considers for a few moments before healing his wounds and dragging his body into the open where Lilith and her rearguard are retreating to the tunnels, entering as the Vindictis forces break through the last trap left to slow them down. Lilith orders Lyra and the soldiers to take Arlyss unconscious body while she prepares to cave in the entrance and stop the pursuit. They travel for some distance when they arrive at the cave in point, with a few Blades waiting to break the supports. Lyra abandons the unit, claiming she would try to recover Lilith and rushed back to stop the Vindictis rushing into another trap. She arrived to the scene of fierce fighting, where Lilith had managed to hold the advancing forces at bay but could no longer stand, Lyra walked up behind her and knocked her unconscious with her pommel before stabilizing her. When lilith eventually came to, she couldn't recognize anyone, or even remember her own name, slowly getting worse and worse as Lyra watched unable to help. Eventually Lilith collapsed to the floor, her breathing becoming more ragged, shaking in Lyras arms as she slowly suffocated, her brain unable to remember how to breathe. As Lilith lay there dead, Lyra tried to heal her mind, restoring her breathing but unable to wake her, and with a quiet apology, she activated Lilith bracer, teleporting her to some far off land or time where she might one day recover or rest in peace.
        </p>
        <p>
          <strong>
            A New Breed of Dragon
          </strong>
        </p>
        <p>

        </p>
        <p>
          <strong>
            All of Time and Space
          </strong>
        </p>
        <p>

        </p>
        <p>
          <strong>
            The Death of Honour
          </strong>
        </p>
        <p>
          Lyra returns home from her journey as Arlyss rejoins the Remnant units, intent on tying up loose ends and retiring, leaving his unit in Ezras hands. Meanwhile, Lyra gives birth to Leta, hiding her as a surprise for Arlyss upon his return. As she sees Arlyss step out of the house, and walk towards her smiling, she rushed towards him before collapsing to the floor, her throat cut. She stares up at Arlyss, confused and horrified as she passes out. Lyra eventually feels a warmth fill her body and pushes herself to her feet, Arlyss body lies on the grass next to her in a slowly growing pool of blood, his arm outstretched towards her, his skin pale and cold. Lyra recoils for a moment, before seeing a trail of blood from her home and bloody footsteps walking away from where she lay. She poured all of her healing knowledge into Arlyss body, nearly passing out from the strain when she saw his chest rise and fall. She called his name only to gain blank stares and confusion, a moment later Arlyss contorted in pain and agony for a moment before opening his eyes again and uttering a few words “Who am I?”.
        </p>
      </div>,
    "trivia":
      <div>
      </div>,
  },
  'NóttInnRauði': {
    'summary':
      <div>
      </div>,
    "appearance":
      <div>
      </div>,
    "personality":
      <div>
        <p>
          Only good terms with her brother as her brother always looked out for her growing up, but has a strong hatred for everyone else in her clan
        </p>
        <p>
          Other villagers believe her to be the anti-chosen, born to deny the chosen one his destiny and usher in an age of darkness
        </p>
        <p>
          Stole the sword to be gifted to her brother before running away to begin her life as a travelling merchant
        </p>
        <p>
          On her travels, she rarely had the money to purchase even simple food, so began to perform with his sword, drawing in steadily larger and larger crowds, eventually earning enough money to purchase a horse and cart, the first step on the path to her dream of travelling the world, far removed from her brother's shadow
        </p>
        <p>
          Responds aggressively to anyone who compares her to her brother the chosen one
        </p>
      </div>,
    'relationships':
      <div>
      </div>,
    'history':
      <div>
        <p>
          <strong>
            Early Life
          </strong>
        </p>
        <p>
          Born in Knay in the Isle of Krasaheim
        </p>
        <p>
          Younger twin of dag, born under prophecy of birth of the chosen one
        </p>
        <p>
          Prophecy to lift the ice curse from their home island
        </p>
        <p>
          Prophecy only mentions one child
        </p>
        <p>
          Assumed dag is the child of prophecy and nott is at best irrelevant
        </p>
        <p>
          Treated poorly while growing up by village that believe she is the enemy of dag
        </p>
        <p>
          Friendly with dag and trained secretly by the village witch
        </p>
        <p>
          One day steals a longship and sails to the mainland
        </p>
      </div >,
    "trivia":
      <div>
        <p>
          Nótt is an old norse name meaning 'night', the opposite of Dag
        </p>
        <p>
          The byname 'inn Rauði', in old norse means the red
        </p>
        <p>
          Nótt's fighting style is inspired by the red mage
        </p>
      </div>,
  },
  'Scáthach': {
    'summary':
      <div>
        <p>
          Scáthach is a figure in the Ulster Cycle of Irish mythology. She is a legendary warrior woman and martial arts teacher who trains the legendary hero Cú Chulainn in the arts of combat. Texts describe her homeland as Scotland (Alpeach); she is especially associated with the Isle of Skye, where her residence Dún Scáith stands. She is called "the Shadow" and "Warrior Maid" and is the rival and sister of Aífe, both of whom are daughters of Árd-Greimne of Lethra.
        </p>
      </div>,
    "appearance":
      <div>
      </div>,
    "personality":
      <div>
      </div>,
    'relationships':
      <div>
      </div>,
    'history':
      <div>
      </div >,
    "trivia":
      <div>
      </div>,
  },
  'THRESTROM': {
    'summary':
      <div>
        <p>
          <i>“AAAAAHHH, IT BURNS!”</i>- Fall of the Endeavour </p>
        <p>
          Short blackened wisps of hair clinging to the burnt flesh of Threstrom's head. His muscles, exposed and wiry. sinew stretched taught below flayed skin. A labyrinth of veins seared into the flesh like a fiery tattoo. The embers inhaled during the explosion, softly glowing within his chest. His eyes are set deep within his gaunt visage. Piercing blue eyes glow eerily in the gloom. Molten slag from the explosion has splashed and cooled upon his limbs and torso.
        </p>
        <p>
          And yet, Threstrom wears the scars proudly. His head uncovered, showing off a cock sure smile. Dressed in travelers clothes, he is covered in equipment. A waist belt with eight daggers. Two leg pouches hanging from a belt, a larger pouch hanging from his right hip. A climbing harness with a further two pouches adorns his chest. Coiled rope strapped to a stuffed backpack. A quiver overflowing with bolts, is slung across his left thigh over a long plain scabbard. A hefty crossbow with shining metal limbs is hooked onto the right side of his belt. A flail, carefully stowed behind the pouch on his right leg.
        </p>
        <p>
          Despite his burnt, twisted, ragged musculature; and carrying around an armoury and supplies for many days. Threstrom carries it all easily, a mountain of strength prior to the burning. The flames of Prometheus have done nothing to diminish it.
        </p>
      </div>,
    "appearance":
      <div>
      </div>,
    "personality":
      <div>
      </div>,
    'relationships':
      <div>
      </div>,
    'history':
      <div>
        <p>
          <strong>
            Early Life
          </strong>
        </p>
        <p>
          Threstrom’s early years involved lessons from the clan druid about the majesty of trees, fight practice with the other boys, and listening to stories of travelling warriors in the feasting hall with the other children. As a young adult Threstrom earned a place in fianna by saving the chief’s daughter from a giant elk that had become enraged by goblins shooting at it. The elk had stomped and gored all the goblins but had been blinded by an arrow and blood, mistaking the young woman for a monster. Threstrom was able to wrestle the beast to the ground and clear the blood. Now that Threstrom was more clearly visible the creature relaxed and allowed the two of them to tend to it before it walked off into the forest.
        </p>
        <p>
          With the blessing of the chief and Threstrom’s father the two began a courtship. Hunting together, walking in the woods, spending time together after they had done their duties.
        </p>
        <p>
          Sadly, this peaceful life wouldn’t last.
        </p>
        <strong>
          Call to Adventure
        </strong>
        <p>
          Threstrom was escorting Chief Verdenfin along with his fellow fianna, Arkhal, to the moot with the chiefs of Dannan.
        </p>
        <p>
          War had broken out between the Angles and the Vindictus Empire. With Fomoria stirring, the more influential chiefs have organised a moot at Dangan castle on the border.
        </p>
        <p>
          The moot lasted three weeks before a plan was finalized. Alliances were reaffirmed. New supply lines and trade deals established. A joint military ready to be summoned and its leaders elected.
        </p>
        <p>
          On the way back, a large object descended from the heavens. It hovered in the sky for several hours. A small ship drifted into its maw. Deep in the forests little else could be seen. It cast a shadow that blanketed the mountains and forests upon their slopes.
        </p>
        <p>
          Suddenly the sky was lit in bright orange. The huge object was falling. Huge tongues of flame lashed at the side of it as it fell. A heat washed over Threstrom and his party. Then came a massive shock-wave followed shortly by a deafening boom. The ground shook, trees were uprooted. The sky seemed to catch fire. Dust and earth turned day to night. clothes were ripped by the wind. Molten metal thwacked against trees. Smaller globs splashed Threstrom. An uprooted tree crushed Arkhal into the ground. Threstrom had lost sight of Verdenfin almost immediately. Partially shielded by a large tree, Threstrom and Arkhal had managed to keep their footing. Verdenfin became a blur as he was lifted into the air and impaled on a distant tree branch. His scream lost in the roar of the wind. An intense heat raced up the valley. trees spontaneously combusted before Threstrom's very eyes. His clothes burst into flame. His hair was naught but ash in an instant.
        </p>
        <p>
          As his flesh melted, he swore an oath to conquer all the evils that led to this happening. A huge line of dominoes had led to this tragedy. No piece was so small as to escape his judgement. Darkness took him.
        </p>
        <p>
          When Threstrom awoke he was welcomed to a world of ash and death. Many trees had been stripped of their branches, some uprooted entirely. The smell of charred flesh was constant. Threstrom's tree had shielded him from the brunt of the blast. had he been a few feet further out as the rest of his party had been, he doubted he would have survived. Before leaving to find other survivors Threstrom carved a small shrine at the base of the tree. Small rivers of bright red metal seemed to flow between the cracks in the bark. This would be where his people could start again. Threstrom eventually found the bodies of Arkhal and Verdenfin. He buried what was left of them in two small graves either side of his tree shrine. As he walked the land he saw that many of the surviving trees had similar metal sap within.
        </p>
        <p>
          Comforted that the trees would survive, Threstrom set about his journey.
        </p>
        <p>
          He ventured south through the lands of Tribal Alliance. Any scattered survivors he found, he directed to his tree. Some tribes had escaped some of the wrath of the falling object.  Protected by large hills or the protection of druid circles.
        </p>
        <p>
          After a few days Threstrom arrived in Dannan, and the town of Eskeleth a few miles south east of Dangan Castle. He quickly told the town chief of what had befallen the Tribes in the north. Paid a pittance for bringing the news  he was dismissed and a runner sent to verify the devastation. Threstrom stayed a week in town gathering supplies for his journey. On the fifth day a Fomorian war-band assaulted the town. marauders led by an armoured chosen, Morc Lak. Fortunately he had not been anticipating the defence plans made during the moot. A militia was ready with Threstrom at the fore keeping the chosen busy and unable to command his forces. His forces scattered and disarmed by Threstrom's thunderous attacks. He retreated vowing vengeance upon the burned man. Threstrom threw down his melted club of a sword and took up Morc's discarded long sword.
        </p>
        <p>
          Enjoying new status as Defender of Eskeleth, Threstrom was able to gain an audience with Cambreadth, elder druid of the Dannan forests. Who swore to perform a ceremony of healing in the forests of the northern lands. Cambreadth bid an elk to guide Threstrom to the Barbac mountains safely. Thankful for the guide and assistance repairing his home, Threstrom left Dannan.
        </p>
        <p>
          At the foot of the mountains the Elk licked Threstrom's hand as a wish for good fortune and left quietly back to the forest. The mountain was a trivial climb. However the mountain pass was filled with the scuttling sounds of cave dwellers and shrieks of beasts lower down the slopes waiting for prey to tumble down. It takes five days to cross the mountains. This is the only pass that allows one to cross in three. However the pass is a favorite hunting ground for goblins.
        </p>
        <p>
          On the first day they followed Threstrom, beady eyes peering out of caves. Looking down from up high on cliff edges. On the second day they threw rocks to try and knock Threstrom off the edge. On the Third they waited in ambush at the last perilous drop. But Threstrom didn't arrive. Hours passed. The goblins grew restless. It was mid afternoon now, still he had not wandered down the path to his doom. Agitated the goblins forsook their ambush and went to seek him out. Little did they know that Threstrom had laid his own ambush. During the early hours of the morning he had scaled the cliff face and hefted a small boulder to the edge. He left his camp in the shallow cave for the goblins to find and waited. At long last they came. Curious yet cowardly little beasts they stopped just in front of the cave to inspect the camp. when their soft footfalls stopped, Threstrom nudged the boulder off the edge. A satisfying squelch echoed down the pass as four of the goblins were immediately killed. Two more shrieked in terror as they fell off the path. The last few fled, dropping their weapons as they ran. Threstrom jumped down in front of them, grabbed one and used him to bat the other two off the ledge before tossing the last one to his demise. As Threstrom gathered his things and set off into Angle Kingdoms he didn't look back. If he had, he might have seen that one of the goblins he had batted off the side had managed to cling to the rock face and was pulling himself up.
        </p>
        <p>
          Threstrom received a mixed reception at castle Barbac. The guards of the mountain pass are a cautious bunch. Satisfied Threstrom was not some revenant, they allowed him through. though not before giving him a piece of parchment with a seal validating his living nature, lest he should run into more trouble at a town or city.
        </p>
        <p>
          The lands of the Angles are vast and it would take many weeks to cross them. Since the explosion it had taken a month and a half to reach Clayborne. A friendly place where Threstrom was able to further equip himself. As he traveled he had spoken to everyone he could about the explosion. All pointed to Scarmoor as the place where everything went wrong. He remained in Scarmoor some time, learning of the assassinations and a group of adventurers who seemed to be tangled up in it all. In particular a pair known as Trentin and Elijah. After a week in Clayborne, Threstrom left for Scarmoor.
        </p>
        <p>
          As he arrived he saw a knight approach a group camped ahead outside the city not far from the road. Shortly thereafter a pair left with all their belongings. Upon spotting Threstrom, the pair hailed him and asked if he had heard of Damocles. Dissatisfied with his lack of knowledge they left with the younger grumbling, "stupid bloody spies... It's not proper soldiering." Confused but otherwise still cheerful. Threstrom went into town to begin seeking answers and justice for the explosion.
        </p>
      </div >,
    "trivia":
      <div>
      </div>,
  },
}

export function characterBuilder(name: string) {
  return ({
    ...CHARACTER_Core[name] || null,
    ...CHARACTER_Info[name] || null,
    ...CHARACTER_Contents[name] || null,
  })
}

export const CharacterList = Object.keys(CHARACTER_Core).map(character => {
  return characterBuilder(character)
})