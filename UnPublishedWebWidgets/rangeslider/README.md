## Rangeslider
[you can define multiple color with range]

## Features
[feature highlights]

## Usage
[step by step instructions]

## Demo project
[link to sandbox]

## Issues, suggestions and feature requests
[link to GitHub issues]

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

[specify contribution]


const getGradient = (range,data) => {
  let gradient = '';
  const keys = Object.keys(range);
  const values = Object.values(range);
  const dataKeys = Object.keys(data);
  const arr = [0]
  console.log("dataKeys", dataKeys[-1]);
  for(let i=0; i<keys.length; i++){
    const total = keys.map(Number).reduce((a, b) => a + b, 0);
    const stopPercentage = (dataKeys[i+1] / total) * 100;
    arr.push(stopPercentage);
    gradient += `${values[i]} ${arr[i]}% ${stopPercentage}%, `;
  }
  // Object.entries(data).forEach(([value, color]) => {
  //   gradient += `${color} ${value}%, `;
  // });
  console.log("grad", gradient); // Log the gradient string for debugging
  return gradient.slice(0, -2); // Remove the last comma and space
};

 const onValueChange = (event) => {
    // const keys = Object.keys(data);
    // const values = Object.values(data);
    // const arr = {};
    // arr["10"] = "red";
    // let i = 0;
    // while (event >= keys[i] && i < keys.length - 1) {
    //   console.log("event", event);
    //   arr[keys[i]] = values[i];
    //   i++;
    // }
    // console.log(arr);
    // setRange(arr);
  };