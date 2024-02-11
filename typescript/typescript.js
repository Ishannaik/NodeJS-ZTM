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
