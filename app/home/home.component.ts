import { Component } from '@angular/core';

@Component({
    template: `
        <p>Home Component</p>
        <button [disabled]="!loading" (click)='toggleLoad()'>Stop Ladda</button>
        <button (click)='toggleDisabled()'>Toggle disabled state</button>
        <hr>
        <button [ladda]="loading" data-style="zoom-in" data-spinner-size="30" data-spinner-color="red" data-spinner-lines="10" (click)="startLoading()">Click me</button>
        <button [disabled]="disabled" [ladda]="loading" (click)="startLoading()">Click me</button>
    `
})
export class HomeComponent {
    loading: boolean = true;
    disabled: boolean = true;
    
    toggleLoad() {
        this.loading = !this.loading;
    }
    
    toggleDisabled() {
        this.disabled = !this.disabled;
    }

    startLoading() {
        if (!this.loading) {
            this.loading = true;
        }
    }
}
