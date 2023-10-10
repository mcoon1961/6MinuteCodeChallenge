const fizzbuzz = require('./fizzbuzz');

test('if divisible by three and five should fizzbuzz', () => {
    expect(fizzbuzz(15)).toBe(true);
}); 