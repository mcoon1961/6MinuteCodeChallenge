function fizzbuzzer(input) {
    console.log("input:", input)
     result = input
    if ((input % 15) == 0)
     result = 'fizzbuzz'
     console.log('result: ', result)
     return result;    
    if ((input % 3) == 0)
     result = 'fizz';
    if ((input % 5) == 0)
     result = "buzz";
    console.log("result:", result)
    return result;
}

module.exports = fizzbuzzer