function DnD5eCreatureArmourClass(creatureProp: any) {
  const creature = creatureProp;

  const equipment =
    creature.items.filter(
      (item: any) => item.type === `equipment` && item.system.equipped === true
    ) || ``;
  const wornArmour =
    equipment.filter(
      (item: any) =>
        item.system.type.value === `light` ||
        item.system.type.value === `medium` ||
        item.system.type.value === `heavy` ||
        item.system.type.value === `natural`
    )[0] || ``;
  const wornShield =
    equipment.filter((item: any) => item.system.type.value === `shield`)[0] ||
    ``;

  const statMods = {
    dex: Math.trunc((creature.system.abilities.dex.value - 10) / 2),
    con: Math.trunc((creature.system.abilities.con.value - 10) / 2),
    wis: Math.trunc((creature.system.abilities.wis.value - 10) / 2),
  };

  const acType = creature.system.attributes.ac.calc;

  const armouredAc = () => {
    if (wornArmour) {
      return wornArmour.system.type.value === `heavy`
        ? 0
        : wornArmour.system.type.value === `light`
          ? statMods.dex
          : wornArmour.system.type.value === `medium` &&
              statMods.dex <= wornArmour.system.armor.value
            ? statMods.dex
            : wornArmour.system.armor.value;
    } else {
      return 10;
    }
  };

  const baseAc =
    (acType === `natural` || acType === `flat`
      ? creature.system.attributes.ac.flat
      : acType === `mage` || acType === `draconic`
        ? 13 + statMods.dex
        : acType === `unarmoredBarbarian`
          ? 10 + statMods.con + statMods.dex
          : acType === `unarmoredMonk`
            ? 10 + statMods.wis + statMods.dex
            : acType === `default` && wornArmour
              ? wornArmour.system.armor.value + armouredAc()
              : 10 + statMods.dex) || 10;

  const bonusAc = 0;

  const armourText = () => {
    if (
      (acType !== `flat` && acType !== `default`) ||
      wornArmour ||
      wornShield
    ) {
      const armour =
        acType === `default` && wornArmour
          ? wornArmour.name
          : acType === `draconic`
            ? `Draconic Resilience`
            : acType === `mage`
              ? `Mage Armour`
              : acType === `natural`
                ? `Natural Armour`
                : acType === `unarmoredBarbarian` || acType === `unarmoredMonk`
                  ? `Unarmoured Defence`
                  : ``;

      return armour && wornShield
        ? ` (${armour}, ${wornShield.name})`
        : !armour && wornShield
          ? ` (${wornShield.name})`
          : armour
            ? ` (${armour})`
            : ``;
    }
  };
  return `${baseAc + bonusAc}${wornShield && `/${wornShield.system.armor.value + baseAc + bonusAc} `} ${armourText()}`;
}

export default DnD5eCreatureArmourClass;
