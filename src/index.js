import initTilt from './js/tilt';
import { scroll } from './js/scroll';
import { particles } from './js/app'
import { skillSphere } from './js/skillSphere'

import * as p from './js/particles'

import { amelioSvg, crozaSvg } from './js/name2'
import { 
    lettersEvent, 
    loadSectionScrollTrigger,
    loadElementScrollTrigger
 } from './js/events'

 import { jobTitleStepper } from './js/jobTitleStepper'

import './style/main.scss';

const rootNode = document.getElementById('fullname')

rootNode.innerHTML += amelioSvg + crozaSvg

scroll()

$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
  }
});


skillSphere([
    'SVG', 'HTML5', 'CSS3', 'Sass', 
    'Advanced JS', 'FP', 'React', 'Redux', 
    'NodeJS', 'Express',
    'Leaflet', 'D3',
    'Python',
    'Ruby', 'Rails', 'ActionCable',
    'MemCached','Redis',
    'MySql', 'ElasticSearch',
    'Jest', 'Rspec','TDD',
    'C', 'C++',
    ],
    {
        radius: 200
    }
)
jobTitleStepper(4);
lettersEvent()
loadSectionScrollTrigger('about')
loadSectionScrollTrigger('project1')
loadSectionScrollTrigger('project2')
loadElementScrollTrigger('about-header', null, "none", 0.5)
loadElementScrollTrigger('project-header', null, "none", 0.5)
loadElementScrollTrigger('contact-header', null, "none", 0.5)
initTilt();

particles();