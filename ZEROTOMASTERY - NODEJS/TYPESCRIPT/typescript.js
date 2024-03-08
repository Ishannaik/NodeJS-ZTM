// Boolean
var isCool = true; // Declaring a boolean variable named 'isCool' and assigning it the value 'true'
var isCool2 = true;
var age = 56; // Declaring a number variable named 'age' and assigning it the value '56'
var eyeColor = 'brown'; // Declaring a string variable named 'eyeColor' and assigning it the value 'brown'
var favouriteQuote = "I'm not old I'm only ".concat(age); // Declaring a string variable named 'favouriteQuote' and assigning it a string with interpolated value of 'age'
var pets = ['cat', 'dog', 'pig']; // Declaring an array of strings named 'pets' and initializing it with three string elements
var pets2 = ['cat', 'dog', 'pig']; // This line is a duplicate declaration of the 'pets' array and will cause an error. Remove it.
var wizard = {
    a: 'John'
};
wizard = { b: 5 }; // Reassigning the 'wizard' variable to a new object with property 'b' and value '5'. This overwrites the previous object.
var meh = undefined;
var noo = null;
// Tuple
var basket; // Declaring a tuple variable named 'basket' with a string and a number as its elements
basket = ['basketball', 5]; // Assigning a string and a number to the 'basket' variable
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {})); // Declaring an enum named 'Size' with three values
var sizeName = Size[2]; // Declaring a string variable named 'sizeName' and assigning it the value of the second enum value
console.log(sizeName); // Output: Medium
// Any
var whatever = 'aaa'; // Declaring a variable named 'whatever' and assigning it the value 'aaa'
whatever = 5; // Reassigning the 'whatever' variable to the value '5'
// Void
var sing = function () {
    console.log('lalala');
};
// Never
var error = function () {
    throw Error('oops');
};
var fightRobotArmy = function (robots) {
    console.log('FIGHT!');
};
var fightRobotArmy2 = function (robots) {
    console.log('FIGHT!');
};
var dog = {}; // Declaring a variable named 'dog' and casting it to the type 'CatArmy'
dog.count; // Output: undefined
// Function
var fightRobotArmy3 = function (robots) {
    console.log('FIGHT!');
};
var fightRobotArmy4 = function (robots) {
    console.log('FIGHT!');
};
// Classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'lalala'; // Declaring a private string variable named 'sing' and assigning it the value 'lalala'
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello, ".concat(this.sing);
    };
    return Animal;
}());
var lion = new Animal('RAAAWR'); // Declaring a new instance of the 'Animal' class and passing in the string 'RAAAWR'
console.log(lion.greet()); // Output: Hello, RAAAWR
// Union
var confused = 'hello'; // Declaring a variable named 'confused' that can be either a string or a number
confused = 5;
var person = { name: 'John', age: 30 }; // Declaring a variable named 'person' and assigning it an object with a 'name' and an 'age' property
