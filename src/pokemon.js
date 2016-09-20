var Bulbasaur = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("bulbasaur");
};

Bulbasaur.prototype = Object.create(MakeDancer.prototype);
Bulbasaur.prototype.constructor = Bulbasaur;
Bulbasaur.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
};

var Charmander = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("charmander");
};

Charmander.prototype = Object.create(MakeDancer.prototype);
Charmander.prototype.constructor = Charmander;
Charmander.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
};

var Alakazam = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("animated infinite swing alakazam");
};

Alakazam.prototype = Object.create(MakeDancer.prototype);
Alakazam.prototype.constructor = Alakazam;
Alakazam.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
};

var Exec = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("animated infinite swing exec");
};

Exec.prototype = Object.create(MakeDancer.prototype);
Exec.prototype.constructor = Exec;
Exec.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
};

var Gengar = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("animated infinite swing gengar");
};

Gengar.prototype = Object.create(MakeDancer.prototype);
Gengar.prototype.constructor = Gengar;
Gengar.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
};

var Hypno = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("animated infinite swing hypno");
};

Hypno.prototype = Object.create(MakeDancer.prototype);
Hypno.prototype.constructor = Hypno;
Hypno.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
};

var Snorlax = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("animated infinite swing snorlax");
};

Snorlax.prototype = Object.create(MakeDancer.prototype);
Snorlax.prototype.constructor = Snorlax;
Snorlax.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
};

var Steelix = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("animated infinite swing steelix");
};

Steelix.prototype = Object.create(MakeDancer.prototype);
Steelix.prototype.constructor = Steelix;
Steelix.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
};

var Venom = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("animated infinite swing venom");
};

Venom.prototype = Object.create(MakeDancer.prototype);
Venom.prototype.constructor = Venom;
Venom.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
};

var Wiggly = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("animated infinite swing wiggly");
};

Wiggly.prototype = Object.create(MakeDancer.prototype);
Wiggly.prototype.constructor = Wiggly;
Wiggly.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
};
