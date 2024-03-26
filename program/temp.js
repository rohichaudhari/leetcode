// Convert the Temperature
// Kelvin = Celsius + 273.15
// Fahrenheit = Celsius * 1.80 + 32.00
// Example:
// Input: celsius = 36.50
// Output: [309.65000,97.70000]
// Explanation: Temperature at 36.50 Celsius converted in Kelvin is 309.65 and converted in Fahrenheit is 97.70.

var convertTemperature = function(celsius) {
    return [273.15 + celsius,1.8 * celsius + 32] 
};