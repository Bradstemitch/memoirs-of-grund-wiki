import React from 'react';
import { EMBLEM, THUMBNAIL } from '../../../images/_images';

function NationButton(nation: any, width: number, nameOverride?: string) {
  return (
    // <div style={{
    //     'width': width + 'px',
    //     'display': 'inline-block',
    //     'verticalAlign': 'top',
    //     'textAlign': 'center',
    // }}>
    <button
      style={{
        width: width + `px`,
        display: `inline-block`,
        verticalAlign: `top`,
        textAlign: `center`,
        backgroundColor: `white`,
        border: `none`,
      }}
    >
      <img
        src={
          nation.imageLoc ||
          (nameOverride
            ? THUMBNAIL[`./characters/ZZZ.webp`]
            : EMBLEM[`./emblems/ZZZ.webp`])
        }
        style={{
          width: width - 20 + `px`,
          height: `auto`,
          display: `inline-block`,
        }}
      ></img>
      <p>{nameOverride ? nameOverride : nation.name}</p>
    </button>
    // </div>
  );
}

export default NationButton;
