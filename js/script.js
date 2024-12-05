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
    window.alert('Senha copiada com sucesso')

    const campoSenha = document.querySelector('input');
    campoSenha.style.background = 'green';
    campoSenha.style.color = '#fff';
    campoSenha.style.boxShadow = '3px 5px 2px 1px rgba(0, 0, 0, .2)'

}

