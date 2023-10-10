const fizz = require('./fizz');

test('if divisible by three should fizz', () => {
    expect(fizz(28)).toBe(28);
}); 