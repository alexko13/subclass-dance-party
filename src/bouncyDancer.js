var BouncyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bouncy');
  this.dx = Math.floor((Math.random() * 5)) + 1;
  this.dy = Math.floor((Math.random() * 5)) + 1;
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.move();
};

BouncyDancer.prototype.move = function() {
  if(this.dx && this.dy){
    if(this.x < 0 || this.x > $('body').width()) {
      this.dx = -this.dx; 
    }
    if(this.y < 0 || this.y > $('body').height()) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
    this.setPosition(this.y, this.x);
  }
};