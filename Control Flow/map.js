/* map is a callback function */

const mynum = [1,23,4,5,6,7,8,9,34];

let newnums = mynum.map((n) => {
    return n + 10;
})

//console.log(newnums);

// chaning in maps.
let num1 = mynum
        .map((n)=>{
             return n * 10;
            })
        .map((n1)=>{
            return n1 + 2;
            })

    console.log(num1);

