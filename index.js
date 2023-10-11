
const fizzbuzzer = require('./fizzbuzzer')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

const main = async () => {
      
      readline.question('What is your top number? ', topNumber => {
        console.log('topNumber is: ', topNumber)
        topNumber++
        for (let x = 1; x<topNumber; x++) {
            console.log(fizzbuzzer(x));
        }
        readline.close();
      });
}
main();