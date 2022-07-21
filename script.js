
//Função para inserir um dado quando o botão for clicado.
function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

//Função para limpar dados.
function clean() {
    document.getElementById('resultado').innerHTML = "";
}

//Função para apagar um dado inserido.
function back() {
   var resultado = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1); 
}

//Função para realizar os cálculos.
function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;

    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else {
        document.getElementById('resultado').innerHTML = "NÃO HÁ CÁLCULO.";
    }
    
}
