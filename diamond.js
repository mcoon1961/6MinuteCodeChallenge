const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M"
                 ,"N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function diamond(letter) 
{
    let letterIndex;
    console.log("Letter is: ", letter);    
    letterIndex = 1+alphabet.indexOf(letter);
    return letterIndex;
}

module.exports = diamond