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
  questions.push({qDesc: 'Which of the below is a correct string literal?', answer1: '<code>Bob</code>', answer1value: 'false', answer2: '<code>"Bob"</code>', answer2value: 'true', answer3: '<code>\'Bob"</code>', answer3value: 'false', type: 'strings'});
  questions.push({qDesc: 'What is the <code>.length</code> of the following string literal?<pre>"Ludwig van Beethoven"</pre>', answer1: '18', answer1value: 'false', answer2: '19', answer2value: 'false', answer3: '20', answer3value: 'true', type: 'strings'});
  questions.push({qDesc: 'Which of the following is the result of the following string concatenation?<pre>"I love"+"JavaScript!"</pre>', answer1: '<code>"I love JavaScript!"</code>', answer1value: 'false', answer2: '<code>"I loveJavaScript!"</code>', answer2value: 'true', answer3: '<code>"I love+JavaScript!"</code>', answer3value: 'false', type: 'strings'});
  questions.push({qDesc: 'What is the result of the expressions <code>mySong[2]</code> if <code>mySong</code> is equal to <code>"Cherry Bomb"</code>?', answer1: '<code>h</code>', answer1value: 'false', answer2: '<code>e</code>', answer2value: 'true', answer3: '<code>r</code>', answer3value: 'false', type: 'strings'});
  if(user['stringsEntryStereotype'] >= 1300)
    questions.push({qDesc: 'What is the value of the variable <code>id</code> in the following code? <pre>var id = "15" + 31;</pre>', answer1: '<code>1531</code>', answer1value: 'false', answer2: '<code>"46"</code>', answer2value: 'false', answer3: '<code>"1531"</code>', answer3value: 'true', type: 'strings'});
  else
    questions.push({qDesc: 'What is the result of the expressions <code>myMovie[6]</code> if <code>mySong</code> is equal to <code>"Breakfast at Tiffany\'s"</code>?', answer1: '<code>f</code>', answer1value: 'false', answer2: '<code>a</code>', answer2value: 'true', answer3: '<code>s</code>', answer3value: 'false', type: 'strings'});
  questions.push({qDesc: 'Which is the correct way to initialize an array <code>person</code> so that it contains the string <code>Tom</code> and the number <code>45</code>?', answer1: '<code>var person = ["Tom",45];</code>', answer1value: 'true', answer2: '<code>var person = [Tom,45];</code>', answer2value: 'false', answer3: '<code>var person = ["Tom","45"];</code>', answer3value: 'false', type: 'arrays'});
  questions.push({qDesc: 'What is the result of the expressions <code>myArray[1] = "Beer"</code> if <code>myArray</code> is equal to <code>[2,4,2]</code>?', answer1: '<code>["Beer",4,2]</code>', answer1value: 'false', answer2: '<code>[2,"Beer",2]</code>', answer2value: 'true', answer3: '<code>[2,4,"Beer"]</code>', answer3value: 'false', type: 'arrays'});
  questions.push({qDesc: 'Consider the following code:<pre>var myPun = ["I","scream","for","ice"];<br>myPun.push("cream");</pre>What does the array <code>myPun</code> now equal to?', answer1: '<code>["cream","I","scream","for","ice"]</code>', answer1value: 'false', answer2: '<code>["I","scream","for","ice","cream"]</code>', answer2value: 'true', answer3: '<code>["I","scream","for","cream"]</code>', answer3value: 'false', type: 'arrays'});
  questions.push({qDesc: 'Consider the following code:<pre>var sequence = [1,11,21,1211,1221];<br>var oneDown = sequence.pop();</pre>What is the value of the variable <code>oneDown</code>?', answer1: '<code>1</code>', answer1value: 'false', answer2: '<code>1221</code>', answer2value: 'true', answer3: '<code>1211</code>', answer3value: 'false', type: 'arrays'});
  if(user['arraysEntryStereotype'] >= 1250)
    questions.push({qDesc: 'Consider the following code:<pre> var numbers = [2,4,8].unshift(1);</pre>What is the value of the variable <code>numbers</code>?', answer1: '<code>[1,2,4,8]</code>', answer1value: 'true', answer2: '<code>[2,4,8,1]</code>', answer2value: 'false', answer3: '<code>[4,8]</code>', answer3value: 'false', type: 'arrays'});
  else
    questions.push({qDesc: 'What is the result of the expressions <code>myArray[3] = "Candy"</code> if <code>myArray</code> is equal to <code>[6,0,9]</code>?', answer1: '<code>[6,0,"Candy"]</code>', answer1value: 'false', answer2: '<code>[6,0,9,"Candy"]</code>', answer2value: 'true', answer3: '<code>[6,0,9]</code>', answer3value: 'false', type: 'arrays'});
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
  var correct = 0, stringsCorrect = 0, arraysCorrect = 0;

  for(var i = 1; i <= 10; i++) {
    if (document.querySelector('input[name="q'+i+'"]:checked').value == 'true') {
      correct += 1;
      if (questions[i-1].type == 'strings') stringsCorrect += 1;
      if (questions[i-1].type == 'arrays') arraysCorrect += 1;
    }
  }
  showResults(correct, stringsCorrect, arraysCorrect);
  var currentScore = correct / 10 * 100;
  if(user['chapter2Score'] > 80) {
    if(currentScore >= 100) user['stereotype'] += 25;
  }
  if(user['chapter2Score'] > 60) {
    if(currentScore >= 80) user['stereotype'] += 25;
    if(currentScore >= 100) user['stereotype'] += 25;
  }
  else {
    user['stereotype'] += 50;
  }
  user['chapter2Score'] = (user['chapter2Score'] > currentScore) ? user['chapter2Score'] : currentScore;
  user['chapter2stringsScore'] = (user['chapter2stringsScore'] > (stringsCorrect / 5 * 100)) ? user['chapter2stringsScore'] : stringsCorrect / 5 * 100;
  user['chapter2arraysScore'] = ( user['chapter2arraysScore'] > (arraysCorrect / 5 * 100)) ? user['chapter2arraysScore'] : arraysCorrect / 5 * 100 ;
  localStorage.setItem('learn-js-user',JSON.stringify(user));
  document.getElementById('submitButton').setAttribute('disabled','true');
}

function showResults(correct, stringsCorrect, arraysCorrect){
  document.getElementById('results').innerHTML = 'You have '+correct+' answers out of 10 questions.<br/>strings score: '+(stringsCorrect/5 * 100)+'%<br/>arrays score: '+(arraysCorrect/5 * 100)+'%<br/>' + ((correct>=6)?'<strong>Congratulations, you have passed the test!</strong>':'<strong>You have failed the test. Refresh this page to retake it!</strong>');
}

function showErrorMessage(id){
  document.getElementById('results').innerHTML = '<strong>You have not answered question '+id+'!</strong>';
}
