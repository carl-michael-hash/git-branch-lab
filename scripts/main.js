console.log ("Welcome to Conrol Flow")



let amIHappy = true;
let iKnowIt = true;

if (amIHappy ===true) {
    console.log ("clap my hands");
    console.log ("stomp my feet");

}

if (amIHappy === true && iKnowIt ===true) {
    console.log("im happy and i know it");
}

let age = 17;
let isAlive = true;

if (isAlive = true) {
    console.log ("I vote that Mark be fired immediately");
} else {
    console.log("Live in the blissful ignorance of youth");
}


if (age >= 18) {
    console.log ("I vote that Mark be fired immediately");
} else {
    console.log("Live in the blissful ignorance of youth");
}

let hour = 19;
let action = "code";

if (hour < 12) {
    action = "drink coffee and code";
} else if (hour < 17) {
    action = "be tired, cry, and code";
} else if (hour < 20) {
    action ="go for a walk and have peace";
} else {
    action = "cry a lot and don't stop coding";
}

console.log (action)


for (let i = 0; i < 20; i++) {
    console.log ("we loopin");
}

console.log ("done loopin")


let dogs = ["gereman sheppard", "golden retriever", "poodle", "pug", "corgi", "shih tzu"];

for (let i= 0; i < dogs.length; i++) {
    console.log ("doggy: ", dogs[i]);
}

// let number = 1;

// while (number < 9) {
//     console.log ("let's dance");
//     number++;
// }


let number = Math.random();
let timesRun = 0;
console.log (number);


while (number < 0.9) {
    number = Math.random();
    console.log (number);
    timesRun++;
}

console.log(timesRun)