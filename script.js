// FizzBuzz activity

let num = 6;

if (num % 3 == 0 && num % 5 == 0) {
  console.log("fizz buzz");
} else if (num % 3 == 0) {
  console.log("fizz");
} else if (num % 5 == 0) {
  console.log("buzz");
} else {
  console.log(`${num}`);
}

// Random number between 1-30 activity

let randomNumbers = [];
for (let i = 0; i < 6; i++) {
  randomNumbers.push(Math.floor(Math.random() * 31) + 1);
}
for (let i = 0; i < randomNumbers.length; i++) {
  if (randomNumbers[i] % 7 == 0) {
    console.log(`${randomNumbers[i]} is divisible by 7`);
  } else {
    console.log(`${randomNumbers[i]} is not divisible by 7`);
  }
}

// random 6 numbers between 1-50

for (let i = 0; i < 6; i++) {
  console.log(Math.floor(Math.random() * 51) + 1);
}

// Countdown from 9-0 activity

for (let i = 9; i >= 0; i--) {
  console.log(i);
}

// pet object activity

const pet = {
  name: "Luca",
  typeOfPet: "Cat",
  age: 4,
  colour: "ginger",
  eat() {
    return `${this.name} is eating`;
  },
  drink() {
    return `${this.name} is drinking`;
  },
};

// password checker activity

password = "Ropes123";

if (password.length < 8) {
  console.log("password is too short");
} else {
  console.log(`${password}`);
}

// Check if number is divisible by 3 or 5

let num = 15;

if (num % 3 == 0 || num % 5 == 0) {
  console.log("This number is divisible by 3 or 5");
} else {
  console.log("Enter a different number");
}
