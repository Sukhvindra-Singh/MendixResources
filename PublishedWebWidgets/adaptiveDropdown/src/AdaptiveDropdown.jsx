import {createElement, Fragment, useState } from "react";
import "./ui/AdaptiveDropdown.css"

export function AdaptiveDropdown (props){
    const [selected, setSelected] = useState(props.emptyOption);
    const [dropdown_item, setDropdown_item] = useState(true);

    try {
        const { items } = props.objectsDatasource;
        var list = items.map(
            (item, index) => item[Object.getOwnPropertySymbols(item)[0]].jsonData.attributes.Name.value
        );
    } catch (e) {
        console.log("error", e);
    }

    const handleOptionShowHide = () => {
        setDropdown_item(!dropdown_item);
    };
    const handleOptionClick = label => {
        setSelected(label);
        setDropdown_item(!dropdown_item);
        props.selectableValues.setTextValue(label);
    
        if(props.onChange && props.onChange.canExecute){
            props.onChange.execute();
        }
    };
    return (
        <Fragment>
            <div className="dropdown">
                <div>
                    <input
                        type="text"
                        placeholder={props.emptyOption}
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
                    {list && list.map((item, index) => (
                        <div className="dropdown-item" key={index} onClick={() => handleOptionClick(item)}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

// export default CustomizableDropdown;

// Print Symbol values in javascript
//    const myObj = items[0];
//    const k1 = myObj[Object.getOwnPropertySymbols(myObj)[0]];
//    console.log("k1",k1.jsonData.attributes.Name.value);
