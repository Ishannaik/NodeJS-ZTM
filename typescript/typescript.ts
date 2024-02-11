// Boolean
let isCool: boolean = true;  // Declaring a boolean variable named 'isCool' and assigning it the value 'true'
const isCool2: boolean = true;
let age: number = 56;  // Declaring a number variable named 'age' and assigning it the value '56'

let eyeColor: string = 'brown';  // Declaring a string variable named 'eyeColor' and assigning it the value 'brown'

let favouriteQuote: string = `I'm not old I'm only ${age}`;  // Declaring a string variable named 'favouriteQuote' and assigning it a string with interpolated value of 'age'

let pets: string[] = ['cat', 'dog', 'pig'];  // Declaring an array of strings named 'pets' and initializing it with three string elements

let pets2: Array<string> = ['cat', 'dog', 'pig'];  // This line is a duplicate declaration of the 'pets' array and will cause an error. Remove it.

let wizard: object = {  // Declaring an object variable named 'wizard' with a property 'a' and value 'John'
    a: 'John'
}

wizard = { b: 5 };  // Reassigning the 'wizard' variable to a new object with property 'b' and value '5'. This overwrites the previous object.

let meh: undefined = undefined;
let noo: null = null

// Tuple
let basket: [string, number];  // Declaring a tuple variable named 'basket' with a string and a number as its elements
basket = ['basketball', 5];  // Assigning a string and a number to the 'basket' variable

// Enum
enum Size { Small = 1, Medium = 2, Large = 3 }  // Declaring an enum named 'Size' with three values
let sizeName: string = Size[2];  // Declaring a string variable named 'sizeName' and assigning it the value of the second enum value

console.log(sizeName);  // Output: Medium

