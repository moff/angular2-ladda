import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { YourAwesomeModule } from '../module/module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        YourAwesomeModule
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
export class AppModule { }
