var dx;
var dy;
var px;
var py;
var vel;
var obj;
var tmp;
const chorro = {
    "Nome": "Ronaldo",
    "Idade": 4,
    "Amigos": ["Robson", "Jose"]
};

var movendo = document.getElementById("movendo");

/*alert(chorro["Nome"]);
alert(chorro["Idade"]);
alert(chorro["Amigos"]);*/

function iniciar() {
    dx = 0;
    dy = 0;
    px = 0;
    py = 0;
    vel = 1;
    obj = document.getElementById("boneco");
    document.addEventListener("keydown", teclaDw);
    document.addEventListener("keyup", teclaUp);
    tmp = setInterval(enterFrame, 1);

}

function teclaDw(event) {
    var tecla = event.keyCode;
    if (tecla == 65 || tecla == 37) { //tecla pra esquerda
        dx = -1
        document.getElementById("boneco").style.transform = "scaleX(-1)";
        document.getElementById("movendo").style.display = "block";
        document.getElementById("idle").style.display = "none";
    } else if (tecla == 87 || tecla == 38) { //tecla para cima
        dy = -1;
        document.getElementById("movendo").style.display = "block";
        document.getElementById("idle").style.display = "none";
    } else if (tecla == 68 || tecla == 39) { //tecla para direita
        dx = 1;
        document.getElementById("movendo").style.display = "block";
        document.getElementById("idle").style.display = "none";
        document.getElementById("boneco").style.transform = "scaleX(1)";
    } else if (tecla == 83 || tecla == 40) { //tecla para baixo
        dy = 1;
        document.getElementById("movendo").style.display = "block";
        document.getElementById("idle").style.display = "none";
    }
}

function teclaUp(event) {
    var tecla = event.keyCode;
    if (tecla == 65 || tecla == 37) { //tecla pra esquerda
        dx = 0
        document.getElementById("movendo").style.display = "none";
        document.getElementById("idle").style.display = "block";
    } else if (tecla == 87 || tecla == 38) { //tecla para cima
        dy = 0;
        document.getElementById("movendo").style.display = "none";
        document.getElementById("idle").style.display = "block";
    } else if (tecla == 68 || tecla == 39) { //tecla para direita
        dx = 0;
        document.getElementById("movendo").style.display = "none";
        document.getElementById("idle").style.display = "block";
    } else if (tecla == 83 || tecla == 40) { //tecla para baixo
        dy = 0;
        document.getElementById("movendo").style.display = "none";
        document.getElementById("idle").style.display = "block";
    }
}

function enterFrame() {
    px += dx * vel;
    py += dy * vel;
    obj.style.left = px + "px";
    obj.style.top = py + "px";
}
window.addEventListener("load", iniciar)