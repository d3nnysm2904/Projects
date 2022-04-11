 function createInstructor1(firstName, lastName){
     return {
       firstName: firstName,
       lastName: lastName
     }
   }


/* Write an ES2015 Version */

const createInstructor =(firstName,lastName)=>({firstName,lastName})


//--------------------------------------------------------------------
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

/* Write an ES2015 Version */

let favoriteNum =42;
const  instructor1 ={firstName:'Colt',
[favoriteNum]:'Thats my favorite '}




//Object Method
var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }

  /* Write an ES2015 Version */
  const instructorr ={
      firstName:'Colt',
      sayHi(){return 'Hi'},
      sayBye(){return this.firstName + 'says bye '}
  }


  //Animal function 
   const createAnimal=(animal,action,sound)=>{
       return {
           animal,
           [action](){return sound}
       }}