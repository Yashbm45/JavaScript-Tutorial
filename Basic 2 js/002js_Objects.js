// two ways to define object - as liter, as constructor;

// Singleton - made using constructor. mode of only one type.  obj.create

//obj literal - using variable and value
const obj1 ={
            oname:"Yash",
            oid : 1,
            oage : 22,
            oadress : "pune",
            isLogged : false,
            email : "mahamuniyash@gmail.com",
            lastLog : ["today", "yesterday"],
            "Your name " : "rooo"

            
            }
obj1.greet= function(){
    console.log('hello, ${this.name}');
}

console.log(obj1)
//accessing obj elements 2 ways 2nd preffered
console.log(obj1.oname);
console.log(obj1["oid"]);
console.log(obj1["Your name "])

//adding symbol as key
// symbol must be added in [name] : value format  and must defined before use outside obj otherwise its type get changed
const s1 = Symbol("key1");

const obj2 ={
    tname : "yash",
    [ s1 ] : "value"
}
console.log(obj2[s1]); // sysmbol must be accessed through this way otherwise datatype will changed to string
console.log(obj2.s1);  // cant access this way 
console.log(obj2)

// changing value of obj
obj1.email ="yash@gmail.com"
console.log(obj1.email)

Object.freeze(obj2); // value cant change further

