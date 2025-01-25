/**
 * This file was generated from ListviewTwo.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { ListValue, ListWidgetValue } from "mendix";

export interface ListviewTwoProps<Style> {
    name: string;
    style: Style[];
    pagesize: number;
    dataSource: ListValue;
    content: ListWidgetValue;
    footercontent?: ReactNode;
}

export interface ListviewTwoPreviewProps {
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
    pagesize: number | null;
    dataSource: {} | { caption: string } | { type: string } | null;
    content: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    footercontent: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
}
