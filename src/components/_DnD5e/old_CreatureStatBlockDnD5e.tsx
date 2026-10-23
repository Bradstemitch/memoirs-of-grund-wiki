import React from 'react';
import DnD5eAttributeTable from './DnD5eAttributeTable';
import DnD5eCreatureArmourClass from './DnD5eCreatureArmourClass';

function CreatureStatBlockDnD5e(props: any) {
  const creature = props.creature.DnD5e;
  const CRXP = {
    0: `0 or 10`,
    '1/8': `35`,
    '1/4': `30`,
    '1/2': `100`,
    1: `200`,
    2: `450`,
    3: `700`,
    4: `1,100`,
    5: `1,800`,
    6: `2,300`,
    7: `2,900`,
    8: `3,900`,
    9: `5,000`,
    10: `5,900`,
    11: `7,200`,
    12: `8,400`,
    13: `10,000`,
    14: `11,500`,
    15: `13,000`,
    16: `15,000`,
    17: `18,000`,
    18: `20,000`,
    19: `22,000`,
    20: `25,000`,
    21: `33,000`,
    22: `41,000`,
    23: `50,000`,
    24: `62,000`,
    25: `75,000`,
    26: `90,000`,
    27: `105,000`,
    28: `120,000`,
    29: `135,000`,
    30: `155,000`,
  };

  const stats = {
    str: creature.system.abilities.str.value,
    strMod: Math.trunc((creature.system.abilities.str.value - 10) / 2),
    dex: creature.system.abilities.dex.value,
    dexMod: Math.trunc((creature.system.abilities.dex.value - 10) / 2),
    con: creature.system.abilities.con.value,
    conMod: Math.trunc((creature.system.abilities.con.value - 10) / 2),
    int: creature.system.abilities.int.value,
    intMod: Math.trunc((creature.system.abilities.int.value - 10) / 2),
    wis: creature.system.abilities.wis.value,
    wisMod: Math.trunc((creature.system.abilities.wis.value - 10) / 2),
    cha: creature.system.abilities.cha.value,
    chaMod: Math.trunc((creature.system.abilities.cha.value - 10) / 2),
  };
  const profBonus =
    creature.system.details.cr < 5
      ? 2
      : creature.system.details.cr < 9
        ? 3
        : creature.system.details.cr < 13
          ? 4
          : creature.system.details.cr < 17
            ? 5
            : creature.system.details.cr < 21
              ? 6
              : creature.system.details.cr < 25
                ? 7
                : creature.system.details.cr < 29
                  ? 8
                  : 9;

  function cleanFoundryVariablesName(s: string) {
    s = s.replace(`[[lookup @name lowercase]]`, creature.name);
    return s;
  }

  return (
    <div style={{ background: `beige`, color: `darkRed`, padding: `10px` }}>
      <strong>{creature.name}</strong>
      <div>
        <em style={{ color: `black` }}>
          {creature.system.traits.size === `med` && `Medium`}
          {` ${creature.system.details.type.value}${creature.system.details.type.subtype && ` (${creature.system.details.type.subtype})`}, ${creature.system.details.alignment}`}
          {creature.system.details.alignment.toLowerCase().includes(`any`) &&
            !creature.system.details.alignment
              .toLowerCase()
              .includes(`alignment`) &&
            ` Alignment`}
        </em>
      </div>
      <hr />
      <DnD5eCreatureArmourClass creature={creature} />
      <div>
        <strong>Hit Points </strong>
        {`${creature.system.attributes.hp.value} (${creature.system.attributes.hp.formula})`}
      </div>

      <div>
        <strong>Speed </strong>
        {`${creature.system.attributes.movement.walk}ft.`}
        {creature.system.attributes.movement.burrow &&
          `,burrow ${creature.system.attributes.movement.burrow}ft.`}
        {creature.system.attributes.movement.climb &&
          `,climb ${creature.system.attributes.movement.climb}ft.`}
        {creature.system.attributes.movement.fly &&
          `,fly ${creature.system.attributes.movement.fly}ft.`}
        {creature.system.attributes.movement.hover && `(hover)`}
        {creature.system.attributes.movement.swim &&
          `,swim ${creature.system.attributes.movement.swim}ft.`}
      </div>

      <hr />
      <DnD5eAttributeTable characteristics={stats} />
      <hr />
      <div>
        <strong>Senses </strong>
        {`Passive Perception ${10 + (creature.system.skills.prc.value === 1 ? profBonus : 0)}`}
      </div>
      <div>
        <strong>Languages </strong>
        {creature.system.traits.languages.value.map((language: string) => {
          return <>{`${language}, `}</>;
        })}
      </div>
      <div>
        <strong>Challenge </strong>
        {`${creature.system.details.cr} (${CRXP[creature.system.details.cr]} XP) `}
        <strong>Proficiency Bonus </strong>+{profBonus}
      </div>
      <hr />
      <strong>Actions</strong>
      {creature.items
        .filter((item: any) => item.name === `Multiattack`)
        .map((item: any) => {
          return (
            <div
              key={
                item.name + `-creatureStatBlockDnD5e-` + creature.name + `-div`
              }
            >
              <span
                key={
                  item.name +
                  `-creatureStatBlockDnD5e-` +
                  creature.name +
                  `-span`
                }
              >
                <strong
                  key={
                    item.name +
                    `-creatureStatBlockDnD5e-` +
                    creature.name +
                    `-strong`
                  }
                >
                  {item.name}.{` `}
                </strong>
                {cleanFoundryVariablesName(
                  item.system.description.value.slice(
                    3,
                    item.system.description.value.length - 4
                  )
                )}
              </span>
            </div>
          );
        })}

      {creature.items
        .filter((item: any) => item.type === `weapon`)
        .map((item: any) => {
          return (
            <div
              key={
                item.name + `-creatureStatBlockDnD5e-` + creature.name + `-div`
              }
            >
              <strong
                key={
                  item.name +
                  `-creatureStatBlockDnD5e-` +
                  creature.name +
                  `-strong`
                }
              >
                {`${item.name}. `}
              </strong>
              <em
                key={
                  item.name + `-creatureStatBlockDnD5e-` + creature.name + `-em`
                }
              >
                {item.system.actionType === `mwak` && `Melee Weapon Attack: `}
              </em>
              {`${profBonus + (!item.system.properties.includes(`flex`) || stats.strMod > stats.dexMod ? stats.strMod : stats.dexMod) >= 0 && `+`}`}
              {`${profBonus + (!item.system.properties.includes(`flex`) || stats.strMod > stats.dexMod ? stats.strMod : stats.dexMod)} to hit`}
              {`, reach 5ft., one target. `}
              <em
                key={
                  item.name +
                  `-creatureStatBlockDnD5e-` +
                  creature.name +
                  `-em2`
                }
              >
                Hit:
              </em>
              {`${item.system.damage.parts[0][0]} ${item.system.damage.parts[0][1]}`}
              {item.system.properties.includes(`ver`) &&
                item.system.damage.versatile}
            </div>
          );
        })}

      {/* <DnD5eSkillList
                skills={creature.items.filter((item:any) => item.type === "skill")}
                characteristics={creature.system.characteristics}
                />
                <DnD5eWeaponList
                weapons={creature.items.filter((item:any) => item.type === "weapon")}
                />
                <DnD5eArmourList
                armour={creature.items.filter((item:any) => item.type === "armour")}
                /> */}
    </div>
  );
}

export default CreatureStatBlockDnD5e;
