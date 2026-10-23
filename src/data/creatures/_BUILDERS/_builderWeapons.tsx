import { wep_axe } from '../../_WFRP4e/Items/_WFRP4e/wep_axe';
import { wep_club } from '../../_WFRP4e/Items/_WFRP4e/wep_bludgeon';
import {
  wep_plumbata,
  wep_bow,
  wep_longbow,
} from '../../_WFRP4e/Items/_WFRP4e/wep_bow';
import { wep_spear, wep_lance } from '../../_WFRP4e/Items/_WFRP4e/wep_polearm';
import {
  shi_shield,
  shi_shieldLarge,
} from '../../_WFRP4e/Items/_WFRP4e/wep_shield';
import { wep_dagger, wep_sword } from '../../_WFRP4e/Items/_WFRP4e/wep_sword';
import { dnd5e_arm_shield } from '../../armoury/_DnD5e/armour/arm_shield';
import { dnd5e_magicProperty_plus } from '../../armoury/_DnD5e/weapons/magicPlus';
import { dnd5e_wep_greataxe } from '../../armoury/_DnD5e/weapons/melee/axeGreat';
import { dnd5e_wep_handaxe } from '../../armoury/_DnD5e/weapons/melee/axeHand';
import { dnd5e_wep_dart } from '../../armoury/_DnD5e/weapons/melee/dart';
import { dnd5e_wep_dartPlumbata } from '../../armoury/_DnD5e/weapons/melee/dartPlumbata';
import { dnd5e_wep_javelin } from '../../armoury/_DnD5e/weapons/melee/javelin';
import { dnd5e_wep_javelinPilum } from '../../armoury/_DnD5e/weapons/melee/javelinPilum';
import { dnd5e_wep_lance } from '../../armoury/_DnD5e/weapons/melee/lance';
import { dnd5e_wep_longsword } from '../../armoury/_DnD5e/weapons/melee/longsword';
import { dnd5e_wep_shortsword } from '../../armoury/_DnD5e/weapons/melee/shortsword';
import { dnd5e_wep_spear } from '../../armoury/_DnD5e/weapons/melee/spear';
import { dnd5e_wep_spearMartial } from '../../armoury/_DnD5e/weapons/melee/spearMartial';
import { dnd5e_wep_crossbowHeavy } from '../../armoury/_DnD5e/weapons/ranged/crossbowHeavy';
import { dnd5e_wep_laserRifle } from '../../armoury/_DnD5e/weapons/ranged/laserRifle';
import { dnd5e_wep_longbow } from '../../armoury/_DnD5e/weapons/ranged/longbow';
import { dnd5e_wep_dagger } from '../../armoury/_DnD5e/weapons/wep_simple';
import { dnd5e_action_ghoulBite } from '../monsterFeatures_DnD5e/actions/ghoulBite';
import { dnd5e_action_ghoulClaw } from '../monsterFeatures_DnD5e/actions/ghoulClaw';
import { dnd5e_action_shieldBash } from '../monsterFeatures_DnD5e/actions/shieldBash';
import { dnd5e_trait_shieldScutum } from '../monsterFeatures_DnD5e/traits/shieldScutum';
import { dnd5e_weaponTrait_cavalryCharge, dnd5e_weaponTrait_cavalryShockAssault } from '../monsterFeatures_DnD5e/weaponTrait/cavalryCharge';
import { dnd5e_weaponTrait_forceDamage } from '../monsterFeatures_DnD5e/weaponTrait/DamageForce';
import { dnd5e_weaponTrait_necroticDamage } from '../monsterFeatures_DnD5e/weaponTrait/damageNecrotic';
import { dnd5e_weaponTrait_notBloodied } from '../monsterFeatures_DnD5e/weaponTrait/notBloodied';

function weaponBuilder(
  weapon: string,
  equipped: boolean,
  offhand?: boolean,
  quantity?: number,
  dnd5eDamage?: number,
  otherName?: string
) {
  const dieNumber = dnd5eDamage ? dnd5eDamage : 1;

  switch (weapon) {
    case `Ghoul Bite`:
      return {
        dnd5e: [dnd5e_action_ghoulBite({ damageDie: dieNumber })],
        wfrp4e: [wep_axe(equipped, offhand)],
      };
    case `Ghoul Claw`:
      return {
        dnd5e: [dnd5e_action_ghoulClaw({ damageDie: dieNumber })],
        wfrp4e: [wep_axe(equipped, offhand)],
      };

    case `Handaxe`:
      return {
        dnd5e: [dnd5e_wep_handaxe(equipped, dieNumber)],
        wfrp4e: [wep_axe(equipped, offhand)],
      };
    case `Club`:
      return {
        dnd5e: [],
        wfrp4e: [wep_club(equipped, offhand)],
      };
    case `Dagger`:
      return {
        dnd5e: [dnd5e_wep_dagger(equipped, dieNumber)],
        wfrp4e: [wep_dagger(equipped, offhand)],
      };
    case `Dart`:
      switch (otherName) {
        case `Plumbata`:
          return {
            dnd5e: [dnd5e_wep_dartPlumbata(equipped, dieNumber, quantity || 1)],
            wfrp4e: [wep_plumbata(equipped, quantity || 1)],
          };
        default:
          return {
            dnd5e: [dnd5e_wep_dart(equipped, dieNumber, quantity || 1)],
            wfrp4e: [wep_spear(equipped, offhand)],
          };
      }
    case `Heavy Crossbow`:
      return {
        dnd5e: [dnd5e_wep_crossbowHeavy(equipped, dieNumber)],
        wfrp4e: [...wep_bow(equipped, false, 30)],
      };
    case `Shortbow`:
      return {
        dnd5e: [],
        wfrp4e: [...wep_bow(equipped, false, 30)],
      };
    case `Longbow`:
      return {
        dnd5e: [dnd5e_wep_longbow(equipped, dieNumber)],
        wfrp4e: [...wep_longbow(equipped, false, 30)],
      };
    case `Short Sword`:
      return {
        dnd5e: [dnd5e_wep_shortsword(equipped, dieNumber)],
        wfrp4e: [wep_sword(equipped, offhand)],
      };
    case `Longsword`:
      return {
        dnd5e: [dnd5e_wep_longsword(equipped, dieNumber)],
        wfrp4e: [wep_sword(equipped, offhand)],
      };
    case `Spear`:
      if (otherName !== undefined) {
        return {
          dnd5e: [dnd5e_wep_spearMartial(equipped, dieNumber, otherName)],
          wfrp4e: [wep_spear(equipped, offhand)],
        };
      } else {
        return {
          dnd5e: [dnd5e_wep_spear(equipped, dieNumber)],
          wfrp4e: [wep_spear(equipped, offhand)],
        };
      }
    case `Lance`:
      return {
        dnd5e: [dnd5e_wep_lance(equipped, dieNumber)],
        wfrp4e: [wep_lance(equipped, offhand)],
      };
    case `Javelin`:
      switch (otherName) {
        case `Pilum`:
          return {
            dnd5e: [dnd5e_wep_javelinPilum(equipped, dieNumber, quantity || 1)],
            wfrp4e: [wep_spear(equipped, offhand)],
          };
        default:
          return {
            dnd5e: [dnd5e_wep_javelin(equipped, dieNumber, quantity || 1)],
            wfrp4e: [wep_spear(equipped, offhand)],
          };
      }
    case `Greataxe`:
      return {
        dnd5e: [dnd5e_wep_greataxe(equipped, dieNumber)],
        wfrp4e: [],
      };
    case `Shield`:
      return {
        dnd5e: [dnd5e_arm_shield(equipped)],
        wfrp4e: [shi_shield(equipped)],
      };
    case `Large Shield`:
      if (otherName !== undefined) {
        return {
          dnd5e: [
            dnd5e_arm_shield(equipped),
            {
              ...dnd5e_trait_shieldScutum(),
              name: otherName,
            },
          ],
          wfrp4e: [shi_shieldLarge(equipped)],
        };
      } else {
        return {
          dnd5e: [dnd5e_arm_shield(equipped)],
          wfrp4e: [shi_shieldLarge(equipped)],
        };
      }

    case `Shield Bash`:
      return {
        dnd5e: [dnd5e_action_shieldBash({ damageDie: dieNumber })],
        wfrp4e: [],
      };
    case `Laser Rifle`:
      return {
        dnd5e: [dnd5e_wep_laserRifle(equipped, dieNumber)],
        wfrp4e: [wep_sword(equipped, offhand)],
      };
    default:
      return {
        dnd5e: [],
        wfrp4e: [],
      };
  }
}

export function constWeaponBuilder(
  weapons: {
    weapon: string;
    equipped: boolean;
    offhand?: boolean;
    quantity?: number;
    dnd5eDamage?: number;
    otherName?: string;
    bonusTraits?: string[]

    magic?: { bonus?: number };
    cavalryCharge?: number[];
    cavalryShockAssault?: number[];
    forceDamage?: number[];
    necroticDamage?: number[];
    notBloodied?: number[];

  }[]
) {
  const weaponsBuilt = {
    dnd5e: [] as any[],
    wfrp4e: [] as any[],
  };
  weapons.map((weapon) => {
    const wep = weaponBuilder(
      weapon.weapon,
      weapon.equipped,
      weapon.offhand || undefined,
      weapon.quantity || undefined,
      weapon.dnd5eDamage || undefined,
      weapon.otherName || undefined
    );
    if (weapon) {
      if(weapon.bonusTraits)
        wep.dnd5e[0].system.properties.push(...weapon.bonusTraits)
      if (weapon.magic)
        wep.dnd5e = dnd5e_magicProperty_plus(wep.dnd5e, weapon.magic.bonus || 0, weapon.otherName)

      if (weapon.notBloodied)
        wep.dnd5e = dnd5e_weaponTrait_notBloodied(wep.dnd5e, weapon.notBloodied[0] || 1, weapon.notBloodied[1] || 1)
      if (weapon.forceDamage)
        wep.dnd5e = dnd5e_weaponTrait_forceDamage(wep.dnd5e, weapon.forceDamage[0] || 1, weapon.forceDamage[1] || 6)
      if (weapon.necroticDamage)
        wep.dnd5e = dnd5e_weaponTrait_necroticDamage(wep.dnd5e, weapon.necroticDamage[0] || 1, weapon.necroticDamage[1] || 6)

      if (weapon.cavalryCharge)
        wep.dnd5e = dnd5e_weaponTrait_cavalryCharge(wep.dnd5e, weapon.cavalryCharge[0] || 1, weapon.cavalryCharge[1] || 1)
      if (weapon.cavalryShockAssault)
        wep.dnd5e = dnd5e_weaponTrait_cavalryShockAssault(wep.dnd5e, weapon.cavalryShockAssault[0] || 1, weapon.cavalryShockAssault[1] || 1)
    }

    weaponsBuilt.dnd5e.push(...wep.dnd5e);
    weaponsBuilt.wfrp4e.push(...wep.wfrp4e);
  });
  return weaponsBuilt;
}
