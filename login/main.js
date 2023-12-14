// seleciona o formulario de login
const form = document.querySelector('.login-form');

// seleciona o campo de entrada do usuario
const usuarioInput = form.querySelector("input[type='text']");
// dessa forma identificamos a tag pelo tipo do input dela, usamos o form ao invés do documento para indicar onde o código deve procurar esse input 
const senhaInput = form.querySelector("input[type='password']");
// seleciona o campo de entrada da senha

    form.addEventListener('submit',(event) => {

    event.preventDefault();

    // obtém os valores dos campos de entrada no usuario e senha e o trim() remove os espaços em franco tanto no cmeço quanto no final de cada campo
    const usuario = usuarioInput.value.trim();
    const senha = senhaInput.value.trim();

    if(usuario === '' || senha === '') {
        alert("Por favor, preencha os campos")
    }
     else if(usuario == 'usuario' && senha === 'senha'){
        alert("Bem vindo!")
        location.repplace("/tarefa/index.html","_self")
    }
    else {
        alert("Usuario ou senha icorreto, tente novamente")
    }
})