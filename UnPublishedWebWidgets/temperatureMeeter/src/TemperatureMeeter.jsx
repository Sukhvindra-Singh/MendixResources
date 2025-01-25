import { createElement } from "react";

import "./ui/TemperatureMeeter.css";
import Meeter from "./components/Meeter";

export function TemperatureMeeter(props) {
    const { valueAttribute, lowerBound, upperBound } = props;
    return <Meeter TempValue={valueAttribute.displayValue} lowerBound={lowerBound.displayValue} upperBound={upperBound.displayValue} />;
}
