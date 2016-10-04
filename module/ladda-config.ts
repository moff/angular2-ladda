import { OpaqueToken } from "@angular/core";

export interface LaddaConfig {
    style?: string;
    spinnerSize?: number;
    spinnerColor?: string;
    spinnerLines?: number;
}

export const LADDA_CONFIG = new OpaqueToken('ladda.config');
