//.................callback.......

//callback is a function that is passed as an argument to another function.

//....example..............
function some(callback){
    setTimeout(()=>{
        console.log("task is completed");
        callback();
    },1000);
}

function call(){
    console.log("callback function is called");
}
console.log(some(call))


//another  simple example
function abc(c){
    console.log("original function")
    c();
}
function ps(){
    console.log("calling function");
}

console.log(abc(ps))