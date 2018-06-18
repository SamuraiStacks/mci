#! /usr/bin/env node
const chalk = require("chalk"),
      clear = require("clear"),
      ascii = require("figlet")
let args = process.argv.slice(2)

try {
    const cmd = require(`./cmds/${args[0]}`)
    cmd.run(args)
} catch(err) {
    if(err.code === "MODULE_NOT_FOUND") {
        const cmd = require(`./cmds/help.js`)
        cmd.run(chalk, clear, ascii, args)
    } else {
        console.log(err.message)
    }
}