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
  questions.push({qDesc: 'What is the value of <code>num</code> after the following code is executed?<pre>num = 5;<br>if(num > 5) {<br>num = num + 1;<br>}<br>if(num < 6) {<br>num = num - 1;<br>}</pre>', answer1: '<code>6</code>', answer1value: 'false', answer2: '<code>4</code>', answer2value: 'true', answer3: '<code>5</code>', answer3value: 'false', type: 'conditionals'});
  questions.push({qDesc: 'Consider the following code:<pre>if ("fun" == 0) {<br> console.log("I don\'t know!");<br>} else if ("fun" == "fun") {<br> console.log("Piña colada");<br>} else {<br>  console.log("People are strange!");<br>}</pre> What will be printed to the console?', answer1: '<code>I don\'t know!</code>', answer1value: 'false', answer2: '<code>People are strange!</code>', answer2value: 'false', answer3: '<code>Piña colada</code>', answer3value: 'true', type: 'conditionals'});
  questions.push({qDesc: 'Consider the following switch statment:<pre>switch(val) {<br>  case 1:<br>    console.log("alpha");<br>    break;<br>  case 2:<br>    console.log("beta");<br>    break;<br>  case 3:<br>    console.log("gamma");<br>    break;<br>}</pre> If <code>val = 2 </code>, what will be printed to the console?', answer1: '<code>alpha</code>', answer1value: 'false', answer2: '<code>beta</code>', answer2value: 'true', answer3: '<code>gamma</code>', answer3value: 'false', type: 'conditionals'});
  questions.push({qDesc: 'Consider the following code. If today is neither Saturday nor Sunday, what will be printed to the console?<pre>switch (day) {<br>    case 6:<br>      console.log("Today is Saturday");<br>      break;<br>    case 0:<br>      console.log("Today is Sunday");<br>      break;<br>    default:<br>      console.log("Looking forward to the Weekend");<br>}</pre>', answer1: '<code>"Today is Saturday"</code>', answer1value: 'false', answer2: '<code>"Looking forward to the Weekend"</code>', answer2value: 'true', answer3: '<code>"Today is Sunday"</code>', answer3value: 'false', type: 'conditionals'});
  if(user['conditionalsEntryStereotype'] >= 1350)
    questions.push({qDesc: 'Consider the following code:<pre>var title = (married)?"Mrs":"Ms";</pre> What is the value of <code>title</code> if the value of <code>married</code> is <code>false</code>?', answer1: '<code>"Mrs"</code>', answer1value: 'false', answer2: '<code>false</code>', answer2value: 'false', answer3: '<code>"Ms"</code>', answer3value: 'true', type: 'conditionals'});
  else
    questions.push({qDesc: 'What will be printed to the console?<pre>bus = 5;<br>if (bus < 3 || bus > 6 &amp;&amp; bus < 8) {<br>  console.log("Take the bus!");<br>} else if (bus > 8) {<br>  console.log("Too late!");<br>} else {<br>  console.log("Stay put!");<br>}</pre>', answer1: '<code>"Take the bus!"</code>', answer1value: 'false', answer2: '<code>"Stay put!"</code>', answer2value: 'true', answer3: '<code>"Too late!"</code>', answer3value: 'false', type: 'conditionals'});
  questions.push({qDesc: 'Which of the following is the end condition for this for loop? <pre>for (var condition = 0; condition < 5; condition ++) {<br> return condition;<br>}</pre>', answer1: '<code>condition < 5</code>', answer1value: 'true', answer2: '<code>condition = 0</code>', answer2value: 'false', answer3: '<code>condition ++</code>', answer3value: 'false', type: 'loops'});
  questions.push({qDesc: 'Consider the following code. After the loop stops executing what does the array <code>workDays</code> equal to ?<pre>var workDays = [];<br>for (var i = 1; i < 6; i++) {<br>  myArray.push(i);<br>}</pre>', answer1: '<code>[1,2,3,4,5,6]</code>', answer1value: 'false', answer2: '<code>[1,2,3,4,5]</code>', answer2value: 'true', answer3: '<code>[0,1,2,3,4,5]</code>', answer3value: 'false', type: 'loops'});
  questions.push({qDesc: 'Given the following code, what value does the variable <code>total</code> hold?<pre>var myArr = [0, 1, 2, 3, 4, 5];<br>var total = 0;<br>for (var i = 0; i < 5; i++) {<br>  total += myArr[i];<br>}</pre>', answer1: '<code>"012345"</code>', answer1value: 'false', answer2: '<code>10</code>', answer2value: 'true', answer3: '<code>15</code>', answer3value: 'false', type: 'loops'});
  questions.push({qDesc: 'Consider the following code. After the loop stops executing what does the array <code>myArray</code> equal to ?<pre>var myArray = ["Simple","as"];<br>var i = 1;<br>while(i < 4) {<br>  myArray.push(i);<br>  i++;<br>}</pre>', answer1: '<code>["Simple","as",1,2,3,4]</code>', answer1value: 'false', answer2: '<code>["Simple","as",1,2,3]</code>', answer2value: 'true', answer3: '<code>[1,2,3]</code>', answer3value: 'false', type: 'loops'});
  if(user['loopsEntryStereotype'] >= 1400)
    questions.push({qDesc: 'Consider the following code:<pre> var x = 0;<br/>do {<br/>  if (x == 0) x = 5;</br>  else x = 0;<br/>  console.log("Looping");<br/>} while(x &gt; 0);</pre> How many times will <code>Looping</code> will be printed?', answer1: '<code>2</code>', answer1value: 'true', answer2: '<code>0</code>', answer2value: 'false', answer3: '<code>1</code>', answer3value: 'false', type: 'loops'});
  else
    questions.push({qDesc: 'Consider the following code:<pre> var x = 0;<br/>while(x &gt; 0){<br/>  if (x == 0) x = 5;</br>  else x = 0;<br/>  console.log("Looping");<br/>}</pre> How many times will <code>Looping</code> will be printed?', answer1: '<code>2</code>', answer1value: 'false', answer2: '<code>0</code>', answer2value: 'true', answer3: '<code>1</code>', answer3value: 'false', type: 'loops'});
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
  var correct = 0, conditionalsCorrect = 0, loopsCorrect = 0;

  for(var i = 1; i <= 10; i++) {
    if (document.querySelector('input[name="q'+i+'"]:checked').value == 'true') {
      correct += 1;
      if (questions[i-1].type == 'conditionals') conditionalsCorrect += 1;
      if (questions[i-1].type == 'loops') loopsCorrect += 1;
    }
  }
  showResults(correct, conditionalsCorrect, loopsCorrect);
  var currentScore = correct / 10 * 100;
  if(user['chapter3Score'] > 80) {
    if(currentScore >= 100) user['stereotype'] += 25;
  }
  if(user['chapter3Score'] > 60) {
    if(currentScore >= 80) user['stereotype'] += 25;
    if(currentScore >= 100) user['stereotype'] += 25;
  }
  else {
    user['stereotype'] += 50;
  }
  user['chapter3Score'] = (user['chapter3Score'] > currentScore) ? user['chapter3Score'] : currentScore;
  user['chapter3ConditionalsScore'] = (user['chapter3ConditionalsScore'] > (conditionalsCorrect / 5 * 100)) ? user['chapter3ConditionalsScore'] : conditionalsCorrect / 5 * 100;
  user['chapter3LoopsScore'] = ( user['chapter3LoopsScore'] > (loopsCorrect / 5 * 100)) ? user['chapter3LoopsScore'] : loopsCorrect / 5 * 100 ;
  localStorage.setItem('learn-js-user',JSON.stringify(user));
  document.getElementById('submitButton').setAttribute('disabled','true');
}

function showResults(correct, conditionalsCorrect, loopsCorrect){
  document.getElementById('results').innerHTML = 'You have '+correct+' answers out of 10 questions.<br/>conditionals score: '+(conditionalsCorrect/5 * 100)+'%<br/>loops score: '+(loopsCorrect/5 * 100)+'%<br/>' + ((correct>=6)?'<strong>Congratulations, you have passed the test!</strong>':'<strong>You have failed the test. Refresh this page to retake it!</strong>');
}

function showErrorMessage(id){
  document.getElementById('results').innerHTML = '<strong>You have not answered question '+id+'!</strong>';
}
