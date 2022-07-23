submit = document.getElementById("submit");
initals = document.getElementById('intials');
clear = document.getElementById('.clear');
console.log(initals);
prevscore = document.getElementById("prevscore");
const form = document.getElementById('form');

if(submit){
form.addEventListener('submit',(e)=>{
    console.log(score);
    
    let scores=localStorage.getItem("scores");
      if(scores==null)
      scoreobj = [];
      else{
          scoresobj = JSON.parse(scores);
      }
      scoresobj.push(score,intials);
      localStorage.setItem("scores",JSON.stringify(scoresobj));
      intials = "";
      console.log(scoresobj);
});}
back = document.querySelector(".back");
    clear = document.querySelector(".clear");
if(back)
{    
back.onclick = ()=>{
    console.log("back");
    location.href="index.html";
}
}
if(clear)
{    
clear.onclick = ()=>{
    console.log(score);
    
}
}





   