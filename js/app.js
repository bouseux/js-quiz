$(function() {
  var current = 0;
  var questions = [{
    'question': 'What is printed in the console?',
    'code': 'code1.html',
    'choices': ['true', 'false', 'ReferenceError'],
    'answer': 'true'
  }, {
    'question': 'What does the following snippet of code alert?',
    'code': 'code2.html',
    'choices': ['function', 'number', 'object', 'undefined'],
    'answer': 'undefined'
  }];

  var setQuestion = function() {
    var question = questions[current];
    var numChoices = question.choices.length;
    var ul = $('ul');

    $('.question').text(question.question);
    $.get('views/' + question.code, function(data) {
      console.log('views/' + question.code);
      $('.code').text(data);
    });

    for(var i = 0; i < numChoices; i++) {
      ul.append('<li>' + question.choices[i] + '</li>');
    }
  };

  $('.start').click(function() {
    setQuestion();
    $('.welcome').fadeOut('fast', function() {
      $('.quiz').fadeIn('fast');
    });
  });
});
