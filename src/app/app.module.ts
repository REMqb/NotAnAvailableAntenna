import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { AntennaPopupComponent } from './components/antenna-popup/antenna-popup.component';

@NgModule({
    declarations: [
        AppComponent,
        AntennaPopupComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AgmCoreModule.forRoot({
            apiKey: environment.googleMapApiKey
        }),
        AgmSnazzyInfoWindowModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
