export function dnd5e_trait_spellcasting({ spells }: { spells: any[] }) {
  const spellArrays = {
    spells: [],
    activities: {},
  };
  spells.map((spell: any) => {
    spellArrays.spells.push(spell.spell);
    spellArrays.activities = {
      ...spellArrays.activities,
      ...spell.activity,
    };
  });

  let description =
    `<p class="feature">The [[lookup @name lowercase]]{monster} casts one of the following spells, using Intelligence as the spellcasting ability (spell save DC [[lookup @attributes.spell.dc]]):</p>`;

  if (
    spells.filter(
      (i: any) => i.activity[spells[0].id].consumption.targets.length === 0
    ).length > 0
  ) {
    description += `<p class=\"feature-trait\"> <strong> At Will:</strong>`;

    spells
      .filter(
        (i: any) => i.activity[spells[0].id].consumption.targets.length === 0
      )
      .map((x) => {
        description += `<em>{${x.spell.name}} </em>`;
      });
    description = description + `</p>`;
  }

  [10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((perDay) => {
    const perDaySpells = spells
      .filter(
        (i: any) => i.activity[spells[0].id].consumption.targets.length > 0
      )
      .filter(
        (j: any) =>
          j.activity[spells[0].id].consumption.targets[0].value ===
          perDay.toString()
      );

    if (perDaySpells.length > 0) {
      description += `<p class="feature-trait"> <strong> ${perDay}/day:</strong>`;

      perDaySpells.map((perDaySpell) => {
        description += `<em>{${perDaySpell.spell.name}} </em>`;
      });
      description = description + `</p>`;
    }
  });

  return [
    {
      _id: `mmSpellcasting00`,
      name: `Spellcasting`,
      type: `feat`,
      system: {
        type: {
          value: `monster`,
          subtype: ``,
        },
        activities: {
          ...spellArrays.activities,
        },
        uses: {
          spent: 0,
          recovery: [],
          max: ``,
        },
        description: {
          // "value": "<p class=\"feature\">The [[lookup @name lowercase]]{monster} casts one of the following spells, using Intelligence as the spellcasting ability (spell save DC [[lookup @attributes.spell.dc]]):</p><p class=\"feature-trait\"><strong>At Will:</strong> <em>@UUID[Compendium.dnd5e.spells24.Item.phbsplDetectMagi]{Detect Magic}</em>, <em>@UUID[Compendium.dnd5e.spells24.Item.phbsplDetectThou]{Detect Thoughts}</em>, <em>@UUID[Compendium.dnd5e.spells24.Item.phbsplDisguiseSe]{Disguise Self}</em>, <em>@UUID[Compendium.dnd5e.spells24.Item.phbsplInvisibili]{Invisibility}</em>, <em>@UUID[Compendium.dnd5e.spells24.Item.phbsplLight00000]{Light}</em>, <em>@UUID[Compendium.dnd5e.spells24.Item.phbsplMageArmor0]{Mage Armor}</em> (included in AC), <em>@UUID[Compendium.dnd5e.spells24.Item.phbsplMageHand00]{Mage Hand}</em>, <em>@UUID[Compendium.dnd5e.spells24.Item.phbsplPrestidigi]{Prestidigitation}</em></p><p class=\"feature-trait\"><strong>2/Day Each:</strong> <em>@UUID[Compendium.dnd5e.spells24.Item.phbsplFly0000000]{Fly}</em>, <em>@UUID[Compendium.dnd5e.spells24.Item.phbsplLightningB]{Lightning Bolt}</em> (level 7 version)</p><p class=\"feature-trait\"><strong>1/Day Each</strong><em>: @UUID[Compendium.dnd5e.spells24.Item.phbsplConeofCold]{Cone of Cold}</em> (level 9 version), <em>@UUID[Compendium.dnd5e.spells24.Item.phbsplMindBlank0]{Mind Blank}</em> (cast before combat), <em>@UUID[Compendium.dnd5e.spells24.Item.phbsplScrying000]{Scrying}</em>, <em>@UUID[Compendium.dnd5e.spells24.Item.phbsplTeleport00]{Teleport}</em></p>",
          value: description,
          chat: ``,
        },
        identifier: `spellcasting`,
        source: {
          revision: 1,
          rules: `2024`,
          book: ``,
          license: `CC-BY-4.0`,
        },
        enchant: {},
        prerequisites: {
          level: null,
          repeatable: false,
          items: [],
        },
        properties: [],
        requirements: ``,
        advancement: {},
        cover: null,
        crewed: false,
      },
      folder: `4T18pEvubPMQLzvD`,
      img: `icons/magic/symbols/circled-gem-pink.webp`,
      effects: [],
      flags: {
        dnd5e: {
          riders: {
            activity: [],
            effect: [],
          },
        },
      },
      _stats: {
        compendiumSource:
          `Compendium.dnd-monster-manual.features.Item.mmSpellcasting00`,
        duplicateSource: null,
        exportSource: null,
        coreVersion: `14.364`,
        systemId: `dnd5e`,
        systemVersion: `5.3.3`,
        lastModifiedBy: `Tu6NIikbqtsNemQh`,
        createdTime: 1788293695743,
        modifiedTime: 1788293695743,
      },
      sort: 5,
      ownership: {
        default: 0,
      },
    },
    ...spellArrays.spells.map((spell) => {
      return spell;
    }),
  ];
}
