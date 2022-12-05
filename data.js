var APP_DATA = {
  "scenes": [
    {
      "id": "0-front",
      "name": "Front",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.2879254151396129,
        "pitch": 0.7601303419463044,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": -0.2842207875417042,
          "pitch": 0.19852567864050563,
          "rotation": 0,
          "target": "1-side"
        },
        {
          "yaw": 0.049295381989113096,
          "pitch": -0.2923795663007773,
          "rotation": 0,
          "target": "2-top"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-side",
      "name": "Side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.860782390080093,
          "pitch": -0.08869253568289892,
          "rotation": 0,
          "target": "0-front"
        },
        {
          "yaw": -2.273797983947915,
          "pitch": -0.6790432665526449,
          "rotation": 0,
          "target": "2-top"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-top",
      "name": "Top",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.3806903216229003,
        "pitch": 0.7474252948528957,
        "fov": 0.6954349377144362
      },
      "linkHotspots": [
        {
          "yaw": 0.6023836104471272,
          "pitch": 0.9417999198242022,
          "rotation": 0,
          "target": "1-side"
        },
        {
          "yaw": 0.5294567764083773,
          "pitch": 0.44922707848218835,
          "rotation": 0,
          "target": "0-front"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Tanauan - Santos",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
