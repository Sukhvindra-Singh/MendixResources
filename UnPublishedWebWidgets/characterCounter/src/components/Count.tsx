import { ReactElement, createElement, ReactNode, useRef, useEffect, useState } from "react";
export interface CountProps {
    content?: ReactNode;
    limit: number;
}

export function Count({ content, limit }: CountProps): ReactElement {
    const myContainerRef = useRef<HTMLDivElement>(null);

    const [currentInput, setCurrentInput] = useState<string>("");
    const onInputChange = (e: Event): void => {
        if (e) {
            setCurrentInput((e.target as HTMLInputElement).value);
        }
    };

    useEffect(() => {
        let eventListener: Element;
        if (myContainerRef.current) {
            const inputElements = myContainerRef.current.querySelectorAll("input");
            if (inputElements.length) {
                eventListener = inputElements[0];
                eventListener.addEventListener("input", onInputChange);
            }
        }

        return () => {
            eventListener.removeEventListener("input", onInputChange);
        };
    }, [myContainerRef]);

    const charLimitStyles = (): string => {
        const charLength = currentInput.length;
        const charLimit = limit ? limit : 0;
        if (charLength > charLimit * 0.8) {
            return "character_counter_80_percent";
        } else if (charLength > charLimit * 0.6) {
            return "character_counter_60_percent";
        }
        return "";
    };

    return (
        <div className={`${charLimitStyles()} character_counter`}>
            <div ref={myContainerRef} style={{ border: "1px solid red" }}>
                {content}
            </div>
            <span>
                {currentInput.length} / {limit}
            </span>
        </div>
    );
}
