const endDate="21 MAR 2024 10:00 PM"
document.getElementById("end-date").innerText=endDate
const days=document.querySelector("#days")
const end=new Date(endDate)
const now =new Date();
const diff=(end-now)/1000;              
// diffrence give milisecond so change into second dived by 1000
const dayBox=(Math.floor(diff/3600/24));
days.innerText=dayBox;



