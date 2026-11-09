import { dnd5e_arm_shield } from "../../../armoury/_DnD5e/armour/arm_shield"
import { dnd5e_arm_breastplate } from "../../../armoury/_DnD5e/armour/medium/arm_breastplate"
import { dnd5e_arm_halfPlate } from "../../../armoury/_DnD5e/armour/medium/arm_halfPlate"
import { dnd5e_wep_greataxe } from "../../../armoury/_DnD5e/weapons/melee/axeGreat"
import { dnd5e_wep_dart } from "../../../armoury/_DnD5e/weapons/melee/dart"
import { dnd5e_wep_longsword } from "../../../armoury/_DnD5e/weapons/melee/longsword"
import { dnd5e_wep_shortsword } from "../../../armoury/_DnD5e/weapons/melee/shortsword"
import { dnd5e_wep_spear } from "../../../armoury/_DnD5e/weapons/melee/spear"
import { dnd5e_wep_longbow } from "../../../armoury/_DnD5e/weapons/ranged/longbow"
import { dnd5e_wep_pike } from "../../../armoury/_DnD5e/weapons/wep_martial"
import { dnd5e_wep_dagger } from "../../../armoury/_DnD5e/weapons/wep_simple"

/*
TEMPLATE: {
    DnD5e: {
      description: (<>
      <p>
      </p>
    </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
},
*/
const magicBanners = {
  AQUILA_OF_THE_LOST_LEGION: {
    DnD5e: {
      type: 'Weapon',
      base: dnd5e_wep_longsword(false, 1),
      rarity: 'Rare',
      description: (<>
        <p>
          Avatar of Jupiter.
          Whenever a friendly creature within 10 ft. of you makes an Attack roll or a Saving Throw, that creature can use its reaction to roll a d4 and add the number rolled to the Attack Roll or Saving Throw.
          “For the Eagle”.
          All of your units gain the following traits:
          Fearless. This unit automatically succeeds on Morale tests.
          Maneuver: Bloody Advance. As a reaction to succeeding on an Attack test, make a DC 15 Command test. On a success, the damage dealt by this unit’s next Power test is doubled. If this attack breaks an opposed unit, you can automatically use the Follow Up maneuver, and any remaining damage is inflicted on any opposed unit that was immediately behind the broken unit.
          Bearer of the Standard. Once per long rest, when you are reduced to 0 hit points, roll a 1d4. You remain alive for a number of rounds equal to the result before you fall unconscious and begin dying. Until you fall unconscious or regain hit points you are immune to all damage.
          Vengeance of the Legions. Once per week, you can use your action to summon the spirits of “The Lost Legion” to aid you in battle. The Lost Legion remains for 24 hours.

        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
}
const magicWeapons = {
  ALDER_BLADE: {
    DnD5e: {
      type: 'Weapon',
      base: dnd5e_wep_longsword(false, 1),
      rarity: 'Rare',
      description: (<>
        <p>
          <strong><em>{`   Magic Weapon. `}</em></strong>
          You gain a +1 bonus to Attack and Damage Rolls made with this Magic Weapon. In addition:
          <strong><em>{`   Arcane Channelling. `}</em></strong>
          You gain a +1 bonus to Spell Attack Rolls and Spell Save DC.
          <strong><em>{`   Elven Blade. `}</em></strong>
          When you take the attack action, you may make one additional attack with this weapon as a Bonus Action.
          <strong><em>{`   Mithril. `}</em></strong>
          Gains the Light and Finesse properties, in addition the weapon counts as silvered.
          <strong><em>{`   Spellcasting Focus. `}</em></strong>
          You may use the Alder Blade as a spellcasting focus, regardless of your spellcasting class.
        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  ASCALON: {
    DnD5e: {
      type: 'Weapon',
      base: dnd5e_wep_longsword(false, 1),
      rarity: 'Rare',
      description: (<>
        <p>
          It has 3 charges, and it regains 1d3 expended charges daily at dawn. When you fail a Saving Throw against a dragon while carrying it, you can use your reaction to expend 1 of its charges to succeed on that Saving Throw instead.
          You can use your action to summon a weapon in your empty hand. You can choose either a Longsword or a Lance as the form this weapon takes each time you summon it. You are proficient with it while you wield it.
          This weapon disappears if it is more than 5 feet away from you for 1 minute or more. It also disappears if you use this feature again, if you dismiss the weapon (no action required), or if you die.
          Magic Weapon. You gain a +1 bonus to attack and damage rolls made with this magic weapon.
          As a bonus action, you may morph Ascalon into a Lance or back to its original form
          Dragonslayer. When you hit a dragon with this weapon, the dragon takes an extra 3d6 damage. For the purpose of this weapon, "dragon" refers to any creature with the dragon type, including dragon turtles and wyverns.

        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  ASSASSINS_KISS: {
    DnD5e: {
      type: 'Weapon',
      base: dnd5e_wep_dagger(false, 1),      
      rarity: 'Rare',
      description: (<>
        <p>
          Magic Weapon. You gain a +3 bonus to attack and damage rolls made with this Magic Weapon.
          Poisoned. When you hit a creature it takes an additional 4d6 Poison damage and must make a DC 15 Constitution saving throw or be poisoned for 1 minute.
        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  BODHMALLS_DARTS: {
    DnD5e: {
      type: 'Weapon',
      base: dnd5e_wep_dart(false, 1, 1),
      rarity: 'Rare',
      description: (<>
        <p>
          Armourbane. An attack roll of 15 or higher automatically hits a target if it is wearing non-magical medium or heavy armour.
          Poisoned. When you hit a creature it takes an additional 1d4 Poison damage and must make a DC 15 Constitution saving throw or be poisoned for 1 minute.
        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  CALADBOLG: {
    DnD5e: {
      type: 'Weapon',
      base: dnd5e_wep_longsword(false, 1),
      rarity: 'Rare',
      description: (<>
        <p>
          Random Properties. Caladbolg has the following random properties:
          1 minor beneficial property
          1 major beneficial property
          1 minor detrimental property
          1 major detrimental property

          Hill Cleaver. Caladbolg deals double damage to objects and structures
          Three Great Strokes. You can use an action to speak Caladbolg’s command word, sweeping it in an arc before you, cleaving a 60-ft cone. Each creature in that area must make a DC 18 Dexterity saving throw, taking (8d6 + 30) Force Damage.

        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  CLARENT: {
    DnD5e: {
      type: 'Weapon',
      base: dnd5e_wep_longsword(false, 1),
      rarity: 'Rare',      description: (<>
        <p>
          <strong><em>{`   Sword of the King. `}</em></strong>
          Clarent can only be attuned by the being it deems to possess qualities worthy of a monarch.
        </p>
        <p>
          <strong><em>{`   Magic Weapon. `}</em></strong>
          You gain a +1 bonus to attack and damage rolls made with this Magic Weapon and deal an additional die of its Damage.
        </p>
        <p>
          Random Properties. Excalibur has the following randomly determined properties:
          2 minor beneficial properties
          1 major beneficial property
          2 minor detrimental properties
        </p>
        <p>
          Blessings of Danu. While attuned to Clarent, you gain the following benefits:
          <li>
            <ul>
              Your Charisma score changes to 27. If your Charisma is already equal to or greater than this score, this ability has no effect on you.
            </ul>
            <ul>
              You have Advantage on Charisma (Persuasion) checks made to interact with Good creatures.
            </ul>
            <ul>
              While attuned to Clarent, the divine magic of the sword causes you to age more slowly. For every 10 years that pass, your body ages only 1 year.
            </ul>
          </li>
        </p>
        <p>
          <strong><em>{`   Magic Weapon. `}</em></strong>
          Holy Weapon. When you first draw Excalibur at the start of combat, you may speak the sword's name to cast Holy Weapon (DC 17) upon it as a free action. Once this ability is used it cannot be used again until the next dawn.
          Radiant Sword of the King. As an action, you, and all allies within a 30 foot radius centered on you, gain 20 temporary hit points and a 1d8 Combat Inspiration, as per the Valor Bard's Combat inspiration ability, to be used in the next 10 minutes. Once this ability is used it cannot be used again until a day the next dawn.
        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  DYRNWYN: {
    DnD5e: {
      type: 'Weapon',
      base: dnd5e_wep_longsword(false, 1),
      rarity: 'Rare',      description: (<>
        <p>
          Magic Weapon. You gain a +2 bonus to attack and damage rolls made with this Magic Weapon. When you hit an Undead with it, that target takes an extra 1d8 radiant damage.
          ???. This item appears to be a Longsword hilt. While grasping the hilt, you can use a Bonus Action to cause a blade of pure Radiance to spring into existence, or make the blade disappear. While the blade exists, this magic Longsword has the Finesse property. If you are proficient with shortswords or longswords, you are proficient with the sun blade.
          ???. The sword's luminous blade emits bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. While the blade persists, you can use an action to expand or reduce its radius of bright and dim light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.

        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  EXCALIBUR: {
    DnD5e: {
      type: 'Weapon',
      base: [
        dnd5e_wep_shortsword(false, 1),
        dnd5e_wep_longsword(false, 1),
      ],
      rarity: 'Rare',
      description: (<>
        <p>
          <strong><em>{`   Properties Gift of The Lady of The Lake. `}</em></strong>
          Excalibur can only be attuned by the being it is gifted to by the Lady of The Lake and by those who the wielder allows to use it.
        </p>
        <p>
          <strong><em>{`   Magic Weapon. `}</em></strong>
          You gain a +3 bonus to attack and damage rolls made with this Magic Weapon and deal an additional die of its Damage. Additionally, you may make a Ranged Weapon Attack using your Charisma with a normal range of 20 feet and a long range of 60 feet. When you hit with a Ranged Attack using this weapon, it deals (1d8) Radiant Damage or, if the target is a Fiend or Undead, (2d8) Radiant Damage.
        </p>
        <p>
          <strong><em>{`   Random Properties. `}</em></strong>
          Excalibur has the following randomly determined properties:
          2 minor beneficial properties
          1 major beneficial property
          2 minor detrimental properties
        </p>
        <p>
          Sword of Sharpness.
          Excalibur functions as a Sword of Sharpness.
          When you Attack an object with this magic sword and hit, maximize your weapon damage dice against the target.
          When you Attack a creature with this weapon and roll a 20 on the Attack roll, that target takes an extra 4d6 slashing damage.
          Then roll another d20. If you roll a 20, you lop off one of the target’s limbs, with the effect of such loss determined by the GM.
          If the creature has no limb to sever, you lop off a portion of its body instead.
          In addition, you can speak the sword’s Command word to cause the blade to shed bright light in a 10-foot radius and dim light for an additional 10 feet. Speaking the Command Word again or sheathing the sword puts out the light.
        </p>
        <p>
          Blessings of Danu. While attuned to Excalibur, you gain the following benefits:
          Your Charisma score changes to 23. If your Charisma is already equal to or greater than this score, this ability has no effect on you.
          You have Advantage on Charisma (Persuasion) checks made to interact with Good creatures.
          While attuned to Excalibur, the divine magic of the sword causes you to age more slowly. For every 10 years that pass, your body ages only 1 year.
        </p>
        <p>
          Holy Weapon.
          When you first draw Excalibur at the start of combat, you may speak the sword's name to cast Holy Weapon (DC 17) upon it as a free action. Once this ability is used it cannot be used again until the next dawn.
        </p>
        <p>
          Radiant Sword of the King.
          As an action, you, and all allies within a 30 foot radius centered on you, gain 20 temporary hit points and a 1d8 Combat Inspiration, as per the Valor Bard's Combat inspiration ability, to be used in the next 10 minutes. Once this ability is used it cannot be used again until a day the next dawn.
        </p>
        <p>
          Excalibur’s Scabbard
        </p>
        <p>
          Restoration.
          While you wear the scabbard, you stabilize whenever you are dying at the start of Your Turn. In addition, whenever you roll a Hit Die to regain Hit Points, double the number of Hit Points it restores. When you are reduced to 0 Hit Points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a Long Rest.
        </p>
        <p>
          Excalibur and its Scabbard
        </p>
        <p>
          In addition the the bonuses from Excalibur and Excalibur’s Scabbard, you gain:
          Resistance to Piercing and Slashing damage.
          You do not bleed, however your hit points can be reduced as normal.
          Attacks made with Excalibur ignore all resistances and immunities.
        </p>
        <p>
          Light of 30 Torches.
          As an action, you can expend 1 charge to cause the blade to give off the brilliant light of 30 torches, shedding bright light in a 150-foot radius and dim light for an additional 150 feet. When a creature enters the bright lit area for the first time on a turn or starts its turn there, you can force it to make a DC 10 Constitution saving throw. On a failure, the creature is blinded until the end of their next turn. On a success, they are immune to this effect for the next 24 hours. The light lasts for 1 hour, or until you fall unconscious or dismiss it as a bonus action.
        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  EXETUS: {
    DnD5e: {
      type: 'Weapon',
      base: dnd5e_wep_longbow(false, 1),
      rarity: 'Rare',
      description: (<>
        <p>
          As a bonus action, speak a command word for following benefits
          Shield Breaker. If the Attack Roll is 13 or greater before adding Dexterity or Proficiency, it hits even if it does not exceed the target's AC.
          Hellfire. ?.
          “Always wound on a 2+”
          Lancer. ?.
          “S10 vs vehicles or d3 wounds”
        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  FAILNAUGHT: {
    DnD5e: {
      type: 'Weapon',
      base: dnd5e_wep_longbow(false, 1),
      rarity: 'Rare',
      description: (<>
        <p>
          When making an attack with this bow, instead of rolling to hit, the target must make a DC 25 Dexterity Saving Throw, taking half damage on a success

          Longbow

          Gain a bonus damage equal to your proficiency bonus

        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  FIACLA: {
    DnD5e: {
      type: 'Weapon',
      base: dnd5e_wep_greataxe(false, 1),
      rarity: 'Rare',
      description: (<>
        <p>
          Magic Weapon. You gain a +2 bonus to attack and damage rolls made with this Magic Weapon.
          Frost Brand. Fiacla functions as a Frost brand.
          When you hit with an attack using this magic sword, the target takes an extra (1d6) Cold Damage. In addition, while you hold the sword, you have resistance to fire damage.
          In freezing temperatures, the blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet.
          When you draw this weapon, you can extinguish all non-magical flames within 30 feet of you. This property can be used no more than once per hour.
        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  FRAGARACH: {
    DnD5e: {      
      type: 'Weapon',
      base: dnd5e_wep_longsword(false, 1),
      rarity: 'Rare',
      description: (<>
        <p>
        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  GAE_BUIDHE: {
    DnD5e: {
      type: 'Weapon',
      base: dnd5e_wep_spear(false, 1),
      rarity: 'Rare',
      description: (<>
        <p>
          Magic Weapon (Gáe Buidhe). You gain a +1 bonus to attack and damage rolls made with this Magic Weapon.
        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  GAE_DEARG: {
    DnD5e: {
      type: 'Weapon',
      base: dnd5e_wep_pike(false, 1),
      rarity: 'Rare',
      description: (<>
        <p>
          Magic Weapon (Gáe Dearg). You gain a +2 bonus to attack and damage rolls made with this Magic Weapon.
          Hit Points lost to this weapon’s damage can be regained only through a short or Long Rest, rather than by regeneration, magic, or any other means.
          Once per turn, when you hit a creature with an Attack using this Magic Weapon, you can wound the target. At the start of each of the wounded creature’s turns, it takes 1d4 necrotic damage for each time you’ve wounded it, and it can then make a DC 15 Constitution saving throw, Ending the Effect of all such wounds on itself on a success. Alternatively, the wounded creature, or a creature within 5 feet of it, can use an action to make a DC 15 Wisdom (Medicine) check, Ending the Effect of such wounds on it on a success.

        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  GAE_BULG: {
    DnD5e: {
      type: 'Weapon',
      base: dnd5e_wep_spear(false, 2),
      rarity: 'Rare',
      description: (<>
        <p>
          Scáthach’s Gift. To become attuned to Gae Bolg the wielder must complete special training. This requires 10 days of downtime, during which the player must travel to the wilderness and use the spear to defeat a beast of Large or greater size in single combat.
          Magic Weapon. You gain a +3 bonus to attack and damage rolls made with this Magic Weapon and deal an additional die of its Damage. In addition when you attack a creature with this weapon, you score a critical hit on a 19 or 20.
          You must not be wearing armour to use these additional powers.
          Gáe Bulg. When thrown, Gáe Bulg deals an additional (2d6) points of damage and impales its victim. The target must succeed on a DC 20 Strength saving throw or become immobile as the spear roots them to the ground. Immobile foes cannot take the move action. If they take any other actions, they must succeed on a DC 20 Constitution saving throw or take an additional (2d6) points of damage from the weapon’s barbs as the spines twist and tear their internal organs. To remove the weapon, the target must succeed on a DC 20 Constitution saving throw, and takes damage as though they had been hit. On a failure, they remain immobile.
          Scáthach’s Blessing. The wielder of Gáe Bulg gains proficiency in Acrobatics and Athletics, or doubles their bonus with these skills if they are already proficient.

        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  GRAM: {
    DnD5e: {
      type: 'Weapon',
      base: dnd5e_wep_longsword(false, 1),
      rarity: 'Rare',
      description: (<>
        <p>
          Dragonslayer. When you hit a dragon with this weapon, the dragon takes an extra 3d6 damage. For the purpose of this weapon, "dragon" refers to any creature with the dragon type, including dragon turtles and wyverns.

        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  LUIN: {
    DnD5e: {
      type: 'Weapon',
      base: dnd5e_wep_longsword(false, 1),
      rarity: 'Rare',
      description: (<>
        <p>
          Magic Weapon. You gain a +2 bonus to attack and damage rolls made with this Magic Weapon.
        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  ODYSSEUS_BOW: {
    DnD5e: {
      type: 'Weapon',
      base: dnd5e_wep_longbow(false, 1),
      rarity: 'Rare',
      description: (<>
        <p>
          Magic Weapon.
          You gain a +1 bonus to attack and damage rolls made with this Magic Weapon.
          Mighty.
          Odysseus’ Bow can only be used by those with 17 or higher strength, adding both the user's strength and dexterity modifiers to its damage rolls. Additionally it deals double damage to inanimate objects.

        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
}
const magicArmour = {
  BLACK_PLATE: {
    DnD5e: {
      type: 'Armour',
      base: dnd5e_arm_halfPlate(false),
      rarity: 'Rare',
      description: (<>
        <p>
          Random Properties.
          The Black Plate has the following random properties:
          1 minor beneficial property
          1 major beneficial property
          1 minor detrimental property
          1 major detrimental property
        </p>
        <p>
          Evil Resistance.
          The suit of armour grants resistance to Necrotic damage while worn.
        </p>
        <p>
          Berserker’s Frenzy.
          As an action, the wearer of the Black Plate can speak its command word. Upon doing so the wearer gains +1 to all Strength checks, -1 to all Wisdom checks, +3 AC, +5 to Melee Attack and Damage Rolls, +20 ft. of movement speed, immunity to Frightened or Charmed and Advantage on Dexterity and Constitution saves. At the start of every turn the wearer is using Berserker’s Frenzy, they must succeed on a DC 12 Wisdom Saving Throw or suffer the effects of Berserker’s Fury.
        </p>
        <p>
          Berserker’s Fury.
          On the first round of combat involving the wearer, whenever the wearer becomes frightened or whenever something that makes the wearer angry happens, they must succeed a DC 12 Wisdom saving throw or have Berserker’s Fury activate. To end the Berserker Fury effects, the wearer must use a bonus action to make a DC 19 Wisdom saving throw, kill all creatures within a 100 ft. radius of the wearer, be magically put to sleep, or die.
        </p>
        <p>
          While Berserker’s Fury is active, the wearer activates Berserker’s Frenzy as a free action, and must move toward the nearest creature, friend or foe (ignoring any creatures of size tiny) and make an attack with every opportunity. They can not speak or understand any languages, and any creatures that attempt to telepathically communicate with them must succeed a DC 14 Charisma saving throw or be frightened for 1 minute. The frightened creature may reattempt this saving throw and the end of their turn.
        </p>
        <p>
          Undying Fury.
          If the wearer's hit points fall to 0 while under the effects of Berserker’s Frenzy, they can not fall unconscious. When the wearer's negative hit points is equivalent to or greater than the wearers maximum hit point total the wearer dies immediately.
        </p>
        <p>
          Vampires gain the following benefits while wearing the Black Plate:
          <li>
            <ul>
              While wearing the Black Plate you are immune to the effects of sunlight.
            </ul>
            <ul>
              You can go for a month without needing to consume blood.
            </ul>
          </li>
        </p>
        <p>
          Destroying the Black Plate.
          The Black Plate is indestructible like most artifacts, however, it can be destroyed by being swallowed by a good-aligned solar or some of the other more powerful good entities of the upper planes.
        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
}
const achillesArmourRef = {
  ACHILLES_ARMOUR_REFORGED: {
    DnD5e: {
      description: (<>
        <p>
          <strong><em>{`   Instinctive Fear. `}</em></strong>
          While wearing any piece of this armour set, you can use an action to expend a Charge. Each creature within a 60-ft. cone must succeed on a DC 13 Wisdom Saving Throw or become Frightened of you for 1 minute. At the end of each of its turns, a creature can repeat the saving throw, Ending the Effect on itself on a success.
        </p>
        <p>
          <strong><em>{`   Cursed. `}</em></strong>
          Critical hits against you deal an additional 14 Damage of their type
        </p>
        <p>
          <strong><em>{`   Split Item. `}</em></strong>
          While you are attuned to at least 1 piece of this set, you can attune to the other pieces without using an attunement slot.  In addition if you are attuned to multiple pieces, you gain the following benefits.
          <table>
            <thead>
              <tr><th>Items Attuned</th><th>Charges</th><th>Benefits</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>1</td><td>-</td></tr>
              <tr><td>2</td><td>2</td><td>You gain a +1 bonus to your AC while you have equipped 2 pieces of this set.</td></tr>
              <tr><td>3</td><td>3</td><td>Inspire Fear now only affects creatures of your choice.</td></tr>
              <tr><td>4</td><td>5</td><td>Your bonus to AC increases to +2 while you have equipped 4 pieces of this set.</td></tr>
              <tr><td>5</td><td>8</td><td>Inspire Fear affects creatures within 60 ft. of you instead of a 60-ft. cone</td></tr>
            </tbody>
          </table>
        </p>
      </>),
      splitItem: [
        [`ACHILLES_ARMOUR_REFORGED_CORINTHIAN`, `Helmet of Achilles`],
        [`ACHILLES_ARMOUR_REFORGED_BREASTPLATE`, `Breastplate of Achilles`],
        [`ACHILLES_ARMOUR_REFORGED_WRISTGUARDS`, `Wristguards of Achilles`],
        [`ACHILLES_ARMOUR_REFORGED_GREAVES`, `Greaves of Achilles`],
        [`ACHILLES_ARMOUR_REFORGED_SHIELD`, `Shield of Achilles`],
      ]
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  ACHILLES_ARMOUR_REFORGED_CORINTHIAN: {
    DnD5e: {
      type: 'Wondrous Item',
      rarity: 'Rare',
      description: (<>
        <p>
          While wearing this helmet, the DC of Instinctive Fear increases to 17
        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  ACHILLES_ARMOUR_REFORGED_BREASTPLATE: {
    DnD5e: {
      type: 'Armour',
      base: dnd5e_arm_breastplate(false),
      rarity: 'Rare',
      description: (<>
        <p>
          While you are wearing this armour and are not incapacitated, all Bludgeoning, Piercing, and Slashing damage that you take is reduced by 5.
        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  ACHILLES_ARMOUR_REFORGED_WRISTGUARDS: {
    DnD5e: {
      type: 'Wondrous Item',
      rarity: 'Rare',
      description: (<>
        <p>
          +1 ac while not wearing heavy armour or half-plate
          While you are wearing these wristguards, the Thrown property of Spears and Javelins becomes 60/180 ft.
          weapons deal 1 extra die of damage when thrown
        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  ACHILLES_ARMOUR_REFORGED_GREAVES: {
    DnD5e: {
      type: 'Wondrous Item',
      rarity: 'Rare',
      description: (<>
        <p>
          While you are wearing these greaves you may dash as a bonus action.
          when dashing you may go an additional 10ft
        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  ACHILLES_ARMOUR_REFORGED_SHIELD: {
    DnD5e: {
      type: 'Armour',
      base: dnd5e_arm_shield(false),
      rarity: 'Rare',
      description: (<>
        <p>
          As a bonus action you can cause all attacks against you to suffer disadvantage until your next turn, this can only be done twice per day.
          You can spend an amount of movement equal to half your speed to have three-quarters cover until the start of your next turn. If you do this, then you have disadvantage on attack rolls and when you are an obstacle to a target you grant three-quarters cover instead of half cover.
        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
}
const reapersVestments = {
  REAPERS_VESTMENTS: {
    DnD5e: {
      description: (<>
        <p>
          Items Attuned Benefits
          1
          2
          3             When you are reduced to 0 Hit Points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a Long Rest.
          4             You gain the aBility to pass between the planes in a blink of an eye. When you use the Attack action, you can teleport up to 30 ft. before each attack to an unoccupied space you can see.
          If you attack at least two different creatures with the action, you can make one additional attack with it against a third creature.
          Ranger: Horizon Walker Conclave with Distant Strike can make one additional attack with it against a fourth creature after the third.
          5

        </p>
      </>),
      splitItem: [
        [`REAPERS_VESTMENTS_EVE`, `Eve`],
        [`REAPERS_VESTMENTS_TEMPORAL_BRACER`, `Temporal Bracer`],
        [`REAPERS_VESTMENTS_BLACK_RING`, `Black Ring`],
        [`UMBRA_LUST`, `Lust`],
        [`UMBRA_PRIDE`, `Pride`],
        [`UMBRA_SLOTH`, `Sloth`],
        [`UMBRA_WRATH`, `Wrath`],
      ]
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  REAPERS_VESTMENTS_EVE: {
    DnD5e: {
      description: (<>
        <p>
          You gain a +2 bonus to AC and Saving Throws while wearing Eve.
          Resistance to Bludgeoning, Piercing and Slashing damage from non-magical weapons.
          While you are wearing Eve, you stabilise whenever you are dying at the start of Your Turn. In addition, whenever you roll a Hit Die to regain Hit Points, double the number of Hit Points it restores.
          Acts as a fully usable prosthetic for lost limbs

        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  REAPERS_VESTMENTS_TEMPORAL_BRACER: {
    DnD5e: {
      description: (<>
        <p>
          Temporal Shift. You can use an action to activate the bracer and cast the teleport spell. If your intended destination is highly familiar to you (spent at least a month there), there is no chance of a mishap or arriving somewhere unexpected. You can't use this property again until 3 days have passed.

        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  REAPERS_VESTMENTS_BLACK_RING: {
    DnD5e: {
      description: (<>
        <p>
        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
}
const umbra = {
  UMBRA: {
    DnD5e: {
      description: (<div>
        <p>
          <strong><em>{`   Magic Weapon. `}</em></strong>
          You gain a +2 bonus to attack and damage rolls made with this Magic Weapon, which deals Psychic Damage instead of Slashing Damage. In addition, the Sword of Shadows ignores Immunity to Psychic Damage, treating it as Resistance instead.
        </p>
        <p>
          <strong><em>{`   Ethereal Blade. `}</em></strong>
        </p>
        <p>
          <strong><em>Cursed. </em></strong>
        </p>
        <strong><em>Split Weapon. </em></strong>
        While you are attuned to at least 1 piece of this set, you can attune to the other pieces without using an attunement slot.
        <table>
          <thead>
            <tr><th>Items Attuned</th><th>Benefits</th></tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Melee Weapon attacks deal an additional die of their damage</td></tr>
            <tr><td>2</td><td>-</td></tr>
            <tr><td>3</td><td>Magic Weapon becomes +3 bonus</td></tr><tr><td>4</td><td>-</td></tr>
            <tr><td>5</td><td>Melee Weapon attacks deal two additional die of their damage</td></tr>
            <tr><td>6</td><td>-</td></tr>
            <tr><td>7</td><td>Melee Weapon attacks deal three additional die of their damage</td></tr>
          </tbody>
        </table>
      </div>),
      splitItem: [
        [`UMBRA_ENVY`, `Envy`],
        [`UMBRA_GLUTTONY`, `Gluttony`],
        [`UMBRA_GREED`, `Greed`],
        [`UMBRA_LUST`, `Lust`],
        [`UMBRA_PRIDE`, `Pride`],
        [`UMBRA_SLOTH`, `Sloth`],
        [`UMBRA_WRATH`, `Wrath`],
      ]
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  UMBRA_ENVY: {
    DnD5e: {
      type: `Wondrous Item`,
      rarity: `Rare`,
      description: (<>
        <p>
          Shrouded by Shadow. You cloak yourself in shadow, Wisdom (Perception) checks made to see you have disadvantage, and you have advantage on Dexterity (Stealth) checks made to hide, as the shadows shift to camouflage you. Cloaking or uncloaking yourself in shadows requires an action.
        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  UMBRA_GLUTTONY: {
    DnD5e: {
      type: `Wondrous Item`,
      rarity: `Rare`,
      description: (<>
        <p>
          functions as a sword of life stealing, additionally
          Once per turn when you kill one or more creatures with Umbra, you regain hit points equal to three times Umbras current strength. You don't gain this benefit for killing constructs or undead.
        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  UMBRA_GREED: {
    DnD5e: {
      description: (<>
        <p>
        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  UMBRA_LUST: {
    DnD5e: {
      description: (<>
        <p>
          You can use an action to cast charm person (save DC 13) with no maximum duration (A creature that passes its save against Umbral Lust's Charm Person automatically passes its saves against this ability for the next 24 hours). As long as you maintain concentration on the spell, you can use a bonus action to send a telepathic message to a creature you are focused on. It can reply--using a bonus action to do so--while your focus on it continues.
          While focusing on a creature with charm person, you can use an action to cast the suggestion spell (save DC 13) on that creature. Once used, the suggestion property can't be used again until the next dawn.
          Umbra Strength  DC    Simultaneous Targets  Suggestion Charges
          1 	            13    1                     1
          3 	            15    2                     2
          5 	            17    3                     3
          7 	            19    4                     4

        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  UMBRA_PRIDE: {
    DnD5e: {
      type: `Wondrous Item`,
      rarity: `Rare`,
      description: (<>
        <p>
          You can use an action to call forth your servants. In response, shadows subservient to umbra appear within 60 feet of you. They return to Umbra after 1 hour or when they drop to 0 hit points. Once you call your retinue, it can't be repeated again until 7 days have passed.
          The current strength of Umbra determines how many shadows answer its summons.
          1 	    1d4 + 1
          2 	    2d4 + 2
          3 	    3d4 + 3
          4 	    4d4 + 4
          5 	    5d4 + 5
          6 	    6d4 + 6
          7 	    7d4 + 7

          When 1 hour has passed, you can prevent a number of shadows equal to your proficiency bonus + charisma bonus from returning to umbra, they will follow your instructions until you next call forth your servants, where they and any shadows they create will return to umbra after 1 hour
        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  UMBRA_SLOTH: {
    DnD5e: {
      description: (<>
        <p>
        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  UMBRA_WRATH: {
    DnD5e: {
      description: (<>
        <p>
        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
}
const splitMagicItems = {
  ...achillesArmourRef,
  ...reapersVestments,
  ...umbra,
}
export const magicItemTraits = {
  ...magicBanners,
  ...magicArmour,
  ...magicWeapons,
  ...splitMagicItems,

  BODHMALLS_LILY: {
    DnD5e: {
      description: (<>
        <p>Fionn went to the Land of Promise to ask his old nurse Bodhmall to kill Diarmuid. Diarmuid was hunting in the forest beside the river Boyne and Bodhmall flew through the air on a flying water-lily.
          Carpet of Flying. Bodhmall’s Lily functions as a Carpet of Flying, however it has a maximum height of 20 ft. off the ground
          You can speak the carpet's command word as an action to make the carpet hover and fly. It moves according to your spoken directions, provided that you are within 30 feet of it.
          Size. 3 ft. x 5 ft.
          Capacity. 200 lb.
          Flying Speed. 80 ft.
          A carpet can carry up to twice the weight shown on the table, but it flies at half speed if it carries more than its normal capacity.
        </p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  DRAGONSTONE: {
    DnD5e: {
      variants: {
        Dragonstone: (<>
          <p>A radiant gem taken from a Dragons thorax, and the source of their iconic breath attacks. The gem shares its colour with the species of dragon it was taken from and when observed seems to be filled with a swirling maelstrom of that dragon's element.
            *Type* Resistance. You have resistance to *Type* damage while you are holding this gem in your hand.
            The Dragonstone has ** charges. While holding it, you can use an action to expend 1 or more of its charges to channel a Dragon’s breath weapon attack.
            Each creature within their area must make a DC ** Dexterity saving throw, taking (3d4) *Type* Damage per charge used on a failed save, or half as much damage on a successful one.
            Charges Used  Area of Effect
            1-3           10 ft. cone
            4-5           15 ft. cone
            6-7           30 ft. cone
            The Dragonstone regains 2d6 + 4 expended charges daily at dawn. If you expend the Dragonstone‘s last charge, roll a d20. On a 1, the Dragonstone crumbles into ashes and is destroyed.
            **Type*. This refers to the damage type dealt by the Dragon the Dragonstone was taken from, e.g: Red Dragon = Fire.  The GM chooses the gem's type or determines it randomly.
            ** Three types of Dragonstone are known to exist, each depending on the age of the Dragon it was taken from. The Dragonstone’s type determines the Saving Throw DC for the breath weapon attack, as well as the number of charges and how many charges it regains daily at dawn. The GM chooses the horn's type or determines it randomly.
            Rarity  Dragonstone Type  Saving Throw DC Charges Max Charges Per Use
            Uncommon  Young Dragonstone 14  3 1
            Rare  Adult Dragonstone 15  6 2
            Very Rare Ancient Dragonstone 16  9 3
            Crafting (Arcana):
            Rarity    Material
            Uncommon  Young Dragon Stone
            Rare      Adult Dragon Stone
            Very Rare Ancient Dragon Stone
          </p>
        </>),
        HighDragonstone: (<>
          <p>A radiant gem taken from a High Dragons thorax, and the source of their iconic breath attacks. The gem shares its colour with the species of dragon it was taken from and when observed seems to be filled with a swirling maelstrom of that dragon's element.
            *Type* Resistance. You have resistance to *Type* damage while you are holding this gem in your hand.
            The Dragonstone has ** charges. While holding it, you can use an action to expend 1 or more of its charges to channel a Dragon’s breath weapon attack.
            Each creature within their area must make a DC ** Dexterity saving throw, taking (3d4) *Type* Damage per charge used on a failed save, or half as much damage on a successful one.
            Charges Used  Area of Effect
            1-3           10 ft. cone
            4-5           15 ft. cone
            6-7           30 ft. cone
            The Dragonstone regains 2d6 + 4 expended charges daily at dawn. If you expend the Dragonstone‘s last charge, roll a d20. On a 1, the Dragonstone crumbles into ashes and is destroyed.
            **Type*. This refers to the damage type dealt by the Dragon the Dragonstone was taken from, e.g: Red Dragon = Fire.  The GM chooses the gem's type or determines it randomly.
            ** Three types of Dragonstone are known to exist, each depending on the age of the Dragon it was taken from. The Dragonstone’s type determines the Saving Throw DC for the breath weapon attack, as well as the number of charges and how many charges it regains daily at dawn. The GM chooses the horn's type or determines it randomly.
            Rarity  Dragonstone Type  Saving Throw DC Charges Max Charges Per Use
            Rare
            Young High Dragonstone
            15
            6
            2
            Very Rare
            Adult High Dragonstone
            16
            9
            3
            Legendary
            Ancient High Dragonstone
            17
            12
            4
            Crafting (Arcana):
            Rarity
            Material
            Rare
            Young High Dragon Stone
            Very Rare
            Adult High Dragon Stone
            Legendary
            Ancient High Dragon Stone
          </p>
        </>),
      },
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  ELVEN_AMULET: {
    DnD5e: {
      variants: [
        [`ELVEN_AMULET_ALDER`, `Alder`],
        [`ELVEN_AMULET_DROW`, `Drow`],
        [`ELVEN_AMULET_SYLVAN`, `Sylvan`],
      ]
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  ELVEN_AMULET_ALDER: {
    DnD5e: {
      description: (<>
        <p>
          While you are in a forest you gain the following benefits
          Gain a + 4 bonus on initiative checks.
          Permanently gain the benefits of Half Cover.
          Advantage on Stealth Checks.
        </p >
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  ELVEN_AMULET_DROW: {
    DnD5e: {
      description: (<>
        <p>
          While you are not in direct sunlight, you gain the following benefits
          Gain a +4 bonus on initiative checks.
          Darkvision 120ft.
        </p >
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  ELVEN_AMULET_SYLVAN: {
    DnD5e: {
      description: (<>
        <p>
          While you are in a forest you gain the following benefits
          Gain a + 4 bonus on initiative checks.
          Permanently gain the benefits of Half Cover.
          Advantage on Stealth Checks.
        </p >
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  MORRIGANS_BAND: {
    DnD5e: {
      description: (<>
        <p>
          <strong>Fate Dice.</strong>
          The band stores a number of ‘fate dice’ equal to the number of feathers attached to it. Each fate dice is a number from 1 - 20 that can be used to change fate. When the band is found, the GM chooses the band’s current dice or determines it randomly.
        </p>
        <p>
          <strong>Change Fate.</strong>
          You can replace any Attack roll, Saving Throw, or Ability Check made by you or a creature that you can see with one of your fate dice. You must choose to do so after the roll, but before the outcome is determined. You change the ‘fate dice’ you have stord to the dice roll it has just replaced. You may only use this feature once per long rest.
        </p>
        <table>
          <tr><th>Rarity</th><th>Feathers</th></tr>
          <tr><td>Rare</td><td>1</td></tr>
          <tr><td>Very Rare</td><td>2</td></tr>
          <tr><td>Legendary</td><td>3</td></tr>
        </table>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
  STYX_FLASK: {
    DnD5e: {
      description: (<>
        <p>The flash has 8 charges. While it is on your person, you can use a bonus action to drink from the flask of the Styx, using 1 or more of its charges. When drinking from the flask, make a Constitution saving throw at the corresponding DC, regaining the associated hit points on a successful save, or gaining 2 points of Exhaustion on a failed save</p>
        <table>
          <tr><th>Charges</th><th>DC</th><th>Healing</th></tr>
          <tr><td>1</td><td>13</td><td>4d8 + 4</td></tr>
          <tr><td>2</td><td>15</td><td>8d8 + 8</td></tr>
          <tr><td>3</td><td>17</td><td>10d8 + 20</td></tr>
        </table>
        <p>If a creature attempts to drink from the flask more than once per long rest, it immediately fails the Constitution Saving Throw.</p>
        <p>Daily at dawn, the flask regains 1d4-1 expended charges. If you expend the flask's last charge, roll a d6. On a 1, the flask loses its magic and becomes just a normal flask.</p>
      </>),
    },
    WFRP4e: (<>
      <p>
      </p>
    </>),
  },
}