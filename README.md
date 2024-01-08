# Aryan React
# push 1 ttest
// ReactElement(Object) => HTML(Browser understands)
//createElement has three Argument"
   // a. html tag
   // b. attribute
   // c. children: 1. single child  
   //              2. multiple child=> pass as an array as below.

// npm: manages packages. it doesn't have fullform.
// npm init: create package.json file.
              //package.json: its a configuration for npm, we can see all added dependencies here.
// Bundler: most important dependencies
      // e.g: Parcel(we have used this), Webpack,            
// Two types of dependencies:
     //     1. Dev dependencies: used during development of app
     //     2. Normal dependencies used during production.
// To install parcel: npm install -D parcel.
             //-D: we used it to tell npm to provide dev dependencies.
// caret(^): it will automatically update minor version. It's fine to do minor updates. 
//         e.g.:  "devDependencies": {
//                "parcel": "^2.11.0"
//                      }
// tilde(~): it will automatically update MAJOR version.
// package-lock.json: it keeps the record of exact version installed.
                // doesn't have CARET or TILDE.
// node modules: database of dependencies.
// Transitive dependencies: When a dependency e.g. parcel has dependencies and these dependencies has more dependencies.

// How many package.json a project has?
   //Ans: It depends on the dependencies installed 
        // because every package or dependencies have its own package.json.

// .gitignore: keep the files which we don't want to take to git or production
             e.g. /node_modules

             