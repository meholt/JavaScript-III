/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: When the value of `this` keyword is that of the window
* 2. Implicit Binding: This is used for objects and the value of the `this` keyword
    is dependent upon the object in which it is called/used in.
* 3. Explicit Binding: This is used for functions and there are three different methods that could be used w/ the `this` keyword:
    .call, .apply, and .bind.
* 4. New Binding: This is a constructor function and is used to create a new object. When this is done, the value of `this` keyword 
    is that of the new object that the constructor function created.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayPhrase(name) {
    return `Good morning, ${this}. Have a good day!`;
}

console.log(sayPhrase(`Thomas`));

// Principle 2

// code example for Implicit Binding

const family = {
    father: "Thomas",
    mother: "Megan",
    familyRelations: function() {
        return `${this.father} and ${this.mother} are the parents of...`
    }
}

console.log(family.familyRelations());

// // Principle 3

// // code example for New Binding

function FamilyMember(attributes) {
    this.age = attributes.age;
    this.name = attributes.name;
    this.occupation = attributes.occupation;
    this.goals = attributes.goals;
    console.log(this);
}

FamilyMember.prototype.future = function() {
    return `Right now ${this.name} is currently a ${this.occupation} but is working to be a ${this.goals}`;
}


const mom = new FamilyMember({
    age: 29,
    name: "Megan",
    occupation: "SAHM",
    goals: "future kick-ass web dev"
});


const dad = new FamilyMember({
    age: 30,
    name: "Thomas",
    occupation: "chef",
    goals: "pro gamer"
});

const child1 = new FamilyMember({
    age: 5,
    name: "Chloe",
    occupation: "complete diva",
    goals: "princess"
});

// // Principle 4

// // code example for Explicit Binding

const parents = {
    parents: "Megan and Thomas"
}

const children = ["Chloe", "Hailey", "James", "Adam"];

function familyTree(child1, child2, child3, child4) {
    return `${this.parents} are the parents of ${child1}, ${child2}, ${child3}, ${child4}.`;
}

console.log(familyTree.call(parents, ...children));