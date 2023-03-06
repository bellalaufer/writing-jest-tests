

const func1 = require('./1.js');
const func2 = require('./2.js');
const func3 = require('./3.js');

describe("tests", () => {

    test('Get sum of array', () => {
        expect(func1([1, 2, 3])).toBe(6)
        expect(func1([2, 5, 10])).toEqual(17)
        expect(func1([1, 1, 1])).not.toEqual(4)
        expect(func1([8, 1, 1])).toBeDefined
        expect(func1([0, 0, 0])).toBeNull

    });

    test('Arithmetic function', () => {
        expect(func2(2, 3, 'add')).toBe(5)
        expect(func2(5, 3, 'subtract')).toEqual(2)
        expect(func2(10, undefined, 'multiply')).toBeFalsy
        expect(func2(8, 4, 'divide')).not.toBe(3)
        expect(func2(1)).toBe('No such result')
    })

    test('Division remainder', () => {
        expect(func3(4)).toBe(true)
        expect(func3(16)).not.toBe(false)
        expect(func3(8)).toBeTruthy
        expect(func3(3)).toBeFalsy
        expect(func3(10)).toBeDefined
    });

})


