$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var counter = 0;
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random() * 0.75,
      $("body").width() * Math.random() * 0.85,
      Math.random() * 1000
    );
    
    window.dancers.push(dancer);
    window.dancers[counter].addClass
    $('body').append(dancer.$node);
    $('.dancer').draggable();
    // $('.dancer').on('click', function() {
    //   animateDiv();

  });

  $('.lineUpButton').on('click', function(event) {
    var lines = 0;
    window.dancers.forEach(function(dancer, i) {
      var num = i % 5;
      var y = $("body").height() * num * .15 + 100;
      if (i % 5 === 0) {
        lines++;
      }
      var x = $("body").width() * .18 * lines;
      dancer.setPosition(y, x);
    });
  });

});

var makeNewPosition = function() {
    
  // Get viewport dimensions (remove the dimension of the div)
  var h = $(window).height() - 50;
  var w = $(window).width() - 50;
    
  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);
    
  return [nh, nw];
};

var animateDiv = function() {
  var newq = makeNewPosition();
  var oldq = $('.dancer').offset();
  var speed = calcSpeed([oldq.top, oldq.left], newq);
    
  $('.dancer').animate({ top: newq[0], left: newq[1] }, speed, function() {
    animateDiv();        
  });
    
};

var calcSpeed = function(prev, next) {  
  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);
    
  var greatest = x > y ? x : y;
    
  var speedModifier = 0.05;

  var speed = Math.ceil(greatest / speedModifier);

  return speed;

};