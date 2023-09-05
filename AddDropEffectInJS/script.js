var isstatus=document.querySelector("h5");
var addfriend=document.querySelector("#add");
var check=0;
addfriend.addEventListener("click",function(){
    if(check==0){
    isstatus.innerHTML="Added";
    isstatus.style.color="green";
    check=1;
    addfriend.innerHTML="Remove"
    }
    else{
    isstatus.innerHTML="Removed";
    isstatus.style.color="red";
    addfriend.innerHTML="Add";
    check=0;
    }
})

var con=document.querySelector("#container");
var love=document.querySelector("i");
con.addEventListener("dblclick",function(){
    love.style.color=blue;
})