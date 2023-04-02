const email = document.getElementById('email')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs()
})

function checkInputs()
{
    const emailValue = email.value

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