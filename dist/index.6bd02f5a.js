const Heading = React.createElement("h1", {
    id: "title"
}, "Heading 1");
const Heading2 = React.createElement("h2", {
    id: "title2"
}, "Heading 2");
const container = React.createElement("div", {
    className: "container"
}, [
    Heading,
    Heading2
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

//# sourceMappingURL=index.6bd02f5a.js.map
