http://perfectionkills.com/whats-wrong-with-extending-the-dom/
http://stackoverflow.com/questions/37631098/how-to-bundle-an-angular-2-app-for-production
https://www.genuitec.com/products/angular-ide/download/
https://cli.angular.io/
https://github.com/mgechev/codelyzer
https://books.ninja-squad.com/angular
https://angular.io/resources/
http://www.typescriptlang.org/
https://en.wikipedia.org/wiki/TypeScript
http://exploringjs.com/es6/ch_promises.html
http://exploringjs.com/es6/ch_modules.html

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

References in tutorial

https://angular.io/docs/ts/latest/guide/ngmodule.html%20%22Angular%20Modules%20(NgModule
https://angular.io/docs/ts/latest/guide/style-guide.html#!#naming
https://angular.io/docs/ts/latest/guide/template-syntax.html#!#event-binding
https://angular.io/docs/ts/latest/guide/structural-directives.html
https://angular.io/docs/ts/latest/guide/forms.html#!#ngModel
https://angular.io/docs/ts/latest/guide/displaying-data.html#!#ngFor
https://angular.io/docs/ts/latest/guide/displaying-data.html
https://angular.io/docs/ts/latest/guide/user-input.html
https://angular.io/docs/ts/latest/guide/dependency-injection.html
https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
https://angular.io/docs/ts/latest/guide/router.html#!#link-parameters-array
https://angular.io/docs/ts/latest/guide/router.html#!#redirect
https://angular.io/docs/ts/latest/guide/router.html#activated-route
https://angular.io/docs/ts/latest/guide/router.html#guards
https://angular.io/docs/ts/latest/guide/router.html#routing-module
https://angular.io/docs/ts/latest/guide/pipes.html
https://angular.io/docs/ts/latest/guide/server-communication.html#in-mem-web-api
https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
https://angular.io/docs/ts/latest/guide/template-syntax.html

https://angular.io/docs/ts/latest/tutorial/toh-pt6.html#rxjs-imports
https://angular.io/docs/ts/latest/tutorial/toh-pt4.html#slow

https://angular.io/docs/ts/latest/api/router/index/CanDeactivate-interface.html

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


#### Angular Upgrade


ng update @angular/cli@7 @angular/core@7
ng update @angular/material@7



hould test your application for sizing and layout changes. 
4. Check the updated file in application and push that file to git. 
5. Update to version 8 of the core framework and CLI by running ng update @angular/cli@8 @angular/core@8 in your terminal and review and commit the changes. 
6. Update Angular Material to version 8 by running ng update @angular/material@8 in your terminal. Upgrade Information: Many changes will be done once you upgrade application with angular 8 version. a) Angular will use TypeScript 3.4 in angular8. b) Instead of importing from @angular/material, you should import deeply from the specific component. E.g. @angular/material/button. ng update will do this automatically for you. c) Lazy loading dynamic import will update automatically. 

7. Use git status command and check the updated file and push that changes to git. 

8. Run ng update @angular/core@9 @angular/cli@9 which should bring you to version 9 of Angular. 
9. Run ng update @angular/material@9. 
Upgrade Information: During the update to version 9, your project was transformed as necessary via code migrations in order to remove any incompatible or deprecated API calls from your code base. You can now review these changes, and consult the Updating to version 9 guide(https://v9.angular.io/guide/updating-to-version-9). - Remove any es5BrowserSupport flags in your angular.json and set your target to es2015 in 
your tsconfig.json. Angular now uses your browsers list to determine if an ES5 build is needed. ng update will migrate you automatically. - Angular 9 ivy is default rendering engine. - Angular 9 introduced a global $localize() function that needs to be loaded if you depend on Angular's internationalization (i18n). Run ng add @angular/localize to add the necessary packages and code modifications.( https://v9.angular.io/guide/migration-localize) 
10. If you use TestBed.get, you should instead use TestBed.inject. This new method has the same behaviour, but is type safe 
11. Use git status command and check the updated file and push that changes to git. 
12. Run ng update @angular/core@10 @angular/cli@10 which should bring you to version 10 of Angular. 
13. Run ng update @angular/material@10. 
14. Run you application and check you all feature are working fine or not. Note: This is the generic document for migrate A6 to A10. You might be get error while migrating the application please check your third party dependency and resolved accordingly. 