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

//*This will throw error for let & const
var a = 10; console.log(a);
var a = 20; console.log(a);

//* Math object 
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

//* Trigonometry
console.log(Math.sin(0));
console.log(Math.sin(60));

let random1 = Math.random(); //0 to 0.999
let random2 = Math.random()*11; //0 to 10.999
let random3 = Math.floor(Math.random()*11); //0 to 10
console.log(random1, random2, random3);

//* String -> "" '' `` 
// String Concatenation -> Connecting 2 or more strings together
let n1 = "Hey", n2 ='I am', n3 = `Rahul`; 
console.log(n1 + n2 + n3); //Hey I am Rahul

/* Long literal strings -> \
Escape sequence -> [\n newline] [\t tab, means 8 spaces]
[\\ back slash] [\' single quote] [\" Double quote]*/
const paragraph = "Hey I am Rahul from \'West Bengal\' India \n I am a \"full stack developer\" "
console.log(paragraph);

//* Template literals -> ` ${}`
let nam = "Rahul", age= 21;
console.log(`Hi I'm ${nam}, I'm ${age} years old`);

/* String method
1. length (returns no of characters including empty spaces)
2. Accessing characters: name[2] -> Get the 3rd character
3. toUpperCase() ->Changes string to uppercase
4. toLowerCase()

5. substr() -> It takes 2 arguments, the starting index & number of characters to slice
6. substring() -> 2 arguments, starting index & stopping index, it doesn't include the character at the stopping index
7. split() -> Splits a string at a specific place 
8. trim() -> Removes trailing space in the beginning or the end of a string.
9. includes() -> Takes substring string argument & return boolean (true or false) -> case sensitive
10. replace() -> old string & new string as parameter 
11. charAt() -> Takes index & return the value at the index
12. charCodeAt() -> Takes index and it returns char code (ASCII number) of the value at that index
13. indexOf() -> Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
14. lastIndexOf() -> Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1

15. concat()->  It takes many substrings & joins them
16. startsWith() -> Takes a substring as argument & if the string starts with that specific substring then returns true
17. endsWith() -> Same as previous but checks the end of the string
18. search() -> Takes a substring & returns the index of the first match
19. match() ->  Takes an substring & returns an array if there is match if not then returns null
20.repeat() ->  It takes a number as argument and it returns the repeated version of the string.
*/

//Getting the last index of the string
let string1 = "Hey buddy wassup?", lastIndex = string1.length - 1;
console.log(lastIndex);

let string2 = 'Javascript';
console.log(string2.substr(4,6)); //script

let string3 = 'Javascript';
console.log(string3.substring(4,8)); //scri 
console.log(string3.substring(4,9)); //scrip 

let string4 = '   Javascript is beautiful';
console.log(string4.split()); //[ 'Javascript is beautiful' ] 
console.log(string4.split("")); //['J', 'a', 'v', 'a', .....]
console.log(string4.split(" ")); //[ 'Javascript', 'is', 'beautiful' ]

let string5 = 'India, USA, Australia, England, NewZealand, Afghanistan, Europe';
console.log(string5.split("; "));

console.log(string4.trim('')); //or just .trim()
console.log(string4.includes('Java')); //true

console.log(string4.replace('Javascript', 'HTML')); //HTML is beautiful
console.log(string4.charAt(10)); //Returns i
console.log(string4.charCodeAt(10));
console.log(string4.indexOf('is'));
console.log(string4.lastIndexOf('Javascript'));
console.log(string4.concat("Seriously man, I'm not kidding"));
console.log(string4.startsWith('Javascript')); //False bcz there's empty space before the word
console.log(string4.endsWith('beautiful'));
console.log(string4.search('beautiful'));
console.log(string4.match('Javascript'));
console.log(string4.repeat(5));

let txt = 'In 2019, I ran 30 Days of JavaScript. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/
/* -> d with escape character means d not a normal d instead acts a digit
   -> + means one or more digit numbers,
   -> if there is g after that it means global, search everywhere.
*/
console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]


/*--------------------------------------------
//?Type casting -> casting converts one datatype to another datatype
String to int: 
parseInt()  Number()  +

String to float:
parseFloat()  Number() +

Float to int
parseInt()
-----------------------------------------------*/
let number = '100' 
console.log(parseInt(number));  //100
console.log(Number(number));
console.log(+number);

let number2 = '9.999'
console.log(parseFloat(number2)); //9.999
console.log(Number(number2));
console.log(+(number2));

let number3 = 9.99;
console.log(parseInt(number3)); //9





