document.addEventListener('DOMContentLoaded', function(event){
  // Check if saved info, otherwise administer test
  if (localStorage.getItem('learn-js-user') === null){
    window.location="./index.html";
  }
  else {
    user = JSON.parse(localStorage.getItem('learn-js-user'));
    if(user['stringsEntryStereotype'] < 0){
      user['stringsEntryStereotype'] = user['stereotype'];
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    if (user['stringsEntryStereotype'] >= 1300 || user['stereotype'] >= 1300 || user['chapter2Score'] > 60)
      document.getElementsByTagName('style')[0].innerHTML += 'div.advanced-1300{ display: block;}';
    if(user['animal'] == 'cat'){
      document.getElementById('cat-question').className = 'card fluid rounded';
      document.getElementById('dog-question').className = 'card fluid rounded hidden';
    }
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
    if(user['strings'] == 'available' || user['strings'] == 'restricted')
      user['strings'] = 'seen';
    localStorage.setItem('learn-js-user',JSON.stringify(user));
  },5000);
});

user = {};

function checkQuestion(questionId){
  if(questionId == 0){
    var userInput = document.querySelector('input[name="question-0"]:checked').value;
    if(user['strings'] != 'completed'){
      user['strings-question-0'] = userInput;
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    if(userInput == 'false'){
      document.getElementById('question-0-message').innerHTML = 'Remember that a string literal is a series of zero or more characters enclosed in single or double quotes.';
      document.getElementById('question-0-message').className = 'failure';
      if(user['stringsMistakes'][questionId] == 0) {
        user['stringsMistakes'][questionId] = 1;
        user['stereotype'] -= 5;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
    else{
      document.getElementById('question-0-message').innerHTML = 'Correct!';
      document.getElementById('question-0-message').className = 'success';
      if(user['stringsMistakes'][questionId] == 0) {
        user['stringsMistakes'][questionId] = -1;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
  }
  else if(questionId == 1){
    var userInput = document.getElementById('question-1').value;
    if(user['strings'] != 'completed'){
      user['strings-question-1'] = userInput;
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    if(userInput < 14 || userInput > 17 || userInput == 16){
      document.getElementById('question-1-message').innerHTML = 'The <code>.length</code> of a string is the number of characters in the string.';
      document.getElementById('question-1-message').className = 'failure';
      if(user['stringsMistakes'][questionId] == 0) {
        user['stringsMistakes'][questionId] = 1;
        user['stereotype'] -= 5;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
    else if(userInput == 14){
      document.getElementById('question-1-message').innerHTML = 'The <code>.length</code> of a string is not zero-indexed.';
      document.getElementById('question-1-message').className = 'failure';
      if(user['stringsMistakes'][questionId] == 0) {
        user['stringsMistakes'][questionId] = 1;
        user['stereotype'] -= 5;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
    else if(userInput == 17){
      document.getElementById('question-1-message').innerHTML = 'The <code>.length</code> of a string doesn\'t take quotations into account.';
      document.getElementById('question-1-message').className = 'failure';
      if(user['stringsMistakes'][questionId] == 0) {
        user['stringsMistakes'][questionId] = 1;
        user['stereotype'] -= 5;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
    else{
      document.getElementById('question-1-message').innerHTML = 'Correct!';
      document.getElementById('question-1-message').className = 'success';
      if(user['strings'] != 'completed'){
        user['strings-question-1'] = 'true';
        localStorage.setItem('learn-js-user',JSON.stringify(user));
        if(user['stringsMistakes'][questionId] == 0) {
          user['stringsMistakes'][questionId] = -1;
          localStorage.setItem('learn-js-user', JSON.stringify(user));
        }
      }
    }
  }
  else if(questionId == 2){
    var userInput = document.querySelector('input[name="question-2"]:checked').value;
    if(user['strings'] != 'completed'){
      user['strings-question-2'] = userInput;
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    if(userInput == 'spaced'){
      document.getElementById('question-2-message').innerHTML = 'Remember that string concatenation doesn\'t add spaces between concatenated strings.';
      document.getElementById('question-2-message').className = 'failure';
      if(user['stringsMistakes'][questionId] == 0) {
        user['stringsMistakes'][questionId] = 1;
        user['stereotype'] -= 5;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
    else{
      document.getElementById('question-2-message').innerHTML = 'Correct!';
      document.getElementById('question-2-message').className = 'success';
      if(user['stringsMistakes'][questionId] == 0) {
        user['stringsMistakes'][questionId] = -1;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
  }
  else if(questionId == 3){
    var userInput = document.querySelector('input[name="question-3"]:checked').value;
    if(user['strings'] != 'completed'){
      user['strings-question-3'] = userInput;
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    if(userInput == 'non-zero-indexed'){
      document.getElementById('question-3-message').innerHTML = 'Remember that Javascript used zero-based indexing.';
      document.getElementById('question-3-message').className = 'failure';
      if(user['stringsMistakes'][3] == 0) {
        user['stringsMistakes'][3] = 1;
        user['stereotype'] -= 5;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
    else{
      document.getElementById('question-3-message').innerHTML = 'Correct!';
      document.getElementById('question-3-message').className = 'success';
      if(user['stringsMistakes'][3] == 0) {
        user['stringsMistakes'][3] = -1;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
  }
  else if(questionId == 4){
    var userInput = document.querySelector('input[name="question-4"]:checked').value;
    if(user['strings'] != 'completed'){
      user['strings-question-3'] = userInput;
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    if(userInput == 'non-zero-indexed'){
      document.getElementById('question-4-message').innerHTML = 'Remember that Javascript used zero-based indexing.';
      document.getElementById('question-4-message').className = 'failure';
      if(user['stringsMistakes'][3] == 0) {
        user['stringsMistakes'][3] = 1;
        user['stereotype'] -= 5;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
    else{
      document.getElementById('question-4-message').innerHTML = 'Correct!';
      document.getElementById('question-4-message').className = 'success';
      if(user['stringsMistakes'][3] == 0) {
        user['stringsMistakes'][3] = -1;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
  }
  else if(questionId == 5){
    var userInput = document.querySelector('input[name="question-5"]:checked').value;
    if(user['strings'] != 'completed'){
      user['strings-question-4'] = userInput;
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    if(userInput == 'not-addition'){
      document.getElementById('question-5-message').innerHTML = 'Using the <code>+</code> operator on a string and a numeric variable performs concatenation, not addition.';
      document.getElementById('question-5-message').className = 'failure';
      if(user['stringsMistakes'][4] == 0) {
        user['stringsMistakes'][4] = 1;
        user['stereotype'] -= 5;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
    if(userInput == 'not-a-number'){
      document.getElementById('question-5-message').innerHTML = 'The result of a concatenation between a string and a numeric variable is not a number.';
      document.getElementById('question-5-message').className = 'failure';
      if(user['stringsMistakes'][4] == 0) {
        user['stringsMistakes'][4] = 1;
        user['stereotype'] -= 5;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
    else{
      document.getElementById('question-5-message').innerHTML = 'Correct!';
      document.getElementById('question-5-message').className = 'success';
      user['stringsEntryStereotype'] = user['stereotype'];
      localStorage.setItem('learn-js-user', JSON.stringify(user));
      if(user['stringsMistakes'][4] == 0) {
        user['stringsMistakes'][4] = -1;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
  }
  if(typeof user['strings-question-0'] !== 'undefined' && typeof user['strings-question-1'] !== 'undefined'
  && typeof user['strings-question-2'] !== 'undefined' && typeof user['strings-question-3'] !== 'undefined' &&
  (typeof user['strings-question-4'] !== 'undefined' || user['stringsEntryStereotype'] < 1300) )
    if(user['strings-question-0'] == 'true' && user['strings-question-1'] == 'true'
    && user['strings-question-2'] == 'true' && user['strings-question-3'] == 'true'&&
    (user['strings-question-4'] == 'true' || user['stringsEntryStereotype'] < 1300) ) {
      if(user['strings'] != 'completed')  user['stereotype'] += 50;
      user['strings'] = 'completed';
      if(user['arrays'] == 'restricted')
        user['arrays'] = 'available';
    localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
}
