## Welcome!

<strong>Welcome, this is '@djs-modules/leveling' module!</strong> <br />
<strong>"@djs-modules/leveling" is a module that allows you to make a level system in your Discord bot.</strong>

## Features

<span><strong>[🔑] Built in TypeScript</strong></span> <br />
<span><strong>[⚙] 100% Promise-based</strong></span> <br />
<span><strong>[🙂] TypeScript Support</strong></span> <br />
<span><strong>[👍] Discord.JS v13</strong></span>

## Requirements

<span><strong>[1] [NodeJS v16 or Above](https://nodejs.org/)</strong></span> <br />
<span><strong>[2] [Discord.JS](https://npmjs.com/package/discord.js/)</strong></span> <br />

## Quick Example

```js
const { Client, Intents } = require("discord.js");
const { Manager } = require("@djs-modules/leveling");

const client = new Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_PRESENCES",
    "GUILD_MEMBERS",
    "GUILD_BANS",
  ],
});

const leveling = new Manager({
  dbName: "leveling",
  dbPath: "./",
});
```

## This module uses

<span><strong>[1] [Discord.JS](https://npmjs.com/package/discord.js/)</strong></span> <br />
<span><strong>[2] [enmap (database)](https://npmjs.com/package/enmap/)</strong></span> <br />

## Links

<span><strong>[1] [Documentation (soon)](https://djs-modules.js.org/)</strong></span> <br />
<span><strong>[2] [Module Author](https://npmjs.com/~djs-modules/)</strong></span> <br />
<span><strong>[3] [Support Server](https://discord.gg/zsTgXs24k2/)</strong></span>
