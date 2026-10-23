import React from 'react';
import { magicWeapon } from '../../../data/magicItems/MagicItem';
import MagicItemBlockDnD5e from '../../_DnD5e/MagicItemStatBlockDnD5e';
import DnD5eMagicItemVariantsBlock from '../../_DnD5e/DnD5eMagicItemVariantsBlock';

interface MagicItemProps {
  width: string;
  height: string;
  roleplaySystem: string;
  item: any;
}

function MagicItem(props: MagicItemProps) {
  return (
    <div
      style={{
        width: props.width,
        height: props.width,
      }}
    >
      <div>
        <h2>{props.item.name}</h2>
        {props.roleplaySystem === `DnD5e` ? (
          props.item.variants.length > 1 ? (
            <DnD5eMagicItemVariantsBlock item={props.item} />
          ) : (
            <MagicItemBlockDnD5e
              name={props.item.name}
              fileName={props.item.fileName}
            />
          )
        ) : null}
      </div>
    </div>
  );
}

export default MagicItem;
