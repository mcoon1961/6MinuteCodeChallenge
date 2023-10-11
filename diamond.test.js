const diamond = require('./diamond');

test('Letter A should be indented the number of spaces that the given letter appears in the alphabet', () => {
    expect(diamond("J")).toBe(10)
});