import { createElement, useCallback, useEffect, useState } from "react";

import RangeSlider from "./components/RangeSlider";
import "./ui/Rangeslider.css";

export function Rangeslider(props) {
    const { rangesliderType, rangesliderValue, valueAttribute, onClickAction, style, bootstrapStyle, attributeValue } = props;
    const [value, setValue] = useState({});
    const onClickHandler = useCallback(() => {
        if (onClickAction && onClickAction.canExecute) {
            onClickAction.execute();
        }
    }, [onClickAction]);
    useEffect(() => {
        try {
            setValue(JSON.parse(valueAttribute.displayValue))
        } catch (e) {
            console.log(e)
        }
    }, [valueAttribute.status])
    return (
        <RangeSlider
            type={rangesliderType}
            bootstrapStyle={bootstrapStyle}
            className={props.class}
            clickable={!!onClickAction}
            defaultValue={rangesliderValue ? rangesliderValue : ""}
            onClickAction={onClickHandler}
            style={style}
            data={value}
            attributeValue={attributeValue}
        />
    );
}
