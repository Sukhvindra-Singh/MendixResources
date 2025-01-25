/**
 * This file was generated from LocationPicker.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";
import { Big } from "big.js";

export type MapFunctionTypeEnum = "show" | "pick";

export interface LocationPickerProps<Style> {
    name: string;
    style: Style[];
    mapFunctionType: MapFunctionTypeEnum;
    lat: EditableValue<Big | string>;
    long: EditableValue<Big | string>;
    OnChange?: ActionValue;
}

export interface LocationPickerPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode?: "design" | "xray" | "structure";
    mapFunctionType: MapFunctionTypeEnum;
    lat: string;
    long: string;
    OnChange: {} | null;
}
