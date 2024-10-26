import React from "react";
import ReactDOM from "react-dom/client";
// creating a nested structure, passing multiple children

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an H1 tag"),
    React.createElement("h2", {}, "I am an H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an H1 tag"),
    React.createElement("h2", {}, "I am an H2 tag"),
  ]),
]);

console.log(parent);

// creatin a Tag in React
// React.createElement gives us a React Element (Object) => HTML Element via render
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React 🚀"
);
console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)
// root.render(parent)

// The above code looks ugly , to imporve this we have JSX



// JSX - HTML or XML like syntax
// JSX - Babel transpiled before it reaches the JS engine - transpiled by Parcel - Babel
// JSX => React.createElement => which gives us a React Element (Object) => HTML Element via render

// const jsxHeading  = <h1 className="heading">Namaste React using Jsx 🚀</h1> // single line
// multiple
// React Element
const jsxHeading = (
    <h1 className="heading">
        Namaste React using Jsx 🚀
    </h1>);

console.log(jsxHeading);
// same as heading object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);




// React Functional Component
// starts with capital letter
const TitleCompnent = ()=> <h1 className="heading">Namaste React Functional Component- Title</h1>

// can be written as a normal function as well not just arrow function
// const TitleCompnent = function() {
//     return <h1 className="heading">Namaste React Functional Component- Title</h1>
// }

var number = 1000
const elem = (
<span> 
    React Element from Span
    <TitleCompnent/>
</span>)
// since this is jsx, we can write anythin inside it via {}
// also we can call a functional component from here (from inside a element)


const HeadingComponent2 = ()=> {
return  (<div id="container">
    <h2>{number+200}</h2> 
    {console.log("even console log works here, if put inside curly braces")}
    {heading} 
    {elem}
    {jsxHeading}
    <TitleCompnent/>
    above and below lines are same 
    <TitleCompnent> </TitleCompnent>
    this is also same 
    {TitleCompnent()}
    <h1 className="heading">Namaste React Functional Component - HeadingComponent2 </h1>
</div>)
}
// Functioanal Component inside another Functional Component
// This is component composition

// if we put curly braces inside jsx , we can write any js script inside it
// even we can put react elements inside it 

// notice the only differnce b/w React Element and React functional component is that second one is functional with capital letter
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />) // example of embedding JS vars, React Element , Functional Component -> 3 ways of calling it)
// root.render(elem) // example of embedding functional component inside a React element