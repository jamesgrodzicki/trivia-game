var QandA = [
    {
        question: 'q1',
        answer: ['a', 'b', 'c', 'd'],
        correct: 2
    },
    {
        question: 'q2',
        answer: ['a', 'b', 'c', 'd'],
        correct: 1
    }
];
var ifCorrect = ["https://media1.tenor.com/images/d6692229801e4fee03011d28e29665c0/tenor.gif?itemid=7603405"];
var ifWrong = [];
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
        $(".button-container").append(`<button type="button" id="${i}" class="btn btn-light btn-lg btn-block buttons">${QandA[questionNum].answer[i]}</button>`);
    }
}

function correctScreen(){
    $(".button-container").empty();
    $("#gif-holder").append(`<img src="${ifCorrect[questionNum]}">`)
    initialTime = 3;
    timer();
}

timer();
$(document).ready(function () {
    showQuestion();
    showAnswers();
    $(".buttons").on("click", function(){
        if($(this).attr("id") == QandA[questionNum].correct){
            correctScreen();
            questionNum++;
            initialTime = 10;

        }
    });
});
