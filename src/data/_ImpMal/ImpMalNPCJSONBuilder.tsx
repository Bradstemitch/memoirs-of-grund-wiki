import React from 'react';
import { ImpMalNPCBuilder } from './ImpMalNPC';
import { makeid } from '../creatures/_BUILDERS/_Constants';

export function ImpMalNPCJSONBuilder(props: any) {
  const creature = {
    // ...ImpMalNPCBuilder("Blood Pact", "Trooper", "Lasgun", 9, "Troop"),
    // ...ImpMalNPCBuilder("Blood Pact", "Trooper", "Hot-Shot Lasgun", "Elite"),
    //Cawdor
    // ...ImpMalNPCBuilder("Cawdor", "Brethren", "Autogun", 7, "Ganger"),
    // ...ImpMalNPCBuilder("Cawdor", "Brethren", "Pistol", 7, "Ganger"),
    // ...ImpMalNPCBuilder("Cawdor", "Brethren", "Pistols", 7, "Ganger"),
    // ...ImpMalNPCBuilder("Cawdor", "Firebrand", "Autogun", 7, "Ganger"),
    // ...ImpMalNPCBuilder("Cawdor", "Word-Keeper", "Greataxe", 5),
    // ...ImpMalNPCBuilder("Cawdor Redemptionist", "Brethren", "Autogun", 7, "Ganger"),
    // ...ImpMalNPCBuilder("Cawdor Redemptionist", "Brethren", "Pistols", 7, "Ganger"),
    // ...ImpMalNPCBuilder("Cawdor Redemptionist", "Brethren", "Shotgun", 7, "Ganger"),
    // ...ImpMalNPCBuilder("Cawdor Redemptionist", "Brethren", "Flamer", 8, "Specialist"),
    // ...ImpMalNPCBuilder("Cawdor Redemptionist", "Brethren", "Eviscerator", 8, "Specialist"),
    // ...ImpMalNPCBuilder("Cawdor Redemptionist", "Redemptor", "Chainaxe", 25, "Master"),
    //Escher
    // ...ImpMalNPCBuilder("Escher", "Sister", "Autogun", "Troop"),
    // ...ImpMalNPCBuilder("Escher", "Sister", "Lasgun", "Troop"),
    // ...ImpMalNPCBuilder("Escher", "Sister", "Pistol", "Troop"),
    // ...ImpMalNPCBuilder("Escher", "Sister", "Pistols", "Troop"),
    ...ImpMalNPCBuilder(`Escher`, `Sister`, `Flamer`, `Troop`),
    // ...ImpMalNPCBuilder("Escher", "Matriarch", "Plasma Pistol", 25, "Elite"),
    // ...ImpMalNPCBuilder("Escher", "Death Maiden", "", 33, "Elite"),
    // ...ImpMalNPCBuilder("Escher", "Queen", "Bolter", 33, "Master"),
    //Goliath
    // ...ImpMalNPCBuilder("Goliath", "Bruiser", "Chainaxe", "Troop"),
    // ...ImpMalNPCBuilder("Goliath", "Bruiser", "Grenade Launcher", 7),
    // ...ImpMalNPCBuilder("Goliath", "Bruiser", "Stub Cannon", 6),
    // ...ImpMalNPCBuilder("Goliath", "Stimmer", "Chainaxe", 25),
    //Orlock
    // ...ImpMalNPCBuilder("Orlock", "Gunner", "Autogun", "Troop"),
    // ...ImpMalNPCBuilder("Orlock", "Gunner", "Pistol", "Troop"),
    // ...ImpMalNPCBuilder("Orlock", "Gunner", "Pistols", "Troop"),
    // ...ImpMalNPCBuilder("Orlock", "Gunner", "Shotgun", "Troop"),
    // ...ImpMalNPCBuilder("Orlock", "Road Sergeant", "Heavy Bolter", 14, "Elite"),
    // ...ImpMalNPCBuilder("Orlock", "Road Sergeant", "Chainsword", 14, "Elite"),
    // ...ImpMalNPCBuilder("Orlock", "Road Captain", "Powerfist", 30, "Master"),
    //Van Saar
    // ...ImpMalNPCBuilder("Van Saar", "Tek", "Lasgun", "Troop"),
    // ...ImpMalNPCBuilder("Van Saar", "Tek", "Longlas", "Troop"),
    // ...ImpMalNPCBuilder("Van Saar", "Tek", "Flamer", "Troop"),
    // ...ImpMalNPCBuilder("Van Saar", "Tek", "Plasmagun", "Troop"),
    // ...ImpMalNPCBuilder("Van Saar", "Augmek", "Lasgun", 22, "Elite"),
    //Corpse Grinder Cults
    // ...ImpMalNPCBuilder("Corpse Grinder Cults", "Skinner", "", 8, "Ganger"),
    // ...ImpMalNPCBuilder("Corpse Grinder Cults", "Cutter", "", 18, "Elite"),
    // ...ImpMalNPCBuilder("Corpse Grinder Cults", "Butcher", "", 18, "Master"),
    //Brutes
    // ...ImpMalNPCBuilder("Brute", "Ambot", "", 22, "Elite"),
    //Astartes
    // ...ImpMalNPCBuilder("Astartes", "Word Bearer Legionary", "", 20, "Elite"),
    //Orks
    // ...ImpMalNPCBuilder("Ork", "Kommando Boy", "", 20, "Elite"),
    // ...ImpMalNPCBuilder("Ork", "Kommando Boy", "Sniper", 10, "Elite"),
    // ...ImpMalNPCBuilder("Ork", "Kommando Boy", "Choppa", 10, "Elite"),
    // ...ImpMalNPCBuilder("Ork", "Kommando Boy", "Burna", 10, "Elite"),
    // ...ImpMalNPCBuilder("Ork", "Kommando Boy", "Shoota", 10, "Elite"),
    // ...ImpMalNPCBuilder("Ork", "Kommando Boy", "Rokkit", 10, "Elite"),
    // ...ImpMalNPCBuilder("Ork", "Kommando Nob", "", 20, "Elite"),
    //Tyranids
    // ...ImpMalNPCBuilder("Tyranid", "Genestealer", "", "Elite"),
    // ...ImpMalNPCBuilder("Bounty Hunter", "Harvest Lord", "", 33, "Master"),
  };

  return {
    ...creature,
    effects: [],
    flags: {},
    _stats: {
      systemId: `impmal`,
      systemVersion: `4.1.0`,
      coreVersion: `14.364`,
      createdTime: 1786137622045,
      modifiedTime: 1786137622045,
      lastModifiedBy: `79TGpaW8JtXdSDiv`,
      compendiumSource: `Compendium.impmal-core.actors.Actor.bB0rMr6Gez3M9bME`,
      duplicateSource: null,
      exportSource: {
        worldId: `hive-arcos`,
        uuid: `Actor.bB0rMr6Gez3M9bME`,
        coreVersion: `14.364`,
        systemId: `impmal`,
        systemVersion: `4.1.0`,
      },
    },
    _id: makeid(),
    ownership: {
      default: 0,
    },
  };
}
export default ImpMalNPCJSONBuilder;
