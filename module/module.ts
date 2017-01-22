import { NgModule, ModuleWithProviders } from '@angular/core';
import { LaddaDirective } from './ladda.directive';
import { LaddaConfigArgs, LaddaConfig } from './ladda-config';

@NgModule({
    imports:      [],
    declarations: [ LaddaDirective ],
    exports:      [ LaddaDirective ],
    providers:    []
})
export class LaddaModule {
    public static forRoot(config?: LaddaConfigArgs): ModuleWithProviders {
        return {
            ngModule: LaddaModule,
            providers: [
                { provide: LaddaConfig, useValue: config }
            ]
        }
    } 
}
