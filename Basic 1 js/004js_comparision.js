console.log(2>1);  // true
console.log(2 >= 1)  // true
console.log( 2 == 1) // false
console.log(2 >>> 2);  // 1

console.log("2" == 2);  // true both are converted in number
console.log("2" >= 1);  // true
console.log("2" < 1);   // false
console.log("2" < "1"); // false

// never compare 2 differnt type of datatypes, we will get unexpected result
console.log(null == 0); // false
console.log(null > 0);  // false
console.log(null >= 0);  // true

console.log(undefined == 0)   //false


// difference between == and ===
console.log("2" == 2) // true because only values are cheaked
console.log("2" === 2)  // false because type also cheaked known as strict conversion.