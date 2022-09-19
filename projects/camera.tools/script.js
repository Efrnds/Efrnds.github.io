function fun1() {
    if (document.getElementById("onoff1").checked == true) {
        document.getElementById("demo1").innerHTML = "ON   ";
    } else {
        document.getElementById("demo1").innerHTML = "OFF";
    }
};

function fun2() {
    if (document.getElementById("onoff2").checked == true) {
        document.getElementById("demo2").innerHTML = "ON   ";
    } else {
        document.getElementById("demo2").innerHTML = "OFF";
    }
};

function load() {
    document.getElementById("demo1").innerHTML = "OFF";
    document.getElementById("demo2").innerHTML = "OFF";
}