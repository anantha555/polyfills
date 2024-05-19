//  Need for call apply bind

/**
     let person1 ={
         name: 'AK',
        printAge: function(age){
            console.log(`${this.name} is ${age} years old`)
        }
    }

    let person2 ={
        name: 'GK',
        printAge: function(age){
            console.log(`${this.name} is ${age} years old`)
        }
    }

    person1.printAge(25)
    person2.printAge(52)

 */

//  here we are creating printAge twice ... to avoid this and to borrow the print fn we can use call 

// CALL

/*
let person1 = {
    name: 'AK',
}

let person2 = {
    name: 'GK',
}

function printAge(age) {
    console.log(`${this.name} is ${age} years old`)
}

printAge.call(person1, 25)
printAge.call(person2, 52)

 */

// call Polyfill impl

Function.prototype.mycall = function (obj = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error('not callable');
    }
    obj.fn = this;
    obj.fn(...args)
}

let person1 = {
    name: 'GK',
}

function printAge(age) {
    console.log(`${this.name} is ${age} years old`)
}

printAge.mycall(person1, 25) 
 
// ---------APPLY----------

/**The apply() method is identical to call(), 
 * except apply() requires an array as the second parameter. 
 * The array represents the arguments for the target method." 
  
 -- call
 printAge.call(person1, 25) 

 -- apply
 printAge.apply(person1, [25]) 

 * */


// apply polyfill impl 


Function.prototype.myapply = function(obj={}, ...args){
    if(typeof this !== 'function'){
        throw new Error('not callable');
    }
    
    // check if args is not array
    // Note: args is something like this [[25]], that is why we need to spread the ...args
    if(!Array.isArray(...args)){
        throw new Error('not an array ');
    }
     
  obj.fn = this;
  obj.fn(...args)
}

let person2 = {
    name: 'GK',
}

function printAge(age) {
    console.log(`${this.name} is ${age} years old`)
}

printAge.myapply(person2, [25]) 


// Bind 

let person3 = { name: 'GK' }

function printAgeYear(age, year) {
    console.log(`${this.name} is ${age} years old and ${year} born`)
}

// normal 
const tempNormalFn = printAgeYear.bind(person3, 28)
tempNormalFn(1996);

// polyfill bind impl 

Function.prototype.mybind = function (obj = {}, ...args1) {
    if (typeof this !== 'function') {
        throw new Error('not callable');
    }

    obj.fn = this;

    return function (...args2) {
        obj.fn(...args1, ...args2)
    }
}

const tempPolyfillFn = printAgeYear.mybind(person3, 28)
tempPolyfillFn(1996);