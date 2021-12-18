//Part 1:

var age = 26;

if (age >= 18 && age <= 25) {
    console.log("You get 50% off");
} else {
    console.log("You have to pay full price");
}

//Part 2:

var firstName = 'Sarah';

if (firstName === 'Bram' || firstName === 'Sarah') {
    console.log("You get a free beer!");
} else {
    console.log("You have to pay for your beer");
}

//Part 3:

var totalAmount = 5 

if (totalAmount > 100) {
    console.log("You get a free bottle of champagne!");
} else if (totalAmount > 50) {
    console.log("You get a free portion of nacho's!");
}
 else if (totalAmount > 25) {
    console.log("You get a free bitterballen!");
}
else {
    console.log("You don't get anything for free");
}
