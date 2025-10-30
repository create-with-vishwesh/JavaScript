"use strict"; // treat all JS code as newer version

// alert(3+3) //we cannot directly use it in Node js it is not browser 

// console.log(3+3); console.log("Vishwesh")  // Code Readabiltiy is Less

console.log(3+3);
console.log("Vishwesh");

/* Code Readability must be High */

/*
 * Documentations: mdn , tc39
    these defines the standards for js.
*/

/* dataTypes
    1. number -> 2 to power 52 or 53
        |---> big int (if needed)
    2. string -> used in "" or '' 
    3. boolean -> true/false
    4. null -> standalone value 
            -> representation of empty value
    5. undefined -> value not defined
    6. symbol -> to find the uniqeness 
                (will be mostly used in React)

    7. object
 */

console.log(typeof null); // object
console.log(typeof undefined); //undefined
