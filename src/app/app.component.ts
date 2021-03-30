import {Component} from '@angular/core';
import {LaddaValue} from 'angular2-ladda';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    loading: LaddaValue = true;
    disabled = true;
    toggledLoad = false;
    toggledDisable = false;

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

    toggleLoading() {
        if (this.toggledLoad) {
            this.toggledLoad = false;
        } else {
            this.toggledDisable = true;
            this.toggledLoad = true;

            setTimeout(() => {
                this.toggledDisable = false;
            }, 0);
        }
    }

    startLoading() {
        let getLoadingPromise = (loading: number | boolean, delay: number) =>
            new Promise<void>((resolve, reject) => {
                setTimeout(() => {
                    if (typeof this.loading === 'number' || this.loading) {
                        this.loading = loading;
                        resolve();
                    } else {
                        reject();
                    }
                }, delay);
            });

        this.loading = 0; // starts progress indicator

        getLoadingPromise(0.25, 150)
            .then(() => getLoadingPromise(0.6, 500))
            .then(() => getLoadingPromise(0.9, 400))
            .then(() => getLoadingPromise(1, 300))
            .then(() => getLoadingPromise(false, 200))
            .catch(() => console.log("loading canceled"));
    }
}
