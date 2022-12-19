
/*const rectangleArea = (width, height) => {
    let area = width * height;

    return area;
  };
 
console.log(rectangleArea(10,11));


function createIncrement() {
    let count = 0;
    function increment() {
      count++;
    }
    let message = `Count is ${count}`;
    function log() {
      console.log(message);
    }
     return [increment, log];
   }
   const [increment, log] = createIncrement();
   increment();
   increment();
   increment();
   log();

   
let greet = ()=>{
    console.log("hello word");
    return ("this is the new program");


}
console.log(greet());


let add = (num1,num2) => num1 + num2;
let result = add(7,6);
 console.log(result);
 */

 let input1 = Math.abs(5);
let input2 = Math.abs(-7);

let sum = (num1,num2) => num1 + num2;
let result = sum(input1,input2);
console.log(result);