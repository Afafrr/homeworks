interface Result {
  value?: number;
  error: string;
}
interface ICalculator {
  add(num1: number, num2: number): Result;
  subtract(num1: number, num2: number): Result;
  multiply(num1: number, num2: number): Result;
  divide(num1: number, num2: number): Result;
  power(base: number, exponent: number): Result;
  sqrt(num: number): Result;
}

class BasicCalculator implements ICalculator {
  /**
   * Adds two numbers
   * @param {number} num1
   * @param {number} num2
   * @returns {Result}
   */
  add(num1: number, num2: number): Result {
    return { value: num1 + num2, error: "" };
  }

  /**
   * Subtracts one number from another.
   * @param {number} num1 - The first number.
   * @param {number} num2 - The second number.
   * @returns {Result} - The result of the subtraction.
   */
  subtract(num1: number, num2: number): Result {
    return { value: num1 - num2, error: "" };
  }
  /**
   * Multiplies two numbers.
   * @param {number} num1 - The first number.
   * @param {number} num2 - The second number.
   * @returns {Result} - The result of the multiplication.
   */
  multiply(num1: number, num2: number): Result {
    return { value: num1 * num2, error: "" };
  }

  /**
   * Divides one number by another.
   * @param {number} num1 - The dividend.
   * @param {number} num2 - The divisor.
   * @returns {Result} - The result of the division.
   */
  divide(num1: number, num2: number): Result {
    if (num2 === 0) return { error: "Divider can't be 0" };
    return { value: num1 / num2, error: "" };
  }

  /**
   * Calculates the power of a base to an exponent.
   * @param {number} base - The base number.
   * @param {number} exponent - The exponent.
   * @returns {Result} - The result of the power operation.
   */
  power(base: number, exponent: number): Result {
    if (exponent < 0) return { error: "Exponent must be a positive integer" };
    return { value: base ** exponent, error: "" };
  }

  /**
   * Calculates the square root of a number.
   * @param {number} num - The number to calculate the square root of.
   * @returns {Result} - The result of the square root operation.
   */
  sqrt(num: number): Result {
    if (num < 0)
      return { error: "Cannot calculate square root of negative number" };
    return { value: Math.sqrt(num), error: "" };
  }
}

const calc = new BasicCalculator();
console.log(calc.add(2, 5));
