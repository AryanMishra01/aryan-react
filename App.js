//  using React to print hello world
// const heading = React.createElement(
//     "h1", 
//     {id: "heading"} , 
//     "Hello World from React!"
//     )
// console.log(heading) //object
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading);

import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//     "div",
//     {id:"parent"},
//     [React.createElement("div",{id:"child"},[
//         React.createElement("h1", {id: "heading1"}, "This is Aryan!"),
//         React.createElement("h2", {id: "heading2"}, "This is H2 tag")
// ]),
// React.createElement("div", {id: "child2"},[
// React.createElement("h1", {id: "heading1"}, "This is H1 tag"),
// React.createElement("h2", {id: "heading2"}, "This is H2 tag")
// ]),
//     ]);

    // Since above way is very tds and hard to track the structure
   
    // we will use JSX which will simplfy this code.
      //FLOW=> 
          // JSX=>React.createElement => ReactElement-JS Object => HTMLElement(render)  
//const jsxHeading = <h1 id="heading" className="head">Heading using JSX</h1>;

//React Element
// const heading = () => {
//     <h1 className="head" >React element</h1>
// }

//React Functional Components:
// const HeadingComponent = () => {
//     return <h1 className="heading">Functional Component</h1>
// }
const Title = () => (
    <h1 className="head" tabIndex="1"> Title Component </h1>
)

//React Element
const title = (
    <h1 className="head" tabIndex="1"> Title Element </h1>
)


// we can also write fucntions as below, but prefered is arrow function as above.
// const Title2 = function() {
//     <h1 className="head" tabIndex="1"> Title Component </h1>
// }

//component composition is rendering one component to another like below:
const HeadingComponent = () => (
    <div id="container">
        <Title/> 
      {title}
     <h1 className="head"> Functional Component </h1>
    
     </div>
)
 // or we can write withou return keyword:
 //example:
 //const fn = () => true
 //const fn2 = () => {
   // return true;
 //}
const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent/>);