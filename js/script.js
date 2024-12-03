function gerarSenhasAleatorias(length){
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*(){}-+[]<>,.;:~^|/\='
    let password = ''

    for (i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        password += caracteres[randomIndex]        
    }

    return password;
}

const passwordLength = 16;
const randomPassword = gerarSenhasAleatorias(passwordLength)


