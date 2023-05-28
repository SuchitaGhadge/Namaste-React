import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement(
    "h1",
    {
        id : "title"
    },
    "Heading 1"
);

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log("root", root);
root.render(heading)

// npx parcel index.html --https   == for build local on https instead of http