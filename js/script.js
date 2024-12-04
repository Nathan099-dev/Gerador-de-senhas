function gerarSenhasAleatorias(){
    let caracters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*(){}-=_+|/\,.<>;:[]~^'
    let passwordLength = 32;
    let password = ''
    
    for(let i = 0; i < passwordLength; i++){
        let index = Math.floor(Math.random() * caracters.length);
        password += caracters.substring(index, index + 1)
    }

    document.querySelector('input').value = password;

}


const copyIcon = document.querySelector('i');

copyIcon.onclick = function copiarSenhaGerada(){
    const passwordField = document.querySelector('input').value;
    navigator.clipboard.writeText(passwordField)
    window.alert('Snha copiada com sucesso')

}

