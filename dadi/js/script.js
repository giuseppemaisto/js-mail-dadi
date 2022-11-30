//1 - genero numero casuale per utente 
let num_utente = Math.floor(Math.random() * 6) + 1;
console.log("il tuo numero è " + num_utente)

//2 - genero numero casuale per pc 
let num_pc = Math.floor(Math.random() * 6) + 1;
console.log("il numero del pc è " + num_pc)

let esito;
if(num_utente > num_pc){
    esito = "hai vinto ";
    console.log(esito);
}
else if( num_utente == num_pc){
    esito = "pari";
    console.log(esito);
}
else {
    esito = "hai perso";
    console.log(esito);
}