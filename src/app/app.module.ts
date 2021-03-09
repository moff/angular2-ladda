import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LaddaModule} from 'angular2-ladda';
import {AppComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        LaddaModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
