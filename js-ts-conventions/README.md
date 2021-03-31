# Javascript and TypeScript Conventions
This document contains all of the Javascript conventions we want to follow as a team in this project.

# Go and Get Prettier, Setup for your IDE

We use [prettier](https://prettier.io/). We use it combined with typescript-eslint and pretty much use what comes out of the box. We do add the one-true-brace-style, force lf file endings and are more generous with our line lengths. Getting this up and running will cover a lot of coding conventions for you and avoid us having to talk about it in our code reviews.

## Confiuring VS Code to Use prettier and typescript-eslint

1. Install the `eslint` and `prettier` extensions
2. Add these to your `settings.json`:

```javascript
"editor.formatOnSave": true,
"[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
},
"[typescript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascriptreact]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
},
"[typescriptreact]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
},
"eslint.workingDirectories": [
    {
        "directory": "./canadahelps",
        "changeProcessCWD": true
    }
],
"eslint.autoFixOnSave": true,
"eslint.validate": [
    "javascript",
    "javascriptreact",
    {
        "language": "typescript",
        "autoFix": true
    },
    {
        "language": "typescriptreact",
        "autoFix": true
    }
]
```

3. Nuke your `candahelps/node_modules` and `npm i`
4. Enjoy!

# String manipulation
## Manipulation

Use ES6 string templates `` `${variableName} says "Hello!"` `` instead of `variableName + "says \"Hello!\""`

## Converting a String into a number
There are many ways to convert a string into a number in JS. Please use:
`Number.parseInt(string, 10)` or `Number.parseFloat(string)`

# Number manipulation
## Checking is not a number (isNaN)

Please use: `Number.isNaN(value)`


# Array manipulation
## Iterating through an Array
When you need to iterate through an Array please avoid using `for loops`. Instead use the methods provided by JS: `map`, `reduce`, `forEach`, `every`, `find`, etc.

```
// Instead of doing
for (let item of itemsArray) {
  // do something
}

// Do
itemsArray.map(item => {
  // do something
});
```

Please make sure to use the right method for the right purpose (i.e. `map` should be used when iterating over an array
and applying a function to each index in order to return a new array). Please take
a look at [MDN Array Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) to
 find out more about each of these methods.


# Functions
## Declaring Functions

* For the most part we can get a way with just using `const arrowFunctions = () => {}`. This allows us to avoid using `this` and is shorter.
* Keep the number of arguments to no more than 3 and in most cases using a parameter object instead (just like props in React)
* destructure your parameter objects unless you are just passing them wholesale to another component, function or process down the call chain.


# Use Named Exports

Try as much as possible to avoid exporting defaults as it confuses TypeScript and makes our developer experience more annoying.

# Variables
## Naming conventions
Our convention is to use `camelCase` for variable and function names.

## Using `const` and `let`
Since we are using ES6 standards, please use `const` or `let` instead of `var` to declare a variable. Make sure to use `const` when the value does not change and `let` when the value changes. (Most of the time `const` is the right answer).

# Don't Use ES6 classes
Classes are just syntactic sugar over prototypes. Neither are worth the brittle inheritance chains and shared mutable state they end up promoting. Now that we have hooks available to us in React there isn't really a need for either. It also means we don't use `this` as well. [Removing JavaScript’s “this” keyword makes it a better language.](https://www.freecodecamp.org/news/removing-javascripts-this-keyword-makes-it-a-better-language-here-s-why-db28060cc086/)

Use composition and higher order ("factory") functions instead.

More reading: (https://github.com/GrosSacASac/JavaScript-Set-Up/blob/master/js/red-javascript-style-guide/why-disallow-class.md)

# Object Composition Functions
Here is an example of an object composition function. [Watch this talk given by Douglas Crockford](https://youtu.be/PSGEjv3Tqo0?t=1291) to learn more.

```
const createSomeObject = spec => {
  let { otherModulesMember, anotherMember } = anotherObjectCreatorFunction({foo: "bar"});
  let doSomething = () => { console.log(spec.message); };
  return {
    doeSomething
  };
};

myObject = createSomeObject();
myObject.doSomething();
```
Notice that in the above function we are not using the `new` keyword to instantiate an instance of the class and we aren't using Object.create. This is how we can start to wean ourselves off of `this`. 

# CSS-in-JS

We don't mix CSS into our JS, use the style attribute in our HTML/JSX or add style blocks. CSS belongs, for now, in our CSS/SCSS files.
