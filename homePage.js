
function toggleMenu(){
    let toggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');    
}

setInterval(()=>{
    const time = document.querySelector("#time");
    let muda = new Date();
    var days = ["Jumapili", "Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", "Jumamosi"];
    var months = [1,2,3,4,5,6,7,8,9,10,11,12];
    let day = days[muda.getDay()];    
    let date = muda.getDate();
    let month = months[muda.getMonth()];
    let year = muda.getFullYear();
    let hours = muda.getHours();
    let minutes = muda.getMinutes();
    let seconds = muda.getSeconds();
    let day_night = "ASUBUHI"

    if (hours >= 12 && hours < 15) {
        day_night = "MCHANA";
        
    }

    
    else if (hours == 15){
        day_night = "ALASIRI";
    }
    else if (hours > 15 && hours < 19) {
        day_night = "JIONI";
    }
    else if (hours >= 19){
        day_night = "USIKU"
    }
    else if (hours < 10){
        hours = "0" + hours;
    }
     

    if (minutes < 10){
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    time.textContent = day + " : " + date + " /" + month + " /" + year + " Saa " + hours + ":" + minutes + ":" + seconds + " " + day_night;
});






