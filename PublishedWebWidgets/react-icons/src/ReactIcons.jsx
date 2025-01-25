import React, { Component, createElement, useState } from "react";
import "./ui/ReactIcons.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import Tab from "./components/Tab";

const iconList = Object.keys(Icons).filter(key => key !== "fas" && key !== "prefix").map(icon => Icons[icon]);
library.add(...iconList);

export default class ReactIcons extends Component {
    render() {
        return <Tab icon={this.props.iconname} style={this.props.style} class={this.props.class} size={this.props.size} color={this.props.color}/>;
    }
}
