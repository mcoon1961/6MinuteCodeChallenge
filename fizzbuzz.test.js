const fizzbuzzer = require('./fizz');

test('if divisible by three and five should fizzbuzz', () => {
    expect(fizzbuzzer(30)).toBe('fizzbuzz');
}); 