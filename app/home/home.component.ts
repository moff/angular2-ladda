import { Component } from '@angular/core';

@Component({
    template: `
        <p>Home Component</p>
        <button (click)='toggleLoad()'>Toggle</button>
        <hr>
        <button [ladda]="loading" class="ladda-button" data-style="zoom-in">Click me</button>
    `
})
export class HomeComponent {
    loading: boolean = true;
    
    toggleLoad() {
        this.loading = !this.loading;
    }
}
