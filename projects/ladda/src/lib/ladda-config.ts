import {Injectable} from "@angular/core";

export type LaddaStyle =
    "expand-left" | "expand-right" | "expand-up" | "expand-down" |
    "contract" | "contract-overlay" | "zoom-in" | "zoom-out" |
    "slide-left" | "slide-right" | "slide-up" | "slide-down";

export abstract class LaddaConfigArgs {
    style?: LaddaStyle;
    spinnerSize?: number;
    spinnerColor?: string;
    spinnerLines?: number;
}

@Injectable()
export class LaddaConfig implements LaddaConfigArgs {
    constructor(config: LaddaConfigArgs = {}) {
        Object.assign(this, config);
    }
}
