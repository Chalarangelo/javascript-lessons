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
    if(user['conditionals'] == 'available' || user['conditionals'] == 'restricted')
      user['conditionals'] = 'seen';
    localStorage.setItem('learn-js-user',JSON.stringify(user));
  },5000);
});

user = {};
