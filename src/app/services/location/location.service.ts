import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, catchError } from 'rxjs';
import { Location } from 'src/types/location';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private url: string = 'http://localhost:4000/getLocationDetails';
  constructor(private httpClient: HttpClient) {}

  fetchLocationDetails(ip: string): Observable<Location> {
    return this.httpClient.get<Location>(`${this.url}/${ip}`);
  }

  private log(message: string) {
    console.log(message);
  }
}
