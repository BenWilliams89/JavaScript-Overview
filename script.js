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

    


