import {isPlatformBrowser} from '@angular/common';
import {Directive, ElementRef, Input, OnInit, OnDestroy, OnChanges, SimpleChanges, Optional, Inject, PLATFORM_ID} from '@angular/core';
import {create as createLadda, LaddaButton} from 'ladda';
import {LaddaConfig, LaddaConfigArgs} from './ladda-config';

export type LaddaValue = boolean | number | undefined | null;

@Directive({
    selector: '[ladda]',
})
export class LaddaDirective implements OnInit, OnDestroy, OnChanges {
    private el: HTMLButtonElement;
    private ladda: LaddaButton | undefined = undefined;

    @Input('ladda') loading: LaddaValue;
    @Input() disabled = false;

    constructor(
        el: ElementRef,
        @Inject(LaddaConfig) @Optional() config: LaddaConfigArgs,
        @Inject(PLATFORM_ID) private platformId: Object,
    ) {
        this.el = el.nativeElement;

        if (!config) {
            return;
        }

        if (config.style && !this.el.getAttribute('data-style')) {
            this.el.setAttribute('data-style', config.style);
        }

        if (config.spinnerSize && !this.el.getAttribute('data-spinner-size')) {
            this.el.setAttribute('data-spinner-size', config.spinnerSize.toString());
        }

        if (config.spinnerColor && !this.el.getAttribute('data-spinner-color')) {
            this.el.setAttribute('data-spinner-color', config.spinnerColor);
        }

        if (config.spinnerLines && !this.el.getAttribute('data-spinner-lines')) {
            this.el.setAttribute('data-spinner-lines', config.spinnerLines.toString());
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (!this.ladda) {
            return; // needed since ngOnChanges is called before ngOnInit
        }

        if (changes.loading) {
            this.updateLadda(changes.loading.previousValue);
        }

        if (changes.disabled) {
            this.updateDisabled();
        }
    }

    ngOnInit() {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }

        this.ladda = createLadda(this.el);

        // if the initial loading value isn't false, a timeout of 0 ms
        // is necessary for the calculated spinner size to be correct.
        setTimeout(() => {this.updateLadda(false);}, 0);
    }

    ngOnDestroy() {
        if (this.ladda) {
            this.ladda.remove();
        }
    }

    private updateLadda(previousValue: LaddaValue): void {
        if (!this.ladda) {
            return;
        }

        let loading: boolean = typeof this.loading === 'number' || !!this.loading;
        let wasLoading: boolean = typeof previousValue === 'number' || !!previousValue;

        if (!loading) {
            if (wasLoading) {
                this.ladda.stop();
            }

            return this.updateDisabled();
        }

        if (!wasLoading) {
            this.ladda.start();
        }

        if (typeof this.loading === 'number') {
            this.ladda.setProgress(this.loading);
        }
    }

    private updateDisabled(): void {
        this.el.disabled = this.disabled;
    }
}
