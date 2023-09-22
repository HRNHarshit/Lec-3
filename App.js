import react from "react";
import reactDom from "react-dom";

const Heading = react.createElement("h1", { id: "title" }, "Heading 1");
const Heading2 = react.createElement("h2", { id: "title2" }, "Heading 2");

const container = react.createElement("div", { className: "container" }, [Heading, Heading2]);

const root = reactDom.createRoot(document.getElementById("root"));
root.render(container);
