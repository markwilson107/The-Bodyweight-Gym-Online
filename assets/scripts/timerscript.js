
var timerBtn = document.getElementById("showTimer")
var timer = document.getElementsByClassName("timer")
minutesCount = 0,secondCount = 0,centiSecondCount = 0
var minutes = document.getElementById("minutes")
var second = document.getElementById("second")
var centiSecond = document.getElementById("centiSecond")

$(document).ready(function() {
    $('#showTimer').click (function() {
             $("#timerEl").toggleClass( "timer" );
    })
});

function startSW() {
   
    $("#pauseCount").removeAttr('disabled');
    $("#resetCount").removeAttr('disabled');
    $("#startCount").attr({'disabled':'disabled'}); 

    minutessetInterval = setInterval(function(){
        minutesCount += 1
        minutes.innerHTML = minutesCount
    },60000)

    secondsetInterval = setInterval(function(){
        secondCount += 1
        if(secondCount >59){
            secondCount = 1
        }
        second.innerHTML = secondCount
    },1000)

    centiSecondsetInterval = setInterval(function(){
        centiSecondCount += 1
        if(centiSecondCount >99){
            centiSecondCount = 1
        }
        centiSecond.innerHTML = centiSecondCount
    },10)
}

function pauseSW() {
    $("#startCount").removeAttr('disabled');
      $("#pauseCount").attr({'disabled':'disabled'}); 

      clearInterval(minutessetInterval)
      clearInterval(secondsetInterval)
      clearInterval(centiSecondsetInterval)
}

 
function resetSW() {
    $("#startCount").removeAttr('disabled');
    $("#resetCount").attr({'disabled':'disabled'}); 
    $("#pauseCount").attr({'disabled':'disabled'}); 

    clearInterval(minutessetInterval)
    clearInterval(secondsetInterval)
    clearInterval(centiSecondsetInterval)

    minutesCount = 0,secondCount = 0,centiSecondCount = 0
    minutes.innerHTML = minutesCount
    second.innerHTML = secondCount
    centiSecond.innerHTML = centiSecondCount

}
 
// Metronome beeps at 1 second intervals

var snd1 = new Audio("./assets/audio/Low_Woodblock.wav");

function beep2() { 
  snd1.play();
}

$(document).ready(function() {
    $('#metronomeStart').click (function() {
          beepInt = setInterval(beep2, 1000)   
          $("#metronomeStart").attr({'disabled':'disabled'}); 
          $("#metronomeStop").removeAttr('disabled');
    })
});

$(document).ready(function() {
    $('#metronomeStop').click (function() {
        console.log("stop")
          clearInterval(beepInt);   
          $("#metronomeStop").attr({'disabled':'disabled'}); 
          $("#metronomeStart").removeAttr('disabled');
    })
});

