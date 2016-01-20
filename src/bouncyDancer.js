var BouncyDancer = function(top, left, timeBetweenSteps){
  this.dx = Math.floor((Math.random() * 5)) + 1;
  this.dy = Math.floor((Math.random() * 5)) + 1;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bouncy');
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.move();
};

BouncyDancer.prototype.move = function() {
  if(this.isDancing) {
    this.bounceFromWall();
    this.bounceFromDancer();
    this.x += this.dx;
    this.y += this.dy;
    this.setPosition(this.y, this.x);
  }
};

BouncyDancer.prototype.bounceFromWall = function() {
  if(this.x < 0 || this.x > $('body').width()) {
    this.dx = -this.dx;
  }

  if(this.y < 0 || this.y > $('body').height()) {
    this.dy = -this.dy;
  }
};

BouncyDancer.prototype.bounceFromDancer = function() {
  var thisDancer = this;

  window.dancers.forEach(function(otherDancer) {
    if(thisDancer !== otherDancer) {
      if((thisDancer.x >= otherDancer.x - 10 && thisDancer.x <= otherDancer.x + 10) && (thisDancer.y >= otherDancer.y - 10 && thisDancer.y <= otherDancer.y + 10)) {
        thisDancer.dx = -thisDancer.dx;
        thisDancer.dy = -thisDancer.dy;
        if(otherDancer instanceof BouncyDancer) {
          otherDancer.dx = -otherDancer.dx;
          otherDancer.dy = -otherDancer.dy;
        }
      }
    }
  });
};
