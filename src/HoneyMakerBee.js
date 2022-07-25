// Our new constructor inherits from Bee subclass, but its not changing Bee!
var HoneyMakerBee = function() {
  // inherit properties
  Bee.call(this);

  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;

};

// get methods
HoneyMakerBee.prototype = Object.create(Bee.prototype);

HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
}