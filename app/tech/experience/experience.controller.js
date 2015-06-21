'use strict';

function experienceCtrl( ) {
  var vm = this;

  vm.jobs = [
    { 
      name: 'FactSet Research Systems',
      position: 'Software Engineer',
      start: 'June 2014', 
      end: 'Present',
      link: 'www.factset.com',
      logo: 'img/factsetF.png',
      bullets: [ 'Front-end web development for the UI layer of an application. Workflow follows scrum methods and principles.',
      'Technology: AngularJS, jQuery, Jasmine, Underscore, Sass, Grunt, Bower']
    }
  ];
}

experienceCtrl.$inject = [ ];

angular.module( 'mySite.tech' )
.controller( 'experienceCtrl', experienceCtrl );