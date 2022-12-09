var 
delay=1200; 
var
delay2=100;
setTimeout(function removebg (){
    document.getElementById("anim").style.display = "none";
    setTimeout(function backNav(){
        document.getElementById("principal").style.opacity = "1";
    },delay2)
    
},delay);

