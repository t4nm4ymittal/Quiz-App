

 document.getElementById("time");
display= document.querySelector(".display");
header= document.querySelector(".header");
main4 = document.querySelector(".main4");



let score=0;



 let startingtime = 50;
 function updatetime()
 {   if(startingtime<=0)
      remove();
     if(startingtime<10)
     time.innerHTML = `Time=00:0${startingtime}`;
     else
     time.innerHTML = `Time=00:${startingtime}`;
     startingtime--;
 }
 start = document.querySelector(".start button");
main3 = document.querySelector(".main3");
main = document.querySelector(".main");
let que_count=0;
if(start)
{
start.addEventListener("click",function(e){
console.log("clicked!");
main3.classList.add("activemain3");
main.classList.remove("active");
show_que(0);
setInterval(updatetime,1000);
})}
function show_que(index)
{   
    que_text = document.querySelector(".que_text");
    op_text = document.querySelector(".op_text");
    let que_tag = questions[index].questionText;
    let option_tag= '<div class="options">'+questions[index].options[0]+'</div>'+
    '<div class="options">'+questions[index].options[1]+'</div>'+
    '<div class="options">'+questions[index].options[2]+'</div>'+
    '<div class="options">'+questions[index].options[3]+'</div>';
    que_text.innerHTML = que_tag;
    op_text.innerHTML=option_tag;
    let option = document.querySelectorAll(".options");
    for( i=0;i<option.length;i++)
        option[i].setAttribute("onClick","check(this)");
}

function check(answer)
{   console.log(questions[que_count].answer);
    correctans = questions[que_count].answer;
    if(correctans==answer.textContent)
 {   score++;
     display.innerHTML=`<hr>Correct!`
     que_count++; 
     if(que_count<=4)
     show_que(que_count);
     else{
        
       remove();
        
     }

}
else
{
    display.innerHTML=`<hr>Incorrect!`
    startingtime-=10;
}
}
function remove(){
    header.classList.remove("active");
    main3.classList.remove("activemain3");
    main4.classList.add("active"); 
    displayfinal.innerHTML = `Your Final score is:${score}<br><br>`
}
 

