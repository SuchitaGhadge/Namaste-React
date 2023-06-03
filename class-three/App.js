import React from "react";
import ReactDOM from "react-dom/client";

// React.CreateElement => React Element => JS Object => HTML Element(Render)
const heading = React.createElement("h1", {class: "heading"}, "Namaste React 🚀")

console.log("heading", heading)

const root = ReactDOM.createRoot(document.getElementById("root"));

// JSX - HTML like or XML like syntax
// JSX => Babel transpiles it to React.CreateElement => React Element => JS Object => HTML Element(Render)
const jsxheading = <h1 className="heading">Namaste React 🚀 using JSX</h1> 
console.log("jsxheading", jsxheading)
root.render(jsxheading)

// npx parcel index.html --https   == for build local on https instead of http