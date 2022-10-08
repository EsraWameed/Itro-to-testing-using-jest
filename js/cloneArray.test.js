const cloneArray = require('./cloneArray')
test('properly clones the array', ()=>{
    // const array = [1,2,3]
    //use to equal instead of tobe to ensure they take same memory
    expect(cloneArray([1,2,3])).toEqual([1,2,3])
    //to make sure it's a copy and that it's not the exact same array
    expect(cloneArray([1,2,3])).not.toBe([1,2,3])
})
