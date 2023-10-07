function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

var pre_img = document.getElementById("pre-img");
var pre_span = document.getElementById("pre-span");
var box = document.getElementById("box");

delay(5).then(() => pre_img.classList.add("on_pre"));
delay(5).then(() => pre_span.classList.add("on_pre"));

//Age Timer

var birthday = "2006-06-18"; // (YY-MM-DD) - Birthday
var birthtime = "22:48:37"; // (HH:MM:SS) - Birth Time

var startDate = new Date(birthday+'T'+birthtime);

var timerElement = document.getElementById('timer');

var timerInterval = setInterval(function() {
  var currentDate = new Date();
  
  var elapsedTime = currentDate - startDate;

  var elapsedTimeInYears = elapsedTime / (365.25 * 24 * 60 * 60 * 1000);

  var formattedLife = elapsedTimeInYears.toFixed(9);
  
  timerElement.textContent = formattedLife;
}, 10);

//Age Timer

window.addEventListener("DOMContentLoaded",function(){
  delay(550).then(() => pre_img.classList.add("no_pre"));
  delay(550).then(() => pre_span.classList.add("no_pre"));
  delay(1000).then(() => box.classList.add("on_timer"));
});