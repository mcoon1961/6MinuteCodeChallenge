
const diamond = require('./diamond');

test('Letter A should be indented the number of spaces that the given letter appears in the alphabet', () => {
    expect(diamond.determineLeadingSpaces("J")).toBe(10)
});
test('Diamond of A is just one line with an A', () => 
{
    expect(diamond.diamondMaker("A")).toBe("A")
})