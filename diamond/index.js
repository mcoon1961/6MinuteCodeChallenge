const diamond = require('./diamond')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

const main = async () => {
      
      readline.question('What letter do you want at the middle of your diamond? ', middleLetter => {
        console.log('Middle Number is: ', middleLetter)
        numOfLoops = diamond.indexOfLetter(middleLetter);
        for (let x = 0; x < numOfLoops; x++) {
            currentLetter = diamond.alphabet[x];
            console.log(diamond.diamondLineMaker(middleLetter,currentLetter));
        }
        for (let x = 0; x < numOfLoops; x++) {
            let y = numOfLoops - 2 - x;
            currentLetter = diamond.alphabet[y];
            console.log(diamond.diamondLineMaker(middleLetter,currentLetter));
        }
        readline.close();
      });
}
main();