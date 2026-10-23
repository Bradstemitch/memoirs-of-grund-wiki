import DnD5eCreatureArmourClass from './DnD5eCreatureArmourClass';
import './CreatureStatBlockDnD5e.css';

function CreatureStatBlockDnD5e(props: any) {
  const creature = props.creature;
  const CRXP = {
    0: `0 or 10`,
    0.125: `25`,
    0.25: `50`,
    0.5: `100`,
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
    s = s.replaceAll(`[[lookup @name lowercase]]`, creature.name);
    s = s.replaceAll(`{monster}`, ``);
    s = s.replaceAll(`&amp;Reference[Dash apply=false]`, `Dash`);
    s = s.replaceAll(`&amp;Reference[Disengage apply=false]`, `Disengage`);
    s = s.replaceAll(`&amp;Reference[Hide apply=false]`, `Hide`);
    s = s.replaceAll(
      `[[lookup @activation.condition activity=aLG3BRZL7P6OEjwd]]`,
      `hit by a melee attack roll while holding a weapon`
    );
    s = s.replaceAll(`[[lookup @roll.formula activity=aLG3BRZL7P6OEjwd]]`, `2`);
    s = s.replaceAll(`&amp;Reference[Bloodied]`, `Bloodied`);
    s = s.replaceAll(`[[/item .mmShieldBash0000]]`, `Shield Bash`);

    return s;
  }

  function creatureType(type: string) {
    return (
      <div
        className={
          type === `modern` ? `dndCreatureTypeModern` : `dndCreatureTypeOld`
        }
      >
        <h2>{creature.name}</h2>
        {type === `modern` && <hr />}
        <em>
          {creature.system.traits.size === `med` && `Medium`}
          {` ${creature.system.details.type.value}${creature.system.details.type.subtype && ` (${creature.system.details.type.subtype})`}, ${creature.system.details.alignment}`}
          {creature.system.details.alignment.toLowerCase().includes(`any`) &&
            !creature.system.details.alignment
              .toLowerCase()
              .includes(`alignment`) &&
            ` Alignment`}
        </em>
        {type === `old` && <hr />}
      </div>
    );
  }

  function DnD5eAttributeTable(type: string) {
    switch (type) {
      case `old`:
        return (
          <div>
            <hr style={{ marginBottom: `0px` }} />
            <table className="dndCreatureAttributesOld">
              <tbody>
                <tr>
                  <th>STR</th>
                  <th>DEX</th>
                  <th>CON</th>
                  <th>INT</th>
                  <th>WIS</th>
                  <th>CHA</th>
                </tr>
                <tr>
                  <td>
                    {stats.str} {stats.strMod >= 0 ? ` (+` : ` (`}
                    {stats.strMod}
                    {`)`}{` `}
                  </td>
                  <td>
                    {stats.dex} {stats.dexMod >= 0 ? ` (+` : ` (`}
                    {stats.dexMod}
                    {`)`}{` `}
                  </td>
                  <td>
                    {stats.con} {stats.conMod >= 0 ? ` (+` : ` (`}
                    {stats.conMod}
                    {`)`}{` `}
                  </td>
                  <td>
                    {stats.int} {stats.intMod >= 0 ? ` (+` : ` (`}
                    {stats.intMod}
                    {`)`}{` `}
                  </td>
                  <td>
                    {stats.wis} {stats.wisMod >= 0 ? ` (+` : ` (`}
                    {stats.wisMod}
                    {`)`}{` `}
                  </td>
                  <td>
                    {stats.cha} {stats.chaMod >= 0 ? ` (+` : ` (`}
                    {stats.chaMod}
                    {`)`}{` `}
                  </td>
                </tr>
              </tbody>
            </table>
            <hr style={{ marginTop: `0px` }} />
          </div>
        );

      case `modern`:
        return (
          <div className="dndCreatureAttributesModern">
            {[
              {
                side: `left`,
                colourLeft: `#ede6d9`,
                colourRight: `rgb(222, 212, 204)`,
                stats: [`str`, `dex`, `con`],
              },
              {
                side: `right`,
                colourLeft: `#d8dad1`,
                colourRight: `#d0caca`,
                stats: [`int`, `wis`, `cha`],
              },
            ].map((table) => {
              return (
                <table
                  style={{
                    width: `49%`,
                    float: table.side === `left` ? `left` : `right`,
                  }}
                >
                  <tbody>
                    {/* <tr style={{ fontSize: '11px' }}>
                                                <td></td>
                                                <td></td>
                                                <td>MOD</td>
                                                <td>SAVE</td>
                                            </tr> */}
                    {table.stats.map((attribute) => {
                      return (
                        <tr>
                          <td colSpan={2}>
                            <table
                              style={{
                                width: `100%`,
                                backgroundColor: table.colourLeft,
                                textAlign: `center`,
                                padding: `0px`,
                              }}
                            >
                              <tbody>
                                <tr>
                                  <th style={{ width: `50%` }}>
                                    {attribute.toUpperCase()}
                                  </th>
                                  <td style={{ width: `50%` }}>
                                    {stats[attribute]}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td colSpan={2}>
                            <table
                              style={{
                                width: `100%`,
                                backgroundColor: table.colourRight,
                                textAlign: `center`,
                                padding: `0px`,
                              }}
                            >
                              <tbody>
                                <tr>
                                  <td style={{ width: `50%` }}>
                                    {stats[`${attribute}Mod`] >= 0 ? ` +` : ` `}
                                    {stats[`${attribute}Mod`]}
                                  </td>
                                  <td style={{ width: `50%` }}>
                                    {stats[`${attribute}Mod`] >= 0 ? ` +` : ` `}
                                    {stats[`${attribute}Mod`] + profBonus}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              );
            })}
          </div>
        );
    }
  }

  function challengeRating() {
    const cr = !(
      creature.system.details.cr > 0 && creature.system.details.cr < 1
    )
      ? creature.system.details.cr
      : creature.system.details.cr === 0.125
        ? `1/8`
        : creature.system.details.cr === 0.25
          ? `1/4`
          : creature.system.details.cr === 0.5 && `1/2`;
    return (
      <div>
        <strong>Challenge </strong>
        {`${cr} (XP ${CRXP[creature.system.details.cr]}; PB +${profBonus}) `}
      </div>
    );
  }

  function traitNormal(item: any) {
    const strDexMod = item.system.properties.includes(`fin`)
      ? stats.dexMod > stats.strMod
        ? stats.dexMod
        : stats.strMod
      : stats.strMod;
    if (item.type === `weapon`) {
      return (
        <p key={item.name + `-creatureStatBlockDnD5e-` + creature.name + `-p`}>
          <strong>
            <em>{`${item.name}. `} </em>
          </strong>
          <em>
            {(item.system.type.value === `simpleM` ||
              item.system.type.value === `martialM`) &&
            item.system.range.value
              ? `Melee or Ranged Attack Roll: `
              : `Melee Attack Roll: `}
          </em>
          {`${profBonus + (!item.system.properties.includes(`fin`) || stats.strMod > stats.dexMod ? stats.strMod : stats.dexMod) >= 0 && `+`}`}
          {`${profBonus + (!item.system.properties.includes(`fin`) || stats.strMod > stats.dexMod ? stats.strMod : stats.dexMod)} to hit`}
          {`, reach 5ft.`}
          {`${item.system.range.value ? ` or range ` + item.system.range.value + `/` + item.system.range.long + `ft.` : ``} `}
          <em>Hit:</em>
          {` (${item.system.damage.base.number}d${item.system.damage.base.denomination} ${strDexMod >= 0 ? `+ ` : ``} ${strDexMod}) ${item.system.damage.base.types[0]} damage`}
          {item.system.properties.includes(`ver`) &&
            `, or (${item.system.damage.base.number}d${item.system.damage.base.denomination + 2} + ${stats.strMod}) ${item.system.damage.base.types[0]} damage if used with two hands`}
          .
        </p>
      );
    } else {
      return (
        <p key={item.name + `-creatureStatBlockDnD5e-` + creature.name + `-p`}>
          <span>
            <strong>
              <em>{`${item.name}. `}</em>
            </strong>
            {cleanFoundryVariablesName(item.system.description.value).replace(
              /<[^>]*>?/gm,
              ``
            )}
          </span>
        </p>
      );
    }
  }

  function creatureTraits() {
    if (
      creature.items
        .filter((type: any) => type.type === `feat`)
        .filter((item: any) => item.name !== `Multiattack`).length > 0
    ) {
      return (
        <div>
          {/* <h3>Traits</h3> */}
          <hr />
          {creature.items
            .filter(
              (type: any) =>
                type.type === `feat` && type.system.properties.includes(`trait`)
            )
            .filter((item: any) => item.name !== `Multiattack`)
            .map((item: any) => {
              return traitNormal(item);
            })}
        </div>
      );
    }
  }

  function creatureActions() {
    const filteredList = creature.items.filter(
      (item: any) =>
        item.system &&
        item.system.activities &&
        item.system.activities[Object.keys(item.system.activities)[0]] &&
        item.system.activities[Object.keys(item.system.activities)[0]]
          .activation &&
        item.system.activities[Object.keys(item.system.activities)[0]]
          .activation.type === `action`
    );
    return (
      <div>
        <h3>Actions</h3>
        <hr />
        {creature.items
          .filter((item: any) => item.name === `Multiattack`)
          .map((item: any) => {
            return traitNormal(item);
          })}

        {creature.items
          .filter((item: any) => item.type === `weapon`)
          .map((item: any) => {
            return traitNormal(item);
          })}
        {filteredList
          .filter((item: any) => item.type !== `weapon`)
          .map((item: any) => {
            return traitNormal(item);
          })}
      </div>
    );
  }

  function creatureSection(section: string) {
    const filteredList = creature.items.filter(
      (item: any) =>
        item.system &&
        item.system.activities &&
        item.system.activities[Object.keys(item.system.activities)[0]] &&
        item.system.activities[Object.keys(item.system.activities)[0]]
          .activation &&
        item.system.activities[Object.keys(item.system.activities)[0]]
          .activation.type === section
    );
    const title =
      section === `bonus`
        ? `Bonus Actions`
        : section === `reaction`
          ? `Reactions`
          : ``;

    if (filteredList.length > 0) {
      return (
        <div>
          <h3>{title}</h3>
          <hr />
          {filteredList.map((item: any) => {
            return traitNormal(item);
          })}
        </div>
      );
    }
  }

  return (
    <div className="dndStatBlock">
      {creatureType(`old`)}
      <div className="dndStatBlockModern">
        <div className="dndCreatureInfo">
          <div>
            <strong>Armour Class </strong>
            {DnD5eCreatureArmourClass(creature)}
            {/* <strong> Initiative </strong>
                    {stats.dexMod >= 0 ? ' +' : ' '}{stats.dexMod + profBonus} ({10 + stats.dexMod + profBonus}) */}
          </div>

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

          {DnD5eAttributeTable(`old`)}

          <div>
            <strong>Skills </strong>
            {Object.keys(creature.system.skills).map((key) => {
              if (creature.system.skills[key].value > 0) {
                const modifier =
                  stats[creature.system.skills[key].ability + `Mod`] +
                  profBonus * creature.system.skills[key].value;

                return (
                  <span>
                    {key} +{modifier}
                  </span>
                );
              }
            })}
          </div>
          <div>
            <strong>Gear </strong>
          </div>
          <div>
            <strong>Senses </strong>
            {`Passive Perception ${10 + stats.wisMod + (creature.system.skills.prc.value === 1 ? profBonus : 0)}`}
          </div>
          <div>
            <strong>Languages </strong>
            {creature.system.traits.languages.value.map((language: string) => {
              return <>{`${language}, `}</>;
            })}
          </div>
          {challengeRating()}
        </div>

        {creatureTraits()}

        {creatureActions()}

        {creatureSection(`bonus`)}

        {creatureSection(`reaction`)}
      </div>
    </div>
  );
}

export default CreatureStatBlockDnD5e;
