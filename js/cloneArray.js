//function that duplicates an array
function cloneArray(array){
//spread operator: duplicates array and creating a brand new array from the array we are given
    return [...array]
}

module.exports = cloneArray

//jest is a testing library
//npm init -y initializes all the default values
// npm i --save-dev jest. this will only be used in development to make sure everything runs
// under scripts, change "test" : to jest
// type npm jest to run test
// to test create file and give it exact same file name as file that will be tested.
//used npm test

//testing allows us to know if at some point we broke our function
//unit testing tests the smallest unit of code (a single function)
//breaks code down. you know which single unit is broken.

