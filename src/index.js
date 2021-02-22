import React from "react";
import ReactDOM from "react-dom";

const element = <h1>Hello World</h1>;

console.log(element);

//TO render in orogonal dom, pass the element as first param and sencond param as where it shud be rendered

ReactDOM.render(element, document.getElementById("root"));
