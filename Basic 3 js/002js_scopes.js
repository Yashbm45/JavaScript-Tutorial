//******************* Scopes   ***********************//
/*   


*/

/*
if(true){
let a=20
const b=30
var c=40}

//console.log(a);     // not defined error block scope
//console.log(b);    // b not defined 
console.log(c);     // print 40 --- globle scope.

*/

// Scopes in nested blocks.

function nest(){
    let a=10;
    function nestIn(){
        let b=20;
        console.log(a);   // here nestIn can access a because it is child of nest();
    }
    nestIn()   // must be called otherwise not executed.
    //console.log(b);        // because parent block cannot access property of child block.
}
// nest();

console.log(addOne(2));    // return 3 possible
function addOne(num){
    return num +1;
}

console.log(addTwo(2));  // give error because cannot call fun before declaration
const addTwo = function (num){
    return num+2;
}