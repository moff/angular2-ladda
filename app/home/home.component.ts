import { Component } from '@angular/core';
import {laddaValue} from '../../module/ladda.directive';

@Component({
    template: `
        <p>Home Component</p>
        <button [disabled]="!isLoading()" (click)='stopFalse()'>Stop with false</button>
        <button [disabled]="!isLoading()" (click)='stopNull()'>Stop with null</button>
        <button [disabled]="!isLoading()" (click)='stopUndef()'>Stop with undefined</button>
        <button (click)='toggleDisabled()'>Toggle disabled state</button>
        <hr>
        <button [ladda]="isLoading()" data-style="zoom-in" data-spinner-size="30" data-spinner-color="red" data-spinner-lines="10" (click)="startLoading()">Click me</button>
        <button [disabled]="disabled" [ladda]="loading" (click)="startLoading()">Click me</button>
    `,
    styles: [`
        button {
            margin-right: 0.5em;
        }
    `],
})
export class HomeComponent {
    loading: laddaValue = true;
    disabled: boolean = true;

    isLoading(): boolean {
        return typeof this.loading === 'number' || !!this.loading;
    }

    stopFalse() {
        this.loading = false;
    }

    stopNull() {
        this.loading = null;
    }

    stopUndef() {
        this.loading = undefined;
    }
    
    toggleDisabled() {
        this.disabled = !this.disabled;
    }

    startLoading() {
        let getLoadingPromise = (loading: number | boolean, delay: number) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (typeof this.loading === 'number' || this.loading) {
                        this.loading = loading;
                        resolve();
                    } else {
                        reject();
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
