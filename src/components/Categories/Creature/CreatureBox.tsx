import React from 'react';
import WHF4eCreatureBlock from '../../_WFRP4e/WFRP4eCreatureBlock';
import CreatureStatBlockDnD5e from '../../_DnD5e/CreatureStatBlockDnD5e';
import CreatureStatBlockPath2e from '../../_Path2e/CreatureStatBlockPath2e';

interface CreatureBoxProps {
    width: string,
    height: string,
    roleplaySystem: string,
    creature: { name: string, species: string, faction: string, weapon: string, threat: number, rank: string, tags: string[], fileName: string }
}

function CreatureBox(props: CreatureBoxProps) {
    let creature
    let error = false
    if (props.roleplaySystem !== "WFRP4e") {
        try {
            creature = require(`../../../data/creatures/${props.roleplaySystem}/fvtt-${props.creature.fileName}.json`);
        } catch (e) {
            error = true
        }
    }
    return (
        <div style={{ 'width': props.width, 'height': props.height }}>
            <h2>{props.creature.name} {props.creature.weapon !== `` && `( ${props.creature.weapon} )`}</h2>
            {!error ?
                <>
                    {props.roleplaySystem === 'DnD5e' ?
                        <CreatureStatBlockDnD5e
                            creature={creature}
                        /> : null
                    }
                    {props.roleplaySystem === 'Path2e' ?
                        <CreatureStatBlockPath2e
                            creature={creature}
                        /> : null
                    }
                    {props.roleplaySystem === 'WFRP4e' ?
                        <WHF4eCreatureBlock
                            creature={props.creature}
                        /> : null
                    }
                </>
                : <>File Not Found</>
            }
            <br />
            Tags: {props.creature.tags}
        </div>
    );
}

export default CreatureBox;
