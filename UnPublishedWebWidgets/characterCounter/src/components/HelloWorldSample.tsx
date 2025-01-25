import { useState, ReactElement, createElement } from "react";
import "./Dropdown.css";

export interface HelloWorldSampleProps {
    list: string[];
    emptyOption: string;
}

export function HelloWorldSample({ list, emptyOption }: HelloWorldSampleProps): ReactElement {
    const [selected, setSelected] = useState(emptyOption || list[0]);

    const [dropdown_item, setDropdown_item] = useState(true);

    const handleOptionShowHide = (): void => {
        setDropdown_item(!dropdown_item);
    };
    const handleOptionClick = (label: string): void => {
        setSelected(label);
        setDropdown_item(!dropdown_item);
    };
    return (
        <div className="dropdown">
            <div style={{ position: "relative", width: "100%" }}>
                <input
                    type="text"
                    placeholder=""
                    className="dropdown-input"
                    value={selected}
                    readOnly
                    onClick={() => handleOptionShowHide()}
                />
                <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    onClick={() => handleOptionShowHide()}
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                    <g id="SVGRepo_iconCarrier">
                        {" "}
                        <rect x="0" fill="none" width="24" height="24" />{" "}
                        <g>
                            {" "}
                            <path d="M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586" />{" "}
                        </g>{" "}
                    </g>
                </svg>
            </div>

            <div className={dropdown_item ? "dropdown-item-hide" : "dropdown-item-show"}>
                {list.map((item, index) => (
                    <div className="dropdown-item" key={index} onClick={() => handleOptionClick(item)}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}
