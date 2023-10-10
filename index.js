const fizzbuzz = require('./fizzbuzz')
const fizz = require('./fizz')
const buzz = require('./buzz')

function main() {
    let i = 0;
do {
  i += 1;
   if (fizzbuzz(i))
    console.log("fizzbuzz")
    return; 
   if (fizz(i))
    console.log("fizz")
    return;
   if (buzz(i))
    console.log("buzz")
    return;
   console.log(i);  
} while (i < 101);
}