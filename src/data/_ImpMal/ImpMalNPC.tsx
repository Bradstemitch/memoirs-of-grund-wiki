import { WFRP4eRings } from '../_WFRP4e/Token/WFRP4eTokenRing';
import {
  arm_enforcerCarapace,
  arm_guardFlak,
  arm_heavyLeathers,
} from './arm_impmal';
import { ImpMalNPCStats } from './ImpMalDefault';
import { ImpMalNPCAttributes } from './NPCAttributes';
import { spec_longGuns, spec_ordnance } from './spec_impmal';
import {
  wep_autogun,
  wep_boltgun,
  wep_chainsword,
  wep_clawsAndTalons,
  wep_fireBomb,
  wep_flamer,
  wep_fragGrenade,
  wep_heavyBolter,
  wep_hotshotLasgun,
  wep_knife,
  wep_krakGrenade,
  wep_lasgun,
  wep_laspistol,
  wep_needlePistol,
  wep_plasmaPistol,
  wep_powerFist,
  wep_shockMaul,
  wep_shotgun,
  wep_stubPistol,
  wep_sword,
} from './wep_impmal';

function AttributeBuilder(starting: number, value: number) {
  return {
    starting: starting + value,
    advances: 0,
    modifier: 0,
  };
}

function StatGet(species: string, name: string, characteristics: any) {
  return {
    ws: AttributeBuilder(
      ImpMalNPCAttributes[species.toLowerCase()][name.toLowerCase()][0],
      characteristics.ws.starting
    ),
    bs: AttributeBuilder(
      ImpMalNPCAttributes[species.toLowerCase()][name.toLowerCase()][1],
      characteristics.bs.starting
    ),
    str: AttributeBuilder(
      ImpMalNPCAttributes[species.toLowerCase()][name.toLowerCase()][2],
      characteristics.str.starting
    ),
    tgh: AttributeBuilder(
      ImpMalNPCAttributes[species.toLowerCase()][name.toLowerCase()][3],
      characteristics.tgh.starting
    ),
    ag: AttributeBuilder(
      ImpMalNPCAttributes[species.toLowerCase()][name.toLowerCase()][4],
      characteristics.ag.starting
    ),
    int: AttributeBuilder(
      ImpMalNPCAttributes[species.toLowerCase()][name.toLowerCase()][5],
      characteristics.int.starting
    ),
    per: AttributeBuilder(
      ImpMalNPCAttributes[species.toLowerCase()][name.toLowerCase()][6],
      characteristics.per.starting
    ),
    wil: AttributeBuilder(
      ImpMalNPCAttributes[species.toLowerCase()][name.toLowerCase()][7],
      characteristics.wil.starting
    ),
    fel: AttributeBuilder(
      ImpMalNPCAttributes[species.toLowerCase()][name.toLowerCase()][8],
      characteristics.fel.starting
    ),
  };
}

const factions = {
  astraMilitarum: {
    id: `yJNgIfm0cNk85aIe`,
    name: `Astra Militarum`,
  },
  infractionists: {
    id: `oa5nKvqMjOoHsBcK`,
    name: `Infractionist`,
  },
  genestealerCult: {
    id: ``,
    name: `Genestealer Cult`,
  },
};

export interface NPCObj {
  name: string;
  factions: string;
  stats: string;
  species: string;
  imagePath: string;
  imageLoc: string;
  imageWild: string;
  armour: object[];
  weapons: object[];
  other: object[];
}
export function ImpMalNPCBuilder(
  factionProp: string,
  nameProp: string,
  weaponProp: string,
  rank: string
) {
  const vars: NPCObj = {
    name: nameProp,
    factions: factionProp,
    stats: nameProp,
    species: `Human`,
    imagePath: ``,
    imageLoc: ``,
    imageWild: ``,
    weapons: [],
    armour: [],
    other: [],
  };

  const threat = 1;
  const ringRank = rank || `Brass`;
  let size = 1;
  const systemData = ImpMalNPCStats;

  switch (factionProp) {
    case `Cawdor`:
      vars.imagePath = `Necromunda/Cawdor/`;
      switch (weaponProp) {
        case `Autogun`:
          vars.imageLoc = `HumanCawdorGangerAutogunAndMolotov.`;
          vars.imageWild = `HumanCawdorGangerAutogun`;
          vars.weapons.push(
            wep_autogun(true),
            wep_sword(true),
            wep_fireBomb(true)
          );
          vars.other.push(spec_longGuns(2));
          break;
        case `Pistol`:
          vars.imageLoc = `HumanCawdorGangerPistol(Auto)AndAxe.`;
          vars.imageWild = `HumanCawdorGangerPistol(`;
          vars.weapons.push(wep_stubPistol(true), wep_sword(true));
          break;
        case `Pistols`:
          vars.imageLoc = `HumanCawdorGangerPistols(Stub).`;
          vars.imageWild = `HumanCawdorGangerPistols`;
          vars.weapons.push(
            wep_stubPistol(true),
            wep_stubPistol(true),
            wep_knife(false)
          );
          break;
        case `Polearm`:
          vars.imageLoc = `HumanCawdorGangerPolearmAutogun.`;
          vars.imageWild = `HumanCawdorGangerPolearm`;
          vars.weapons.push(wep_autogun(true), wep_sword(true));
          vars.other.push(spec_longGuns(2));
          break;
      }
      switch (nameProp) {
        // case "Bonepicker":
        //     systemData.system.skills.athletics.advance = "2"
        //     systemData.system.skills.dodge.advance = "1"
        //     systemData.system.skills.intimidate.advance = "1"
        //     vars.armour.push(arm_heavyLeathers(true))
        //     break;
        case `Brethren`:
          vars.factions = `Necromunda`;
          vars.stats = `Ganger`;
          vars.armour.push(arm_heavyLeathers(true));
          break;
      }
      break;

    // case "Cawdor Redemptionist":
    //     vars.imagePath = `Necromunda/Cawdor/`
    //     switch (weaponProp) {
    //         case "Autogun":
    //             vars.imageLoc = "HumanCawdorRedGangerAutogun1."
    //             vars.imageWild = "HumanCawdorRedGangerAutogun"
    //             vars.weapons.push(
    //                 wep_autogun(true),
    //                 wep_exterminator
    //                 wep_knife(true),
    //             )
    //             break;
    //         case "Chainaxe":
    //             vars.imageLoc = "HumanCawdorRedLeaderChainaxe."
    //             vars.imageWild = "HumanCawdorRedLeaderChainaxe"
    //             break;
    //         case "Eviscerator":
    //             vars.imageLoc = "HumanCawdorRedGangerEviscerator."
    //             vars.imageWild = "HumanCawdorRedGangerEviscerator"
    //             vars.weapons.push(wep_eviscerator)
    //             vars.weapons.push(wep_exterminator)
    //             talents.push(talent_preternaturalSpeed)
    //             break;
    //         case "Flamer":
    //             vars.imageLoc = "HumanCawdorRedGangerFlamer."
    //             vars.imageWild = "HumanCawdorRedGangerFlamer"
    //             vars.weapons.push(wep_flamer)
    //             vars.weapons.push(wep_knife_mel)
    //             talents.push(talent_divineProtection)
    //             break;
    //         case "Pistol":
    //             vars.imageLoc = "HumanCawdorRedGangerPistol(Auto)."
    //             vars.imageWild = "HumanCawdorRedGangerPistol("
    //             vars.weapons.push(wep_stubAutomatic("1"))
    //             vars.weapons.push(wep_knife_mel)
    //             break;
    //         case "Pistols":
    //             vars.imageLoc = "HumanCawdorRedGangerPistols(Auto)."
    //             vars.imageWild = "HumanCawdorRedGangerPistols"
    //             vars.weapons.push(wep_stubAutomatic("1"))
    //             vars.weapons.push(wep_stubAutomatic("2"))
    //             vars.weapons.push(wep_knife_mel)
    //             break;
    //         case "Shotgun":
    //             vars.imageLoc = "HumanCawdorRedGangerShotgun."
    //             vars.imageWild = "HumanCawdorRedGangerShotgun"
    //             vars.weapons.push(wep_shotgun)
    //             vars.weapons.push(wep_exterminator)
    //             vars.weapons.push(wep_knife_mel)
    //             break;
    //     }
    //     switch (nameProp) {
    //         case "Zealot":
    //             systemData.system.skills.athletics.advance = "2"
    //             systemData.system.skills.dodge.advance = "1"
    //             systemData.system.skills.intimidate.advance = "1"
    //             vars.armour.push(arm_heavyLeathers(true))
    //             break;
    //         case "Brethren":
    //             systemData.system.skills.athletics.advance = "1"
    //             systemData.system.skills.dodge.advance = "1"
    //             systemData.system.skills.survival.advance = "2"
    //             systemData.system.skills.techUse.advance = "1"
    //             vars.armour.push(arm_heavyLeathers(true))
    //             break;
    //     }
    //     break;

    case `Delaque`:
      vars.imagePath = `Necromunda/Delaque/`;
      switch (weaponProp) {
        case `Autogun`:
          vars.imageLoc = `HumanEscherGangerAutogun`;
          vars.other.push(spec_longGuns(2));
          break;
      }
      break;

    case `Escher`:
      vars.imagePath = `Necromunda/Escher/`;

      switch (weaponProp) {
        case `Autogun`:
          vars.imageLoc = `HumanEscherGangerAutogun1.`;
          vars.imageWild = `HumanEscherGangerAutogun`;
          vars.weapons.push(wep_autogun(true), wep_sword(false));
          vars.other.push(spec_longGuns(2));
          break;
        case `Bolter`:
          vars.imageLoc = `HumanEscherChampionShockWhipAndBolter.`;
          vars.imageWild = `HumanEscherChampionShockWhipAndBolter.`;
          vars.weapons.push(
            wep_boltgun(true),
            wep_needlePistol(true),
            wep_shockMaul(true)
          );
          break;
        case `Flamer`:
          vars.imageLoc = `HumanEscherGangerFlamer.`;
          vars.imageWild = `HumanEscherGangerFlamer`;
          vars.weapons.push(wep_flamer(true), wep_knife(false));
          // talents.push(talent_divineProtection)
          break;
        case `Lasgun`:
          vars.imageLoc = `HumanEscherGangerLasgunAndStiletto.`;
          vars.imageWild = `HumanEscherGangerLasgun`;
          vars.weapons.push(wep_lasgun(true), wep_sword(false));
          break;
        case `Pistol`:
          vars.imageLoc = `HumanEscherGangerPistol(Las)AndStiletto1.`;
          vars.imageWild = `HumanEscherGangerPistol(`;
          vars.weapons.push(wep_laspistol(true), wep_sword(true));
          break;
        case `Pistols`:
          vars.imageLoc = `HumanEscherGangerPistols(Las)Dual.`;
          vars.imageWild = `HumanEscherGangerPistols`;
          vars.weapons.push(
            wep_laspistol(true),
            wep_laspistol(true),
            wep_sword(false)
          );
          break;
        case `Plasma Pistol`:
          vars.imageLoc = `HumanEscherChampionPistol(Plasma)AndStiletto3.`;
          vars.imageWild = `HumanEscherChampionPistol(Plasma)`;
          vars.weapons.push(wep_plasmaPistol(true), wep_sword(true));
          break;
      }
      switch (nameProp) {
        // case "Little Sister":
        //     systemData.system.skills.athletics.advance = "1"
        //     systemData.system.skills.dodge.advance = "2"
        //     systemData.system.skills.parry.advance = "2"
        //     vars.armour.push(arm_heavyLeathers(true))
        //     break;
        case `Sister`:
          vars.factions = `Necromunda`;
          vars.stats = `Ganger`;
          vars.armour = [arm_heavyLeathers(true)];
          vars.weapons.push(wep_fragGrenade(true), wep_krakGrenade(true));

          weaponProp === `Bolter` ||
            (weaponProp === `Flamer` && vars.other.push(spec_longGuns(2)));
          systemData.system.skills.ranged.advances = 2;
          systemData.system.skills.melee.advances = 2;
          systemData.system.skills.reflexes.advances = 4;
          break;
        // case "Death Maiden":
        //     vars.imageLoc = "HumanEscherDeathMaiden1."
        //     vars.imageWild = "HumanEscherDeathMaiden"
        //     systemData.system.skills.acrobatics.advance = "3"
        //     systemData.system.skills.athletics.advance = "4"
        //     systemData.system.skills.awareness.advance = "3"
        //     systemData.system.skills.dodge.advance = "3"
        //     systemData.system.skills.security.advance = "3"
        //     systemData.system.skills.stealth.advance = "3"
        //     systemData.system.skills.techUse.advance = "3"
        //     talents.push(talent_deathDealer)
        //     talents.push(talent_constantVigilance)
        //     talents.push(talent_templeAssassin)
        //     talents.push(talent_unarmedSpecialist)
        //     talents.push(talent_twoWeaponMaster("Melee, Ranged"))
        //     talents.push(talent_twoWeaponWielder("Melee, Ranged"))
        //     talents.push(talent_preternaturalSpeed)
        //     traits.push(trait_fear(2))
        //     traits.push(trait_fromBeyond)
        //     traits.push(trait_unnaturalStrength(3))
        //     systemData.system.characteristics.strength.unnatural = 3
        //     traits.push(trait_unnaturalToughness(3))
        //     systemData.system.characteristics.toughness.unnatural = 3
        //     vars.weapons.push(wep_needlePistol)
        //     vars.weapons.push(wep_neuroGauntlet)
        //     equipment.push(equip_eversorCombatDrugs)
        //     break;
      }
      break;

    case `Goliath`:
      size = 1.25;
      vars.imagePath = `Necromunda/Goliath/`;

      switch (weaponProp) {
        case `Chainaxe`:
          vars.imageLoc = `HumanGoliathGangerChainAxe.`;
          vars.imageWild = `HumanGoliathGangerChainAxe`;
          break;
        case `Grenade Launcher`:
          vars.imageLoc = `HumanGoliathGangerGrenadeLauncher.`;
          vars.imageWild = `HumanGoliathGangerGrenadeLauncher`;
          break;
        case `Stub Cannon`:
          vars.imageLoc = `HumanGoliathGangerCannon3.`;
          vars.imageWild = `HumanGoliathGangerCannon`;
          break;
      }
      switch (nameProp) {
        // case "Bully":
        //     systemData.system.skills.athletics.advance = "2"
        //     systemData.system.skills.dodge.advance = "1"
        //     systemData.system.skills.intimidate.advance = "1"
        //     break;
        case `Bruiser`:
          vars.factions = `Necromunda`;
          vars.stats = `Ganger`;
          systemData.system.characteristics.bs.starting += -5;
          systemData.system.characteristics.str.starting += 10;
          systemData.system.characteristics.tgh.starting += +10;
          systemData.system.characteristics.ag.starting += -10;
          systemData.system.characteristics.int.starting += -5;
          vars.armour.push(arm_heavyLeathers(true));
          vars.weapons.push(wep_fragGrenade(true), wep_krakGrenade(true));
          weaponProp === `Heavy Bolter` && vars.other.push(spec_longGuns(2));
          systemData.system.skills.ranged.advances = 2;
          systemData.system.skills.melee.advances = 2;
          systemData.system.skills.reflexes.advances = 2;
          systemData.system.skills.discipline.advances = 2;
          break;
        // case "Stimmer":
        //     size = 1.6
        //     systemData.system.skills.athletics.advance = "1"
        //     systemData.system.skills.dodge.advance = "1"
        //     systemData.system.skills.survival.advance = "2"
        //     systemData.system.skills.techUse.advance = "1"
        //     systemData.system.skills.operate.specialities.surface.advance = 2
        //     systemData.system.skills.operate.specialities.surface.taken = true
        //     break;
        // case "Forge Boss":
        //     size = 1.6
        //     systemData.system.skills.athletics.advance = "1"
        //     systemData.system.skills.dodge.advance = "1"
        //     systemData.system.skills.survival.advance = "2"
        //     systemData.system.skills.techUse.advance = "1"
        //     systemData.system.skills.operate.specialities.surface.advance = 2
        //     systemData.system.skills.operate.specialities.surface.taken = true
        //     break;
        // case "Forge Tyrant":
        //     size = 1.6
        //     systemData.system.skills.athletics.advance = "1"
        //     systemData.system.skills.dodge.advance = "1"
        //     systemData.system.skills.survival.advance = "2"
        //     systemData.system.skills.techUse.advance = "1"
        //     systemData.system.skills.operate.specialities.surface.advance = 2
        //     systemData.system.skills.operate.specialities.surface.taken = true
        //     break;
      }
      break;

    case `Orlock`:
      vars.imagePath = `Necromunda/Orlock/`;

      switch (weaponProp) {
        case `Autogun`:
          vars.imageLoc = `HumanOrlockGangerAutogun1.`;
          vars.imageWild = `HumanOrlockGangerAutogun`;
          vars.weapons.push(wep_autogun(true), wep_knife(false));
          break;
        case `Chainsword`:
          vars.imageLoc = `HumanOrlockGangerChainswordPistol.`;
          vars.imageWild = `HumanOrlockGangerChainsword`;
          vars.weapons.push(wep_stubPistol(true), wep_chainsword(true));
          break;
        case `Heavy Bolter`:
          vars.imageLoc = `HumanOrlockGangerHeavyBolter.`;
          vars.imageWild = `HumanOrlockGangerHeavyBolter`;
          vars.weapons.push(wep_heavyBolter(true), wep_knife(false));
          break;
        case `Pistol`:
          vars.imageLoc = `HumanOrlockGangerPistol(Auto)AndKnife.`;
          vars.imageWild = `HumanOrlockGangerPistol(`;
          vars.weapons.push(wep_stubPistol(true), wep_knife(false));
          break;
        case `Pistols`:
          vars.imageLoc = `HumanOrlockGangerPistols(Auto)AndPistol(Stub).`;
          vars.imageWild = `HumanOrlockGangerPistols`;
          vars.weapons.push(
            wep_stubPistol(true),
            wep_stubPistol(true),
            wep_knife(false)
          );
          break;
        case `Powerfist`:
          vars.imageLoc = `HumanOrlockGangerSawnOffAndFist.`;
          vars.imageWild = `HumanOrlockGangerSawnOffAndFist.`;
          vars.weapons.push(wep_shotgun(true), wep_powerFist(true));
          break;
        case `Shotgun`:
          vars.imageLoc = `HumanOrlockGangerShotgun.`;
          vars.imageWild = `HumanOrlockGangerShotgun`;
          vars.weapons.push(wep_shotgun(true), wep_knife(false));
          break;
      }
      switch (nameProp) {
        case `Gunner`:
          vars.factions = `Necromunda`;
          vars.stats = `Ganger`;
          vars.armour.push(arm_heavyLeathers(true));
          vars.weapons.push(wep_fragGrenade(true), wep_krakGrenade(true));
          weaponProp === `Heavy Bolter` && vars.other.push(spec_ordnance(2));
          systemData.system.skills.ranged.advances = 2;
          systemData.system.skills.melee.advances = 2;
          systemData.system.skills.reflexes.advances = 2;
          systemData.system.skills.discipline.advances = 2;
          break;
        // case "Road Sergeant":
        //     talents.push(talent_bulgingBiceps)
        //     vars.armour.push(arm_heavyLeathers(true))
        //     vars.weapons.push(
        //         wep_fragGrenade(true),
        //         wep_krakGrenade(true),
        //     )
        //     break;
      }
      break;

    case `Van Saar`:
      vars.imagePath = `Necromunda/VanSaar/`;

      systemData.system.faction = factions.infractionists;

      switch (weaponProp) {
        case `Lasgun`:
          vars.imageLoc = `HumanVanSaarSpecialistLasgun1.`;
          vars.imageWild = `HumanVanSaarSpecialistLasgun`;
          vars.weapons = [wep_lasgun(true), wep_knife(false)];
          break;
        case `Flamer`:
          vars.imageLoc = `HumanVanSaarSpecialistFlamer.`;
          vars.imageWild = `HumanVanSaarSpecialistFlamer`;
          vars.weapons = [wep_lasgun(true), wep_knife(false)];
          vars.other.push(spec_longGuns(2));
          break;
        case `Longlas`:
          vars.imageLoc = `HumanVanSaarSpecialistLonglas.`;
          vars.imageWild = `HumanVanSaarSpecialistLonglas`;
          vars.weapons = [wep_lasgun(true), wep_knife(false)];
          vars.other.push(spec_longGuns(2));
          break;
        case `Plasmagun`:
          vars.imageLoc = `HumanVanSaarSpecialistPlasma.`;
          vars.imageWild = `HumanVanSaarSpecialistPlasma`;
          vars.weapons = [wep_lasgun(true), wep_knife(false)];
          vars.other.push(spec_longGuns(2));
          break;
      }
      switch (nameProp) {
        case `Tek`:
          vars.factions = `Necromunda`;
          vars.stats = `Ganger`;

          systemData.system.characteristics.ws.starting += -5;
          systemData.system.characteristics.int.starting += +5;
          systemData.system.skills.ranged.advances = 4;
          systemData.system.skills.discipline.advances = 2;
          systemData.system.skills.logic.advances = 2;
          weaponProp === `Longlas` ||
            weaponProp === `Plasmagun` ||
            (weaponProp === `Flamer` && vars.other.push(spec_longGuns(2)));

          vars.armour = [arm_heavyLeathers(true)];
          vars.weapons.push(wep_fragGrenade(false), wep_krakGrenade(false));
          break;

        case `Augurtek`:
          vars.factions = `Augurtek`;
          vars.stats = `Ganger`;
          vars.imageLoc = `HumanVanSaarSpecialistAugurtekLasgun.`;
          vars.imageWild = `HumanVanSaarSpecialistAugurtekLasgun`;
          systemData.system.skills.discipline.advances = 2;
          systemData.system.skills.logic.advances = 2;
          systemData.system.skills.medicae.advances = 3;
          vars.armour = [arm_heavyLeathers(true)];
          vars.weapons.push(wep_fragGrenade(false), wep_krakGrenade(false));
          break;

        case `Bioteknist`:
          vars.factions = `Bioteknist`;
          vars.stats = `Ganger`;
          vars.imageLoc = `HumanVanSaarSpecialistBioteknistLasgun.`;
          vars.imageWild = `HumanVanSaarSpecialistBioteknistLasgun`;
          systemData.system.skills.discipline.advances = 2;
          systemData.system.skills.logic.advances = 2;
          systemData.system.skills.medicae.advances = 3;
          vars.armour = [arm_heavyLeathers(true)];
          vars.weapons.push(wep_fragGrenade(false), wep_krakGrenade(false));
          break;

        case `Prime`:
          vars.factions = `Bioteknist`;
          vars.stats = `Ganger`;
          vars.imageLoc = `HumanVanSaarChampionLasgun.`;
          vars.imageWild = `HumanVanSaarChampionLasgun`;
          systemData.system.skills.discipline.advances = 2;
          systemData.system.skills.logic.advances = 2;
          systemData.system.skills.medicae.advances = 3;
          vars.armour = [arm_heavyLeathers(true)];
          vars.weapons.push(wep_fragGrenade(false), wep_krakGrenade(false));
          break;
      }
      break;

    // case "Corpse Grinder Cults":
    //     switch (nameProp) {
    //         case "Skinner":
    //             vars.imageLoc = "Chaos/CorpseGrinder/CorpseGrinderSkinner."
    //             vars.imageWild = "Chaos/CorpseGrinder/CorpseGrinderSkinner."
    //             systemData.system.skills.athletics.advance = "1"
    //             systemData.system.skills.dodge.advance = "1"
    //             systemData.system.skills.intimidate.advance = "1"
    //             systemData.system.skills.parry.advance = "2"
    //             talents.push(talent_ambidextrous)
    //             talents.push(talent_combatMaster)
    //             talents.push(talent_devastaingAssault)
    //             talents.push(talent_ironJaw)
    //             talents.push(talent_lightningAttack)
    //             talents.push(talent_swiftAttack)
    //             talents.push(talent_twoWeaponWielder("Melee"))
    //             traits.push(trait_fear(1))
    //             vars.armour.push(arm_lightBrassArmour)
    //             vars.weapons.push(wep_chainaxe)
    //             break;
    //         case "Cutter":
    //             vars.imageLoc = "Chaos/CorpseGrinder/CorpseGrinderCutter."
    //             vars.imageWild = "Chaos/CorpseGrinder/CorpseGrinderCutter."
    //             systemData.system.skills.athletics.advance = "1"
    //             systemData.system.skills.dodge.advance = "1"
    //             systemData.system.skills.intimidate.advance = "1"
    //             systemData.system.skills.parry.advance = "2"
    //             systemData.system.skills.survival.advance = "2"
    //             talents.push(talent_ambidextrous)
    //             talents.push(talent_combatMaster)
    //             talents.push(talent_devastaingAssault)
    //             talents.push(talent_ironJaw)
    //             talents.push(talent_lightningAttack)
    //             talents.push(talent_swiftAttack)
    //             talents.push(talent_twoWeaponMaster("Melee"))
    //             talents.push(talent_twoWeaponWielder("Melee"))
    //             talents.push(talent_preternaturalSpeed)
    //             traits.push(trait_fear(1))
    //             traits.push(trait_unnaturalStrength(3))
    //             systemData.system.characteristics.strength.unnatural = 3
    //             traits.push(trait_unnaturalToughness(1))
    //             systemData.system.characteristics.toughness.unnatural = 1
    //             vars.armour.push(arm_lightBrassArmour)
    //             vars.weapons.push(wep_chainaxe)
    //             break;
    //         case "Butcher":
    //             vars.imageLoc = "Chaos/CorpseGrinder/CorpseGrinderButcher."
    //             vars.imageWild = "Chaos/CorpseGrinder/CorpseGrinderButcher."
    //             systemData.system.skills.athletics.advance = "1"
    //             systemData.system.skills.dodge.advance = "1"
    //             systemData.system.skills.intimidate.advance = "1"
    //             systemData.system.skills.parry.advance = "2"
    //             systemData.system.skills.survival.advance = "2"
    //             talents.push(talent_bulgingBiceps)
    //             vars.armour.push(arm_lightBrassArmour)
    //             break;
    //     }
    //     break;

    // case "Bounty Hunter":
    //     switch (nameProp) {
    //         case "Harvest Lord":
    //             vars.imageLoc = "Chaos/CorpseGrinder/EightfoldHarvestLord."
    //             vars.imageWild = "Chaos/CorpseGrinder/EightfoldHarvestLord."
    //             systemData.system.skills.acrobatics.advance = "3"
    //             systemData.system.skills.athletics.advance = "4"
    //             systemData.system.skills.awareness.advance = "3"
    //             systemData.system.skills.dodge.advance = "3"
    //             systemData.system.skills.parry.advance = "3"
    //             systemData.system.skills.security.advance = "3"
    //             systemData.system.skills.stealth.advance = "3"
    //             systemData.system.skills.techUse.advance = "3"
    //             talents.push(talent_battleRage)
    //             talents.push(talent_blademaster)
    //             talents.push(talent_combatMaster)
    //             talents.push(talent_counterAttack)
    //             talents.push(talent_devastaingAssault)
    //             talents.push(trait_frenzy)
    //             talents.push(talent_inescapableAttack)
    //             talents.push(talent_swiftAttack)
    //             talents.push(talent_templeAssassin)
    //             talents.push(talent_twoWeaponMaster("Melee"))
    //             talents.push(talent_twoWeaponWielder("Melee"))
    //             talents.push(talent_preternaturalSpeed)
    //             traits.push(trait_fear(2))
    //             traits.push(trait_fromBeyond)
    //             traits.push(trait_unnaturalStrength(4))
    //             systemData.system.characteristics.strength.unnatural = 4
    //             traits.push(trait_unnaturalToughness(1))
    //             systemData.system.characteristics.toughness.unnatural = 1
    //             vars.weapons.push(wep_heavyChainCleaver("1", true))
    //             vars.weapons.push(wep_heavyChainCleaver("2", true))
    //             equipment.push(equip_eversorCombatDrugs)
    //             break;
    //     }
    //     break;

    case `Blood Pact`:
      vars.imagePath = `Chaos/BloodPact/`;
      switch (weaponProp) {
        case `Lasgun`:
          vars.imageLoc = `HumanChaosTrooperLasgun1.`;
          vars.imageWild = `HumanChaosTrooperLasgun`;
          vars.weapons.push(wep_lasgun(true), wep_sword(true));
          vars.other.push(spec_longGuns(2));
          break;
        case `Hot-Shot Lasgun`:
          vars.imageLoc = `HumanChaosTrooperLasgun1.`;
          vars.imageWild = `HumanChaosTrooperLasgun`;
          vars.weapons.push(wep_hotshotLasgun(true), wep_sword(true));
          vars.other.push(spec_longGuns(2));
          break;
      }
      switch (nameProp) {
        case `Trooper`:
          // talents.push(talent_mightyShot)
          // talents.push(talent_rapidReload)
          // talents.push(talent_technicalKnock)
          systemData.system.skills.athletics.advances = 2;
          systemData.system.skills.awareness.advances = 2;
          systemData.system.skills.discipline.advances = 4;
          systemData.system.skills.fortitude.advances = 2;
          systemData.system.skills.medicae.advances = 2;
          systemData.system.skills.melee.advances = 2;
          systemData.system.skills.navigation.advances = 2;
          systemData.system.skills.ranged.advances = 2;
          systemData.system.skills.reflexes.advances = 4;
          vars.armour.push(arm_enforcerCarapace(true));
          break;
        // case "Brigade":
        //     systemData.system.skills.athletics.advance = "2"
        //     systemData.system.skills.awareness.advance = "2"
        //     systemData.system.skills.dodge.advance = "2"
        //     systemData.system.skills.medicae.advance = "2"
        //     systemData.system.skills.parry.advance = "1"
        //     systemData.system.skills.techUse.advance = "2"
        //     systemData.system.skills.operate.specialities.surface.advance = 1
        //     systemData.system.skills.operate.specialities.surface.taken = true
        //     talents.push(talent_adamantiumFaith)
        //     talents.push(talent_mightyShot)
        //     talents.push(talent_rapidReload)
        //     talents.push(talent_technicalKnock)
        //     vars.weapons.push(wep_hotShotLasgun)
        //     vars.weapons.push(wep_knife_mel)
        //     vars.armour.push(arm_tempestusCarapace)
        //     break;
      }
      break;

    // case "Brute":
    //     switch (nameProp) {
    //         case "Ambot":
    //             size = 1.6
    //             switch (weaponProp) {
    //                 default:
    //                     vars.imageLoc = "Ambot."
    //                     vars.imageWild = "Ambot"
    //                     break;
    //             }
    //             systemData.system.skills.athletics.advance = "3"
    //             systemData.system.skills.parry.advance = "1"
    //             talents.push(talent_ambidextrous)
    //             talents.push(talent_hardy)
    //             talents.push(talent_trueGrit)
    //             talents.push(talent_twoWeaponWielder("Melee"))
    //             traits.push(trait_autoStabilised)
    //             traits.push(trait_fear(1))
    //             traits.push(trait_machine(4))
    //             traits.push(trait_undying)
    //             traits.push(trait_unnaturalStrength(3))
    //             systemData.system.characteristics.strength.unnatural = 3
    //             traits.push(trait_unnaturalToughness(5))
    //             systemData.system.characteristics.toughness.unnatural = 5
    //             vars.weapons.push(wep_tunnellingClawsRanged)
    //             vars.weapons.push(wep_tunnellingClawsMelee)
    //             vars.weapons.push(wep_tunnellingClawsMelee)
    //             break;
    //     }
    //     break;

    // case "Astartes":
    //     switch (nameProp) {
    //         case "Word Bearer Legionary":
    //             size = 1.25
    //             name = "Astartes"
    //             switch (weaponProp) {
    //                 default:
    //                     vars.imageLoc = "AstartesChaosWordBeaererLegionaryBolter."
    //                     vars.imageWild = "AstartesChaosWordBeaererLegionaryBolter"
    //                     break;
    //             }
    //             systemData.system.skills.athletics.advance = "2"
    //             systemData.system.skills.awareness.advance = "2"
    //             systemData.system.skills.dodge.advance = "2"
    //             systemData.system.skills.stealth.advance = "2"
    //             vars.weapons.push(wep_rendingClaws)
    //             talents.push(talent_combatMaster)
    //             talents.push(talent_devastaingAssault)
    //             talents.push(talent_hardTarget)
    //             talents.push(talent_leapUp)
    //             talents.push(talent_lightningAttack)
    //             talents.push(talent_stepAside)
    //             talents.push(talent_swiftAttack)
    //             traits.push(trait_darkSight)
    //             traits.push(trait_naturalWeaponsDeadly)
    //             traits.push(trait_fear(1))
    //             traits.push(trait_fromBeyond)
    //             traits.push(trait_multipleArms(4))
    //             traits.push(trait_naturalArmour(4))
    //             traits.push(trait_unnaturalAgility(4))
    //             systemData.system.characteristics.agility.unnatural = 4
    //             traits.push(trait_unnaturalStrength(4))
    //             systemData.system.characteristics.strength.unnatural = 4
    //             traits.push(trait_unnaturalToughness(2))
    //             systemData.system.characteristics.toughness.unnatural = 2
    //             break;
    //     }
    //     break;

    // case "Ork":
    //     switch (nameProp) {
    //         case "Kommando Boy":
    //             size = 1.25
    //             name = "Boy"
    //             switch (weaponProp) {
    //                 case "Burna":
    //                     vars.imageLoc = "Orks/OrkKommandoBoyFlamer."
    //                     vars.imageWild = "Orks/OrkKommandoBoyFlamer"
    //                     vars.weapons.push(wep_flamer)
    //                     break;
    //                 case "Choppa":
    //                     vars.imageLoc = "Orks/OrkKommandoBoyChoppa."
    //                     vars.imageWild = "Orks/OrkKommandoBoyChoppa"
    //                     vars.weapons.push(wep_ork_slugga)
    //                     vars.weapons.push(wep_ork_choppa)
    //                     break;
    //                 case "Rokkit":
    //                     vars.imageLoc = "Orks/OrkKommandoBoyRokkit."
    //                     vars.imageWild = "Orks/OrkKommandoBoyRokkit"
    //                     vars.weapons.push(wep_ork_rokkit)
    //                     break;
    //                 case "Shoota":
    //                     vars.imageLoc = "Orks/OrkKommandoBoyShoota1."
    //                     vars.imageWild = "Orks/OrkKommandoBoyShoota"
    //                     vars.weapons.push(wep_ork_shootaTwinLinked)
    //                     break;
    //                 case "Sniper":
    //                     vars.imageLoc = "Orks/OrkKommandoBoySniper."
    //                     vars.imageWild = "Orks/OrkKommandoBoySniper"
    //                     vars.weapons.push(wep_ork_scopedBigShoota)
    //                     break;
    //                 default:
    //                     vars.imageLoc = "Orks/OrkKommandoBoyShoota1."
    //                     vars.imageWild = "Orks/OrkKommandoBoyShoota"
    //                     break;
    //             }
    //             systemData.system.skills.athletics.advance = "1"
    //             systemData.system.skills.dodge.advance = "1"
    //             systemData.system.skills.intimidate.advance = "1"
    //             systemData.system.skills.stealth.advance = "1"
    //             talents.push(talent_bulgingBiceps)
    //             talents.push(talent_crushingBlow)
    //             talents.push(talent_devastaingAssault)
    //             talents.push(talent_hardy)
    //             talents.push(talent_ironJaw)
    //             talents.push(talent_trueGrit)
    //             traits.push(trait_unnaturalStrength(1))
    //             systemData.system.characteristics.strength.unnatural = 1
    //             traits.push(trait_unnaturalToughness(1))
    //             systemData.system.characteristics.toughness.unnatural = 1
    //             vars.armour.push(arm_flakk)
    //             break;
    //         case "Kommando Nob":
    //             size = 1.25
    //             name = "Nob"
    //             switch (weaponProp) {
    //                 default:
    //                     vars.imageLoc = "Orks/OrkKommandoNob."
    //                     vars.imageWild = "Orks/OrkKommandoNob"
    //                     break;
    //             }
    //             systemData.system.skills.athletics.advance = "2"
    //             systemData.system.skills.command.advance = "2"
    //             systemData.system.skills.dodge.advance = "1"
    //             systemData.system.skills.intimidate.advance = "3"
    //             systemData.system.skills.stealth.advance = "2"
    //             talents.push(talent_bulgingBiceps)
    //             talents.push(talent_crushingBlow)
    //             talents.push(talent_devastaingAssault)
    //             talents.push(talent_hardy)
    //             talents.push(talent_ironJaw)
    //             talents.push(talent_trueGrit)
    //             traits.push(trait_unnaturalStrength(1))
    //             systemData.system.characteristics.strength.unnatural = 1
    //             traits.push(trait_unnaturalToughness(1))
    //             systemData.system.characteristics.toughness.unnatural = 1
    //             vars.weapons.push(wep_ork_slugga)
    //             vars.weapons.push(wep_ork_powerKlaw)
    //             vars.armour.push(arm_flakk)
    //             break;
    //     }
    //     break;

    case `Tyranid`:
      switch (nameProp) {
        case `Genestealer`:
          vars.imageLoc = `Tyranids/TyranidGenestealer01.`;
          vars.imageWild = `Tyranids/TyranidGenestealer`;
          systemData.system.faction = factions.genestealerCult;
          systemData.system.species = `Genestealer`;
          size = 1.25;
          vars.weapons = [wep_clawsAndTalons(true)];
          systemData.system.combat.armour.useItems = false;
          systemData.system.combat.armour.value = 2;
          systemData.system.combat.speed.land.value = `fast`;
          systemData.system.skills.athletics.advances = 2;
          systemData.system.skills.awareness.advances = 4;
          systemData.system.skills.intuition.advances = 4;
          systemData.system.skills.melee.advances = 2;
          systemData.system.skills.reflexes.advances = 2;
          break;
      }
      break;
  }

  const rings = WFRP4eRings(
    `ImpMal`,
    ringRank,
    vars.name,
    `modules/40k-rpg-addons/assets/tokens/${vars.imagePath}${vars.imageWild}*`,
    size
  );
  systemData.system.role = rank.toLowerCase();

  if (
    ImpMalNPCAttributes[vars.factions.toLowerCase()] &&
    ImpMalNPCAttributes[vars.factions.toLowerCase()][vars.stats.toLowerCase()]
  ) {
    systemData.system.characteristics = StatGet(
      vars.factions,
      vars.stats,
      systemData.system.characteristics
    );

    systemData.system.combat.resolve =
      ImpMalNPCAttributes[vars.factions.toLowerCase()][
        vars.stats.toLowerCase()
      ][10];
    systemData.system.combat.wounds.value =
      ImpMalNPCAttributes[vars.factions.toLowerCase()][
        vars.stats.toLowerCase()
      ][11];
    systemData.system.combat.wounds.max =
      ImpMalNPCAttributes[vars.factions.toLowerCase()][
        vars.stats.toLowerCase()
      ][11];
    systemData.system.combat.size =
      ImpMalNPCAttributes[vars.factions.toLowerCase()][
        vars.stats.toLowerCase()
      ][12];
  } else {
    // console.log(`ERROR, MISSING: ${vars.stats} for WFRP4e`)
  }

  return {
    folder: `7eZbZrIKMG91itdd`,
    name: `${vars.name} ${weaponProp && `w/ ` + weaponProp + ` `}(${ringRank})`,
    // name: `${vars.name}`,
    type: `npc`,
    img: `modules/40k-rpg-addons/assets/tokens/${vars.imagePath}${vars.imageLoc}png`,
    ...systemData,
    ...rings,
    items: [...vars.weapons, ...vars.armour, ...vars.other],
  };
}
