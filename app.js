const prompt = require('readline-sync')

const greeting = (name) => {
    console.log(`Hello ` + name);
}

const input = (callback) => {
    const name = prompt.question("Please enter your name: ");
    callback(name); 
}

input(greeting);