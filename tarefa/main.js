// seleciona o form
const form = document.querySelector('.form');

// seleciona o campo de entrada de tarefa
const input = document.getElementById('input');

// seleciona a lista de tarefas
const lista = document.getElementById('lista');

// cria um array vazio para armazenar as tarefas
let todas = []; // todas as tarefas

// funcao para mostrar as tarefas da lista 
function listarTarefas(){
    lista.innerHTML = ''

    for(let i = 0; i < todas.length; i++){
        const toda = todas[i]

        // cria um elemento de lista, de texto 
        const li = document.createElement('li')
        const span = document.createElement('span')
        const button = document.createElement('button')

        span.innerHTML = toda;

        button.innerHTML = 'Excluir'
        button.addEventListener('click', function(){
            todas.splice(i, 1);
            listarTarefas();
                
        });

        li.appendChild(span);
        li.appendChild(button);


        lista.appendChild(li)
    }
}

    form.addEventListener('submit', function (event){
    event.preventDefault();

    const texto = input.value.trim();

    if(texto.length === 0 ){
        return;
    }

    todas.push(texto);
    input.value = ''
    listarTarefas();
});

listarTarefas;