var resultado = document.getElementById('resultado');

function insert(num) {
    var numero = resultado.value;
    resultado.value = numero + num;
}

function clean() {
    resultado.value = "";
}

function back() {
    resultado.value = resultado.value.substring(0, resultado.value.length - 1);
}

function calcular() {
    resultado.value = eval(resultado.value) || 0;
}
