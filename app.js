const endDate="21 MAR 2024 10:00 PM"
document.getElementById("end-date").innerText=endDate
const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const second=document.querySelector("#second");
 
function clock(){
    const end=new Date(endDate)
const now =new Date();
const diff=(end-now)/1000;              
// diffrence give milisecond so change into second dived by 1000
const dayBox=(Math.floor(diff/3600/24));
days.innerText=dayBox;

const hourBox=(Math.floor(diff/3600)%24);
hours.innerText=hourBox;
 
const minuteBox=(Math.floor(diff/60)%60);
console.log(minuteBox)
minutes.innerText=minuteBox;

secondBox=(Math.floor(diff)%60)
second.innerText=secondBox
}
clock();
// initial call

setInterval(
    ()=>{
        clock();
    },1000
)
