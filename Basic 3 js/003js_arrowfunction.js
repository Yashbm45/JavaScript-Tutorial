
/*
const user = {
    username : "yash",
    price : 399,
    welcomeMess : function(){
    console.log(this.username ,' welcome to website'); }
}

user.welcomeMess()
user.username = "sam"
user.welcomeMess()   */
//console.log(this);   // because in node environment current context is empty in brower it is window object

function chai() {
    console.log(this);   // Provide all info about function scope.
}
//chai()

/******************************Arrow function***********************************/
// imp question difference betweeen arrow function and normal function
const code =() => {
    let username = "yash";
    console.log(this.username);   //undefined because this not used in arrow function.
    console.log(this);           // provide {} 
}

// holding arrow function in a variable
const one = (num) => {
    return num+1;
}
console.log(one(2));

// arrow function in one line
const one1 = (num) => (num +1 )
const one2 = (num) =>{ return num+2}

console.log(one1(1));
console.log(one2(2));

const myarr = [1,2,3,45,6]

