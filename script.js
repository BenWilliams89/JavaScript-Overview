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

    // Switch statement - execute a block of code based on the value of an expression
    let value = 42;

    switch (typeof value) {
        case 'number':
            console.log('Number')
            break;
        case 'string':
            console.log('string')
            break;
        case 'boolean':
            console.log('boolean')
            break;
        default:
            console.log('other');
            break;    
    } // returns number as value = 42 a number

    let dayName = 2;

    switch (dayName) {
        case 1:
            dayName = 'Sunday'
            break;
        case 2:
            dayName = 'Monday'
            break;
        case 3:
            dayName = 'Tuesday'
            break;
        default:
            dayName = 'Invalid'
            break;
    } 
    console.log('The day is: ' + dayName); // returns The day is Monday

    // Ternary Operator

    //condition ? = value_if_true, 
    //condition : = value_if_false

    let food = 'apple'

    let msg = (food == apple) ? 'yes' : 'no'
    console.log(msg) // returns yes

    // Loops - are used to repeate a block of code
    // for loop

    for (let i = 1; i <= 10; i++) { // code that will be repeated
        console.log('Ben') // Ben will be printed 10 times
        console.log(i); // prints 1,2,3 etc up to 10
    }

    let coding = ['javaScript', 'python' 'CPP'] // An Array
    // indexing       0            1       2

    for(i = 0; i < coding.length; i++) {
        console.log(coding[i]); // logs Javascript, Python and CPP
    }

    // a loop inside a loop

    for(let i = 1; i < 5; i++) {
        console.log(i); // returns 1,2,3,4
        
        for(let j = 1; j <=3; j++) {
            console.log('inner loop' + j); // returns 1, innerloop 1, innerloop 2, inner loop 3, 2, inner loop 1, inner loop 2 etc ( i = 1 J = 1, i = 1, j = 2, i = 1 j = 3)
        }
    }

    // While loop 

    let i = 0;

    while(i <= 10) { // when condition is true the code will run
        console.log(i) // prints the same value
        i++ // adds 1 to the value to print 1,2,3,4,5,etc to 10
    }

    // Do while loop

    let i = 1;

    do {
        console.log(i)
        i++
    } while(i<=5); // returns 1,2,3,4,5

    // Break and continue
    // break statement is used ti terminate the loop immediatly
    // continue skips the value set and continues the loop

    for(let i = 1; i <=5; i++) {
        
        if(i == 3) { // when i gets to 3 stop
            break; // when i gets to 3 stop
        }
        console.log(i) // returns 1,2,3
    }

    for(let i = 1; i <=5; i++) {
        
        if(i == 3) { // when i gets to 3 stop
            continue;
        }
        console.log(i) // returns 1,2,4,5
    }

    // Functions - block of code thats performs a specific task - called from anywhere

    function greet() { // greet is the function name
        console.log('Hello, Ben')
    }
    greet(); // calls the function

    // Parameters and arguemnets = (the values between these brackets) = (value1, value2)

    function greet(firstName, lastName) {
        console.log(`Hello ${firstName}`)
        console.log('Hello' + firstName + " " lastName)
    }
    greet(Ben, Williams); // returns Hello Ben, Hello Ben Williams
    //     ^      ^
    //define the arguments when calling the function

    // default parameters - no value produces - if no y it returns NaN
    function sum(x, y) {
        console.log(x+y)
    }
    sum(10,15) // x = 10, y = 15

    //function return - the return statement is used to return the value when the function is called
    