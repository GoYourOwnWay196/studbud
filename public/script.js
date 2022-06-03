// TalkersCode. (2022, April 15). Create custom audio player using HTML5 and JavaScript. TalkersCode.com - A Web Development And Internet Marketing Blog. Retrieved June 3, 2022, from http://talkerscode.com/webtricks/create-custom-audio-player-using-html5-and-javascript.php 
// Music player starts here
document.addEventListener("DOMContentLoaded", function() { startplayer(); }, false);
var player;

// Music player is initially off
function startplayer() 
{
 player = document.getElementById('music_player');
 player.controls = false;
}

// Functions to play, pause, stop and change the volume of the music
function play_aud() 
{
 player.play();
} 
function pause_aud() 
{
 player.pause();
}
function stop_aud() 
{
 player.pause();
 player.currentTime = 0;
}
function change_vol()
{
 player.volume=document.getElementById("change_vol").value;
}


// Collier, J. (2021, May 6). Comparing Javascript &amp; jQuery through building a pomodoro timer. DevelopIntelligence. Retrieved June 3, 2022, from https://www.developintelligence.com/blog/2016/10/comparing-javascript-jquery-build-a-pomodoro-timer/
// Pomodoro timer starts here
var pomodoro = {

    // Initialise time
    started : false,
    minutes : 0,
    seconds : 0,
    fillerHeight : 0,
    fillerIncrement : 0,
    interval : null,
    minutesDom : null,
    secondsDom : null,
    fillerDom : null,
    init : function(){
      var self = this;

      // Use the query selector to manipulate parts of the html
      this.minutesDom = document.querySelector('#minutes');
      this.secondsDom = document.querySelector('#seconds');
      this.fillerDom = document.querySelector('#filler');
      this.interval = setInterval(function(){
        self.intervalCallback.apply(self);
      }, 1000);

      // Get the buttons to work
      document.querySelector('#work').onclick = function(){
        self.startWork.apply(self);
      };
      document.querySelector('#shortBreak').onclick = function(){
        self.startShortBreak.apply(self);
      };
      document.querySelector('#longBreak').onclick = function(){
        self.startLongBreak.apply(self);
      };
      document.querySelector('#stop').onclick = function(){
        self.stopTimer.apply(self);
      };
    },

    // Default variables are in the form of minutes, seconds and boolean logic determining whether the timer has been reset
    resetVariables : function(mins, secs, started){
      this.minutes = mins;
      this.seconds = secs;
      this.started = started;
      this.fillerIncrement = 200/(this.minutes*60);
      this.fillerHeight = 0;  
    },

    // Get the buttons to work
    // Pomodoro's default time is 25 minutes
    startWork: function() {
      this.resetVariables(25, 0, true);
    },

    // Default time of short break is 5 minutes
    startShortBreak : function(){
      this.resetVariables(5, 0, true);
    },

    // Default time of long break is 15 minutes
    startLongBreak : function(){
      this.resetVariables(15, 0, true);
    },
    stopTimer : function(){
      this.resetVariables(25, 0, false);
      this.updateDom();
    },

    // Ensure that digits do not go over 9
    toDoubleDigit : function(num){
      if(num < 10) {
        return "0" + parseInt(num, 10);
      }
      return num;
    },

    // Link to html
    updateDom : function(){
      this.minutesDom.innerHTML = this.toDoubleDigit(this.minutes);
      this.secondsDom.innerHTML = this.toDoubleDigit(this.seconds);
      this.fillerHeight = this.fillerHeight + this.fillerIncrement;
      this.fillerDom.style.height = this.fillerHeight + 'px';
    },

    // Count down
    intervalCallback : function(){
      if(!this.started) return false;
      if(this.seconds == 0) {
        if(this.minutes == 0) {
          this.timerComplete();
          return;
        }
        this.seconds = 59;
        this.minutes--;
      } else {
        this.seconds--;
      }
      this.updateDom();
    },
    timerComplete : function(){
      this.started = false;
      this.fillerHeight = 0;
    }
};
window.onload = function(){
  pomodoro.init();
};

// Jana, S. (2022, April 26). Create a simple stopwatch using JavaScript (tutorial + code). Foolish Developer. Retrieved June 3, 2022, from https://www.foolishdeveloper.com/2021/10/simple-stopwatch-using-javascript.html
// Stopwatch timer starts here
let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;

document.getElementById('startTimer').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
});

document.getElementById('pauseTimer').addEventListener('click', ()=>{
    clearInterval(int);
});

document.getElementById('resetTimer').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
});

function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

 let h = hours < 10 ? "0" + hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

 timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}

