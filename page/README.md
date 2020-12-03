# pagina-de-captura

Dependencias:

jquery-3.5.1.min.js
jQuery Mask Plugin v1.7.7


Funções:
Habilitar botão submit após preenchimento do formulário

function checkInputs(inputs) {
    var filled = true;

    inputs.forEach(function(input) {

        if(input.value === "") {
            filled = false;
        }

    });
    return filled;  
}
var inputs = document.querySelectorAll("input");
var submit = document.querySelector("#submit");
inputs.forEach(function(input) {

    input.addEventListener("keyup", function() {
        if(checkInputs(inputs)) {
            submit.disabled = false;
        } else {
            submit.disabled = true;
        }
    });
});

Exibe menssagem de envio:

function confirmation() {
    alert("SEU CADASTRO FOI ENVIADO COM SUCESSO! ENTRAREMOS EM CONTATO COM VOCÊ O MAIS RAPIDO POSSÍVEL.");
}
