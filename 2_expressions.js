document.addEventListener('DOMContentLoaded', function(event){
  // Check if saved info, otherwise administer test
  if (localStorage.getItem('learn-js-user') === null){
    window.location="./index.html";
  }
  else {
    user = JSON.parse(localStorage.getItem('learn-js-user'));
    if (user['desiredJsKnowledge'] == 'full')
      document.getElementsByTagName('style')[0].innerHTML += 'div.js-further{ display: block;}';
    if(user['expressionsEntryStereotype'] < 0){
      user['expressionsEntryStereotype'] = user['stereotype'];
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    if (user['expressionsEntryStereotype'] >= 1100 || user['stereotype'] >= 1100 || user['chapter1Score'] > 60)
      document.getElementsByTagName('style')[0].innerHTML += 'div.advanced-1100{ display: block;}';
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
    if(user['expressionsMistakes'][questionId] == 0) {
      user['expressionsMistakes'][questionId] = 1;
      user['stereotype'] -= 5;
      localStorage.setItem('learn-js-user', JSON.stringify(user));
    }
  }
  else if(userInput == 'sub'){
    document.getElementById('question-'+questionId+'-message').innerHTML = 'The <code>-</code> symbol is the subtraction operator.';
    document.getElementById('question-'+questionId+'-message').className = 'failure';
    if(user['expressionsMistakes'][questionId] == 0) {
      user['expressionsMistakes'][questionId] = 1;
      user['stereotype'] -= 5;
      localStorage.setItem('learn-js-user', JSON.stringify(user));
    }
  }
  else if(userInput == 'mult'){
    document.getElementById('question-'+questionId+'-message').innerHTML = 'The <code>*</code> symbol is the multiplication operator.';
    document.getElementById('question-'+questionId+'-message').className = 'failure';
    if(user['expressionsMistakes'][questionId] == 0) {
      user['expressionsMistakes'][questionId] = 1;
      user['stereotype'] -= 5;
      localStorage.setItem('learn-js-user', JSON.stringify(user));
    }
  }
  else if(userInput == 'div'){
    document.getElementById('question-'+questionId+'-message').innerHTML = 'The <code>/</code> symbol is the division operator.';
    document.getElementById('question-'+questionId+'-message').className = 'failure';
    if(user['expressionsMistakes'][questionId] == 0) {
      user['expressionsMistakes'][questionId] = 1;
      user['stereotype'] -= 5;
      localStorage.setItem('learn-js-user', JSON.stringify(user));
    }
  }
  else if(userInput == 'quotient'){
    document.getElementById('question-'+questionId+'-message').innerHTML = 'The <code>%</code> symbol returns the remainder of a division, not the quotient.';
    document.getElementById('question-'+questionId+'-message').className = 'failure';
    if(user['expressionsMistakes'][questionId] == 0) {
      user['expressionsMistakes'][questionId] = 1;
      user['stereotype'] -= 5;
      localStorage.setItem('learn-js-user', JSON.stringify(user));
    }
  }
  else{
    document.getElementById('question-'+questionId+'-message').innerHTML = 'Correct!';
    document.getElementById('question-'+questionId+'-message').className = 'success';
    if(user['expressionsMistakes'][questionId] == 0) {
      user['expressionsMistakes'][questionId] = -1;
      localStorage.setItem('learn-js-user', JSON.stringify(user));
    }
    if(questionId == 4){
      user['expressionsEntryStereotype'] = user['stereotype'];
      localStorage.setItem('learn-js-user', JSON.stringify(user));
    }
  }
  if(typeof user['expressions-question-0'] !== 'undefined' && typeof user['expressions-question-1'] !== 'undefined'
  && typeof user['expressions-question-2'] !== 'undefined' && typeof user['expressions-question-3'] !== 'undefined' &&
  (typeof user['expressions-question-4'] !== 'undefined' || user['expressionsEntryStereotype'] < 1100) )
    if(user['expressions-question-0'] == 'true' && user['expressions-question-1'] == 'true'
    && user['expressions-question-2'] == 'true' && user['expressions-question-3'] == 'true' &&
    (user['expressions-question-4'] == 'true' || user['expressionsEntryStereotype'] < 1100) ) {
      user['expressions'] = 'completed';
      user['stereotype'] += 50;
      if(user['strings'] == 'restricted')
        user['strings'] = 'available';
    localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
}
