import { Component } from '@angular/core';

@Component({
    template: `
        <p>Home Component</p>
        <button [disabled]="!loading" (click)='toggleLoad()'>Stop Ladda</button>
        <button (click)='toggleDisabled()'>Toggle disabled state</button>
        <hr>
        <button [ladda]="loading !== false" data-style="zoom-in" data-spinner-size="30" data-spinner-color="red" data-spinner-lines="10" (click)="startLoading()">Click me</button>
        <button [disabled]="disabled" [ladda]="loading" (click)="startLoading()">Click me</button>
    `
})
export class HomeComponent {
    loading: boolean | number = true;
    disabled: boolean = true;
    
    toggleLoad() {
        this.loading = false;
    }
    
    toggleDisabled() {
        this.disabled = !this.disabled;
    }

    startLoading() {
        let getLoadingPromise = (loading: number | boolean, delay: number) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (this.loading === false) {
                        reject();
                    } else {
                        this.loading = loading;
                        resolve();
                    }
                }, delay);
            });
        };

        this.loading = 0; // starts progress indicator

        getLoadingPromise(0.25, 150)
            .then(() => getLoadingPromise(0.6, 400))
            .then(() => getLoadingPromise(0.9, 500))
            .then(() => getLoadingPromise(1, 300))
            .then(() => getLoadingPromise(false, 200))
            .catch(() => console.log("loading canceled"));
    }
}
