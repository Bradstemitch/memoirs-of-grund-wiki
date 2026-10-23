import { NPCCharacteristics } from '../_WFRP4e/Summary/NPCAttributesWFRP4e';
import { HumanSwitch } from './_switches/HumanSwitches';
import { AberrationSwitch } from './_switches/AberrationSwitches';
import { BeastSwitch } from './_switches/BeastSwitches';
import { CelestialSwitch } from './_switches/CelestialSwitches';
import { ConstructSwitch } from './_switches/ConstructSwitches';
import { DragonSwitch } from './_switches/DragonSwitches';
import { FeySwitch } from './_switches/FeySwitches';
import { FiendSwitch } from './_switches/FiendSwitches';
import { GiantSwitch } from './_switches/GiantSwitches';
import { HumanoidSwitch } from './_switches/HumanoidSwitches';
import { MonstrositySwitch } from './_switches/MonstrositySwitches';
import { UndeadSwitch } from './_switches/UndeadSwitches';

function WFRP4eAbilityBuilder(value: number, starting: number) {
  return {
    initial: starting + value,
    modifier: 0,
    advances: 0,
    bonusMod: 0,
    calculationBonusModifier: 0,
  };
}

function WFRP4eStatGet(
  species: string,
  name: string,
  characteristics: any,
  bonus?: boolean
) {
  return {
    ws: WFRP4eAbilityBuilder(
      NPCCharacteristics[species][name][0],
      bonus
        ? characteristics.ws.initial - NPCCharacteristics[species][species][0]
        : characteristics.ws.initial
    ),
    bs: WFRP4eAbilityBuilder(
      NPCCharacteristics[species][name][1],
      bonus
        ? characteristics.bs.initial - NPCCharacteristics[species][species][0]
        : characteristics.bs.initial
    ),
    s: WFRP4eAbilityBuilder(
      NPCCharacteristics[species][name][2],
      bonus
        ? characteristics.s.initial - NPCCharacteristics[species][species][0]
        : characteristics.s.initial
    ),
    t: WFRP4eAbilityBuilder(
      NPCCharacteristics[species][name][3],
      bonus
        ? characteristics.t.initial - NPCCharacteristics[species][species][0]
        : characteristics.t.initial
    ),
    i: WFRP4eAbilityBuilder(
      NPCCharacteristics[species][name][4],
      bonus
        ? characteristics.i.initial - NPCCharacteristics[species][species][0]
        : characteristics.i.initial
    ),
    ag: WFRP4eAbilityBuilder(
      NPCCharacteristics[species][name][5],
      bonus
        ? characteristics.ag.initial - NPCCharacteristics[species][species][0]
        : characteristics.ag.initial
    ),
    dex: WFRP4eAbilityBuilder(
      NPCCharacteristics[species][name][6],
      bonus
        ? characteristics.dex.initial - NPCCharacteristics[species][species][0]
        : characteristics.dex.initial
    ),
    int: WFRP4eAbilityBuilder(
      NPCCharacteristics[species][name][7],
      bonus
        ? characteristics.int.initial - NPCCharacteristics[species][species][0]
        : characteristics.int.initial
    ),
    wp: WFRP4eAbilityBuilder(
      NPCCharacteristics[species][name][8],
      bonus
        ? characteristics.wp.initial - NPCCharacteristics[species][species][0]
        : characteristics.wp.initial
    ),
    fel: WFRP4eAbilityBuilder(
      NPCCharacteristics[species][name][9],
      bonus
        ? characteristics.fel.initial - NPCCharacteristics[species][species][0]
        : characteristics.fel.initial
    ),
  };
}

export function NPCBuilder(
  system: string,
  creatureType: string,
  speciesProp: string,
  factionProp: string,
  nameProp: string,
  weaponProp: string,
  group?: string
) {
  function creatureSwitch() {
    switch (creatureType) {
      case `Aberration`:
        return AberrationSwitch(
          nameProp,
          speciesProp,
          factionProp,
          weaponProp,
          group
        );

      case `Beast`:
        return BeastSwitch(
          nameProp,
          speciesProp,
          factionProp,
          weaponProp,
          group
        );

      case `Celestial`:
        return CelestialSwitch(
          nameProp,
          speciesProp,
          factionProp,
          weaponProp,
          group
        );

      case `Construct`:
        return ConstructSwitch(
          nameProp,
          speciesProp,
          factionProp,
          weaponProp,
          group
        );

      case `Dragon`:
        return DragonSwitch(
          nameProp,
          speciesProp,
          factionProp,
          weaponProp,
          group
        );

      case `Fey`:
        return FeySwitch(nameProp, speciesProp, factionProp, weaponProp, group);

      case `Fiend`:
        return FiendSwitch(
          nameProp,
          speciesProp,
          factionProp,
          weaponProp,
          group
        );

      case `Giant`:
        return GiantSwitch(
          nameProp,
          speciesProp,
          factionProp,
          weaponProp,
          group
        );

      case `Humanoid`:
        if (speciesProp === `human`) {
          return HumanSwitch(
            nameProp,
            speciesProp,
            factionProp,
            weaponProp,
            group
          );
        } else {
          return HumanoidSwitch(
            nameProp,
            speciesProp,
            factionProp,
            weaponProp,
            group
          );
        }

      case `Monstrosity`:
        return MonstrositySwitch(
          nameProp,
          speciesProp,
          factionProp,
          weaponProp,
          group
        );

      case `Undead`:
        return UndeadSwitch(
          nameProp,
          speciesProp,
          factionProp,
          weaponProp,
          group
        );

      default:
        return HumanSwitch(
          nameProp,
          speciesProp,
          factionProp,
          weaponProp,
          group
        );
    }
  }

  const switchResponse = creatureSwitch();
  // const armour = switchResponse!.armour || []
  // const weapons = switchResponse!.weapons || []
  // const other = switchResponse!.other ? switchResponse!.other.sort(function (a, b) {
  //     return a.name.localeCompare(b.name)
  // }) : []

  // WFRP4eSystemData.system.details.species = switchResponse.details.wfrp4e.species
  // WFRP4eSystemData.system.details.size.value = switchResponse.details.wfrp4e.size.value

  // if (NPCCharacteristics[speciesProp.toLowerCase()] && NPCCharacteristics[speciesProp.toLowerCase()][switchResponse.stats.wfrp4e]) {
  //     WFRP4eSystemData.system.characteristics = WFRP4eStatGet(speciesProp.toLowerCase(), switchResponse.stats.wfrp4e, WFRP4eSystemData.system.characteristics)

  //     if (switchResponse.statBonus) {
  //         WFRP4eSystemData.system.characteristics = WFRP4eStatGet("human", switchResponse.statBonus, WFRP4eSystemData.system.characteristics, true)
  //         ringRank = NPCCharacteristics["human"][switchResponse.statBonus][14]
  //         threat = NPCCharacteristics["human"][switchResponse.statBonus][15]
  //     } else {
  //         ringRank = NPCCharacteristics[speciesProp.toLowerCase()][switchResponse.stats.wfrp4e][14]
  //         threat = NPCCharacteristics[speciesProp.toLowerCase()][switchResponse.stats.wfrp4e][15]
  //     }

  //     WFRP4eSystemData.system.status.wounds.value = NPCCharacteristics[speciesProp.toLowerCase()][switchResponse.stats.wfrp4e][10]
  //     WFRP4eSystemData.system.status.wounds.max = NPCCharacteristics[speciesProp.toLowerCase()][switchResponse.stats.wfrp4e][10]
  //     WFRP4eSystemData.system.details.move.value = NPCCharacteristics[speciesProp.toLowerCase()][switchResponse.stats.wfrp4e][11]

  // } else {
  //     // console.log(`ERROR, MISSING: ${switchResponse.stats.wfrp4e} for WFRP4e`)
  // }
  // }
  // systemData.system.fate.max = NPCCharacteristics[gangConst][switchResponse.stats][11]
  // systemData.system.fate.value = NPCCharacteristics[gangConst][switchResponse.stats][11]
  // systemData.system.size = NPCCharacteristics[gangConst][switchResponse.stats][12].toString()
  return {
    dnd5e: switchResponse.dnd5e,
    wfrp4e: switchResponse.wfrp4e,
  };
}
