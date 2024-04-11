/*************** Loops for Array iteration ***************/
/*
// for - of loop
let arr = [1,2,3,4,5,6,6,7,8,9,9]
for (const i of arr) {
    console.log(arr[i]);
}

// iteration of array over string.
let s = "Yash"
for (const i of s) {
    console.log(`Each char is ${i}`);
    //console.log(s[i]);   // undefined value
    //console.log(s(i));   // error
}
*/

//maps
const map = new Map()
map.set('In',"India")
map.set('USA',"United States")
map.set('fe',"france")

//console.log(map);

for (const key of map){
    console.log(key);
}
// printing map values in key - value pair.
for (const [key,value] of map){
    console.log(key, ':-',value);
}

// Objects are not iteratable using for of method
const myobj = {
    'game1': 'NFC',
    'game2': 'Spider'
}
/*
for (const [key,value] of myobj){
    console.log(key, ':-',value);
}*/