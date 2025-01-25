import { createElement, useEffect, useState } from "react";
import "./ui/SimpleInputBox.css";
import classNames from "classnames";

export function SimpleInputBox(props) {
    const [currentInput, setCurrentInput] = useState("");
    async function callMicroflow(eVal) {
        props.InputValue.setTextValue(eVal);
        if (props.onChange && props.onChange.canExecute) {
            props.onChange.execute();
        }
    }
    const handleChange = e => {
        setCurrentInput(e.target.value);
        setTimeout(() => {
            callMicroflow(e.target.value);
            clearTimeout();
        }, 300);
    };
    const handleFocus = event => event.target.select();

    const handleFocusOut = () => {
        if (props.onLeave && props.onLeave.canExecute) {
            props.onLeave.execute();
        }
    };

    useEffect(() => {
        setCurrentInput(props.InputValue.displayValue);
    }, [props.InputValue]);

    return (
        <div className={classNames(props.class, "simple-input-box-container")} style={props.style}>
            <label className="simple-input-box-label">{props.label}</label>
            <input
                type={props.inputtype}
                className="simple-input-box"
                placeholder={props.placeholdertext}
                value={currentInput}
                onFocus={e => {
                    handleFocus(e);
                }}
                onBlur={e => {
                    handleFocusOut(e);
                }}
                onChange={e => {
                    handleChange(e);
                }}
            />
        </div>
    );
}
