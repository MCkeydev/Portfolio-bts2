export default class Tools {
  /**
   * Function that capitalize the first letter of a string.
   * @param input string to pass into the function.
   */
  public static capitalizeString(input: string): string {
    const splitString: Array<string> = input.split("");
    splitString[0] = splitString[0].toUpperCase();
    return splitString.join("");
  }

  /**
   * Function that generates a random string.
   * @returns 
   */
  public static randomString(): string {

    return '_' + Math.random().toString(36).substring(2, 5);
  }
}
