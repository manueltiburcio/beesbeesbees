// bee is our subclass constructor
var Bee = function() {
  // run Grub and inherit Grub properties
  Grub.call(this);


  // now change our Bee properties to different values specific to Bee
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

// inherit all methods of Grub, but they are still Grub's
Bee.prototype = Object.create(Grub.prototype);

// change constructor to be our subclass Bee constructor
Bee.prototype.constructor = Bee;

console.log(Bee.prototype);

