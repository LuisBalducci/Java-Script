const inputTarefa = document.getElementById('novaTarefa');
const botaoAdicionar = document.getElementById('adicionarTarefa');
const listaTarefas = document.getElementById('listaTarefas');

// Função para adicionar nova tarefa

function adicionarTarefa(){
    const tarefaTexto = inputTarefa.value.trin();

    if(tarefaTexto !== ''){
        let li = document.createElement("li");
        li.textContent = tarefaTexto;

        //Adicionando a tarefa na lista
        listaTarefas.appendChild(li);

        inputTarefa.value = '';
        
    }
}

botaoAdicionar.addEventListener('click', adicionarTarefa);

inputTarefa.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        adicionarTarefa();
    }});
    