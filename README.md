# Aryan React
# ReactElement(Object) => HTML(Browser understands)
# createElement has three Argument:
    a. html tag
    b. attribute
    c. children: 
          1. single child  
          2. multiple child=> pass as an array as below.

# npm: manages packages. it doesn't have fullform.
# npm init: 
   - create package.json file.
   - package.json: its a configuration for npm, we can see all added dependencies here.
# Bundler: 
    - most important dependencies
    e.g: Parcel(we have used this), Webpack,            
# Two types of dependencies:
     1. Dev dependencies: used during development of app
     2. Normal dependencies used during production.
# To install parcel: 
   - npm install -D parcel.
   -  -D: we used it to tell npm to provide dev dependencies.
# caret(^):
      - it will automatically update minor version. It's fine to do minor updates. 
     e.g.:  "devDependencies": {
                "parcel": "^2.11.0"
                          }
# tilde(~): it will automatically update MAJOR version.
# package-lock.json: 
  -it keeps the record of exact version installed.
  - doesn't have CARET or TILDE.
# node modules: 
  -database of dependencies.
# Transitive dependencies:
  -When a dependency e.g. parcel has dependencies and these dependencies has more dependencies.

# How many package.json a project has?
   -Ans: It depends on the dependencies installed because every package or dependencies have its own package.json.

# .gitignore: 
   -keep the files which we don't want to take to git or production
             e.g. /node_modules

# CDN links: 
    - not a preffered way to get React into a project
    - It will do network call everytime we build the project.
    - Need to update the CDN links with latest one incase of React library updates.
# parcel: list of things it does
   - To install it: npm install -D parcel
   - Here -D: dev dependency
   - Dev Build
   - Local Server
   - HMR: Hot Module Replacement => It uses file watching Algorithm- written in C++
      -This track changes in all the files and rebuilds asap changes are done.
   - Caching - Faster Builds.  data stored in: .parcel-cache
   - Image Optimization
   - For Production:  
        - Minification
        - Bundling
        - Compressing
        - Consistent Hashing: read about it
        - Code Splitting: read about it
        - Differential Bundling: support older browsers.
        - Diagnostics
        - Error Handling
        - HTTPs
        - Tree Shaking - remove unused code.
        - Different dev and prod bundles
- puts the code in "dist" folder.

# To create a prod project:
      - npx parcel build index.html
      - it will show error as: "Did you mean.."
      - Go to package.json and remove "main":  "App.js"

# To run file using parcel:
      - npx parcel index.html

#  BrowsersList:
    - Its a npm package.
    - Tell the app to be compatibile with older browsers.
    - In package.json add:
             "browserslist": [
                "last 2 versions",
            ]
   - This enable the app to work with all the browsers with last 2 versions
   - We can configure for specific browser or country as well. Find details on: https://browserslist.dev/

# JSX: 
    -  is a convention where we merge HTML and JavaScript.
    - it has HTML like or XML- like syntax.
     eg: const jsxHeading =  <h1 id="heading">Heading using JSX</h1>;
    - To write JSX in multiple lines we need to wrap it with ( ). This enables Babel to understand the start and end point of jsx written in code.
    - We need to write in camelCase e.g: className etc. unlike in HTML e.g classname

Note: Javascript(JS) engine will not understand JSX, it only understand ECMA script
    - parcel transpiled the code before  it reaches the JS engine.
    - parcel gives this task to   Babel package   to do it.
   
# Babel:
    - Babel is a Javascript compiler 
    - Babel converts the JSX code to a code which browser could understand.
    - Flow of conversion:
      JSX=>Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)
    - Babel also does transpilation of ECMA code to browser readable code.

# Extension: for better code
   - Prettier
   - ESLint
   - Bracket Pair Color

# React Element:
    - To render element: 
           root.render(heading);
# React Components:
     - Class based Component -OLD
     - Functional Component: normal JavaScript Function which return some jsx elements/react elements.
     -Always create a component starting with capital letter
     -To render component: 
           root.render(<HeadingComponent/>);

# Component Composition:
     - Compositing component in one another.
# Putting a React Component in React Component
     - put that component in <ComponentName/>
          or
     - <ComponentName><ComponentName/>
           or
     - {ComponentName()}

# {}
    -  inside {  } any javaScript code can be injected and executed.
    -  It will come down as HTML in browser.
    -  This { }  will sanitize data and prevent cross site scripting attack for us. This enables us to use API data without worrying.

# Putting a React Element in React Component
    - put that element in { }  
# Putting a React Element in React Element
     - put that element in { }  and the use it in another element




     
  




