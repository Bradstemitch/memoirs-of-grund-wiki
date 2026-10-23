import React from 'react';
import { DarkHeresyNPC } from './DarkHeresyNPCMaker/Summary/DarkHeresyNPC';
import DarkHeresyNPCJSON from './DarkHeresyNPCMaker/DarkHeresyNPCJSON';
import ImpMalNPCJSONBuilder from '../../../data/_ImpMal/ImpMalNPCJSONBuilder';
function FoundryJSON(props: any) {
  const json = {
    // ...DarkHeresyNPCJSON(""),
    ...ImpMalNPCJSONBuilder(``),
  };

  return (
    <textarea
      value={JSON.stringify(json, null, 2)}
      readOnly
      cols={230}
      rows={50}
    />
  );
}

export default FoundryJSON;
