import React from 'react';
import MagicItemBlockDnD5e from './MagicItemStatBlockDnD5e';

interface DnD5eMagicItemBlockProps {
  item: any;
}

function DnD5eMagicItemVariantsBlock(props: DnD5eMagicItemBlockProps) {
  return (
    <div>
      {props.item.variants.map((variant: any) => (
        <MagicItemBlockDnD5e
          name={props.item.name + ` ` + variant.name}
          fileName={props.item.fileName + variant.fileName}
        />
      ))}
    </div>
  );
}

export default DnD5eMagicItemVariantsBlock;
