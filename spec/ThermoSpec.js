describe('Thermo', function() {

  var thermo;

  it('has a default a default temperature of 20 degrees', function() {
    thermo = new Thermo();
    expect(thermo.defaultTemperature(20)).toEqual(20);
  });







}); //thermo
