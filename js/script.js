//na random numer zmień <img class="krecikP" src="../img/krecikP.png"> na <img class="krecikP" src="../img/krecik.png">


let score = 0;
let randomNum = 0;


function krecik(){
    setInterval(function(){
        randomNum = Math.floor(Math.random()*12); //0-11
        document.getElementById(`blank${randomNum}`).src="../img/krecik.png"
        setTimeout(function(){
            document.getElementById(`blank${randomNum}`).src="../img/krecikP.png";  
        }, 500);
    }, 800); 
}
krecik();

document.querySelectorAll().addEventListener('click', point());
function point(){
    score++;  
    document.getElementById('score').innerHTML = score;  
}
console.log(score);




