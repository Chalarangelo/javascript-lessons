document.addEventListener('DOMContentLoaded', function(event){
  // Check if saved info, otherwise administer test
  if (localStorage.getItem('learn-js-user') === null){
    window.location="./index.html";
  }
  else {
    user = JSON.parse(localStorage.getItem('learn-js-user'));
  }
  generateQuestions();
});

var user = {};
var questions = [];
function generateQuestions(){
  var questionsElement = document.getElementById('questions');
  questions.push({qDesc: 'What is the value of <code>x</code> after the following code is executed?<pre>var num = 0;<br>num = num + 5;<br>var x = num + 3 * 2;</pre>', answer1: '<code>6</code>', answer1value: 'false', answer2: '<code>11</code>', answer2value: 'true', answer3: '<code>5</code>', answer3value: 'false', type: ['variables','expressions']});
  questions.push({qDesc: 'What is the value of <code>c</code> after the following code is executed?<pre>var myString = "My head hurts";<br>myString = "I have a headache! " + myString;<br>var c = myString[20];</pre>', answer1: '<code>"a"</code>', answer1value: 'false', answer2: '<code>"M"</code>', answer2value: 'false', answer3: '<code>"y"</code>', answer3value: 'true', type: ['variables','strings']});
  questions.push({qDesc: 'What is the value of <code>i</code> after the following code is executed?<pre>var i = 2;<br>var myName = "Donald";<br>i = i + 2;<br>i = myName[i];</pre>', answer1: '<code>"d"</code>', answer1value: 'false', answer2: '<code>"l"</code>', answer2value: 'true', answer3: '<code>"a"</code>', answer3value: 'false', type: ['expressions','strings']});
  questions.push({qDesc: 'What is the value of <code>myArray</code> after the following code is executed?<pre>var myArray = [0];<br>for(var i = 0; i < 3; i++){<br>  myArray.push(i);<br>}</pre>', answer1: '<code>[0,1,2,3]</code>', answer1value: 'false', answer2: '<code>[0,0,1,2]</code>', answer2value: 'true', answer3: '<code>[1,2,3]</code>', answer3value: 'false', type: ['arrays','loops']});
  questions.push({qDesc: 'What is the value of <code>myValue</code> after the following code is executed?<pre>var myArray = [1,2,3];<br>var myValue;<br>switch(myArray[1]){<br>  case 1:<br>    myValue = 5;<br>    break;<br>  case 2:<br>    myValue = myArray.pop();<br>    break;<br>  default:<br>    myValue = 2;<br>}</pre>', answer1: '<code>3</code>', answer1value: 'true', answer2: '<code>2</code>', answer2value: 'false', answer3: '<code>5</code>', answer3value: 'false', type: ['conditionals','arrays']});
  questions.push({qDesc: 'What is the value of <code>x</code> after the following code is executed?<pre>var x = 6;<br>var y = 4;<br>while(x > 0 && y < 8){<br>  x = x - 1;<br>  y = y + 2;<br>}</pre>', answer1: '<code>0</code>', answer1value: 'false', answer2: '<code>4</code>', answer2value: 'true', answer3: '<code>5</code>', answer3value: 'false', type: ['loops','conditionals']});
  questions = shuffle(questions);
  var htmlToRender = '';
  for(var i = 0; i < questions.length; i++) {
    htmlToRender += generateQuestion(i+1, questions[i].qDesc, questions[i].answer1, questions[i].answer1value, questions[i].answer2, questions[i].answer2value, questions[i].answer3, questions[i].answer3value );
  }
  questionsElement.innerHTML = htmlToRender;
}

function generateQuestion(id, qDesc, answer1, answer1value, answer2, answer2value, answer3, answer3value){
  var htmlToRender = '<div class="input-group vertical">';
  htmlToRender += '<label for=q'+id+'>'+id+'. '+qDesc+'</label>';
  htmlToRender += '<div class="input-group"><input type="radio" id="q'+id+'-1" tabindex="0" name="q'+id+'" value="'+answer1value+'"><label for="q'+id+'-1">'+answer1+'</label></div>';
  htmlToRender += '<div class="input-group"><input type="radio" id="q'+id+'-2" tabindex="0" name="q'+id+'" value="'+answer2value+'"><label for="q'+id+'-2">'+answer2+'</label></div>';
  htmlToRender += '<div class="input-group"><input type="radio" id="q'+id+'-3" tabindex="0" name="q'+id+'" value="'+answer3value+'"><label for="q'+id+'-3">'+answer3+'</label></div>';
  htmlToRender += '</div><hr/>';
  return htmlToRender;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function checkQuestions(){
  for(var i = 1; i <= 6; i++) {
    if(document.querySelector('input[name="q'+i+'"]:checked') === null ){
      showErrorMessage(i);
      return;
    }
  }
  var correct = 0, variablesCorrect = 0, expressionsCorrect = 0, stringsCorrect = 0, arraysCorrect = 0, conditionalsCorrect = 0, loopsCorrect = 0;

  for(var i = 1; i <= 6; i++) {
    if (document.querySelector('input[name="q'+i+'"]:checked').value == 'true') {
      correct += 1;
      if (questions[i-1].type[0] == 'variables' || questions[i-1].type[1] == 'variables') variablesCorrect += 1;
      if (questions[i-1].type[0] == 'expressions' || questions[i-1].type[1] == 'expressions') expressionsCorrect += 1;
      if (questions[i-1].type[0] == 'strings' || questions[i-1].type[1] == 'strings') stringsCorrect += 1;
      if (questions[i-1].type[0] == 'arrays' || questions[i-1].type[1] == 'arrays') arraysCorrect += 1;
      if (questions[i-1].type[0] == 'conditionals' || questions[i-1].type[1] == 'conditionals') conditionalsCorrect += 1;
      if (questions[i-1].type[0] == 'loops' || questions[i-1].type[1] == 'loops') loopsCorrect += 1;
    }
  }
  showResults(correct, variablesCorrect, expressionsCorrect, stringsCorrect, arraysCorrect, conditionalsCorrect, loopsCorrect);
  var currentScore = correct / 6 * 100;
  user['reviewScore'] = (user['reviewScore'] > currentScore) ? user['reviewScore'] : currentScore;
  user['reviewVariablesScore'] = (user['reviewVariablesScore'] > (variablesCorrect / 2 * 100)) ? user['reviewVariablesScore'] : variablesCorrect / 2 * 100;
  user['reviewExpressionsScore'] = (user['reviewExpressionsScore'] > (expressionsCorrect / 2 * 100)) ? user['reviewExpressionsScore'] : expressionsCorrect / 2 * 100;
  user['reviewStringsScore'] = (user['reviewStringsScore'] > (stringsCorrect / 2 * 100)) ? user['reviewStringsScore'] : stringsCorrect / 2 * 100;
  user['reviewArraysScore'] = (user['reviewArraysScore'] > (arraysCorrect / 2 * 100)) ? user['reviewArraysScore'] : arraysCorrect / 2 * 100;
  user['reviewConditionalsScore'] = (user['reviewConditionalsScore'] > (conditionalsCorrect / 2 * 100)) ? user['reviewConditionalsScore'] : conditionalsCorrect / 2 * 100;
  user['reviewLoopsScore'] = (user['reviewLoopsScore'] > (loopsCorrect / 2 * 100)) ? user['reviewLoopsScore'] : loopsCorrect / 2 * 100;
  localStorage.setItem('learn-js-user',JSON.stringify(user));
  document.getElementById('submitButton').setAttribute('disabled','true');
}

function showResults(correct, variablesCorrect, expressionsCorrect, stringsCorrect, arraysCorrect, conditionalsCorrect, loopsCorrect){
  document.getElementById('results').innerHTML = 'You have '+correct+' answers out of 6 questions.<br/>Variables score: '+(variablesCorrect/2 * 100)+'%<br/>Expressions score: '+(expressionsCorrect/2 * 100)+'%<br/>Strings score: '+(stringsCorrect/2 * 100)+'%<br/>Arrays score: '+(arraysCorrect/2 * 100)+'%<br/>Conditionals score: '+(conditionalsCorrect/2 * 100)+'%<br/>Loops score: '+(loopsCorrect/2 * 100)+'%<br/>' + ((correct>=4)?'<strong>Congratulations, you have passed the test!</strong>':'<strong>You have failed the test. Refresh this page to retake it!</strong>');
}

function showErrorMessage(id){
  document.getElementById('results').innerHTML = '<strong>You have not answered question '+id+'!</strong>';
}
