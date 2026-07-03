import React from 'react';
import { EMBLEM } from '../../../images/_emblems';

function NationButton(nation: any, width:number) {
    return (
        <div style={{
            'width': width+'px',
            'display': 'inline-block',
            'verticalAlign': 'top',
            'textAlign': 'center',
        }}>
            <img src={nation.imageLoc || EMBLEM['./emblems/ZZZ.webp']}
                style={{
                    'width': width-20+'px',
                    'height': 'auto',
                    'display': 'inline-block'
                }}
            >
            </img>
            <p>
                {nation.name}
            </p>
        </div>
    )
}

export default NationButton;
