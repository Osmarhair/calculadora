var resultado = document.getElementById('resultado');

function insert(num) {
    var numero = resultado.innerHTML;
    resultado.innerHTML = numero + num;
}

function clean() {
    resultado.innerHTML = "";
}

function back() {
    var resultado = resultado.innerHTML;
    resultado.innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    resultado.innerHTML = eval(resultado.innerHTML) || 0;
}
