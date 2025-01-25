import React, { createElement, useEffect } from 'react';
import '../ui/Rangeslider.css';
import Slider from "rc-slider";
import "rc-slider/assets/index.css";


const RangeSlider = ({ data, attributeValue, onClickAction }) => {
  const onValueChange = (event) => {
    attributeValue.setTextValue(parseFloat(event).toFixed(2));
    onClickAction()
  };
  return (
    <div>
      <Slider
        trackStyle={{ background: `transparent`, height: 10 }}
        railStyle={{ background: `linear-gradient(to right, ${getGradient(data)})`, height: 10 }}
        handleStyle={{
          borderColor: "black",
          height: 15,
          width: 15,
          marginLeft: 0,
          marginTop: -3,
          backgroundColor: "invert",
        }}
        onChange={onValueChange}
        min={0}
        max={100}
        value={attributeValue.displayValue ? attributeValue.displayValue : 0}
        step={1}
      />
    </div>
  );
};


const getGradient = (data) => {
  let gradient = '';
  const arr = ['0', ...Object.keys(data)];
  const keys = Object.keys(data);
  const values = Object.values(data);

  for (let i = 0; i < keys.length; i++) {
    gradient += `${values[i]} ${arr[i]}% ${keys[i]}%, `;
  }

  return gradient.slice(0, -2);
};
export default RangeSlider;
