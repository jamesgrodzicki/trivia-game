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
var gifArray = ["https://media1.tenor.com/images/d6692229801e4fee03011d28e29665c0/tenor.gif?itemid=7603405", "http://giphygifs.s3.amazonaws.com/media/Emg9qPKR5hquI/200.gif", "https://i.imgur.com/MWAV5YJ.gif"];
var ifWrong = [];
var questionNum = 0;
var interval;
var initialTime = 10;
function timer(){
    clearInterval(interval);
    interval = setInterval(decrement, 1000);
}

function decrement(){
    initialTime--;
    $("#countdown").html("<h2>" + initialTime + "</h2>");
    if(initialTime == 0){
        stopTimer();
    }
}

function stopTimer(){
    clearInterval(interval);
}

function showQuestion(){
    $("#gif-holder").empty();
    $("#question").html("<h2>" + QandA[questionNum].question + "</h2>");
}

function showAnswers(){
    for(var i=0; i<4;i++){
        $(".button-container").append(`<button type="button" id="${i}" class="btn btn-light btn-lg btn-block buttons">${QandA[questionNum].answer[i]}</button>`);
    }
}

function emptyButtons(){
    $(".button-container").empty();
    $("#countdown").empty();
}
function correctScreen(){
    $("#gif-holder").append(`<img src="${gifArray[questionNum]}">`);
}

function wrongScreen(){
    $("#gif-holder").append(`<img src="${gifArray[gifArray.length-1]}">`)
}

function timeoutScreen(){
    $("#gif-holder").append(`<img src="${gifArray[gifArray.length-2]}">`)
}


timer();
$(document).ready(function () {
    showQuestion();
    showAnswers();
    setInterval(function(){
        console.log(initialTime);
        if(initialTime == 0){
            timeoutScreen();
        }
    }, 1000);

    $(".buttons").on("click", function(){
        if($(this).attr("id") == QandA[questionNum].correct){
            emptyButtons();
            correctScreen();
            questionNum++;
            stopTimer();
            setTimeout(function(){
                showQuestion();
                showAnswers();
                timer();
            }, 3000);
        }
        else{
            emptyButtons();
            wrongScreen();
            questionNum++;
            stopTimer();
            setTimeout(function(){
                showQuestion();
                showAnswers();
                timer();
            }, 3000);
        }
    });
});
