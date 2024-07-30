
console.log('" 1st javascript"');
// console.warn('its warnimg');
// console.error('its  error');

// we can use var,let  const to carete the variable 
var lang="javascrip prathap";
console.log(lang)
// rules for variable name 
// you can't start the namewith number,special symobl expect underscore(_) and dollar $
// variable names are casein sensitive  
//  the const is use for constant the value of perticular variabke 
//  let is used for block level element 
const arr=[20,30,40,60]
arr.push=[50]
console.log(arr)

// datatypes in js 
console.log("DATARTYPES IN JS ")
// covered the datatype in js 
console.log('this is for type conversion')
let y=10;
console.log ( y,(typeof y )); 
y=String(10);
// after convertion

console.log ( y,(typeof y)); 
let hmlt="PPrathap";
console.log(hmlt);
console.log(hmlt.length);
console.log(hmlt.toLowerCase());
console.log(hmlt.toUpperCase());
console.log(hmlt.endsWith("p"));
console.log(hmlt.includes("p"));
console.log(hmlt.substring(1,5));
console.log(hmlt.slice('a'));
let a="prathap";
let b="h d kote";
let c= `<h1> am ${a} am from ${b}</h1> and i love mern`;
document.body.innerHTML=c
console.log(c)


