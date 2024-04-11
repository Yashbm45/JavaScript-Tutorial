// Arrays
// Arrays index start from 0
// Arrays are dynamic in Js
// Arrays always create shallow cope means they share same reference while coping.


// Important menthod in arrays 
const myarr2 = new Array("Ironman","Caption","Thor");



//POP Push method
/*
myarr2.push("Drago");
myarr2.push("Drago2")
//myarr2.pop();   // Pop last element
console.log(myarr2);
*/




/*  shift and unshift
   myarr2.unshift("Aron");  // Insert at start
  myarr2.shift();  // remove first element

  console.log(myarr2);
*/


/*
let myarr = [1,2,3,4,5,6]
 // Basic method
console.log(myarr.length);
console.log(myarr[0]);
console.log(myarr.includes(9));  // cheaks element present or not gives boolean result
console.log(myarr.indexOf(4));   // provide index of element
console.log(myarr.indexOf(777));  // if element not present return -1

console.log();

--*/

// Join mehtod
/*
const newArr = myarr.join();   // if we use join() method our array type will changed to string

console.log(newArr);
console.log(typeof newArr);
console.log(typeof myarr);
*/
// Slice, splice
// Difference between slice n splice is that splice change original array. and also in splice last index is not included
/*---
const myn1 =myarr.slice(1,3);
console.log(myn1);

const myn2 = myarr.splice(1,3);
console.log(myn2);

---*/
// joining two arrays using push and concad method
const names = ["yash,shubhya,ro,virat,bumbum"]
const lnames =["developer","analysist","caption","king","fireman"]

//names.push(lnames)  // using push all values are added as one value
/*const all =names.concat(lnames)  //npt recommended - return new array by adding all elements
console.log(all)
console.log(all.indexOf("caption")) // this will add 1 array as element in output array
*/

//spread method
const allArr = [...names,...myarr2]
console.log(allArr);

const anotherarr = [2,,3,4, [1,2,3,4] ,5,6,7]

const realarr = anotherarr.flat(Infinity);
console.log(realarr);


// convert string to array

const str = "Yash";
console.log(Array.from("Yash"));
console.log(Array.from(str));
console.log(Array.from({name:"Yash"})); // gives empty array as doesnot able to define by it self

// creating array from different variables.
const m=100;
const n=200;
const p=400;

console.log(Array.of(m,n,p));
