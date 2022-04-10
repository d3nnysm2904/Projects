// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }


  /* Write an ES2015 Version */

const filterOutOdds =(...nums)=> nums.filter((val)=> val % 2===0);


 //-------------------------------------------------------------------------
  const findMin =(...val)=>val.reduce((acc,next)=> acc<next ? acc : next)  

  
 //-------------------------------------------------------------------------
  const mergeObjects =(obj1,obj2)=>({...obj1,...obj2})

  
 //-------------------------------------------------------------------------

 const doubleAndReturnArgs=(arr,...nums)=> [...arr, ...nums.map((val)=>val * 2)]

//-------------------------------------------------------------------------

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (item)=>{
    let idx = Math.floor (Math.random()*item.length);
    return [...item.slice(0 ,idx),...item.slice(idx +1)]

}

//-------------------------------------------------------------------------
/** Return a new object with all the keys and values
from obj and a new key/value pair */


const addKeyVal =(obj,key,val)=> {
    let newObj ={...obj};
return newObj[key]=val}




//-------------------------------------------------------------------------
/** Return a new object with a key removed. */

const removeKey =(obj, key)=>{
    let newObj = {...obj};
    delete newObj[key]
    return newObj
}

//-------------------------------------------------------------------------
/** Combine two objects and return a new object. */

const combine =(obj1,obj2)=>{
    return {...obj1,...obj2};
    
}


//-------------------------------------------------------------------------
/** Return a new object with a modified key and value. */
const update =(obj,key,val)=> {
    let newObj = { ...obj }
newObj[key] = val;
return newObj;}