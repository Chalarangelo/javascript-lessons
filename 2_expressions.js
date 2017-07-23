document.addEventListener('DOMContentLoaded', function(event){
  // Check if saved info, otherwise administer test
  if (localStorage.getItem('learn-js-user') === null){
    window.location="./index.html";
  }
  else {
    user = JSON.parse(localStorage.getItem('learn-js-user'));
  if (user['desiredJsKnowledge'] == 'full')
    document.getElementsByTagName('style')[0].innerHTML += 'div.js-further{ display: block;}';
  }
  window.setTimeout(function(){
    if(user['expressions'] == 'available' || user['expressions'] == 'restricted')
      user['expressions'] = 'seen';
    localStorage.setItem('learn-js-user',JSON.stringify(user));
  },5000);
});

user = {};

function checkQuestion(questionId){
  var userInput = document.querySelector('input[name="question-'+questionId+'"]:checked').value;
  if(user['expressions'] != 'completed'){
    user['expressions-question-'+questionId] = userInput;
    localStorage.setItem('learn-js-user',JSON.stringify(user));
  }
  if(userInput == 'add'){
    document.getElementById('question-'+questionId+'-message').innerHTML = 'The <code>+</code> symbol is the addition operator.';
    document.getElementById('question-'+questionId+'-message').className = 'failure';
  }
  else if(userInput == 'sub'){
    document.getElementById('question-'+questionId+'-message').innerHTML = 'The <code>-</code> symbol is the subtraction operator.';
    document.getElementById('question-'+questionId+'-message').className = 'failure';
  }
  else if(userInput == 'mult'){
    document.getElementById('question-'+questionId+'-message').innerHTML = 'The <code>*</code> symbol is the multiplication operator.';
    document.getElementById('question-'+questionId+'-message').className = 'failure';
  }
  else if(userInput == 'div'){
    document.getElementById('question-'+questionId+'-message').innerHTML = 'The <code>/</code> symbol is the division operator.';
    document.getElementById('question-'+questionId+'-message').className = 'failure';
  }
  else{
    document.getElementById('question-'+questionId+'-message').innerHTML = 'Correct!';
    document.getElementById('question-'+questionId+'-message').className = 'success';
  }
  if(typeof user['expressions-question-0'] !== 'undefined' && typeof user['expressions-question-1'] !== 'undefined'
  && typeof user['expressions-question-2'] !== 'undefined' && typeof user['expressions-question-3'] !== 'undefined')
    if(user['expressions-question-0'] == 'true' && user['expressions-question-1'] == 'true'
    && user['expressions-question-2'] == 'true' && user['expressions-question-3'] == 'true') {
      user['expressions'] = 'completed';
      if(user['strings'] == 'restricted')
        user['strings'] = 'available';
    localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
}
