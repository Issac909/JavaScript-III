/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. "This" can be used in strict or window 


* 2. "This" can be used Implicitly


* 3. "This" can be used Explicitly with methods call() apply() and bind(). Each of these allow the initial function to gather info from child objects.


* 4. "This" can be used in New Binding to create a new function based on parent function parameters

*
* write out a code example of each explanation above
*/

// Principle 1
function rabbit() {
    console.log(this.sound);
}
var sound = 'THWUMP';

rabbit(); // THIS CODE WILL PRINT "THUMP"
// code example for Window Binding


// Principle 2
let dragonDraval = {
    name: 'Draval',
    species: 'Wyvern',
    gender: 'not specified',
    color: 'red/gray',
    food: 'Cattle',
    dragonInfo: function () {
        console.log(`${this.name} is a ${this.color} ${this.species}. Its gender is ${this.gender}. It loves to eat ${this.food}`);
    }
}
dragonDraval.dragonInfo();
// code example for Implicit Binding


// Principle 3
function Dragon(language) {
    this.tounge = language;
}
let dragon = new Dragon ('Dravals language is of ancient dragon times');
console.log(dragon.tounge);
// code example for New Binding

// Principle 4
function dragonFire() {
    console.log(this.flame);
}
let dragonOne = {
    name: 'Draval',
    flame: 'blue broad-burst flames'
}
let dragonTwo = {
    name: 'Hooktail',
    flame: 'narrow orange flames'
}

dragonFlames = dragonFire.bind(dragonOne); //BIND
dragonFlames();
// code example for Explicit Binding