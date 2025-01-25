import { createElement } from "react";

import { parseInlineStyle } from "@mendix/pluggable-widgets-tools";

import Meeter from "./components/Meeter";

function parentInline(node) {
    // Temporary fix, the web modeler add a containing div, to render inline we need to change it.
    if (node && node.parentElement && node.parentElement.parentElement) {
        node.parentElement.parentElement.style.display = "inline-block";
    }
}

function transformProps(props) {
    return {
        TempValue: props.valueAttribute,
        lowerBound: props.lowerBound,
        upperBound: props.upperBound,
    };
}

export function preview(props) {
    return (
        <div ref={parentInline}>
            <Meeter {...transformProps(props)}/>
        </div>
    );
}

export function getPreviewCss() {
    return require("./components/Meeter.css");
}
