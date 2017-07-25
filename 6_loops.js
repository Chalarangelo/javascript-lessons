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
    if (user['desiredJsKnowledge'] == 'full' && user['desiredProgrammingKnowledge'] == 'full')
      document.getElementsByTagName('style')[0].innerHTML += 'li.js-p-further{ display: block;}';
  }
  window.setTimeout(function(){
    if(user['loops'] == 'available' || user['loops'] == 'restricted')
      user['loops'] = 'seen';
    localStorage.setItem('learn-js-user',JSON.stringify(user));
  },5000);
});

user = {};

function checkQuestion(questionId){
   if(questionId == 0){
    var userInput = document.querySelector('input[name="question-0"]:checked').value;
    if(user['loops'] != 'completed'){
      user['loops-question-0'] = userInput;
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    if(userInput == 'initialization'){
      document.getElementById('question-0-message').innerHTML = 'This is the initialization statement. It is typically used to define and setup your loop variable.';
      document.getElementById('question-0-message').className = 'failure';
    }
    else if(userInput == 'codeBlock'){
      document.getElementById('question-0-message').innerHTML = 'This is the code block that is to be executed';
      document.getElementById('question-0-message').className = 'failure';
    }
    else if(userInput == 'finalExpression'){
      document.getElementById('question-0-message').innerHTML = 'This is final-expression. It is usually used to increment or decrement your loop counter.';
      document.getElementById('question-0-message').className = 'failure';
    }
    else{
      document.getElementById('question-0-message').innerHTML = 'Correct!';
      document.getElementById('question-0-message').className = 'success';
    }
  }
  else if(questionId == 1){
    var userInput = document.querySelector('input[name="question-1"]:checked').value;
    if(user['loops'] != 'completed'){
      user['loops-question-1'] = userInput;
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    if(userInput == 'iteration'){
      document.getElementById('question-1-message').innerHTML = 'The loop runs for <code>i</code> from 1 up to (but not including) 6';
      document.getElementById('question-1-message').className = 'failure';
    }
    else if(userInput == 'iValue'){
      document.getElementById('question-1-message').innerHTML = 'The loop variable <code>i</code> is initialized to start at 1.';
      document.getElementById('question-1-message').className = 'failure';
    }
    else{
      document.getElementById('question-1-message').innerHTML = 'Correct!';
      document.getElementById('question-1-message').className = 'success';
    }
  }
  else if(questionId == 2){
    var userInput = document.getElementById('question-2').value;
    if(user['loops'] != 'completed'){
      user['loops-question-2'] = userInput;
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    if(userInput < 10 || userInput > 10 && userInput != 15){
      document.getElementById('question-2-message').innerHTML = 'The loop stop executing when <code>i = 5</code>';
      document.getElementById('question-2-message').className = 'failure';
    }
    else if(userInput == 15){
      document.getElementById('question-2-message').innerHTML = 'The loop runs for <code>i</code> from 0 up to (but not including) 5';
      document.getElementById('question-2-message').className = 'failure';
    }
    else{
      document.getElementById('question-2-message').innerHTML = 'Correct!';
      document.getElementById('question-2-message').className = 'success';
      if(user['loops'] != 'completed'){
        user['loops-question-2'] = 'true';
        localStorage.setItem('learn-js-user',JSON.stringify(user));
      }
    }
  }
  else if(questionId == 3){
    var userInput = document.querySelector('input[name="question-3"]:checked').value;
    if(user['loops'] != 'completed'){
      user['loops-question-3'] = userInput;
      localStorage.setItem('learn-js-user',JSON.stringify(user));
    }
    if(userInput == 'iteration'){
      document.getElementById('question-3-message').innerHTML = 'The loop runs for <code>i</code> from 1 up to (but not including) 4';
      document.getElementById('question-3-message').className = 'failure';
    }
    else if(userInput == 'append'){
      document.getElementById('question-3-message').innerHTML = 'Remember that the <code>.push()</code> function appends data to the end of an array';
      document.getElementById('question-3-message').className = 'failure';
    }
    else{
      document.getElementById('question-3-message').innerHTML = 'Correct!';
      document.getElementById('question-3-message').className = 'success';
    }
  }
  if(typeof user['loops-question-0'] !== 'undefined' && typeof user['loops-question-1'] !== 'undefined'
&& typeof user['loops-question-2'] !== 'undefined' && typeof user['loops-question-3'] !== 'undefined')
  if(user['loops-question-0'] == 'true' && user['loops-question-1'] == 'true'
  && user['loops-question-2'] == 'true' && user['loops-question-3'] == 'true') {
    user['loops'] = 'completed';
    // if(user['expressions'] == 'restricted')
    //   user['expressions'] = 'available';
  localStorage.setItem('learn-js-user',JSON.stringify(user));
  }
}
