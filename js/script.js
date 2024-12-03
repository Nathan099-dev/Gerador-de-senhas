function gerarSenhasAleatorias(){
    let passwordLength = 16;
    let caracters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*(){}-=_+|/\,.<>;:[]~^'
    let password = ''
    
    for(let i = 0; i < passwordLength; i++){
        let randomString = Math.floor(Math.random() * caracters.length);
        password += caracters(randomString)
    }

    document.querySelector('input').value = password;

}