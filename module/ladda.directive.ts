import { Directive, ElementRef, Input, OnInit, OnDestroy, OnChanges, SimpleChanges, Optional, Inject } from '@angular/core';
import { LaddaConfig, LaddaConfigArgs } from "./ladda-config";

function tryReadAttribute(element: HTMLElement, attrName: string): string {
    let attr = element.attributes.getNamedItem(attrName);
    if (attr) {
        return attr.value;
    }

    return '';
}

@Directive({
    selector: '[ladda]'
})
export class LaddaDirective implements OnInit, OnDestroy, OnChanges {

    private el: HTMLElement;
    private _ladda: any;
    
    @Input('ladda') loading: boolean;
    @Input('disabled') disabled: boolean;

    constructor(el: ElementRef, @Inject(LaddaConfig) @Optional() private config: LaddaConfigArgs) {
        this.el = el.nativeElement;

        // Reading Ladda attributes from element
        let dataStyle = tryReadAttribute(this.el, "data-style");
        let dataSpinnerSize = parseInt(tryReadAttribute(this.el, "data-spinner-size"), 10);
        let dataSpinnerLines = parseInt(tryReadAttribute(this.el, "data-spinner-lines"), 10);
        let dataSpinnerColor = tryReadAttribute(this.el, "data-spinner-color");

        // Applying default style if available
        if (this.config) {
            if (!dataStyle && this.config.style) {
                this.el.setAttribute("data-style", this.config.style);
            }
            
            if (!dataSpinnerSize && this.config.spinnerSize) {
                this.el.setAttribute("data-spinner-size", this.config.spinnerSize.toString(10));
            }
            
            if (!dataSpinnerLines && this.config.spinnerLines) {
                this.el.setAttribute("data-spinner-lines", this.config.spinnerLines.toString(10));
            }
            
            if (!dataSpinnerColor && this.config.spinnerColor) {
                this.el.setAttribute("data-spinner-color", this.config.spinnerColor);
            }
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this._ladda) {
            if (changes['loading'] && changes['loading'].currentValue != changes['loading'].previousValue) {
                this.toggleLadda();
            }
            
            if (changes['disabled']) {
                this.toggleDisabled();
            }
        }
    }

    ngOnInit() {
        let Ladda = require('ladda');
        this._ladda = Ladda.create(this.el);
        this.toggleLadda();
    }

    ngOnDestroy() {
        this._ladda.remove();
    }
    
    toggleLadda() {
        if (this.loading) {
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
