//............promise........


//...........Systax.............

// const myPromise=new Promise((resolve,reject)=>{
//     //Asynchronous code

//     if(/*  operation successful */ ){
//         resolve(/* result data */);
//     }
//     else{
//         reject(/* Error data */);
//     }
// });
// myPromise.then((result)=>{
//     //Handle successful result
// })
// .catch((error)=>{
//     //handleError
// });


//..........Example..............
function fetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const success=true;//simulating a successful fetch
            if(success){
                const user={id:1,name:"Dileep"};
                resolve(user);
            }
            else{
                const  error="Failed to fetch user data";
                reject(error);
            }
        },1000);
    });
}

//using Promise
fetchUserData()
.then((user)=>{
    console.log(`User ID: ${user.id},Name:${user.name}`);
})
.catch((error)=>{
    console.error(`Error: ${error}`);

});


//.........another Example.....

const dileep=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        const data="Data has been fetched";
        resolve(data);
        //reject(data);
    },2000);
});

dileep
.then((result)=>{
    console.log("Successfully data fetched:",result);
})
.catch((error)=>{
    console.error("Error Occured",error);
});
