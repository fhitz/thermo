
  thermo = new Thermo();

  function up() {
    thermo.increaseTemperature();
    thermo.setColor();
    document.getElementById('temp').innerHTML = thermo.defaultTemperature;
    document.getElementById('faceplate').style.backgroundColor = thermo.color;
  }

  function down() {
    thermo.decreaseTemperature();
    thermo.setColor();
    document.getElementById('temp').innerHTML = thermo.defaultTemperature;
    document.getElementById('faceplate').style.backgroundColor = thermo.color;
  }

  function reset() {
    thermo.powerSaveMode = true;
    thermo.resetButton();
    thermo.setColor();
    thermo.powerSaveButton();
    document.getElementById('temp').innerHTML = thermo.defaultTemperature;
    document.getElementById('power-saving').innerHTML = "ON";
    document.getElementById('faceplate').style.backgroundColor = thermo.color;
  }

  function psmOn() {
    thermo.powerSaveMode = true;
    thermo.powerSaveButton();
    thermo.setColor();
    document.getElementById('temp').innerHTML = thermo.defaultTemperature;
    document.getElementById('power-saving').innerHTML = "ON";
    document.getElementById('faceplate').style.backgroundColor = thermo.color;
  }

  function psmOff() {
    thermo.powerSaveMode = false;
    thermo.powerSaveButton();
    thermo.setColor();
    document.getElementById('temp').innerHTML = thermo.defaultTemperature;
    document.getElementById('power-saving').innerHTML = "OFF";
    document.getElementById('faceplate').style.backgroundColor = thermo.color;
  }
