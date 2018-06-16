function populate() {
    if (quiz.isEnded()) {

    }
    showScores();
}

var correctAnswerIndex = [
    3, 0, 2, 1
]

var questions = [
    "On a clear night about how many galaxies are visible to the naked eye?",
    "How many muscles do you have in total in all your fingers combined?",
    "Oxford University is developing artificial knees made from?",
    "What kind of animal is the longest in the world?"
];

var answers = [
    ["Two", "Three Million", "100 billion", "Nine Thousand"], //"Nine Thousand"
    ["None", "Ten", "Twenty-two", "Twenty", "Fifty-one"], //"None"]
    ["coconut", "eggs", "spider silk", "whale bone"], //"Spider Silk"
    ["snake", "worm", "jellyfish", "whale"] //"Worm"
];



var element = document.getElementById("question");
element.innerHTML = questions[0];

// Pull first answers
for (var i = 0; i < 1; i++) {
    var choices = answers[i];
    for (var j = 0; j < choices.length; j++) {
        var element = document.getElementById("choice" + j);
        element.innerHTML = choices[j];
        guess("btn" + j, choices[j], j);
    }



    //loop through all possible choices
    //add each choice to an element on page

}


function guess(id, guess, index) {
    var button = document.getElementById(id);
    button.onclick = function () {
        checkAnswer(0, index);
        populate();
    }
}

function checkAnswer(questionIndex, userSelection) {
    //take in id that person selected and take in question that its on
    //compare index of choice with index of correct answer
    //increase correct answers score if correct
    //if incorrect increase incorrect answer score
    //move to next question
    var currentQuestion = questions[questionIndex];
    var currentAnswer = answers[questionIndex];
    if (userSelection == correctAnswerIndex[questionIndex]) {
        console.log("correct");
    } else {
        console.log("incorrect");
    }

}



function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + "of" + quiz.questions.length;

}



function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'> Your Scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;

}




populate();