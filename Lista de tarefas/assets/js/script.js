const inputTarefa = document.getElementById('novaTarefa');
const botaoAdicionar = document.getElementById('adicionarTarefa');
const listaTarefas = document.getElementById('listaTarefas');

// Função para adicionar nova tarefa

function adicionarTarefa(){
    const tarefaTexto = inputTarefa.value.trim();

    if(tarefaTexto !== ''){
        let li = document.createElement("li");
        li.textContent = tarefaTexto;

        //Botao de remover
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = 'Remover';
        botaoRemover.addEventListener('click', () => {
            listaTarefas.removeChild(li);
        });         
        li.appendChild(botaoRemover);

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


    