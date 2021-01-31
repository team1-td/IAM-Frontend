function matchPassword() {
    let password = document.getElementById("registragion__password");
    var passwordConfirm = document.getElementById("registragion__confirm__password");
    if (password.value != passwordConfirm.value) {
        alert("Le password non corrispondono, riprova");
    } else {
        alert("Password creata con successo");
    }
}