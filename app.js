var min = 0;
var sec = 0;
var msec = 0;

var dis_min=0;
var dis_msec=0;
var dis_sec=0;

// var minHeading=document.getElementById("min");
// var secHeading=document.getElementById("sec");
// var msecHeading=document.getElementById("msec");


var interval;

function timer(){
    msec++
    // msecHeading.innerHTML=msec;
    if(msec>=50){
        sec++
        // secHeading.innerHTML=sec;
        msec=0
    
      if(sec>59){
        min++
        // minHeading.innerHTML=min;
        sec=0
    }}

if(msec<10){
    dis_msec="0"+msec.toString();
}
else{
dis_msec=msec;
}

if(sec<10){
dis_sec="0"+sec.toString();
}
else{
dis_sec=sec;
}

if(min<10){
dis_min="0"+min.toString();
}
else{
dis_min=min;
}

document.getElementById("disply").innerHTML=dis_min + ":" + dis_sec + ":" + dis_msec



}


    
function start(){
interval=setInterval(timer,20)

}

function reset(){
     
    stop()
    min = 0;
     sec = 0;
     msec = 0;
     document.getElementById("disply").innerHTML="00:00:00"
    
    

}

function stop(){
    clearInterval(interval)
}



// if(msec<10){
//     dis_msec="0"+msec;
// }
// else{
// dis_msec=msec;
// }

// if(sec<10){
// dis_sec="0"+sec;
// }
// else{
// dis_sec=sec;
// }

// if(min<10){
// dis_min="0"+min;
// }
// else{
// dis_min=min;
// }

// document.getElementById("disply").innerHTML=min + ":" + sec + ":" + msec