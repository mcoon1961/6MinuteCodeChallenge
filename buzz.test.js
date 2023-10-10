const fizzbuzzer = require('./fizz');

test('if divisible by five should buzz', () => {
    expect(fizzbuzzer(10)).toBe('buzz');
}); 