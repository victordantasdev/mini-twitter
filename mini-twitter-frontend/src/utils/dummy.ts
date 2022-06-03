/**  
 * A simple function to do basic operations 
 */
export const dummyCalc = {
  /**
   * Sum two values 
   * @param a The first value
   * @param b The second value
   */
  sum: (a: number, b: number) => a + b, 
  
  /**
   * Subtract two values 
   * @param a The first value
   * @param b The second value
   */
  sub: (a: number, b: number) => a - b, 
  
  /**
   * Multiply two values 
   * @param a The first value
   * @param b The second value
   */
  mul: (a: number, b: number) => a * b, 
  
  /**
   * Divide two values 
   * @param a The first value
   * @param b The second value
   */
  div: (a: number, b: number) => a / b, 
};

dummyCalc.sub(10, 20);
