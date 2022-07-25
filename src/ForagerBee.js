// this new constructor inheris from Bee, but it wont change Bee properties/methods!
var ForagerBee = function() {
  // get properties
  Bee.call(this);

  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];

};

ForagerBee.prototype = Object.create(Bee.prototype);

ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(string) {
  this.treasureChest.push(string);
}
