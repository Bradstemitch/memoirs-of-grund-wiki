import React from 'react';

interface RumourBoxProps {
    width: string,
    height: string,
    rumour: { name: string, fileName: string, tags: string[] }
}

function RumourBox(props: RumourBoxProps) {
    let rumour
    let error = false
    try {
        rumour = require(`../../../data/rumours/${props.rumour.fileName}.json`);
    } catch (e) {
        error = true
    }
    return (
        <div style={{ 'width': props.width, 'height': props.height }}>
            <h2>{props.rumour.name}</h2>
            {!error ?
                <>
                    {rumour.story.map((paragraph: any) => {
                        return (
                            <div dangerouslySetInnerHTML={{ __html: paragraph }} />
                        )
                    })}
                    <h3>Truth</h3>
                    {rumour.truth.map((paragraph: any) => {
                        return (
                            <div dangerouslySetInnerHTML={{ __html: paragraph }} />
                        )
                    })}
                </>
                : <>File Not Found</>
            }
            <br />
            Tags: {props.rumour.tags}
        </div>
    );
}

export default RumourBox;
