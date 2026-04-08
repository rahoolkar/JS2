// how javascript executes the code ? whenever any js code is run, global execution context is created and pushed into the call stack and the job of the call stack is to run the code quickly

// now comes the browser - browser have javascript engine which the is the core of the js and also have the callstack but browser also contains the superpoewers like timer, console, localStorage, fetch, Dom, Bom 

// browser = js engine(core) + super powers

//now browser gives access to the super powers wrapped inside a global object which is "window" in case of browsers

//when the code come to setTimeout statement, js takes the callback function and stores it into webapi env and attaches a timer to it and moves on the nect line of code

//when the timers is complete the callback function moves to the callback queue and wait for it turn to execute

//EVENTLOOP acts a bodyguard betwween callback queue and callstack and continuosly check the callback queue if there is any function to run or not

//if there is any function in the callback queue then eventloop checks the callstack if its empty or not, if the callstack is empty then event loop the function to the call stack and if not then it tells the function to wait till the call stack gets empty

//there is also something called microtask queue and it stores all the callbacks which is from promises and this mictotask queue has a higher priority

//eventloop always going to give higher priority to the mictotask queue and untill the microtask queue is not empty it will continuwe to put function into th callstack from the microtask queue. 

//this giving higher priority to the microtaks queue also creates a problem called "starvation of the callback queue" in which the function residing in the callback queue keeps on waiting and never get the chance to execute

// microtask queue - vip line

//callback queue - normal crowd line