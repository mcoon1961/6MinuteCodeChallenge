
const diamond = require('./diamond');

test('Letter A should be indented the number of spaces that the given letter appears in the alphabet', () => {
    expect(diamond.getIndexOfLetter("J")).toBe(10)
});
/*test('Diamond of A is just one line with an A', () => 
{
    expect(diamond.diamondMaker("B")).toBe("A")
});

test('there should be 2x-1 instances of the given letter printed', () => {
    expect()
}
)
*/
test('lines must be indented by the difference between the index of the given letter and the current letter.', () => {
    expect(diamond.diamondLineMaker("I","A")).toBe("        A") 
})
