//1 - chiedo all'utente di inserire la sua mail 
 let mail = prompt("inserisci mail ")
 console.log(mail)

 //2 - definisco array con elenco di mail 

 const elenco_mail = ['gmaisto98@gmail.com', 'pincopallo@gmail.com', 'pallopinco@gmail.com', 'tiziocaio@gmail.com', 'pincopallo@libero.it', 'giuseppe@gmail.com']
 console.log(elenco_mail)
 
 //3 - controllo se mail inserita si trova in array 
 //3.1 - definisco variabile booleana flag = false 
 let esito;
 let flag = false;

 //3.2- definisco ciclo for con i minore lunghezza array
 // 3.3 - confronto mail inserita con mail in array 
 //3.4 se mail inserita è presente in array, variabile flag= true 
 for(let i = 0; i<elenco_mail.length; i++){
    if(elenco_mail[i] == mail ){
         flag = true;

    // 4.1 SE variabile flag = true stampo " msil presente in elenco"
}
}
if(flag){
    esito = "la tua mail è presente in elenco "
    console.log("la tua mail è presente in elenco  ")
}
  else{
      
       // ALTRIMENTI stampo " mail non presente in elenco"
    esito = "la tua mail non è presente in elenco "
      console.log("la tua mail non è presente in elenco ")
  }



 document.getElementById('esito_mail').innerHTML= esito;