import { Directive, ElementRef, Input, OnInit, OnDestroy, OnChanges, SimpleChanges, Optional, Inject } from '@angular/core';
import { LaddaConfig, LaddaConfigArgs, configAttributes } from './ladda-config';
import * as Ladda from 'ladda';
import {Subscription} from 'rxjs/Subscription';

export type laddaValue = boolean | number | undefined | null | Subscription;

@Directive({
    selector: '[ladda]'
})
export class LaddaDirective implements OnInit, OnDestroy, OnChanges {
    private el: HTMLElement;
    private _ladda: ILaddaButton;

    @Input('ladda') loading: laddaValue;
    @Input('disabled') disabled: boolean;

    constructor(el: ElementRef, @Inject(LaddaConfig) @Optional() config: LaddaConfigArgs) {
        this.el = el.nativeElement;

        if (!config) {
            return;
        }

        // apply default styles if they aren't overwritten by an attribute
        for (let attribute in configAttributes) {
            let configValue = config[configAttributes[attribute]];

            if (!configValue) {
                continue; // don't waste time reading the attribute
            }

            if (!this.el.getAttribute(attribute)) {
                // attribute isn't set - apply the default config value
                let value = (typeof configValue === "number") ? configValue.toString() : configValue;
                this.el.setAttribute(attribute, value);
            }
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (!this._ladda) {
            return; // needed since ngOnChanges is called before ngOnInit
        }

        if (changes['loading']) {
            this.updateLadda(changes['loading'].previousValue);
        }

        if (changes['disabled']) {
            this.updateDisabled();
        }
    }

    ngOnInit() {
        this._ladda = Ladda.create(this.el);

        // if the initial loading value isn't false, a timeout of 0 ms
        // is necessary for the calculated spinner size to be correct.
        setTimeout(() => { this.updateLadda(false); }, 0);
    }

    ngOnDestroy() {
        this._ladda.remove();
    }

    private updateLadda(previousValue: laddaValue): void {
        let loading: boolean = typeof this.loading === 'number' || this.loading instanceof Subscription || !!this.loading;
        let wasLoading: boolean = (this.loading instanceof Subscription) ? false : typeof previousValue === 'number' || !!previousValue;

        if (!loading) {
            if (wasLoading) {
                this._ladda.stop();
            }

            return this.updateDisabled();
        }

        if (!wasLoading) {
            this._ladda.start();

            if(this.loading instanceof Subscription) {
                this.loading.add(() => this._ladda.stop());
            }
        }

        if (typeof this.loading === 'number') {
            this._ladda.setProgress(this.loading);
        }
    }

    private updateDisabled(): void {
        if (this.disabled) {
            this.el.setAttribute('disabled', '');
        } else {
            this.el.removeAttribute('disabled');
        }
    }
}
