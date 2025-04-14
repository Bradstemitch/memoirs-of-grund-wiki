import React from 'react';

function NationButton(nation: any, width:number) {
    return (
        <div style={{
            'width': width+'px',
            'display': 'inline-block',
            'verticalAlign': 'top',
            'textAlign': 'center',
        }}>
            <img src={nation.emblem}
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
