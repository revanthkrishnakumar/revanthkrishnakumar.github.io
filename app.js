var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
  autoStart: true,
  cursor: '¦',
  strings: ['My name is Revanth, and I am a full stack developer.']
});

typewriter
  .deleteAll(1)
  .pauseFor(50)
  // .typeString('My name is Tiffany, and I am a frontend dev and wannabe hacker.')
  .deleteAll(1)
  .typeString('As a full stack dev I love to try the new technologies and concepts in all the stacks of the software development.')
  .pauseFor(300)
  .deleteAll(1)
  .typeString('Find me online: <br />')
  .pauseFor(300)
  .typeString('<a href="http://linkedin.com/in/rev">LinkedIn</a> <br />')
  .typeString('<a href="http://twitter.com/rev_rkk">Twitter</a> <br />')
  .typeString('<a href="http://github.com/revrkk">GitHub</a> <br />')
  .pauseFor(1000)
