var QandA = [
    {
        question: 'q1',
        answer: ['a', 'b', 'c', 'd']
    },
    {
        question: 'q2',
        answer: ['a', 'b', 'c', 'd']
    }
];
var questionNum = 0;
var interval;
var initialTime = 5;
function timer(){
    clearInterval(interval);
    interval = setInterval(decrement, 1000);
}

function stopTimer(){
    clearInterval(interval);
}

function decrement(){
    initialTime--;
    $("#countdown").html("<h2>" + initialTime + "</h2>");
    if(initialTime == 0){
        stopTimer();
    }
}

function showQuestion(){
    $("#question").html("<h2>" + QandA[questionNum].question + "</h2>");
}

function showAnswers(){
    for(var i=0; i<4;i++){
        $(".buttons").append(`<button type="button" class="btn btn-light btn-lg btn-block">${QandA[questionNum].answer[i]}</button>`);
    }
}

timer();
$(document).ready(function () {
    showQuestion();
    showAnswers();
});
