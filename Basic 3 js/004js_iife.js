/********Imediately Invoke Function Expression (IIFE) ************/
// while writing 2 iife in one file ; must added at the end of each iife.

// ()()  -- write function in first parenthesis
//named iife
(function IIFE1() {
    console.log("called immediately");
}());  

// iife using arrow function
// unnamed iife iifee

(()=>{
    console.log("simple arrow iife");
})();

//iifee with parameters.
((name)=>{
    console.log("iife in arrow function.");
})('yash');   // must add ; because arrow fun has globle scope so this doesnot know where to stop