document.addEventListener('DOMContentLoaded', function(event){
  // Check if saved info, otherwise administer test
  if (localStorage.getItem('learn-js-user') === null){
    window.location="./index.html";
  }
  else {
    user = JSON.parse(localStorage.getItem('learn-js-user'));
    if (user['videos'] == 'yes')
      document.getElementsByTagName('style')[0].innerHTML += 'div.videos-further{ display: block;}';
    if (user['desiredJsKnowledge'] == 'full')
      document.getElementsByTagName('style')[0].innerHTML += 'div.js-further{ display: block;}';
  }
  window.setTimeout(function(){
    if(user['comments'] == 'available' || user['comments'] == 'restricted')
      user['comments'] = 'seen';
    localStorage.setItem('learn-js-user',JSON.stringify(user));
  },5000);
  window.setTimeout(function(){
    user['comments'] = 'completed';
    if(user['variables'] == 'restricted')
      user['variables'] = 'available';
    localStorage.setItem('learn-js-user',JSON.stringify(user));
  },30000);
  document.getElementsByTagName('style')[0].innerHTML += '.custom{background: red;}';
});

user = {};
