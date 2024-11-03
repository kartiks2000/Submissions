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

    // Define multiple locations
    const locations = [
      { lat: 37.7749, lng: -122.4194, title: 'Downtown SF', altitude: 16 },
      { lat: 37.7690, lng: -122.4469, title: 'Golden Gate Park', altitude: 30 },
      { lat: 37.8021, lng: -122.4187, title: 'Coit Tower', altitude: 64 },
      { lat: 37.8028, lng: -122.4485, title: 'Twin Peaks', altitude: 276 },
      { lat: 37.8087, lng: -122.4098, title: 'Fisherman\'s Wharf', altitude: 3 }
    ];

    // Inline SVG marker
    const svgMarker = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.96875 24H19.0312C20.1944 24 21.1406 23.0538 21.1406 21.8906V7.03125H16.2188C15.0556 7.03125 14.1094 6.08503 14.1094 4.92188V0H4.96875C3.80559 0 2.85938 0.946219 2.85938 2.10938V21.8906C2.85938 23.0538 3.80559 24 4.96875 24ZM7.07812 11.2969C7.07812 10.9082 7.39261 10.5938 7.78125 10.5938H16.2188C16.6074 10.5938 16.9219 10.9082 16.9219 11.2969V18.3281C16.9219 18.7168 16.6074 19.0312 16.2188 19.0312H7.78125C7.39261 19.0312 7.07812 18.7168 7.07812 18.3281V11.2969Z" fill="white"/>
    <path d="M8.48438 12H15.5156V17.625H8.48438V12Z" fill="white"/>
    <path d="M16.2188 5.62488H20.7286L15.5156 0.411865V4.92176C15.5156 5.30969 15.8308 5.62488 16.2188 5.62488Z" fill="white"/>
    </svg>
    `;

    const svgIconUrl = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svgMarker);


    const customIcon = {
      url: svgIconUrl,
      scaledSize: new google.maps.Size(40, 40),
      anchor: new google.maps.Point(20, 20)
    };

    // Add markers for each location
    locations.forEach(location => {
      new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: map,
        title: location.title,
        icon: customIcon
      });
    });
  }
}
