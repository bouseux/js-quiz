$(function() {
  var questions = [{
    'question': 'What is printed in the console?',
    'code': 'var foo = function foo() {\nconsole.log(foo == foo);\n};\nfoo();',
    'choices': ['true', 'false', 'ReferenceError'],
    'answer': 'true'
  }, {
    'question': 'What does the following snippet of code alert?'
    'code': 'function aaa() {\nreturn\n{\ntest: 1\n};\n}\nalert(typeof aaa());',
    'answer': ];
  $('.start').click(function() {
    $('.welcome').fadeOut('fast', function() {
      $('.quiz').fadeIn('fast');
    });
  });
});
