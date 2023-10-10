const fizzbuzzer = require('./fizz');

test('if divisible by three should fizz', () => {
    expect(fizzbuzzer(28)).toBe(28);
}); 