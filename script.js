function calculate() {
    // Get the input values
    var value1 = parseFloat(document.getElementById('value1').value);
    var operator = document.getElementById('operator').value;
    var value2 = parseFloat(document.getElementById('value2').value);

    // Perform the calculation
    var result;
    switch (operator) {
        case '+':
            result = value1 + value2;
            break;
        case '-':
            result = value1 - value2;
            break;
        case '*':
            result = value1 * value2;
            break;
        case '/':
            if (value2 != 0) {
                result = value1 / value2;
            } else {
                alert("Division by zero is not allowed.");
                return; // Exit the function early
            }
            break;
    }

    // Display the result
    document.getElementById('result').textContent = result;
}