function x(){
    var a = 90 ;
    function y(){
        console.log(a);
    }
    y();
}

x();

//what happenend here is function y tries to find variable x in the local scope of function y and it is not present there so it tries to find it in the local scope of function x and prints it

//this is what closure issss

//closure means - when a function is binded with its lexical scope is called closure(lexical scope of function means local scope along with its lexical scope of the parent)

//now

function a(){
    var x = 9000; 

    function b(){
        console.log(x);
    }
    return b;
}


var ans = a();
console.log(ans); // ans contains the function b

//now we try to call the function ans which is function b we still have the lexical scope of function y maintained

ans();

//when we return a function in javascript not only the function code is returned but also the closure of that function is returned (function binded with its lexical scope)