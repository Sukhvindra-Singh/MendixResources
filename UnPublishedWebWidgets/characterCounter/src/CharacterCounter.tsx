import { ReactElement, createElement, Fragment } from "react";
import { CharacterCounterContainerProps } from "../typings/CharacterCounterProps";

import "./ui/CharacterCounter.css";
import { HelloWorldSample } from "./components/HelloWorldSample";
// import { Count } from "./components/Count";

export function CharacterCounter({ MyEnum, emptyOption }: CharacterCounterContainerProps): ReactElement {
    const enumList = MyEnum.universe;
    console.log(MyEnum);
    return (
        <Fragment>
            <HelloWorldSample list={enumList!} emptyOption={emptyOption} />
        </Fragment>
    );
}
