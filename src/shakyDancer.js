var ShakyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('shaky');
  this.y = Math.floor(top);
  this.x = Math.floor(left);
};

ShakyDancer.prototype = Object.create(Dancer.prototype);
ShakyDancer.prototype.constructor = ShakyDancer;

ShakyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  this.shake();
};

ShakyDancer.prototype.shake = function() {
  this.x = (this.x % 2 === 0) ? (this.x + 5) : (this.x - 5);
  this.y = (this.y % 2 !== 0) ? (this.y + 5) : (this.y - 5);
  this.setPosition(this.y, this.x);
};