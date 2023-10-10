const fizzbuzzer = require('./fizzbuzzer')

test('number divisible by 3 and 5 should return fizzbuzz', () => {
    expect(fizzbuzzer(30)).toBe('fizzbuzz');
});

test('number divisible by 3 should return fizz', () => {
    expect(fizzbuzzer(3)).toBe('fizz');
});

test('number divisible by 3 should return fizz', () => {
    expect(fizzbuzzer(6)).toBe('fizz');
});

test('number divisible by 5 should return buzz', () => {
    expect(fizzbuzzer(10)).toBe('buzz');
});

test('number not divisible by 3 or 5 should return number', () => {
    expect(fizzbuzzer(32)).toBe(32);
});