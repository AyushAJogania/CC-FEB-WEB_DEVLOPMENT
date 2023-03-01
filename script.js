function convertWeight() {
    const inputUnit = document.getElementById("weight-input").value;
    const inputValue = document.getElementById("weight-value").value;
    let outputValue;
    let outputUnit;
    switch (inputUnit) {
      case "mg":
        outputValue = inputValue / 1000000;
        outputUnit = "kg";
        break;
      case "g":
        outputValue = inputValue / 1000;
        outputUnit = "kg";
        break;
      case "kg":
        outputValue = inputValue;
        outputUnit = "kg";
        break;
      case "lb":
        outputValue = inputValue * 0.453592;
        outputUnit = "kg";
        break;
      case "oz":
        outputValue = inputValue * 0.0283495;
        outputUnit = "kg";
        break;
    }
    document.getElementById("weight-result").innerHTML = outputValue + " " + outputUnit;
  }
  
  function convertTemp() {
    const inputUnit = document.getElementById("temp-input").value;
    const inputValue = document.getElementById("temp-value").value;
    let outputValue;
    let outputUnit;
    switch (inputUnit) {
      case "c":
        outputValue = inputValue;
        outputUnit = "°C";
        break;
      case "k":
        outputValue = inputValue - 273.15;
        outputUnit = "°C";
        break;
      case "f":
        outputValue = (inputValue - 32) * (5 / 9);
        outputUnit = "°C";
        break;
    }
    document.getElementById("temp-result").innerHTML = outputValue + " " + outputUnit;
  }
  
  function convertTime() {
    const inputUnit = document.getElementById("time-input").value;
    const inputValue = document.getElementById("time-value").value;
    let outputValue;
    let outputUnit;
    switch (inputUnit) {
      case "s":
        outputValue = inputValue / 3600;
        outputUnit = "hours";
        break;
      case "m":
        outputValue = inputValue / 60;
        outputUnit = "hours";
        break;
      case "h":
        outputValue = inputValue;
        outputUnit = "hours";
        break;
      case "d":
        outputValue = inputValue * 24;
        outputUnit = "hours";
        break;
      case "mo":
        outputValue = inputValue * 730.001;
        outputUnit = "hours";
        break;
      case "y":
        outputValue = inputValue * 8760;
        outputUnit = "hours";
        break;
    }
    document.getElementById("time-result").innerHTML = outputValue + " " + outputUnit;
  }
  function convertLength() {
    const inputUnit = document.getElementById("length-input").value;
    const inputValue = document.getElementById("length-value").value;
    let outputValue;
    let outputUnit;
    switch (inputUnit) {
      case "mm":
        outputValue = inputValue / 1000;
        outputUnit = "m";
        break;
      case "cm":
        outputValue = inputValue / 100;
        outputUnit = "m";
        break;
      case "m":
        outputValue = inputValue;
        outputUnit = "m";
        break;
      case "km":
        outputValue = inputValue * 1000;
        outputUnit = "m";
        break;
      case "mi":
        outputValue = inputValue * 1609.34;
        outputUnit = "m";
        break;
      case "in":
        outputValue = inputValue * 0.0254;
        outputUnit = "m";
        break;
      case "ft":
        outputValue = inputValue * 0.3048;
        outputUnit = "m";
        break;
      case "yd":
        outputValue = inputValue * 0.9144;
        outputUnit = "m";
        break;
    }
    document.getElementById("length-result").innerHTML = outputValue + " " + outputUnit;
  }