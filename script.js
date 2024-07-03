// Função para adicionar um novo contato na tabela
function adicionarContato() {
    // Captura os valores dos inputs de nome e telefone
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;

    // Verifica se os campos foram preenchidos
    if (nome.trim() === '' || telefone.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Seleciona a tabela onde serão inseridos os contatos
    var tabela = document.getElementById('tabela-contatos');

    // Cria uma nova linha <tr> para o novo contato
    var novaLinha = tabela.insertRow();

    // Cria as células <td> para nome e telefone
    var celulaNome = novaLinha.insertCell(0);
    var celulaTelefone = novaLinha.insertCell(1);

    // Define o conteúdo das células com os valores capturados
    celulaNome.textContent = nome;
    celulaTelefone.textContent = telefone;

    // Limpa os campos do formulário após adicionar o contato
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';

    // Opcional: pode adicionar um feedback visual ao usuário, como uma mensagem de sucesso
    alert('Contato adicionado com sucesso!');
}

// Função para limpar toda a tabela de contatos
function limparTabela() {
    var tabela = document.getElementById('tabela-contatos');

    // Limpa todas as linhas da tabela (exceto a primeira, que é o cabeçalho)
    while (tabela.rows.length > 1) {
        tabela.deleteRow(1);
    }
}
