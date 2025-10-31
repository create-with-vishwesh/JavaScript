const name = "Vishwesh";
const age = 18;

// console.log(name + count + " Value"); // Outdated Not Recommanded
// back ticks ``
console.log(`Hello my name is ${name} and my age is ${age}.`);

const nameString = new String("Vishwesh");
console.log(nameString);
// console.log(nameString[0]);
// console.log(nameString.__proto__);

// console.log(nameString.length);
// console.log(nameString.toUpperCase());
console.log(nameString.charAt(2));
console.log(nameString.indexOf("h"));

const newString = nameString.substring(0, 4); // cannot take -ve values
console.log(newString);

const anotherStr = nameString.slice(-8, 4); // can take -ve values
console.log(anotherStr);

const removeSpaceStr = "     vishwesh     ";
console.log(removeSpaceStr);
console.log(removeSpaceStr.trim()); // trims left and right

const url = "https://www.google-com";
console.log(url.replace("-", ".")); // https://www.google.com
console.log(url.includes("google")); // true

const stringSplit = "My name is Vishwesh Panchal";
console.log(stringSplit.split(" ")); // [ 'My', 'name', 'is', 'Vishwesh', 'Panchal' ]
