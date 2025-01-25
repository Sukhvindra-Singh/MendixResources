/**
 * This file was generated from CustomImageViewer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue, NativeImage } from "mendix";

export type ImageTypeEnum = "url" | "base64" | "image";

export interface CustomImageViewerProps<Style> {
    name: string;
    style: Style[];
    imageType: ImageTypeEnum;
    imageUrl: DynamicValue<string>;
    Base64Content: DynamicValue<string>;
    extention: DynamicValue<string>;
    bgImage?: DynamicValue<NativeImage>;
    defaultURL?: DynamicValue<string>;
}

export interface CustomImageViewerPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode?: "design" | "xray" | "structure";
    imageType: ImageTypeEnum;
    imageUrl: string;
    Base64Content: string;
    extention: string;
    bgImage: { type: "static"; imageUrl: string; } | { type: "dynamic"; entity: string; } | null;
    defaultURL: string;
}
