import {
  arm_leatherJack,
  arm_leatherLeggings,
} from '../../_WFRP4e/Items/_WFRP4e/arm-leather';
import {
  arm_mailShirt,
  arm_mailCoif,
  arm_mailChausses,
  arm_mailCoat,
} from '../../_WFRP4e/Items/_WFRP4e/arm-mail';
import {
  arm_plateOpenHelm,
  arm_plateBreastplate,
  arm_plateBracers,
  arm_plateLeggings,
} from '../../_WFRP4e/Items/_WFRP4e/arm-plate';
import { dnd5e_arm_chainMail } from '../../armoury/_DnD5e/armour/heavy/arm_chainMail';
import { dnd5e_arm_plate } from '../../armoury/_DnD5e/armour/heavy/arm_plate';
import { dnd5e_arm_ringMail } from '../../armoury/_DnD5e/armour/heavy/arm_ringMail';
import { dnd5e_arm_splint } from '../../armoury/_DnD5e/armour/heavy/arm_splint';
import { dnd5e_arm_leatherArmour } from '../../armoury/_DnD5e/armour/light/arm_leather';
import { dnd5e_arm_studdedLeatherArmour } from '../../armoury/_DnD5e/armour/light/arm_leatherStudded';
import { dnd5e_arm_breastplate } from '../../armoury/_DnD5e/armour/medium/arm_breastplate';
import { dnd5e_arm_chainShirt } from '../../armoury/_DnD5e/armour/medium/arm_chainShirt';
import { dnd5e_arm_halfPlate } from '../../armoury/_DnD5e/armour/medium/arm_halfPlate';
import { dnd5e_arm_hideArmour } from '../../armoury/_DnD5e/armour/medium/arm_hide';
import { dnd5e_arm_scaleMail } from '../../armoury/_DnD5e/armour/medium/arm_scaleMail';

export function constArmourBuilder(armour: string) {
  switch (armour) {
    case `None`:
      return {
        dnd5e: [],
        wfrp4e: [],
      };
    case `Ashigaru`:
      return {
        dnd5e: [dnd5e_arm_hideArmour(true)],
        wfrp4e: [
          arm_plateOpenHelm(true),
          arm_leatherJack(true),
          arm_leatherLeggings(true),
        ],
      };
    case `Leather`:
      return {
        dnd5e: [dnd5e_arm_leatherArmour(true)],
        wfrp4e: [arm_leatherJack(true), arm_leatherLeggings(true)],
      };
    case `Studded Leather`:
      return {
        dnd5e: [dnd5e_arm_studdedLeatherArmour(true)],
        wfrp4e: [],
      };
    case `Hide`:
      return {
        dnd5e: [dnd5e_arm_hideArmour(true)],
        wfrp4e: [
          arm_plateOpenHelm(true),
          arm_leatherJack(true),
          arm_leatherLeggings(true),
        ],
      };
    case `Chain Shirt`:
      return {
        dnd5e: [dnd5e_arm_chainShirt(true)],
        wfrp4e: [
          arm_plateOpenHelm(true),
          arm_mailShirt(true),
          arm_leatherJack(true),
          arm_leatherLeggings(true),
        ],
      };
    case `Scale Mail`:
      return {
        dnd5e: [dnd5e_arm_scaleMail(true)],
        wfrp4e: [],
      };
    case `Breastplate`:
      return {
        dnd5e: [dnd5e_arm_breastplate(true)],
        wfrp4e: [
          arm_plateOpenHelm(true),
          arm_plateBreastplate(true),
          arm_plateBracers(true),
          arm_plateLeggings(true),
        ],
      };
    case `Half Plate`:
      return {
        dnd5e: [dnd5e_arm_halfPlate(true)],
        wfrp4e: [
          arm_plateOpenHelm(true),
          arm_plateBreastplate(true),
          arm_plateBracers(true),
          arm_plateLeggings(true),
          arm_mailCoif(true),
          arm_mailShirt(true),
          arm_mailChausses(true),
        ],
      };
    case `Ring Mail`:
      return {
        dnd5e: [dnd5e_arm_ringMail(true)],
        wfrp4e: [],
      };
    case `Chain Mail`:
      return {
        dnd5e: [dnd5e_arm_chainMail(true)],
        wfrp4e: [
          arm_mailCoif(true),
          arm_mailCoat(true),
          arm_mailChausses(true),
          arm_leatherJack(true),
          arm_leatherLeggings(true),
        ],
      };
    case `Splint`:
      return {
        dnd5e: [dnd5e_arm_splint(true)],
        wfrp4e: [],
      };
    case `Plate`:
      return {
        dnd5e: [dnd5e_arm_plate(true)],
        wfrp4e: [],
      };
    default:
      return {
        dnd5e: [],
        wfrp4e: [],
      };
  }
}
