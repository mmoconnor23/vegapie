'use strict';

function courseworkCtrl( ) {
  var vm = this;

  vm.courses = [
    {
      number: 'CS21',
      name: 'Introduction to Computer Science',
      link: 'http://www.cs.swarthmore.edu/~knerr/teaching/s12/index.php'
    },
    {
      number: 'CS31',
      name: 'Introduction to Computer Systems',
      link: 'http://www.cs.swarthmore.edu/~newhall/cs31/f12/'
    },
    {
      number: 'CS35',
      name: 'Data Structures and Algorithms',
      link: 'http://www.cs.swarthmore.edu/~soni/cs35/f12/'
    },
    {
      number: 'CS37',
      name: 'Structure and Interpretation of Computer Programs',
      link: 'http://www.cs.swarthmore.edu/~richardw/cs37-s13/'
    },
    {
      number: 'CS40',
      name: 'Computer Graphics',
      link: 'http://www.cs.swarthmore.edu/~adanner/cs40/s13/'
    },
    {
      number: 'CS41',
      name: 'Algorithms',
      link: 'http://www.cs.swarthmore.edu/~brody/cs41/f13/'
    },
    {
      number: 'CS43',
      name: 'Computer Networks',
      link: 'http://web.cs.swarthmore.edu/~kwebb/cs43/f13/'
    },
    {
      number: 'CS97',
      name: 'Senior Conference: Dynamic Analysis',
      link: 'http://www.cs.swarthmore.edu/~bylvisa1/cs97/f13/',
      paper: 'http://www.cs.swarthmore.edu/~bylvisa1/cs97/f13/cs97_2013_2014_final_reports.pdf',
      page: 62
    },
    {
      number: 'CS44',
      name: 'Database Systems',
      link: 'http://www.cs.swarthmore.edu/~soni/cs44/s14/'
    },
    {
      number: 'CS81',
      name: 'Adaptive Robotics',
      link: 'http://web.cs.swarthmore.edu/~meeden/cs81/s14/',
      paper: 'http://web.cs.swarthmore.edu/~meeden/cs81/s14/papers/JoeMelissa.pdf'
    }
  ];
}

courseworkCtrl.$inject = [ ];

angular.module( 'mySite.tech' )
.controller( 'courseworkCtrl', courseworkCtrl );