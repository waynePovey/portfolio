import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '@components/home/home.component';
import { SolarSystemComponent } from '@scenes/solar-system/solar-system.component';
import { LoadingSpinnerComponent } from '@components/loading-spinner/loading-spinner.component';
import { CharpengineComponent } from './components/charpengine/charpengine.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SolarSystemComponent,
    LoadingSpinnerComponent,
    CharpengineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
