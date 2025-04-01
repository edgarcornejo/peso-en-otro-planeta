var select = document.getElementById("planetas");
select.addEventListener("change", calcular);

/*var nombre_planeta;*/
var g_tierra = 9.8;

function calcular() {
  var peso = document.getElementById("txt_peso").value;
  var select = document.getElementById("planetas").value;
  peso_final = peso * select / g_tierra;
  document.getElementById("resultado").innerHTML = "Pesarías: " + parseInt(peso_final) + " kilos";
}

onload = function () {
  var evitar = document.querySelectorAll('.validanumericos')[0];
  evitar.onkeypress = function (e) {
    if (isNaN(this.value + String.fromCharCode(e.charCode)))
      return false;
  }
  evitar.onpaste = function (e) {
    e.preventDefault();
  }
}