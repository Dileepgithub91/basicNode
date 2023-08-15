//...... async/await..............
 //it is making to handle asynchronous operations without getting tangled up in callback or promise chains.

 //...........Syntax.............

//  async function abc(){
// try {
//      const result= await asyncOperation();//the await keyword  pauses  execution until  asyncOperation is  complete
//      // result
// } 
// catch (error) {
//   //handle error  
// }    
// }

//...............Example............
async function fetchData(){
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/posts');
        const data=await  response.json();
        console.log(data);
        
    } catch (error) {
        console.error("Error fetching  data",error);
    }
}
 console.log(fetchData);


