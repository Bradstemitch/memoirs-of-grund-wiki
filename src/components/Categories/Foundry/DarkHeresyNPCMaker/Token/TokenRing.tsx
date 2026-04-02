export function Rings(rank: string, name: string, image: any, size: number) {
    function ringColour(rank: string) {
        switch (rank) {
            case "Juve":
                return "#80EF80"
            case "Ganger":
                return "#ce8946"
            case "Troop":
                return "#ce8946"
            case "Specialist":
                return "#30D5C8"
            case "Elite":
                return "#c4c4c4"
            case "Master":
                return "#ffbd1b"
        }
    }
  return {
    "prototypeToken": {
      "name": name,
      "displayName": 30,
      "actorLink": false,
      "width": size,
      "height": size,
      "texture": {
        "src": image,
        "anchorX": 0.5,
        "anchorY": 0.5,
        "offsetX": 0,
        "offsetY": 0,
        "fit": "contain",
        "scaleX": 2.55,
        "scaleY": 2.55,
        "rotation": 0,
        "tint": "#ffffff",
        "alphaThreshold": 0.75
      },
      "lockRotation": false,
      "rotation": 0,
      "alpha": 1,
      "disposition": -1,
      "displayBars": 40,
      "bar1": {
        "attribute": "wounds"
      },
      "bar2": {
        "attribute": "fate"
      },
      "light": {
        "negative": false,
        "priority": 0,
        "alpha": 0.5,
        "angle": 360,
        "bright": 0,
        "color": null,
        "coloration": 1,
        "dim": 0,
        "attenuation": 0.5,
        "luminosity": 0.5,
        "saturation": 0,
        "contrast": 0,
        "shadows": 0,
        "animation": {
          "type": null,
          "speed": 5,
          "intensity": 5,
          "reverse": false
        },
        "darkness": {
          "min": 0,
          "max": 1
        }
      },
      "sight": {
        "enabled": false,
        "range": 0,
        "angle": 360,
        "visionMode": "basic",
        "color": null,
        "attenuation": 0.1,
        "brightness": 0,
        "saturation": 0,
        "contrast": 0
      },
      "detectionModes": [],
      "occludable": {
        "radius": 0
      },
      "ring": {
        "enabled": true,
        "colors": {
          "ring": ringColour(rank),
          "background": null
        },
        "effects": 1,
        "subject": {
          "scale": 2.04,
          "texture": null
        }
      },
      "turnMarker": {
        "mode": 1,
        "animation": null,
        "src": null,
        "disposition": false
      },
      "movementAction": null,
      "flags": {
        "wall-height": {
          "tokenHeight": 0
        },
        "healthEstimate": {
          "dontMarkDead": false,
          "hideHealthEstimate": false,
          "hideName": false
        }
      },
      "randomImg": true,
      "appendNumber": false,
      "prependAdjective": false
    }
  }
}