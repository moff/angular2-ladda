import { Directive, ElementRef, Input, OnInit, OnDestroy, OnChanges, SimpleChanges, Optional, Inject } from '@angular/core';
import { LaddaConfig, LaddaConfigArgs, configAttributes } from './ladda-config';
import * as Ladda from 'ladda';

@Directive({
    selector: '[ladda]'
})
export class LaddaDirective implements OnInit, OnDestroy, OnChanges {
    private el: HTMLElement;
    private _ladda: ILaddaButton;

    @Input('ladda') loading: boolean | number;
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
        if (this._ladda) {
            let loading = changes['loading'];

            if (loading && loading.currentValue !== loading.previousValue) {
                if (typeof loading.currentValue !== 'number' || typeof loading.previousValue !== 'number') {
                    this.toggleLadda()
                }

                if (typeof loading.currentValue === 'number') {
                    this._ladda.setProgress(loading.currentValue);
                }
            }
            
            if (changes['disabled']) {
                this.toggleDisabled();
            }
        }
    }

    ngOnInit() {
        this._ladda = Ladda.create(this.el);
        this.toggleLadda();
    }

    ngOnDestroy() {
        this._ladda.remove();
    }
    
    toggleLadda() {
        if (this.loading !== false) {
            this._ladda.start();
            return;
        }

        this._ladda.stop();
        this.toggleDisabled();
    }
    
    toggleDisabled() {
        if (this.disabled) {
            this.el.setAttribute('disabled', '');
            return;
        }
        
        this.el.removeAttribute('disabled');
    }
}
