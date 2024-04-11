/* Java execution context */
/*
        {} --> in brower globle scope is window object.


        1---> memory creation phase. all variables get memory allocated.
        2---> execution phase. 



        ***globle execution context.****
        all code runs using GEC . (this keyword.)
        cycle -- 1) in memory phase. all variables get initialised using undefined value. and for 
            functions definations get added.

        Cycle -- 2) execution phase. variables get initialised with actual values.
        function execution context. for function new execution context  get created 
            where new variable environment and execution thread get created in context
            then for function  memory allocation phase and execution phase start again only for fun.
            return value get send to global execution and second execution context get destroid.


        eval execution context.


        Call stack --- LIFO 
        in case of nested functions inner most function get executed first.
*/