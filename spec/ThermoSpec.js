describe('Thermo', function() {

  var thermo;

  beforeEach(function() {
    thermo = new Thermo();
  });

  it('has a default temperature of 20 degrees', function() {
    expect(thermo.defaultTemperature).toBe(20);
  });

  it('increase temperature by one degree with up button', function() {
    expect(thermo.increaseTemperature()).toEqual(21);
  });

  it('decrease temperature by one degree with down button', function() {
    expect(thermo.decreaseTemperature()).toEqual(19);
  });

  it('minimum temperature is 10 degrees', function() {
    expect(thermo.minimumTemperature).toBe(10);
  });

  it('powerSaveMode on by default and max temperature is 25', function() {
    expect(thermo.maxTemperature).toBe(25);
  });

  it('powerSaveMode off and max temperature is 32 degrees', function() {
    thermo.powerSaveMode = false;
    thermo.powerSaveButton();
    expect(thermo.maxTemperature).toBe(32);
  });

  it('powerSaveMode is on by default', function() {
    expect(thermo.powerSaveMode).toBe(true);
    expect(thermo.maxTemperature).toEqual(25);
  });

  it('can reset to 20 by hitting reset button', function() {
    thermo.resetButton();
    expect(thermo.defaultTemperature).toEqual(20);
  });

  it('display color should be green when under 18', function() {
    thermo.defaultTemperature = 15;
    thermo.setColor();
    expect(thermo.color).toBe('green');
  });

  it('display color should be yellow when over 18 and under 25', function() {
    thermo.defaultTemperature = 22;
    thermo.setColor();
    expect(thermo.color).toBe('yellow');
  });

  it('display color should be red when over 25', function() {
    thermo.defaultTemperature = 35;
    thermo.setColor();
    expect(thermo.color).toBe('red');
  });









}); //thermo
