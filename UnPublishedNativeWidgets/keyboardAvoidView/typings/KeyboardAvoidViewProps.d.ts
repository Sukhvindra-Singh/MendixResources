/**
 * This file was generated from KeyboardAvoidView.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";

export interface KeyboardAvoidViewProps<Style> {
    name: string;
    style: Style[];
    paddingAndroid: number;
    paddingIOS: number;
    Content: ReactNode;
}

export interface KeyboardAvoidViewPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    paddingAndroid: number | null;
    paddingIOS: number | null;
    Content: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
}
