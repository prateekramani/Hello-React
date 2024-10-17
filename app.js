

// creating a nested structure, passing multiple children 

const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
        "div",
        { id: "child1" },
        [React.createElement("h1", {}, "I am an H1 tag"), React.createElement("h2", {}, "I am an H2 tag")]
    ),
    React.createElement(
        "div",
        { id: "child2" },
        [React.createElement("h1", {}, "I am an H1 tag"), React.createElement("h2", {}, "I am an H2 tag")]
    )
    ]
);

console.log(parent)


// creatin a Tag in React
const heading = React.createElement("h1", { id: 'heading' }, "Hello World from React")
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

root.render(parent)


// The above code looks ugly , to imporve this we have JSX