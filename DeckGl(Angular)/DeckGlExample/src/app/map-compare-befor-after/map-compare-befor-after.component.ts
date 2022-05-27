import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-map-compare-befor-after',
  templateUrl: './map-compare-befor-after.component.html',
  styleUrls: ['./map-compare-befor-after.component.css']
})


export class MapCompareBeforAfterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set('pk.eyJ1Ijoic2hpdmE2NSIsImEiOiJjbDJyamN6NnoyejkxM2ZvN3d2cHBuaTdvIn0.xWIl2m0q8i7HB-PuVuVWgQ')
    // (mapboxgl as typeof mapboxgl) .accessToken = 'pk.eyJ1Ijoic2hpdmE2NSIsImEiOiJjbDJyamN6NnoyejkxM2ZvN3d2cHBuaTdvIn0.xWIl2m0q8i7HB-PuVuVWgQ';
    const beforeMap = new mapboxgl.Map({
      accessToken: 'pk.eyJ1Ijoic2hpdmE2NSIsImEiOiJjbDJyamN6NnoyejkxM2ZvN3d2cHBuaTdvIn0.xWIl2m0q8i7HB-PuVuVWgQ',
      container: 'before',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-77.01866, 38.888],
      pitch: 75,
      zoom: 15
    });

    const afterMap = new mapboxgl.Map({
      container: 'after',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-77.01866, 38.888],
      pitch: 75,
      zoom: 15
    });


    afterMap.once('load', () => {
      const poiLayers = ['poi-label', 'transit-label'];

      for (const layerId of poiLayers) {
        const currFilter = afterMap.getFilter(layerId);
        // Add in an additional condition for filtering based on ["pitch"] and ["distance-from-center"]
        const updatedFilter = [
          'all',
          currFilter,
          [
            'case',
            // Always show the symbol when pitch <= 60
            ['<=', ['pitch'], 60],
            true,
            // When pitch > 60, show the symbol only when it is close to the camera ( distance <= 2 )
            [
              'all',
              ['<=', ['distance-from-center'], 2],
              ['>', ['pitch'], 60]
            ],
            true,
            // Hide in the remaining case, far and high pitch
            false
          ]
        ];

        afterMap.setFilter(layerId, updatedFilter);
      }
    });

    // const map = new mapboxgl.compare(
    //     beforeMap,
    //     afterMap,
    //     '#comparison-container',{
    //       mousemove: true, 
    //       orientation : 'vertical'
    // });



  }

}
