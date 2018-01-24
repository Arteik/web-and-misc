
var regions = ['frontal', 'temporal', 'parietal', 'occipital', 'hippocampus', 'amygdala', 'colliculi', 'forebrain', 'hindbrain', 'midbrain', 'pons', 'medulla oblongata', 'cerebellum', 'cortex', 'motor cortex', 'sensory cortex', 'thalamus', 'hypothalamus'];
var parts = regions;
var used = [];

var correct = 0;
var incorrect = 0;
var first = true;
var usable = parts.length;

var responseStatus = document.getElementById("responseStatus");
var submitButton = document.getElementById("submit");

var timeLeft = 120;
var timeTotal = timeLeft;
var stopped = false;

function timer() {
        
    var myTimer = setInterval(function(){
        if(timeLeft == 0) {
            stopped = true;
            responseStatus.setAttribute("class", "alert alert-danger");
            responseStatus.innerHTML = "Out of time";
            submitButton.setAttribute("onclick", "");
            pauseButton.setAttribute("onclick", "");
        } else if (stopped == false) {
            timeLeft--;
            var minLeft = Math.floor(timeLeft / 60);
            var secLeft = timeLeft % 60;
            if (secLeft.toString().length == 1) {
                secLeft = "0" + secLeft.toString();
            }
            document.getElementById("timeLeft").innerHTML = minLeft + ":" + secLeft; 
            document.getElementById("timeLeft").style.width = Math.floor(100 * timeLeft/timeTotal) + "%";
            if(timeLeft == timeTotal/3){
                document.getElementById("timeLeft").setAttribute("class", "progress-bar progress-bar-danger progress-bar-striped active");
            }
        }
    }, 1000);
}

function pause() {
    if (first == false) {
        stopped = !stopped;
        if (stopped == false) {
            pauseButton.innerHTML = "Pause";
        } else {
            pauseButton.innerHTML = "Play";
        }
    }
}
function restart() {
    timeLeft = 120;
    correct = 0;
    first = false;
    incorrect = 0;
    stopped = true;
    used = [];
    responseStatus.setAttribute("class", "alert alert-info")
    responseStatus.innerHTML = "Game restarted!";
    document.getElementById("response").setAttribute("placeholder", "Neural Feature");
    document.getElementById("response").value = "";
    document.getElementById("numCorrect").innerHTML = "Correct: " + correct;
    document.getElementById("numIncorrect").innerHTML = "Incorrect: " + incorrect;
    document.getElementById("numLeft").innerHTML = "Unused: " + usable;
    var minLeft = Math.floor(timeLeft / 60);
    var secLeft = timeLeft % 60;
    if (secLeft.toString().length == 1) {
        secLeft = "0" + secLeft.toString();
    }
    document.getElementById("timeLeft").innerHTML = minLeft + ":" + secLeft;
    document.getElementById("timeLeft").style.width = Math.floor(100 * timeLeft/timeTotal) + "%";
    submitButton.setAttribute("onclick", "quizFunc()");
    pauseButton.setAttribute("onclick", "pause()");
    pauseButton.innerHTML = "Pause";
}

function quizFunc() {
    if (stopped == false) {
        if (first == true) {
            timer()
            first = false;
        }
        
        var response = document.getElementById("response").value.toLowerCase();
        document.getElementById("response").value = "";
    
        responseStatus.setAttribute("role", "alert")
        if (parts.indexOf(response) >= 0) {
            if (used.indexOf(response) < 0) {
                responseStatus.setAttribute("class", "alert alert-success")
                responseStatus.innerHTML = response + " is a valid neural feature";
                used.push(response)
                correct++;
            } else {
                responseStatus.setAttribute("class", "alert alert-warning")
                responseStatus.innerHTML = response + " was already entered";
            }
        } else if (response.length > 0){
            responseStatus.setAttribute("class", "alert alert-danger")
            responseStatus.innerHTML = response + " is not a valid or important neural feature";
            incorrect++;
        }
        var numLeft = usable - correct;
        document.getElementById("numCorrect").innerHTML = "Correct: " + correct;
        document.getElementById("numIncorrect").innerHTML = "Incorrect: " + incorrect;
        document.getElementById("numLeft").innerHTML = "To go: " + numLeft;
        if (numLeft == 0) {
            responseStatus.setAttribute("class", "alert alert-success")
            responseStatus.innerHTML = "You won!";       
            stopped = true;
            submitButton.setAttribute("onclick", "");
            pauseButton.setAttribute("onclick", "");
        }
    }
}
	

 
 
