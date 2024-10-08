$(document).ready(function() {
    // Evento de envio do formulário
    $('#task-form').on('submit', function(event) {
        event.preventDefault(); // Evita o recarregamento da página
        
        // Pega o valor da tarefa digitada
        let task = $('#task-input').val();

        // Adiciona a tarefa na lista
        if (task) {
            $('#task-list').append('<li>' + task + '</li>');
            $('#task-input').val(''); // Limpa o campo de input
        }
    });

    // Evento de clique nos itens da lista para aplicar "line-through"
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
