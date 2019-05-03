//Function call to increment seconds
var x = 0;
function secCounterUp() {
  var sec = parseInt(document.getElementById("sec").innerHTML);
  var min = parseInt(document.getElementById("min").innerHTML);
  sec++;
  // console.log(sec);
  if (sec < 10) {
    sec = "0" + sec;
  }
  if (sec > 59) {
    ++min;
    resetSec();
    if (min > 59) {
      //If timer set up for more than 59:59, timer limit reached
      reset();
      return;
    }
  }
  if (min < 10) {
    min = "0" + min;
  }
  assignValues(min, sec);
}

//Function call to decrement seconds
function secCounterDown() {
  var sec = parseInt(document.getElementById("sec").innerHTML);
  var min = parseInt(document.getElementById("min").innerHTML);
  sec--;
  // console.log(sec);
  if (sec < 0) {
    sec = 59;
    if (min <= 0) {
      min = 0;
      //   document.getElementById("sec").innerHTML = "0" + sec;
      //   window.alert("Timer Limit Reached");
      //   return;
    } else {
      min--;
    }
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  if (min < 10) {
    min = "0" + min;
  }
  document.getElementById("sec").innerHTML = sec;
  document.getElementById("min").innerHTML = min;
}

//Function call to increment minutes
function minCounterUp() {
  var min = parseInt(document.getElementById("min").innerHTML);
  min++;
  // console.log(min);
  if (min > 59) {
    //If timer set up more than 59 minutes
    min = 0;
    sec = 0;
    document.getElementById("min").innerHTML = "0" + min;
    document.getElementById("sec").innerHTML = "0" + sec;
    window.alert("Timer Limit Reached");
    return;
  }
  if (min < 10) {
    min = "0" + min;
  }
  document.getElementById("min").innerHTML = min;
}

//Function call to decrement minutes
function minCounterDown() {
  var min = parseInt(document.getElementById("min").innerHTML);
  if (min <= 0) {
    if (sec < 0) {
      reset();
      return;
    } else {
      //DO NOTHING
    }
  } else {
    min--;
  }
  if (min < 10) {
    min = "0" + min;
  }
  document.getElementById("min").innerHTML = min;
}

//Function call to implement timer
function timer() {
  var sec = parseInt(document.getElementById("sec").innerHTML);
  var min = parseInt(document.getElementById("min").innerHTML);
  var totalCount = min * 60 + sec;
  // console.log("Total time is " + totalCount);
  x = setInterval(function() {
    if (totalCount <= 0) {
      clearInterval(x);
      window.alert("Countdown Completed");
      return;
    }
    totalCount--;
    sec--;
    if (sec < 10) {
      document.getElementById("sec").innerHTML = "0" + sec;
    } else {
      document.getElementById("min").innerHTML = min;
      document.getElementById("sec").innerHTML = sec;
    }
    if (sec < 0) {
      min--;
      sec = 59;
      document.getElementById("min").innerHTML = min;
      document.getElementById("sec").innerHTML = sec;
    }
    if (min < 10) {
      document.getElementById("min").innerHTML = "0" + min;
    } else {
      //
    }
  }, 1000);
}

function reset() {
  resetSec();
  resetMin();
}

function resetSec() {
  document.getElementById("sec").innerHTML = "00";
}

function resetMin() {
  document.getElementById("min").innerHTML = "00";
}

function stop() {
  clearInterval(x);
}

function assignValues(min, sec) {
  document.getElementById("min").innerHTML = min;
  document.getElementById("sec").innerHTML = sec;
}