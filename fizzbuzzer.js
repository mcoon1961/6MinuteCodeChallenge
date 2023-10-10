function fizzbuzzer(entry) {

    if (entry % 15 == 0)
        return 'fizzbuzz';
    if (entry % 5 == 0)
        return 'buzz';
    if (entry % 3 == 0)
        return 'fizz';

     return entry;
}

module.exports = fizzbuzzer
