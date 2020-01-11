//na random numer zmień <img class="krecikP" src="../img/krecikP.png"> na <img class="krecikP" src="../img/krecik.png">


let score = 0;
let krecik = 

setInterval(function(){
    let randomNum = Math.floor(Math.random()*12); //0-11
    document.getElementById(`blank${randomNum}`).src="../img/krecik.png";
    setInterval(function(){
        document.getElementById(`blank${randomNum}`).src="../img/krecikP.png";  
    }, 800); //400
    clearInterval(); 
}, 2000); //1500

//document.querySelector('krecik.png').onclick(score+1);
document.querySelector(src="../img/krecikP.png").onclick = function(){
    score = score +1;
    console.log(score);
}
console.log(score);
