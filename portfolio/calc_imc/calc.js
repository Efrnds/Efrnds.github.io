function funcao1() {
  var peso = document.getElementById("peso");
  var altura = document.getElementById("altura");
  var imc = peso.value / (altura.value * altura.value);

  document.getElementById("result").innerHTML = "Seu imc é de: " + imc.toFixed(2);

  if (imc < 16) {
    document.getElementById("div-result").style.backgroundImage = "none";
    document.getElementById("media").innerHTML = "Baixo peso severo.";
    document.getElementById("div-result").style.backgroundColor = "#ff0000";
    document.getElementById("div-result").style.color = "#fff";
  } else if (imc >= 16 && imc <= 16.9) {
    document.getElementById("div-result").style.backgroundImage = "none";
    document.getElementById("media").innerHTML = "Baixo peso moderado.";
    document.getElementById("div-result").style.backgroundColor = "#ff5000";
    document.getElementById("div-result").style.color = "#fff";
  } else if (imc >= 17 && imc <= 18.49) {
    document.getElementById("div-result").style.backgroundImage = "none";
    document.getElementById("media").innerHTML = "Baixo peso leve.";
    document.getElementById("div-result").style.backgroundColor = "#ffd000";
    document.getElementById("div-result").style.color = "#000";
  } else if (imc >= 18.5 && imc <= 24.9) {
    document.getElementById("div-result").style.backgroundImage = "none";
    document.getElementById("media").innerHTML = "Peso ideal.";
    document.getElementById("div-result").style.backgroundColor = "#2eff00";
    document.getElementById("div-result").style.color = "#000";
  } else if (imc == 25) {
    document.getElementById("div-result").style.backgroundImage = "none";
    document.getElementById("media").innerHTML = "Sobrepeso.";
    document.getElementById("div-result").style.backgroundColor = "#ffd000";
    document.getElementById("div-result").style.color = "#000";
  } else if (imc >= 25 && imc <= 29.9) {
    document.getElementById("div-result").style.backgroundImage = "none";
    document.getElementById("media").innerHTML = "Pré-obesidade.";
    document.getElementById("div-result").style.backgroundColor = "#ff5000";
    document.getElementById("div-result").style.color = "#fff";
  } else if (imc >= 30 && imc <= 34.9) {
    document.getElementById("div-result").style.backgroundImage = "none";
    document.getElementById("media").innerHTML = "Obesidade moderada.";
    document.getElementById("div-result").style.backgroundColor = "#ff3f00";
    document.getElementById("div-result").style.color = "#fff";
  } else if (imc >= 35 && imc <= 39.9) {
    document.getElementById("div-result").style.backgroundImage = "none";
    document.getElementById("media").innerHTML = "Obesidade alta.";
    document.getElementById("div-result").style.backgroundColor = "#ff2e00";
    document.getElementById("div-result").style.color = "#fff";
  } else if (imc >= 40) {
    document.getElementById("div-result").style.backgroundImage = "none";
    document.getElementById("media").innerHTML = "Obesidade muito alta.";
    document.getElementById("div-result").style.backgroundColor = "#ff0000";
    document.getElementById("div-result").style.color = "#fff";
  } else {
    document.getElementById("div-result").style.backgroundImage = "url(/imagens/missing.jpg)";
    document.getElementById("div-result").style.color = "#ff99ff";
  }
}
