import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MapboxLayer } from '@deck.gl/mapbox';
import { IconLayer, TextLayer } from '@deck.gl/layers';





@Component({
  selector: 'app-icon-layer-example',
  templateUrl: './icon-layer-example.component.html',
  styleUrls: ['./icon-layer-example.component.css']
})
export class IconLayerExampleComponent implements OnInit {

  constructor() { }

  aminaties = [
    "atm",
    "bar",
    "bank",
    "bus",
    "cafe",
    "college",
    "restorent",
    "school",
    "taxi",
    "atm",
  ]

  textAminaties = [
    "atm",
    "bar",
    "bank",
    "bus",
    "cafe",
    "college",
    "restorent",
    "school",
    "taxi",
    "atm",
  ];

  ngOnInit(): void {

    (mapboxgl as typeof mapboxgl).accessToken = 'pk.eyJ1Ijoic2hpdmE2NSIsImEiOiJjbDJyamN6NnoyejkxM2ZvN3d2cHBuaTdvIn0.xWIl2m0q8i7HB-PuVuVWgQ';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/satellite-v9',
      zoom: 18,
      center: [-74.08974230289459,
        40.718046194538495],
      pitch: 60,
    });

    map.on("load", () => {
      console.log("Hello")

      let gjFile = {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": { type: "" },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -74.09124970436096,
                40.7188878196529
              ]
            },
            "icon": "",
            "color": [
              255,
              0,
              0
            ]


          },
          {
            "type": "Feature",
            "properties": { type: "" },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -74.0912389755249,
                40.718033996994855
              ]
            },
            "icon": "",
            "color": [
              255,
              0,
              0
            ]

          },
          {
            "type": "Feature",
            "properties": { type: "" },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -74.08973693847656,
                40.71939197646102
              ]
            },
            "icon": "",
            "color": [
              255,
              0,
              0
            ]

          },
          {
            "type": "Feature",
            "properties": { type: "" },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -74.0898871421814,
                40.718635739817
              ]
            },
            "icon": "",
            "color": [
              255,
              0,
              0
            ]

          },
          {
            "type": "Feature",
            "properties": { type: "" },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -74.08783257007599,
                40.719379779163965
              ]
            },
            "icon": "",
            "color": [
              255,
              0,
              0
            ]

          },
          {
            "type": "Feature",
            "properties": { type: "" },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -74.08846020698547,
                40.718586950061066
              ]
            },
            "icon": "",
            "color": [
              255,
              0,
              0
            ]

          },
          {
            "type": "Feature",
            "properties": { type: "" },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -74.08804178237915,
                40.71753796165963
              ]
            },
            "icon": "",
            "color": [
              255,
              0,
              0
            ]

          },
          {
            "type": "Feature",
            "properties": { type: "" },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -74.08975303173065,
                40.717428182848224
              ]
            },
            "icon": "",
            "color": [
              255,
              0,
              0
            ]
          },
          {
            "type": "Feature",
            "properties": { type: "" },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -74.08974230289459,
                40.718046194538495
              ]
            },
            "icon": "",
            "color": [
              255,
              0,
              0
            ]

          },
          {
            "type": "Feature",
            "properties": { type: "" },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -74.08923268318176,
                40.71911550384551
              ]
            },
            "icon": "",
            "color": [
              255,
              0,
              0
            ]

          }
        ]
      };

      console.log(gjFile.features);

      var features = gjFile.features;
      features.map((f, i) => {
        features[i].icon = this.aminaties[i] + ".png"


      })

      features.map((f, k) => {
        if (this.textAminaties[k]) { f.properties.type = this.textAminaties[k] };
      });

      console.log(features);


      const iconLayer = new MapboxLayer({
        id: 'icon-layer',
        type: IconLayer,
        data: features,
        pickable: true,
        getIcon: (d: any) => ({
          url: "assets/" + d.icon,
          width: 128,
          height: 128,
          anchorY: 128


        }),
        sizeScale: 15,
        getPosition: (d: any) => d.geometry.coordinates,
        getSize: (d: any) => 4,
        // getColor: (d: any) => [200, 240, 0],
        opacity: 1,

      });

      const textLayer = new MapboxLayer({
        id: "text-layer",
        data: features,
        type: TextLayer,
        pickable: true,
        getPosition: (d: any) => d.geometry.coordinates,
        getText: (d: any) => d.properties.type,
        getSize: 25,
        getAngle: 0,
        getColor: (d: any) => d.color,

        getTextAnchor: 'middle',
        getAlignmentBaseline: 'center'
      });

      console.log("iconLayer==>", iconLayer)
      console.log(IconLayer);

      map.addLayer(iconLayer);
      map.addLayer(textLayer);

    });



  }

}

