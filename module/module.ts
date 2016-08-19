import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { LaddaDirective }          from './ladda.directive';

@NgModule({
    imports:      [ CommonModule ],
    declarations: [ LaddaDirective ],
    exports:      [ LaddaDirective ],
    providers:    []
})
export class LaddaModule {}
