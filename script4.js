let value=0;
const counterelement=document.getElementById("main");
counterelement.innerText=value

function increment(){
    value++;
    counterelement.innerHTML=value;
}
function decreament(){
    value--;
    counterelement.innerHTML=value;
}
function reset(){
    value= 0;
    counterelement.innerHTML=value;
}
