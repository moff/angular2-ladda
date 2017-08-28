import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { LaddaModule } from '../module/module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        LaddaModule.forRoot({
            // style: "contract",
            // spinnerSize: 40,
            // spinnerColor: "lime",
            // spinnerLines: 12
        })
    ],
    providers: [
        appRoutingProviders
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
