// ----------------------JAVASCRIPT LEARN WHAT MATTERS-------------------//

 // ----------------------------- words and keywords -----------------------------//

// hi, hello, how are you---> words
//  let var const if else function async ---> keywords

// ------------------------------ variables -------------------------------------//
var num =1;
// console.log(num)
let numOne ='one ';
const numTwo ='two';

// ------------------------------var & let differences------------------------------------------------//

// console.log(num);     //-----------> undefined
var num =5;

// you can check variable num is declared twice;

// console.log(num2);   //-----> Reffernce error;
let num2 = 6; 


//----------------------------variable declaration & assignment--------------------//
var a; 
 a=12; 

//-------------------------------------undefined and not defined --------------------------------//

var number1;
// here varible declared but not assigned any value called undefined; 

// number3;
// here variable is not declared; reffernce error will occur; 


// -------------------------------hoisting ------------------------//

// console.log(hoisting)

var hoisting = 'newbie';
// the above code will not show error; returns undefined.

// console.log(c);
let c;
// the code above will show error;


// ----------------------------------------------Types in JS--------------//
// Primitives
var a =12;
var b =a;
b= b+2;
// console.log(a,b,a)


 
// non primitives or refferences
let bracket =[1,2,3,4,5]
let bracketTwo = bracket;

let popped = bracketTwo.pop()

// console.log(`popped value is ${popped} and bracketTwo values are ${bracketTwo} also bracket values also same ${bracket}`)


// ------------------------------------conditionals------------------//
// if else and else if
if(10<9){
console.log(true)
}
else if(8-9 == 7){
    console.log(true)
}
else{
    // console.log('default')
}



//--------------------------loops--------------------------//

for(let i =1; i <=15;i++){
//  console.log(i)
    
    if(i%3 === 0 && i%5===0){
        // console.log('fizz buzz')
}
else if(i%3===0){
    // console.log('fizz')
}

else if (i%5===0){
    // console.log('buzzz')
}

}




//-------------------functions-------------------------//
// we have to initiate or declare a function

function apple(){
    console.log('apple')
}

// function calling
apple()



// -----------------------------------------------arrays------------//
let arr =[1,2,3,4,5]

arr.push(6)        //  [1,2,3,4,5,6]
arr.pop()          // [1,2,3,4,5]
arr.unshift(0)    //  [0,1,2,3,4,5]
arr.shift()       // [1,2,3,4,5] 


//-----------objects------------//
var obj ={}
obj.name ='dvp';
obj.age =29;
obj.fullName='devDVP';
console.log(obj)

