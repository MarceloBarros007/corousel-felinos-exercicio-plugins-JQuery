$(document).ready(function() {
    $('#Carousel-imagens').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
});


    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000');

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
            mensagem: {
                required: true,
            },

        },
        messages: {
            nome: 'Por favor, insira seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            console.log(camposIncorretos)
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    });
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)

});

