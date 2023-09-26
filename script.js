alert(Bienvenidos);
function sumar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 + num2;
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
    alert("Resultado: " + resultado);
}
function restar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 - num2;
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
    alert("Resultado: " + resultado);
}
function multiplicar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 * num2;
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
    alert("Resultado: " + resultado);
}
function dividir() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (num2 === 0) {
        var mensaje = "No es posible dividir por cero.";
        document.getElementById("resultado").innerHTML = mensaje;
        alert(mensaje);
    } else {
        var resultado = num1 / num2;
        document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
        alert("Resultado: " + resultado);
    }
}
function porcentaje() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = (num1 * num2) / 100;
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
    alert("Resultado: " + resultado);
}
function concatenar() {
    var texto1 = document.getElementById("num1").value;
    var texto2 = document.getElementById("num2").value;
    var resultado = texto1 + texto2;
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
    alert("Resultado: " + resultado);
}