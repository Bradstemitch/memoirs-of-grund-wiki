export interface switchResponseType {
  name: string;
  tokenName: string;
  tokenSize: number;
  stats: {
    dnd5e: string;
    wfrp4e: string;
  };
  statBonus: string;
  imagePath: string;
  imageLoc: string;
  imageWild: string;
  details: {
    dnd5e: {
      type: {
        value: string;
        subtype: string;
      };
      traits: {
        size: string;
        di: {
          bypasses: any;
          value: string[];
          custom: any;
        };
        dr: {
          bypasses: any;
          value: string[];
          custom: any;
        };
        dv: {
          bypasses: any;
          value: string[];
          custom: any;
        };
        dm: {
          amount: any;
          bypasses: any;
        };
        ci: {
          value: string[];
          custom: any;
        };
        languages: {
          value: string[];
          custom: any;
          communication: any;
        };
        important: false;
      };
      senses?: {
        units: number | null;
        special: any;
        ranges: {
          darkvision: number | null;
          blindsight: number | null;
          tremorsense: number | null;
          truesight: number | null;
        };
      };
      bonuses?: {
        mwak: {
          attack: string;
          damage: string;
        };
        rwak: {
          attack: string;
          damage: string;
        };
        msak: {
          attack: string;
          damage: string;
        };
        rsak: {
          attack: string;
          damage: string;
        };
        abilities: {
          check: string;
          save: string;
          skill: string;
        };
        spell: {
          dc: string;
        };
      };
      cr: number;
      skills: {
        proficient: string[];
        expertise: string[];
        jackOfAll: string[];
      };
      alignment: string;
      savingThrows: {
        str: boolean;
        dex: boolean;
        con: boolean;
        int: boolean;
        wis: boolean;
        cha: boolean;
      };
    };
    wfrp4e: {
      species: {
        value: string;
        subspecies: string;
      };
      size: {
        value: string;
      };
    };
  };
  armour: object[];
  weapons: object[];
  other: object[];
}
