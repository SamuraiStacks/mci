#! /usr/bin/env node
let args = process.argv.slice(2)

try {
    const cmd = require(`./cmds/${args[0]}`)
    cmd.run(args)
} catch(err) {
    if(err.code === "MODULE_NOT_FOUND") {
        const cmd = require(`./cmds/help.js`)
        cmd.run(args)
    } else {
        console.log(err.message)
    }
}