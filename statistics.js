document.addEventListener('DOMContentLoaded', function(event){
  // Check if saved info, otherwise administer test
  if (localStorage.getItem('learn-js-user') === null){
    window.location="./index.html";
  }
  else {
    user = JSON.parse(localStorage.getItem('learn-js-user'));
  }
  generateStatistics();
});

var user = {};

function generateStatistics(){
  var htmlToRender = '';
  if (user['chapter1Score'] === -1){
    htmlToRender += '<h3>Chapter 1</h3><p>You have not yet taken this test!</p><br/>';
  }
  else {
    htmlToRender += '<h3>Chapter 1</h3>';
    htmlToRender += '<p>Total score: '+user['chapter1Score']+'%</p><progress max="100" value="'+user['chapter1Score']+'"></progress>';
    htmlToRender += '<p>Variables score: '+user['chapter1VariablesScore']+'%</p><progress max="100" value="'+user['chapter1VariablesScore']+'"></progress>';
    htmlToRender += '<p>Expressions score: '+user['chapter1ExpressionsScore']+'%</p><progress max="100" value="'+user['chapter1ExpressionsScore']+'"></progress>';
  }
  if (user['chapter2Score'] === -1){
    htmlToRender += '<h3>Chapter 2</h3><p>You have not yet taken this test!</p><br/>';
  }
  else {
    htmlToRender += '<h3>Chapter 2</h3>';
    htmlToRender += '<p>Total score: '+user['chapter2Score']+'%</p><progress max="100" value="'+user['chapter2Score']+'"></progress>';
    htmlToRender += '<p>Strings score: '+user['chapter2StringsScore']+'%</p><progress max="100" value="'+user['chapter2StringsScore']+'"></progress>';
    htmlToRender += '<p>Arrays score: '+user['chapter2ArraysScore']+'%</p><progress max="100" value="'+user['chapter2ArraysScore']+'"></progress>';
  }
  if (user['chapter3Score'] === -1){
    htmlToRender += '<h3>Chapter 3</h3><p>You have not yet taken this test!</p><br/>';
  }
  else {
    htmlToRender += '<h3>Chapter 3</h3>';
    htmlToRender += '<p>Total score: '+user['chapter3Score']+'%</p><progress max="100" value="'+user['chapter3Score']+'"></progress>';
    htmlToRender += '<p>Conditionals score: '+user['chapter3ConditionalsScore']+'%</p><progress max="100" value="'+user['chapter3ConditionalsScore']+'"></progress>';
    htmlToRender += '<p>Loops score: '+user['chapter3LoopsScore']+'%</p><progress max="100" value="'+user['chapter3LoopsScore']+'"></progress>';
  }
  if (user['reviewScore'] === -1){
    htmlToRender += '<h3>Review</h3><p>You have not yet taken this test!</p><br/>';
  }
  else {
    htmlToRender += '<h3>Review</h3>';
    htmlToRender += '<p>Total score: '+user['reviewScore']+'%</p><progress max="100" value="'+user['reviewScore']+'"></progress>';
    htmlToRender += '<p>Variables score: '+user['reviewVariablesScore']+'%</p><progress max="100" value="'+user['reviewVariablesScore']+'"></progress>';
    htmlToRender += '<p>Expressions score: '+user['reviewExpressionsScore']+'%</p><progress max="100" value="'+user['reviewExpressionsScore']+'"></progress>';
    htmlToRender += '<p>Strings score: '+user['reviewStringsScore']+'%</p><progress max="100" value="'+user['reviewStringsScore']+'"></progress>';
    htmlToRender += '<p>Arrays score: '+user['reviewArraysScore']+'%</p><progress max="100" value="'+user['reviewArraysScore']+'"></progress>';
    htmlToRender += '<p>Conditionals score: '+user['reviewConditionalsScore']+'%</p><progress max="100" value="'+user['reviewConditionalsScore']+'"></progress>';
    htmlToRender += '<p>Loops score: '+user['reviewLoopsScore']+'%</p><progress max="100" value="'+user['reviewLoopsScore']+'"></progress>';
  }
  document.getElementById('statistics-view').innerHTML = htmlToRender;
}
