import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarkerService } from './services/marker/marker.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { ContentComponent } from './content/content.component';
import { FormComponent } from './form/form.component';
import { InformationComponent } from './information/information.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [AppComponent, MapComponent, ContentComponent, FormComponent, InformationComponent, DetailComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [MarkerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
