import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { MapService } from '../services/map/map.service';
import { MarkerService } from '../services/marker/marker.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  constructor(
    private markerService: MarkerService,
    private mapService: MapService
  ) {}

  ngOnInit(): void {}

  // Called after DOM is rendered
  ngAfterViewInit(): void {
    this.mapService.initMap('map');
    this.mapService.addMarker(37.751, -97.822);
    this.mapService.addMarker(37.851, -97.822);
  }
}
