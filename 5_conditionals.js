document.addEventListener('DOMContentLoaded', function(event){
  // Check if saved info, otherwise administer test
  if (localStorage.getItem('learn-js-user') === null){
    window.location="./index.html";
  }
  else {
    user = JSON.parse(localStorage.getItem('learn-js-user'));
    if(user['conditionalsEntryStereotype'] < 0){
      user['conditionalsEntryStereotype'] = user['stereotype'];
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    if (user['conditionalsEntryStereotype'] >= 13250 || user['stereotype'] >= 1350 || user['chapter3Score'] > 60)
      document.getElementsByTagName('style')[0].innerHTML += 'div.advanced-1350{ display: block;}';
    if (user['videos'] == 'yes')
      document.getElementsByTagName('style')[0].innerHTML += 'div.videos-further{ display: block;}';
    if (user['desiredJsKnowledge'] == 'full' || user['desiredProgrammingKnowledge'] == 'full')
      document.getElementsByTagName('style')[0].innerHTML += 'div.read-further{ display: block;}';
    if (user['desiredJsKnowledge'] == 'full')
      document.getElementsByTagName('style')[0].innerHTML += 'li.js-further{ display: list-item;}';
    if (user['desiredProgrammingKnowledge'] == 'full')
      document.getElementsByTagName('style')[0].innerHTML += 'li.programming-further{ display: list-item;}';
    if (user['desiredJsKnowledge'] == 'full' && user['desiredProgrammingKnowledge'] == 'full')
      document.getElementsByTagName('style')[0].innerHTML += 'li.js-p-further{ display: list-item;}';
  }
  window.setTimeout(function(){
    if(user['conditionals'] == 'available' || user['conditionals'] == 'restricted')
      user['conditionals'] = 'seen';
    localStorage.setItem('learn-js-user',JSON.stringify(user));
  },5000);
});

user = {};

function checkQuestion(questionId){
  if(questionId == 0){
    var userInput = document.querySelector('input[name="question-0"]:checked').value;
    if(user['conditionals'] != 'completed'){
      user['conditionals-question-0'] = userInput;
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    if(userInput == 'false'){
      document.getElementById('question-0-message').innerHTML = 'Remember that when the condition evaluates to true, the program executes the statement inside the curly braces';
      document.getElementById('question-0-message').className = 'failure';
      if(user['conditionalsMistakes'][questionId] == 0) {
        user['conditionalsMistakes'][questionId] = 1;
        user['stereotype'] -= 5;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
    else{
      document.getElementById('question-0-message').innerHTML = 'Correct!';
      document.getElementById('question-0-message').className = 'success';
      if(user['conditionalsMistakes'][questionId] == 0) {
        user['conditionalsMistakes'][questionId] = -1;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
  }
  else if(questionId == 1){
    var userInput = document.querySelector('input[name="question-1"]:checked').value;
    if(user['conditionals'] != 'completed'){
      user['conditionals-question-1'] = userInput;
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    if(userInput == 'notEqual'){
      document.getElementById('question-1-message').innerHTML = 'Remember that when the boolean condition is false, the code in the code block is not executed';
      document.getElementById('question-1-message').className = 'failure';
      if(user['conditionalsMistakes'][questionId] == 0) {
        user['conditionalsMistakes'][questionId] = 1;
        user['stereotype'] -= 5;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
    else if(userInput == 'allFalse'){
      document.getElementById('question-1-message').innerHTML = 'Remember that only when all boolean condition are false the code block associated with the else keyword is executed';
      document.getElementById('question-1-message').className = 'failure';
      if(user['conditionalsMistakes'][questionId] == 0) {
        user['conditionalsMistakes'][questionId] = 1;
        user['stereotype'] -= 5;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
    else{
      document.getElementById('question-1-message').innerHTML = 'Correct!';
      document.getElementById('question-1-message').className = 'success';
      if(user['conditionalsMistakes'][questionId] == 0) {
        user['conditionalsMistakes'][questionId] = -1;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
  }
  else if(questionId == 2){
    var userInput = document.querySelector('input[name="question-2"]:checked').value;
    if(user['conditionals'] != 'completed'){
      user['conditionals-question-2'] = userInput;
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    if(userInput == 'alpha' || userInput == 'gamma'){
      document.getElementById('question-2-message').innerHTML = 'A switch statement looks for the first case clause whose expression evaluates to the same value as the result of the input expression';
      document.getElementById('question-2-message').className = 'failure';
      if(user['conditionalsMistakes'][questionId] == 0) {
        user['conditionalsMistakes'][questionId] = 1;
        user['stereotype'] -= 5;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
    else{
      document.getElementById('question-2-message').innerHTML = 'Correct!';
      document.getElementById('question-2-message').className = 'success';
      if(user['conditionalsMistakes'][questionId] == 0) {
        user['conditionalsMistakes'][questionId] = -1;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
  }
  else if(questionId == 3){
    var userInput = document.querySelector('input[name="question-3"]:checked').value;
    if(user['conditionals'] != 'completed'){
      user['conditionals-question-3'] = userInput;
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    if(userInput == 'false'){
      document.getElementById('question-3-message').innerHTML = 'The default statement will be executed if no matching case statements are found.';
      document.getElementById('question-3-message').className = 'failure';
      if(user['conditionalsMistakes'][questionId] == 0) {
        user['conditionalsMistakes'][questionId] = 1;
        user['stereotype'] -= 5;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
    else{
      document.getElementById('question-3-message').innerHTML = 'Correct!';
      document.getElementById('question-3-message').className = 'success';
      if(user['conditionalsMistakes'][questionId] == 0) {
        user['conditionalsMistakes'][questionId] = -1;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
  }
  else if(questionId == 4){
    var userInput = document.querySelector('input[name="question-4"]:checked').value;
    if(user['conditionals'] != 'completed'){
      user['conditionals-question-4'] = userInput;
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    if(userInput == 'false'){
      document.getElementById('question-4-message').innerHTML = 'The condition evaluates to true when the number is between 6 and 8 or below 3.';
      document.getElementById('question-4-message').className = 'failure';
      if(user['conditionalsMistakes'][questionId] == 0) {
        user['conditionalsMistakes'][questionId] = 1;
        user['stereotype'] -= 5;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
    else{
      document.getElementById('question-4-message').innerHTML = 'Correct!';
      document.getElementById('question-4-message').className = 'success';
      if(user['conditionalsMistakes'][questionId] == 0) {
        user['conditionalsMistakes'][questionId] = -1;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
  }
  else if(questionId == 5){
    var userInput = document.querySelector('input[name="question-5"]:checked').value;
    if(user['conditionals'] != 'completed'){
      user['conditionals-question-5'] = userInput;
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    if(userInput == 'false'){
      document.getElementById('question-5-message').innerHTML = 'The first part of the statement is applied only if the condition evaluates to true.';
      document.getElementById('question-5-message').className = 'failure';
      if(user['conditionalsMistakes'][questionId] == 0) {
        user['conditionalsMistakes'][questionId] = 1;
        user['stereotype'] -= 5;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
    else{
      document.getElementById('question-5-message').innerHTML = 'Correct!';
      document.getElementById('question-5-message').className = 'success';
      user['conditionalsEntryStereotype'] = user['stereotype'];
      localStorage.setItem('learn-js-user', JSON.stringify(user));
      if(user['conditionalsMistakes'][questionId] == 0) {
        user['conditionalsMistakes'][questionId] = -1;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
  }
  if(typeof user['conditionals-question-0'] !== 'undefined' && typeof user['conditionals-question-1'] !== 'undefined'
  && typeof user['conditionals-question-2'] !== 'undefined' && typeof user['conditionals-question-3'] !== 'undefined' && typeof user['conditionals-question-4'] !== 'undefined' &&
  (typeof user['conditionals-question-5'] !== 'undefined' || user['conditionalsEntryStereotype'] < 1350) )
    if(user['conditionals-question-0'] == 'true' && user['conditionals-question-1'] == 'true'
    && user['conditionals-question-2'] == 'true' && user['conditionals-question-3'] == 'true' && user['conditionals-question-4'] == 'true'&&
    (user['conditionals-question-5'] == 'true' || user['conditionalsEntryStereotype'] < 1350) ) {
      user['conditionals'] = 'completed';
      if(user['conditionals'] != 'completed')  user['stereotype'] += 50;
      if(user['loops'] == 'restricted')
        user['loops'] = 'available';
    localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
}
