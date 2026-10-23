import { makeid } from "../../_BUILDERS/_Constants";

export function dnd5e_trait_auraOfLeadership(radius: number) {
  const newID = makeid();
  return {
    name: `Aura of Leadership`,
    type: `feat`,
    folder: `6uMLnndK8UPkb7Uy`,
    img: `icons/magic/light/explosion-beam-impact-silhouette.webp`,
    system: {
      description: {
        value: `<p>While the [[lookup @name lowercase]]{monster} is not Incapacitated, its allies withing ${radius}ft. add 1d4 to attack rolls, athletics checks and saving throws</p>`,
        chat: ``
      },
      source: {
        custom: ``,
        rules: `2024`,
        revision: 1
      },
      uses: {
        max: ``,
        spent: 0,
        recovery: []
      },
      type: {
        value: `class`,
        subtype: ``
      },
      prerequisites: {
        level: 10,
        items: [],
        repeatable: false
      },
      properties: [],
      requirements: ``,
      activities: {
        [newID]: {
          type: `utility`,
          name: `Aura of Command`,
          activation: {
            type: ``,
            value: null,
            override: false,
            condition: ``
          },
          consumption: {
            scaling: {
              allowed: false
            },
            spellSlot: true,
            targets: []
          },
          description: {
            chatFlavor: ``
          },
          duration: {
            units: `inst`,
            concentration: false,
            override: false
          },
          effects: [
            {
              _id: `cJtDumOL6RUzrBHA`,
              level: {}
            }
          ],
          range: {
            override: false,
            units: `self`,
            special: ``
          },
          target: {
            template: {
              contiguous: false,
              units: `ft`,
              count: ``,
              type: `radius`,
              size: radius,
              stationary: false
            },
            affects: {
              choice: false,
              count: ``,
              type: `ally`,
              special: ``
            },
            override: false,
            prompt: false
          },
          uses: {
            spent: 0,
            recovery: [],
            max: ``
          },
          sort: 0,
          roll: {
            prompt: false,
            visible: false,
            formula: ``,
            name: ``
          },
          _id: newID,
          img: ``,
          flags: {},
          visibility: {
            level: {},
            requireAttunement: false,
            requireIdentification: false,
            requireMagic: false
          }
        }
      },
      enchant: {},
      identifier: `aura-of-leadership`,
      advancement: {},
      crewed: false
    },
    effects: [
    ],
    flags: {
      dnd5e: {}
    },
    _stats: {
      compendiumSource: `Compendium.dnd-players-handbook.classes.Item.phbpdnCourageAur`,
      duplicateSource: null,
      coreVersion: `14.364`,
      systemId: `dnd5e`,
      systemVersion: `5.3.3`,
      createdTime: 1790849312768,
      modifiedTime: 1790849312768,
      lastModifiedBy: `Tu6NIikbqtsNemQh`,
      exportSource: {
        worldId: `compendium-project-dandd`,
        uuid: `Item.phbpdnCourageAur`,
        coreVersion: `14.364`,
        systemId: `dnd5e`,
        systemVersion: `5.3.3`
      }
    },
    ownership: {
      default: 0
    }
  }
}
