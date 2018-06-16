function Quiz(question){
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;

}

Quiz.prototype.getQUestionIndex = function(){
    return this.questions[this.questionIndex];

}
Quiz.prototype.isEnded = function(){
    return this.questions.length >= this.questionIndex;

}

Quiz.prototype.guess = function(answer){
    if(this.getQUestionIndex().correctAnswer(answer)){
    this.score++;

}

this.questionIndex++;
}