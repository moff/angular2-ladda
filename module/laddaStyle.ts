import { OpaqueToken } from "@angular/core";

export interface LaddaStyle {
    style?: string;
    spinnerSize?: number;
    spinnerColor?: string;
    spinnerLines?: number;
}

export const LADDA_STYLE = new OpaqueToken('ladda_style');
