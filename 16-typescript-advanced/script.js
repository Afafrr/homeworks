var BasicCalculator = /** @class */ (function () {
    function BasicCalculator() {
    }
    /**
     * Adds two numbers
     * @param {number} num1
     * @param {number} num2
     * @returns {Result}
     */
    BasicCalculator.prototype.add = function (num1, num2) {
        return { value: num1 + num2, error: "" };
    };
    /**
     * Subtracts one number from another.
     * @param {number} num1 - The first number.
     * @param {number} num2 - The second number.
     * @returns {Result} - The result of the subtraction.
     */
    BasicCalculator.prototype.subtract = function (num1, num2) {
        return { value: num1 - num2, error: "" };
    };
    /**
     * Multiplies two numbers.
     * @param {number} num1 - The first number.
     * @param {number} num2 - The second number.
     * @returns {Result} - The result of the multiplication.
     */
    BasicCalculator.prototype.multiply = function (num1, num2) {
        return { value: num1 * num2, error: "" };
    };
    /**
     * Divides one number by another.
     * @param {number} num1 - The dividend.
     * @param {number} num2 - The divisor.
     * @returns {Result} - The result of the division.
     */
    BasicCalculator.prototype.divide = function (num1, num2) {
        if (num2 === 0)
            return { error: "Divider can't be 0" };
        return { value: num1 / num2, error: "" };
    };
    /**
     * Calculates the power of a base to an exponent.
     * @param {number} base - The base number.
     * @param {number} exponent - The exponent.
     * @returns {Result} - The result of the power operation.
     */
    BasicCalculator.prototype.power = function (base, exponent) {
        if (exponent < 0)
            return { error: "Exponent must be a positive integer" };
        return { value: Math.pow(base, exponent), error: "" };
    };
    /**
     * Calculates the square root of a number.
     * @param {number} num - The number to calculate the square root of.
     * @returns {Result} - The result of the square root operation.
     */
    BasicCalculator.prototype.sqrt = function (num) {
        if (num < 0)
            return { error: "Cannot calculate square root of negative number" };
        return { value: Math.sqrt(num), error: "" };
    };
    return BasicCalculator;
}());
var calc = new BasicCalculator();
console.log(calc.add(2, 5));
