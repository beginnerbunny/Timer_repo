//Function call to increment seconds
var x = 0;
var sec=0;
var min=0;
var totalCount=0;
function secCounterUp() {
readelements();
  sec++;
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
readelements();
  sec--;
  // console.log(sec);
  if (sec < 0) {
    sec = 59;
    if (min <= 0) {
      min = 0;
    } 
    else {
      //min--;
    }
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  if (min < 10) {
    min = "0" + min;
  }
  assignelements();
}

//Function call to increment minutes
function minCounterUp() {
 readelements();
  min++;

  if (min < 10) {
    min = "0" + min;
  }
  document.getElementById("min").value = min;
}

//Function call to decrement minutes
function minCounterDown() {
 readelements();
  if (min <= 0) {
    if (sec < 0) {
      reset();
      return;
    } 
    else {
      //DO NOTHING
    }
  } 
  else {
    min--;
  }
  if (min < 10) {
    min = "0" + min;
  }
  document.getElementById("min").value = min;
}

//Function call to implement timer
function timer() {
  readelements();
  totalCount = min * 60 + sec;
  if(sec>59){
    min+=parseInt(sec/60);
    sec=sec%60;
    assignelements();
  }

    x = setInterval(function() {
      
    if (totalCount <= 5) {
      
      document.getElementById('min').style.color='red';
      document.getElementById('sec').style.color='red';
      
      if(totalCount<=0){
        document.getElementById('hidden-text').innerHTML="Winter is Here";
        clearInterval(x);
        return;
      }
    }
    totalCount--;
    sec--;
    if (sec < 0) {
      min--;
      sec = 59;
      assignelements();
    }
    if (sec < 10) {
      sec="0"+sec;
      assignelements();
    } else {
      assignelements();
    }

    if (min < 10) {
      min=parseInt(document.getElementById('min').value);
      min="0"+min;
      assignelements();
    } 
    else {
    }
  }, 1000);
}

function reset() {
  resetSec();
  resetMin();
  clearInterval(x);
  if(totalCount<=5){
    document.getElementById('min').style.color='white';
    document.getElementById('sec').style.color='white';
  }
  document.getElementById('hidden-text').innerHTML=" ";
}

function resetSec() {
  document.getElementById("sec").value = "00";
}

function resetMin() {
  document.getElementById("min").value = "00";
}

function stop() {
  clearInterval(x);
}

function assignValues(min, sec) {
  document.getElementById("min").innerHTML = min;
  document.getElementById("sec").innerHTML = sec;
}

function readelements() {
  sec = parseInt(document.getElementById("sec").value);
  min = parseInt(document.getElementById("min").value);
}

function assignelements(){
 document.getElementById("min").value = (min);
 document.getElementById("sec").value = (sec);
}