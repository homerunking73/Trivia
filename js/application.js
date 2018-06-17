
$(function() {
    console.log( 'ready!' );
    
    var question0= {
        question: "On a clear night about how many galaxies are visible to the naked eye?",
        answers: ["Two", "Three Million", "100 billion", "Nine Thousand"],
        correctAnswer: "Nine Thousand"
    }
    
    var question1={
        question: "How many muscles do you have in total in all your fingers combined?",
        answers: ["None", "Ten", "Twenty-two", "Twenty", "Fifty-one"],
        correctAnswer:"None"
    }
    
    var question2={
        question: "Oxford University is developing artificial knees made from?",
        answers: ["coconut", "eggs", "spider silk", "whale bone"],
        correctAnswer: "spider silk"
    }
    
    var question3={
        question: "What kind of animal is the longest in the world?",
        answers: ["snake", "worm", "jellyfish", "whale"],
        correctAnswer: "worm"
    }
    
    var allQuestions= [question0, question1, question2, question3];
  
    console.log(allQuestions[3].answers[2]);

    function makeQuestions(index){
        
        
        $("#question").text(allQuestions[index].question) 
        
        for (var i = 0; i < allQuestions.length; i++){
            var button= $("<button>")
            button.text(allQuestions[index].answers[i])
            $(".buttons").append(button)
        }
        
    }
     makeQuestions(1)






});

