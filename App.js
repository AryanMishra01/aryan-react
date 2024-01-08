//  using React to print hello world
// const heading = React.createElement(
//     "h1", 
//     {id: "heading"} , 
//     "Hello World from React!"
//     )
// console.log(heading) //object
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading);

// ReactElement(Object) => HTML(Browser understands)
//createElement has three Argument"
   // a. html tag
   // b. attribute
   // c. children: 1. single child  
   //              2. multiple child=> pass as an array as below.

const heading = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement("div",{id:"child"},[
        React.createElement("h1", {id: "heading1"}, "This is H1 tag"),
        React.createElement("h2", {id: "heading2"}, "This is H2 tag")
]),
React.createElement("div", {id: "child2"},[
React.createElement("h1", {id: "heading1"}, "This is H1 tag"),
React.createElement("h2", {id: "heading2"}, "This is H2 tag")
]),
    ]);

    // Since above way is very tds and hard to track the structure
    // we will use JSX which will simplfy this code.
const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(heading);