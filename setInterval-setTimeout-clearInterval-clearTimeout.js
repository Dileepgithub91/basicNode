console.log("Normal func");

//setTimeout

const timeout=setTimeout(()=>{
    console.log("SetTimeout function");
},1000)

//...........celarTimeout...................

clearTimeout(timeout);

//..........setInterval.......................
const interval=setInterval(()=>{
    console.log("setInterval function");
},1000)

//...................clearInterval...............
//clearInterval(interval);