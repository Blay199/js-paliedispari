function palindroma(){
    const word = prompt("Inserisci una parola");
    console.log (word)
    const chars = word.split ('')
    console.log (chars)
    const charsRev = chars.reverse()
    console.log (charsRev)
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === charsRev[i]) {
            console.log ('Parola Palindroma')
        }else {
            console.log ('Parola non Palindroma')
        }
    }
    return word
}

palindroma ()