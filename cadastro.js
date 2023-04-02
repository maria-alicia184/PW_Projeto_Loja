const form = document.getElementById('form')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const password = document.getElementById('password')
const pwdConf = document.getElementById('pwdConf')
const cpf = document.getElementById('cpf')
const telefone = document.getElementById('telefone')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs()
})

function checkInputs()
{
    const nomeValue = nome.value
    const emailValue = email.value
    const pwdValue = password.value
    const pwdConfValue = pwdConf.value
    const cpfValue = cpf.value
    const telefoneValue = telefone.value
    /*Validar nome */
    if(nomeValue === ''){
        setErrorFor(nome, "O seu nome é obrigatório.")
    }
    else{
        setSuccessFor(nome)
    }
    /*Validar email */
    if(emailValue === ''){
        setErrorFor(email, "O seu e-mail é obrigatório.")
    }
    else if(!checkEmail(emailValue)){
        setErrorFor(email, "Insira um e-mail válido.")
    }
    else{
        setSuccessFor(email)
    }
    /*Validar senha */
    if(pwdValue === ''){
        setErrorFor(password, "A sua senha é obrigatória.")
    }
    else if(pwdValue.length < 8 || pwdValue.length > 18){
        setErrorFor(password, "Sua senha deve ter entre 8 e 18 caracteres.")
    }
    else{
        setSuccessFor(password)
    }
    /*Validar confirmacao da senha */
    if(pwdConfValue === ''){
        setErrorFor(pwdConf, "A confirmação da sua senha é obrigatória.")
    }
    else if(pwdConfValue != pwdValue){
        setErrorFor(pwdConf, "A senha digitada não corresponde a senha digitada acima.")
    }
    else{
        setSuccessFor(pwdConf)
    }
    /*Validar CPF */
    if(cpfValue === ''){
        setErrorFor(cpf, "O seu CPF é obrigatório.")
    }
    // else if(){
    //     setErrorFor(pwdConf, "O CPF digitado é inválido.")
    // }
    else{
        setSuccessFor(cpf)
    }
    /*Validar telefone */
    if(telefoneValue === ''){
        setErrorFor(telefone, "O seu telefone é obrigatório.")
    }
    // else if(){
    //     setErrorFor(pwdConf, "O telefone digitado é inválido.")
    // }
    else{
        setSuccessFor(telefone)
    }
    /*Valida se todos os campos foram preenchidos */
    const formControls = form.querySelectorAll('.form-control')
    const formIsValid = [formControls].every((formControl) => {return (formControl.className === "form-control sucess")})
    if (formIsValid){
        console.log("Seu cadastro foi criado com sucesso.")
    }
}

function setErrorFor(input, message)
{
    const formControl = input.parentElement
    const small =  formControl.querySelector('small')
    /*Mensagem de erro */
    small.innerText = message
    /*Classe de erro */
    formControl.className = "form-control error"
}

function setSuccessFor(input)
{
    const formControl = input.parentElement
    /*Classe de sucesso */
    formControl.className = "form-control sucess"
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }