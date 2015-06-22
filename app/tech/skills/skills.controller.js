'use strict';

function skillsCtrl( ) {
  var vm = this;

  vm.skills = [
    { 
      name: 'Languages',
      image: 'img/Speechbubbles_icon.svg',
      list: [
        {
          name: 'Javascript', 
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript?redirectlocale=en-US&redirectslug=JavaScript'
        },
        {
          name: 'HTML',
          link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
        },
        {
          name: 'CSS',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS?redirectlocale=en-US&redirectslug=CSS'
        },
        {
          name: 'Sass',
          link: 'http://sass-lang.com'
        },
        {
          name: 'Python (from college coursework)',
          link: 'https://www.python.org/'
        },
        {
          name: 'C (from college coursework)',
          link: 'http://www.cprogramming.com/'
        },
        {
          name: 'C++ (from college coursework)',
          link: 'http://www.cplusplus.com/'
        }
      ]
    },
    {
      name: 'Frameworks',
      image: 'img/ImagePlaceholder_icon.svg',
      list: [
        {
          name: 'AngularJS',
          link: 'https://angularjs.org'
        },
        {
          name: 'Jasmine',
          link: 'http://jasmine.github.io/edge/introduction.html'
        },
      ]
    },
    {
      name: 'Libraries',
      image: 'img/Cite_book.svg',
      list: [
        {
          name: 'Underscore',
          link: 'http://underscorejs.org'
        },
        {
          name: 'jQuery', 
          link: 'http://jquery.com'
        }
      ]
    },
    {
      name: 'Other Technologies',
      image: 'img/Keyboard_switch.svg',
      list: [
        {
          name: 'Grunt',
          link: 'http://gruntjs.com'
        },
        {
          name: 'Bower',
          link: 'http://bower.io'
        },
        {
          name: 'Git', 
          link: 'http://www.git-scm.com/'
        }
      ]
    }
  ];
}

skillsCtrl.$inject = [ ];

angular.module( 'mySite.tech' )
.controller( 'skillsCtrl', skillsCtrl );