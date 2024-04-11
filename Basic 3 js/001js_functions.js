
/*
function fname(){
    console.log("hi , in the function");
}

fname()

function multi(num1,num2){
    console.log(num1*num2);
}

multi("3",null)


function add(num3,num4){
    console.log(num3+num4)
}
add("3",4)  // acutual number get converted in string so 34 output
add(3,"4")  // acutual number get converted in string so 34 output   
const result =add(3,4)
console.log(result);   // gives ans as undefined because its not returned by function.

// return in function

function division(num1,num2){
    return  num1/num2;

}

const a = division(6,2)
console.log(a)  // 3

function loginuser(username){
    return '${username} just logged in.'
}
console.log(loginuser("yash"))
console.log(loginuser)  // provide undefined as username and functon runs

// cheaking username provided or not
function userlogin(username){
    if(username === undefined){
        console.log("please provide username..");
        return
    }
    else{
    return '${username} just logged in.'
    }
}

console.log(userlogin())
*/
/*
// proving deafult value
function luser(username="yash"){
    return username+' logged in'
}
console.log(luser());


//providing multipule paramters in function.
//rest operator - here it is called rest operator   -- return array.
function cal(...num1){
    return num1;
}
console.log(cal(1,2,3,4,5,6,7))

// case 
function calc(val,val2,...num){
    return num
}
console.log(calc(1,2,3,4,5,6));  // print values from 3 because first 2 values goes in val and val2
*/
/*
//
user ={
    username : "Yash",
    price : 399
}
function handleObject(anyobj){
    console.log('${anyobj.Username} is logged and price is ${anyobj.price}')
}

handleObject(user)
handleObject({username:"ro",price:599})

*/


//returning array element from function.
const arr = [1,23,4,5,6,7,78]

function newarr(getArr){
    return getArr[2];
}

console.log(newarr(arr));
