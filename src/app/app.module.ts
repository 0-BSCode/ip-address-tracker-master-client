import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarkerService } from './services/marker/marker.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [AppComponent, MapComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [MarkerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
