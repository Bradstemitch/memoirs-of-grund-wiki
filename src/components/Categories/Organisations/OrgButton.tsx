import React from 'react';

function OrgButton(org: any, width:number) {
    return (
        <div style={{
            'width': width+'px',
            'display': 'inline-block',
            'verticalAlign': 'top',
            'textAlign': 'center',
        }}>
            <img src={org.emblem}
                style={{
                    'width': width-20+'px',
                    'height': 'auto',
                    'display': 'inline-block'
                }}
            >
            </img>
            <p>
                {org.name}
            </p>
        </div>
    )
}

export default OrgButton;
