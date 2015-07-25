var Thermo = function() {
  this.defaultTemperature = 20;
  this.minimumTemperature = 10;
  this.powerSaveMode = true;
  this.maxTemperature = 25;
  this.color = 'red';
};

Thermo.prototype.increaseTemperature = function() {
  if ((this.powerSaveMode == true && this.defaultTemperature < 25) ||
     (this.powerSaveMode == false && this.defaultTemperature < 32)) {
       return this.defaultTemperature += 1;
  } else {
    return this.defaultTemperature;
  }
};

Thermo.prototype.decreaseTemperature = function() {
  if (this.defaultTemperature > 10) {
    return this.defaultTemperature -= 1;
  } else {
    return this.defaultTemperature = 10;
  }
};

Thermo.prototype.powerSaveButton = function() {
  if (this.powerSaveMode == true) {
    this.maxTemperature = 25;
    if (this.defaultTemperature > 25) {
      this.defaultTemperature = 25;
    }
  } else if (this.powerSaveMode == false) {
    this.maxTemperature = 32;
  } else {
    this.powerSaveMode = true;
    this.maxTemperature = 25;
  }
};

Thermo.prototype.resetButton = function() {
   this.defaultTemperature = 20;
   this.powerSaveMode = true;
};

Thermo.prototype.setColor = function() {
    if ( this.defaultTemperature <= 18 ) {
      this.color = 'rgb(216, 236, 216)';
    } else if ( this.defaultTemperature > 18 && this.defaultTemperature < 25) {
      this.color = 'rgb(247, 247, 220)';
    } else {
      this.color = 'rgb(245, 193, 193)';
    }
};
