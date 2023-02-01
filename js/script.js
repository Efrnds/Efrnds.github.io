var 
delay=1000; 
var
delay2=0;
setTimeout(function removebg (){
    document.getElementById("anim").style.display = "none";
    setTimeout(function backNav(){
        document.getElementById("principal").style.opacity = "1";
    },delay2)
    
},delay);

