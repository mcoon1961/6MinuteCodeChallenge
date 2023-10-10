const buzz = require('./buzz');

test('if divisible by five should buzz', () => {
    expect(buzz(10)).toBe('buzz');
}); 