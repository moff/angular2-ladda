import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { LaddaModule } from '../module/module';
import { LADDA_STYLE } from '../module/laddaStyle';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        LaddaModule
    ],
    providers: [
        appRoutingProviders,
        {
            provide: LADDA_STYLE,
            useValue: {
                style: "contract",
                // spinnerSize: 40,
                // spinnerColor: "lime",
                // spinnerLines: 30
            }
        }
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
