import React from 'react';

interface CreatureBoxProps {
    width: string,
    height: string,
    roleplaySystem: string,
    creature: { name: string, fileName: string, tags: string[] }
}

function NationBox(props: CreatureBoxProps) {
    let creature
    let error = false
    try {
        creature = require(`../../data/nations/${props.creature.fileName}.json`);
    } catch (e) {
        error = true
    }
    return (
        <div style={{ 'width': props.width, 'height': props.height }}>
            <h2>{props.creature.name}</h2>
            {!error ?
                <>
                    <>
                        {creature.summary}
                    </>
                    <div>
                        <h3>
                            Contents
                        </h3>
                    </div>
                    <div>
                        <h3>
                            History
                        </h3>
                    </div>
                    <div>
                        <h3>
                            Society
                        </h3>
                    </div>
                    <div>
                        <h3>
                            Culture
                        </h3>
                    </div>
                    <div>
                        <h3>
                            Economy and Trade
                        </h3>
                    </div>
                    <div>
                        <h3>
                            National Emblems
                        </h3>
                    </div>
                    <div>
                        <h3>
                            Notable {creature.demonym}s
                        </h3>
                    </div>
                    <div>
                        <h3>
                            Locations
                        </h3>
                    </div>
                    <div>
                        <h3>
                            Trivia
                        </h3>
                    </div>
                </>
                : <>File Not Found</>
            }
            <br />
            Tags: {props.creature.tags}
        </div>
    );
}

export default NationBox;
