import React from 'react';
import { DarkHeresyNPC } from './DarkHeresyNPCMaker/Summary/DarkHeresyNPC';
import DarkHeresyNPCJSON from './DarkHeresyNPCMaker/DarkHeresyNPCJSON';
import WFRP4eNPCJSON from '../../../data/creatures/WFRP4e/WFRP4eNPCJSON';
function FoundryJSON(props: any) {
    const json = {
        // ...DarkHeresyNPCJSON(""),
        ...WFRP4eNPCJSON(""),
    }


    return (
        <textarea value={JSON.stringify(json, null, 2)} readOnly cols={230} rows={50} />
    );
}

export default FoundryJSON;
