import { NgModule, ValueProvider, ModuleWithProviders } from '@angular/core';
import { LaddaDirective }                from './ladda.directive';
import { LADDA_CONFIG }                  from './ladda-config';

@NgModule({
    imports:      [],
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
