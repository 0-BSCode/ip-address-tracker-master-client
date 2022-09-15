import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location/location.service';
import { Location } from 'src/types/location';
import { MapService } from '../services/map/map.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  locationDetails?: Location;

  constructor(
    private locationService: LocationService,
    private mapService: MapService
  ) {}

  public ngOnInit() {
    this.fetchLocationDetails('192.212.174.101');
  }

  fetchLocationDetails(ip: string): void {
    this.locationService.fetchLocationDetails(ip).subscribe((response) => {
      this.locationDetails = response;
      this.mapService.addMarker(response.lat, response.lon);
    });
  }
}
