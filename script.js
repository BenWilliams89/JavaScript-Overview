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

    // DOM = Document Object Model - reperensts the HTML page
    document.
    getElementById() // id='header '
    getElemnetByName() // name= 'language' etc
    getElementsByTagName() // h1 etc
    getElementsByClassName() // class=''

    //querySelector() 
    document.querySelector('.message') //takes any potential css class
    let msg = document.querySelector('.message')

    //queryselectorAll
    document.querySelectorAll('') // this returns all selected

    //traversing Elemenst - get parent & child
    //parent
    <div class='title'> 
        <p class='text'>'Hello</p>
        </div>
    let txt = document.querySelector('.text');
    console.log(txt.parentNode) // displays Title the parent element
    
    let parent = document.querySelector('.title') // seclects the div
    console.log(parent.firstElementChild); // produces Hello, can add second, third, last or all child by adding just child

    // select the next sibling

    <div class='title'> 
        <p class='text'>'Hello</p>
        <p class='second'>HIya</p>
        </div>

    let second = document.querySelector('.second');
    console.log(second.previousElementSibling); // produces Hello as previous element was selected second next produces the next one

    //createElement()
     let div = document.createElement('div') // creates a new div
     div.innerHTML = '<p> Welcome to the website</p>' // prints this in the console
     document.body.appendChild(div); // this adds the text to the webpage
     div.id = 'title'; // adds this to the console
     console.log(div);

     // AppendChild() - add a node and move to an existing property

     <ul id='menu'>
     <li>Home</li>
     <li>About</li>
     <li>Blog</li>
     <li>Project</li>
     </ul>

     let menu = document.getElementById('menu');
     let list = document.createElement('li');// creates a new list
     list.innerHTML = 'contact'; // call the text content to the list

     menu.appendChild(list); // adds and prints contact to the list

     // text content

     <ul id='menu'>
     <li>Home</li>
     <li>About</li>
     <li>Blog</li>
     <li>Project</li>
     </ul>

let menu = document.getElementById('menu');
console.log(menu.textContent); // prints Home, about,blog & content
innerText = // only produces visable text so if style = display: none it will not print


//Inner HTML - Add text to the webpage

menu.innerHTML = '<h1>Hello</h1>' // prints as a H1 and accepts tags
menu.textContent = '<h1>Hello</h1>' // prints '<h1>Hello</h1>'

// after method()

Element.after(node)
menu.after(node1, str1) // adds after your choseln element

//AppendMethod - add mutiple elements
parentNode.append(newNodes)

// replaceChild
parentNode.replaceChild(newChild, oldChild)

// clone nodes

let newNode = originalNode.cloneNode();
let newNode = menu.cloneNode(true); // prints menu - defualt is false and just shows ID

// removeChild()
parentNode.removeChild(chileNode)
menu.removeChild(menu.firstElementChild) // removes Home

//insertBefore - insert before an existing node
parentNode.insertBefore(newNode, exisitingNode)
menu.insertBefore(newNode, menu.firstElementChild)

//attrubute methods

<input type = 'text' id = 'username' placeholder = 'username'></input> // 3 attributes - type,id,placeholder

let inputBox = document.getElementById('username');
inputBox.attributes // prints type, id & placeholder

// getattribute()

console.log(inputBox.getAttribute('type'))/// prints text as type = text

// setAttribute()
inputBox.setAttribute('name', 'value');
inputBox.setAttribute('class', 'user'); 
console.log(inputBox); // prints the attributes with the class attribute added

//removeAttribute

inputBox.removeAttribute('placeholder');
console.log(inputBox)// prints type text and username but no placeholder

// Manipulation Elements Style

<input type = 'text' id = 'username' placeholder = 'username' Style = 'backgroundColor: Red; fontSize: 20px;'></input> // Style is like CSS

inputBox.style.padding = '10px'
console.log(inputBox) // prits the style and adds padding

// CSStext

inputBox.style.cssText = 'width: 200px' // overirdes any existing CSS (cssText)
inputBox.style.cssText += 'width: 200px' // adds width to the other style elements

// getComputedStyle()

input {
    background: red;
    font-size: 12 px;
}

window.getComputedStyle(element, pseudoElelemnt) // prints all assigned elements that are applied by default
console.log(window.getComputedStyle(inputBox).backgroundColor); // This will print what background color a website is using

// className Property

<h1 id='title' class='main message'>Ben</h1>
let title = document.getElementById('title');
title.className = 'new' // adds a class but overrides the other classes already set
title.className += 'new' // adds the class without removing the other classes
title.className // returns the list of classes = main & message

// classList
title.classList // prints all the classes
title.classList.add('new', 'new2') // adds the class new and new2

title.classList.remove('message'; // removes the message class)
title.classList.replace('message', 'msg') // replaces message with msg
title.classList.contains('main'); // prints true
title.classList.toggle('message') // removes message - cycles past it or adds if a class if not there - both removes and adds

//  javascriptEvents = click events, load events etc

<div id='container'>
<button type ='button'onclick='console.log("Button Clicked)'>Click Here</button>
</div> 
// prints Button Clicked


// event handlers/listeners = on click
onclick // can be used to call a function

function displayMsg() {
    console.log('Button Clicked from Fn') // button clicked from function
}
displayMsg() // runs function
onclick='displayMsg()' // runs function on button click

console.log(event type) // prints onclick

// this keyword
<div id='container'>
<button id='btn' type ='button'onclick='console.log(this)'>Click Here</button>
</div> 
// this prints button and its properties
console.log(id) // prints btn
(type) // prints button

<div>
    <button id='btn'>Click Here</button>
</div>

let btn = documnet.getElementById('btn');
btn.onclick = function(){
    console.log('button clicked')
} // prints button clicked

btn.onclick = null; // removes the event handler

// add Event Listener & Remove Event Listener

let btn = documnet.getElementById('btn');
addEventListener(event, function, useCapture) // useCapture is boolean - true/false

btn.addEventListener('click', function(){ // 2 parameters
    console.log('Button Clicked!'); // prints Button clicked when btn clicked
})

btn.removeEventListener('click'); // removes the event listener

// useful events

- mousemove:  // fires when you move the mouse around
- Mousedown:  // when you press the mouse btn
- Mouseup:   // when you release the mouse btn
- Mouseover:   // move from outside to inside element
- mouseout:   //moves to another element
- keydown:   // when you press any key on the keyboard
- keyup:   // relase a key on keyboard
- keypress: // release when you hold a certain key
- scroll:    // scroll so far fires an event

