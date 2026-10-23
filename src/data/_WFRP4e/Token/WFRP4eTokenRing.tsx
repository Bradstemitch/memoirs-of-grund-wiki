export function WFRP4eRings(
  system: string,
  rank: string,
  name: string,
  image: any,
  size: number,
  tint: string
) {
  function ringColour() {
    switch (rank) {
      case `Brass`:
        return `#ce8946`;
      case `Silver`:
        return `#c4c4c4`;
      case `Gold`:
        return `#ffbd1b`;
      case `Purple`:
        return `#bf77f6`;
      case `Troop`:
        return `#ce8946`;
      case `Elite`:
        return `#c4c4c4`;
      case `Master`:
        return `#ffbd1b`;
    }
  }

  function ringTint() {
    switch (tint) {
      case `Ghoul`:
        return `#96dfa2`;
      default:
        return `#ffffff`;
    }
  }

  function ringData() {
    switch (system) {
      case `DnD5e`:
        return {
          bar1: {
            attribute: `attributes.hp`,
          },
          bar2: {
            attribute: null,
          },
        };
      case `ImpMal`:
        return {
          bar1: {
            attribute: `combat.wounds`,
          },
          bar2: {
            attribute: null,
          },
        };
      case `WFRP4e`:
        break;
    }
  }

  return {
    prototypeToken: {
      name: name,
      displayName: 30,
      actorLink: false,
      width: size,
      height: size,
      texture: {
        src: image,
        anchorX: 0.5,
        anchorY: 0.5,
        fit: `contain`,
        scaleX: 2.55,
        scaleY: 2.55,
        rotation: 0,
        tint: ringTint(),
        alphaThreshold: 0.75,
      },
      lockRotation: false,
      rotation: 0,
      alpha: 1,
      disposition: 0,
      displayBars: 40,
      ...ringData(),
      light: {
        negative: false,
        priority: 0,
        alpha: 0.5,
        angle: 360,
        bright: 0,
        color: null,
        coloration: 1,
        dim: 0,
        attenuation: 0.5,
        luminosity: 0.5,
        saturation: 0,
        contrast: 0,
        shadows: 0,
        animation: {
          type: null,
          speed: 5,
          intensity: 5,
          reverse: false,
        },
        darkness: {
          min: 0,
          max: 1,
        },
      },
      sight: {
        enabled: false,
        range: 0,
        angle: 360,
        visionMode: `basic`,
        color: null,
        attenuation: 0.1,
        brightness: 0,
        saturation: 0,
        contrast: 0,
      },
      detectionModes: [],
      occludable: {
        radius: 0,
      },
      ring: {
        enabled: true,
        colors: {
          ring: ringColour(),
          background: null,
        },
        effects: 1,
        subject: {
          scale: 2.04,
          texture: null,
        },
      },
      turnMarker: {
        mode: 1,
        animation: null,
        src: null,
        disposition: false,
      },
      movementAction: null,
      flags: {},
      randomImg: true,
      appendNumber: false,
      prependAdjective: false,
    },
  };
}
