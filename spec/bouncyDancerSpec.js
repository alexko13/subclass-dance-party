describe("bouncyDancer", function() {

  var bouncyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bouncyDancer = new BouncyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(bouncyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have properties x, y, dx, and dy', function () {
    expect(bouncyDancer).to.have.property('x');
    expect(bouncyDancer).to.have.property('y');
    expect(bouncyDancer).to.have.property('dx');
    expect(bouncyDancer).to.have.property('dy');
  });

  it('should have a `move` method', function () {
    expect(bouncyDancer.move).to.be.a('function');
  });

  it('`move` should change x and y', function () {
    var x1 = bouncyDancer.x;
    var y1 = bouncyDancer.y;
    bouncyDancer.move();
    var x2 = bouncyDancer.x;
    var y2 = bouncyDancer.y;
    expect(x1).to.not.equal(x2);
    expect(y1).to.not.equal(y2);
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(bouncyDancer, "step");
      expect(bouncyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(bouncyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bouncyDancer.step.callCount).to.be.equal(2);
    });
  });
});
