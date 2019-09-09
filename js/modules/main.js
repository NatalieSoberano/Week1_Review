import Person from "./modules/DataObject.js"
//Import always has to go on line one ^
// IIFE
(() => {
    console.log('fired!');

    console.log(Person);

    debugger;
})();