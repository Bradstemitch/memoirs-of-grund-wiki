import React from 'react';
import { magicItemTraits } from '../../data/magicItems/traits';
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
                {magicItemTraits[variant[0]].DnD5e.description}
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
                {magicItemTraits[items[0]].DnD5e.description}
              </div>
            )
          })
        }
      </div>
    )
  }
  return (
    <div>
      <div>
        <h2>TEST</h2>
      </div>
      <br />
      {magicItem.description}
    </div>
  );
}

export default MagicItemBlockDnD5e;
