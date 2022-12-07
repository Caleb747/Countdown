

let year = document.getElementById("year");
let day = document.getElementById("day");
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

let ye = document.getElementById("years");
let da = document.getElementById("days");
let ho = document.getElementById("hours");
let mi = document.getElementById("minutes");
let se = document.getElementById("seconds");

let years = Math.floor(Math.random() * 90);
let days = Math.floor(Math.random() * 364);
let hours = Math.floor(Math.random() * 23);
let minutes =  Math.floor(Math.random() * 59);
let seconds =  Math.floor(Math.random() * 59);

function calculate(){


    if (years > 0){
        seconds -= 1 

        if (seconds <= 0) {
            minutes -= 1;
            seconds = 59;
        }
        if (minutes == 0) {
            hours -= 1;
            minutes = 59;
        }
        if (hours == 0) {
            days -= 1;
            hours = 23;
        }
        if (days == 0) {
            years -= 1;
            days = 364;
        }
            
        year.innerHTML = (years < 10)? "0" + years : years;
        day.innerHTML = (days < 10)? "0" + days : days;
        hour.innerHTML = (hours < 10)? "0" + hours : hours;
        minute.innerHTML = (minutes < 10)? "0" + minutes : minutes;
        second.innerHTML = (seconds < 10)? "0" + seconds : seconds;


    }
    if (years <= 0 && days > 0 && hours > 0 && minutes > 0 && seconds > 0){
        ye.style.color = "red";
        years = 0;
    
        seconds -= 1 

        if (seconds <= 0) {
            minutes -= 1;
            seconds = 59;
        }
        if (minutes == 0) {
            hours -= 1;
            minutes = 59;
        }
        if (hours == 0) {
            days -= 1;
            hours = 23;
        }
        if (days == 0) {
            days = 364;
        }
            
        year.innerHTML = (years < 10)? "0" + years : years;
        day.innerHTML = (days < 10)? "0" + days : days;
        hour.innerHTML = (hours < 10)? "0" + hours : hours;
        minute.innerHTML = (minutes < 10)? "0" + minutes : minutes;
        second.innerHTML = (seconds < 10)? "0" + seconds : seconds;


    }
    if (years <= 0 && days <= 0 && hours > 0 && minutes > 0 && seconds > 0) {
        ye.style.color = "red";
        da.style.color = "red";

        years = 0;
        days = 0;
    
        seconds -= 1 

        if (seconds <= 0) {
            minutes -= 1;
            seconds = 59;
        }
        if (minutes == 0) {
            hours -= 1
            minutes = 59;
        }
    
        
            
        year.innerHTML = (years < 10)? "0" + years : years;
        day.innerHTML = (days < 10)? "0" + days : days;
        hour.innerHTML = (hours < 10)? "0" + hours : hours;
        minute.innerHTML = (minutes < 10)? "0" + minutes : minutes;
        second.innerHTML = (seconds < 10)? "0" + seconds : seconds;


    }


    if (years <= 0 && days <= 0 && hours <= 0 && minutes > 0 && seconds > 0) {
        ye.style.color = "red";
        da.style.color = "red";
        ho.style.color = "red";

        years = 0;
        days = 0;
        hours = 0;


        seconds -= 1 

        if (seconds <= 0) {
            minutes -= 1;
            seconds = 59;
        }
        if (minutes == 0) {
            minutes -= 1 ;
        }
    

        year.innerHTML = (years < 10)? "0" + years : years;
        day.innerHTML = (days < 10)? "0" + days : days;
        hour.innerHTML = (hours < 10)? "0" + hours : hours;
        minute.innerHTML = (minutes < 10)? "0" + minutes : minutes;
        second.innerHTML = (seconds < 10)? "0" + seconds : seconds;


    }


    if (years <= 0 && days <= 0 && hours <= 0 && minutes <= 0 && seconds > 0) {
        ye.style.color = "red";
        da.style.color = "red";
        ho.style.color = "red";
        mi.style.color = "red";


        years = 0;
        days = 0;
        hours = 0;
        minutes = 0;

        seconds -= 1;

        year.innerHTML = (years < 10)? "0" + years : years;
        day.innerHTML = (days < 10)? "0" + days : days;
        hour.innerHTML = (hours < 10)? "0" + hours : hours;
        minute.innerHTML = (minutes < 10)? "0" + minutes : minutes;
        second.innerHTML = (seconds < 10)? "0" + seconds : seconds;


    }

    if (years <= 0 && days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
        ye.style.color = "red";
        da.style.color = "red";
        ho.style.color = "red";
        mi.style.color = "red";
        se.style.color = "red";

        years = 0;
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;

        year.innerHTML = (years < 10)? "0" + years : years;
        day.innerHTML = (days < 10)? "0" + days : days;
        hour.innerHTML = (hours < 10)? "0" + hours : hours;
        minute.innerHTML = (minutes < 10)? "0" + minutes : minutes;
        second.innerHTML = (seconds < 10)? "0" + seconds : seconds;

    }
    

};

function start(){
    document.getElementById("intro").style.display = "none";
    document.getElementById("container").style.display = "flex";
    setInterval(calculate, 1000)
};

