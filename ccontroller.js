'use restrict'; //Modo restrito

//Limpar formulário

const LimparFormulario = (endereco) =>{

     document.getElementById('rua').value = '';
     document.getElementById('bairro').value = '';
     document.getElementById('cidade').value = '';
     document.getElementById('estado').value = '';

}

//Verifica se CEP é válido

const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//preenche compos do formulario

const preencherFormulario = (endereco) =>{

    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;


}