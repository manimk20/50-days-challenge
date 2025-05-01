function convertToFahrenheit() {
    const celsius = parseFloat(document.getElementById("celsius").value);
    if (isNaN(celsius)) {
      document.getElementById("result").textContent = "Please enter a valid number";
    } else {
      const fahrenheit = (celsius * 9/5) + 32;
      document.getElementById("result").textContent = `Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
    }
}