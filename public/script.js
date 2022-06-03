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

// Yelne, P. (2022, January 3). Build a dictionary app in HTML CSS &amp; JavaScript. Codegyan. Retrieved June 3, 2022, from https://codegyan.in/articles/build-a-dictionary-app-in-html-css-javascript.htm 
// Dictionary starts here

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

// Click to find word meaning
btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            // Display result in html, formatted through sound, meaning and example used in a sentence
            result.innerHTML = `
            <div class="word">
                    <h3>${inpWord}</h3>
                    <button onclick="playSound()">
                        <i class="fas fa-volume-up"></i>
                    </button>
                </div>
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>/${data[0].phonetic}/</p>
                </div>
                <p class="word-meaning">
                   ${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="word-example">
                    ${data[0].meanings[0].definitions[0].example || ""}
                </p>`;
            sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
        })
        .catch(() => {

            // Error for non-existent word
            result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
        });
});
function playSound() {
    sound.play();
}

// https://karthikdevarticles.com/creating-a-kanban-board-with-html-css-and-javascript
// Task Manager starts here
function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
        }

        function allowDrop(ev) {
            ev.preventDefault();
        }

        function drop(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.currentTarget.appendChild(document.getElementById(data));
        }

        function createTask(){
            var x = document.getElementById("inprogress");
            var y = document.getElementById("done");
            var z = document.getElementById("create-new-task-block");
            if (x.style.display === "none") {
                x.style.display = "block";
                y.style.display = "block";
                z.style.display = "none";
            } else {
                x.style.display = "none";
                y.style.display = "none";
                z.style.display = "flex";
            }
        }

        function saveTask(){
            var saveButton = document.getElementById("save-button");
            var editButton = document.getElementById("edit-button");
            if (saveButton.style.display === "none") {
                 saveButton.style.display = "block";
                 editButton.style.display = "none";
            } else{
                 saveButton.style.display = "none";
                 editButton.style.display = "block";
            }

            var todo = document.getElementById("todo");
            var taskName = document.getElementById("task-name").value;
            todo.innerHTML += `
            <div class="task" id="${taskName.toLowerCase().split(" ").join("")}" draggable="true" ondragstart="drag(event)">
                <span>${taskName}</span>
            </div>
            `
        }

        function editTask(){
            var saveButton = document.getElementById("save-button");
            var editButton = document.getElementById("edit-button");
            if (saveButton.style.display === "none") {
                saveButton.style.display = "block";
                editButton.style.display = "none";
            } else{
                saveButton.style.display = "none";
                editButton.style.display = "block";
            }
        }

