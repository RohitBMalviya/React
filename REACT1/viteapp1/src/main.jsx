import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const customElement = <a href="https://www.google.com">hello</a>;
const reactElement = React.createElement(
  "a",
  {
    href: "https://www.google.com",
    target: "_blank",
  },
  "hello"
);
ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
