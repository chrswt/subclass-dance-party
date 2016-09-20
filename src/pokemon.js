var Bulbasaur = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("animated infinite bulbasaur");
};

Bulbasaur.prototype = Object.create(MakeDancer.prototype);
Bulbasaur.prototype.constructor = Bulbasaur;
Bulbasaur.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
};

var Charmander = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("animated infinite swing charmander");
};

Charmander.prototype = Object.create(MakeDancer.prototype);
Charmander.prototype.constructor = Charmander;
Charmander.prototype.step = function() {
  
  MakeDancer.prototype.step.call(this);
};

var Alakazam = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("animated infinite flip alakazam");
};

Alakazam.prototype = Object.create(MakeDancer.prototype);
Alakazam.prototype.constructor = Alakazam;
Alakazam.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
};
