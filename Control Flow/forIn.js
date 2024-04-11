// for in loop for object always prefered.

const obj ={
    name : 'Yash',
    age : 19,
    coll : 'DYP',
    id : '981884'
}

for (const key in obj) {
    console.log(`${key} for ${obj[key]}`);
}

// for in loop for arrays
let myarr = ['cpp','python','java','js','node']

for (const key in myarr) {
        console.log(`language is ${myarr[key]}`);
    }

    //Maps
    // for in loop cannot be used on maps because maps are not iteratable.