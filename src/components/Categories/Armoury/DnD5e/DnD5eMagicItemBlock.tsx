import React from 'react';

interface DnD5eMagicItemBlockProps {
    name: string,
    fileName: string
}

function DnD5eMagicItemBlock(props: any) {
    let item
    let error = false
    try {
        item = require(`../../../../data/armoury/DnD5e/fvtt-${props.fileName}.json`);
    } catch (e) {
        error = true
    }
    return (
        <div>
            {!error ?
                <>
                    {item.type}
                </>
                : <>File Not Found</>
            }
        </div>
        
    );
}

export default DnD5eMagicItemBlock;

