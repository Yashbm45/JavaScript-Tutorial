let arr = [1,2,34,5,6,78,9]

/*   reduce ((acuumulator, currentValue) => {
    accumulator + currentvalue , initialvalue 
});

*/
let newarr = arr.reduce(function (acc,curr){
    console.log(`acummulator : ${acc} and current value : ${curr}`);
    return acc + curr
}, 5);

console.log(newarr);

console.log("///------------------------///");
// using array function

let newfun = arr.reduce((acc,curr) => {
    console.log(`acummulator : ${acc} and current value : ${curr}`);
    return acc + curr
},0);

console.log(newfun);