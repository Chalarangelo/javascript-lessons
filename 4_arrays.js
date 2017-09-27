document.addEventListener('DOMContentLoaded', function(event){
  // Check if saved info, otherwise administer test
  if (localStorage.getItem('learn-js-user') === null){
    window.location="./index.html";
  }
  else {
    user = JSON.parse(localStorage.getItem('learn-js-user'));
    if(user['arraysEntryStereotype'] < 0){
      user['arraysEntryStereotype'] = user['stereotype'];
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    if (user['arraysEntryStereotype'] >= 1250 || user['stereotype'] >= 1250 || user['chapter2Score'] > 60)
      document.getElementsByTagName('style')[0].innerHTML += 'div.advanced-1250{ display: block;}';
    if (user['videos'] == 'yes')
      document.getElementsByTagName('style')[0].innerHTML += 'div.videos-further{ display: block;}';
    if (user['desiredJsKnowledge'] == 'full' || user['desiredProgrammingKnowledge'] == 'full')
      document.getElementsByTagName('style')[0].innerHTML += 'div.read-further{ display: block;}';
    if (user['desiredJsKnowledge'] == 'full')
      document.getElementsByTagName('style')[0].innerHTML += 'li.js-further{ display: list-item;}';
    if (user['desiredProgrammingKnowledge'] == 'full')
      document.getElementsByTagName('style')[0].innerHTML += 'li.programming-further{ display: list-item;}';
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
      if(user['arraysMistakes'][questionId] == 0) {
        user['arraysMistakes'][questionId] = 1;
        user['stereotype'] -= 5;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
    else if(userInput == 'no-comma'){
      document.getElementById('question-0-message').innerHTML = 'Between each array entry should be a comma.';
      document.getElementById('question-0-message').className = 'failure';
      if(user['arraysMistakes'][questionId] == 0) {
        user['arraysMistakes'][questionId] = 1;
        user['stereotype'] -= 5;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
    else{
      document.getElementById('question-0-message').innerHTML = 'Correct!';
      document.getElementById('question-0-message').className = 'success';
      if(user['arraysMistakes'][questionId] == 0) {
        user['arraysMistakes'][questionId] = -1;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
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
      if(user['arraysMistakes'][questionId] == 0) {
        user['arraysMistakes'][questionId] = 1;
        user['stereotype'] -= 5;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
    else{
      document.getElementById('question-1-message').innerHTML = 'Correct!';
      document.getElementById('question-1-message').className = 'success';
      if(user['arraysMistakes'][questionId] == 0) {
        user['arraysMistakes'][questionId] = -1;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
  }
  else if(questionId == 2){
    var userInput = document.querySelector('input[name="question-2"]:checked').value;
    if(user['arrays'] != 'completed'){
      user['arrays-question-2'] = userInput;
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    if(userInput == 'beginning'){
      document.getElementById('question-2-message').innerHTML = 'The <code>.push()</code> function append data to the end of an array.';
      document.getElementById('question-2-message').className = 'failure';
      if(user['arraysMistakes'][questionId] == 0) {
        user['arraysMistakes'][questionId] = 1;
        user['stereotype'] -= 5;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
    else{
      document.getElementById('question-2-message').innerHTML = 'Correct!';
      document.getElementById('question-2-message').className = 'success';
      if(user['arraysMistakes'][questionId] == 0) {
        user['arraysMistakes'][questionId] = -1;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
  }
  if(questionId == 3){
    var userInput = document.querySelector('input[name="question-3"]:checked').value;
    if(user['arrays'] != 'completed'){
      user['arrays-question-3'] = userInput;
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    if(userInput == 'beginning'){
      document.getElementById('question-3-message').innerHTML = 'The <code>.pop()</code> function extracts the last element of an array.';
      document.getElementById('question-3-message').className = 'failure';
      if(user['arraysMistakes'][questionId] == 0) {
        user['arraysMistakes'][questionId] = 1;
        user['stereotype'] -= 5;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
    else{
      document.getElementById('question-3-message').innerHTML = 'Correct!';
      document.getElementById('question-3-message').className = 'success';
      if(user['arraysMistakes'][questionId] == 0) {
        user['arraysMistakes'][questionId] = -1;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
  }
  if(questionId == 4){
    var userInput = document.querySelector('input[name="question-4"]:checked').value;
    if(user['arrays'] != 'completed'){
      user['arrays-question-4'] = userInput;
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    if(userInput == 'not-shift'){
      document.getElementById('question-4-message').innerHTML = 'The <code>.unshift()</code> function inserts elements, instead of removing them.';
      document.getElementById('question-4-message').className = 'failure';
      if(user['arraysMistakes'][questionId] == 0) {
        user['arraysMistakes'][questionId] = 1;
        user['stereotype'] -= 5;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
    if(userInput == 'not-at-end'){
      document.getElementById('question-4-message').innerHTML = 'The <code>.unshift()</code> function does not insert elements at the end of the array.';
      document.getElementById('question-4-message').className = 'failure';
      if(user['arraysMistakes'][questionId] == 0) {
        user['arraysMistakes'][questionId] = 1;
        user['stereotype'] -= 5;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
    else{
      document.getElementById('question-4-message').innerHTML = 'Correct!';
      document.getElementById('question-4-message').className = 'success';
      user['arraysEntryStereotype'] = user['stereotype'];
      localStorage.setItem('learn-js-user', JSON.stringify(user));
      if(user['arraysMistakes'][questionId] == 0) {
        user['arraysMistakes'][questionId] = -1;
        localStorage.setItem('learn-js-user', JSON.stringify(user));
      }
    }
  }
  if(typeof user['arrays-question-0'] !== 'undefined' && typeof user['arrays-question-1'] !== 'undefined'
  && typeof user['arrays-question-2'] !== 'undefined' && typeof user['arrays-question-3'] !== 'undefined' &&
  (typeof user['arrays-question-4'] !== 'undefined' || user['arraysEntryStereotype'] < 1250) )
    if(user['arrays-question-0'] == 'true' && user['arrays-question-1'] == 'true'
    && user['arrays-question-2'] == 'true' && user['arrays-question-3'] == 'true'&&
    (user['arrays-question-4'] == 'true' || user['arraysEntryStereotype'] < 1250) ) {
      if(user['arrays'] != 'completed')  user['stereotype'] += 50;
      user['arrays'] = 'completed';
      if(user['conditionals'] == 'restricted')
        user['conditionals'] = 'available';
    localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
}
