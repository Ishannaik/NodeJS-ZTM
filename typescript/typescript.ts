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

// Any
let whatever: any = 'aaa';  // Declaring a variable named 'whatever' and assigning it the value 'aaa'
whatever = 5;  // Reassigning the 'whatever' variable to the value '5'

// Void
let sing = (): void => {  // Declaring a function named 'sing' that doesn't return anything
    console.log('lalala');
}

// Never
let error = (): never => {  // Declaring a function named 'error' that never returns anything
    throw Error('oops');
}

// Interface
interface RobotArmy {
    count: number,
    type: string,
    magic?: string  // Optional property
}

let fightRobotArmy = (robots: RobotArmy) => {  // Declaring a function named 'fightRobotArmy' that takes in an object of type 'RobotArmy'
    console.log('FIGHT!');
}

let fightRobotArmy2 = (robots: { count: number, type: string, magic?: string }) => {  // Declaring a function named 'fightRobotArmy2' that takes in an object with three properties
    console.log('FIGHT!');
}

// Type Assertion
interface CatArmy {
    count: number,
    type: string,
    magic: string
}

let dog = {} as CatArmy  // Declaring a variable named 'dog' and casting it to the type 'CatArmy'
dog.count  // Output: undefined

// Function
let fightRobotArmy3 = (robots: RobotArmy): void => {  // Declaring a function named 'fightRobotArmy3' that takes in an object of type 'RobotArmy' and doesn't return anything
    console.log('FIGHT!');
}

let fightRobotArmy4 = (robots: { count: number, type: string, magic?: string }): void => {  // Declaring a function named 'fightRobotArmy4' that takes in an object with three properties and doesn't return anything
    console.log('FIGHT!');
}

// Classes
class Animal {
    private sing: string = 'lalala';  // Declaring a private string variable named 'sing' and assigning it the value 'lalala'
    constructor(sound: string) {  // Declaring a constructor that takes in a string and assigns it to the 'sing' variable
        this.sing = sound;
    }

    greet(): string {  // Declaring a method named 'greet' that returns a string
        return `Hello, ${this.sing}`;
    }
}

let lion = new Animal('RAAAWR');  // Declaring a new instance of the 'Animal' class and passing in the string 'RAAAWR'
console.log(lion.greet());  // Output: Hello, RAAAWR

// Union
let confused: string | number = 'hello';  // Declaring a variable named 'confused' that can be either a string or a number
confused = 5;

// Intersection
type HasName = { name: string };
type HasAge = { age: number };
type Person = HasName & HasAge;  // Declaring a type named 'Person' that is a combination of the 'HasName' and 'HasAge' types
let person: Person = { name: 'John', age: 30 };  // Declaring a variable named 'person' and assigning it an object with a 'name' and an 'age' property
