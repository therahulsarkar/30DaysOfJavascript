/*Primitive datatype [Immutable-> Non modifiable]: Numbers-> Int, float 
Strings, Boolean, Null, Undefined.

Non-primitive datatype [mutable-> Modifiable]: Object, Functions, Arrays
*/
let nums = [1,2,3];
console.log(nums); //1,2,3

nums[0] = 0;
console.log(nums);//0,2,3

let num1= [1,2,3,4,5];
let num2= [1,2,3,4,5];
console.log(num1 == num2); //false

let user1 = {name: "Rahul", age:21}; 
let user2 = {name: "Rahul", age:21};
console.log(user1 == user2); //false

/*Don't compare non-primitive data types [arrays,functions,objects]
Non primitive values are referred to as reference type*/
let num3= [1,2,3,4,5];
let num4 = num3;
console.log(num3 == num4); //True

let user3 = {name: "Rahul", age:21};
let user4= user3;
console.log(user3 == user4); //True

//This will throw error for let & const
var a = 10; console.log(a);
var a = 20; console.log(a);

// Math object 
const PI = Math.PI; console.log(PI); //3.14159265...
console.log(Math.round(PI)); //3
console.log(Math.round(9.81)); //10
console.log(Math.floor(PI)); //3
console.log(Math.min(-1,0,1,2,3,4,5), Math.max(-1,0,1,2,3,4,));
console.log(Math.random());

console.log(Math.floor(Math.random() *11)); //Prints random num between 0 & 10
console.log(Math.abs(-10)); //Absolute value -> 10
console.log(Math.sqrt(100)); //Square root -> 10
console.log(Math.pow(3,2)); //power -> 9
console.log(Math.log(2));

// Trigonometry
console.log(Math.sin(0));
console.log(Math.sin(60));

let random1 = Math.random(); //0 to 0.999
let random2 = Math.random()*11; //0 to 10.999
let random3 = Math.floor(Math.random()*11); //0 to 10
console.log(random1, random2, random3);

// String -> "" '' `` 
// String Concatenation -> Connecting 2 or more strings together
let n1 = "Hey", n2 ='I am', n3 = `Rahul`; 
console.log(n1 + n2 + n3); //Hey I am Rahul

/* Long literal strings -> \
Escape sequence -> [\n newline] [\t tab, means 8 spaces]
[\\ back slash] [\' single quote] [\" Double quote]*/
const paragraph = "Hey I am Rahul from \'West Bengal\' India \n I am a \"full stack developer\" "
console.log(paragraph);

// Template literals -> ` ${}`
let nam = "Rahul", age= 21;
console.log(`Hi I'm ${nam}, I'm ${age} years old`);

/* String method
1. length (returns no of characters including empty spaces)
2. Accessing characters: name[2] -> Get the 3rd character
3. toUpperCae()

*/
//Getting the last index of the string
let string1 = "Hey buddy wassup?", lastIndex = string1.length - 1;
console.log(lastIndex);






