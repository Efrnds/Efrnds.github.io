function fun1() {
    if (document.getElementById("onoff1").checked == true) {
        document.getElementById("demo1").innerHTML = "ON";
    } else {
        document.getElementById("demo1").innerHTML = "OFF";
    }
    if (document.getElementById("onoff2").checked == true) {
        document.getElementById("demo2").innerHTML = "ON ";
    } else {
        document.getElementById("demo2").innerHTML = "OFF";
    }
};

function load() {
    document.getElementById("demo1").innerHTML = "OFF";
    document.getElementById("demo2").innerHTML = "OFF";
};

function fun2() {
    let btn1 = document.querySelector("#btn-1");
    let btn2 = document.querySelector("#btn-2");
    let btn3 = document.querySelector("#btn-3");
    let btn4 = document.querySelector("#btn-4");
    let btn5 = document.querySelector("#btn-5");

    btn1.addEventListener('click', () =>{
        document.body.style.backgroundImage = "url('img/Control.png')";
    });

    btn2.addEventListener('click', () =>{
        document.body.style.backgroundImage = "url('img/Forza.png')";
    });

    btn3.addEventListener('click', () =>{
        document.body.style.backgroundImage = "url('img/Sayonara.png')";
    });

    btn4.addEventListener('click', () =>{
        document.body.style.backgroundImage = "url('img/Control.png')";
    });

    btn5.addEventListener('click', () =>{
        document.body.style.backgroundImage = "url('img/Control.png')";
    });
};

