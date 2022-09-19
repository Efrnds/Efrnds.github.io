function salario() {
    var salary = document.getElementById("salary");
    var hours = document.getElementById("hours");
    var salHour = salary.value / hours.value;
    document.getElementById("resultado").innerHTML = "O salário por hora é: " + salHour;
}





function func2() {
    var chute = document.getElementById("chute");
    document.getElementById("p-chute").innerHTML = "O número que você chutou é: " + chute.value;

    var min = 1;
    var max = 10;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("p-random").innerHTML = random;
    if (chute.value == random) {
        document.getElementById("p-resultado").innerHTML = "Você acertou!";
    } else if (chute.value < random) {
        document.getElementById("p-resultado").innerHTML = "Você errou, o número é menor que o chute.";
    } else if (chute.value > random) {
        document.getElementById("p-resultado").innerHTML = "Você errou, o número é maior que o chute.";
    } else {
        document.getElementById("p-resultado").innerHTML = "sexo";
    }
}