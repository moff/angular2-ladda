import { Injectable } from "@angular/core";

export interface LaddaConfigArgs {
    style?: string;
    spinnerSize?: number;
    spinnerColor?: string;
    spinnerLines?: number;
}

@Injectable()
export class LaddaConfig implements LaddaConfigArgs {
    constructor(config: Object = {}) {
        Object.assign(this, config);
    }
}
