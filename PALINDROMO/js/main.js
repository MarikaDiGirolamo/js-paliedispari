let word = prompt ("Enter a Word");
console.log("You wrote: " , word);

//scrivere la parola al contrario
let wordReverse = inverteWord(word);
console.log("Inverted Word", wordReverse);

// uguale al contrario

if(word.toLowerCase() == wordReverse.toLowerCase()){
    alert("The word is a palindrome!")
} else {
    alert("The word is NOT a palindrome!")
}

//stringa invertita
function inverteWord(toReverse) {
    let invertedWord ="";

    for (let i = toReverse.length -1; i >= 0; i--) {
        let carattere = toReverse[i];
        invertedWord += carattere;
        
    }

    return invertedWord;
}