describe("shakyDancer", function() {

  var shakyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    shakyDancer = new ShakyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(shakyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have properties x, y', function () {
    expect(shakyDancer).to.have.property('x');
    expect(shakyDancer).to.have.property('y');
  });

  it('should have a `shake` method', function () {
    expect(shakyDancer.shake).to.be.a('function');
  });

  it('`shake` should change x and y', function () {
    var x1 = shakyDancer.x;
    var y1 = shakyDancer.y;
    shakyDancer.shake();
    var x2 = shakyDancer.x;
    var y2 = shakyDancer.y;
    expect(x1).to.not.equal(x2);
    expect(y1).to.not.equal(y2);
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(shakyDancer, "step");
      expect(shakyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(shakyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(shakyDancer.step.callCount).to.be.equal(2);
    });
  });
});
