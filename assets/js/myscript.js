var arrCognomi =[
  "Bianchi",
  "Verdi",
  "Neri",
  "Rossi",
  "Morlacchi",
  "Perletti",
  "Montanari",
  "Masini",
  "Masciandaro",
  "Scotti"
]

var proprioCognome = prompt("Inserisci il tuo cognome: ");

arrCognomi.push(proprioCognome);

console.log(arrCognomi);

for(i= 0; i< arrCognomi.length; i++){
  var cognomeCorrente = arrCognomi[i];
  var cognomiPrecedenti = document.getElementById('listaNonOrdinata').innerHTML;
  document.getElementById('listaNonOrdinata').innerHTML = cognomiPrecedenti + '<li>' +cognomeCorrente + '</li>' ;
}

var cognomiOrdinati = arrCognomi.sort();

for(i = 0; i < cognomiOrdinati.length; i++){
  var cognomeCorrente = cognomiOrdinati[i];
  var cognomi = document.getElementById("listaOrdinata").innerHTML;
  document.getElementById("listaOrdinata").innerHTML = cognomi + "<li>" + cognomeCorrente + "</li>"
}