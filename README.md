# thermo

another thermostat practice exercise app using jasmine testing framework

Which needs to be changed over to the following:

   <!-- include source files here... -->
  <script type="text/javascript" src="src/Javabuzz.js"></script>

  <!-- include spec files here... -->
  <script type="text/javascript" src="spec/JavabuzzSpec.js"></script>
Our directory structure now looks like this:

→ tree
.
├── SpecRunner.html
├── lib
│   └── jasmine-2.0.2
│       ├── boot.js
│       ├── console.js
│       ├── jasmine-html.js
│       ├── jasmine.css
│       ├── jasmine.js
│       └── jasmine_favicon.png
├── spec
│   └── JavabuzzSpec.js
└── src
    └── Javabuzz.js
Now we need to start writing our tests. YAY TESTING! <3

The first thing to remember with Jasmine, is it lacks the 'context' method that RSpec provides for Ruby. But don't cry little ones - we can simply reuse the 'describe' method. At this point, we're going to zoom in to the creation of the describe method. Why? Because it's an excellent way to get used to building methods in Javascript - and it's also how you start a Jasmine test file :zap:

The first rule of Javascript is...
