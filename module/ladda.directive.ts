import { Directive, ElementRef, Input, OnInit, DoCheck, OnDestroy, OnChanges, SimpleChanges, Optional, Inject } from '@angular/core';
import { LADDA_STYLE, LaddaStyle } from "./laddaStyle";

function tryReadAttribute(element: HTMLElement, attrName: string, defaultVal: any = undefined) {
    if (element.attributes[attrName]) {
        return element.attributes[attrName].value;
    }
    return defaultVal;
}

@Directive({
    selector: '[ladda]'
})
export class LaddaDirective implements OnInit, OnDestroy, OnChanges {

    private el: HTMLElement;
    private _dataStyle: string;
    private _dataSpinnerSize: number;
    private _dataSpinnerLines: number;
    private _dataSpinnerColor: string;
    private _ladda;
    
    @Input('ladda') loading: boolean;
    
    @Input('data-style') set dataStyle(dataStyle: string){
        this._dataStyle = dataStyle || this._dataStyle;
    }

    @Input('data-spinner-size') set dataSpinnerSize(dataSpinnerSize: number){
        this._dataSpinnerSize = dataSpinnerSize || this._dataSpinnerSize;
    }

    @Input('data-spinner-lines') set dataSpinnerLines(dataSpinnerLines: number){
        this._dataSpinnerLines = dataSpinnerLines || this._dataSpinnerLines;
    }
    
    @Input('data-spinner-color') set dataSpinnerColor(dataSpinnerColor: string){
        this._dataSpinnerColor = dataSpinnerColor || this._dataSpinnerColor;
    }

    constructor(el: ElementRef, @Inject(LADDA_STYLE) @Optional() private defaultStyle: LaddaStyle) {
        this.el = el.nativeElement;

        // Reading Ladda attributes from element
        this.dataStyle = tryReadAttribute(this.el, "data-style");
        this.dataSpinnerSize = parseInt(tryReadAttribute(this.el, "data-spinner-size"), 10);
        this.dataSpinnerLines = parseInt(tryReadAttribute(this.el, "data-spinner-lines"), 10);
        this.dataSpinnerColor = tryReadAttribute(this.el, "data-spinner-color");

        // Applying default style if available
        if (this.defaultStyle) {
            if (!this._dataStyle && this.defaultStyle.style) {
                this.el.setAttribute("data-style", this.defaultStyle.style);
                this._dataStyle = this.defaultStyle.style;
            }
            if (!this._dataSpinnerSize && this.defaultStyle.spinnerSize) {
                this.el.setAttribute("data-spinner-size", this.defaultStyle.spinnerSize.toString(10));
                this._dataSpinnerSize = this.defaultStyle.spinnerSize;
            }
            if (!this._dataSpinnerLines && this.defaultStyle.spinnerLines) {
                this.el.setAttribute("data-spinner-lines", this.defaultStyle.spinnerLines.toString(10));
                this._dataSpinnerLines = this.defaultStyle.spinnerLines;
            }
            if (!this._dataSpinnerColor && this.defaultStyle.spinnerColor) {
                this.el.setAttribute("data-spinner-color", this.defaultStyle.spinnerColor);
                this._dataSpinnerColor = this.defaultStyle.spinnerColor;
            }
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this._ladda) {
            if (changes['loading'] && changes['loading'].currentValue != changes['loading'].previousValue) {
                this.toggleLadda();
            }
        }
    }

    ngOnInit() {
        this.el.classList.add('ladda-button');
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
    }
}
