import chalk from "chalk";

/**
 * @class
 * @classdesc The class responsible for logging in the console.
 */
export class Logger {
  /**
   *
   * @param {string} message
   * @param {string} tag
   * @returns {void}
   */
  log(message, tag) {
    return console.log(`[${tag}] ${chalk.green(message)}`);
  }

  /**
   *
   * @param {string} message
   * @param {string} tag
   * @returns {void}
   */
  warn(message, tag) {
    return console.log(`[${tag}] ${chalk.yellowBright(message)}`);
  }

  /**
   *
   * @param {string} message
   * @param {string} tag
   * @returns {void}
   */
  error(message, tag) {
    return console.log(`[${tag}] ${chalk.red(message)}`);
  }
}
