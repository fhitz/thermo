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







}); //thermo
