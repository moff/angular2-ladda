import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LaddaModule} from 'angular2-ladda';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LaddaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
