import { Component, OnInit } from '@angular/core';
import { Location } from 'src/types/location';
import { LocationService } from '../services/location/location.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
})
export class InformationComponent implements OnInit {
  locationInfo?: Location;

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.fetchLocation('104.28.252.29');
  }

  fetchLocation(ip: string) {
    this.locationService
      .fetchLocationDetails(ip)
      .subscribe((response) => (this.locationInfo = response));
  }
}
