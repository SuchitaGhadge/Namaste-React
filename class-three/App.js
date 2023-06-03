import React from "react";
import ReactDOM from "react-dom/client";

// React.CreateElement => React Element => JS Object => HTML Element(Render)
const heading = React.createElement("h1", {class: "heading"}, "Namaste React 🚀")

console.log("heading", heading)

// JSX - HTML like or XML like syntax
// JSX => Babel transpiles it to React.CreateElement => React Element => JS Object => HTML Element(Render)
const jsxheading = <h1 className="heading">Namaste React 🚀 using JSX</h1> 
console.log("jsxheading", jsxheading)

const Title = () => (<h1 className="heading">Namaste React 🚀 using Component</h1>)

const HeadingComponent = () => {
    return (
        <div>
        {jsxheading}
        <Title />
        <h1>Namaste React Functional Component</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>)

// npx parcel index.html --https   == for build local on https instead of http