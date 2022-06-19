import chalk from "chalk";

/**
 * @class
 * @classdesc The class responsible for logging in the console.
 */
export class Logger {
  /**
   * @returns {string}
   */
  get time() {
    return new Date().toLocaleString("ru");
  }

  /**
   *
   * @param {string} message
   * @param {string} tag
   * @returns {void}
   */
  log(message, tag) {
    return console.log(`[${this.time} | ${tag}] ${chalk.green(message)}`);
  }

  /**
   *
   * @param {string} message
   * @param {string} tag
   * @returns {void}
   */
  warn(message, tag) {
    return console.log(
      `[${this.time} | ${tag}] ${chalk.yellowBright(message)}`
    );
  }

  /**
   *
   * @param {string} message
   * @param {string} tag
   * @returns {void}
   */
  error(message, tag) {
    return console.log(`[${this.time} | ${tag}] ${chalk.red(message)}`);
  }
}
