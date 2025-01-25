import { createElement } from "react";

import { parseInlineStyle } from "@mendix/pluggable-widgets-tools";


function parentInline(node) {
    // Temporary fix, the web modeler add a containing div, to render inline we need to change it.
    if (node && node.parentElement && node.parentElement.parentElement) {
        node.parentElement.parentElement.style.display = "inline-block";
    }
}

function transformProps(props) {
    return {
        type: props.rangesliderType,
        bootstrapStyle: props.bootstrapStyle,
        className: props.className,
        clickable: false,
        style: parseInlineStyle(props.style),
        defaultValue: props.rangesliderValue ? props.rangesliderValue : "",
        value: props.valueAttribute
    };
}


export function preview(props) {
    return (
        <div ref={parentInline}>
            
        </div>
    );
}

export function getPreviewCss() {
    return require("./ui/Rangeslider.css");
}

