var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
event.preventDefault();

var form = document.querySelector('#form-adiciona');
// extrai informações do form
var nome = form.nome.value;
var peso = form.peso.value;
var altura = form.altura.value;
var gordura = form.gordura.value;






function obtemPacientedoFormulario(form){
    var paciente = {
      nome: form.nome.value,
      peso: form.peso.value,
      altura: form.altura.valeu,
      gordura:form.gordura.value,
      imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
  var pacienteTr = document.createElement('tr');
  var nomeTd = document.createElement('td');
  var pesoTd = document.createElement('td');
  var alturaTd = document.createElement('td');
  var gorduraTd = document.createElement('td');
  var imcTd = document.createElement('td');

  nomeTd.textContent = paciente.nome;
  pesoTd.textContent = paciente.peso;
  alturaTd.textContent = paciente.altura;
  gorduraTd.textContent = paciente.gordura;
  imcTd.textContent = paciente.imc;

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);// adiciona um novo paciente na tabela

  var tabela = document.querySelector('#tabela-pacientes');

  tabela.appendChild(pacienteTr);


  return pacienteTr;

}
