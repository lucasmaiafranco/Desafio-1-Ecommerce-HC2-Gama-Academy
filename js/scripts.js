var contador = 0;
localStorage.clear();

function salvaEmail(event) {
    event.preventDefault();
    let email = document.getElementById("txtEmail").value;

    if(email == ""){
        window.alert("Acho que você esqueceu de preencher seu e-mail!");
    }else{
        if(verificaEmail(email)) {
            window.alert("Este e-mail já está cadastrado!");
        } else {
            contador++; 
            localStorage.setItem(`email_${contador}`, JSON.stringify(email));
    
            window.alert(`E-mail cadastrado com sucesso! ${email}, ja ja você receberá promoções espetaculares!`);
            document.getElementById('txtEmail').value='';
        }
    }
}

function verificaEmail(email) {
    let emailJaCadastrado;
    for(let i = 1; i <= localStorage.length; i++){
        emailJaCadastrado = JSON.parse(localStorage.getItem(`email_${i}`));
        if(emailJaCadastrado.email == email){
            return true;
        }
    }
    return false;
}