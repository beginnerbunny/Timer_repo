//Function call to increment seconds
var x = 0;
var sec=0;
var min=0;
var totalCount=0;


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
      
      for(var i = 900; i < 4500; i = i + 900){
        setTimeout("hide()", i);
        setTimeout("show()", i+450);
      }
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

function show(){
  if(document.getElementById)
  document.getElementById("sec").style.visibility = "visible";
  if(document.getElementById)
  document.getElementById("min").style.visibility = "visible";
}

function hide(){
  if(document.getElementById)
  document.getElementById("sec").style.visibility = "hidden";
  if(document.getElementById)
  document.getElementById("min").style.visibility = "hidden";
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