/* 1. Way to print javascript */
console.log("HELLO WORLD", 4 + 6, "log");
document.write("hii coder");


/* 2. javascript console Api */
console.warn("this is alert");
console.error("error");


/* 3. javascript variable */
var number1=34;
var number2=56;
console.log(number1+number2);


/* 4. datatypes
1.primitive: undefined,null,number,string,boolean,symbol
2.reference: arrays,objects
*/

//string
var str1="this is cat";
var str='this is dog';

//number
var num1=23;
var num2=45;

//object
var mark={
    ram: 23,
    ramu: 34,
    er:67
}
console.log(mark);

//undefined
var und;
console.log(und);

// null
var n=null;
console.log(n);

//booleans
var a=true;
var b=false;
console.log(a,b);

//array
var arr=[1,2,3,"bp",4,5];
console.log(arr);
for(var i=0;i<arr.length;i++)
{
    //console.log(arr[i]);
    if(i==2)
    {
        //break;
        continue;
    }
    console.log(arr[i]);
}
arr.forEach(function(element)
{
    console.log(element);
})

let j=0;
while(j<arr.length)
{
    console.log(arr[j]);
    j++;
}
let j1=0;
do{
    console.log(arr[j1]);
    j1++;
}while(j1<arr.length);



/* 5. operator */

//Arithmetic
var a=23;
var b=45;
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);

//Assignment
var c=b;
c+=2;
console.log(c);

//comparison
var a=23;
var b=34;
console.log(a==b);
console.log(a<b);
console.log(a<=b);
console.log(a>=b);

//logical
console.log(true && true);
console.log(true || true);
console.log(!true);



/* function */
function avg(a,b)
{
    return (a+b)/2;
}
a1=avg(2,3);
b1=avg(1,5);
console.log(a1,b1);



/* conditional */
var a=23;
if(a>5)
{
    console.log("you are lawyer");
}
else{
    console.log("you are doctor");
}



let myArr = ["Fan", "Camera", 34, null, true];
// Array Methods
// console.log(myArr.length);
// myArr.pop();
// myArr.push("harry")
// myArr.shift()
// const newLen = myArr.unshift("Harry")
// console.log(newLen);
// console.log(myArr);

// String Methods in JavaScript
let myLovelyString = "I am a good good boy";
// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf("good"))
// console.log(myLovelyString.lastIndexOf("good"))

// console.log(myLovelyString.slice(1,4))
d = myLovelyString.replace("Hari", "Rohan");
// d = d.replace("good", "bad");
// console.log(d, myLovelyString)

let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());
 
// DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName("container")
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText); 

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText); 
tn = document.getElementsByTagName('div')
// console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element); ---> removes an element
 
// Selecting using Query
// sel = document.querySelector('.container')
// console.log(sel)
// sel = document.querySelectorAll('.container')
// console.log(sel)

// function clicked(){
//     console.log('The button was clicked')
// }
// window.onload = function(){
//     console.log('The document was loaded')

// }
// Events in JavaScript
// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Clicked on Container")
// })

// firstContainer.addEventListener('mouseover', function(){
//     console.log("Mouse on Container")
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log("Mouse out of Container");
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on Container");
// })

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Mouse down when clicked on Container");
// })


// Arrow Functions
// function summ(a, b){
//     return a+b;
// }
summ = (a,b)=>{
    return a+b;
}

logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
    console.log("I am your log")
}
// SetTimeout and setinterval
// clr = setTimeout(logKaro, 5000);
// clr = setInterval(logKaro, 2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// JavaScript localStorage
// localStorage.setItem('name', 'ram') 
// localStorage 
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();

// Json 
// obj = {name: "harry", length: 1, a: {this: 'tha"t'}}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse(`{"name":"hari","length":1,"a":{"this":"that"}}`)
// console.log(parsed);

// Template literals - Backticks
a = 34;
console.log(`this is my ${a}`)