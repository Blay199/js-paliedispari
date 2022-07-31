function palindroma(){
    let parola = prompt("Inserisci una parola");
    let lettere = parola.split ('')
    let word = lettere
    let backWord = word.reverse ()
    for (let i = 0; i < lettere.length; i++) {
        if (lettere[i] === backWord[i]) {
            console.log ('Parola Palindroma')
        }else {
            console.log ('Parola non Palindroma')
        }
    }
    // console.log (backWord)
    return parola 
}
