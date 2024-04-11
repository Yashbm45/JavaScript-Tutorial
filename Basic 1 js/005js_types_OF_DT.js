// JS is dynamically typed programing language that means we dont 
// have to tell datatype while creating object

/*   Primitive
        7 types - String, number, boolean, null, undefined, Symbol, BigInt.

*/
//Number
score = 10
console.log(typeof score);

//String
let name = "Yash"
console.log(typeof name);

// boolean
let isPresent = true
console.log(typeof isPresent);

//null If we cheaked typeOf null it always gives as object type
let a=null
console.log(typeof a);

//undefined
let b
console.log(typeof b);

//bigint 
let bigNumber = 1234n
console.log(typeof bigNumber);

//symbol
// Symbol always give unique value soo in below statement x is not equal to y.
let x=Symbol("123")
let y =Symbol("123")
console.log(x == y)
console.log(typeof y);

/*  Reference type
    Array, objects, functions
*/

// array - typeOf array is always object
let arrName = ["yash","ro","hitman"]
console.log(typeof arrName);
console.log(arrName) // printing array.

// Object
// objects are always declared in { }
let objName = {
    sname : "yash",
    sid:1,
    isstudent:true
}
console.log(typeof objName);   //type of object will be object
console.log(objName) // printing object
console.log(objName.isstudent)
//Functions
let fun1 = function(){
    return "in the function"
}
console.log(typeof fun1) 



