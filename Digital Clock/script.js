// function clock(){
//     let hrs = document.getElementById("hrs");
//     let min = document.getElementById("min");
//     let secs = document.getElementById("secs");

//     let currentTime = new Date();

//     hrs = hrs>12 ? hrs%12:hrs;

//     hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
//     min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
//     secs.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
// }

// setInterval(clock,1000);

function updateClock(){
    let currentTime = new Date();
    let dname = currentTime.getDay()
    let mo = currentTime.getMonth()
    let dnum = currentTime.getDate()
    let yr = currentTime.getFullYear()
    let hou = currentTime.getHours()
    let min = currentTime.getMinutes()
    let secs = currentTime.getSeconds()
    let pe = "AM";

    if(hou == 0){
        hou = 12;
    }
    if(hou > 12){
        hou = hou - 12;
        pe = "PM";
    }

    Number.prototype.pad = function(digits){
        for(let n= this.toString(); n.length; n=0+n);
    }

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let ids = ["dayname","month","daynum","year","hrs","min","secs","period"];
    let values = [week[dname],months[mo],dnum.pad(2),yr, hou.pad(2),min.pad(2),secs.pad(2),pe];
    for(let i = 0; i < ids.length(); i++)
    document.getElementById(ids[i]) .firstChild.nodeValue = values[i];             
}

function initClock(){
    updateClock();
    window.setInterval("clock()",1);
}