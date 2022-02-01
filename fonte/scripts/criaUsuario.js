// form para da page registrar.ejs para adicionar event listener
//var form = document.getElementById('cria-usuario');

// botão para submit das informações
var botao = document.getElementById('botao-cadastro')

// dados usuario 
var nome = document.getElementById('nome-usuario');
var rg = document.getElementById('rg-usuario');
var cpf = document.getElementById('cpf-usuario');
var email = document.getElementById('email-usuario');
var telefoneCompleto = document.getElementById('telefone-usuario');
var rua = document.getElementById('rua-usuario');
var bairro = document.getElementById('bairro-usuario');
var numero = document.getElementById('numEnd-usuario');
var referencia = document.getElementById('referencia-endereco');
var cidade = document.getElementById('cidade-usuario');
var estado = document.getElementById('estado-usuario');
var cep = document.getElementById('cep-usuario');
var senha = document.getElementById('senha-usuario');
var confirmarSenhaUsuario = document.getElementById('confirmar-senha-usuario');

function validarEmail(){
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

function validarEntradas(){

    if (nome.value.trim() !== ""){
        botao.disabled = false;
    }    
    else {
        botao.style.backgroundColor = '#979695';
        botao.disabled = true;
    }
}

console.log(botao);