const elHour = document.getElementById("hr");
const elMin = document.getElementById("min");
const elSec = document.getElementById("sec");
const elAmpm = document.getElementById("ampm");


function digitalClock(){
    let hrs = new Date().getHours();
    let mins = new Date().getMinutes();
    let secs = new Date().getSeconds();
    let ampm = "AM";

    if(hrs > 12){
        hrs = hrs - 12;
        ampm = "PM";
    }

    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    elHour.innerText = hrs;
    elMin.innerText = mins;
    elSec.innerText = secs;
    elAmpm, (innerText = ampm);
    setTimeout(()=>{
        digitalClock()
    }, 1000)
} 
digitalClock();