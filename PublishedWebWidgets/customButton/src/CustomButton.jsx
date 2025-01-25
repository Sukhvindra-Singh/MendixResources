import { Component, createElement } from "react";
import classNames from "classnames";
import "./ui/CustomButton.css";

export default class CustomButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: this.props.buttonstyle
        };
    }
    render() {
        const handleClick = () => {
            if (this.props.buttonAction && this.props.buttonAction.canExecute) {
                this.props.buttonAction.execute();
            }
        };
        const buttonStyle = this.props.buttonstyle === "default" ? "btn-default" : "btn-primary";
        console.log("props", this.props);
        if (this.props.rendermode === "button") {
            return (
                <button
                    onClick={() => handleClick()}
                    className={classNames(this.props.class, buttonStyle,"custom-button")}
                    style={this.props.style}
                    type="button"
                >
                    {this.props.cardIcon.value.type === "glyph" && <span class={`glyphicon ${this.props.cardIcon.value.iconClass}`} aria-hidden="true"></span>}
                    {this.props.cardIcon.value.type === "image" && <img src={this.props.cardIcon.value.iconUrl} alt="icon" className="button-img"/>}
                    {this.props.caption.value}
                </button>
            );
        } else {
            return(<a
                onClick={() => handleClick()}
                className={classNames(this.props.class, buttonStyle)}
                style={this.props.style}
            >
                {this.props.cardIcon.value.type === "glyph" && <span class={`glyphicon ${this.props.cardIcon.value.iconClass}`} aria-hidden="true"></span>}
                {this.props.cardIcon.value.type === "image" && <img src={this.props.cardIcon.value.iconUrl} alt="icon" className="button-img"/>}
                {this.props.caption.value}
            </a>);
        }
    }
}
