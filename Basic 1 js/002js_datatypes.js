/* Datatypes in JS 
    there are total 2 types of dt present in js as follow

    primitive - string , number, null, undefined, Bigint, boolean and symbol
    Non primitive - array, object , function.

*/

let a=10;
console.log(typeof a)

let b =true;
console.log(typeof b)

let c;
console.log(typeof c)  // undefined means value is not defined

/*const d;
d=10;       //Missing initializer in const declaration
console.log(typeof d)  */  // we must initialise type of const variable while creating or it will through error

let d = null;
// let f =d.toInt();   cant convert null into another
console.log(typeof d)  // Object

let e=24n;
console.log(typeof e)

console.log(typeof null)       //object
console.log(typeof undefined)   //undefined
console.log(typeof Object)     //function