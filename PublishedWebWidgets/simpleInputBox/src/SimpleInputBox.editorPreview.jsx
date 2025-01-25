import { Component, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

export class preview extends Component {
    render() {
        return <HelloWorldSample sampleText={this.props.placeholdertext} />;
    }
}

export function getPreviewCss() {
    return require("./ui/SimpleInputBox.css");
}
