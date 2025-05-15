let tarefas = [];

function adicionarTarefa() {

    //recebe valor do input do usuário
    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()

    const mensagem = document.getElementById("mensagem")

    // se o valor do input for vazio então mostre uma mensagem de erro para o usuário
    if (tarefa === "") {
        mensagem.textContent = "Digite uma tarefa para adicioná-la a sua lista!";
        mensagem.style.color = "#a34743";
    } else {
        mensagem.textContent = "Tarefa adicionada com sucesso!";
        mensagem.style.color = "#28a745";

        tarefas.push(tarefa)
        renderizarTarefas()

    }

    //limpa o input do usuário
    inputTarefa.value = ""

}

function renderizarTarefas() {

    //cria novo item (li) e insere na (lista ul)
    const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = ""

    /*for itens na lista
    1. item inicial (iterador)
    2. item final (condicao)
    3. se vai de 1 em 1 elemento ou se pula
    for (iterador, condicao, frequencia)*/


    for (let i = 0; i < tarefas.length; i++) {
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas[i]

        let botaoRemover = document.createElement("button")
        botaoRemover.className = "remover"
        botaoRemover.textContent = "Remover"
        botaoRemover.onclick = () => removerTarefa(i)

        let botaoEditar = document.createElement("button")
        botaoEditar.className = "editar"
        botaoEditar.textContent = "Editar"
        botaoEditar.onclick = () => editarTarefa(i)



        novaTarefa.appendChild(botaoRemover)
        novaTarefa.appendChild(botaoEditar)
        listaTarefas.appendChild(novaTarefa)

    }

}
function removerTarefa(i) {
    tarefas.splice(i, 1)
    renderizarTarefas()
}
function editarTarefa(i) {

    let tarefaEditada = prompt("Edite a tarefa:")
    if (tarefaEditada.trim !== "") {
        tarefas[i] = tarefaEditada
        renderizarTarefas()

    }
}
function limparLista() {
    tarefas.length = 0
    renderizarTarefas()
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Lista de tarefas apagada com sucesso!"
}