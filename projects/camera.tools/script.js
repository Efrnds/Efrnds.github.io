function iniciarSlideImagens() {

    var control = [
        'img/Control/1.png',
        'img/Control/2.png',
        'img/Control/3.png',
        'img/Control/4.png',
        'img/Control/5.png',
        'img/Control/6.png',
        'img/Control/7.png',
        'img/Control/8.png',
        'img/Control/9.png',
        'img/Control/10.png',
        'img/Control/11.png',
        'img/Control/12.png',
        'img/Control/13.png',
        'img/Control/14.png',
        'img/Control/15.png',
        'img/Control/16.png',
        'img/Control/17.png',
        'img/Control/18.png',
        'img/Control/19.png',
        'img/Control/20.png',
        'img/Control/21.png',
        'img/Control/22.png',
        'img/Control/23.png',
        'img/Control/24.png',
        'img/Control/25.png',
        'img/Control/26.png',
        'img/Control/27.png',
        'img/Control/28.png',
        'img/Control/29.png',
        'img/Control/30.png',
        'img/Control/31.png',
        'img/Control/32.png',
        'img/Control/33.png',
        'img/Control/34.png',
        'img/Control/35.png',
        'img/Control/36.png',
        'img/Control/37.png',
        'img/Control/38.png',
        'img/Control/39.png',
        'img/Control/40.png'];


    var image = document.getElementById("corpo");

    var i = 0;
    setInterval(function () {
        image.style.backgroundImage = "url(" + control[i] + ")";
        i = i + 1;
        if (i == images.length) {
            i = 0;
        }
    }, 3000);
}

function fun1() {
    let menu = document.getElementById("onoff1");
    let random = document.getElementById("onoff2");

    menu.addEventListener('change', () => {
        if (menu.checked == true) {
            document.getElementById("principal").style.background = "none";
            document.getElementById("p-menu").style.color = "#530056";
            document.getElementById("p-menu").style.fontFamily = "IBMPlexMono-Bold";
        } else {
            document.getElementById("principal").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
            document.getElementById("p-menu").style.color = "#fff";
            document.getElementById("p-menu").style.fontFamily = "IBMPlexMono-Bold";
        }
    });


    if (menu.checked == true) {
        document.getElementById("demo1").innerHTML = "OFF";

    } else {
        document.getElementById("demo1").innerHTML = "ON";
        // document.getElementsById("principal").style.background = "rgba(0, 0, 0, 0.75)";
    }
    if (random == true) {
        document.getElementById("demo2").innerHTML = "OFF";
    } else {
        document.getElementById("demo2").innerHTML = "ON";
    }
};

function load() {
    document.getElementById("demo1").innerHTML = "ON";
    document.getElementById("demo2").innerHTML = "ON";
};

function fun2() {
    let btn1 = document.querySelector("#btn-1");
    let btn2 = document.querySelector("#btn-2");
    let btn3 = document.querySelector("#btn-3");
    let btn4 = document.querySelector("#btn-4");
    let btn5 = document.querySelector("#btn-5");

    btn1.addEventListener('click', () => {
        document.body.style.backgroundImage = "url('img/Control/1.png')";
        iniciarSlideImagens();
    });

    btn2.addEventListener('click', () => {
        document.body.style.backgroundImage = "url('img/Forza.jpg')";
    });

    btn3.addEventListener('click', () => {
        document.body.style.backgroundImage = "url('img/Sayonara.jpg')";
    });

    btn4.addEventListener('click', () => {
        document.body.style.backgroundImage = "url('img/Sekiro.jpg')";
    });

    btn5.addEventListener('click', () => {
        document.body.style.backgroundImage = "url('img/Sky.jpg')";
    });
};


