
const diamond = require('./diamond');

test('Index of given letter should match position in the alphabet', () => {
    expect(diamond.getIndexOfLetter("J")).toBe(10)
});
test('lines must be indented by the difference between the index of the given letter and the current letter.', () => {
    expect(diamond.diamondLineMaker("I","A")).toBe("        A") 
})
test('lines must be indented by the difference between the index of the given letter and the current letter.', () => {
    expect(diamond.diamondLineMaker("I","C")).toBe("      CCCCC") 
})

