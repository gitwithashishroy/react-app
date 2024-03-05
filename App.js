/***************************** Lession1. Inceptions ********************************/

//first arg : what tag you want to create
//second arg : object
//third arg  : 'what inside put in h1'

const parent = React.createElement(
    "div",
    { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag"),
    ])
]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
