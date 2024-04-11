/* 
        for each loop does not return values we have to manually return it.
*/

let arr = [1,2,3,4,5,6,7,8,9,0];

arr.forEach(element => {
    if(element == 1){
        console.log(element);
    }
});

const newe = []
const eacha = arr.forEach(element => {
   // return element > 4;         --- gives erroe because for each canot return 
    if(element > 6){
    newe.push(element);
    }
});
console.log(newe);     // we have to store element in new array in case of for each

/*
// filer returns element 
// it takes arrow function in it.

//const newnum =arr.filter((num) => num > 4);
//console.log(newnum);

const newn = arr.filter((num) => {
    return num > 4                     // if we use {} scope we have to return explicitly.
});

console.log(newn);
*/

const books = [
    { title : "Book one ", edition : 2014 , publish : 2011, gene : "history"} ,
    { title : "Book two ", edition : 2015 , publish : 2012, gene : "Science"} ,
    { title : "Book three ", edition : 2015 , publish : 2013, gene : "maths"} ,
    { title : "Book four ", edition : 2016 , publish : 2014, gene : "Chemistry"} ,
    { title : "Book five ", edition : 2016 , publish : 2015, gene : "Physics"} ,
    { title : "Book six ", edition : 2017 , publish : 2016, gene : "Novel"} ,
    { title : "Book seven ", edition : 2017 , publish : 2017, gene : "Drame"} ,
]

let userbooks = books.filter((book) => {
    return book.edition >=  2017 && book.gene == 'Novel';
})

console.log(userbooks);