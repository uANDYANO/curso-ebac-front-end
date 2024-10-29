$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            },
        },
        submitHandler: function (form) {
            alert("Seu cadastro foi efetuado com sucesso!");
            form.reset();
        },
        invalidHandler: function (form, validator) {
            alert("Por favor, preencha todos os campos!");
        }
    })
})