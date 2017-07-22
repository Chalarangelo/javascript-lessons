document.addEventListener('DOMContentLoaded', function(event){
  // Check if saved info, otherwise administer test
  if (localStorage.getItem('learn-js-user') === null){
    window.location="./index.html";
  }
  else {
    user = JSON.parse(localStorage.getItem('learn-js-user'));
  if (user['desiredJsKnowledge'] == 'full')
    document.getElementsByTagName('style')[0].innerHTML += 'div.js-further{ display: block;}';
  }
  window.setTimeout(function(){
    if(user['expressions'] == 'available' || user['expressions'] == 'restricted')
      user['expressions'] = 'seen';
    localStorage.setItem('learn-js-user',JSON.stringify(user));
  },5000);
});

user = {};
