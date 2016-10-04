import { NgModule, ValueProvider, ModuleWithProviders } from '@angular/core';
import { CommonModule }                  from '@angular/common';
import { LaddaDirective }                from './ladda.directive';

@NgModule({
    imports:      [ CommonModule ],
    declarations: [ LaddaDirective ],
    exports:      [ LaddaDirective ],
    providers:    []
})
export class LaddaModule {

    public static forRoot(defaultStyleProvider: ValueProvider): ModuleWithProviders {
        return {
            ngModule: LaddaModule,
            providers: [defaultStyleProvider]
        }
    } 
}
