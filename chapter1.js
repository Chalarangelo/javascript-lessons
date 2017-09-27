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
  var q1Num = Math.floor(Math.random() * 20);
  questions.push({qDesc: 'Which of the following is the correct way to assign the value <code>'+q1Num+'</code> to a variable <code>myNum</code>?', answer1: '<code>myNum = "'+q1Num+'";</code>', answer1value: 'false', answer2: '<code>myNum = '+q1Num+';</code>', answer2value: 'true', answer3: '<code>var myNum = '+q1Num+';</code>', answer3value: 'false', type: 'variables'});
  questions.push({qDesc: 'Which of the following is the correct way to assign the contents of the variable <code>a</code> to variable <code>b</code>?', answer1: '<code>a = b;</code>', answer1value: 'false', answer2: '<code>var a = b;</code>', answer2value: 'false', answer3: '<code>b = a;</code>', answer3value: 'true', type: 'variables'});
  questions.push({qDesc: 'Which is the correct way to initialize a variable <code>myCoffee</code> with the value <code>"Espresso"</code>?', answer1: '<code>myCoffee = "Espresso";</code>', answer1value: 'false', answer2: '<code>var myCoffee = "Espresso";</code>', answer2value: 'true', answer3: '<code>var myCoffee = Espresso;</code>', answer3value: 'false', type: 'variables'});
  questions.push({qDesc: 'Which is the correct way to initialize a variable <code>myNum</code> with the value <code>'+(50-q1Num)+'</code>?', answer1: '<code>var myNum = "'+(50-q1Num)+'";</code>', answer1value: 'false', answer2: '<code>var myNum = '+(50-q1Num)+';</code>', answer2value: 'true', answer3: '<code>myNum = '+(50-q1Num)+';</code>', answer3value: 'false', type: 'variables'});
  if(user['variablesEntryStereotype'] >= 1250)
    questions.push({qDesc: 'Consider the following code:<pre>var a;<br/>a = a + 5;</pre>What is the value of <code>a</code>?', answer1: '<code>5</code>', answer1value: 'false', answer2: '<code>undefined</code>', answer2value: 'false', answer3: '<code>NaN</code>', answer3value: 'true', type: 'variables'});
  else
    questions.push({qDesc: 'Which is the correct way to increment the value of a variable <code>a</code> by <code>5</code>?', answer1: '<code>a = a + 5;</code>', answer1value: 'true', answer2: '<code>var a = a + 5;</code>', answer2value: 'false', answer3: '<code>a = a + "5";</code>', answer3value: 'false', type: 'variables'});
  questions.push({qDesc: 'Which is the correct way to decrement the value of a variable <code>b</code> by <code>8</code>?', answer1: '<code>b = b - 8;</code>', answer1value: 'true', answer2: '<code>var b = b - 8;</code>', answer2value: 'false', answer3: '<code>b = b - "8";</code>', answer3value: 'false', type: 'expressions'});
  questions.push({qDesc: 'Which of the following symbols is the multiplication operator?', answer1: '<code>/</code>', answer1value: 'false', answer2: '<code>*</code>', answer2value: 'true', answer3: '<code>+</code>', answer3value: 'false', type: 'expressions'});
  questions.push({qDesc: 'What is the result of the expression <code>2 + 5 * 10</code>?', answer1: '<code>70</code>', answer1value: 'false', answer2: '<code>52</code>', answer2value: 'true', answer3: '<code>25</code>', answer3value: 'false', type: 'expressions'});
  questions.push({qDesc: 'What is the result of the expression <code>30/5 + 2</code>?', answer1: '<code>4</code>', answer1value: 'false', answer2: '<code>8</code>', answer2value: 'true', answer3: '<code>5</code>', answer3value: 'false', type: 'expressions'});
  if(user['expressionsEntryStereotype'] >= 1100)
    questions.push({qDesc: 'What is the result of the expression <code>20 % 3</code>?', answer1: '<code>2</code>', answer1value: 'true', answer2: '<code>18</code>', answer2value: 'false', answer3: '<code>6</code>', answer3value: 'false', type: 'expressions'});
  else
    questions.push({qDesc: 'What is the result of the expression <code>20 / 3</code>?', answer1: '<code>2</code>', answer1value: 'false', answer2: '<code>18</code>', answer2value: 'false', answer3: '<code>6</code>', answer3value: 'true', type: 'expressions'});
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
  for(var i = 1; i <= 10; i++) {
    if(document.querySelector('input[name="q'+i+'"]:checked') === null ){
      showErrorMessage(i);
      return;
    }
  }
  var correct = 0, variablesCorrect = 0, expressionsCorrect = 0;

  for(var i = 1; i <= 10; i++) {
    if (document.querySelector('input[name="q'+i+'"]:checked').value == 'true') {
      correct += 1;
      if (questions[i-1].type == 'variables') variablesCorrect += 1;
      if (questions[i-1].type == 'expressions') expressionsCorrect += 1;
    }
  }
  showResults(correct, variablesCorrect, expressionsCorrect);
  var currentScore = correct / 10 * 100;
  if(user['chapter1Score'] > 80) {
    if(currentScore >= 100) user['stereotype'] += 25;
  }
  if(user['chapter1Score'] > 60) {
    if(currentScore >= 80) user['stereotype'] += 25;
    if(currentScore >= 100) user['stereotype'] += 25;
  }
  else {
    user['stereotype'] += 50;
  }
  user['chapter1Score'] = (user['chapter1Score'] > currentScore) ? user['chapter1Score'] : currentScore;
  user['chapter1VariablesScore'] = (user['chapter1VariablesScore'] > (variablesCorrect / 5 * 100)) ? user['chapter1VariablesScore'] : variablesCorrect / 5 * 100;
  user['chapter1ExpressionsScore'] = ( user['chapter1ExpressionsScore'] > (expressionsCorrect / 5 * 100)) ? user['chapter1ExpressionsScore'] : expressionsCorrect / 5 * 100 ;
  localStorage.setItem('learn-js-user',JSON.stringify(user));
  document.getElementById('submitButton').setAttribute('disabled','true');
}

function showResults(correct, variablesCorrect, expressionsCorrect){
  document.getElementById('results').innerHTML = 'You have '+correct+' answers out of 10 questions.<br/>Variables score: '+(variablesCorrect/5 * 100)+'%<br/>Expressions score: '+(expressionsCorrect/5 * 100)+'%<br/>' + ((correct>=6)?'<strong>Congratulations, you have passed the test!</strong>':'<strong>You have failed the test. Refresh this page to retake it!</strong>');
}

function showErrorMessage(id){
  document.getElementById('results').innerHTML = '<strong>You have not answered question '+id+'!</strong>';
}
