import { NgModule, ValueProvider, ModuleWithProviders } from '@angular/core';
import { CommonModule }                  from '@angular/common';
import { LaddaDirective }                from './ladda.directive';
import { LADDA_CONFIG }                  from './ladda-config';

@NgModule({
    imports:      [ CommonModule ],
    declarations: [ LaddaDirective ],
    exports:      [ LaddaDirective ],
    providers:    []
})
export class LaddaModule {

    public static forRoot(config: Object = {}): ModuleWithProviders {
        
        let defaultStyleProvider = {
            provide: LADDA_CONFIG,
            useValue: config
        };
        
        return {
            ngModule: LaddaModule,
            providers: [defaultStyleProvider]
        }
    } 
}
