$(Document).ready(function(){
    $("#telefone").mask("(00) 0000-00009")
    $("#telefone").blur(function(event) {
        if($(this).val().length ===15) {
            $("#telefone").mask("(00) 00000-0009")
        }else {
            $("#telefone").mask("(00) 0000-00009") 
        }
    })
})

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

function confirmation() {
    alert("SEU CADASTRO FOI ENVIADO COM SUCESSO! ENTRAREMOS EM CONTATO COM VOCÊ O MAIS RAPIDO POSSÍVEL.");
}
