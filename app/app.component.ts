import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
        <h3>App Component</h3>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {}
