import { GuildMember, Options } from "../constants";
import { Database } from "./Database";
import { XPManager } from "./modules/XP";
import { LevelManager } from "./modules/Level";

export interface Manager {
  options: Options;
  database: Database;
  ready: boolean;

  xp: XPManager;
  level: LevelManager;
}

/**
 * @class
 * @classdesc The main class that controls the level system.
 */
export class Manager {
  /**
   * @param {Options} options Module Options
   */
  constructor(options: Options) {
    /**
     * Module Options
     * @type {Options}
     */
    this.options = options;

    /**
     * Database
     * @type {Database}
     */
    this.database = new Database(this.options);

    /**
     * Module State
     * @type {boolean}
     */
    this.ready = false;

    /**
     * XP Manager
     * @type {XPManager}
     */
    this.xp = new XPManager(this.options);

    /**
     * Level Manager
     * @type {LevelManager}
     */
    this.level = new LevelManager(this.options);
  }

  /**
   * Method that returns member statistics (XP, Level)
   *
   * @param {string} memberID Member ID
   * @param {string} guildID Guild ID
   * @returns {Promise<GuildMember>}
   */
  getStatistics(memberID: string, guildID: string): Promise<GuildMember> {
    return new Promise(async (res, rej) => {
      await this.database.createGuildData(guildID);
      const data = await this.database.createMemberData(memberID, guildID);

      return res(data);
    });
  }
}

/**
 * @typedef {Object} Options
 * @prop {string} dbName Database Name
 * @prop {string} [dbPath] Path for Database File
 */

/**
 * @typedef {Object} GuildData
 * @prop {string} id Guild ID
 * @prop {GuildMember[]} members Guild Members Data
 */

/**
 * @typedef {Object} GuildMember
 * @prop {string} id Member ID
 * @prop {number} level Member Level
 * @prop {number} xp Member XP
 */
