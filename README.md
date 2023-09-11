<h1 id="javascript">JavaScript :man_technologist:</h1>

<img src="assets/javascript.png" align="left" alt="JavaScript Logo" width="100"/>

Now that we are proficient in both **HTML** and **CSS**, we can move on to the next step in our journey, **JavaScript**!

As we have learned in previous guides (or at least I hope you did), **JavaScript** is a programming language that is used to add functionality to websites. It is also used in other environments, but right now we will focus on its use in **Client-side (website)** development.

<h2 id="table-of-contents">:scroll: Table of Contents</h2>

- [JavaScript :man_technologist:](#javascript)
  - [:scroll: Table of Contents](#table-of-contents)
  - [:books: Resources](#resources)
  - [:clipboard: Topics](#topics)
  - [:bulb: Tips and Tricks](#tips-and-tricks)
    - [:pushpin: Use ES6 Modules](#use-es6-modules)
    - [:pushpin: Use <code>const</code> and <code>let</code> instead of <code>var</code>](#use-const-and-let-instead-of-var)
    - [:pushpin: Use <code>const</code> by default](#use-const-by-default)
    - [:pushpin: Use Template literals instead of string concatenation](#use-template-literals)
    - [:pushpin: Use Arrow functions instead of regular functions](#use-arrow-functions)
    - [:pushpin: Don't use <code>onload</code>](#no-onload)
    - [:pushpin: Use <code>===</code> instead of <code>==</code>](#use-strict-equality)
    - [:pushpin: Understand <code>this</code>](#understand-this)
    - [:pushpin: Use <code>for of</code> instead of <code>for in</code> to iterate over object properties](#use-for-of-for-object-iteration)
    - [:pushpin: Use built-in array methods](#use-array-methods)
    - [:pushpin: Use destructuring](#use-destructuring)
    - [:pushpin: Use the spread operator](#use-the-spread-operator)
    - [:pushpin: Use Modules instead of Static Classes](#use-modules-instead-of-static-classes)
    - [:pushpin: Use code formatters and linters](#use-code-formatters-and-linters)
    - [:pushpin: ★ JavaScript under the hood](#javascript-under-the-hood)
  - [:dart: Assignments](#assignments)

<h2 id="resources">:books: Resources</h2>

Learning **JavaScript** will be a bit more challenging than our previous guides. The reason being that JavaScript as a **programming language** has a lot more concepts and features than HTML and CSS. Hence to make our experience learning **JavaScript** as smooth as possible, provided below are a few different resources you can use to learn from. The choice will be yours to make, depending on your learning style and preferences.

- [JavaScript — Dynamic client-side scripting](https://developer.mozilla.org/en-US/docs/Web/JavaScript) from the MDN Web Docs. This is the same resource we used for **HTML** and **CSS**, and it is a great resource for learning **JavaScript** as well. It will cover all the topics we need for this guide, and more.

- [The Modern JavaScript Tutorial](https://javascript.info/) is another great resource for learning **JavaScript**. It is a little bit more in depth than the MDN Web Docs, and it also covers more topics. It is also a great resource for future reference. I recommend using this resource if you want to take your time and dive deeper into the language.

- [Learn JavaScript - Full Course for Beginners](https://www.youtube.com/watch?v=PkZNo7MFNFg&ab_channel=freeCodeCamp.org) is a great video tutorial for learning **JavaScript**. It does not go as much in depth as the previous resources, but it is a great resource for those of you who prefer video tutorials. It will get you up to speed with all of the basics, so that completing [**topics**](#topics) listed below will not be a problem.

★ *Even though I highly recommend using the above resources, feel free to use any other resource you find online. Just make sure it is up to date and covers the [**topics**](#topics) listed below.*

<h2 id="topics">:clipboard: Topics</h2>

- Camel case
- Variables
- Basic operators
- Data types
- Conditionals
  - if else statements
  - switch statements
  - ternary operator
- Strings
  - String literals
  - String Operators
  - Template literals (Template strings, **very very useful**)
  - String methods (**very important and useful**, make sure you understand them)
    - length
    - charAt
    - includes
    - replace
    - slice
    - split
    - match
    - substring
- Objects
  - Object literals
  - Object destructuring (**very useful**, make sure you understand it)
  - Spread operator (**very useful**, make sure you understand it)
  - this keyword
  - Object methods
    - keys
    - values
    - entries
    - hasOwnProperty
    - fromEntries
    - assign
- Arrays
  - Array literals
  - Array destructuring (**very useful**, make sure you understand it)
  - Spread operator (**very useful**, make sure you understand it)
  - Array methods (**very important and useful**, make sure you understand them)
    - push
    - pop
    - shift
    - unshift
    - splice
    - slice
    - indexOf
    - includes
    - find
    - filter
    - map
    - reduce
    - forEach
    - some
    - every
    - sort
    - reverse
    - concat
    - join
- Loops
  - for loops
  - while loops
  - do while loops
- Functions
  - Function declaration
  - Arrow functions (**very important**, make sure you understand the difference between arrow functions and regular functions)
  - Parameters
  - Higher order functions
  - Recursion (important to understand, but no need to dive too deep into it)
- Classes
  - Functional languages vs Object oriented languages
  - Class declaration
  - Class inheritance
  - Constructor
  - Class methods
  - Static methods
  - Getters and setters
  - Private fields
  - Private methods
- Truthy and falsy values
- Math library
- Date library
- Console object
- Regular expressions (very useful tool, ★ dive deep if you have the time)
- Error handling
  - Error object
  - Custom errors
  - try catch
  - throw
  - finally
- DOM manipulation
  - Selecting elements
  - Creating elements
  - Modifying elements
  - Removing elements
  - Event listeners
  - Timeouts
  - Intervals
  - window object
  - document object
  - location object
- Local storage
- Cookies
- Modules
  - require
  - module.exports
  - import
  - export

★ *Feel free to search the MDN Web Docs or other resources for more information on any of the topics.*

<h2 id="tips-and-tricks">:bulb: Tips and Tricks</h2>

As someone who has written his fair share of **JavaScript** code, I have accumulated a few tips and tricks for writing better code. I will list them here, and I recommend you read them and try to apply them in your code.

<h3 id="use-es6-modules">:pushpin: Use ES6 Modules</h3>

Use es6 modules instead of commonjs modules. They are easier to use and more intuitive. Load them via the `import` keyword in a script or inline by using `<script type="module">`.

<h3 id="use-const-and-let-instead-of-var">:pushpin: Use <code>const</code> and <code>let</code> instead of <code>var</code></h3>

`var` is deprecated. Use `const` and `let`, they are block scoped, which will make your code much easier to understand and debug.

<h3 id="use-const-by-default">:pushpin: Use <code>const</code> by default</h3>

Use `const` by default. Only if you know that the value of a variable will change, use `let`. This will help you avoid accidental reassignments and make your code easier to understand.

<h3 id="use-template-literals">:pushpin: Use Template literals instead of string concatenation</h3>

**Template literals** are easier to use and look much cleaner than **String concatenation**.

```javascript
const name = "John";
const age = 20;

// String concatenation
const bad = "Hello, my name is " + name + " and I am " + age + " years old.";

// Template literals
const good = `Hello, my name is ${name} and I am ${age} years old.`;
```

<h3 id="use-arrow-functions">:pushpin: Use Arrow functions instead of regular functions</h3>

**Arrow functions** are a newer feature of the language and have a few differences from regular functions. These differences make them the better choice in most cases. (I highly recommend you read about the differences between arrow functions and regular functions, if you haven't already. [Here](https://betterprogramming.pub/difference-between-regular-functions-and-arrow-functions-f65639aba256) is a good comparison).

<h3 id="no-onload">:pushpin: Don't use <code>onload</code></h3>

You don't need `onload`! Lots of 20yr old pages use HTML like:

```html
<body onload="someFunction()">
```

That style is deprecated. Put your scripts at the bottom of the page.

```html
<html>
  <head>
    ...
  </head>
  <body>
     ...
  </body>
  <script>
    ... // your code here
  </script>
</html>
```

<h3 id="use-strict-equality">:pushpin: Use <code>===</code> instead of <code>==</code></h3>

The `==` operator performs a **loose equality** comparison that performs **type coercion** if necessary to make the comparison possible. While the `===` operator, on the other hand, performs a **strict equality** comparison that does not perform **type coercion** and requires the operands to have the same type. We almost never want **type coercion**, since comparing different types can lead to unexpected results, and usually is an indication of an error in our code.

<h3 id="understand-this">:pushpin: Understand <code>this</code></h3>

The `this` keyword is one of the most confusing parts of **JavaScript**. It is a very important concept, and you should make sure you understand it.

`this` is not magic. It's effectively a variable that is automatically passed to functions just like arguments are. The value of `this` depends on how the function is called. If a function `func` is called like this:

```javascript
func(a, b, c);
```

The value of `this` inside `func` will be the global object (`window` in the browser, or `null` in strict mode). If `func` is called via the dot notation like this:

```javascript
obj.func(a, b, c);
```

The value of `this` inside `func` will be `obj`. If `func` is called as a constructor like this:

```javascript
new func(a, b, c);
```

The value of `this` inside `func` will be the newly created object. If `func` is called as a DOM event handler like this:

```javascript
document.body.addEventListener("click", func);
```

The value of `this` inside `func` will be the body element.

The confusing part comes when we deal with callbacks. For example the following code:

```javascript
const callback = obj.func;
otherFunc(callback);
```

Will not work as we might expect. The value of `this` inside `callback` will be the global object, not `obj`. This is because `otherFunc` is not calling `callback` via the dot notation, but rather like this:

```javascript
callback();
```

Hence the value of `this` inside `callback` will be the global object. To fix this, we need to bind `obj` to `callback` like this:

```javascript
const callback = obj.func.bind(obj);
otherFunc(callback);
```

Now the value of `this` inside `callback` will be `obj`.

★ *More info on `this` can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this).*

<h3 id="use-for-of-for-object-iteration">:pushpin: Use <code>for of</code> instead of <code>for in</code> to iterate over object properties</h3>

Lets say we have an object and we want to iterate over its keys and values. The first thing that comes to mind is to use a `for in` loop like this:

```javascript
for (const key in obj) {
  console.log(key, obj[key]);
}
```

But this is almost never what we want to do. The reason is that `for in` iterates over all the keys of an object, including inherited keys. We can solve this by checking if the key is an own property of the object like this:

```javascript
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key, obj[key]);
  }
}
```

But this is still not ideal. The better solution is to use a `for of` loop like this:

```javascript
for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}
```

This will iterate over the keys and values of the object, and will not include inherited keys.

<h3 id="use-array-methods">:pushpin: Use built-in array methods</h3>

**JavaScript** has a lot of built-in array methods that make working with arrays much easier. You should familiarize yourself with them and use them where applicable. They will make your code much cleaner and easier to understand.

For example, consider the following code:

```javascript
const arr = [1, 2, 3, 4, 5];

// for loop
const doubled = [];
for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i] * 2);
}

// Array.map method
const doubled = arr.map((x) => x * 2);
```

The `map` method is much cleaner and easier to understand than the `for` loop.

<h3 id="use-destructuring">:pushpin: Use destructuring</h3>

Destructuring is a very useful feature of **JavaScript** that allows us to extract values from arrays and objects and assign them to variables. It makes our code much cleaner and easier to understand.

For example:

```javascript
const arr = [1, 2, 3];

// Without destructuring
const a = arr[0];
const b = arr[1];
const c = arr[2];

// With destructuring
const [a, b, c] = arr;
```

```javascript
const obj = { a: 1, b: 2, c: 3 };

// Without destructuring
const a = obj.a;
const b = obj.b;
const c = obj.c;

// With destructuring
const { a, b, c } = obj;
```

Destructuring is especially useful when working with function parameters.
For example:

```javascript
const obj = { a: 1, b: 2, c: 3 };

// Without destructuring
const func = (obj) => {
  log(obj.a, obj.b, obj.c);
}

// With destructuring
const func({ a, b, c }) => {
  log(a, b, c);
}
```

<h3 id="use-the-spread-operator">:pushpin: Use the spread operator</h3>

Much like destructuring, the spread operator is also a very useful feature of **JavaScript**. It allows us to expand an iterable (like an array or a string) into individual elements. It makes our code much cleaner and easier to understand.

For example:

```javascript
const arr = [1, 2, 3];

// Without spread
const newArr = [arr[0], arr[1], arr[2], 4, 5, 6];

// With spread
const newArr = [...arr, 4, 5, 6];
```

```javascript
const str = "abc";

// Without spread
const newArr = [str[0], str[1], str[2], "d", "e", "f"];

// With spread
const newArr = [...str, "d", "e", "f"];
```

It can also be used to copy and merge arrays or objects. For example:

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Without spread
const copy = arr1.slice();
const merged = arr1.concat(arr2);

// With spread
const copy = [...arr1];
const merged = [...arr1, ...arr2];
```

```javascript
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { d: 4, e: 5, f: 6 };

// Without spread
const copy = Object.assign({}, obj1);
const merged = Object.assign({}, obj1, obj2);

// With spread
const copy = { ...obj1 };
const merged = { ...obj1, ...obj2 };
```

Lastly, just like destructuring, the spread operator can also be used with function parameters. It allows us to pass an unknown number of arguments to a function. For example:

```javascript
const func = (a, b, c, ...rest) => {}
```

`rest` will be an array containing all the arguments passed to the function after `c`. For example when calling `func` like this:

```javascript
func(1, 2, 3, 4, 5, 6);
```

`rest` will be `[4, 5, 6]`.

Conversely the spread operator can also be used to pass an array as arguments to a function. For example:

```javascript
const func = (a, b, c) => {}

const arr = [1, 2, 3];

func(...arr);
```

`a`, `b` and `c` will be `1`, `2` and `3` respectively.

<h3 id="use-modules-instead-of-static-classes">:pushpin: Use Modules instead of Static Classes</h3>

Sometimes we find ourselves writing a class that has only static methods. For example:

```javascript
export class Math {
  static add(a, b) {
    return a + b;
  }

  static sub(a, b) {
    return a - b;
  }

  static mul(a, b) {
    return a * b;
  }

  static div(a, b) {
    return a / b;
  }
}
```

This is not ideal, and somewhat defeats the purpose of classes. In this case it is much better use a module instead of a class. For example:

```javascript
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;
export const mul = (a, b) => a * b;
export const div = (a, b) => a / b;

export default { add, sub, mul, div };
```

<h3 id="use-code-formatters-and-linters">:pushpin: Use code formatters and linters</h3>

:exclamation::exclamation::exclamation:**Probably one of the most important tips** I can give you is to use code **formatters** and **linters**.

Code formatters are tools that automatically format your code according to a set of rules. While code linters are tools that analyze your code for potential errors and stylistic issues.

In **Visual Studio Code**, I recommend using the [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension for code formatting and the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension for code linting.

Since using ESLint requires installing its dependencies using `npm`, we will skip on using it for now. This part will be covered later in the course.

But we will use Prettier. To install it, open the extensions tab in **Visual Studio Code** and search for `Prettier`. Then click on the `Install` button. You can provide your own configurations for Prettier, both global or project specific. [Here](/.prettierrc) is a good configuration to start with:

```json
{
  "printWidth": 120,
  "tabWidth": 4,
  "singleQuote": false,
  "semi": true,
  "trailingComma": "es5",
  "endOfLine": "lf",
  "arrowParens": "always",
  "bracketSpacing": true,
  "embeddedLanguageFormatting": "auto",
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "quoteProps": "as-needed",
  "useTabs": false,

  "overrides": [
    { "files": "*.json", "options": { "tabWidth": 2 } },
    { "files": "*.yml", "options": { "tabWidth": 2 } },
    { "files": "*.yaml", "options": { "tabWidth": 2 } },
    { "files": "*.*rc", "options": { "tabWidth": 2 } }
  ]
}
```

Just copy the above configuration and paste it in a file named `.prettierrc` in the root of your project (The file is also available [here](/.prettierrc)). To enable **Prettier**, you need to tell to **VSCode** that you want to use it as your default code formatter. To do that, while in a **JavaScript** file, press `F1` or `Ctrl + Shift + P` to open the command palette and search for `Format Document With...`. Then select `Configure Default Formatter...` and choose `Prettier - Code formatter`.

Now you can format your code by pressing `Shift + Alt + F` on **Windows**,
`Ctrl + Shift + I` on **Linux**, and `Shift + Option + F` on **Mac**.

You can also make **Prettier** format your code every time you save your file. To do that, open the settings tab in **VSCode** and search for `Format On Save`. Then check the `Format On Save` checkbox.

<h3 id="javascript-under-the-hood">:pushpin: ★ JavaScript under the hood</h3>

★ In addition to all of the above, I highly recommend you dive into how **JavaScript** works under the hood. It is not required for this guide but I want you to keep in mind that this kind of knowledge is exactly what separates a developer from a code monkey. Its not necessary to understand everything, but having a general idea of how it works will give you a better understanding of the language. Therefore for those of us not content with just being code monkeys, I recommend the following resources:

- [Let me understand how JavaScript works under the hood](https://dev.to/inancakduvan/let-me-understand-how-javascript-works-under-the-hood-3ibf) - A very simple article that covers the basics of how **JavaScript** works under the hood.

- [0 to 1 — How JavaScript works under the hood](https://medium.com/@idrazhar/0-to-1-series-how-javascript-works-under-the-hood-ffca74f1cc65) - Another article that is a little bit more in depth than the previous one.

- [JavaScript: Under The Hood](https://www.youtube.com/playlist?list=PLillGF-Rfqbars4vKNtpcWVDUpVOVTlgB) - A great video series that covers the topic for those of you who prefer video tutorials.

<h2 id="assignments">:dart: Assignments</h2>

Finally, here are some assignments for you to practice what you have learned in this lesson:

Create a responsive website using **HTML**, **CSS** and **JavaScript**. And by responsive I mean that it should look good and keep its functionality on all manner of screen sizes. You should write pure **JavaScript**, **CSS** and **HTML** without using any **CSS** or **JavaScript** frameworks or libraries.

Don't worry too much about the design of the website, just make it look decent. The functionality is what matters the most.

Keep in mind the following standards when writing your code:

- Organize your code into **functions**. Each function should do one thing only. If your function becomes longer than your screen, it probably does more than one thing. (Of course, don't go to the other extreme of writing a function for every line of code.)
- Have a single **HTML** file and multiple **JavaScript** and **CSS** files (One for each page).
- **Name** your **variables** and **functions** properly. A name should indicate what the variable or function does. ([Naming Conventions](https://www.robinwieruch.de/javascript-naming-conventions))
- [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) - Write your code in a way that **avoids repetition**. If you find yourself writing the same code multiple times, consider moving it to a function.
- [KISS](https://en.wikipedia.org/wiki/KISS_principle) - Keep your code simple. Don't overcomplicate things.
- Keep your code **Self-Explanatory**. Generally, we try to keep the code simple enough so that comments are not needed. By keeping to the previous standards, most of the time comments will be redundant. However, if you really feel that a comment is needed, and refactoring the code is not an option, write it. Here are some short articles about comments:
  - [When Good Comments Go Bad](https://blog.codinghorror.com/when-good-comments-go-bad/)
  - [Code Tells You How, Comments Tell You Why](https://blog.codinghorror.com/code-tells-you-how-comments-tell-you-why/)
  - [Putting comments in code: the good, the bad, and the ugly](https://www.freecodecamp.org/news/code-comments-the-good-the-bad-and-the-ugly-be9cc65fbf83/).

The website should have the following pages:

1) A home page that will contain the current time, date, a greeting message and a list of links to the other pages.

2) Cards creation and deletion page that will contain:
   1) A form with two input fields: Full name and mail. The form should also have a submit button.
   2) A list of cards. Each card should contain the full name and mail of the person that was entered in the form.
   3) When the submit button is pressed, a new card should be added to the list with the information entered in the form. The form should also be cleared after the card is added to the list.
   4) There should not be a limit to the number of cards that can be added to the list.
   5) The cards should be displayed in a row next to each other, and new rows should be added when the screen size is not enough to display all the cards in a single row.
   6) The cards can be deleted by clicking on a button on the card. The button should be displayed only when the mouse is over the card.
   7) If the name contains titles (Mr., Mrs., etc.), they should be removed before displaying the name on the card.
   8) The form should validate the mail field and not allow the user to submit the form if the mail is not valid.
   9) The form should also validate the name field and not allow the user to submit the form if the name is not valid. A valid name is a name of length larger than two that contains only letters, spaces, dots, and apostrophes.
   10) When closing and reopening the page, the cards should remain just as they were before closing the page. (Hint: you need to save only the data in the cards and not the cards themselves).

3) Cards filtering page. This page will display 10 cards with the info located [here](/assets/users.json) (just copy the array to your project). The page will also display filters at the top as follows:
   1) [Select Menu](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) that will contain the following options: `Age`, `Name`, `Admin`, `Grades`, and `Address`.
   2) [Input field](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) that will act as a search bar for the selected filter.
   3) [Find button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) that will filter the cards according to the selected filter and the search bar.
   4) The button should be enabled only when the fields meet the following criteria:
      1) For the `Age` filter, the search bar should contain a `number`.
      2) For the `Name` filter, the search bar should contain a `string` of length larger than two, and containing only letters.
      3) For the `Admin` filter, the search bar should contain either `true` or `false`.
      4) For the `Grades` filter, the search bar should contain a `number`.
      5) For the `Address` filter, the search bar should contain one of: `string` or `number`.
   5) When the button is pressed, the cards should be filtered according the following criteria:
      1) For the `Age` filter, display only the cards that have an age larger than the number in the search bar.
      2) For the `Name` filter, display only the cards that have a name that contains the string in the search bar. (Make it case insensitive, e.g. `john` should match `John`).
      3) For the `Admin` filter, display only the cards that have an admin value that matches the value in the search bar.
      4) For the `Grades` filter, display only the cards whose grades average is larger than the number in the search bar.
      5) For the `Address` filter, if a `string` was entered in the search bar, display only the cards whose city contains the string in the search bar (case insensitive). If a `number` was entered in the search bar, display only the cards that have a house number that contains the number in the search bar.
   6) A button called `Reset` that will reset the filters and display all the cards.
   7) A button called `Sort` that will sort the the cards by the name of the person on the card.
   8) A button called `Reverse` that will reverse the order of the cards.

4) Algorithms page that will contain two sections:
   1) The first section will contain:
      1) [Select Menu](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) that will contain the following options: `Palindrome`, `Prime`, `Password`, `Unique`.
      2) [Text Input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) that will receive a string.
      3) Every time the input is changed, an algorithm should be run on the string according to the selected option. If the result of the algorithm is `true`, the input should be colored green, otherwise it should be colored red.
      4) The algorithms work as follows
         1) `Palindrome`: Checks if the input is a palindrome. A palindrome is a sequence of characters that is the same when read forward or backward. For example, `abba` is a palindrome, but `abab` is not.
         2) `Prime`: Checks if the input is a prime number. A prime number is a number that is divisible only by itself and one. For example, `7` is a prime number, but `8` is not.
         3) `Password`: Checks if the input is a valid password. A valid password is a password that is at least 8 characters long, contains at least one uppercase letter, one lowercase letter, one number, and one special character. Special characters are all characters that are not letters or numbers.
         4) `Unique`: Checks if the input contains only unique characters. For example, `abc` is unique, but `aba` is not. Implement with `O(n)` [time complexity](https://www.freecodecamp.org/news/my-first-foray-into-technology-c5b6e83fe8f1/).
   2) The second section will contain:
      1) [Text Input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) that will receive a string.
      2) [Number Input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) that will receive a number.
      3) [Encrypt button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) that will encrypt the string according to the number. The encryption works as follows: each character in the string will be replaced by the character that is `number` characters after it in the alphabet. For example, if the string is `abc` and the number is `1`, the encrypted string will be `bcd`. The character that comes after `z` is `a`, so if the string is `xyz` and the number is `2`, the encrypted string will be `zab`.
      4) [Decrypt button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) that will decrypt the string according to the number. The decryption works exactly like the encryption, but in the opposite direction.
      5) The result should replace the Text Input.

5) Bonus page: Recursion page. This page will contain:
   1) A [Text Input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) that will receive a number.
   2) A [Sequence Select](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) that will contain the following options: `Factorial`, `Fibonacci`.
   3) A [Mode Select](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) that will contain the following options: `Iterative`, `Recursive`.
   4) Implement the following algorithms using both iterative and recursive methods:
      1) `Factorial`: The factorial of a number is the product of all the numbers from 1 to that number. For example, the factorial of 5 is `1 * 2 * 3 * 4 * 5 = 120`.
      2) `Fibonacci`: The Fibonacci sequence is a sequence of numbers where each number is the sum of the two numbers before it. For example, the Fibonacci sequence up to 5 is `0, 1, 1, 2, 3`.
   5) When the input is changed, the page should display the result of the selected mode and sequence up to the number in the input. For example, if the input is `5`, the sequence is `Fibonacci`, and the mode is `Iterative`, the page should display `0, 1, 1, 2, 3` (while running the algorithm iteratively).
   6) Run the algorithms on the input and check what happens when the input is a large number with the iterative methods vs the recursive methods. What happens? Why?

6) Bonus page: [tic-tac-toe](https://en.wikipedia.org/wiki/Tic-tac-toe) game:
   1) The game should be played by two players on the same computer.
   2) Use a [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) to draw the game board and the X's and O's.
   3) Making a move should be done by clicking on the desired square.
   4) The game should display the current player who should play next.
   5) After the game is over, the winner will be displayed along with a button that will reset the game.
