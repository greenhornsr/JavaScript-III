/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  window binding - when the this keyword binds itself to the window object.  This occurs when the use of the this keyword isn't defined by any of the other binding principles.
* 2.  implicit binding - used for methods and is when the this keyword points to anything left of the dot when the method invocation occurs.
* 3.  new binding - when the this keyword is bound to the this object created by using the new keyword to invoke a function.
* 4.  explicit binding - when the this keyword is pointed to a function by making use of the .call(), .apply(), and .bind() methods.
*



* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const wBind = function(){
    return this;
}
console.log(wBind());

// Principle 2

// code example for Implicit Binding
const myPeopleObj = {
    name: "Tom",
    age: "25",
    shout: function(){
        console.log(`${this.name.toUpperCase()} IS ${this.age}!! `)
    }
}
myPeopleObj.shout();

// Principle 3

// code example for New Binding
function AnimalConstructor(attributes){
    this.newType = attributes.type,
    this.newAge = attributes.age,
    this.newEnvironment = attributes.environment,
    this.newFavFood = attributes.favFood
}

// const cheetah = new AnimalConstructor({
//     type: "Cheetah",
//     age: "3",
//     environment: "Safari",
//     favFood: "Springbok"
// })

const leopard = new AnimalConstructor({
    type: "Leopard",
    age: "5",
    environment: "Jungle",
    favFood: "Hoofstock"
})

// console.log(cheetah);
console.log(leopard);


// Principle 4

// code example for Explicit Binding

const hoofstock = ["gazelle", "impala", "deer", "wildebeast"];

function favFoodToEat(hsfood1, hsfood2, hsfood3, hsfood4){
    console.log(`${this.type} enjoy the tasty delicacies in ${hsfood1}, ${hsfood2}, ${hsfood3}, ${hsfood4}! `);
}

console.log(favFoodToEat.call(leopard, ...hoofstock));
// console.log(favFoodToEat.apply(this, leopard, hoofstock));
// const favFoodMessage = favFoodToEat.bind(leopard, ...hoofstock);

