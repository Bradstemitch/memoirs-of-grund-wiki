import React from 'react';
import TimelineEvents from '../../../data/timeline/_TimelineEvents';
import { Link } from 'react-router-dom';

interface RumourBoxProps {
    width: string,
    height: string,
    rumour: { name: string, fileName: string, tags: string[] }
}

function TimelineBox(props: RumourBoxProps) {
    const event = TimelineEvents[props.rumour.fileName]

    return (
        <div style={{ 'width': props.width, 'height': props.height }}>
            <h2>{props.rumour.name}</h2>
            {event.html ?
                <>{event.html}</> :
                <>
                    {event.story.map((paragraph: any) => {
                        return (
                            <p>
                                {paragraph}
                            </p>
                        )
                    })}
                </>
            }
            <br />
            Tags: {props.rumour.tags}
        </div>
    );
}

export default TimelineBox;
