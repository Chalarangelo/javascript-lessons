document.addEventListener('DOMContentLoaded', function(event){
  // Check if saved info, otherwise administer test
  if (localStorage.getItem('learn-js-user') === null){
    advanceQuestion();
  }
});

var userScore = [false, false, false, false, false, false, false, false, false, ''];
questionId = 0;

function score(qId, value){
  userScore[qId] = value;
  advanceQuestion();
}

function advanceQuestion(){
  if (questionId > 0 && questionId <6)
    document.getElementById('skill-q'+questionId).className = 'question hidden';
  else if (questionId > 5)
    document.getElementById('preference-q'+(questionId-5)).className = 'question hidden';
  questionId += 1;
  if(questionId < 6){
    document.getElementById('skill-q'+questionId).className = 'question';
    window.setTimeout( function() {
      document.getElementById('skill-q'+questionId).style.marginLeft = '0';
    }, 10);
  }
  else if(questionId < 11){
    document.getElementById('preference-q'+(questionId-5)).className = 'question';
    window.setTimeout( function() {
      document.getElementById('preference-q'+(questionId-5)).style.marginLeft = '0';
    }, 10);
  }
  else {
    console.log(userScore);
  }
}
