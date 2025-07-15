function convertTemperature() {
    const temp = parseFloat(document.getElementById('inputTemp').value);
    const type = document.getElementById('inputType').value;
    const resultArea = document.getElementById('resultArea');

    if (isNaN(temp)) {
        resultArea.textContent = "Please enter a valid number.";
        return;
    }

    let celsius, fahrenheit, kelvin;

    switch (type) {
        case 'celsius':
            celsius = temp;
            fahrenheit = (celsius * 9/5) + 32;
            kelvin = celsius + 273.15;
            resultArea.innerHTML = 
                `${celsius.toFixed(2)} °C<br>` +
                `${fahrenheit.toFixed(2)} °F<br>` +
                `${kelvin.toFixed(2)} K`;
            break;
        case 'fahrenheit':
            fahrenheit = temp;
            celsius = (fahrenheit - 32) * 5/9;
            kelvin = celsius + 273.15;
            resultArea.innerHTML = 
                `${celsius.toFixed(2)} °C<br>` +
                `${fahrenheit.toFixed(2)} °F<br>` +
                `${kelvin.toFixed(2)} K`;
            break;
        case 'kelvin':
            kelvin = temp;
            celsius = kelvin - 273.15;
            fahrenheit = (celsius * 9/5) + 32;
            resultArea.innerHTML = 
                `${celsius.toFixed(2)} °C<br>` +
                `${fahrenheit.toFixed(2)} °F<br>` +
                `${kelvin.toFixed(2)} K`;
            break;
    }
}
