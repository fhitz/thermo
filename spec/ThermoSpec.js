describe('Thermo', function() {

  var thermo;

  it('has a default temperature of 20 degrees', function() {
    thermo = new Thermo();
    expect(thermo.defaultTemperature).toBe(20);
  });

  it('increase temperature by one degree with up button', function() {
    thermo = new Thermo();
    expect(thermo.increaseTemperature()).toEqual(21);
  });

  it('decrease temperature by one degree with down button', function() {
    thermo = new Thermo();
    expect(thermo.decreaseTemperature()).toEqual(19);
  });

  it('minimum temperature is 10 degrees', function() {
    thermo = new Thermo();
    expect(thermo.minimumTemperature).toBe(10);
  });

  it('powerSaveMode on by default and max temperature is 25', function() {
    thermo = new Thermo();
    expect(thermo.maxTemperature).toBe(25);
  });

  it('powerSaveMode off and max temperature is 32 degrees', function() {
    thermo = new Thermo();
    thermo.powerSaveMode = false;
    thermo.powerSaveButton();
    expect(thermo.maxTemperature).toBe(32);
  });

  it('powerSaveMode is on by default', function() {
    thermo = new Thermo();
    expect(thermo.powerSaveMode).toBe(true);
    expect(thermo.maxTemperature).toEqual(25);
  });

  it('can reset to 20 by hitting reset button', function() {
    thermo = new Thermo();
    thermo.resetButton();
    expect(thermo.defaultTemperature).toEqual(20);
  });







}); //thermo
