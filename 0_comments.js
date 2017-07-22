document.addEventListener('DOMContentLoaded', function(event){
  // Check if saved info, otherwise administer test
  if (localStorage.getItem('learn-js-user') === null){
    window.location="./index.html";
  }
  else {
    user = JSON.parse(localStorage.getItem('learn-js-user'));
  }
  window.setTimeout(function(){
    if(user['comments'] == 'available' || user['comments'] == 'restricted')
      user['comments'] = 'seen';
    localStorage.setItem('learn-js-user',JSON.stringify(user));
  },5000);
});

user = {};