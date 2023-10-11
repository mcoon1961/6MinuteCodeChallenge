const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M"
                 ,"N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function getIndexOfLetter(letter) 
{
    let letterIndex;   
    letterIndex = 1+alphabet.indexOf(letter);
    return letterIndex;
}

function diamondMaker(letter) {
    getIndexOfLetter(letter);
}

function diamondLineMaker(givenLetter, currentLetter) {
    let leadingSpaces = getIndexOfLetter(givenLetter) - getIndexOfLetter(currentLetter);
    let occurences = (getIndexOfLetter(currentLetter)*2)-1;
    let line = "";
    for (let x = 0; x < leadingSpaces; x++) {
        line = line + " ";
    };
    for (let x = 0; x < occurences; x++) {
        line = line + currentLetter;
    };
    console.log(line);
    return line;
}
module.exports = {getIndexOfLetter, diamondMaker, diamondLineMaker}