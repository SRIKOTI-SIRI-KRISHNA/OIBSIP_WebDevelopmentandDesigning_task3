function convertTemp() {
    const tempInput = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;
    const resultDiv = document.getElementById("result");
    const errorDiv = document.getElementById("error");

    resultDiv.textContent = "";
    errorDiv.textContent = "";

    if (tempInput === "" || isNaN(tempInput)) {
        errorDiv.textContent = "Please enter a valid number.";
        return;
    }

    const temperature = parseFloat(tempInput);
    let convertedTemp = "";
    let resultUnit = "";

    if (unit === "C") {
        convertedTemp = (temperature * 9 / 5) + 32;
        resultUnit = "°F";
    } else {
        convertedTemp = (temperature - 32) * 5 / 9;
        resultUnit = "°C";
    }

    resultDiv.textContent = 
        convertedTemp.toFixed(2) + " " + resultUnit;
}

