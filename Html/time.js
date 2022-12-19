/*
function showTime() {

    // return new date and time
    let dateTime= new Date();

    // returns the current local time
    let time = dateTime.toLocaleTimeString();

    console.log(time)

    // display the time after 3 seconds
     setTimeout(showTime, 3000);
}

// calling the function
showTime();


let count = 0;

// function creation
function increaseCount(){

    // increasing the count by 1
    count += 1;
    console.log(count)
}

let id = setTimeout(increaseCount, 3000);

// clearTimeout
clearTimeout(id);
console.log("setTimeout is stopped"); 


function greet(){
    console.log("hello new thing");

}
greet();
*/

const name = 'Peter';
const name1 = "Jack";
const result = `The names are ${name} and ${name1}`;

console.log(result);
