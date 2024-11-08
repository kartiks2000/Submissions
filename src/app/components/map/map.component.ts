declare const google: any;

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  ngOnInit(): void {
    this.initMap();
  }

  initMap(): void {
    // Initialize map with a center location and zoom level
    const map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 12,
      }
    );

    // multiple locations coordinates
    const locations = [
      { lat: 37.7749, lng: -122.4194, title: 'Downtown SF', altitude: 16 },
      { lat: 37.769, lng: -122.4469, title: 'Golden Gate Park', altitude: 30 },
      { lat: 37.8021, lng: -122.4187, title: 'Coit Tower', altitude: 64 },
      { lat: 37.8028, lng: -122.4485, title: 'Twin Peaks', altitude: 276 },
      { lat: 37.8087, lng: -122.4098, title: "Fisherman's Wharf", altitude: 3 },
    ];

    // SVG marker
    const svgMarker = `
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_675_1154)">
      <circle cx="24" cy="20" r="20" fill="#2188D9"/>
      <circle cx="24" cy="20" r="19" stroke="white" stroke-width="2"/>
      </g>
      <path d="M16.9688 32H31.0312C32.1944 32 33.1406 31.0538 33.1406 29.8906V15.0312H28.2188C27.0556 15.0312 26.1094 14.085 26.1094 12.9219V8H16.9688C15.8056 8 14.8594 8.94622 14.8594 10.1094V29.8906C14.8594 31.0538 15.8056 32 16.9688 32ZM19.0781 19.2969C19.0781 18.9082 19.3926 18.5938 19.7812 18.5938H28.2188C28.6074 18.5938 28.9219 18.9082 28.9219 19.2969V26.3281C28.9219 26.7168 28.6074 27.0312 28.2188 27.0312H19.7812C19.3926 27.0312 19.0781 26.7168 19.0781 26.3281V19.2969Z" fill="white"/>
      <path d="M20.4844 20H27.5156V25.625H20.4844V20Z" fill="white"/>
      <path d="M28.2188 13.6249H32.7286L27.5156 8.41187V12.9218C27.5156 13.3097 27.8308 13.6249 28.2188 13.6249Z" fill="white"/>
      <defs>
      <filter id="filter0_d_675_1154" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_675_1154"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_675_1154" result="shape"/>
      </filter>
      </defs>
    </svg>
    `;

    const svgIconUrl =
      'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svgMarker);

    const customIcon = {
      url: svgIconUrl,
      scaledSize: new google.maps.Size(40, 40),
      anchor: new google.maps.Point(20, 20),
    };

    // Adding markers to the map with custom icon.
    locations.forEach((location) => {
      new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: map,
        title: location.title,
        icon: customIcon,
      });
    });
  }
}
