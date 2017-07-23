document.addEventListener('DOMContentLoaded', function(event){
  // Check if saved info, otherwise administer test
  if (localStorage.getItem('learn-js-user') === null){
    window.location="./index.html";
  }
  else {
    user = JSON.parse(localStorage.getItem('learn-js-user'));
    if(user['animal'] == 'dog'){
      document.getElementById('dog-question').className = 'card fluid rounded';
      document.getElementById('cat-question').className = 'card fluid rounded hidden';
    }
    if (user['videos'] == 'yes')
      document.getElementsByTagName('style')[0].innerHTML += 'div.videos-further{ display: block;}';
    if (user['desiredJsKnowledge'] == 'full')
      document.getElementsByTagName('style')[0].innerHTML += 'li.js-further{ display: block;}';
    if (user['desiredProgrammingKnowledge'] == 'full')
      document.getElementsByTagName('style')[0].innerHTML += 'li.programming-further{ display: block;}'
  }
  window.setTimeout(function(){
    if(user['variables'] == 'available' || user['variables'] == 'restricted')
      user['variables'] = 'seen';
    localStorage.setItem('learn-js-user',JSON.stringify(user));
  },5000);
});

user = {};

function checkQuestion(questionId){
  if(questionId == 0){
    var userInput = document.getElementById('question-0').value.trim();
    if(user['variables'] != 'completed'){
      user['variables-question-0'] = userInput;
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    var inputValues = {
      'definedVar' : userInput.indexOf('var')  != -1,
      'definedName' : userInput.indexOf('myVar') != -1,
      'usedSemicolon' : userInput.indexOf(';') != -1,
      'nameAfterVar' : userInput.indexOf(' myVar') > userInput.indexOf('var '),
      'semicolonAfterName' : userInput.indexOf(';') > userInput.indexOf(' myVar')
    }
    if(!inputValues.definedVar){
      document.getElementById('question-0-message').innerHTML = 'You need to define a variable using the <code>var</code> keyword.';
      document.getElementById('question-0-message').className = 'failure';
    }
    else if(!inputValues.definedName){
      document.getElementById('question-0-message').innerHTML = 'You need to define a variable named <code>myVar</code>.';
      document.getElementById('question-0-message').className = 'failure';
    }
    else if(!inputValues.usedSemicolon){
      document.getElementById('question-0-message').innerHTML = 'Your variable definition should be followed by a <code>;</code>.';
      document.getElementById('question-0-message').className = 'failure';
    }
    else if(!inputValues.nameAfterVar){
      document.getElementById('question-0-message').innerHTML = 'Your variable\'s name should be after the <code>var</code> keyword.';
      document.getElementById('question-0-message').className = 'failure';
    }
    else if(!inputValues.semicolonAfterName){
      document.getElementById('question-0-message').innerHTML = 'You should put the <code>;</code> at the end of the variable definition.';
      document.getElementById('question-0-message').className = 'failure';
    }
    else{
      document.getElementById('question-0-message').innerHTML = 'Correct!';
      document.getElementById('question-0-message').className = 'success';
      user['variables-question-0'] = 'true';
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
  }
  else if(questionId == 1){
    var userInput = document.querySelector('input[name="question-1"]:checked').value;
    if(user['variables'] != 'completed'){
      user['variables-question-1'] = userInput;
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    if(userInput == 'assign-not-initialize'){
      document.getElementById('question-1-message').innerHTML = 'You should assign a value to <code>myNum</code>, not initialize the variable.';
      document.getElementById('question-1-message').className = 'failure';
    }
    else if(userInput == 'not-a-number'){
      document.getElementById('question-1-message').innerHTML = 'The value of <code>myNum</code> should be a number.';
      document.getElementById('question-1-message').className = 'failure';
    }
    else{
      document.getElementById('question-1-message').innerHTML = 'Correct!';
      document.getElementById('question-1-message').className = 'success';
    }
  }
  else if(questionId == 2){
    var userInput = document.querySelector('input[name="question-2"]:checked').value;
    if(user['variables'] != 'completed'){
      user['variables-question-2'] = userInput;
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    if(userInput == 'reverse'){
      document.getElementById('question-2-message').innerHTML = 'You should assign the value of <code>a</code> to <code>b</code>, not the other way around.';
      document.getElementById('question-2-message').className = 'failure';
    }
    else{
      document.getElementById('question-2-message').innerHTML = 'Correct!';
      document.getElementById('question-2-message').className = 'success';
    }
  }
  else if(questionId == 3){
    var userInput = document.querySelector('input[name="question-3"]:checked').value;
    if(user['variables'] != 'completed'){
      user['variables-question-3'] = userInput;
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    if(userInput == 'initialize-not-assign'){
      document.getElementById('question-3-message').innerHTML = 'You should initialize the variable <code>myCat</code>, not just assign a value to it.';
      document.getElementById('question-3-message').className = 'failure';
    }
    else if(userInput == 'not-a-string'){
      document.getElementById('question-3-message').innerHTML = 'The value of <code>myCat</code> should be a string.';
      document.getElementById('question-3-message').className = 'failure';
    }
    else{
      document.getElementById('question-3-message').innerHTML = 'Correct!';
      document.getElementById('question-3-message').className = 'success';
    }
  }
  else if(questionId == 4){
    var userInput = document.querySelector('input[name="question-4"]:checked').value;
    if(user['variables'] != 'completed'){
      user['variables-question-3'] = userInput;
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    if(userInput == 'initialize-not-assign'){
      document.getElementById('question-4-message').innerHTML = 'You should initialize the variable <code>myDog</code>, not just assign a value to it.';
      document.getElementById('question-4-message').className = 'failure';
    }
    else if(userInput == 'not-a-string'){
      document.getElementById('question-4-message').innerHTML = 'The value of <code>myDog</code> should be a string.';
      document.getElementById('question-4-message').className = 'failure';
    }
    else{
      document.getElementById('question-4-message').innerHTML = 'Correct!';
      document.getElementById('question-4-message').className = 'success';
    }
  }
  if(typeof user['variables-question-0'] !== 'undefined' && typeof user['variables-question-1'] !== 'undefined'
  && typeof user['variables-question-2'] !== 'undefined' && typeof user['variables-question-3'] !== 'undefined')
    if(user['variables-question-0'] == 'true' && user['variables-question-1'] == 'true'
    && user['variables-question-2'] == 'true' && user['variables-question-3'] == 'true') {
      user['variables'] = 'completed';
      if(user['expressions'] == 'restricted')
        user['expressions'] = 'available';
    localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
}
