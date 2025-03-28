import React from 'react';

interface RumourBoxProps {
    width: string,
    height: string,
    rumour: { name: string, fileName: string, tags: string[] }
}

function TimelineBox(props: RumourBoxProps) {
    let rumour
    let error = false
    try {
        rumour = require(`../../../data/timeline/${props.rumour.fileName}.json`);
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
                            <p>
                                {paragraph}
                            </p>
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

export default TimelineBox;
