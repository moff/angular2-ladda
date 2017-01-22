import { Injectable } from "@angular/core";

export interface LaddaConfigArgs {
    style?: string;
    spinnerSize?: number;
    spinnerColor?: string;
    spinnerLines?: number;
}

export let configAttributes: {[key: string]: keyof LaddaConfigArgs} = {
    "data-style": "style",
    "data-spinner-size": "spinnerSize",
    "data-spinner-color": "spinnerColor",
    "data-spinner-lines": "spinnerLines",
};

@Injectable()
export class LaddaConfig implements LaddaConfigArgs {
    constructor(config: Object = {}) {
        Object.assign(this, config);
    }
}
