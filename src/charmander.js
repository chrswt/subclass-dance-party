var Charmander = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="dancer wobble"</span>');
  this.$node.addClass("animated infinite swing charmander");

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.oldStep = this.step;
};

Charmander.prototype = Object.create(MakeDancer.prototype);
Charmander.prototype.constructor = Charmander;
Charmander.prototype.step = function() {
  var x = this.left;
  var y = this.top;

  this.setPosition(x + Math.random(10), y + Math.random(-10));

  // call the old version of step at the beginning of any call to this new version of step
  MakeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};
