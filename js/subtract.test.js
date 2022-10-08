const subtract = require('./subtract')

test('properly subtracts two numbers', ()=>{
    expect(subtract(5,4)).toBe(1)
})

//pass --coverage property to jest
// "jest --coverage"