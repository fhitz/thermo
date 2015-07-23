var Thermo = function() {
  this.defaultTemperature = 20;
};

Thermo.prototype.increaseTemperature = function() {
  return this.defaultTemperature + 1;
};
