import React from 'react';
import { NPCBuilder } from './_NPC';

export function NPCJSONBuilder(props: any) {
  const statlines: any[] = [];
  const weapons = props.weapons.length > 0 ? props.weapons : [`default`];

  weapons.map((weapon: string) => {
    const NPCBuilderOutput = {
      ...NPCBuilder(
        `DnD5e`,
        props.creatureType,
        props.species,
        props.faction,
        props.name,
        (weapon !== `default` && weapon) || ``,
        props.group
      ),
    };

    statlines.push({
      DnD5e: {
        ...NPCBuilderOutput.dnd5e,
        type: `npc`,
        folder: `oq65o5ZsauMtb1JY`,
        flags: {
          dnd5e: {
            showTokenPortrait: false,
          },
        },
        _stats: {
          duplicateSource: null,
          exportSource: {
            worldId: `compendium-project-dandd`,
            uuid: `Actor.cJuJsUhKVaYpYlKT`,
            coreVersion: `14.364`,
            systemId: `dnd5e`,
            systemVersion: `5.3.3`,
          },
          coreVersion: `14.364`,
          systemId: `dnd5e`,
          systemVersion: `5.3.3`,
          createdTime: 1784578601753,
          modifiedTime: 1784578601753,
          lastModifiedBy: `Tu6NIikbqtsNemQh`,
          compendiumSource: `Compendium.dnd5e.actors24.Actor.mmAssassin000000`,
        },
        ownership: {
          default: 0,
        },
      },
      WFRP4e: {
        ...NPCBuilderOutput.wfrp4e,
        folder: `wfrp4eMemOfGrund`,
        type: `creature`,
        flags: {},
        _stats: {
          compendiumSource: `Actor.d5GbHkPF1uKD8KwX`,
          duplicateSource: `Actor.d5GbHkPF1uKD8KwX`,
          exportSource: {
            worldId: `compendium-project-whf4e`,
            uuid: `Actor.xJanPH2o4pCiNMvW`,
            coreVersion: `13.351`,
            systemId: `wfrp4e`,
            systemVersion: `9.4.1`,
          },
          coreVersion: `13.351`,
          systemId: `wfrp4e`,
          systemVersion: `9.3.2`,
          createdTime: 1764502127183,
          modifiedTime: 1764502279802,
          lastModifiedBy: `khhY7fuxf56JOp5M`,
        },
        _id: `xJanPH2o4pCiNMvW`,
        ownership: {
          default: 0,
        },
      },
    });
  });
  return statlines;
}
export default NPCJSONBuilder;
