import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import * as mapboxgl from 'mapbox-gl';
// import * as data from 'deck.gl'
import "../../assets/map.geojson";


@Component({
  selector: 'app-icon-layer',
  templateUrl: './icon-layer.component.html',
  styleUrls: ['./icon-layer.component.css']
})
export class IconLayerComponent implements OnInit {

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
  ngOnInit(): void {
    (mapboxgl as typeof mapboxgl).accessToken = 'pk.eyJ1Ijoic2hpdmE2NSIsImEiOiJjbDJyamN6NnoyejkxM2ZvN3d2cHBuaTdvIn0.xWIl2m0q8i7HB-PuVuVWgQ';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/satellite-streets-v9',
      zoom: 15,
      maxZoom: 21,
      antialias: false,
      center: [-74.09124970436096, 40.7188878196529],
      pitch: 60,
      // antialias: 10,

    });

    map.on("load", () => {
      console.log("Hello")
      axios.get("C:\Users\ASUS\Desktop\DeckGl(Angular)\DeckGlExample\src\app\Geojson File\map.geojson").then((res) => {
        console.log(res);

        let features = res.data.features;
        console.log(features);

        // features.map((k, i) => {
        //   features.properties.type = aminaties[i]
        // })


        // const layer = new mapboxgl({
        //   id: 'icon-layer',
        //   type: 'IconLayer',
        //   data: features,
        //   pickable: true,

        // iconAtlas: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png',
        // iconMapping: ICON_MAPPING,
        // getIcon: (d) => 'marker',
        //   getIcon: d => ({
        //     url: d.properties.type + ".png",
        //     width: 128,
        //     height: 128,
        //     anchorY: 128
        //   }),
        //   sizeScale: 15,
        //   getPosition: (d) => console.log(d.geometry.coordinates),

        //   getSize: (d) => 5,
        //   getColor: (d) => console.log([200, 140, 0]),

        // });

        // map.addLayer(layer);



      });
    });

  }

}


