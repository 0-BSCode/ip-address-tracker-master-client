import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private map: any;
  private previousMarker: any;
  constructor() {}

  initMap(elementId: string): void {
    this.map = L.map(elementId, {
      center: [39.8282, -98.5795],
      zoom: 1,
      zoomControl: false,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }

  addMarker(lat: number, lon: number) {
    const marker = L.marker([lat, lon]);
    if (this.previousMarker) this.map.removeLayer(this.previousMarker);
    this.previousMarker = marker;
    marker.addTo(this.map);
    this.panTo(lat + 1.5, lon);
  }

  private panTo(lat: number, lon: number) {
    this.map.panTo(new L.LatLng(lat, lon));
  }
}
