document.addEventListener('DOMContentLoaded', function(event){
  // Check if saved info, otherwise administer test
  if (localStorage.getItem('learn-js-user') === null){
    document.getElementById('new-user-questions').className = '';
    advanceQuestion();
  }
  else {
    user = JSON.parse(localStorage.getItem('learn-js-user'));
    updateUserMenu();
    document.getElementById('existing-user-menu').className = '';
  }
});

function deleteUserSystemInfo(){
  localStorage.removeItem('learn-js-user');
  return 'Done!';
}

var user = {};
var userScore = [false, false, false, false, false, false, false, false, false, ''];
questionId = 0;

function score(qId, value){
  userScore[qId] = value;
  advanceQuestion();
}

function advanceQuestion(){
  if (questionId > 0 && questionId <6)
    document.getElementById('skill-q'+questionId).className = 'question hidden';
  else if (questionId > 5)
    document.getElementById('preference-q'+(questionId-5)).className = 'question hidden';
  questionId += 1;
  if(questionId < 6){
    document.getElementById('skill-q'+questionId).className = 'question';
    window.setTimeout( function() {
      document.getElementById('skill-q'+questionId).style.marginLeft = '0';
    }, 10);
  }
  else if(questionId < 11){
    document.getElementById('preference-q'+(questionId-5)).className = 'question';
    window.setTimeout( function() {
      document.getElementById('preference-q'+(questionId-5)).style.marginLeft = '0';
    }, 10);
  }
  else {
    var userStereotype = 1000;
    if (userScore[0]) userStereotype += 50;
    if (userScore[0] && userScore[1]) userStereotype += 50;
    if (userScore[0] && userScore[2]) userStereotype += 100;
    if (userScore[3]) userStereotype += 50;
    if (userScore[3] && userScore[4]) userStereotype += 50;
    if (userScore[7]) userStereotype += 50;
    var user = {
      'comments' : 'available',
      'variables' : userScore[0]?'available':'restricted',
      'expressions' : (userScore[0] && userScore[1])?'available':'restricted',
      'strings' : (userScore[0] && userScore[1])?'available':'restricted',
      'arrays' : (userScore[0] && userScore[2])?'available':'restricted',
      'conditionals' : userScore[3]?'available':'restricted',
      'loops' : (userScore[3] && userScore[4])?'available':'restricted',
      'desiredJsKnowledge' : userScore[5]?'full':'basic',
      'desiredProgrammingKnowledge' : userScore[6]?'full':'basic',
      'experience' : userScore[7]?'yes':'no',
      'videos' : userScore[8]?'yes':'no',
      'animal' : userScore[9],
      'stereotype' : userStereotype,
      // Properties needed for lessons etc.
      'variablesEntryStereotype' : -1,
      'expressionsEntryStereotype' : -1,
      'expressionsMistakes' : [0,0,0,0,0],
      'stringsEntryStereotype' : -1,
      'stringsMistakes' : [0,0,0,0,0],
      'arraysEntryStereotype' : -1,
      'arraysMistakes' : [0,0,0,0,0],
      'conditionalsEntryStereotype' : -1,
      'conditionalsMistakes' : [0,0,0,0,0,0],
      'loopsEntryStereotype' : -1,
      'loopsMistakes' : [0,0,0,0,0],
      'chapter1EntryStereotype' : -1,
      'chapter1Score' : -1,
      'chapter2EntryStereotype' : -1,
      'chapter2Score' : -1,
      'chapter3EntryStereotype' : -1,
      'chapter3Score' : -1,
      'reviewEntryStereotype' : -1,
      'reviewScore' : -1
    }
    localStorage.setItem('learn-js-user', JSON.stringify(user));
    location.reload();
  }
}

function updateUserMenu(){
  updateMenuItem('comments');
  updateMenuItem('variables');
  updateMenuItem('expressions');
  updateMenuItem('strings');
  updateMenuItem('arrays');
  updateMenuItem('conditionals');
  updateMenuItem('loops');
}

function updateMenuItem(name){
  switch (user[name]){
    case 'available':
      document.getElementById('menu-'+name).innerHTML = availableIcon;
      document.getElementById('menu-'+name).setAttribute('aria-label', 'Available');
      break;
    case 'seen':
      document.getElementById('menu-'+name).innerHTML = seenIcon;
      document.getElementById('menu-'+name).setAttribute('aria-label', 'Seen');
      break;
    case 'completed':
      document.getElementById('menu-'+name).innerHTML = completedIcon;
      document.getElementById('menu-'+name).setAttribute('aria-label', 'Completed');
      break;
    case 'restricted':
    default:
      document.getElementById('menu-'+name).innerHTML = restrictedIcon;
      document.getElementById('menu-'+name).setAttribute('aria-label', 'Restricted');
      break;
  }
}

var availableIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line></svg>';

var seenIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';

var completedIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';

var restrictedIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12" y2="17"></line></svg>';
