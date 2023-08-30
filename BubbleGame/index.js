var timer=60;
var score=0;
var hitrn=0;
function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}
function makeBubble(){
    var clutter="";
    for(var i=0;i<80;i++){
        var rn=Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    // document.getElementById("pbtm").innerHTML=clutter;
    document.querySelector("#pbtm").innerHTML=clutter;
}
function runTimer(){
    var timerint=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
        } 
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`<h1 id="end">Game Over</h1><h1 id="end">Your Score is : ${score}</h1>`
        }
    },1000);
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var numb=Number(dets.target.textContent);
    if(numb===hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})
runTimer();
makeBubble();
getNewHit();