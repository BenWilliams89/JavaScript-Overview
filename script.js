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
    
    function add(a,b) {
        return a+b
    }

    let result = add(10,40)
    console.log('The sum is: ' + result) // the sum is 50

    function fn1(x) {
        function fn2(y) {
            return x * y;
        } 
        return fn2
    }
    let result = fn1(3);
    console.log(result); 

    console.log(result(2)); // returns 6 = 3 * 2

    // Callbacks - placing a function inside a parameter

    function display(result) {
    console.log(result);
    }
    function add(num1, num2, myCallback) {
        let sum = num1 + num2;
        myCallback(sum)
    }

    add(10, 20, display) // returns 30

    //Anonymous Function = a function with no name

    let sum = function (x,y) {
        return x + y;
    }

    console.log(sum(10, 15)); // = 25

    --
    (
    function() {
        console.log('Hello Ben')
    }
    )() // This also runs a  anonymous function

    // Set a message to display after a certain timeframe ie 2 seconds

    set TimeOut(
        function({
            console.log('Hello There Ben')
    }), 
    2000); // this produces the result Hello there Ben but after 2000 miliseconds (2 seconds)

    // recursive function - calls itself

    function myFunction(){
        if(condition) {
            myFunction();
        } else {
            //stop calling myFunction otherwise it loops forever
        }
    }
    myFunction()

    Example:

    function countDown(num) {
        console.log(num);
        num--;
        if (num >= 0) {
        countDown(num);
        }
    }

    countDown(10)

    // Objects

    const objectName = {
        key1: value1,
        key2: value2,
    }
    Example:

    const person = {
        firstName: 'Ben',
        lastName: 'Williams',
        age: 35
        address: { // nested objects inside a object
            street: 50 'Barter Close',
            city: Bristol
        }
    }
    person.company = 'MY Work Desk'; // this add a property
    delete person.company; // deletes the company

    console.log(person.address.city); //displays the nested object

    console.log(typeof person); // returns object
    console.log(person) // prints all the deatils assigned - first & last name + age

    person.age // prints the age
    person['age'] // prints the same just with brackets and strings

    person.age = 40 // this changes the value from 35 to 40

    console.log('age' in person)  // prints true = is the propertyName in objectName

    for( let properties in person) {
        console.log(person[properties + ':']) // prints firstName lastName and age with : after each name
    }

    // Method is an object property that contains a function definition

    const person = {
        firstName: 'Ben,',
        lastName: 'Williams',
        greet: function greet(){
            console.cog('hello world')
        } 
    }
    person.greet() = // consoles hello world

        ||

        const person = {
            firstName: 'Ben,',
            lastName: 'Williams',
        }
        function greet(){
            console.log('hello')
        }
        person.greeting = greet;

        person.greeting(); // returns hello

    // this keyword
    
    const person = {
        firstName: 'Ben',
        lastName: 'Williams',
        greet: function(){
            console.log('hello + this.firstName') // this === person
        }
    }
    
    person.greet()//calls the function - Hello Ben

    ||

    const person = {
        firstName: 'Ben',
        lastName: 'Williams',
        getFullName: function(){
            return this.firstname + ' ' + this.lastName
        }
    }
    console.log(person.getFullName());

    // JavaScript Constructor Function - used to create objects

    function Person(first, last){
        this.firstName = first,
        this.lastName = last
    }

    const person1 = new Person('Ben, Williaks');
    const person2 = new Person('Sam, Williams')

    console.log(person1) // prints Ben Williams
    console.log(person2) // prints Sam Williams

    person1.age = 52
    console.log(person1); // prints firstname, last name & age

    person2.greet = function(){
        console.log('Hello ben')
    }

    person2.greet() // calls and prints hello ben

    ||

    function Person(first, last){
        this.firstName = first,
        this.lastName = last,
        this.getFullName = function(){
            return this.firstName + " " + this.lastName
        }
    }

    const person1 = new Person('Ben, Williaks');
    const person2 = new Person('Sam, Williams');

    console.log(person1.getFullName());

    // JavaScript prototype = every function and object has its own prototype

    const person = {
        name: 'Elon'
    }

    console.log(person) //display name - below this is prototype

    // Prototype inheritance = add properties and methods to a constructor function 

    function Person(first, last){
        this.firstName = first,
        this.lastName = last,
    }

    person.prototype.gender = 'male';

    const person1 = new Person('Ben, Williams');
    console.log(person1.gender); // adds to the prototype 

    // change prototype value

    function Person(){
        this.name = 'Elon Musk'
    }
    Person.prototype.age = 25
    
    const person1 = new Person(); // new object called person 1

    Person.prototype = { age: 52}

    const person2 = new Person();

    console.log(person1.age) // name and age 25
    console.log(person2.age) // name and age 52

    //Object destrucuring = extract properties into variables 

    const person = {
        firstName: 'Ben',
        lastName: 'Williams'
    }

    let fName = person.firstname;
    let lName = person.lastName;

    let {firstName: fName, lastName: lName} = person // data structuring in variables
    console.log(fName) // prints Ben

    // object literal syntax extentions

    let firstName = 'Ben'
    const person = {
        firstName,
    }
    console.log(person);

    // JavaScript class

    class Person{
        constructor(){
            this.name = name;
            this.age = age;
        }
    }

    const person1 = new Person('ben', 35);
    const person2 = new Person('sam', 32);
    console.log(person1);
    console.log(person2);

    // class methods

    class Person{
        constructor(){
            this.name = name;
            this.age = age;
        }
        greet(){
            return 'Hello' + this.name;
        }
        changeName(newName){
            this.name = newName
        }
    }
    const person1 = new Person('ben', 35);
    person1.changeName('Benji')
    console.log(person1) // = Benji
    
    // getter and setters - allow you to control how properties are accessed
    // add get or set infront of keyword  to select

    get personName(){
        return this.name
    }
    set changeName(newName) {
        this.name = newName
    }

    person1.personName = 'Ben'

    // classes names vs unnamed

    let Person = class {
        constructor() {
            this.name = name
        }
        getName () {
            return this.name
        }
    }

    const person1 = new Person('Ben Williams');
    console.log(person1)

    // class inheritance - use to reuse classes and code

    class Person {
        constructor(name) {
            this.name = name
        }
        greet() {
            console.log('Hello'+ this.name)
        }
    }

    class Student extends Person { // extends add all the data from person

    }
    const student1 = new Student('Ben');

    student1.greet(); // Hello Ben

    // JavaScript super Method - Parent & Child

    class Person { // parent class
        constructor(name){
            this.name = name;
        }
        greet(){
            console.log('Hello ' + this.name)
        }
    }
    class student extends person { // child class
        constructor(name) {
            super(name);
        }
    }
    const student1 = new Student('Peter');
    student1.greet(); // prints hello Peter
     
    // static methods

    class Person {
        constructor(name) {
            this.name = name;
        }
        static greet(){

            console.log('Hello!')
        }
    }

    const person1 = new Person('Peter')
    person1.greet() // displays an error
    Person.greet() // prints Hello!

    //private methods - start with a hash

    class Person{
        constructor(firstName, lastName){
            this.firstname = firstName;
            this.lastName = lastName;
        }
        #fullName() { // the # makes it private
            return this.firstName + ' ' + this.lastName
        }
        display(){
            console.log(this.#fullName()); // use the # to call the private method
        }
    }
    const person1= new Person('Peter', 'B')
    person1.display();

    // DOM = Document Object Model