fetch("https://api.github.com/users/amnur").then(response => {
    if (response.ok) {
      console.log("Contenuto ricevuto");

      return response.json();
    }
    if (response.status >= 100 && response.status < 200) {
       console.log("Informazioni per il client");
    }
    if (response.status >= 300 && response.status < 399) {
       console.log("Redirezione");
    }
    if (response.status >= 400 && response.status < 499) {
       console.log("Richiesta errata");
    }
    if (response.status >= 500 && response.status < 599) {
       console.log("Errore sul server");
    }

 }).then(utente => {
    document.getElementById("login").innerHTML = utente.login,
    document.getElementById("created_at").innerHTML = utente.created_at
 }).catch(error => console.log("Si è verificato un errore!"))



//  fetch("https://iamimageapp.herokuapp.com/login",{
//    mode: 'cors'
// }).then(response => {
   