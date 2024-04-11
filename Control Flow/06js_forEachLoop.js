let myarr = ['cpp','python','java','js','node'];
/*
// for each using arrow function
myarr.forEach( (val) => {
    console.log(val);
});

// for each using normal function.
myarr.forEach(function (val){
    console.log(val)
})
*/

// passing function in for each loop.
function printme(item){
    console.log(item);
}
myarr.forEach(printme)

// for each
myarr.forEach((item, index, arr) => {
    console.log(item,index,arr);
})

// iteration of for each loop over array of objects.

const arrinobj = [
    {
        name : "Yash",
        age : 19
    },
    {
        name : "RO",
        age : 20
    },
    {
        name : "king",
        age : 30
    }
]

arrinobj.forEach((item) =>{
    console.log(item.name);
})