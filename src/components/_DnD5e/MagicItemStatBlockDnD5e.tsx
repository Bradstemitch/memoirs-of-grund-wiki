import React from 'react';
import { magicItemTraitsDnD5e } from '../../data/armouryMagic/stats/DnD5e/_stats';
import './MagicItemStatBlockDnD5e.css';

function MagicItemBlockDnD5e(props: any) {
  const magicItem = props.magicItem
  if (magicItem.variants) {
    return (
      <>
        {
          magicItem.variants.map(variant => {
            return (
              <>
                <h2>{variant[1]}</h2>
                {magicItemTraitsDnD5e[variant[0]].DnD5e.description}
              </>
            )
          })
        }
      </>
    )
  } else if (magicItem.splitItem) {
    return (
      <div className="dndMagicItemStatBlock">
        {magicItem.description}
        {
          magicItem.splitItem.map(items => {
            return (
              <div className="splitWeaponProfile">
                <h3>{items[1]}</h3>
                <hr />
                {magicItemTraitsDnD5e[items[0]].DnD5e.description}
              </div>
            )
          })
        }
      </div>
    )
  }
  return (
    <div>
      {magicItem.description}
    </div>
  );
}

export default MagicItemBlockDnD5e;
