$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerClassName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerClassName = $(this).data("dancer-class-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerConstructor = window[dancerClassName];

    // make a dancer with a random position

    var dancer = new dancerConstructor(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 100
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $(".lineUpButton").on("click", function(event) {
    window.dancers.forEach(function(dancer) {
      dancer.isDancing = false;
      dancer.setPosition(0,0);
      dancer.$node.addClass('linedUp');
    });
  });

  $(".danceButton").on("click", function(event) {
    window.dancers.forEach(function(dancer) {
      dancer.$node.removeClass('linedUp');
      dancer.setPosition($("body").height() * Math.random(), $("body").width() * Math.random());   
      dancer.isDancing = true;
    });
  });

  setInterval(function() {
    $('body').toggleClass('lightsOn');
  }, 500);

});
