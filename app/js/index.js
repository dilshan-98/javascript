/* styling */
require("styles/main.scss");
import { filter, reject, resolve } from "bluebird";
/* js */
import $ from "jquery";
import { log, logTitle } from "logger";
import { forEach } from "react/lib/ReactChildren";
import { g } from "react/lib/ReactDOMFactories";
/* your imports */
logTitle("Title");
/* coding examples */

// var name = "Dinusha Dilshan";
// var age = 24;

// var person = {
//   name,
//   age,
//   address: {
//     lane: "8th lane",
//     number: 3,
//   },
// };

// var names = ["Dinusha", "John", "Sara"];

// log(names);

// var singlePerson = { name: "Dinusha", age: "33" };

// Object.values(singlePerson).forEach(function (key, index, value) {
//     log(key + ": " + index + " " + value);
// })

///////////////////////////////////////////////////
/////////////LOOPS

// var details = [
//     { name: "dinusha", age: 22},
//     { name: "saman", age: 55}
// ];

// for(var n in details) {
//     log(details[n].name);
//     log(JSON.stringify(details[n]));
// }

// for(var i=0; i<=details.length; i++){
//     log(details[i].name);
// }

// Object.values(details).forEach(function (key, index) {
//     log(JSON.stringify(key) + ": " + index );
// })

// var i = 0;
// while( details.length>i){
//     log(JSON.stringify(details[i]));
//     i++;
//     i += 1;
// }

// var i = 0;
// do{
//     log(details[i].name);
//     i += 1;
// }while (details.length > i)

//////////////////////////////////////////////
///////////////BREAK AND CONTINUE

// var i = 0;

// while(i <= 5){
//     i++;
//     if(i > 3){
//         break;
//     }
//     log(i);

// }

//////////////////////////////////////////////////
///////////////SWITCH

// var person = {name: "D", age: 22};

// switch (person.age) {
//     case 20:
//         log(person.name + " is 20 years old");
//         break;
//     case 22:
//         log(person.name + ":" + person.age);
//         break;
//     default:
//         log("No idea");
// }

// switch(true){
//     case(person.age>18):
//         log(person.name + " is and adult");
//         break;
//     default:
//         log("NO idea");
// }

/////////////////////////////////////////////////////
//////////////////CALLBACKS

// function mapCallback(n){
//      return (n * 2);
// }

// var map = [1, 2, 3, 4, 5].map(mapCallback);

// log(map);

//////////////////////////////////////////////////////
/////////////////SPREAD OPERATOR AND OBJECTS

// const persons = {
//     name: 'Jane',
//     age: 21
// }

// const city ={
//     names: 'New York',
//     code: 1111
// }

// const det= {...city, ...persons};

// log(JSON.stringify(det, null, 2));

////////////////////////////////////////////////////////////////////
////////////////////////////LEXICAL THIS
// const hi = "HI";

// const persono = {
//   name: 'John',
//   car: ["toyota", "Lambo"],

//   toString()  {
//     var thatt = this;
//     thatt.car.forEach((n) => {

//       log(thatt.name + " " + n);
//     })
//   },

//   hi: hi
// }

// //persono.toString();

// log(persono.hi)

////////////////////////////////////////////////////////////////
//////////////////////////////////////////ENHANCED OBJECT PROPERTIES
// const calculator = name => {
//   return{

//   hi: name
//   }
// }

// log(calculator(20).hi)

////////////////////////////////////////////////
///////////////////////////////////ARRAY DESTRUCTION

// const namesa = ['Anna', 'Mariam', 'Joe', 'Mark', 'Matt'];
// const anna = namesa[0];
// const mariam = namesa[1];
// const joe = namesa[2];

// const [, h, ...rest, k] = namesa;

// log(h +''+rest+''+k)

///////////////////////////////////////////////////////////////
/////////////////////////////////////OBJECT DESTRUCTURING

// const getUser = () => {
//   return {
//     name: 'John',
//     surname: 'Doe',
//     gender: 'male',
//     address: {
//       country: 'United States',
//       city: 'California',
//       postCode: 'CA',
//       fullAddress: {
//         doorNumber: 22,
//         street: 'LA st'
//       }
//     },
//     age: 29
//   }
// };

// const user = getUser();

// //log(getUser().address.fullAddress.doorNumber)

// // const {name, age: agee} = user;
// // log(name + " " + agee);

// // const {age, name, address: { fullAddress: { doorNumber: no}}} = user;

// // log(`${age} ${name} ${no}`);

//////////////////////////////////////////////////////////////////////////////
///////////////////FUNCTION DEFAULT PARAMETERS

// const calsal = (salary, bonus = {
//   teamB:0,
//   empB:0
// }) => {
//   return salary + bonus.teamB + bonus.empB;
// }

// log(calsal(2000, {teamB:0, empB:0}));

/////////////////////////////////////////////////////////////
////////////////////////////CLASSES

// class Animal{
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }

//   eat(){
//     log(`${this.name}, who is ${this.age} years old can eat a lot`);
//   }

//   sleep(){
//     log(`${this.name} is sleeping. Age: ${this.age}`);
//   }

//   static dop() {
//     log("kk");
//   }
// }

// class Dog extends Animal {
//   constructor(name, age){
//     super(name, age);
//   }

//   dogEat(){
//     super.eat();
//     log(`${this.name} is a Dog`);
//   }

// }

// //const animal = new Dog("Pitbull", 40);

// // animal.dogEat();
// // animal.eat();
// // animal.sleep();
// const animal = new Animal("Pitbull", 40);
// //animal.dop()   ----> this won't work

// //Animal.dop()

/////////////////////////////////////////////////////////////
////////////////////////////PROMISES

// const x = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(
//       "Done"
//     );
//   }, 3000);

//   setTimeout(() => {
//     reject(
//       "Undone"
//     );
//   }, 5000);
// })

// x.then((response) => {
//   log(response);
// })
// .catch(error => {
//   log(error);
// })

//////////////////////////////////////////////////////////////////////////////////
////////////////////////////////PROMISE.ALL

// const y = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(["James", "Charli"])
//   }, 3000);

//   setTimeout(() => {
//     reject("Error return")
//   }, 5000)
// })

// const z = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(["Dean", "Johns"])
//   }, 3000)

//   setTimeout(() => {
//     reject("Error returned from 2")
//   }, 5000)
// })

// // Promise.all([y, z]).then(response =>{
// //   log(response)
// // }).catch(error => {
// //   log(error)
// // })

// Promise.all([y, z])
// .then(response => {
//   const [name, surname] = response;

//   name.forEach((n)=> {
//     log(n);
//   })

//   for(var i=0; i<name.length; i++){
//     log(name[i]+" "+surname[i]);
//   }
// })
// .catch(error => {
//   log(error)
// })

///////////////////////////////////////////////////////////////////////
//////////////////////////PROMISES AND FETCH API

// const getUsers = fetch("https://randomuser.me/api/?results=1");

// getUsers.then((response)=>{
//   response.json().then((data) => {
//     log(JSON.stringify(data.results[0].gender))
//   })
// })

// const getRandomUsers = (x) => {
//   const getUsers = fetch(`https://randomuser.me/api/?results=${x}`);
//   getUsers.then((response) => {
//     response.json().then((data) => {
//       log(JSON.stringify(data.results.length));

//       data.results.forEach((n) => {
//         const { email, gender } = n;
//         log(`${email} ${gender}`);
//       });
//     });
//   });
// };

// getRandomUsers(10);


///////Trying promises again///////////
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Data back");
//     }, 3000);

//     setTimeout(() => {
//         reject("Data not back");       
//     }, 2000);
// })

// promise.then((response) => {
//     log(response);
// }).catch(error => log(error));

// const firstnamePromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(["A", "B", "C"]);
//     }, 3000);

//     setTimeout(()=> {
//         reject("First names did not fetch");
//     }, 5000)
// });

// const surnamePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(["D", "E", "F"]);
//     }, 2000);

//     setTimeout(() => {
//         reject("Surnames did not ftech");
//     }, 3000);
// });

// Promise.all([firstnamePromise, surnamePromise]).then((response)=> {
//     const [firstname, surname] = response;

//     [firstname, surname].forEach((i)=>{
//         log(i);
//     })

//     for(var n = 0; n < firstname.length; n++){
//         log(`Name is ${firstname[n]} ${surname[n]}`)
//     }

// }).catch(error => log(error));

// const getRandomMember = n => {
//     const fetchUsers = fetch(`https://randomuser.me/api/?results=${n}`);
//     fetchUsers.then((response) => {
//         response.json().then((data) =>{
//             log(JSON.stringify(data.results[0].gender))

//             data.results.forEach(x => {
//                 const {name, gender} = x;

//                 log(`Name: ${name.first} Gender: ${gender}`)
//             })
//         })
//     })
// }

// getRandomMember(10);

//////////////////////////////////////////////////////////////////
///////////////////////////////GENERATORS
//functions that are paused in async methodology
