document.write('Hello');

// variables
let name = 'Ben'
const lastName = "Williams"
console.log(name)
console.log(name, lastName)

// Scope - visability - 3 types - Global, function & block

// Data Types - Primitive & Reference
    //primitive = String, Number, Boolean, Null, Undefined, BigInt, Symbol
    //Reference = Object, Array, Function

    //object - collection of properties - key:value pair
    let person = {
        name: 'Ben',
        age: 35,
    }
    console.log(person)

    //Array - stores a collection of values

    let number = [1,2,3,4,5];

    console.log(number);
    console.log(typeof number);

    //Function
    function msg(){
        console.log('Hello, Ben')
    }

    console.log(typeof msg);
    console.log(msg);
    msg()

    //Operaters = + - * / = attrithmatic (Maths)
    //Operands are the numbers or values themselves (5 & 3 below)
    let sum = 5 + 3;
    console.log(sum);

    //Assigment operators = (=, +=)
    let x = 5;
    x += 3 // plus, equals
    x **= 3 // 5 to the power of 3 = 5*5*5 = 125

    //increment/Decrement Operators = ++ add 1, -- takeaway 1
    // prefix
    let a = 10
    console.log(++a); // = 11
    console.log(a); // = 11

    //postfix
    let b = 10
    console.log(b++); // = 10
    console.log(b); // = 11

    //Comparision operators compare two values and return True or False
    //Useful in descion making and loop programs
    // <less than, > more than, >= more than or greater than, <= less than or equal too, 
    // == is the same as, != is not the same as, === is equal to, !== is not equal to

    let c = 10;
    let d = 20;

    console.log(a < b) // true as 10 is less then 20

    //Logical operators perform logical operations
    // && = and
    // || = or
    //(!) = not 
    
    let e = 5;
    let f = 10;

    console.log(e > 0 && f > 0); // returns true
    console.log(e > 0 && f < 0); // returns false

    console.log(e > 0 || f > 0); // returns true

    let yes = true;
    let no = false;
    console.log(!yes); // returns false
    console.log(!no); // returns true

    // String Operators
    console.log('ben' + '10') // returns ben10
    console.log('ben' + ' 10')// returns ben 10

    // operator precedence
    let result = 2 + 3 * 4 //returns 14 = 4 * 3 + 2

    // right to left precedence - exponsiation
    let results = 2 ** 3 ** 2;
    // 3 ** 2 = 9 (3 x 3)
    // 2 ** 9 = 512
    
    //control flow statements - handle errors and flow of execution
    // make decisions, handle loops  and try catch

    //conditional statements = if, else, else if
    // if statements
    let age = 20

    if (age > 18) {
        console.log('Adult');
    } 

    let country = 'India';
    let ager = 20
    
    if (ager >= 18 && country == "india") {
        console.log('An adult in India');
    }
    //if else & else statements
    let ages = 16;
    if (ages > 18) {
        console.log('Adult')
    } else if (ages >=16) {
        console.log('Teenager')
    } 
    
    else {
        console.log('child')
    }
