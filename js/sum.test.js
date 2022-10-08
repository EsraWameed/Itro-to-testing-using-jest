// we have to import our sum function
const sum = require('./sum')
// we want to test that our sum function works
//for ex. if passed two numbers 1+2 we want to make sure it equals 3
// use the function called test in jest
// first parameter is a string of what the test is doing

//this will show up inside the console when we run test
//second parameter is a function of what gets called to run test
test('properly adds two numbers', ()=>{
    //inside function ensure our expected results happen. This is called expect
    expect(sum(1,2)).toBe(3)
})

