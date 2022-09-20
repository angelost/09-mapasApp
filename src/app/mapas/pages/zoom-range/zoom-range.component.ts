import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
    .mapa-container {
      height: 100%;
      width: 100%;
    }

    .row {
      background-color: white;
      border-radius: 50px;
      bottom: 50px;
      left: 50px;
      padding: 10px;
      position: fixed;
      z-index: 999;
    }
    `
  ]
})
export class ZoomRangeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    const map = new mapboxgl.Map({
    container: 'mapa', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [ -70.59018220682093, -33.59829914646098], // starting position [lng, lat]
    zoom: 18, // starting zoom
    //projection: 'globe' // display the map as a 3D globe
    });
    map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
    });
  }

}
