http://perfectionkills.com/whats-wrong-with-extending-the-dom/
http://stackoverflow.com/questions/37631098/how-to-bundle-an-angular-2-app-for-production
https://www.genuitec.com/products/angular-ide/download/
https://cli.angular.io/
https://github.com/mgechev/codelyzer
https://books.ninja-squad.com/angular
https://angular.io/resources/
http://www.typescriptlang.org/

References in tutorial

https://angular.io/docs/ts/latest/guide/ngmodule.html%20%22Angular%20Modules%20(NgModule
https://angular.io/docs/ts/latest/guide/style-guide.html#!#naming
https://angular.io/docs/ts/latest/guide/template-syntax.html#!#event-binding
https://angular.io/docs/ts/latest/guide/structural-directives.html
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
https://angular.io/docs/ts/latest/guide/forms.html#!#ngModel
https://angular.io/docs/ts/latest/guide/displaying-data.html#!#ngFor
https://angular.io/docs/ts/latest/guide/displaying-data.html
https://en.wikipedia.org/wiki/TypeScript
https://angular.io/docs/ts/latest/guide/user-input.html
https://angular.io/docs/ts/latest/guide/dependency-injection.html
https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
http://exploringjs.com/es6/ch_promises.html
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
https://angular.io/docs/ts/latest/tutorial/toh-pt4.html#slow

https://angular.io/docs/ts/latest/guide/router.html#!#link-parameters-array
https://angular.io/docs/ts/latest/guide/router.html#!#redirect
https://angular.io/docs/ts/latest/guide/router.html#activated-route
https://angular.io/docs/ts/latest/api/router/index/CanDeactivate-interface.html
https://angular.io/docs/ts/latest/guide/router.html#guards
https://angular.io/docs/ts/latest/guide/router.html#routing-module
https://angular.io/docs/ts/latest/guide/pipes.html
https://angular.io/docs/ts/latest/guide/server-communication.html#in-mem-web-api
https://angular.io/docs/ts/latest/tutorial/toh-pt6.html#rxjs-imports
http://exploringjs.com/es6/ch_modules.html
https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html

https://angular.io/docs/ts/latest/guide/template-syntax.html

angular-ui.github.io
mgcrea.github.io/angular-strap
pluralsight.com

http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/#The_browser_high_level_structure



👉 Pipe and Compose Implementation
Pipe and Compose functions are higher order functions that are used for writing a well-structured and clean code by avoiding nested function calls.

👉 Pipe flows from left to right, calling each function with the return result of the last one.
👉 Compose flows from right to left, calling each function with the return result of the last one.

💡Let's take an Example -

👇 first function to fetch all players data
const getAllPlayers = (team) => {
  console.log("fetching all players api.....");
  const india = ["virat kohli", "rohit sharma", "hardik pandya"];
  const pakistan = ["babar azam", "mohammad rizwan", "fakar zaman"];
  return team === "india" ? india : pakistan;
};

👇 second function to get first player
const getFirstPlayer = (players) => {
  return players[0];
};

👇 third function to get first name of player
const getFirstName = (player) => {
  return player.split(" ")[0];
};

👇 fourth function to capitalize first name
const capitalizeName = (firstName) => {
  return firstName.toUpperCase();
};

👇 final result here you can see we are calling nested functions and because of this, our code is not clean and readable.

const playerName = capitalizeName(
  getFirstName(getFirstPlayer(getAllPlayers("india")))
);

console.log(playerName); // VIRAT

💡Implementation of pipe using simple for loop
const pipe = function (...functions) {
  return (...args) => {
    let result;
    for (let i = 0; i < functions.length; i++) {
      if (i === 0) {
        result = functions[i](...args);
      } else {
        result = functions[i](result);
      }
    }
    return result;
  };
};

👇 Wrapping all the functions in one pipe ( HOC ) function to avoid nested function calls

let pipedPlayerName = pipe(
  getAllPlayers,
  getFirstPlayer,
  getFirstName,
  capitalizeName
)("india");
console.log(pipedPlayerName); // VIRAT

GitHub repo name - "JavaScript-with-JC"
GitHub repo link - https://lnkd.in/dX8nuf5D
