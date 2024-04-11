/* 2 types of memories are present in JS
    Stack memory - all primitive values are stored in stack memory.
            values never given to another variable but copy of value is given in case of copy value.

    Heap memory - non primitive are stored in heap.
                original reference is given in case of copy value
*/
/* ------ stack memory --- */
let a= 10
let b=a    // here copy of a is given to a not original value or reference of original value
console.log(b)

b=15
console.log(b);  //15
console.log(a);    //10

/* ----- heap memory -----*/
let objOne ={ sname:"yash",sid:1}
let objTwo = objOne  // here original reference of objOne is given to objTwo 
console.log(objTwo);

objTwo.sid=2
console.log(objOne);  // here value will be changed in both objects as reference is same.