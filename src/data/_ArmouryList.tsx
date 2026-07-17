import { detailBuilder } from "../utils/builders"
import { internalLink } from "../utils/common"
import { ARMOURY_Core, CHARACTER_Core } from "./__DATA_Core"
import { wepEffect_wreathedInShadows } from "./_WFRP4e/Effects/wep_effects"
import { wep_sword } from "./_WFRP4e/Items/wep_sword"

function armouryInfoBasic(alias: any, type: any, rarity: any) {
    return ({
        "basic": {
            'title': 'Basic',
            'values': {
                'alias': {
                    'title': 'Alias',
                    'value': alias,
                },
                "type": {
                    'title': 'Type',
                    'value': type,
                },
                'rarity': {
                    'title': 'Rarity',
                    'value': rarity,
                },
            },
        }
    })
}

function armouryInfoHistorical(creator: any, owner: any) {
    return ({
        "historical": {
            'title': 'Historical',
            'values': {
                'creator': {
                    'title': 'Creator',
                    'value': creator,
                },
                "owner": {
                    'title': 'Owner',
                    'value': owner,
                },
            },
        },
    })
}

export const ARMOURY_Info = {
    "CALADBOLG": {
        ...armouryInfoBasic(['Caladbolg', 'Caladcholg'], detailBuilder('Weapon', 'Greatsword'), 'Unique'),
        ...armouryInfoHistorical('Unknown', detailBuilder('Fergus mac Róich', 'Formerly')),

    },
    "EXCALIBUR": {
        ...armouryInfoBasic([], detailBuilder('Weapon', 'Shortsword, Longsword or Greatsword'), 'Unique'),
        ...armouryInfoHistorical('Unknown', [detailBuilder('Lady of the Lake', 'Formerly'), detailBuilder(CHARACTER_Core.BALOR, 'Formerly'), detailBuilder(CHARACTER_Core.ARTHUR_PENDRAGON, 'Formerly')]),

    },
    'SHARD': {
        ...armouryInfoBasic(['Shard', 'The Black-fire Blade', 'The Obsidian Blade'], detailBuilder('Weapon', 'Longsword'), 'Unique'),
        ...armouryInfoHistorical(detailBuilder(CHARACTER_Core.ARLYSS_KNIGHT, 'Formerly'), [
            detailBuilder(CHARACTER_Core.ARLYSS_KNIGHT, 'Formerly'),
            detailBuilder(CHARACTER_Core.REAPER, 'Formerly'),
            'Eve'
        ],),
    },
}

export const ARMOURY_ContentsSummary = {
    'EXCALIBUR': <div>
        <p>
            “Long ago, a Human King Arthur, led his country in a grand defence against conquering invaders.To help him in his fight, a powerful celestial named "The Lady of the Lake", granted him the mighty blade Excalibur.With this blade Arthur successfully repelled the invaders and saved his country.
        </p>
        <p>
            This new peace did not last long however, King Arthur's finest knight, Lancelot, stole his queen and fled. Arthur immediately began pursuit, but before he left, he left his son, Mordred, in charge of his kingdom while he was away. Arthur succeeded in capturing Lancelot, but soon received the news he dreaded worse. Mordred, in Arthur's absence, had declared himself king.
        </p>
        <p>
            A battle raged on all day, and by nightfall, it was down to every last man to fight.In the commotion, Arthur had dropped Excalibur and its scabbard.Seeing Mordred, he picked up a spear, and charged at him.Mordred charged back with his sword.The sword came forward and cleaved Arthur's skull just as he drove his spear through his son's hateful heart
        </p>
        <p>
            As Arthur lay dying, his last request was that the sword Excalibur and the scabbard be thrown back into the lake from whence they came.Out of the mists of the lake, three Fairy Queens appeared.They placed Arthur's body on a barge, and sailed off with him to the mystical island of Avalon to cure him of his wounds. And some say he still lays there, sleeping in a hollow hill, and that he will awaken one day to defend his country, when it has need of him most.”
            -?
        </p>
    </div>,
    'ALDER_BLADE': <div>

    </div>,
    'SHARD': <div>
        <p>
            A longsword of mysterious origin, masterfully crafted by unknown means from a metal that has never been seen before. Its surface possesses a line of runes along its fuller that mark its name as ‘Shard’. The sword strongly resembles the blade carried by the elusive ‘{internalLink('Reaper', CHARACTER_Core.REAPER)}’ and is molten to the touch of any it has yet to find ‘worthy’.
        </p>
        <p>
            Shard is a Longsword, crafted by an {internalLink('ancient warrior', CHARACTER_Core.ARLYSS_KNIGHT)} from their own blood and the magically infused bones of the {internalLink('primordial dragon', CHARACTER_Core.ZYZ)}. It was rarely used but tales of its accomplishments on the battlefield have been almost entirely regarded as hyperbole or exaggeration, as there is no way it could be as devastating as the legends claim. Though its {internalLink('creator', CHARACTER_Core.ARLYSS_KNIGHT)} and its {internalLink('wielder', CHARACTER_Core.REAPER)} are both gone, their legends are still well known and it is sought after by both scholars and warriors alike.
        </p>
        <p>
            Shard radiates power on an incredible scale but few have managed to wield it, most being consumed by its contained inferno or discarding it in fear.
        </p>
    </div>,
    'CALADBOLG': <div>
        <p>
            Caladbolg is the sword of Fergus mac Róich from the Ulster Cycle of Irish mythology. Spelled Caladcholg, it is also associated with the more obscure Ulster hero Fergus mac Léti, suggesting a conflation of two legends. It was said to be a two-handed sword that made a circle like an arc of rainbow when swung, and to have the power to slice the tops off hills and slaughter an entire army.
        </p>
        <p>
            During the events of the Táin Bó Cúailnge, Ailill mac Máta takes Caladbolg away from Fergus mac Róich when he discovers Fergus' affair with his wife Medb. He gives it back when the Ulaid rally against his armies. Fergus wreaks havoc against Ulster's forces with his blade, but Conall Cernach convinces him not to kill Conchobar mac Nessa. Fergus strikes the "Three Great Strokes" on three small hills instead, blasting off their tops.
        </p>
    </div>,
}

function ArmouryDnD5eBuilder(key: string, base: any, mechanics: any) {
    let magicItem = base
    magicItem.name = ARMOURY_Core[key].name
    magicItem.system.description.value = ARMOURY_ContentsSummary[key]
    magicItem.system.gmdescription.value = mechanics
    return ({
        'WFRP4e': magicItem
    })
}

const ARMOURY_DnD5e = {
    'EXCALIBUR': ArmouryDnD5eBuilder('EXCALIBUR', wep_sword(false), <>
        <p>
            Properties
            Gift of The Lady of The Lake. Excalibur can only be attuned by the being it is gifted to by the Lady of The Lake and by those who the wielder allows to use it.
            Magic Weapon. You gain a +3 bonus to attack and damage rolls made with this Magic Weapon and deal an additional die of its Damage. Additionally, you may make a Ranged Weapon Attack using your Charisma with a normal range of 20 feet and a long range of 60 feet. When you hit with a Ranged Attack using this weapon, it deals (1d8) Radiant Damage or, if the target is a Fiend or Undead, (2d8) Radiant Damage.
            Random Properties. Excalibur has the following randomly determined properties:
            2 minor beneficial properties
            1 major beneficial property
            2 minor detrimental properties
            Sword of Sharpness. Excalibur functions as a Sword of Sharpness.
            When you Attack an object with this magic sword and hit, maximize your weapon damage dice against the target.
            When you Attack a creature with this weapon and roll a 20 on the Attack roll, that target takes an extra 4d6 slashing damage. Then roll another d20. If you roll a 20, you lop off one of the target’s limbs, with the effect of such loss determined by the GM. If the creature has no limb to sever, you lop off a portion of its body instead.
            In addition, you can speak the sword’s Command word to cause the blade to shed bright light in a 10-foot radius and dim light for an additional 10 feet. Speaking the Command Word again or sheathing the sword puts out the light.


            Basic Information
            Other Names


            Type
            Weapon (Shortsword, Longsword or Greatsword)
            Rarity
            Artifact
            Attunement
            Yes
            Effects


            Historical Information
            Creator
            Unknown
            Owner


            Lady of the Lake (formerly)
            Arthur



            Blessings of Danu. While attuned to Excalibur, you gain the following benefits:
            Your Charisma score changes to 23. If your Charisma is already equal to or greater than this score, this ability has no effect on you.
            You have Advantage on Charisma (Persuasion) checks made to interact with Good creatures.
            While attuned to Excalibur, the divine magic of the sword causes you to age more slowly. For every 10 years that pass, your body ages only 1 year.
            Holy Weapon. When you first draw Excalibur at the start of combat, you may speak the sword's name to cast Holy Weapon (DC 17) upon it as a free action. Once this ability is used it cannot be used again until the next dawn.
            Radiant Sword of the King. As an action, you, and all allies within a 30 foot radius centered on you, gain 20 temporary hit points and a 1d8 Combat Inspiration, as per the Valor Bard's Combat inspiration ability, to be used in the next 10 minutes. Once this ability is used it cannot be used again until a day the next dawn.

            Excalibur’s Scabbard
            Restoration. While you wear the scabbard, you stabilize whenever you are dying at the start of Your Turn. In addition, whenever you roll a Hit Die to regain Hit Points, double the number of Hit Points it restores.
            When you are reduced to 0 Hit Points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a Long Rest.
            Excalibur and its Scabbard
            In addition the the bonuses from Excalibur and Excalibur’s Scabbard, you gain:
            Resistance to Piercing and Slashing damage.
            You do not bleed, however your hit points can be reduced as normal.
            Attacks made with Excalibur ignore all resistances and immunities.
            Light of 30 Torches. As an action, you can expend 1 charge to cause the blade to give off the brilliant light of 30 torches, shedding bright light in a 150-foot radius and dim light for an additional 150 feet. When a creature enters the bright lit area for the first time on a turn or starts its turn there, you can force it to make a DC 10 Constitution saving throw. On a failure, the creature is blinded until the end of their next turn. On a success, they are immune to this effect for the next 24 hours. The light lasts for 1 hour, or until you fall unconscious or dismiss it as a bonus action.
        </p>
    </>),
    'SHARD': ArmouryWFRP4eBuilder('SHARD', wep_sword(false),
        <>
            <p>
                <strong>Boon</strong>: +10 to Melee (Basic), first melee attack each turn triggers deathblow
            </p>
            <p>
                <strong>Description</strong>: This ...
            </p>
        </>
    ),
}

function ArmouryWFRP4eBuilder(key: string, base: any, mechanics: any, effects?: any) {
    let magicItem = base
    magicItem.name = ARMOURY_Core[key].name
    magicItem.system.description.value = ARMOURY_ContentsSummary[key]
    magicItem.system.gmdescription.value = mechanics
    magicItem.effects = effects
    return ({
        'WFRP4e': magicItem
    })
}

const ARMOURY_WFRP4e = {
    'ALDER_BLADE': ArmouryWFRP4eBuilder('ALDER_BLADE', wep_sword(false), <>
        <p>
            <strong>Boon</strong>: +10 to Melee (Basic), first melee attack each turn triggers deathblow, +10 Language (Magick) when casting any spell
        </p>
        <p>
            <strong>Description</strong>: This ...
        </p>
    </>),
    'SHARD': ArmouryWFRP4eBuilder('SHARD', wep_sword(false), <>
        <p>
            <strong>Boon</strong>: +30 to Melee (Basic), +4 damage, first melee attack each turn triggers deathblow, any target hit does not beenfit from non=magical armour, language(magick) +20 to generate 8 yeards of light, creatures struck by shard cannot benefit from regeneration until a full day has passed, +30 Language (Magick) when casting any spell, spells of Aqshy gain an additional +1 SL
        </p>
        <p>
            <strong>Bane</strong>: Gain the Ablaze condition
        </p>
        <p>
            <strong>Trigger</strong>: Failed Willpower Test at start of turn (if you are already ablaze this does not trigger)
        </p>
        <p>
            <strong>Description</strong>: This ...
        </p>
    </>,
        [
            wepEffect_wreathedInShadows,
        ]),
}

function itemBuilder(name: string) {
    return ({
        ...ARMOURY_Core[name],
        "info": {
            ...ARMOURY_Info[name],
        },
        "summary": ARMOURY_ContentsSummary[name],
        ...ARMOURY_WFRP4e[name],
    })
}

export const ArmouryList = []

export const ArmouryListMagic = Object.keys(ARMOURY_Core).filter(i => (ARMOURY_Core[i].tags.some((e: any) => 'Magical' == e))).map(item => {
    return itemBuilder(item)
})