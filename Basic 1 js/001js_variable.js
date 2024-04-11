/* 
    there are three types of variables in JS
    var , let , const
    value of const cannot be changed once initialised
    where as value of var and let can be changed but let cannot be declared many time.
    recomded not to use of var in JS.

*/

let a=10;
const b=20;
var c=30;


console.table([a,b,c])

var c =35;  //value of var can be changed and var can be declared many times this involves ambiguity problem
a=25;
console.log(a,b,c)

console.log(typeof a); //  typeof method return type of variable.

