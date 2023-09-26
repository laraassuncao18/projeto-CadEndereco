'use restrict'; //Modo restrito

 

//Limpar formulário

const LimparFormulario = (endereco) =>{

    document.getElementById('rua').value = '';

    document.getElementById('estado').value = '';

    document.getElementById('bairro').value = '';

    document.getElementById('estado').value = '';

}

//Verifica se CEP é válido

const eNumero = (numero) => /^[0-9]+$/.test(numero);