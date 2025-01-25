import React, { useEffect, useRef, createElement } from "react";
import MeeterSvg from "./MeeterSvg";
import "./Meeter.css";
const Meeter = ({ TempValue, lowerBound, upperBound }) => {
    const NeedleRef = useRef(null);
    const [ans,setAns] = React.useState(0);
    
    useEffect(() => {
        let Diff = parseInt(upperBound) - parseInt(lowerBound);
        let times = 180/Diff;
        let minus = (Diff * times)/2;
        let label = (parseInt(TempValue)-parseInt(lowerBound))/(parseInt(upperBound) - parseInt(lowerBound)) * 100;
        setAns(label);
        let draw = times*TempValue - (lowerBound * times);
        if (NeedleRef.current) {
            NeedleRef.current.style.transform = `rotate(${-minus + draw}deg)`;
        }
    }, [TempValue]);
    return (
        <>
            <div className="TemperatureMeeter">
                <div className="MeeterDoughnut">
                    <MeeterSvg />
                    <div className="needle" ref={NeedleRef}>
                        <div className="triable-left"></div>
                        <div className="triable-right"></div>
                        <div className="circle"></div>
                    </div>
                </div>
                <div className="ValueContainer">
                    <span className="Bound">{lowerBound}</span>
                    <span className="Percentage">{ans}%</span>
                    <span className="Bound">{upperBound}</span>
                </div>
            </div>
        </>
    );
};

export default Meeter;
