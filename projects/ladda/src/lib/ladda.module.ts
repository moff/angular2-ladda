import {NgModule, ModuleWithProviders} from '@angular/core';
import {LaddaDirective} from './ladda.directive';
import {LaddaConfigArgs, LaddaConfig} from './ladda-config';

@NgModule({
    declarations: [ LaddaDirective ],
    exports:      [ LaddaDirective ],
})
export class LaddaModule {
    public static forRoot(config: LaddaConfigArgs): ModuleWithProviders<LaddaModule> {
        return {
            ngModule: LaddaModule,
            providers: [
                { provide: LaddaConfig, useValue: config }
            ]
        };
    }
}
