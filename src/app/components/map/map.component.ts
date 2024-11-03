declare const google: any;

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  ngOnInit(): void {
    this.initMap();
  }

  initMap(): void {
    // Initialize map with a center location and zoom level
    const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: { lat: 37.7749, lng: -122.4194 }, // Example: San Francisco
      zoom: 10
    });

    // Add a sample marker/pointer to the map
    new google.maps.Marker({
      position: { lat: 37.7749, lng: -122.4194 },
      map: map,
      title: 'Hello San Francisco!'
    });
  }
}
