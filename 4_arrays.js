document.addEventListener('DOMContentLoaded', function(event){
  // Check if saved info, otherwise administer test
  if (localStorage.getItem('learn-js-user') === null){
    window.location="./index.html";
  }
  else {
    user = JSON.parse(localStorage.getItem('learn-js-user'));
    if (user['videos'] == 'yes')
      document.getElementsByTagName('style')[0].innerHTML += 'div.videos-further{ display: block;}';
    if (user['desiredJsKnowledge'] == 'full' || user['desiredProgrammingKnowledge'] == 'full')
      document.getElementsByTagName('style')[0].innerHTML += 'div.read-further{ display: block;}';
    if (user['desiredJsKnowledge'] == 'full')
      document.getElementsByTagName('style')[0].innerHTML += 'li.js-further{ display: block;}';
    if (user['desiredProgrammingKnowledge'] == 'full')
      document.getElementsByTagName('style')[0].innerHTML += 'li.programming-further{ display: block;}';
  }
  window.setTimeout(function(){
    if(user['arrays'] == 'available' || user['arrays'] == 'restricted')
      user['arrays'] = 'seen';
    localStorage.setItem('learn-js-user',JSON.stringify(user));
  },5000);
});

user = {};

function checkQuestion(questionId){
  if(questionId == 0){
    var userInput = document.querySelector('input[name="question-0"]:checked').value;
    if(user['arrays'] != 'completed'){
      user['arrays-question-0'] = userInput;
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    if(userInput == 'no-square-bracket'){
      document.getElementById('question-0-message').innerHTML = 'An array declaration starts with an opening square bracket <code>[</code> and ends with a closing square bracket <code>]</code>.';
      document.getElementById('question-0-message').className = 'failure';
    }
    else if(userInput == 'no-comma'){
      document.getElementById('question-0-message').innerHTML = 'Between each array entry should be a comma.';
      document.getElementById('question-0-message').className = 'failure';
    }
    else{
      document.getElementById('question-0-message').innerHTML = 'Correct!';
      document.getElementById('question-0-message').className = 'success';
    }
  }
  else if(questionId == 1){
    var userInput = document.querySelector('input[name="question-1"]:checked').value;
    if(user['arrays'] != 'completed'){
      user['arrays-question-1'] = userInput;
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    if(userInput == 'non-zero-indexed'){
      document.getElementById('question-1-message').innerHTML = 'Remember that Javascript uses zero-based indexing.';
      document.getElementById('question-1-message').className = 'failure';
    }
    else{
      document.getElementById('question-1-message').innerHTML = 'Correct!';
      document.getElementById('question-1-message').className = 'success';
    }
  }
  else if(questionId == 2){
    var userInput = document.querySelector('input[name="question-2"]:checked').value;
    if(user['arrays'] != 'completed'){
      user['arrays-question-2'] = userInput;
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    if(userInput == 'beginning'){
      document.getElementById('question-2-message').innerHTML = 'The <code>.push()</code> function append data to the end of an array';
      document.getElementById('question-2-message').className = 'failure';
    }
    else{
      document.getElementById('question-2-message').innerHTML = 'Correct!';
      document.getElementById('question-2-message').className = 'success';
    }
  }
  if(questionId == 3){
    var userInput = document.querySelector('input[name="question-3"]:checked').value;
    if(user['arrays'] != 'completed'){
      user['arrays-question-3'] = userInput;
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    if(userInput == 'beginning'){
      document.getElementById('question-3-message').innerHTML = 'The <code>.pop()</code> function extracts the last element of an array';
      document.getElementById('question-3-message').className = 'failure';
    }
    else{
      document.getElementById('question-3-message').innerHTML = 'Correct!';
      document.getElementById('question-3-message').className = 'success';
    }
  }
  if(typeof user['arrays-question-0'] !== 'undefined' && typeof user['arrays-question-1'] !== 'undefined'
  && typeof user['arrays-question-2'] !== 'undefined' && typeof user['arrays-question-3'] !== 'undefined')
    if(user['arrays-question-0'] == 'true' && user['arrays-question-1'] == 'true'
    && user['arrays-question-2'] == 'true' && user['arrays-question-3'] == 'true') {
      user['arrays'] = 'completed';
      if(user['conditionals'] == 'restricted')
        user['conditionals'] = 'available';
    localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
}
